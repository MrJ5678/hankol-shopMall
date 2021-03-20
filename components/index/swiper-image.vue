<template>
	<view class="swiper-wrap">
		<swiper
			class="swiper" 
			indicator-dots 
			autoplay 
			:interval="3000" 
			:duration="1000"
			circular
		>
			<block v-for="(item, index) in resdata" :key="index">				
				<swiper-item>
					<view class="swiper-item" @tap="event(item)">
						<image 
							:src="item.src"
							lazy-load 
							style="height: 410upx">
						</image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
export default {
	props: {
		resdata: Array
	},
	methods: {
		event() {
			console.log('点击了 banner')
		}
	}
}
</script>

<style scoped>
.swiper-wrap {
    margin: 20upx;
    border-radius: 20upx;
    overflow: hidden;
}

.swiper {
	width: 100%;
	height: 410upx;
}
</style>
