<template>
	<view>
		<!-- 地址选择 -->
		<view class="d-flex a-center px-3 main-bg-color text-white" hover-class="main-bg-hover-color" style="height: 250rpx;"  @click="openPathList">
			<view>
				<template v-if="path">
					<view class="d-flex a-center font-weight font-md font-lg">
						{{path.name}} {{path.phone}}
						<view v-if="path.isDefault" class="border border-white rounded px-1 font ml-2">默认</view>
					</view>
					<view class="font">
						{{path.path}} {{path.detailPath}}
					</view>
				</template>
				<template v-else>
					<view class="d-flex a-center font-weight font-md font-lg">
						请选择收货地址
					</view>
				</template>
			</view>
			<view class="iconfont icon-you ml-auto"></view>
		</view>
		
		<view style="border-top-left-radius: 20rpx;border-top-right-radius: 20rpx;margin-top: -20rpx;overflow: hidden;">
			<view class="bg-white">
				<uni-list-item
					showArrow
				>
					<view class="d-flex">
						<image 
							src="/static/images/demo/cate-biaozhunban.jpg" 
							style="height: 100rpx;width: 100rpx;"
							class="rounded mr-2"
						>
						</image>
						<image
							src="/static/images/demo/cate-biaozhunban.jpg" 
							style="height: 100rpx;width: 100rpx;"
							class="rounded mr-2"
						>
						</image>
						<image
							src="/static/images/demo/cate-biaozhunban.jpg" 
							style="height: 100rpx;width: 100rpx;"
							class="rounded mr-2"
						>
						</image>
					</view>
					<view slot="rightContent">
						共3件
					</view>
				</uni-list-item>
				<uni-list-item title="商品总价">
					<view slot="rightContent" class="">
						<price color="text-dark">798.00</price>
					</view>
				</uni-list-item>
				<uni-list-item title="运费">
					<view slot="rightContent">包邮</view>
				</uni-list-item>
				<uni-list-item title="优惠卷" showArrow>
					<view slot="rightContent" class="text-light-muted">无可用</view>
				</uni-list-item>
				<uni-list-item>
					<text class="main-text-color">总计</text>
					<view slot="rightContent">
						<price>798.00</price>
					</view>
				</uni-list-item>
				<divider></divider>
				<uni-list-item title="发票" showArrow clickable @click="openOrderInvoice">
					<view slot="rightContent">电子发票-个人</view>
				</uni-list-item>
			</view>
		</view>
		
		<view class="position-fixed d-flex a-center j-end border bottom-0 left-0 right-0 bg-white p-2 font-md">
			合计:
			<view class="ml-2">
				<price>798.00</price>
			</view>
			<view 
				class="ml-2 px-2 py-1 rounded main-bg-color text-white" 
				hover-class="main-bg-hover-color"
				@click="openPayMethods"
			>
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import price from '@/components/common/price.vue'
	import {mapGetters} from 'vuex'
	
	export default {
		components:{uniListItem, price},
		data() {
			return {
				path: false
			}
		},
		computed: {
			...mapGetters(['getDefaultPath'])
		},
		onLoad() {
			if(this.getDefaultPath.length) {
				this.path = this.getDefaultPath[0]
			}
			// 开启监听选择收货地址事件
			uni.$on('choosePath', (res) => {
				console.log('接收到参数', res);
				this.path = res
			})
		},
		onUnload() {
			// 关闭监听
			uni.$off('choosePath', () => {
				console.log('关闭监听收货地址');
			})
		},
		methods: {
			openPathList() {
				uni.navigateTo({
					url: '../user-path-list/user-path-list?type=choose',
				});
			},
			openOrderInvoice() {
				uni.navigateTo({
					url: '../order-invoice/order-invoice',
				});
			},
			openPayMethods() {
				uni.navigateTo({
					url: '../pay-methods/pay-methods',
				});
			}
		}
	}
</script>

<style>

</style>
