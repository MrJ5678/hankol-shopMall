<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 官方ui */
	@import url("/common/uni.css");
	/* 动画 */
	@import url("/common/animate.css");
	/* 图标 */
	@import url("/common/icon.css");
	/* main.css */
	@import url("/common/zcm-main.css");
	/* 自定义公共样式 */
	@import url("/common/common.css");
	/* uParse css 文件 */
	/* @import url("/components/uni-ui/uParse/src/wxParse.css"); */
</style>
