<template>
	<view >
		<image class="a" src="../../static/notice/1.png" mode="widthFix"></image>
	</view>
	<view >
		<image class="bb" src="../../static/notice/3.png" ></image>
	</view>
	<view class="b" v-for="(item,index) in imgList" @click="change(item.id)">
		<view class="c">
			<image class="d" src="../../static/notice/2.png" mode="widthFix"></image>
			<text class="e">{{item.title}}</text>
			<image class="f" src="../../static/notice/4.png" mode="widthFix"></image>
			<text class="g">{{item.text}}</text>
		</view>

	</view>
</template>

<script>
	export default {
		
			data() {
				return {
					imgList: [
						{
						id: "1",
						title: "中华人民共和国社区矫正法",
						text: "7786人阅读"
						},
						{
						id: "2",
						title: "矫正对象报到接收规范",
						text: "1236人阅读"
						},
						{
						id: "3",
						title: "社区矫正对象报告规范",
						text: "4396人阅读"
						},
						{
						id: "4",
						title: "请假外出审批规范",
						text: "6547人阅读"
						},
						{
						id: "5",
						url: "../../static/notice/3.png",
						title: "居住、执行地变更审批规范",
						text: "1687人阅读"
						}
					]
		
		
				}
		
			},
			onLoad() {
				
		
			},
			methods: {
				 change(id) {
				        uni.navigateTo({
				          url: '/pages/detail/detail?id=' + JSON.stringify(id)//将传递的对象转化成字符串
				        })
				      }
	
				},
		
			}
</script>

<style>
	.a{
		width: 700rpx;
		margin-left: 20rpx;
	}
	.b{
		display: flex;
		flex-direction: column;
	}
	.bb{
		margin-top: 50rpx;
		margin-left: 190rpx;
		width: 350rpx;
		height: 60rpx;
	}
	.c{
		margin-top: 50rpx;
		width: 100%;
		height: 200rpx;
		display: flex;
		flex-direction: row;
		border-bottom: 3px solid #F5F6FA;
	}
		
	.d{
		width: 250rpx;
		height: 125rpx;
		margin-left: 30rpx;

	}
	.e{
		position: absolute;
		left: 300rpx;
		font-weight: bold;
	}
	.f{
		width: 100rpx;
		position: absolute;
		margin-left: 300rpx;
		margin-top: 50rpx;
	}
	.g{
		position: absolute;
		margin-left: 300rpx;
		margin-top: 100rpx;
		font-size: 25rpx;
	}
</style>