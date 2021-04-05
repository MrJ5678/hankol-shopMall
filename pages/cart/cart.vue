<template>
	<view style="background-color: #F5F5F5;">
		<uni-nav-bar 
			statusBar
			:right-text="isEdit ? '完成' : '编辑'" 
			@clickRight="isEdit = !isEdit"
			title="购物车"
			class="navBar"
		>
		</uni-nav-bar>
		
		<!-- 购物车为空 -->
		<view v-if="disableSelectAll" class="py-5 d-flex j-center a-center bg-white" :style="{'margin-top': `${navBarHeight * 2 - 10}rpx`}">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50upx;"></view>
			<text class="text-light-muted mx-2">购物车是空的</text>
			<view class="px-2 py-1 border border-light-secondary rounded" hover-class="bg-light-secondary">去逛逛</view>
		</view>
		
		<!-- 购物车商品列表 -->
		<view v-else class="bg-white px-2" :style="{'margin-top': `${navBarHeight * 2 - 10}rpx`}">
			<!-- 列表 -->
			<view 
				class="d-flex a-center py-3 border-bottom border-light-secondary"
				v-for="(item, index) in list"
				:key="index"
			>
				<label class="radio d-flex a-center j-center flex-shrink" style="width: 80upx;height: 80upx;" @click="selectItem(index)">
					<radio :value="item.id" :checked="item.checked" color="#7d1d29" /><text></text>
				</label>
				
				<view class="border border-light-secondary rounded p-2 flex-shrink">
					<image 
						:src="item.cover" 
						mode="widthFix"
						style="width: 150rpx;height: 150rpx;"
					>
					</image>					
				</view>
				
				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark" style="font-size: 35upx;">
						{{item.title}}
					</view>
					<!-- 规格属性 -->
					<view class="d-flex text-light-muted mb-1" :class="isEdit ? 'p-1 bg-light-secondary mb-2' : ''" @tap.stop="doShowPopup(index)">
						<text 
							v-for="(attr, attrIndex) in item.attrs"
							:key="attrIndex"
							class="mr-1"
						>
							{{attr.list[attr.selectedIndex].name}}
						</text>
						<view v-if="isEdit" class="iconfont icon-bottom font ml-auto"></view>
					</view>
					
					<view class="mt-auto d-flex j-sb">
						<price>{{item.pprice}}</price>
						
						<view class="a-self-end">
							<uni-number-box 
								:min="item.minnum" 
								:value="item.number"
								:max="item.maxnum"
								@change="changeNumber($event ,item, index)"
							>
							</uni-number-box>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 占位 -->
		<view style="height: 100upx;"></view>
		<!-- 合计 -->
		<view class="d-flex a-stretch position-fixed left-0 right-0 bottom-0 border-top border-light-secondary bg-white" style="height: 100upx;z-index: 1000;">
			<label 
				class="radio d-flex a-center j-center flex-shrink" 
				style="width: 120upx;"
				@click="doSelectAll"
			>
				<radio :color="disableSelectAll ? '#ddd' : '#7d1d29'" :checked="checkedAll" :disabled="disableSelectAll" /><text></text>
			</label>
			
			<template v-if="!isEdit">
				<view class="flex-1 d-flex a-center j-center font-md">
					合计
					<price>{{totalPrice}}</price>
				</view>
				<view 
					class="flex-1 my-1 mr-2 d-flex a-center j-center main-bg-color main-text-color rounded text-white font-md" 
					hover-class="main-bg-hover-color"
				>
					结算
				</view>
			</template>
			
			<template v-else>
				<view class="flex-1 d-flex my-1 mr-2 a-center j-center font-md rounded bg-primary text-white">
					移入收藏
				</view>
				<view 
					class="flex-1 my-1 mr-2 d-flex a-center j-center main-bg-color main-text-color rounded text-white font-md" 
					hover-class="main-bg-hover-color"
					@tap="doDeleteGoods"
				>
					删除
				</view>
			</template>
		</view>
		
		<!-- 弹出框 -->
		<common-popup :popupClass="popupShow" @hide="doHidePopup">
			<!-- 商品信息 图片 介绍等 -->
			<view class="d-flex a-center" style="height: 275rpx;">
				<image 
					src="../../static/images/demo/cate-biaozhunban.jpg" 
					mode="widthFix"
					style="width: 180rpx;height: 180rpx;"
					class="border rounded"
				></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">796</price>
					<view class="d-block">
						<text 
							v-for="(attr, attrIndex) in popupData.attrs"
							:key="attrIndex"
							class="mr-1"
						>
							{{attr.list[attr.selectedIndex].name}}
						</text>
					</view>
				</view>
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y class="w-100" style="height: 580rpx;">
				<card 
					v-for="(item, index) in popupData.attrs"
					:key="index"
					:headTitle="item.title"
					:headTitleWeight="false" 
					:headBorderBottom="false">
					<hq-radio-group :label="item" :selectedIndex.sync="item.selectedIndex"></hq-radio-group>
				</card>
				
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<uni-number-box 
						:min="1" 
						:value="popupData.number"
						@change="popupData.number = $event"
					></uni-number-box>
				</view>
				
			</scroll-view>
			<!-- 按钮 -->
			<view 
				class="main-bg-color text-white font-md d-flex a-center j-center rounded mt-2" 
				hover-class="main-bg-hover-color" 
				@tap.stop="doHidePopup"
				style="height: 100rpx;">
				确定
			</view>
		</common-popup>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import price from '@/components/common/price.vue'
	import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue'
	import commonPopup from '@/components/common/common-popup.vue'
	import card from '@/components/common/card.vue'
	import hqRadioGroup from '@/components/common/radio-group.vue'
	import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
	
	export default {
		components: {uniNavBar, price, uniNumberBox, card, hqRadioGroup, commonPopup},
		data() {
			return {
				isEdit: false,
				navBarHeight: 0,
			}
		},
		computed: {
			...mapState({
				list: state => state.cart.list,
				popupShow: state => state.cart.popupShow
			}),
			...mapGetters(['checkedAll', 'totalPrice', 'disableSelectAll', 'popupData'])
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.navBar').fields({size: true}, data => {
				this.navBarHeight = data.height
			}).exec()
		},
		methods: {
			...mapActions(['doSelectAll', 'doDeleteGoods', 'doShowPopup', 'doHidePopup']),
			...mapMutations(['selectItem']),
			changeNumber(e, item, index) {
				item.number = e
			},
		}
	}
</script>

<style>
.navBar {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
}	
</style>