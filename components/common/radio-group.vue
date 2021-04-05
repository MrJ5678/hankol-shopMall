<template>
	<!-- 单选按钮组 -->
	<view class="row">
		<view 
			class="span24-8 px-1 mb-2"
			v-for="(item, index) in label.list"
			:key="index"
		>
			<view 
				class="px-1 py-1 border bg-light-secondary text-center rounded"
				:class="label.selectedIndex === index ? 'radio-active' : 'border-light-secondary'"
				@tap="changeRadio(index)"
			>
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			label: Object
		},
		methods: {
			changeRadio(index) {
				this.$emit('update:selectedIndex', index)
			}
		}
	}
</script>

<style scoped>
.radio-active {
	border-color: #800002!important;
	color: #800002!important;
	background: #f7e6e4 !important;
}
</style>
