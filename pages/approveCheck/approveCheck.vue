<template>
	<view class="topTabBar">
		<view class="grid" v-for="(item, tbIndex) in handlingType" @click="showType(tbIndex)">
			<!-- <view class="">
				{{item.value}}
			</view> -->
			<view class="text" :class="[tbIndex == tabbarIndex ? 'active' : '']">{{item.value}}</view>
	
		</view>
	</view>
	<view class="cc" v-if="tabbarIndex==0">
		<view class="content1" v-for="(item,index) in list">
			<view class="content" @click="todetial(item)">
				<view class="txt_right">
					<text class="title1">
						{{item.title1}}
					</text>					
					<text class="title">
						{{item.title}}
					</text>
					<text class="title">
						{{item.title2}}
					</text>
					<view class="litxt">
						<text class="xijie">{{item.detial1}}</text>
						<text class="xijie">{{item.detial2}}</text>
						<text class="xijie">{{item.detial3}}</text>
						<text class="xijie" v-if="item.id == 1">{{item.detial4}}</text>
						<text class="xijie" v-if="item.id == 2">{{item.detial5}}</text>
						<text class="xijie" v-if="item.id == 3">{{item.detial6}}</text>
						<img :src="item.imgpass" class="img1" v-if="item.url == 1">
						<img :src="item.img1" class="img1" v-if="item.url == 2">
					</view>
				</view>
				<!-- <img :src="item.imgsrc" class="img"> -->
			</view>
		</view>
		<text class="xijie1">-----已显示全部审批事项审核-----</text>
	</view>
	<view class="cc" v-if="tabbarIndex==1">
		<view class="content1" v-for="(item,index) in list1">
			<view class="content" @click="todetial(item)">
				<view class="txt_right">
					<text class="title1">
						{{item.title1}}
					</text>					
					<text class="title">
						{{item.title}}
					</text>
					<text class="title">
						{{item.title2}}
					</text>
					<view class="litxt">
						<text class="xijie">{{item.detial1}}</text>
						<text class="xijie">{{item.detial2}}</text>
						<text class="xijie">{{item.detial3}}</text>
						<text class="xijie" v-if="item.id == 1">{{item.detial4}}</text>
						<text class="xijie" v-if="item.id == 2">{{item.detial5}}</text>
						<text class="xijie" v-if="item.id == 3">{{item.detial6}}</text>
						<img :src="item.imgpass" class="img1" v-if="item.url == 1">
						<img :src="item.img1" class="img1" v-if="item.url == 2">
					</view>
				</view>
				<!-- <img :src="item.imgsrc" class="img"> -->
			</view>
		</view>
		<text class="xijie1">-----已显示全部审批事项审核-----</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarIndex: 0,
				handlingType: [{
						value: '待审核'
					},
					{
						value: '已审核'
					}
				],
				list: [{
						id: "1",
						title1: "请审批：请假",
						title: "地点：江苏省太仓市",
						title2: " 时间：2023.6.22-2023.6.24",
						detial1: "报名人:",
						detial2: "杨福宝",
						detial3: "审核结果:",
						detial4: "",
						detial5: "通过",
						detial6: "未通过",
						imgpass: "../../static/sh (1).png",
						img1:"../../static/sh (2).png",
						imgsrc: "../../static/jiuye1.jpg",
						url: "2",
					},
					{
						id: "1",
						title1: "请审批：居住地变更",
						title: "地点：上海市徐家汇街道",
						title2: " 时间：2023.6.24",
						detial1: "报名人:",
						detial2: "胡骁俊",
						detial3: "审核结果:",
						detial4: "",
						detial5: "通过",
						detial6: "未通过",
						imgpass: "../../static/sh (1).png",
						img1: "../../static/sh (2).png",
						imgsrc: "../../static/jiuye2.jpg",
						url: "2",
					}
				],
				list1: [{
						id: "2",
						title1: "请审批：请假",
						title: "地点：江苏省太仓市",
						title2: " 时间：2023.6.22-2023.6.24",
						detial1: "报名人:",
						detial2: "杨福宝",
						detial3: "审核结果:",
						detial4: "",
						detial5: "通过",
						detial6: "未通过",
						imgpass: "../../static/sh (1).png",
						img1:"../../static/sh (2).png",
						imgsrc: "../../static/jiuye1.jpg",
						url: "1",
					},
					{
						id: "3",
						title1: "请审批：居住地变更",
						title: "地点：上海市徐家汇街道",
						title2: " 时间：2023.6.24",
						detial1: "报名人:",
						detial2: "胡骁俊",
						detial3: "审核结果:",
						detial4: "",
						detial5: "通过",
						detial6: "未通过",
						imgpass: "../../static/sh (1).png",
						img1: "../../static/sh (2).png",
						imgsrc: "../../static/jiuye2.jpg",
						url: "1",
					}
				],
			}
		},
		methods: {
			todetial(item) {
				if(item.url == 2){
					uni.showModal({
							title: '审批事项审核',
							content: '是否同意该申请？',
							
							cancelText: "不同意",
							// 确认按钮的文字自定义
							confirmText: "同意",
							success: function(res) {
							if (res.confirm) {
							    // 执行确认后的操作
								item.url = 1;
								item.id = 2;
							} 
							else {
								// 执行取消后的操作
								item.url = 1;
								item.id = 3;
								
							}
						}
					})
				}
			
			
			},
			// tolist(){
			// 	uni.navigateTo({
			// 		url: '../../pages/orderlist/orderlist'
			// 	});	
			// },
			showType(tbIndex) {
				// that = this
				//跳转订单列表类型
				this.tabbarIndex = tbIndex;
				if (this.tabbarIndex == 0) {
			
				}
				if (this.tabbarIndex == 1) {
			
				}
				console.info(this.tabbarIndex)
			},
		}
	}
