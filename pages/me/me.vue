<template>
	<view>
		<image class="a" src="../../static/me/1.jpg" mode="widthFix"></image>
		<view class="d">
			<image class="e" src="../../static/6.png" ></image>
			<view class="aa">
				<text class="f">张三</text>
				<text class="g">一级矫正对象</text>
			</view>
			<view class="bb">
				<view class="cc">
					<text class="i">10</text>
					<text class="i">今日积分</text>
				</view>
				<view class="cc">
					<text class="i">5h</text>
					<text class="i">今日学时</text>
				</view>
				<view class="cc">
					<text class="i">7</text>
					<text class="i">收藏</text>
				</view>
			</view>
		</view>
		<view class="b">
			<image src="../../static/me/2.png" mode="" class="c"></image>
			<text class="x">集中教育次数</text>
			<text class="y">5次</text>
		</view>
		<view class="b">
			<image src="../../static/me/3.png" mode="" class="c"></image>
			<text class="x">个别教育次数</text>
			<text class="y">3次</text>
		</view>
		<view class="b">
			<image src="../../static/me/4.png" mode="" class="c"></image>
			<text class="x">活动预约查询</text>
			<image src="../../static/me/6.png" mode="" class="z"></image>
		</view>
		<view class="b" @click="bigChange">
			<image src="../../static/me/5.png" mode="" class="c"></image>
			<text class="x">审批事项查询</text>
			<image src="../../static/me/6.png" mode="" class="z"></image>
			
		</view>
		<view class="h">
			<text class="xx">矫正平台</text>
			<view class="biaoge">
				<view class="ii" v-for="(item,index) in list1" @click="click(item)">
						<view class="icon"  >
							<img  :src="item.icon" alt="" class="img" >
						</view>
						<text class="txt">{{item.text}}</text>
				</view>

			</view>


		</view>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
						icon: "../../static/me/7.jpg",
						text: "沪智矫",
						appid: "wxd9c723d098992660",
						url: "/pages/flash/index",
					},
					{
						icon: "../../static/me/8.jpg",
						text: "慧矫正",
						appid: "wx14c2b0d4a80a43d0",
						url: "/pages/home/index",
					}
				],
				
			};
		},
		onLoad() {
			
		
		},
		methods: {	
			click(item){
				uni.navigateToMiniProgram({
				  appId: item.appid,
				  path: item.url, 
				  // extraData: {
				  // 			// 'type': 'out'
				  // 		},
				})

			},
			bigChange(){
						uni.navigateTo({
							url: '/pages/approveQuery/approveQuery'
						});
			},
		
		},
	}
</script>

<style lang="scss">
		
	.a{
		display: flex;
		flex-direction: column;
		width: 750rpx;
		height: 300rpx;
		position: relative;
	}
	.d{
		display: flex;
		flex-direction: row;
		// align-items: center;
		// justify-content: center;
		flex-wrap:wrap;
		width: 600rpx;
		height: 300rpx;
		margin-left: 60rpx;

		position: absolute;
		top: 100rpx;
		border: 3px solid #F5F6FA;
		border-radius: 25rpx;
		background-color: white;
		
	}
	.e{
		margin-top: 30rpx;
		margin-left:30rpx;
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
	}
	.aa{
		display: flex;
		flex-direction: column;
	}
	.f{
		margin-top: 30rpx;
		margin-left:100rpx;
		width: 100rpx;
		height: 20rpx;
		font-size: 30rpx;
		font-weight: bold;
	}
	.g{
		margin-top: 50rpx;
		margin-left:50rpx;
		width: 300rpx;
	}
		
	.bb{
		display: flex;
		flex-direction: row;
		width: 600rpx;
	}
	
	.cc{
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;

	}
		
	.i{
		color: gray;
		font-weight: 10;
		font-size: 28rpx;
	}
		
	.b{
		display: flex;
		flex-direction: row;
		margin-top: 40rpx;
		height: 80rpx;
		border-bottom: 3px solid #F5F6FA;
		
	}
	.c{
		width: 50rpx;
		height: 50rpx;
		margin-left: 30rpx;
	}
		
	.x{
		margin-left: 50rpx;
	}
	.y{
		margin-left: 300rpx;
	}
	.z{
		width:50rpx;
		height:50rpx;
		margin-left: 300rpx;
	}
	.h{
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
	}
	.xx{
		margin-top: 30rpx;
	}
	.biaoge {
		display: flex;
		flex-direction: row;
	}
	
	.ii {
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		justify-content: center;
		width: 180rpx;
		height: 200rpx;
		margin-top: 50rpx;

	
	}
	.txt {
		padding-top: 10rpx;
		padding-bottom: 20rpx;
		font-size: 35rpx;
		font-weight: 400;
		color: #00007f;

	}
	.icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// background-color: #3376ba;
		width: 130rpx;
		height: 130rpx;
		// border-radius: 50%;
		margin-top: 30rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;

	}
	.img {
		height: 120rpx;
		width: 120rpx;
	}

</style>
