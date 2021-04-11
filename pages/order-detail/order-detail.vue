<template>
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">卖家已发货</view>
				<view class="font">还差7天10时自动确认</view>
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 120rpx;"></view>
		</view>
		
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-3">隆冬</text>
				185****0451
			</view>
			<view class="text-light-muted font-md">黑龙江省 哈尔滨市 道里区 哈药路</view>
		</view>
		
		<divider></divider>
		
		<view class="px-2">
			<block
				v-for="(item, index) in order_items"
				:key="index"
			>
				<order-list-item :item="item" :index="index"></order-list-item>
			</block>
		</view>
		
		<divider></divider>
		
		<uni-list-item>
			<text class="font-md text-light-muted">商品总价</text>
			<view class="font-md text-light-muted" slot="rightContent">¥123.00</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md text-light-muted">快递费</text>
			<view class="font-md text-light-muted" slot="rightContent">免邮</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md main-text-color">实际付款</text>
			<view class="font-md" slot="rightContent">				
				<price>798.00</price>
			</view>
		</uni-list-item>
		
		<divider></divider>
		<card headTitle="订单信息" :headBorderBottom="false">
			<uni-list-item>
				<text class="font-md">合计</text>
				<view class="font-md" slot="rightContent">				
					<price>798.00</price>
				</view>
			</uni-list-item>
		</card>
	</view>
</template>

<script>
	import orderListItem from '@/components/order/order-list-item.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import price from '@/components/common/price.vue'
	import card from '@/components/common/card.vue'
	
	export default {
		components: {orderListItem, uniListItem, price, card},
		data() {
			return {
				order_items: [
					{
						cover: '/static/images/demo/demo6.jpg',
						title: '2020 标准版',
						pprice: 798.00,
						attrs: "2只装",
						num: 1
					},
					{
						cover: '/static/images/demo/demo6.jpg',
						title: '2020 标准版',
						pprice: 798.00,
						attrs: "2只装",
						num: 1
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page {
	background-color: #fff;
}
</style>
