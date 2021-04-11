<template>
	<view :style="{ height: statusBarHeight }" class="uni-status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		props: {
			barStyle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
	}
</script>

<style scoped>
	.uni-status-bar {
		height: 20px;
	}
</style>