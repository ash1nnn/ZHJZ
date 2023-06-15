<template>
	<view class="content" v-if="no == 0">
		<image class="b" src="../../static/ex/1.png" mode="widthFix"></image>
		<image class="c" src="../../static/ex/2.png" mode="widthFix"></image>
		<image class="d" src="../../static/ex/3.png" mode="widthFix"></image>
		<image class="e" src="../../static/ex/4.png" mode="widthFix"></image>
		<image class="f" src="../../static/ex/5.png" mode="widthFix"></image>
		<image class="g" src="../../static/ex/6.png" mode="widthFix" @click="change(0)"></image>
	</view>

	<view class="box" v-if="no == 1">
		<scroll-view scroll-y="true" class="box-scroll">
			<view class="a" >
				<image class="b" src="../../static/ex/11.png" mode="widthFix"></image>
				<view class="aa">
					<text class="bb">这一年您参加</text>
					<text class="cc">集中学习教育25次</text>
					<text class="cc">个别学习教育18次</text>
					<text class="cc">集体活动5次</text>
				</view>
			</view>
			<view class="a" >
				<image class="b" src="../../static/ex/22.png" mode="widthFix"></image>
				<view class="xx">
					<text class="bb">这一年您提出</text>
					<text class="ii">个人需求5个</text>
					<text class="ii">共有13个矫正小组成员</text>
					<text class="ii">为您解答</text>
				</view>
			</view>
			<view class="a" >
				<image class="b" src="../../static/ex/33.png" mode="widthFix"></image>
				<view class="yy">
					<text class="jj">最早在早上</text>
					<text class="jj">5:13签到打卡</text>
				</view>
				<view class="zz">
					<text class="jj">最晚在凌晨</text>
					<text class="jj">1:28阅读矫正须知</text>
					<text class="nn">你的努力</text>
					<text class="nn">矫正之家都帮你记录下来</text>
				</view>
			</view>
		
		</scroll-view>
	</view>
</template>

<script>
	export default {
	
		data() {
			return {
				no:0 ,

			}
	
		},
		onLoad() {
			
	
		},
		methods: {
			change(index){
				this.no = 1;
			},
	
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		width:100%;
		height:100%;
	}
	
	.box {
	 display: flex;
	 flex-direction:column;
	 height:100vh;
	 overflow:hidden;
	}
	.box-scroll {
	 flex: 1;
	 height: 1px;
	}

	.b{
		width:100%;
		height:100%;
	}
	.c{
		position: absolute;
		top: 100rpx;
	}
	.d{
		position: absolute;
		right: 20rpx;
		top: 120rpx;
		width: 200rpx;
	}
	.e{
		position: absolute;
		top: 500rpx;
	}
	.f{
		position: absolute;
		top: 580rpx;
		width: 300rpx;
	}
	.g{
		position: absolute;
		top: 1400rpx;
		width: 400rpx;
	}
	.a{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		width:100%;
		height:100%;
	}
	.aa{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 700rpx;
		left: 50rpx;
	}
	.xx{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 500rpx;
		left: 50rpx;
	}
	.yy{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 400rpx;
		left: 50rpx;
	}
	.zz{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 700rpx;
		right: 50rpx;
	}
	.bb{
		font-size: 50rpx;
		font-weight: bold;
		letter-spacing: 0.3em;
	}
	.cc{
		margin-top: 50rpx;
		margin-left: 80rpx;
		font-size: 50rpx;
		font-weight: bold;
		letter-spacing: 0.3em;
		color: pink;
	}
	.ii{
		margin-top: 50rpx;
		font-size: 50rpx;
		font-weight: bold;
		letter-spacing: 0.3em;
		color: #20D0E5;
	}
	.jj{
		margin-top: 50rpx;
		font-size: 50rpx;
		font-weight: bold;
		letter-spacing: 0.3em;
		color: #2E3171;
	}
		
	.nn{
		color: white;
		font-weight: bold;
		letter-spacing: 0.3em;
		margin-top: 30rpx;
	}
	
</style>