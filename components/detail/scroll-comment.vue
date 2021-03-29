<template>
	<view class="p-2">
		<scroll-view 
			scroll-x 
			class="scroll-row">
			<view 
				class="scroll-row-item rounded bg-white mr-2 p-2 border" 
				v-for="(item, index) in comments"
				:key="index"
				style="width: 620rpx;height: 380rpx;"
			>
				<view class="d-flex a-center mb-1">
					<image 
						:src="item.userpic" 
						mode="widthFix"
						class="rounded-circle"
						style="height: 70rpx;width: 70rpx;"
					></image>						
					<view class="ml-2 position-relative" style="top: -20rpx;">
						<text class="font-md line-h">{{item.username}}</text>
						<view class="font line-h0 text-light-muted">{{item.create_time}}</view>
					</view>
					<view class="iconfont icon-dianzan text-light-muted font pl-1 ml-auto">{{item.goods_num}}</view>
				</view>
				
				<text class="d-block font-md mb-2">
					{{item.context}}
				</text>
				
				<view class="row">
					<view 
						class="span24-8 px-2" 
						v-for="(img, i) in item.imglist"
						:key="i"
					>
						<image
							:src="img"
							mode="widthFix"
							class="rounded"
							style="height: 115rpx;"
						></image>
					</view>
				</view>
				
				<view class="d-flex j-center a-center py-2 mt-2 text-dark" hover-class="bg-light-secondary">
					更多评论
					<view class="iconfont icon-you"></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			comments: Array
		}
	}
</script>

<style>
</style>
