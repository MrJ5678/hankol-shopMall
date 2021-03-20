<template>
	<view class="cate-wrap shadow-sm m-2">
		<view class="row j-center py-2">
			<block v-for="(item, index) in indexnavs" :key="index">
				<view 
					class="span-5 py-1 d-flex flex-column j-center a-center"
					@tap="event(item)"
				>
					<image 
						:src="item.src"
						mode="widthFix"
						style="width: 60upx; height: 60upx;"
					>
					<text class="font-sm">{{item.text}}</text>
					</image>
				</view>					
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			indexnavs: Array
		},
		methods: {
			event(item) {
				console.log('点击了 index nav');
			}
		}
	}
</script>

<style scoped>
.cate-wrap {
	margin-top: 40upx;
	border-radius: 20upx;
	background-color: #FFFFFF;
}
</style>
