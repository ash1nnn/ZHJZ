<template>
	<view >
		<image src="../../static/2.png" mode="widthFix" class="a"></image>
	</view>
	<view class="b">
			<view class="ii" v-for="(item,index) in list1" @click="click(item.url)">
					<view class="icon"  >
						<img  :src="item.icon" alt="" class="img" >
					</view>
					<text class="txt">{{item.text}}</text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classify:1,
				title: 'Hello',
				list1: [{
						icon: "../../static/3.png",
						text: "个别教育",
					},
					{
						icon: "../../static/4.png",
						text: "集中教育",
						
					},
					{
						icon: "../../static/5.png",
						text: "公益活动",
						
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
	.b{
		display: flex;
		flex-direction: column;
		
	}
		
	.ii{
		display: flex;
		flex-direction: row;
		width: 720rpx;
		height: 150rpx;
		border: 3px solid #F5F6FA;
		border-radius: 25rpx;
		background-color: white;
	}
		
	.img{
		height: 120rpx;
		width: 120rpx;
		margin-left: 100rpx;
		margin-top: 20rpx;
	}
	.txt{
		margin-top: 50rpx;
		margin-left: 100rpx;
		font-size: 40rpx;
		font-weight: 400;
		color: #00007f;
	}
</style>