<template>
	<view class="cc">	
		<view class="topTabBar">
			<view class="grid" v-for="(item, tbIndex) in handlingType" @click="showType(tbIndex)">
				<!-- <view class="">
					{{item.value}}
				</view> -->
				<view class="text" :class="[tbIndex == tabbarIndex ? 'active' : '']">{{item.value}}</view>
		
			</view>
		</view>
		<view class="cc1" v-if="tabbarIndex==0">
			<view class="content1" v-for="(item,index) in list">
				<view class="content" >
					<view class="txt_right">
						<text class="title">
							{{item.title}}
						</text>
						<view class="may">
							<view class="litxt">
								<text class="xijie">{{item.detial1}}</text>
								<text class="xijie">{{item.detial2}}</text>
								<text class="xijie">{{item.detial3}}</text>
							</view>
							<img :src="item.imgpass" class="img1">
						</view>
					
					</view>
				</view>
			</view>
			<text class="xijie1">-----已显示全部审批事项-----</text>
		</view>
		<view class="cc1" v-if="tabbarIndex==1">
			<view class="content1" v-for="(item,index) in list1">
				<view class="content" >
					<view class="txt_right">
						<text class="title">
							{{item.title}}
						</text>
						<view class="may">
							<view class="litxt">
								<text class="xijie">{{item.detial1}}</text>
								<text class="xijie">{{item.detial2}}</text>
								<text class="xijie">{{item.detial3}}</text>
							</view>
							<img :src="item.imgpass" class="img1">
						</view>
					
					</view>
				</view>
			</view>
			<text class="xijie1">-----已显示全部审批事项-----</text>
		</view>

	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				tabbarIndex: 0,
				handlingType: [{
						value: '已审核'
					},
					{
						value: '审核中'
					}
				],
				list: [{
						title: "审批事项：外出请假",
						detial1: "时间：2023.05.20-2023.05.25",
						detial2: "外出目的地：江苏省太仓市",
						detial3: "审核情况：通过！",
						imgpass: "../../static/success.png",
					},
					{
						title: "审批事项：居住地变更",
						detial1: "时间：2023.06.24",
						detial2: "外出目的地：上海市徐家汇街道",
						detial3: "审核情况：未通过！",
						imgpass: "../../static/fail.png",
						},

				],
				list1: [{
						title: "审批事项：外出请假",
						detial1: "时间：2023.05.20-2023.05.25",
						detial2: "外出目的地：江苏省太仓市",
						detial3: "审核情况：审核中",
						imgpass: "../../static/sh (2).png",
					},
					{
						title: "审批事项：居住地变更",
						detial1: "时间：2023.06.24",
						detial2: "外出目的地：上海市徐家汇街道",
						detial3: "审核情况：审核中",
						imgpass: "../../static/sh (2).png",
						},
				
				]
			}
		},
		methods: {
			showType(tbIndex) {
				that = this
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
	
	
	
	.cc {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
		/* width: 100%; */
	}
	.cc1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
		padding-top: 30px;
		/* width: 100%; */
	}
	
	.but[plain] {
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
	
	.content1 {
		width: 98%;
	}
	
	.content {
		display: flex;
		flex-direction: row;
		width: 98%;
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
	
	}
	
	.img {
		width: 25%;
		height: 200rpx;
	}
	
	.img1 {
		width: 100rpx;
		height: 100rpx;
		margin-top: 50rpx;
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
		width: 100%;
	}
	
	.litxt {
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		width: 600rpx;
		font-size: 30rpx;
/* 		align-items: center;
		justify-items: center; */
/* 		padding-top: 30rpx;
		padding-left: 15rpx; */
	}
	.may{
		display: flex;
		flex-direction: row;
		width:90%;
	}
	.xijie {
		font-size: 24rpx;
		padding-right: 20rpx;
		color: #5a6679;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}
	
	.xijie1 {
		font-size: 24rpx;
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
	
	.tabs {
		display: flex;
		flex: 1;
		flex-direction: row;
		overflow-x: scroll;
		height: 100%;
	}
	
	.uni-tab-item {
		width: 100%;
		white-space: nowrap;
		line-height: 100rpx;
		height: 100rpx;
		border-bottom: 1px solid #eee;
	}
	
	.uni-tab-item-title {
		color: #969696;
		font-weight: bold;
		font-size: 38rpx;
		width: 150rpx;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	
	.tabActive {
		color: #343434;
	}
	
	.tabActive .tab-item-title-line {
		display: block;
		border-bottom: 4rpx solid #fede33;
		border-top: 4rpx solid #fede33;
		width: 86rpx;
		margin: 0 auto;
		border-radius: 40rpx;
		margin-top: -10px;
		background-color: #FEDE33;
		box-sizing: border-box;
	}

</style>

