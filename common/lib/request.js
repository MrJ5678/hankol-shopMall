export default {
	// 全局配置
	common: {
		// 根路径
		// baseUrl: 'http://ceshi3.dishaxy.cn/api',
		baseUrl: 'http://privatemall.hrbjztec.cn/api',
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		data: {},
		method: 'GET',
		dataType: 'json'
	},
	// 请求 返回 promise
	request(options = {}) {
		// 组织参数
		options.url = `${this.common.baseUrl}options.url`
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		// 请求
		return new Promise((res, rej) => {
			// 请求之前
			Todo
			// 请求中
			uni.request({
				...options,
				success: result => {
					// 服务器端失败
					if(result.statusCode !== 200) {
						uni.showToast({
							title: result.data.msg || '服务端错误',
							icon: 'none'
						});
						return rej()
					}
					// 成功
					let data = result.data.data
					return res(data)
				},
				fail: (error) => {
					uni.showToast({
						title: error.errMsg || '请求失败',
						icon: 'none'
					});
					return rej()
				}
			});			
		})
		
	}
}