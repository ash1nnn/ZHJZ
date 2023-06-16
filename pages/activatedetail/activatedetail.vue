<template>
	<view class="ss">
		<image src="../../static/400.jpg" mode=""></image>
		<image src="../../static/400.jpg" mode=""></image>
		<image src="../../static/400.jpg" mode=""></image>
		<button class="but" plain >立即报名</button>
	</view >
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.ss{
		display: flex;
		flex-direction: column;
		margin-bottom: 100rpx;
	}
	.but[plain]{
		background-color: #aaf4db;
		font-size: 45rpx;
		color: #20cfa7;
		/* border-bottom: #FFFFFF; */
		/* button[plain]{ border:0 }; */
		border-radius: 20rpx;
		border: 0;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-bottom: 50rpx;
		margin-top: 30rpx;
		
		
	}
</style>

