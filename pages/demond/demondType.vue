<template>
	<!-- 矫正对象端type -->
	<view >
		<image class="a" src="https://test-37b.pages.dev/check/1.png" mode="widthFix"></image>
<!-- 		<image class="a" src="../../static/demondType/demondType.png" mode="widthFix"></image> -->
	</view>
	<view class="new">
		<view class="cc" v-for="(item,index) in newsList" @click="click(item.url,item.type)">
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
							url: "/pages/demond/weChat",
							type:"1"
						},
						{
							icon: "../../static/demondType/xl.png",
							url: "/pages/demond/weChat",
							type:"2"
						},
						{
							icon: "../../static/demondType/fl.png",
							url: "/pages/demond/weChat",
							type:"3"
						},
						{
							icon: "../../static/demondType/jy.png",
							url: "/pages/demond/weChat",
							type:"4"
						}
						
					],
				}
	
			},
			onLoad() {
				
	
			},
			methods: {	
				click(item,type){
					// console.log(type);
					uni.setStorage({key:'demandType',data:type});
					let tid = uni.getStorageSync('demandType');
					// console.log(tid);
						
						uni.navigateTo({
							url:item
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