<template>
	<view class="content" v-if="classify == 1">
			<image class="b" src="../../static/index/1.png" ></image>
			<image class="c" src="../../static/index/2.png" mode="widthFix"></image>

		<view class="biaoge">
			<view class="ii" v-for="(item,index) in list1" @click="click(item.url)">
					<view class="icon"  >
						<img  :src="item.icon" alt="" class="img" >
					</view>
					<text class="txt">{{item.text}}</text>
			</view>
		</view>
		
		<view class="d">
			<image class="e" src="../../static/index/7.png" ></image>
			<text class="f">关于提高社矫教育水平管理...</text>
		<!-- 	<text>1小时前</text> -->
			<image class="g" src="../../static/index/8.png" ></image>
		</view>
		
<!-- 		<view class="biaoge">
			<view class="ii" v-for="(item,index) in list2">
				<view class="icon">
					<img :src="item.icon" alt="" class="img">
				</view>

<! 				<text class="txt">{{item.text}}</text>
			</view> -->
			<!-- <image src="" mode=""></image> -->
<!-- 			
		</view> --> 
	</view>
	<view class="content" v-if="classify == 2">
		<image src="../../static/index/1.jpg" mode="widthFix"></image>
		<view class="biaoge">
			<view class="ii" v-for="(item,index) in list3">
				<view class="icon">
					<img :src="item.icon" alt="" class="img">
				</view>
	
				<text class="txt">{{item.text}}</text>
	
			</view>
		</view>

	</view>
	<view class="content" v-if="classify == 3">
		<image src="../../static/index/1.jpg" mode="widthFix"></image>
		<view class="biaoge">
			<view class="ii" v-for="(item,index) in list4">
				<view class="icon">
					<img :src="item.icon" alt="" class="img">
				</view>
	
				<text class="txt">{{item.text}}</text>
	
			</view>
		</view>
	
	</view>
	<view class="aa">
		<image class="bb" src="../../static/index/9.png" ></image>
	</view>
	<view class="new">
		<view class="cc" v-for="(item,index) in newsList">
				<img  :src="item.icon" alt="" class="dd" >
				<view class="tt">
					<text class="ee">{{item.text}}</text>
					<text class="ff">{{item.text1}}</text>
				</view>

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
						icon: "../../static/index/3.png",
						text: "日常考核",
						url: "/pages/check/check"
					},
					{
						icon: "../../static/index/4.png",
						text: "活动预约",
						
					},
					{
						icon: "../../static/index/5.png",
						text: "需求登记",
						
					},
					{
						icon: "../../static/index/6.png",
						text: "矫正经历",
						
					}
				],
				// list2: [{
				// 		icon: "../../static/5.png",
				// 		text: "活动预约",
				// 		url: "../../static/h.png"
				// 	},
				// 	{
				// 		icon: "../../static/6.png",
				// 		text: "事项审批",
				// 		url: "../../static/h.png"
				// 	},
				// 	{
				// 		icon: "../../static/7.png",
				// 		text: "需求登记",
				// 		url: "../../static/h.png"
				// 	},
				// 	{
				// 		icon: "../../static/8.png",
				// 		text: "经历查询",
				// 		url: "../../static/h.png"
				// 	}
				// ],
				list3: [{
						icon: "../../static/index/3.png",
						text: "社矫查询",
					},
					{
						icon: "../../static/index/4.png",
						text: "通知公告",
					},
					{
						icon: "../../static/index/5.png",
						text: "活动管理",
					},
					{
						icon: "../../static/index/6.png",
						text: "需求处理",
					}
				],
				list4: [{
						icon: "../../static/index/3.png",
						text: "执法公开",
					},
					{
						icon: "../../static/index/4.png",
						text: "服务登记",
					},
					{
						icon: "../../static/index/5.png",
						text: "活动预约",
					}
					// {
					// 	icon: "../../static/8.png",
					// 	text: "需求处理",
					// 	url: "../../static/h.png"
					// }
				],
				newsList: [{
						icon: "../../static/index/10.png",
						text: "社区矫正对象报道接受规范",
						text1: "1236人阅读"
					},
					{
						icon: "../../static/index/11.png",
						text: "社区矫正对象报告规范",
						text1: "7786人阅读"
					},
					{
						icon: "../../static/index/12.png",
						text: "请假外出审批规范",
						text1: "5658人阅读"
					},
					{
						icon: "../../static/index/13.png",
						text: "居住、执行地变更审批规范",
						text1: "5675人阅读"
					}
					
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

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		width:  750rpx;
		height: 872rpx;
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
		display: flex;
		flex-direction: row;
		// align-items: center;
		// justify-content: center;
		width: 720rpx;
		height: 180rpx;
		position: absolute;
		top: 730rpx;
		border: 3px solid #F5F6FA;
		border-radius: 25rpx;
		background-color: white;
		
	}
	.e{
		margin-top: 30rpx;
		margin-left:30rpx;
		width: 110rpx;
		height: 100rpx;
	}
	.f{
		margin-top: 60rpx;
		margin-left:25rpx;
		width: 400rpx;
		height: 20rpx;
		font-size: 30rpx;
		font-weight: bold;

	}
	.g{
		margin-top: 50rpx;
		margin-left:10rpx;
		width: 120rpx;
		height: 60rpx
	}
	.bb{
		margin-top: 100rpx;
		margin-left: 190rpx;
		width: 350rpx;
		height: 60rpx;
	}
	.new{
		margin-top: 10rpx;
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.cc{
		margin-top: 20rpx;
		width: 330rpx;
		height: 380rpx;
		border: 3px solid #F5F6FA;
		border-radius: 25rpx;
		background-color: white;
	}
	.dd{
		width: 330rpx;
		height: 280rpx;
	}
		
	.tt{
		display: flex;
		flex-direction: column;
	}
	.ee{
		font-size: 25rpx;
		font-weight: bold;
		margin-left: 20rpx;
	}
	.ff{
		width: 150rpx;
		font-size: 20rpx;
		margin-left: auto;
		margin-top: 15rpx;

	}

	.biaoge{
		position: absolute;
		top: 500rpx;
		border-radius: 25rpx;
		background-color: white;
		
	}
	

	.img {
		height: 120rpx;
		width: 120rpx;
	}

	.ii {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 180rpx;
		height: 200rpx;

	}

	.txt {
		padding-top: 10rpx;
		padding-bottom: 20rpx;
		font-size: 35rpx;
		font-weight: 400;
		color: #00007f;
	}

	.biaoge {
		display: flex;
		flex-direction: row;
	}

	.icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// background-color: #3376ba;
		width: 130rpx;
		height: 130rpx;
		// border-radius: 50%;
		margin-top: 30rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>