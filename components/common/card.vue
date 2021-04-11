<template>
	<view class="card" :style="cardStyle">
		<!-- header -->
		<view v-if="headVisible" class="p-2 main-border-color" :class="getHeadClass">
			<slot name="title">
				<text v-if="headTitle" class="font-md ml-1" :class="headTitleWeight ? 'font-weight' : ''">{{headTitle}}</text>				
			</slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" :style="bodyStyle">
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
			bodyStyle: String,
			// 是否显示头部
			headVisible: {
				type: Boolean,
				default: true
			},
			headTitle: String,
			bodyCover: String,
			// 是否显示下边线
			headBorderBottom: {
				type: Boolean,
				default: true
			},
			// 是否给 body 加 padding
			bodyPadding: {
				type: Boolean,
				default: false
			},
			// 标题是否加粗
			headTitleWeight: {
				type: Boolean,
				default: false
			},
			// 卡片背景色
			cardStyle: {
				type: String,
				default: ''
			}
		},
		computed: {
			getHeadClass() {
				let borderBottom = this.headBorderBottom ? 'border-bottom' : ''
				return `${borderBottom}`
			},
			getBodyClass() {
				let bodyPadding = this.bodyPadding ? 'p-1' : ''
				return `${bodyPadding}`
			}
		},
	}
</script>

<style>
</style>
