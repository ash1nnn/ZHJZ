<template>

	<!-- <view> -->
	<!-- <view class="content1"></view> -->
	<view class="">


		<view class="">
			<view class="content1">

			</view>

			<view class="search-block">
				<view class="search-ico-wapper">
					<image src="../../static/chongzhi_sousuo/chongzhi-icon-sousuo@3x.png" class="search-ico" mode="">
					</image>
				</view>
				<input type="text" value="" placeholder="请输入待查询活动名称" class="search-text" maxlength="10" focus />
				<view class="search-ico-wapper1">
					<image src="../../static/search.png" class="search-ico-1" mode="">
					</image>
				</view>
			</view>
			<view class="shadow">
			</view>
		</view>
		<view class="cc">
			<!-- </view> -->
			<!-- <button plain class="but" @click="tolist">活动预约查询</button> -->
			<view class="search" @click="tolist">
				<image src="../../static/acts.png" alt=""></image>
				<text>活动预约查询</text>
			</view>


			<view class="contentlist" v-for="(item,index) in list">
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
						title: "热招，职业技能行业登记培训课程，火热招生种！",
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
			tolist() {
				uni.navigateTo({
					url: '../../pages/orderlistnew/orderlistnew'
				});
			}
		}
	}
</script>

<style>
	.cc {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
		width: 100%;
		position: relative;
		top: -80upx;
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

	.search {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 110rpx;
		width: 110rpx;
		border-radius: 50%;
		background-color: #2f6dff;
		position: fixed;
		font-size: 16rpx;
		color: white;
		box-shadow: 0 0 3rpx #2f6dff;
		right: 50rpx;
		bottom: 100rpx;
		
	}
	.search image{
		padding-top: 20rpx;
		height: 50rpx;
		width: 50rpx;
	}

	.content {
		display: flex;
		flex-direction: row;
		width: 98%;
		/* position: absolute; */
		/* height: 200rpx; */

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
		box-shadow: 0 0 5px #bcbcbc;

	}

	.img {
		width: 25%;
		height: 200rpx;
	}

	.img1 {
		width: 100rpx;
		height: 100rpx;
	}

	.title {
		padding-top: 10rpx;
		padding-left: 15rpx;
		font-size: 35rpx;
		font-weight: 600;
		font-style: oblique;
		color: #5a6679;
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
		color: #5a6679;
	}


	.contentlist {
		display: flex;
		flex-direction: column;

		/* position: absolute; */
	}



	.content1 {
		height: 50rpx;
		background-color: #eff1fe;
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		/* border-bottom: ; */
	}

	page {
		background-color: #FFFFFF;
	}

	/* 搜索框 */
	.search-ico,
	.search-ico-1 {
		width: 40upx;
		height: 40upx;
	}

	.search-text {
		font-size: 14px;
		background-color: #FFFFFF;
		height: 60upx;
		width: 480upx;
	}

	.search-block {
		display: flex;
		flex-direction: row;
		padding-left: 60upx;
		position: relative;
		top: -32upx;
	}

	.search-ico-wapper {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0upx 0upx 0upx 40upx;
		border-bottom-left-radius: 18px;
		border-top-left-radius: 18px;
	}

	.search-ico-wapper1 {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0upx 40upx 0upx 0upx;
		border-bottom-right-radius: 18px;
		border-top-right-radius: 18px;
	}

	.shadow {
		width: 638upx;
		height: 60upx;
		border-radius: 18px;
		-moz-box-shadow: 0 0 10px #e6e6e6;
		-webkit-box-shadow: 0 0 10px #e6e6e6;
		box-shadow: 0 0 10px #e6e6e6;
		position: relative;
		top: -90upx;
		left: 60upx;
	}
</style>