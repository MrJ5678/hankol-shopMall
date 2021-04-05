<template>
	<view>
		<card 
			v-for="(item, index) in list"
			:key="index"
			:headTitle="item.label">
			<view 
				class="mx-1 rounded" 
				style="overflow: hidden;"
			>				
				<uni-list-item
					v-for="(list, listIndex) in item.value"
					:key="listIndex"
					:title="list.title" 
					@click="navigate(list.path)"
					clickable
					showArrow
				></uni-list-item>
			</view>
		</card>
		
		<view class="p-3">
			<button class="main-bg-color text-white rounded">退出登录</button>
		</view>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import divider from '@/components/common/divider.nvue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	
	export default {
		components: {card, divider, uniListItem},
		data() {
			return {
				list: [
					{
						label: '账号管理',
						value: [
							{title: '个人资料', path: ''},
							{title: '收货地址', path: ''},
						]
					},
					{
						label: '关于',
						value: [
							{title: '关于商城', path: ''},
							{title: '意见反馈', path: ''},
							{title: '协议规则', path: ''},
							{title: '资质证件', path: ''},
							{title: '用户协议', path: ''},
							{title: '隐私政策', path: ''},
						]
					},
				]
			}
		},
		methods: {
			navigate(path) {
				console.log(path);
				if(!path) return false
				uni.navigateTo({
					url: `/pages/${path}/${path}`
				})
			},
		}
	}
</script>