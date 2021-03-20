<template>
	<view style="width: 348upx;">
		<image 
			:src="item.cover" 
			mode="widthFix"
			style="border-radius: 20upx;"
			lazy-load
		>
		</image>
		<view class="pl-2 pr-2 pb-2">
			<view class="font-md">{{item.title}}</view>
			<text class="d-block font">{{item.desc}}</text>
			<view class="d-flex my-1">
				<price>
					<block v-if="item.pprice">{{item.pprice}}</block>
				</price>
				<view class="font-sm text-light-muted line-through ml-1 a-self-end line-h">{{item.oprice}}</view>
			</view>						
		</view>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue'
	
	export default {
		components: {price},
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style>
</style>
