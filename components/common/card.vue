<template>
	<view class="card">
		<!-- header -->
		<view v-if="headVisible" class="p-2 border-bottom main-border-color">
			<slot name="title">
				<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>				
			</slot>
		</view>
		<!-- body -->
		<view class="ml-2 mr-2">
			<image 
				v-if="bodyCover"
				:src="bodyCover"
				mode="widthFix"
				style="border-radius: 20upx;"
			></image>
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 是否显示头部
			headVisible: {
				type: Boolean,
				default: true
			},
			headTitle: String,
			bodyCover: String
		}
	}
</script>

<style>
</style>
