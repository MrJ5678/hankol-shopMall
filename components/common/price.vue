<template>
	<view class="d-flex main-text-color font-md line-h">
		<view v-if="$slots.default">
			<text class="a-self-start font-sm">¥</text>
			<slot />
		</view>
		<text v-else class="a-self-start">团购议价</text>
	</view>
</template>

<script>
	export default {
		mounted() {

		}
	}
</script>

<style>
</style>
