<template>

	<view class="a" @click="change(item.id)" v-for="(item,index) in list1">
		<image class="b" src="../../static/6.png" ></image>
		<text class="x">{{item.text}}</text>
		<image src="../../static/me/6.png" mode="" class="z"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
						id: "1",
						text: "杨福宝",
					},
					{
						id: "2",
						text: "蒋振良",
					},
					{
						id: "3",
						text: "胡晓俊",
					},
					{
						id: "4",
						text: "姚惠琴",
					},
					{
						id: "5",
						text: "宋百旺",
					},
				],
				
			};
		},
		onLoad() {
			
		
		},
		methods: {	
			change(id) {
			       uni.navigateTo({
			         url: '/pages/member/member?id=' + JSON.stringify(id)//将传递的对象转化成字符串
			       })
			     },

		
		},
	}
</script>

<style>
	.a{
		display: flex;
		flex-direction: row;
		margin-top: 40rpx;
		height: 80rpx;
		border-bottom: 3px solid #F5F6FA;
		
	}
	.b{
		margin-left:50rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}
	.x{
		margin-left: 50rpx;
		margin-top: 10rpx;
	}
	.z{
		width:50rpx;
		height:50rpx;
		margin-left: 400rpx;
	}
</style>