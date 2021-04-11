<template>
	<view class="p-2">
		<!-- 标题 -->
		<view class="font-lg text-dark mb-2">{{detail.title}}</view>
		<!-- 内容 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: ''
			}
		},
		onLoad(e) {
			if(!e.detail) {
				return uni.navigateBack({delta: 1})
			}
			// 初始化数据
			this.detail = JSON.parse(e.detail)
			
			// 设置标题
			uni.setNavigationBarTitle({
				title: this.detail.title
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
