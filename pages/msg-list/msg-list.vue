<template>
	<view class="p-2">
		<view 
			v-for="(item, index) in list"
			:key="index"
			@click="open(item)"
			class="mb-2 p-2 bg-white rounded" 
			hover-class="bg-light-secondary"
		>
			<view class="text-dark font-md">{{item.title}}</view>
			<view class="font text-light-muted">{{item.desc}}</view>
			<view class="font text-light-muted">{{item.create_time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '酣客经典火热售卖中',
						desc: '酱香经典',
						create_time: "4月上市"
					},
					{
						title: '酣客经典火热售卖中',
						desc: '酱香经典',
						create_time: "5月上市"
					}
				]
			}
		},
		methods: {
			open(item) {
				uni.navigateTo({
					url: `../msg-detail/msg-detail?detail=${JSON.stringify(item)}`,
				});
			}
		}
	}
</script>

<style>
</style>
