<template>
	<view class="row p-2 border-bottom border-light-secondary animated fadeIn faster">
		<view class="span-6">
			<image :src="item.titlePic" class="w-100" mode="widthFix"></image>
		</view>
		<view class="span-14 pl-3 pb-2 d-flex flex-column">
			<view class="font-md font-weight">{{item.title}}</view>
			<view class="font text-light-muted mb-auto line-h-md">
				{{item.desc}}
			</view>
			<price>{{item.pprice}}</price>
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
