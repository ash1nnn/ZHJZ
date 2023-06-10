<template>
	<view >
		<image class="a" src="../../static/check/1.png" mode="widthFix"></image>
	</view>
	<view class="new">
		<view class="cc" v-for="(item,index) in newsList" @click="click(item.url)">
				<img  :src="item.icon" alt="" class="dd" mode="widthFix">
		</view>
	</view>

	
</template>

<script>
		export default {
			data() {
				return {
					newsList: [{
							icon: "../../static/check/6.png",
							url: "/pages/leave/leave"
						},
						{
							icon: "../../static/check/7.png",
							url: "/pages/addressChange/addressChange"
						},
						{
							icon: "../../static/check/8.png",
							url: "/pages/locationChange/locationChange"
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
		width: 750rpx;
	}
	.new{
		margin-top: 10rpx;
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.cc{
		margin-top: 40rpx;
	}
	.dd{
		width: 330rpx;
		height: 280rpx;
	}
</style>