<template>
	<view class="a">
		<button class="button" :class="currentIndex === 0 ? 'nav-actived' : ''" @click="change(0)">提交信息</button>
		<button class="button" :class="currentIndex === 1 ? 'nav-actived' : ''" @click="change(1)">历史记录</button>
		<button class="button" @click="bigChange">审批事项查询</button>
	</view>
	<swiper   style="height:1000rpx" :current="currentIndex">
				<swiper-item >
						<view class="x">
							<uni-forms :modelValue="formData" label-position="top" label-width="1000rpx">
								 <uni-forms-item  label="执行地（乡镇、街道）" name="place" >
								     <uni-easyinput v-model="formData.place" type="text"  placeholder="请输入外出目的地（乡镇、街道）" ></uni-easyinput>
								</uni-forms-item>
								<uni-forms-item  label="执行地明细" name="detail">
								     <uni-easyinput v-model="formData.detail" type="text"  placeholder="请输入外出目的地明细" ></uni-easyinput>
								</uni-forms-item>
								<uni-forms-item  label="变更理由" name="reason">
								     <uni-easyinput v-model="formData.reason" type="text"  placeholder="请输入外出理由" ></uni-easyinput>
								</uni-forms-item>
								<uni-forms-item  label="申请时间" name="date">
								     <uni-datetime-picker v-model="formData.date" type="date"></uni-datetime-picker>
								</uni-forms-item>
							</uni-forms>
							<button type="primary" @click="submit" class="aa">提交</button>
						</view>
				</swiper-item>
				<swiper-item class="swiper-item sns-news">
					<view class="b">
						<text class="xijie">时间：2023.5.20-2023.5.25</text>
						<text class="xijie">执行地：上海市徐家汇街道</text>
					</view>
				</swiper-item>
	</swiper>
	<!-- <view >
		<uni-forms :modelValue="formData" label-position="top" label-width="1000rpx">
			 <uni-forms-item  label="外出目的地（乡镇、街道）" name="place" >
			     <uni-easyinput v-model="formData.place" type="text"  placeholder="请输入外出目的地（乡镇、街道）" ></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  label="目的地明细" name="detail">
			     <uni-easyinput v-model="formData.detail" type="text"  placeholder="请输入外出目的地明细" ></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  label="外出理由" name="reason">
			     <uni-easyinput v-model="formData.reason" type="text"  placeholder="请输入外出理由" ></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  label="外出天数" name="days">
			     <uni-easyinput v-model="formData.days" type="number"  placeholder="请输入外出天数" ></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  label="外出日期" name="date">
			     <uni-datetime-picker v-model="formData.date" type="daterange"></uni-datetime-picker>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">提交</button>
		


	</view> -->

</template>
<script>
	export default {

		data() {
			return {
				currentIndex:0 ,
				formData: {
					place: '',
					detail:'',
					reason:'',
					date:'',
				},

			}

		},
		onLoad() {
			

		},
		methods: {
			change(index){
				this.currentIndex = index
			},
			submit(){
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
			bigChange(){
						uni.navigateTo({
							url: '/pages/approveQuery/approveQuery'
						});
					},
			},
		}
	
</script>


<style lang="scss">
	.a{
		display: flex;
		flex-direction: row;
	}
	
	.button {
	  width: 500rpx;
	  height:80rpx;
	  font-size: 30rpx;
	  padding: 0 10rpx;
	}
	.nav-actived{
		background-color: #79C27B;
	}
	.b{
		display: flex;
		flex-direction: column;
		width: 97%;
		height: 150rpx;
		margin-top:50rpx;
		margin-left: 10rpx;
		// align-items: center;   
		// vertical-align: center;
		// justify-content:center;
		// padding: 40rpx;
		// margin: 40rpx;
		background-color: #ebf2ff;
		border-radius: 40rpx;
	}
	.xijie {
		font-size: 30rpx;
		color: #3c66ef;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}
	.x{
		margin-left: 30rpx;
		margin-top: 30rpx;
		width: 700rpx;
	}
	.aa{
		width: 500rpx;
		align-items: center;  
		margin: auto;
		letter-spacing: 100rpx;
		text-indent: 100rpx;
	}
	


	
	 



</style>