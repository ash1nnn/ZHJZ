<template>


	<view class="x">
		<view class="may">
			<view class="tel">
				<text class="tt">姓名:</text>
				<input class="t" type="text" focus placeholder="请输入姓名">
			</view>
			<view class="tel">
				<text class="tt">性别：</text>
				<input class="t" type="text" focus placeholder="请输入性别">
			</view>
			<view class="tel">
				<text class="tt">出生日期：</text>
				<uni-datetime-picker v-model="formData.date" type="date"></uni-datetime-picker>
			</view>
			<view class="tel">
				<text class="tt">专业服务：</text>
				<uni-data-select v-model="value" :localdata="range" class="i"></uni-data-select>
			</view>
			<view class="tel">
				<text class="tt">志愿时间：</text>
				<uni-datetime-picker v-model="formData.date" type="date"></uni-datetime-picker>
			</view>
		</view>
		

		<button  @click="submit" class="aa">提交</button>
	</view>



</template>
<script>
	export default {

		data() {
			return {
				currentIndex: 0,
				formData: {
					name: '',
					sex: '',
					date: '',
					date1: '',
				},
				value: '',
				range: [
				        { value: 0, text: "帮困救助" },
				        { value: 1, text: "法律咨询" },
				        { value: 2, text: "就业指导" },
						{ value: 3, text: "心理辅导" },
				    ],

			}

		},
		onLoad() {


		},
		methods: {

			submit() {
				uni.showToast({
					title: '提交成功！',
					icon: 'success',
					success: () => {
						setTimeout(() => {
							uni.navigateBack();
						}, 500)
					}
				})

			},
		},

	}
</script>


<style lang="scss">

	.a{
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
	}
	.may{
		width: 98%;
		height: 700rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: 3px solid #F5F6FA;

	}
	.reason{
		width: 98%;
		height: 300rpx;
		padding-top: 30rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: 3px solid #F5F6FA;
	}
	.bb{
		height: 450rpx;
		overflow: hidden;
		line-height: 70rpx;
		border-bottom: 1px dashed #E8E7E7;
	}
	.active{
        height: auto;
        overflow: visible;
    }
	.ss{
		text-align: center;
		font-size: 25rpx;
	}
		
	.i{
		width:  450rpx;
	}
	
	// .ii{
	// 	border-bottom: 1px solid #CDCDCD;
	// }
	.tel {
		margin-top: 30rpx;
		margin-left: 10rpx;
		display: flex;
		flex-direction: row;
		// background-color: #ffffff;
		// border: 5rpx,solid,#6b6b6b;
		align-items: center;
		align-content: center;
		border-bottom: 1px solid #CDCDCD;
		// margin-left: 50rpx;
		width: 650rpx;
		height: 80rpx;
	}

	
	
	.t{
		

		// padding-left: 15rpx;
		// padding-top: 5rpx;
		// padding-bottom: 5rpx;
		text-align:right;
		width:500rpx;
	}
	
	.tt{
		font-size: 30rpx;
		margin-left: 10rpx;
		width: 200rpx;
	}
		
	.ii{
		margin-left: 30rpx;
		margin-top: 30rpx;
	}
	.jj{
		width: 600rpx;
		height: 200rpx;
		border: 1px solid #CDCDCD;
		margin-left: 30rpx;
		margin-top: 30rpx;
	}

	
	.button {
	  width: 500rpx;
	  height:80rpx;
	  font-size: 30rpx;
	  padding: 0 10rpx;
	  
	}
	.nav-actived{
		background-color: #6796F9;
	}
	.b{
		display: flex;
		flex-direction: column;
		width: 97%;
		height: 150rpx;
		margin-top:50rpx;
		margin-left: 8rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: 4px solid #F5F6FA;
		align-items: center;   
		vertical-align: center;
		justify-content:center;
		// padding: 40rpx;
		// margin: 40rpx;
		border-radius: 40rpx;
	}
	.x{
		margin-left: 30rpx;
		margin-top: 30rpx;
		width: 700rpx;
	}
	.aa {
		width: 500rpx;
		align-items: center;
		margin: auto;
		letter-spacing: 100rpx;
		text-indent: 100rpx;
		background-color: #2f6dff;
		margin-top: 50rpx;
		border-radius: 30rpx;
		color:white;
	}
	
	
	.xijie {
		font-size: 30rpx;

		// margin-top: 20rpx;
		// margin-left: 20rpx;
	}



	
	 
</style>