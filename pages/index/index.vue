<template>
	<view class="content">
		<!-- 跑马灯 -->
		<swiper-image :resdata="swipers" />
		
		<!-- 首页分类 -->
		<index-nav :indexnavs="indexnavs" />
		
		<!-- 分割线 -->
		<divider />
		
		<!-- 广告位 3 张图 -->
		<three-adv :resdata="threeAdv" />
		
		<!-- 卡片组件 基础版 => 大图广告位-->
		<card headTitle="典藏" bodyCover="/static/images/demo/liuxiang-horizontal.jpeg"/>
		
		<!-- 公共列表组件 -->
		<view class="list-wrap ml-2 mr-2">
			<view class="row j-sb">
				<block v-for="(item, index) in commonList" :key="index">
					<common-list :item="item" :index="index"/>
				</block>
			</view>
		</view>
		
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue'
import indexNav from '@/components/index/index-nav.vue'
import threeAdv from '@/components/index/three-adv.vue'
import card from '@/components/common/card.vue'
import commonList from '@/components/common/common-list.vue'

export default {
	components:	{swiperImage, indexNav, threeAdv, card, commonList},
	data() {
		return {
			swipers: [
				{
					src: "../../static/images/demo/banner1-730.png"
				},
				{
					src: "../../static/images/demo/banner1-730.png"
				},
				{
					src: "../../static/images/demo/banner1-730.png"
				},
				{
					src: "../../static/images/demo/banner1-730.png"
				}
			],
			indexnavs: [
				{
					src: "/static/images/indexnav/1.png", text: "新品发布"
				},
				{
					src: "/static/images/indexnav/1.png", text: "新品发布"
				},
				{
					src: "/static/images/indexnav/1.png", text: "新品发布"
				},
				{
					src: "/static/images/indexnav/1.png", text: "新品发布"
				}
			],
			threeAdv: {
				big: {
					src: "/static/images/demo/ad-biaozhunban-slice.jpg"
				},
				smalltop: {
					src: "/static/images/demo/ad-zhongguohong.jpeg"
				},
				smallbottom: {
					src: "/static/images/demo/ad-banyuetan.jpeg"
				}
			},
			commonList: [
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
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
</style>
