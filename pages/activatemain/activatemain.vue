<template>
	<view class="content">
		<image src="https://test-37b.pages.dev/check/1.png" mode="widthFix" class="imgh"></image>
		<view class="main">
			<!-- <view class="img1" @click="toedu"> -->
			<image class="img1" src="../../static/a1.png" mode="widthFix" @click="toedu"></image>
			<!-- </view> -->
			<view class="c2">
				<!-- <view class="img2" @click="towork"> -->
				<image class="img2" src="../../static/a2.png" mode="widthFix" @click="towork"></image>
				<!-- </view> -->
				<!-- <view class="img2" @click="todisplay"> -->
				<image class="img2" src="../../static/a3.png" mode="widthFix" @click="todisplay"></image>
				<!-- </view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toedu() {
				uni.navigateTo({
					url: '../../pages/actOrder/actOrder'
				});
			},
			towork() {
				uni.navigateTo({
					url: '../../pages/actOrder/actOrder'
				});
			},
			todisplay() {
				uni.navigateTo({
					url: '../../pages/actOrder/actOrder'
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.imgh {
		width: 95%;
		padding-bottom: 20rpx;
	}

	.main {
		display: flex;
		flex-direction: row;
		align-content: center;
		width: 95%;
	}

	.img1 {
		width: 49%;
		padding-right: 10rpx;

	}

	.c2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 51%;
	}

	.img2 {
		width: 97%;
		padding-bottom: 25rpx;
	}
</style>

