<template>
	
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
						text: "矫正中心开放日预约",
					},
					{
						icon: "../../static/4.png",
						text: "志愿服务预约",
						
					},
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
		height: 200rpx;
		border: 3px solid #F5F6FA;
		border-radius: 25rpx;
		margin-top: 50rpx;
		background-color: #ebf2ff;
	}
		
	.img{
		height: 120rpx;
		width: 120rpx;
		margin-left: 100rpx;
		margin-top: 20rpx;
	}
	.txt{
		margin-top: 50rpx;
		margin-left: 80rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: #00007f;
	}
</style>