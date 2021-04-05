export default {
	state: {
		// list: [],
		list: [
			{
				checked: false,
				id: 11,
				title: '商品标题111',
				cover: '/static/images/demo/cate-biaozhunban.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '规格',
						selectedIndex: 1,
						list: [
							// todo
							{name: '2支装'},
							{name: '4支装'},
						]
					}
				],
				pprice: 1598,
				number: 2,
				minnum: 1,
				maxnum: 10 // 此属性与库存相关
			},
			{
				checked: false,
				id: 12,
				title: '商品标题222',
				cover: '/static/images/demo/cate-biaozhunban.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '规格',
						selectedIndex: 0,
						list: [
							// todo
							{name: '2支装'},
							{name: '4支装'},
						]
					}
				],
				pprice: 888,
				number: 3,
				minnum: 1,
				maxnum: 10 // 此属性与库存相关
			},
			{
				checked: false,
				id: 13,
				title: '商品标题333',
				cover: '/static/images/demo/cate-biaozhunban.jpg',
				// 选中商品属性
				attrs: [
					{
						title: '规格',
						selectedIndex: 1,
						list: [
							// todo
							{name: '2支装'},
							{name: '4支装'},
						]
					}
				],
				pprice: 3690,
				number: 1,
				minnum: 1,
				maxnum: 10 // 此属性与库存相关
			},
		],
		// 选中项的一个数组 (存放选中项)
		selectedList: [],
		// popup 显示
		popupShow: "none",
		popupIndex: -1
	},
	getters: {
		// 判断是否全选
		checkedAll(state) {
			return state.list.length === state.selectedList.length
		},
		// 合计
		totalPrice(state) {
			var total = 0
			state.list.forEach(v => {
				if(state.selectedList.indexOf(v.id) > -1) {
					total += v.pprice * v.number
				}
			})
			return total
		},
		// 禁用全选
		disableSelectAll(state) {
			return state.list.length === 0
		},
		// 拿到当前需要修改属性的商品
		popupData(state) {
			return state.popupIndex > -1 ? state.list[state.popupIndex] : {}
		}
	},
	mutations: {
		// 选中/取消选中 某个商品
		selectItem(state, index) {
			let id = state.list[index].id
			let i = state.selectedList.indexOf(id)
			
			// 如果点击项已经是选中项
			if(i > -1) {
				// 取消点击项的选中状态
				state.list[index].checked = false
				// 从选中列表移除掉这一项
				return state.selectedList.splice(i, 1)
			}
			// 如果点击项不是选中状态
			state.list[index].checked = true
			state.selectedList.push(id)
		},
		// 进行全选操作
		selectAll(state) {
			state.selectedList = state.list.map(v => {
				// 设置每一个选中对象的 checked 值
				v.checked = true
				return v.id
			})
		},
		// 进行取消全选操作
		unSelectAll(state) {
			state.list.forEach(v => {
				// 设置每一个选中对象的 checked 值
				v.checked = false
			})
			state.selectedList = []
		},
		// 删除购物车选中项
		deleteGoods(state) {
			state.list = state.list.filter(v => {
				return state.selectedList.indexOf(v.id) === -1
			})
		},
		// 初始化 popupIndex
		initPopupIndex(state, index) {
			state.popupIndex = index
		},
		// 加入购物车
		addGoodsToCart(state, goods) {
			state.list.unshift(goods)
			
		}
	},
	actions: {
		// 点击合计栏的选中按钮
		doSelectAll({commit, getters}) {
			getters.checkedAll ? commit('unSelectAll') : commit('selectAll')
		},
		doDeleteGoods({commit}) {
			uni.showModal({
				content: '是否删除该商品?',
				success(res) {
					if(res.confirm) {
						commit('deleteGoods')
						uni.showToast({
							title: '删除成功!'
						});
					}
				}
			})
		},
		// 显示/隐藏 popup
		doShowPopup({commit, state}, index) {
			commit('initPopupIndex', index)
			state.popupShow = 'show'
		},
		doHidePopup({state}) {
			state.popupShow = 'hide'
			setTimeout(() => {
				state.popupShow = 'none'
				commit('initPopupIndex', -1)
			}, 200)
		},
	}
}