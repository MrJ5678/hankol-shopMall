<template>
	<view>
		<card headTitle="热门搜索" bodyCover="../../static/images/demo/search-page-banner.jpeg"/>
		
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag 
				v-for="(item, index) in hot" :key="index"
				:item="item"
			/>
		</view>
		
		<!-- 常用分类 -->
		<card headTitle="常用分类" :headBorderBottom="false">
			<color-tag
				v-for="(item, index) in cate" :key="index"
				:item="item"
				:color="false"
			/>
		</card>
		<!-- 分割线 -->
		<divider />
		
		<!-- 搜索记录 -->
		<card headTitle="搜索记录">
			<uni-list-item title="经典版" :showArrow="false"></uni-list-item>
			<uni-list-item title="半月坛" :showArrow="false"></uni-list-item>
		</card>
	</view>
</template>

<script>
	import card from '../../components/common/card.vue'
	import colorTag from "../../components/search/color-tag.vue"
	import uniListItem from '../../components/uni-ui/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {card, colorTag, uniListItem},
		data() {
			return {
				hot:[
					{ name:'经典版' },
					{ name:'标准版' },
					{ name:'半月坛' },
					{ name:'中国红' },
					{ name:'家藏' },
					{ name:'留香' },
				],
				cate: [
					{name: '窖藏5年'},
					{name: '窖藏6年'},
					{name: '窖藏10年'},
					{name: '窖藏15年'},
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				uni.navigateTo({
					url: '../search-list/search-list'
				})
			}
		}
	}
</script>