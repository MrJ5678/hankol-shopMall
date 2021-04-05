<template>
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评价(11)</text>
				<text class="main-text-color ml-auto mr-1">100%</text>
				<text class="text-muted">满意</text>
			</view>
			<view class="d-flex flex-wrap pt-2" style="margin-right: -20rpx;">
				<view 
					class="px-2 py border rounded mr-2 mb-2 cate-item" 
					v-for="(item, index) in cateList" 
					:key="index"
					:class="cateIndex === index ? 'active' : ''"
					@tap="cateChange(index)"
				>
					{{item.name}}
				</view>
			</view>
		</view>
		<divider />
		
		<view class="p-2 d-flex a-start border-bottom border-light-secondary bg-white">
			<image 
				src="../../static/images/demo/demo6.jpg" 
				mode="widthFix"
				style="width: 90rpx;height: 90rpx;"
				class="rounded flex-shrink"
			>
			</image>
			<view class="pl-2 flex-1">
				<view class="d-flex a-center">
					<text class="font-md text-primary font-weight">昵称</text>
					<view class="iconfont icon-service main-text-color ml-auto">
						<text class="font">非常好</text>
					</view>
				</view>
				
				<view class="line-h-md font-md">
					非常好
				</view>
				<view class="row">
					<view class="span24-8 px pb">
						<image 
							src="../../static/images/demo/cate-biaozhunban.jpg" 
							style="height: 100rpx;"
							mode="widthFix">
						</image>
					</view>
				</view>
				<view class="d-flex a-center">
					<text class="text-light-muted">2021-03-21</text>
					<view class="d-flex text-light-muted ml-auto a-center mr-1">
						6
						<text class="iconfont icon-dianzan text-muted ml"></text>
					</view>
					<view class="d-flex text-light-muted a-center">
						10
						<text class="iconfont icon-pinglun text-muted ml"></text>
					</view>
				</view>
				
				<!-- 客服回复 -->
				<view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1">
					<text class="main-text-color">官方回复:</text>
					哈哈哈
					<view class="iconfont icon-dianzan text-light-muted line-h-md font ml-2">
						<text class="text-muted pl-1">赞客服 120</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import divider from '@/components/common/divider.vue'
	export default {
		components: {divider},
		data() {
			return {
				cateIndex: 0,
				cateList: [
					{ name: '全部' },
					{ name: '有图' },
					{ name: '非常好' },
					{ name: '追加' }
				]
			}
		},
		methods: {
			cateChange(index) {
				this.cateIndex = index
			}
		}
	}
</script>

<style>
.cate-item {
	border-color: #800002!important;
	color: #800002!important;
	background: #f7e6e4 !important;
}

.cate-item.active {	
	border-color: #800002!important;
	color: #fff!important;
	background: #800002 !important;}
</style>
