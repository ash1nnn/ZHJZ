<template>
	<view >
		<image class="a" src="https://test-37b.pages.dev/check/1.png" mode="widthFix"></image>
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
							url: "/pages/demond/typeAnswer/demondAnswerHelp"
						},
						{
							icon: "../../static/demondType/xl.png",
							url: "/pages/demond/demondAnswer"
						},
						{
							icon: "../../static/demondType/fl.png",
							url: "/pages/demond/typeAnswer/demondAnswerLaw"
						},
						{
							icon: "../../static/demondType/jy.png",
							url: "/pages/demond/typeAnswer/demondAnswerEmploy"
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
		width: 710rpx;
		margin-left: 20rpx;
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
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
</style>