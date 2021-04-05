<template>
	<view>
		<!-- 商品详情大图 -->
		<swiper-image 
			:resdata="banners"
			:height="'750'"
			:preview="true"
		></swiper-image>
		
		<!-- 基础详情 -->
		<base-info :detail="detail"></base-info>
		<!-- 滚动商品特性 -->
		
		<!-- 属性选择 -->
		<view class="p-2">
			<view class="rounded border" style="overflow: hidden;">
				<uni-list-item @click="show('attr')" showArrow :clickable="true">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>标准版 2020</text>
					</view>
				</uni-list-item>
				<uni-list-item showArrow :clickable="true" @click="show('express')">
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">黑龙江省 哈尔滨市</text>
						<text class="main-text-color">有现货</text>
					</view>
				</uni-list-item>
				<uni-list-item showArrow :clickable="true" @click="show('service')">
					<view class="d-flex">
						<view class="d-flex a-center text-muted font mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							品牌直供
						</view>
						<view class="d-flex a-center text-muted font mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							专注酣客
						</view>
						<view class="d-flex a-center text-muted font mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							市内包邮
						</view>
					</view>
				</uni-list-item>
			</view>
		</view>
		<!-- 横向滚动评论 -->
		<scroll-comment :comments="comments" />
		<!-- 商品详情 -->
		<view class="py-4">
			<view 
				v-for="(item, index) in detailImageList"
				:key="index"
			>
				<image :src="item" mode="widthFix"></image>				
			</view>
		</view>
		<!-- 热门推荐 -->
		<card headTitle="热门推荐" :headTitleWeight="false" :headBorderBottom="false"/>
		<view class="row p-2 j-sb">
			<common-list 
				v-for="(item, index) in hotList" 
				:key="index"
				:item="item" 
				:index="index"
			/>
		</view>
		
		<!-- 底部操作条 -->
		<bottom-btn @showPopup="show('attr')"></bottom-btn>
		
		<!-- 弹出框 -->
		<common-popup :popupClass="popup.attr" @hide="hide('attr')">
			<!-- 商品信息 图片 介绍等 -->
			<view class="d-flex a-center" style="height: 275rpx;">
				<image 
					src="../../static/images/demo/cate-biaozhunban.jpg" 
					mode="widthFix"
					style="width: 180rpx;height: 180rpx;"
					class="border rounded"
				></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">796</price>
					<text class="d-block">
						2020 标准版 2支装
					</text>
				</view>
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y class="w-100" style="height: 580rpx;">
				<card 
					v-for="(item, index) in selects"
					:key="index"
					:headTitle="item.title" 
					:headTitleWeight="false" 
					:headBorderBottom="false">
					<hq-radio-group :label="item" :selectedIndex.sync="item.selectedIndex"></hq-radio-group>
				</card>
				
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<uni-number-box 
						:min="1" 
						:value="detail.number"
						@change="detail.number = $event"
					></uni-number-box>
				</view>
				
			</scroll-view>
			<!-- 按钮 -->
			<view 
				class="main-bg-color text-white font-md d-flex a-center j-center rounded mt-2" 
				hover-class="main-bg-hover-color" 
				@tap.stop="addCart"
				style="height: 100rpx;">
				加入购物车
			</view>
		</common-popup>
		
		<!-- 收货地址弹出框 -->
		<common-popup :popupClass="popup.express" @hide="hide('express')">
			<!-- 标题 -->
			<view class="d-flex j-center a-center border-bottom border-light-secondary font-md" style="height: 100rpx;">
				收货地址
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y class="w-100" style="height: 780rpx;">
				<uni-list-item showArrow clickable v-for="i in 10" :key="i">
					<view class="iconfont icon-dingwei font-weight font-md">隆冬</view>
					<view class="font text-light-muted">黑龙江省哈尔滨市道里区哈药路270号</view>
				</uni-list-item>
			</scroll-view>
			
			<!-- 按钮 -->
			<view 
				class="main-bg-color text-white font-md d-flex a-center j-center rounded mt-2" 
				hover-class="main-bg-hover-color" 
				@tap.stop="hide('express')"
				style="height: 100rpx;">
				选择新地址
			</view>
		</common-popup>
		
		<!-- 服务说明 -->
		<common-popup :popupClass="popup.service" @hide="hide('service')">
			<!-- 标题 -->
			<view class="d-flex j-center a-center border-bottom border-light-secondary font-md" style="height: 100rpx;">
				服务说明
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y class="w-100" style="height: 780rpx;">
				<view class="py-1">
					<view class="d-flex a-center">
						<view class="iconfont icon-finish main-text-color mr-1"></view>
						品牌直供
					</view>
					<text class="text-light-muted font pl-4">市内包邮</text>
				</view>
			</scroll-view>
			
			<!-- 按钮 -->
			<view 
				class="main-bg-color text-white font-md d-flex a-center j-center rounded mt-2" 
				hover-class="main-bg-hover-color" 
				@tap.stop="hide('service')"
				style="height: 100rpx;">
				确定
			</view>
		</common-popup>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import baseInfo from '@/components/detail/base-info.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import scrollComment from '@/components/detail/scroll-comment.vue'
	import card from '@/components/common/card.vue'
	import commonList from '@/components/common/common-list.vue'
	import bottomBtn from '@/components/detail/bottom-btn.vue'
	import commonPopup from '@/components/common/common-popup.vue'
	import price from '@/components/common/price.vue'
	import hqRadioGroup from '@/components/common/radio-group.vue'
	import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue'
	import {mapMutations} from 'vuex'
	
	export default {
		components: {swiperImage, baseInfo, uniListItem, scrollComment, card, commonList, bottomBtn, commonPopup, price, hqRadioGroup, uniNumberBox},
		data() {
			return {
				popup: {
					attr: 'none',
					express: 'none',
					service: 'none'
				},
				detailImageList: [
					'https://www.hankol.com.cn/img/product-1/2020标准版_01.jpg',
					'https://www.hankol.com.cn/img/product-1/2020标准版_02.jpg',
					'https://www.hankol.com.cn/img/product-1/2020标准版_03.jpg',
					'https://www.hankol.com.cn/img/product-1/2020标准版_04.jpg',
					'https://www.hankol.com.cn/img/product-1/2020标准版_05.jpg',
					'https://www.hankol.com.cn/img/product-1/2020标准版_06.jpg',
					'https://www.hankol.com.cn/img/product-1/2020标准版_07.jpg',
				],
				banners: [
					{ src: 'http://img.alicdn.com/imgextra/i2/2815753952/O1CN01wNTxAv1f43t4YzTv3_!!0-item_pic.jpg_1152x1920Q50s50.jpg_.webp'},
					{ src: 'http://img.alicdn.com/imgextra/i2/2815753952/O1CN010CHvjq1f43t9GP5cY_!!2815753952.jpg_1152x1920Q50s50.jpg_.webp'}
				],
				detail: {
					id: 99,
					title: "53度大曲酱香型白酒高度粮食白酒木箱装2020版 500ml*2瓶 无糟版",
					desc: "固态发酵，粮食酿造",
					cover: '/static/images/demo/cate-biaozhunban.jpg',
					pprice: 796,
					number: 1,
					max: 100
				},
				comments: [
					{
						userpic: '/static/images/demo/demo6.jpg',
						username: '隆冬',
						create_time: '2021-03-28',
						goods_num: 123,
						context: '评论内容',
						imglist: [
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						]
					},
					{
						userpic: '/static/images/demo/demo6.jpg',
						username: '隆冬',
						create_time: '2021-03-28',
						goods_num: 123,
						context: '评论内容',
						imglist: [
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						]
					},
					{
						userpic: '/static/images/demo/demo6.jpg',
						username: '隆冬',
						create_time: '2021-03-28',
						goods_num: 123,
						context: '评论内容',
						imglist: [
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						]
					}
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
				selects: [
					{
						title: "规格",
						selectedIndex: 0,
						list: [
							{name: '2支装'},
							{name: '4支装'}
						]
					}
				]
			}
		},
		// 监听页面返回事件
		onBackPress() {
			// 关闭 modal
			for (let key in this.popup) {
				if(this.popup[key] !== 'none') {
					this.hide(key)
					return true
				}
			}
		},
		methods: {
			...mapMutations(['addGoodsToCart']),
			hide(key) {
				this.popup[key] = 'hide'
				setTimeout(() => {
					this.popup[key] = 'none'
				}, 200)
			},
			show(key) {
				this.popup[key] = 'show'
			},
			addCart() {
				let goods = this.detail
				goods['checked'] = false
				goods['attrs'] = this.selects
				
				// 加入购物车
				this.addGoodsToCart(goods)
				// 加入成功提示
				uni.showToast({
					title: '加入成功!'
				})
				// 隐藏该弹框
				this.hide('attr')
			}
		}
	}
</script>

