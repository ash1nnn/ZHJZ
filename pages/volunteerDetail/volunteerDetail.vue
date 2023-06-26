<template>


	<view class="x">
		<uni-forms :modelValue="formData" label-position="top" label-width="1000rpx">
			<uni-forms-item label="姓名" name="place">
				<uni-easyinput v-model="formData.place" type="text" placeholder="请输入姓名 "></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="性别" name="detail">
				<uni-easyinput v-model="formData.detail" type="text" placeholder="请输入性别"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="出生日期" name="date">
				<uni-datetime-picker v-model="formData.date" type="date"></uni-datetime-picker>
			</uni-forms-item>
			<uni-forms-item label="专业服务" name="detail">
				<uni-data-select v-model="value" :localdata="range" ></uni-data-select>
			</uni-forms-item>
			<uni-forms-item label="志愿时间" name="date">
				<uni-datetime-picker v-model="formData.date" type="date"></uni-datetime-picker>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit" class="aa">提交</button>
	</view>



</template>
<script>
	export default {

		data() {
			return {
				currentIndex: 0,
				formData: {
					place: '',
					detail: '',
					reason: '',
					days: '',
					date: '',
				},
				value: 0,
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
			change(index) {
				this.currentIndex = index
			},
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
			bigChange() {
				uni.navigateTo({
					url: '/pages/approveQuery/approveQuery'
				});
			}
		},

	}
</script>


<style lang="scss">
	.a {
		display: flex;
		flex-direction: row;
	}

	.button {
		width: 500rpx;
		height: 80rpx;
		font-size: 30rpx;
		padding: 0 10rpx;
	}

	.nav-actived {
		background-color: #79C27B;
	}

	.b {
		display: flex;
		flex-direction: column;
		width: 97%;
		height: 150rpx;
		margin-top: 50rpx;
		margin-left: 10rpx;
		// align-items: center;   
		// vertical-align: center;
		// justify-content:center;
		// padding: 40rpx;
		// margin: 40rpx;
		background-color: #ebf2ff;
		border-radius: 40rpx;
	}

	.x {
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
	}


	.xijie {
		font-size: 30rpx;
		color: #3c66ef;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}
</style>