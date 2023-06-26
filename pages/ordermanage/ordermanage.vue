<template>
	<view class="cc">

		<!-- <button plain class="but" @click="tolist">活动预约查询</button> -->


		<view class="content1" v-for="(item,index) in list">
			<view class="content" @click="todetial(item)">
				<view class="txt_right">
					<text class="title1">
						{{item.title1}}
					</text>					
					<text class="title">
						{{item.title}}
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
						<!-- <text class="xijie">{{item.detial4}}</text> -->
						<!-- <img :src="item.imgpass" class="img1"> -->
					</view>
				</view>
				<!-- <img :src="item.imgsrc" class="img"> -->
			</view>
		</view>
		<text class="xijie1">-----已显示全部活动审核-----</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: "2",
						title1: "请审批：杨福宝 活动预约",
						title: "活动名称：【闵行区-6月6日】课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
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
						id: "1",
						title1: "请审批：胡骁俊 活动预约",
						title: "活动名称：【徐汇区-6月1日】职业技能行业登记培训课程，火热招生种！",
						detial1: "报名人:",
						detial2: "胡骁俊",
						detial3: "审核结果:",
						detial4: "",
						detial5: "通过",
						detial6: "未通过",
						imgpass: "../../static/sh (1).png",
						img1:"../../static/sh (2).png",
						imgsrc: "../../static/jiuye2.jpg",
						url: "2",
					}
				]
			}
		},
		methods: {
			todetial(item) {
				if(item.url==2){
					uni.showModal({
							title: '活动预约审核',
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
			tolist(){
				uni.navigateTo({
					url: '../../pages/orderlist/orderlist'
				});	
			}
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
		width: 100%;
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
		background-color: #ebf2ff;
		
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
		font-size: 40rpx;
		/* font-weight: 600; */
		/* font-style: oblique; */
		color: #0000ff;
	}
	.title {
		padding-top: 10rpx;
		padding-left: 15rpx;
		font-size: 30rpx;
		/* font-weight: 600; */
		/* font-style: oblique; */
		color: #4b75ff;
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
		color: #0000ff;
	}
	.xijie1 {
		font-size: 28rpx;
		padding-right: 20rpx;
		color: #3c66ef;
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

