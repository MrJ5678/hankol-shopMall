export default {
	state: {
		list: [
			{
				name: "隆冬",
				phone: "18571850451",
				path: "黑龙江省 哈尔滨市 道里区 哈药路",
				detailPath: "正阳和街道",
				isDefault: false
			},
			{
				name: "隆冬",
				phone: "18571850451",
				path: "黑龙江省 哈尔滨市 道里区 哈药路",
				detailPath: "正阳和街道",
				isDefault: false
			}
		]
	},
	getters: {
		// 获取默认地址
		getDefaultPath(state) {
			return state.list.filter(v => v.isDefault)
		}
	},
	mutations: {
		// 创建收货地址
		createPath(state, item) {
			state.list.unshift(item)
		},
		// 删除收货地址
		deletePath(state, index) {
			state.list.splice(index, 1)
		},
		// 修改收货地址
		updatePath(state, {index, item}) {
			// state.list[index] = item
			for (let key in item) {
				state.list[index][key] = item[key]
			}
		},
		// 取消默认地址
		removeDefaultPath(state) {
			state.list.forEach(v => {
				if(v.isDefault) {
					v.isDefault = false
				}
			})
		}
	},
	
	actions: {
		// 修改地址
		updatePathAction({commit}, object) {
			if(object.item.isDefault) {
				commit('removeDefaultPath')
			}
			commit('updatePath', object)
		},
		// 增加地址
		createPathAction({commit}, item) {
			if(item.isDefault) {
				commit('removeDefaultPath')
			}
			commit('createPath', item)
		}
	}
}