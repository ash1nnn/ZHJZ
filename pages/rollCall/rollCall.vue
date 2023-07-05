<template>
	<view class="a">
			<view class="ii" v-for="(item,index) in list1" >
					<img  :src="item.icon" alt="" class="img" >
					<view class="b">
						<text class="txt">{{item.text}}</text>
						<text class="txt1">{{item.text1}}</text>
					</view>	
			</view>
	</view>


</template>

<script>
	export default {
		data(){
			return{
				list1: [{
						icon: "../../static/xl.png",
						text: "上海市徐汇区建国西路648号2718室",
						text1: "2023-07-01 15：23"
					},
					{
						icon: "../../static/xl.png",
						text: "上海市虹口区水电路609弄-14号-210室",
						text1: "2023-07-02 08：10"
					},
					{
						icon: "../../static/xl.png",
						text: "上海市虹口区广灵一路74号",
						text1: "2023-07-03 10：33"
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

<style>
		
	.ii{
		display: flex;
		flex-direction: row;
		margin-top: 50rpx;
		height: 130rpx;
		border-bottom: 1px solid #CDCDCD ;
	}
	.img{
		width: 50rpx;
		height: 50rpx;
		margin-left: 50rpx;
	}
	.b{
		display: flex;
		flex-direction: column;
	}
	.txt{
		margin-left: 50rpx;
		font-weight: bold;
	}
	.txt1{
		margin-left: 50rpx;
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #CDCDCD ;
	}

</style>