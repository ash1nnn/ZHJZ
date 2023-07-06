<template>
	<view class="cc">

		<!-- <button plain class="but" @click="tolist">活动预约查询</button> -->


		<view class="content1" v-for="(item,index) in list">
			<view class="content" >
				<view class="txt_right">
					<text class="title">
						{{item.title}}
					</text>
					<view class="litxt">
						<text class="xijie">{{item.detial1}}</text>
						<text class="xijie">{{item.detial2}}</text>
						<text class="xijie">{{item.detial3}}</text>
						<img :src="item.imgpass" class="img1">
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: "审批事项：外出请假",
						detial1: "时间：2023.5.20-2023.5.25",
						detial2: "外出目的地：江苏省太仓市",
						detial3: "审核情况：通过！",
						imgpass: "../../static/success.png",
					},
					{
						title: "审批事项：居住地变更",
						detial1: "时间：2023.6.24",
						detial2: "外出目的地：上海市徐家汇街道",
						detial3: "审核情况：不通过！",
						imgpass: "../../static/fail.png",
						},

				]
			}
		},
		methods: {
		
		}
	}
</script>

<style>
	.cc{
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
		/* width: 100%; */
	}
	
	.content1{
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
	.img1{
		width: 150rpx;
		height: 150rpx;
		position: absolute;
		top: 30rpx;
		left: 500rpx;
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
		width: 70%;
	}

	.litxt {
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		position: relative;


	}

	.xijie {
		margin-left: 50rpx;
		margin-top: 20rpx;
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

