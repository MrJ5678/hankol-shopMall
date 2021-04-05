<template>
	<view>
		<view class="m-2 rounded" style="overflow: hidden;">
			<view class="p-2 border-bottom d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">收货人: </view>
				<input 
					type="text" 
					value=""
					class="px-1 font-md flex-1"
				/>
			</view>
			
			<view class="p-2 d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">手机号码: </view>
				<input 
					type="text" 
					value=""
					class="px-1 font-md flex-1"
				/>
			</view>
		</view>
		
		<view class="m-2 rounded" style="overflow: hidden;">
			<view class="p-2 border-bottom d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">所在地区: </view>
				<input 
					type="text" 
					disabled
					@click="showMulLinkageThreePicker"
					placeholder="请选择所在地区"
					:value="pickerText"
					class="px-1 font-md flex-1"
				/>
				
				<mpvue-city-picker
					:themeColor="themeColor"
					ref="mpvueCityPicker"
					:pickerValueDefault="pickerValue"
					@onConfirm="onConfirm"
				></mpvue-city-picker>
			</view>
			
			<view class="p-2 d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">详细地址: </view>
				<input 
					type="text" 
					value=""
					class="px-1 font-md flex-1"
				/>
			</view>
		</view>
		
		<view class="m-2 rounded" style="overflow: hidden;">
			<view class="p-2 d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">设置为默认地址</view>
				<switch checked="true" color="#7d1d29" class="ml-auto" />
			</view>
		</view>
		
		<divider></divider>
		
		<view class="mx-2 py-3">
			<view 
				class="py-2 d-flex a-center j-center font-md main-bg-color rounded text-white"
				hover-class="main-bg-hover-color"
			>保存</view>			
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue'
	import divider from '@/components/common/divider.vue'
	
	export default {
		components: {divider, mpvueCityPicker},
		data() {
			return {
				themeColor: '#7d1d29',
				pickerValue: [0, 0, 1],
				pickerText: '',
			}
		},
		// 监听返回
		onBackPress() {
			if(this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true
			}
		},
		// 页面卸载
		onUnload() {
			if(this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true
			}
		},
		methods: {
			// 三级联动确定
			onConfirm(e) {
				this.pickerText = e.label
				this.pickerValue = e.value
			},
			// 显示三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			}
		}
	}
</script>

<style>
/* page {
	background-color: #fff;
} */
</style>
