<template>
	<view>
		<divider></divider>
		<view class="mx-2 rounded" style="overflow: hidden;">
			<uni-list-item title="头像" clickable>
				<block slot="right">
					<image 
						src="../../static/images/demo/demo6.jpg" 
						class="rounded-circle border border-light-secondary"
						style="width:90rpx;height: 90rpx;"
					></image>
				</block>
			</uni-list-item>
			<uni-list-item title="姓名" clickable>
				<block slot="right">
					隆冬
				</block>
			</uni-list-item>
			<uni-list-item title="性别" showArrow clickable></uni-list-item>
			<uni-list-item title="生日" showArrow clickable></uni-list-item>
		</view>
		<divider></divider>
		<view class="mx-2 rounded" style="overflow: hidden;">
			<uni-list-item title="修改密码" showArrow clickable></uni-list-item>
			<uni-list-item title="密保手机" showArrow clickable></uni-list-item>
		</view>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {uniListItem},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
