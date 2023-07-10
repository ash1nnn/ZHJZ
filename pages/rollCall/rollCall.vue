<template>
	<view class="content1" v-for="(item,index) in list1">
		<view class="content" >
			<view class="txt_right"  >
				<text class="title">
					{{item.title}}
				</text>
				<view class="litxt">
					<text class="xijie">{{item.text}}</text>
					<text class="xijie">{{item.text1}}</text>
				</view>
			</view>
		</view>
	</view>

<!-- 	<view class="a">
			<view class="ii" v-for="(item,index) in list1" >
					<img  :src="item.icon" alt="" class="img" >
					<view class="b">
						<text class="txt">{{item.text}}</text>
						<text class="txt1">{{item.text1}}</text>
					</view>	
			</view>
	</view>
 -->

</template>

<script>
	export default {
		data(){
			return{
				list1: [{
						icon: "../../static/xl.png",
						title:"日常点名",
						text: "地点：上海市徐汇区建国西路648号2718室",
						text1: "时间：2023-07-01 15:23"
					},
					{
						icon: "../../static/xl.png",
						title:"日常点名",
						text: "地点：上海市虹口区水电路609弄-210室",
						text1: "时间：2023-07-02 08:10"
					},
					{
						icon: "../../static/xl.png",
						title:"日常点名",
						text: "地点：上海市虹口区广灵一路74号",
						text1: "时间：2023-07-03 10:33"
					}
				],
			}
		},
		onLoad() {
			
			
		},
		methods: {	
			click(item){
				uni.navigateTo({
					url: item
				});
			}
			
		}
	}

</script>

<style>
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
		margin-bottom: 10rpx;
		margin-left: 15rpx;
		margin-right: 10rpx;
		margin-top: 30rpx;
		background-color: #eff1fe;
	
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
		width: 90%;
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
	
	

	
	.a{
		height: 100%;
		background-color: #FBFAFF;
	}
		
	.ii{
		display: flex;
		flex-direction: row;
		margin-top: 50rpx;
		margin-left: 15rpx;
		height: 140rpx;
		border: 1px solid #CDCDCD ;
		background-color: white;
		border-radius: 25rpx;
		width: 95%;
	}
	.img{
		width: 50rpx;
		height: 50rpx;
		margin-left: 40rpx;
		margin-top: 20rpx;
	}
	.b{
		display: flex;
		flex-direction: column;
	}
	.txt{
		margin-left: 40rpx;
		margin-top: 20rpx;

		
	}
	.txt1{
		margin-left: 40rpx;
		margin-top: 20rpx;
		font-size: 25rpx;
		color: #CDCDCD ;
	}

</style>