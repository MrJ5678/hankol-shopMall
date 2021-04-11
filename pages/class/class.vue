<template>
	<view class="animated fadeIn faster d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
		
		<loading-plus v-if="beforeReady"></loading-plus>
		
		<!-- <loading :show="showLoading"></loading> -->
		
		<scroll-view 
			id="leftScroll"
			scroll-y 
			class="flex-1 border-right bg-light-secondary" 
			style="height: 100%;"
			:scroll-top="leftScrollTop"
		>
			<view 
				v-for="(item, index) in cate" 
				:key="index" @tap="changeCate(index)" 
				class="border-bottom border-light-secondary py-1 left-scroll-item" 
				hover-class="bg-light-secondary"
			>
				<view 
					class="py-1 font-md text-muted text-center" 
					:class="activeIndex === index ? 'class-active' : ''" 
					style="box-sizing: border-box;"
				>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<scroll-view 
			scroll-y 
			style="flex: 3.5; height: 100%;" 
			:scroll-top="rightScrollTop"
			:scroll-with-animation="true"
			@scroll="onRightScroll"
		>
			<view class="row right-scroll-item" v-for="(item, index) in list" :key="index">
				<view class="span24-8 text-center py-2" v-for="(item2, index2) in item.list" :key="index2">
					<image 
						:src="item2.src"
						style="height: 120upx;width: 120upx;"
					></image>
					<text class="d-block">{{item2.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	// import loading from '@/components/common/loading.vue';
	import loading from '@/common/mixin/loading.js'
	
	export default {
		mixins: [loading],
		data() {
			return {
				beforeReady: true,
				showLoading: true,
				// 当前选中分类索引
				activeIndex: 0,
				cate: [],
				list: [],
				leftDomsTop: [],
				rightDomsTop: [],
				rightScrollTop: 0,
				cateItemHeight: 0,
				leftScrollTop: 0
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
			this.getElementInfo({
				all: 'left',
				size: true,
				rect: true
			}).then(data => {
				this.leftDomsTop = data.map(v => {
					this.cateItemHeight = v.height
					return v.top
				})
			})
			
			this.getElementInfo({
				all: 'right',
				size: false,
				rect: true
			}).then(data => {
				this.rightDomsTop = data.map(v => v.top)
			})
		},
		methods: {
			// 获取节点信息 
			getElementInfo(object = {}) {
				return new Promise((res, rej) => {
					let option = {
						size: object.size ? true : false,
						rect: object.rect ? true : false,
						scrollOffset: object.scrollOffset ? true : false
					}
					const query = uni.createSelectorQuery().in(this);
					let q = object.all ? query.selectAll(`.${object.all}-scroll-item`) : query.select('#leftScroll')
					
					q.fields(option, data => {
						res(data)
					}).exec();
				})
			},
			getData() {
				for (let i = 0; i < 10; i++) {
					this.cate.push({
						name: "分类" + i
					})
					this.list.push({
						list: []
					})
				}
				for (var i = 0; i < this.list.length; i++) {
					for (var j = 0; j < 24; j++) {
						this.list[i].list.push(
							{
								src: "/static/images/demo/cate-biaozhunban.jpg", 
								name: `分类${i} - 商品${j}`,
							}
						)
					}
				}
				this.$nextTick(() => {
					this.showLoading = false
				})
			},
			// 点击左边分类
			changeCate(index) {
				this.activeIndex = index
				// 滚动到右边 scroll 对应区域
				this.rightScrollTop = this.rightDomsTop[index] + 1
			},
			// 监听右边滚动事件
			async onRightScroll(e) {
				// 匹配当前 scrollTop 所处的索引
				this.rightDomsTop.forEach((v, i) => {
					if(v < e.detail.scrollTop) {
						this.activeIndex = i
						return false
					}
				})
			}
		},
		watch: {
			async activeIndex(newValue, oldValue) {
				// 获取 scroll-view 高度, scrollTop
				// console.log(newValue, oldValue);
				let data = await this.getElementInfo({
					size: true,
					scrollOffset: true
				})
				let height = data.height
				let scrollViewTop = data.scrollTop
				
				// this.leftDomsTop[newValue] + this.cateItemHeight
				// 下边
				if((this.leftDomsTop[newValue] + this.cateItemHeight) >= (height + scrollViewTop)) {
					return this.leftScrollTop = this.leftDomsTop[newValue] + this.cateItemHeight - height
				}
				// 上边
				if(scrollViewTop >= this.cateItemHeight) {
					this.leftScrollTop = this.leftDomsTop[newValue]
				}
			}
		}
	}
</script>

<style>
.class-active {
	border-left: 8upx solid #7d1d29;
	color: #7d1d29!important;
}
</style>
