<template>
	<view >
		<image class="a" src="https://test-37b.pages.dev/check/1.png" mode="widthFix"></image>
<!-- 		<image class="a" src="../../static/demondType/demondType.png" mode="widthFix"></image> -->
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
							icon: "../../static/demondType/bk.png",
							url: "/pages/demond/weChat"
						},
						{
							icon: "../../static/demondType/xl.png",
							url: "/pages/demond/weChat"
						},
						{
							icon: "../../static/demondType/fl.png",
							url: "/pages/demond/weChat"
						},
						{
							icon: "../../static/demondType/jy.png",
							url: "/pages/demond/weChat"
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