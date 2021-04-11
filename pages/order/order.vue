<template>
	<view>
		<!-- 选项卡 -->
		<view class="d-flex a-center font-md text-muted border-top border-bottom border-light-secondary bg-white">
			<view 
				class="flex-1 d-flex a-center j-center py-2" 
				v-for="(item, index) in tabBars" 
				:key="index"
				:class="index === tabIndex ? 'tabactive' : ''"
				@click="changeTabIndex(index)"
			>
				{{item.name}}
			</view>
		</view>
		
		<!-- 订单列表 -->
		<block v-for="(tab, tabI) in tabBars" :key="tabI">
			<view v-show="tabI === tabIndex" class="position-relative" style="min-height: 380rpx;">
				<template v-if="tab.list.length > 0">					
					<!-- 显示订单列表 -->
					<block v-for="(item, index) in tab.list" :key="index">
						<order-list :item="item" :index="index"></order-list>
					</block>
				</template>
				<!-- 默认无 -->
				<template v-else>
					<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
				</template>
			</view>
		</block>
		
		<!-- 热门推荐 -->
		<view class="mt-3 text-center main-text-color font-md font-weight">为你推荐</view>
		<view class="position-relative d-flex j-center a-center text-secondary mb-3 py-3 mx-2">
			<view class="position-absolute left-0 right-0" style="height: 2upx;background-color: #BEBEBE;"></view>
			<view style="background-color: #F5F5F5;z-index: 2;" class="px-4 position-absolute">买了的人还买了</view>
		</view>
		
		<!-- 热门推荐列表 -->
		<view class="list-wrap ml-2 mr-2">
			<view class="row j-sb">
				<block v-for="(item, index) in hotList" :key="index">
					<common-list :item="item" :index="index"/>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import commonList from '@/components/common/common-list.vue'
	import noThing from '@/components/common/no-thing.vue'
	import orderList from '@/components/order/order-list.vue'
	
	export default {
		components: {commonList, noThing, orderList},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{
						name: "全部",
						no_thing: 'no_pay',
						msg: "您还没有订单",
						list: [
							{
								create_time: "2021-04-07 07:17",
								status: "已发货",
								order_items: [
									{
										cover: "/static/images/demo/cate-biaozhunban.jpg",
										title: "2020 标准版",
										pprice: 798.00,
										attrs: "2支装",
										num: 1
									}
								],
								total_num: 2,
								total_price: 798,
							},
							{
								create_time: "2021-04-07 07:17",
								status: "已发货",
								order_items: [
									{
										cover: "/static/images/demo/cate-biaozhunban.jpg",
										title: "2020 标准版",
										pprice: 798.00,
										attrs: "2支装",
										num: 1
									}
								],
								total_num: 2,
								total_price: 798,
							}
						],
					},
					{
						name: "代付款",
						no_thing: 'no_pay',
						msg: "您还没有代付款订单",
						list: []
						
					},
					{
						name: "待收货",
						no_thing: 'no_receiving',
						msg: "您还没有待收货订单",
						list: []
					},
					{
						name: "待评价",
						no_thing: 'no_comment',
						msg: "您还没有代评价订单",
						list: []
					},
				],
				hotList: [
					{
						cover: "/static/images/demo/list/list-biaozhun.jpeg",
						title: "2021 · 标准版",
						desc: "味道浑厚 酒体纯熟",
						oprice: "¥439",
						pprice: ""
					},
					{
						cover: "/static/images/demo/list/list-banyuetan.jpeg",
						title: "2021 · 半月坛",
						desc: "馥郁浓香 极致享受",
						oprice: "¥999",
						pprice: ""
					},
					{
						cover: "/static/images/demo/list/list-biaozhun.jpeg",
						title: "2021 · 标准版",
						desc: "味道浑厚 酒体纯熟",
						oprice: "¥439",
						pprice: ""
					},
					{
						cover: "/static/images/demo/list/list-banyuetan.jpeg",
						title: "2021 · 半月坛",
						desc: "馥郁浓香 极致享受",
						oprice: "¥999",
						pprice: ""
					}
				],
			}
		},
		methods: {
			changeTabIndex(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style>
.tabactive {
	border-bottom: 5rpx solid #7d1d29;
	color: #7d1d29;
	margin-bottom: -5rpx;
}
</style>
