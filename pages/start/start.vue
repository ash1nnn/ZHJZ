<template>
	<view class="bk">
		<image src="https://zhjz-pic.pages.dev/sf.jpg" mode="widthFix" class="img"></image>

		<view class="max">
			<text class="txt">你好，欢迎来到社矫之家</text>
			<view class="tel">
				<text>请选择人员类型</text>
				<uni-data-select v-model="value" :localdata="range"  :clear="false" @change="change" class="a" ></uni-data-select>
			</view>
			<view class="tel">
				<text>身份证：</text>
				
				<input class="t" type="text" placeholder="请输入身份证号">
				
			</view>
			<view class="tel">
				<text>手机号：</text>
				
				<input class="t" type="text"  placeholder="请输入手机号">
				
			</view>

			<button @click="goto()" class="but"><text>登录</text></button>
			<view class="bot"> </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				range: [
				        { value: 1, text: "矫正对象" },
				        { value: 2, text: "矫正小组成员" },
						{ value: 3, text: "志愿者" },
				    ],

			};
		},
		methods: {
			change(e){
				// console.log("e:",e)
				uni.setStorage({
					key: 'classify',
					data: e,
				})
			},
			goto() {
				uni.switchTab({
					url: "../../pages/index/index"
				})
			},
		},
		}
</script>

<style lang="scss">
	.txt{
		padding-top: 50rpx;
		color: #1E7DFE;
		font-size: 45rpx;
		font-weight: 800;

		// margin-bottom: 50rpx;
	}
		
	.img{
		width: 100%;
		position: relative;
	}
	.bk{
		background-color: white;
		height: 100%;
		bottom: 0;
	}
	.max {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: white;
		border: 3px solid white;
		border-radius: 50rpx;
		position: absolute;
		top: 280rpx;
		
	}

	.tel {
		margin-top: 100rpx;
		display: flex;
		flex-direction: row;
		// background-color: #ffffff;
		// border: 5rpx,solid,#6b6b6b;
		align-items: center;
		align-content: center;
	}
	.a{
		margin-left: 30rpx;
		width: 250rpx;
	}
	.t{
		border-bottom: 1px solid #CDCDCD;
		background-color: #ffffff;
		padding-left: 10rpx;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
	}
	.but{
		margin-top: 100rpx;
		width: 70%;
		// height: 100rpx;
		color: #ffffff;
		// background-color: #3050F0;
		background: linear-gradient(to bottom, #72ADFC, #1E7DFE);
		align-items: center;
		align-content: center;
		margin-bottom: 600rpx;
		border-radius: 50rpx;
	}
	.bot{

	}
</style>