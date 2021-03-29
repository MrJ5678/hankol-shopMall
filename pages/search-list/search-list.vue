<template>
	<view>
		<!-- 筛选栏 -->
		<view class="d-flex border-top border-bottom a-center" style="height: 100upx;">
			<view 
				v-for="(item, index) in screen.list"
				:key="index"
				@tap="changeScreen(index)"
				class="flex-1 d-flex a-center j-center font-md"
			>
				<text :class="screen.currentIndex === index ? 'main-text-color' : 'text-muted'">{{item.name}}</text>
				<view>
					<view 
						class="iconfont icon-paixu-shengxu line-h0"
						:class="item.status === 1 ? 'main-text-color' : 'text-light-muted'"
					></view>
					<view 
						class="iconfont icon-paixu-jiangxu line-h0"
						:class="item.status === 2 ? 'main-text-color' : 'text-light-muted'"
					>
					</view>
				</view>
			</view>
			<view class="flex-1 d-flex a-center j-center main-text-color" @click="showDrawer('showRight')">筛选</view>
		</view>
		
		<!-- 抽屉 -->
		<uni-drawer ref="showRight" mode="right" :mask-click="false" :width="330">
			<view @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></view>
			<!-- card -->
			<card 
				headTitle="系列" 
				:headBorderBottom="false"
				:headTitleWeight="false"
			>
				<hq-radio-group :label="label" :seletedIndex.sync="label.seletedIndex"/>
			</card>
			
			<!-- 按钮 -->
			<view class="position-fixed bottom-0 right-0 w-100">
				<view class="d-flex m-2">
					<view class="mr-2 flex-1 main-bg-color rounded text-white font-md py-2 text-center" hover-class="main-bg-hover-color">确定</view>
					<view class="flex-1 py-2 border border-light-secondary rounded text-center" hover-class="bg-light-secondary">重置</view>				
				</view>
			</view>
		</uni-drawer>
		
		<!-- 列表 -->
		<block 
			v-for="(item, index) in list"
			:key="index"
		>
			<search-list :item="item" :index="index" />
		</block>
	</view>
</template>

<script>
	import uniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer.vue'
	import card from '@/components/common/card.vue'
	import hqRadioGroup from '@/components/common/radio-group.vue'
	
	import searchList from '@/components/search-list/search-list.vue'
	
	export default {
		components: {uniDrawer, card, hqRadioGroup, searchList},
		data() {
			return {
				screen: {
					currentIndex: 0,
					list: [
						{name: '综合', status: 1},
						{name: '销量', status: 0},
						{name: '价格', status: 0}
					]
				},
				showRight: false,
				label: {
					seletedIndex: 0,
					list: [
						{name: '标准版'},
						{name: '经典版'},
						{name: '半月坛'},
						{name: '中国红'},
						{name: '家藏'},
						{name: '留香'},
					]
				},
				list: [
					{
						title: '标准版',
						titlePic: '/static/images/demo/list/list-biaozhun.jpeg',
						desc: '味道浑厚 / 酒体纯熟 / 价格亲民 / 广受喜爱',
						pprice: '439'
					},
					{
						title: '标准版',
						titlePic: '/static/images/demo/list/list-biaozhun.jpeg',
						desc: '味道浑厚 / 酒体纯熟 / 价格亲民 / 广受喜爱',
						pprice: '439'
					},
					{
						title: '标准版',
						titlePic: '/static/images/demo/list/list-biaozhun.jpeg',
						desc: '味道浑厚 / 酒体纯熟 / 价格亲民 / 广受喜爱',
						pprice: '439'
					},
					{
						title: '标准版',
						titlePic: '/static/images/demo/list/list-biaozhun.jpeg',
						desc: '味道浑厚 / 酒体纯熟 / 价格亲民 / 广受喜爱',
						pprice: '439'
					},
					{
						title: '标准版',
						titlePic: '/static/images/demo/list/list-biaozhun.jpeg',
						desc: '味道浑厚 / 酒体纯熟 / 价格亲民 / 广受喜爱',
						pprice: '439'
					},
				]
			}
		},
		methods: {
			changeScreen(index) {
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				
				if(oldIndex === index) {
					return oldItem.status = oldItem.status === 1 ? 2 : 1
				}
				
				let newItem = this.screen.list[index]
				// 移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				// 增加新激活状态
				newItem.status = 1
			},
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			// change(e, type) {
			// 	console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
			// 	this[type] = e
			// }
		}
	}
</script>

<style>
.radio-active {
	border-color: #800002!important;
	color: #800002!important;
	background: #f7e6e4 !important;
}
</style>
