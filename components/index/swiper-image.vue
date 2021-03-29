<template>
	<view class="swiper-wrap">
		<swiper
			class="swiper" 
			:style="getStyle"
			indicator-dots 
			autoplay 
			:interval="3000" 
			:duration="1000"
			circular
		>
			<block v-for="(item, index) in resdata" :key="index">				
				<swiper-item>
					<view class="swiper-item" @tap="event(item, index)">
						<image 
							:src="item.src"
							lazy-load 
							:style="getStyle">
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
		resdata: Array,
		height: {
			type: String,
			default: '410'
		},
		preview: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		getStyle() {
			return `height: ${this.height}rpx;`
		},
		getUrls() {
			return this.resdata.map((v) => v.src)
		}
	},
	methods: {
		event(item, index) {
			if(this.preview) {
				return uni.previewImage({
					current: index,
					urls: this.getUrls,
					indicator: "default"
				})
			}
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
}
</style>
