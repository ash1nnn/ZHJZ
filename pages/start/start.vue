<template>
	<view class="bk">
		<image src="../../static/sf.jpg" mode="widthFix"></image>

		<view class="max">
			<text class="txt">你好，欢迎来到社矫之家</text>
			<view class="tel">
				<text>身份证：</text>
				<view class="t">
				<input class="t" type="text" focus placeholder="请输入身份证号">
				</view>
			</view>
			<view class="tel">
				<text>手机号：</text>
				<view class="t">
				<input class="t" type="text" focus placeholder="请输入手机号">
				</view>
			</view>

			<button @click="goto()" class="but"><text>登陆</text></button>
			<view class="bot"> </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goto(url) {
				uni.switchTab({
					url: "../../pages/index/index"
				})
			}
		},
		}
</script>

<style lang="scss">
	.txt{
		padding-top: 20rpx;
		color: #0000ff;
		font-size: 45rpx;
		font-weight: 800;
		margin-bottom: 50rpx;
	}
	.bk{
		background-color: #eeeeee;
		height: 100%;
		bottom: 0;
	}
	.max {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tel {
		margin-top: 50rpx;
		display: flex;
		flex-direction: row;
		// background-color: #ffffff;
		// border: 5rpx,solid,#6b6b6b;
		align-items: center;
		align-content: center;
	}
	.t{
		border-radius: 10rpx;
		border: 5rpx,solid,#6b6b6b;
		background-color: #ffffff;
		padding-left: 10rpx;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
	}
	.but{
		margin-top: 50rpx;
		width: 50%;
		// height: 100rpx;
		color: #ffffff;
		background-color: #0000ff;
		align-items: center;
		align-content: center;
		margin-bottom: 600rpx;
	}
	.bot{

	}
</style>