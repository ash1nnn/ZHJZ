<template>
	<view >
		<image class="a" src="https://test-37b.pages.dev/check/1.png" mode="widthFix"></image>
	</view>
	<view class="new">
		<view  v-for="(item,index) in list1" @click="click(item.url)" :key="index">
			<view :class="'aa'+(index+1)">
				<text class="txt">{{item.text}}</text>
				<img  :src="item.icon"  class="dd" mode="widthFix">
			</view>
		</view>
	</view>
</template>

<script>
		export default {
			data() {
				return {
					list1: [{
							icon: "../../static/check/6.png",
							text: "矫正须知",
							url: "/pages/notice/notice"
						},
						{
							icon: "../../static/check/7.png",
							text: "日常点名",
							url: "/pages/rollCall/rollCall"
							
						},
						{
							icon: "../../static/check/8.png",
							text: "签到签退",
							url: "/pages/sign/sign"
							
						},
						{
							icon: "../../static/check/9.png",
							text: "审批事项办理",
							url: "/pages/approve/approve"
							
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
	.a{
		width: 700rpx;
		margin-left: 20rpx;
	}
	.new{
		margin-top: 10rpx;
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.aa1{
		margin-top: 40rpx;
		width: 330rpx;
		height: 230rpx;
		background-color: #ACF6DB;
		border-radius: 30rpx;
	}
	.aa2{
		margin-top: 40rpx;
		width: 330rpx;
		height: 230rpx;
		background-color: #6796F9;
		border-radius: 30rpx;
	}
	.aa3{
		margin-top: 40rpx;
		width: 330rpx;
		height: 230rpx;
		background-color: #FED9A8;
		border-radius: 30rpx;
	}
	.aa4{
		margin-top: 40rpx;
		width: 330rpx;
		height: 230rpx;
		background-color: #BFD0FF;
		border-radius: 30rpx;
	}
		
	.txt{
		display: inline-block;
		margin-top: 20rpx;
		padding-left: 30rpx;
		color: white;
		font-weight: 300;
		position: absolute;
	}
	.dd{
		margin-top: 100rpx;
		padding-left: 200rpx;
		width: 100rpx;
		height: 100rpx;
	}
</style>