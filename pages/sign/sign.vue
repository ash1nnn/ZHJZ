<template>
	<view >
		<image class="a" src="https://test-37b.pages.dev/check/1.png" mode="widthFix"></image>
	</view>
	<view class="new">
		<view class="cc" v-for="(item,index) in newsList" >
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
					newsList: [{
							icon: "../../static/check/10.png",
							text: "个别教育",
						},
						{
							icon: "../../static/check/11.png",
							text: "集中教育",
						},
						{
							icon: "../../static/check/12.png",
							text: "公益活动",
						}
						
					],
				}
	
			},
			onLoad() {
				
	
			},
			methods: {	
	
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

		
	.txt{
		display: inline-block;
		margin-top: 20rpx;
		padding-left: 30rpx;
		color: white;
		font-weight: 100;
		position: absolute;
	}
	.dd{
		margin-top: 100rpx;
		padding-left: 200rpx;
		width: 100rpx;
		height: 100rpx;
	}
</style>