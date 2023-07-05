<template>
	<view class="ss">
		<image src="../../static/hd.jpg" mode="widthFix"></image>
<!-- 		<image src="../../static/400.jpg" mode=""></image>
		<image src="../../static/400.jpg" mode=""></image> -->
		<!-- <text class="but" plain @click="orderok" >立即报名</text> -->
		<text class="but"  @click="orderok" >立即报名</text>
	</view >
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			orderok(){
				const ook = uni.getStorage({
					key:"orderok"
				})
				if (ook) {
					uni.showToast({
						title:"已报名！",
						icon: 'success',
						duration: 490
					})
				} else{
					uni.setStorage({
						data: true,
						key:"orderok"
					})
					
					uni.showToast({
					    title: '报名成功！',
					    //将值设置为 success 或者直接不用写icon这个参数
					    icon: 'success',
					    //显示持续时间为 2秒
					    duration: 490
					});
				}

				setTimeout(function() {
				uni.navigateTo({
					url: '../../pages/orderlist/orderlist'
				});					
				}, 500);
				// uni.navigateTo({
				// 	url: '../../pages/orderlist/orderlist'
				// });
				
			}
			
		}
	}
</script>

<style>
	.ss{
		display: flex;
		flex-direction: column;
		margin-bottom: 100rpx;
/* 		align-items: center;
		align-content: center;
		justify-items: center;
		justify-content: center; */
		text-align: center;
	}
	.but{
/* 		justify-items: center;
		align-content: center; */
		background-color: #ff0000;
		font-size: 45rpx;
		color: #ffffff;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		/* border-bottom: #FFFFFF; */
		/* button[plain]{ border:0 }; */
		/* border-radius: 40rpx; */
		/* border: 0; */
/* 		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-bottom: 50rpx;
		margin-top: 30rpx; */
		width:100%;
		
		position:fixed;
		bottom:0;
		
		
	}
</style>

