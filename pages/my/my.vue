<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center" style="height: 320rpx;">
			<view 
				class="iconfont icon-xiaoxi position-absolute text-light-muted" 
				style="font-size: 50rpx;top: 75rpx;right: 20rpx;z-index: 100;">
			</view>
			<image 
				src="../../static/images/demo/search-page-banner.jpeg" 
				style="height: 320rpx;width: 100%;"
			></image>
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx;">
				<image 
					src="../../static/images/demo/demo6.jpg"
					mode=""
					style="height: 145rpx;width: 145rpx;border: 5rpx solid;"
					class="rounded-circle border-light ml-4"
				></image>
				<view class="ml-2 text-dark font-md">昵称</view>
				<view class="d-flex a-center j-center ml-auto a-self-end px-2" style="height:70rpx;background-color: #ffd43f;color: #cc4a00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;">
					<view class="line-h iconfont icon-huangguan mr-1"></view>
					会员积分 199
				</view>
			</view>
		</view>
		
		<!-- 图标分类 -->
		<card style="position: relative;margin-top: -30rpx;z-index: 999;" class="mx-1 rounded bg-light-secondary">
			<view slot="title" class="d-flex j-sb a-center">
				<text class="font-md font-weight">我的订单</text>
				<view class="text-secondary font">
					全部订单
					<text class="iconfont icon-you font"></text>
				</view>
			</view>
			
			<view class="d-flex a-center rounded" style="overflow: hidden;">
				<view 
					class="flex-1 d-flex j-center bg-white"					
					v-for="i in 4" 
					:key="i"
				>
					<view 
						class="d-flex flex-column a-center my-1 p-1" 
						hover-class="bg-light-secondary"
						style="border-radius: 20rpx;"
					>
						<view class="iconfont icon-zhifubao font-md line-h font-lg"></view>
						<view class="">待付款</view>
					</view>
				</view>
			</view>
		</card>
		
		<divider></divider>
		
		<view class="mx-1 rounded" style="overflow: hidden;">
			<uni-list-item
				title="品鉴会员"
				clickable
				showExtraIcon
				showArrow
				leftIcon="icon-VIP"
				leftIconStyle="color: #fdbf2e;"
			></uni-list-item>
			<uni-list-item
				title="会员中心"
				clickable
				showExtraIcon
				showArrow
				leftIcon="icon-huangguan"
				leftIconStyle="color: #fcbe2d;"
			></uni-list-item>
			<uni-list-item
				title="会员服务"
				clickable
				showExtraIcon
				showArrow
				leftIcon="icon-service"
				leftIconStyle="color: #fa6c5e;"
			></uni-list-item>
			<uni-list-item
				title="会员family"
				clickable
				showExtraIcon
				showArrow
				leftIcon="icon-home"
				leftIconStyle="color: #fe8b42;"
			></uni-list-item>
			<uni-list-item
				title="更多功能"
				clickable
				showExtraIcon
				showArrow
				leftIcon="icon-gengduo"
				leftIconStyle="color: #9ed45a;"
			></uni-list-item>
			<divider></divider>
			<uni-list-item
				title="更多设置"
				clickable
				@click="navigate('user-path-list')"
				showExtraIcon
				showArrow
				leftIcon="icon-icon_set_up"
				leftIconStyle="color: #808c98;"
			></uni-list-item>
		</view>
		
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import divider from '@/components/common/divider.nvue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {card, divider, uniListItem},
		data() {
			return {
				
			}
		},
		methods: {
			navigate(path) {
				// console.log(path);
				if(!path) return false
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				})
			},
		}
	}
</script>

<style>

</style>
