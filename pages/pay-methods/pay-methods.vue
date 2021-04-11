<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="text-light-muted font-md">支付金额</text>
			<price priceSize="font-lg" unitSize="font-md">798.00</price>
		</view>
		<view class="px-5">
			<label>
				<uni-list-item showExtraIcon leftIcon="icon-zhifubao text-blue" leftIconStyle="font-size: 60rpx;" title="支付宝支付" note="推荐使用支付宝支付">
					<radio slot="right" value="1" color="#7d1d29"/>
				</uni-list-item>
			</label>
			<label>
				<uni-list-item showExtraIcon leftIcon="icon-weixinzhifu text-success" leftIconStyle="font-size: 60rpx;" title="微信支付">
					<radio slot="right" value="2" color="#7d1d29"/>
				</uni-list-item>
			</label>
			
			<view 
				class="rounded main-bg-color text-white font-md w-100 py-2 d-flex a-center j-center mt-5" 
				hover-class="main-bg-hover-color"
				@click="submmit"
			>确认支付</view>
		</view>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {price, uniListItem},
		data() {
			return {
				
			}
		},
		methods: {
			submmit() {
				uni.navigateTo({
					url: '../pay-result/pay-result',
				});
			}
		}
	}
</script>

<style>

</style>
