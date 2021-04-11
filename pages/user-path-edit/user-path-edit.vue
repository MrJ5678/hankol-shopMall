<template>
	<view>
		<view class="m-2 rounded" style="overflow: hidden;">
			<view class="p-2 border-bottom d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">收货人: </view>
				<input 
					type="text" 
					v-model="form.name"
					class="px-1 font-md flex-1"
				/>
			</view>
			
			<view class="p-2 d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">手机号码: </view>
				<input 
					type="text" 
					v-model="form.phone"
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
					:value="form.path"
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
					v-model="form.detailPath"
					class="px-1 font-md flex-1"
				/>
			</view>
		</view>
		
		<view class="m-2 rounded" style="overflow: hidden;">
			<view class="p-2 d-flex a-center bg-white">
				<view class="font-md text-secondary mr-1 flex-shrink">设置为默认地址</view>
				<switch :checked="form.isDefault" @change="form.isDefault = $event.detail.value" color="#7d1d29" class="ml-auto" />
			</view>
		</view>
		
		<divider></divider>
		
		<view class="mx-2 py-3">
			<view 
				class="py-2 d-flex a-center j-center font-md main-bg-color rounded text-white"
				hover-class="main-bg-hover-color"
				@click="submit"
			>保存</view>			
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue'
	import divider from '@/components/common/divider.vue'
	import {mapActions} from 'vuex'
	
	export default {
		components: {divider, mpvueCityPicker},
		data() {
			return {
				// 是创建收货地址还是修改收货地址
				isEdit: false,
				// 收货地址页修改数据时传过来的修改项的 index
				index: -1,
				themeColor: '#7d1d29',
				pickerValue: [0, 0, 1],
				form: {
					path: '',
					name: "",
					phone: "",
					detailPath: "",
					isDefault: false					
				},
			}
		},
		// 监听返回
		onBackPress() {
			if(this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true
			}
		},
		// 页面加载完成
		onLoad(e) {
			if(e.data) {
				let result = JSON.parse(e.data)
				this.form = result.item
				this.isEdit = true
				this.index = result.index
				uni.setNavigationBarTitle({
					title: '修改收货地址'
				})
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
			...mapActions(['updatePathAction', 'createPathAction']),
			// 三级联动确定
			onConfirm(e) {
				this.form.path = e.label
				this.pickerValue = e.value
			},
			// 显示三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			// 提交
			submit() {
				// 验证表单
				
				// 修改
				if(this.isEdit) {
					this.updatePathAction({
						index: this.index,
						item: this.form
					})
					uni.showToast({title: '创建成功!'})
					return uni.navigateBack({delta: 1})
				}
				// 创建
				this.createPathAction(this.form)
				uni.showToast({title: '创建成功!'})
				uni.navigateBack({delta: 1})
			}
		}
	}
</script>

<style>
/* page {
	background-color: #fff;
} */
</style>
