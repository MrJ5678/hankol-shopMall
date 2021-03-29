<template>
	<view class="d-flex main-text-color line-h" :class="priceSize">
		<view v-if="$slots.default" class="d-flex">
			<text class="a-self-start" :class="unitSize">¥</text>
			<slot />
		</view>
		<text v-else class="a-self-start">团购议价</text>
	</view>
</template>

<script>
	export default {
		props: {
			priceSize: {
				type: String,
				default: "font-md"
			},
			unitSize: {
				type: String,
				default: "font-sm"
			}
		},
		mounted() {

		}
	}
</script>

<style>
</style>
