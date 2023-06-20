<template>
		<view class="" v-for="(item,index) in list1">
			<view class=""  v-if="id === item.idd">
				<view class="a">
					<view class="cc">
						<text>姓名:</text>
						<text class="d">{{item.name}}</text>
					</view>
					<view class="cc">
						<text>性别:</text>
						<text class="d">{{item.sex}}</text>
					</view>
					<view class="cc">
						<text>年龄:</text>
						<text class="d">{{item.age}}</text>
					</view>
					<view class="cc">
						<text>联系电话:</text>
						<text class="d">{{item.tel}}</text>
					</view>
					<view class="cc">
						<text>居住地:</text>
						<text class="d">{{item.place}}</text>
					</view>
					<view class="cc">
						<text>级别:</text>
						<text class="d">{{item.level}}</text>
					</view>
				</view>
				<view class="e">
					<text class="i">本月数据</text>
				</view>
				<view class="b" >
					<image src="../../static/me/2.png" mode="" class="c"></image>
					<text class="x">集中教育次数</text>
					<text class="y">5次</text>
				</view>
				<view class="b" >
					<image src="../../static/me/3.png" mode="" class="c"></image>
					<text class="x">个别教育次数</text>
					<text class="y">3次</text>
				</view>
				<view class="e">
					<text class="i">历史数据</text>
				</view>
				<view class="b" >
					<image src="../../static/me/2.png" mode="" class="c"></image>
					<text class="x">集中教育次数</text>
					<text class="y">5次</text>
				</view>
				<view class="b" >
					<image src="../../static/me/3.png" mode="" class="c"></image>
					<text class="x">个别教育次数</text>
					<text class="y">3次</text>
				</view>
				<view class="b" >
					<image src="../../static/me/4.png" mode="" class="c"></image>
					<text class="x">积分考核</text>
					<text class="y">86分</text>
				</view>
				<view class="b"  >
					<image src="../../static/me/5.png" mode="" class="c"></image>
					<text class="x">活动报名次数</text>
					<text class="y">6次</text>
				</view>

			</view>
		
		</view>

</template>

<script>
	export default {
	
		data() {
			return {
				id: '',
				list1: [
					{
					idd: "1",
					name: "杨福宝\n",
					sex: "男\n",
					age: "35\n",
					tel: "18566421114\n",
					place: "上海市徐汇区\n",
					level: "一级矫正对象\n"
					},
					{
					idd: "2",
					name: "蒋振良\n",
					sex: "男\n",
					age: "35\n",
					tel: "18566421114\n",
					place: "上海市徐汇区\n",
					level: "一级矫正对象\n"
					},
					{
					idd: "3",
					name: "胡晓俊\n",
					sex: "男\n",
					age: "35\n",
					tel: "18566421114\n",
					place: "上海市徐汇区\n",
					level: "一级矫正对象\n"
					},
					{
					idd: "4",
					name: "姚惠琴\n",
					sex: "女\n",
					age: "35\n",
					tel: "18566421114\n",
					place: "上海市徐汇区\n",
					level: "一级矫正对象\n"
					},
					{
					idd: "5",
					name: "宋百旺\n",
					sex: "男\n",
					age: "35\n",
					tel: "18566421114\n",
					place: "上海市徐汇区\n",
					level: "一级矫正对象\n"
					}
				],
			}
	
		},
		onLoad(options) {
			 // console.log(options.id); 
			 this.id = JSON.parse(options.id);
	
		},
		methods: {

			},
	
		}
</script>

<style>
	.a{
		margin-left: 50rpx;
	}
		
	.cc{
		margin-top: 20rpx;
	}
	.d{
		margin-left: 30rpx;
	}
		
	.e{
		margin-top: 50rpx;
		margin-left: 280rpx;
	}
	.i{
		font-weight: bold;
		font-size: 40rpx;
	}
	.b{
		display: flex;
		flex-direction: row;
		margin-top: 40rpx;
		height: 80rpx;
		border-bottom: 3px solid #F5F6FA;
		position: relative;
		
	}
	.c{
		width: 50rpx;
		height: 50rpx;
		margin-left: 30rpx;
	}
		
	.x{
		margin-left: 50rpx;
	}
	.y{
		
		position: absolute;
		right: 30rpx;
	}

</style>