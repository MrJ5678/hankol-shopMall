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
				<uni-list-item showArrow :clickable="true">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>标准版 2020</text>
					</view>
				</uni-list-item>
				<uni-list-item showArrow :clickable="true">
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">黑龙江省 哈尔滨市</text>
						<text class="main-text-color">有现货</text>
					</view>
				</uni-list-item>
				<uni-list-item showArrow :clickable="true">
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
			
		</view>
		<!-- 热门推荐 -->
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import baseInfo from '@/components/detail/base-info.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	import scrollComment from '@/components/detail/scroll-comment.vue'
	
	export default {
		components: {swiperImage, baseInfo, uniListItem, scrollComment, uParse},
		data() {
			return {
				banners: [
					{ src: 'http://img.alicdn.com/imgextra/i2/2815753952/O1CN01wNTxAv1f43t4YzTv3_!!0-item_pic.jpg_1152x1920Q50s50.jpg_.webp'},
					{ src: 'http://img.alicdn.com/imgextra/i2/2815753952/O1CN010CHvjq1f43t9GP5cY_!!2815753952.jpg_1152x1920Q50s50.jpg_.webp'}
				],
				detail: {
					title: "53度大曲酱香型白酒高度粮食白酒木箱装2020版 500ml*2瓶 无糟版",
					desc: "固态发酵，粮食酿造",
					pprice: 796
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
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
