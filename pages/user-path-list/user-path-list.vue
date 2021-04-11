<template>
	<view>
		<block 
			v-for="(item, index) in list"
			:key="index"
		>
			<uni-swipe-action>
				<uni-swipe-action-item 
					:right-options="options" 
					@click="bindClick($event, index)"
				>
					<uni-list-item showArrow style="width: 100%;">
						<view class="text-secondary" @click="choose(item)">
							<view class="d-flex a-center">
								<text class="main-text-color">{{item.name}}</text>
								{{item.phone}}
								<text v-if="item.isDefault" class="main-text-color">[默认]</text>
							</view>
							<view>
								{{item.path}}
							</view>
							<view>{{item.detailPath}}</view>
						</view>
					</uni-list-item>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</block>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue'
	import {mapState, mapMutations} from 'vuex'
	
	export default {
		components: {uniListItem, uniSwipeAction, uniSwipeActionItem},
		data() {
			return {
				// 是否从 order-confirm 页面跳转
				isChoose: false,
				options: [
					{
						text: '修改',
						style: {
							backgroundColor: '#143e78'
						}
					}, {
						text: '删除',
						style: {
							backgroundColor: '#7d1d29'
						}
					}
				],
				
			}
		},
		computed: {
			...mapState({
				'list': state => state.path.list
			})
		},
		onLoad(e) {
			if(e.type === 'choose') {
				this.isChoose = true
			}
		},
		// 监听导航栏按钮点击
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				uni.navigateTo({
					url: '/pages/user-path-edit/user-path-edit'
				})
			}
		},
		methods: {
			...mapMutations(['deletePath']),
			bindClick(value, i) {
				console.log(value);
				switch (value.index){
					case 0: // 修改
						let objectString = JSON.stringify({
							index: i,
							item: this.list[i]
						})
						
						uni.navigateTo({
							url: `../user-path-edit/user-path-edit?data=${objectString}`,
						});
						break;
					case 1:	// 删除
						uni.showModal({
							content: '是否删除该地址?',
							success: (res) => {
								if (res.confirm) {
									this.deletePath(i)
									uni.showToast({
										title: '删除成功!'
									})
								} 
							}
						});
						
						break;
				}
			},
			// 选择收货地址
			choose(item) {
				if(this.isChoose) {					
					// 通知订单提交页修改收货地址
					uni.$emit('choosePath', item)
					// 关闭当前页
					uni.navigateBack({delta:1})
				}
			}
		}
	}
</script>

<style>

</style> 