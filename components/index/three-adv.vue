<template>
	<view class="three-adv-wrap m-2 mt-0">
		<view class="d-flex j-sb">
			<image 
				:src="resdata.big.src"
				@tap="event(resdata.big)"
				style="width: 336upx;height: 530upx;border-radius: 20upx;"
				lazy-load
			></image>
			<view class="d-flex flex-column j-sb">
				<image 
					:src="resdata.smalltop.src"
					@tap="event(resdata.smalltop)"
					style="width: 358upx;height: 256upx;border-radius: 20upx;"
					lazy-load
				></image>
				<image
					:src="resdata.smallbottom.src"
					@tap="event(resdata.smallbottom)"
					style="width: 358upx;height: 256upx;border-radius: 20upx;"
					lazy-load
				></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			resdata: Object
		},
		methods: {
			event(obj) {
				console.log(obj);
			}
		}
	}
</script>

<style scoped>
</style>
