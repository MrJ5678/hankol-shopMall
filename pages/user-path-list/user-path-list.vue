<template>
	<view>
		<uni-list-item showArrow>
			<view class="text-secondary">
				<view class="d-flex a-center">
					<text class="main-text-color">隆冬</text>
					18571850451
					<text class="main-text-color">[默认]</text>
				</view>
				<view>
					黑龙江省 哈尔滨市 道里区 哈药路
				</view>
				<view>正阳和街道</view>
			</view>
		</uni-list-item>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {uniListItem},
		data() {
			return {
				
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
			
		}
	}
</script>

<style>

</style> 