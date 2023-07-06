<template>
	


	<view class="cc">
		<!-- <index-tabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex"></index-tabbar> -->
		<!-- </view> -->

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
		<text class="xijie1">-----已显示全部活动预约-----</text>
	</view>
</template>

<script>
	import indexTabbar from '../toptabbarcompent/toptabbar/toptabbar.vue'
	export default {
		data() {
			return {
				list: [{
						title: "课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
						detial1: "闵行区",
						detial2: "6月6日",
						detial3: "报名成功！",
						detial4: " ",
						imgpass: "../../static/success.png",
						imgsrc: "../../static/jiuye1.jpg",
						url: "",
					},
					{
						title: "职业技能行业登记培训课程，火热招生种！",
						detial1: "徐汇区",
						detial2: "6月1日",
						detial3: "报名失败！",
						detial4: " ",
						imgpass: "../../static/fail.png",
						imgsrc: "../../static/jiuye2.jpg",
						url: "",
					}
				],
				tabIndex: "GuanZhu",
				tabBars: [{
						name: "关注",
						id: "GuanZhu"
					},
					{
						name: "推荐",
						id: "TuiJian"
					},
					{
						name: "财经",
						id: "caijing"
					},
					{
						name: "体育",
						id: 'tiyu'
					},
					{
						name: "娱乐",
						id: "yule"
					}
				],
				currentTabComponent: "GuanZhu"

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
					url: '../../pages/orderlist/orderlist'
				});
			},
			tabtap(index) {
				this.$emit('tabtap', index)
			}


		}
	}
</script>

<style>
	.uni-swiper-tab {
		border-bottom: 1upx solid #EEEEEE;
	}

	.active {
		color: #343434;
	}

	.active .swiper-tab-line {
		border-bottom: 6upx solid #5598E7;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #5598E7;
		border-radius: 20upx;
	}

	.cc {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-items: center;
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
		flex-direction: row;
		font-size: 30rpx;
		align-items: center;
		justify-items: center;
		padding-top: 30rpx;
		padding-left: 15rpx;
	}

	.xijie {
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