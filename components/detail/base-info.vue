<template>
	<view class="p-2">
		<view class="font-lg text-dark">{{detail.title}}</view>
		<view class="font text-light-muted mb-3 line-h-sm">{{detail.desc}}</view>
		<price :priceSize="'font-lg'">{{detail.pprice}}</price>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue'
	
	export default {
		components: {price},
		props: {
			detail: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style>
</style>
