<template>
	<view class="border-bottom border-light-secondary d-flex a-center py-2 px-2" @click="open">
		<image
			:src="item.cover" 
			class="rounded mr-2 flex-shrink"
			mode="widthFix"
			style="height: 150rpx;width: 150rpx;"
		>
		</image>
		<view class="flex-1">
			<view class="d-flex a-center">
				<text class="font-md text-dark">{{item.title}}</text>
				<text class="font-md text-light-muted ml-auto">¥{{item.pprice}}</text>
			</view>
			<view class="d-flex a-center">
				<text class="font-md text-light-muted">{{item.attrs}}</text>
				<text class="font-md text-light-muted ml-auto">x {{item.num}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			open() {
				uni.navigateTo({
					url: '/pages/detail/detail'
				});
			}
		}
	}
</script>

<style>
</style>