</script>

<style>
	.topTabBar {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 0px;
		background-color: #f8f8f8;
	}
	
	.grid {
		width: 20%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #444;
		font-size: 28upx;
	}
	
	.text {
		height: 76upx;
		display: flex;
		align-items: center;
	}
	
	.active {
		color: #0a79ff;
		border-bottom: solid 4upx #0a79ff;
	}
	.cc{
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
		width: 100%;
		padding-top: 30px;
	}
	.but[plain]{
		background-color: #ebf2ff;
		font-size: 35rpx;
		color: #4b75ff;
		/* border-bottom: #FFFFFF; */
		/* button[plain]{ border:0 }; */
		border-radius: 40rpx;
		border: 0;
		margin-left: 10rpx;
		margin-right: 10rpx;
		
		
	}
	.content1{
		width: 100%;
		/* padding-left: 20rpx; */
	}
	.content {
		display: flex;
		flex-direction: row;
		width: 98%;
		padding-left: 20rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 40rpx;
		/* border-bottom: 5rpx solid #ececec; */
		/* border-top: 5rpx solid #ececec; */
/* 		border-left: 5rpx solid #ec/* ecec;
		border-right: 5rpx solid #ececec; */ 
		margin-bottom: 10rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;
		background-color: #eff1fe;
		box-shadow: 0 0 10px #e6e6e6;
		
	}

	.img {
		width: 25%;
		height: 200rpx;
	}
	.img1{
		width: 100rpx;
		height: 100rpx;
		padding-left: 20rpx;
	}

	.title1 {
		padding-top: 10rpx;
		padding-left: 15rpx;
		font-size: 35rpx;
		/* font-weight: 600; */
		/* font-style: oblique; */
		color: #5a6679;
	}
	.title {
		padding-top: 10rpx;
		padding-left: 15rpx;
		font-size: 30rpx;
		/* font-weight: 600; */
		/* font-style: oblique; */
		color: #5a6679;
	}

	.txt_right {
		display: flex;
		flex-direction: column;
		width: 95%;
	}

	.litxt {
		display: flex;
		flex-direction: row;
		font-size: 30rpx;
		align-items: center;
		justify-items: center;
		padding-top: 30rpx;
		padding-left: 15rpx;
	}

	.xijie {
		font-size: 32rpx;
		padding-right: 20rpx;
		color: #5a6679;
	}
	.xijie1 {
		font-size: 28rpx;
		padding-right: 20rpx;
		color: #5a6679;
	}

	.weui-search-bar {
		position: relative;
		padding: 8px 10px;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		box-sizing: border-box;
		background-color: #EFEFF4;
		border-top: 1rpx solid #D7D6DC;
		border-bottom: 1rpx solid #D7D6DC;
	}

	.weui-icon-search_in-box {
		position: absolute;
		left: 10px;
		top: 7px;
	}

	.weui-search-bar__form {
		position: relative;
		-webkit-box-flex: 1;
		-webkit-flex: auto;
		flex: auto;
		border-radius: 5px;
		background: #FFFFFF;
		border: 1rpx solid #E6E6EA;
	}

	.weui-search-bar__box {
		position: relative;
		padding-left: 30px;
		padding-right: 30px;
		width: 100%;
		box-sizing: border-box;
		z-index: 1;
	}

	.weui-search-bar__input {
		height: 28px;
		line-height: 28px;
		font-size: 14px;
	}

	.weui-search-bar__cancel-btn {
		margin-left: 10px;
		line-height: 28px;
		color: #09BB07;
		white-space: nowrap;
	}
</style>

