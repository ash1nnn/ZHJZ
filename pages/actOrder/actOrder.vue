<template>
	<view class="cc">

		<button plain class="but" @click="tolist">活动预约查询</button>


		<view class="content1" v-for="(item,index) in list">
			<view class="content" @click="todetial()">
				<view class="txt_right">
					<text class="title">
						{{item.title}}
					</text>
					<view class="litxt">
						<text class="xijie">{{item.detial1}}</text>
						<text class="xijie">{{item.detial2}}</text>
						<text class="xijie">{{item.detial3}}</text>
						<text class="xijie">{{item.detial4}}</text>
						<img :src="item.imgpass" class="img1">
					</view>
				</view>
				<img :src="item.imgsrc" class="img">
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: "号外！号外！职业技能行业登记培训课程火热报名中！",
						detial1: "徐汇区",
						detial2: "6月1日",
						detial3: "剩余20人",
						detial4: "1天前",
						imgpass: "../../static/going (1).png",
						imgsrc: "../../static/jiuye1.jpg",
						url: "",
					},
					{
						title: "号外！号外！职业技能行业登记培训课程火热报名中！",
						detial1: "徐汇区",
						detial2: "6月1日",
						detial3: "剩余20人",
						detial4: "1天前",
						imgpass: "../../static/going (1).png",
						imgsrc: "../../static/jiuye1.jpg",
						url: "",
					},
					{
						title: "好消息！咖啡 日料 插花专项类补贴课程又来了，一定不要错过！",
						detial1: "闵行区",
						detial2: "6月3日",
						detial3: "剩余25人",
						detial4: "3天前",
						imgpass: "../../static/going (1).png",
						imgsrc: "../../static/jiuye2.jpg",
						url: "",
					},
					{
						title: "课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
						detial1: "闵行区",
						detial2: "6月6日",
						detial3: "剩余32人",
						detial4: "6天前",
						imgpass: "../../static/going (2).png",
						imgsrc: "../../static/jiuye1.jpg",
						url: "",
					},
					{
						title: "职业技能行业登记培训课程，火热招生种！",
						detial1: "徐汇区",
						detial2: "6月1日",
						detial3: "剩余20人",
						detial4: "1天前",
						imgpass: "../../static/going (3).png",
						imgsrc: "../../static/jiuye2.jpg",
						url: "",
					}
				]
			}
		},
		methods: {
			todetial() {
				uni.navigateTo({
					url: '../../pages/activatedetail/activatedetail'
				});
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
/* 	.cc{
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
		width: 100%;
	} */
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
		background-color: #ebf2ff;
		
	}

	.img {
		width: 25%;
		height: 200rpx;
	}
	.img1{
		width: 100rpx;
		height: 100rpx;
	}

	.title {
		padding-top: 10rpx;
		padding-left: 15rpx;
		font-size: 35rpx;
		font-weight: 600;
		font-style: oblique;
		color: #4b75ff;
	}

	.txt_right {
		display: flex;
		flex-direction: column;
		width: 70%;
	}

	.litxt {
		display: flex;
		flex-direction: row;
		font-size: 25rpx;
		align-items: center;
		justify-items: center;
		padding-top: 30rpx;
		padding-left: 15rpx;
	}

	.xijie {
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

