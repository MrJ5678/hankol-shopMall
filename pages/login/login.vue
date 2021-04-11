<template>
	<view style="min-height: 100%;height: auto;" class="bg-white">
		<uni-nav-bar 
			left-icon="closeempty" 
			right-text="忘记密码" 
			:border="false"
			statusBar
			color="#B2B2B2"
			@clickLeft="goBack"
			@clickRight="forget"
		></uni-nav-bar>
		
		<view class="p-5">
			<view class="font-big mb-5">密码登录</view>
			<input 
				type="text"
				class="border-bottom mb-4 uni-input px-0"
				v-model="username"
				placeholder="请输入手机号/邮箱/账号"
				placeholder-class="text-light-muted"
				@focus="focusHandle('username')"
				@blur="blur('username')"
				:class="focus.username ? 'border-danger' : ''"
			/>
			<input
				type="password"
				class="border-bottom mb-4 uni-input px-0"
				v-model="password"
				placeholder="请输入密码"
				placeholder-class="text-light-muted"
				@focus="focusHandle('password')"
				@blur="blur('password')"
				:class="focus.password ? 'border-danger' : ''"
			/>
			<view 
				class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" 
				hover-class="main-bg-hover-color"
				@click="submit"
			>
				登录
			</view>
			<label class="checkbox d-flex a-center" @click="check = !check">
				<checkbox :checked="check" color="#7d1d29" />
				<text class="font" :class="check ? 'text-muted' : 'text-light-muted'">已阅读并同意XXXXX协议</text>
			</label>
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	
	export default {
		components: {uniNavBar},
		data() {
			return {
				username: '',
				password: '',
				check: true,
				// 验证规则
				rules: {
					username: [
						{
							rule: /^[a-zA-Z]\w{5,17}$/,
							msg: "用户名以字母开头,长度在6～18位之间,只能包含字母、数字、下划线"
						}
					],
					password: [
						{
							rule: /^.{5,20}$/,
							msg: "密码长度为5～20的所有字符"
						}
					]
				},
				focus: {
					username: false,
					password: false					
				}
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({delta: 1})
			},
			forget() {
				console.log('click forget');
			},
			focusHandle(flag) {
				this.focus[flag] = true
			},
			blur(flag) {
				this.focus[flag] = false
			},
			// 表单验证
			validate(key) {
				var check = true
				this.rules[key].forEach(v => {
					// 验证失败
					if(!(v.rule).test(this[key])) {
						uni.showToast({title: v.msg, icon: 'none'})
						check = false
						return false
					}
				})
				return check
			},
			submit() {
				if(!this.check) {
					return uni.showToast({
						title: '请勾选同意协议内容',
						icon: 'none'
					});
				}
				// 验证用户名
				if(!this.validate('username')) return false
				// 验证密码
				if(!this.validate('password')) return false
				
				uni.showLoading({
					title: '登录中...',
					mask: true
				});
				
				setTimeout(() => {
					uni.hideLoading()
					uni.navigateBack({
						delta: 1
					});
				}, 3000)
			}
		}
	}
</script>

<style scoped>
</style>
