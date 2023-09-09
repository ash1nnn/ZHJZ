<template>
	<view class="topTabBar">
		<view class="grid" v-for="(item, tbIndex) in handlingType" @click="showType(tbIndex)">
			<!-- <view class="">
				{{item.value}}
			</view> -->
			<view class="text" :class="[tbIndex == tabbarIndex ? 'active' : '']">{{item.value}}</view>
	
		</view>
		<view class="grid" @click="bigChange">
			<view class="text" :class="[tbIndex == tabbarIndex ? 'active' : '']">审批事项查询</view>
		</view>
	</view>
	<view class="x" v-if="tabbarIndex==0">
		<view class="may">
			<view class="tel">
				<text class="tt">迁入地:</text>
				<input class="t" type="text"  placeholder="请输入迁入地(乡镇、街道)" placeholder-class="font">
			<!-- 	<input class="t" type="text" focus placeholder="请输入外出目的地"> -->
			</view>
			<view class="tel">
				<text class="tt">迁入地明细:</text>
				<input class="t" type="text"  placeholder="请输入迁入地明细" placeholder-class="font">
			</view>
			<view class="tell">
				<text class="tt">申请时间:</text>
				<uni-datetime-picker v-model="formData.date" type="date" ></uni-datetime-picker>
			</view>
		</view>
		
		<view class="reason">
	
			<text class="ii">变更理由：</text>
			<textarea class="jj" name="" id="" cols="30" rows="10" ></textarea>
	
	<!-- 		<input class="jj" type="text" focus placeholder="请输入外出理由"> -->
	
	
		</view>
	
			
			
		
		<!-- <uni-forms :modelValue="formData" label-position="left" label-width="400rpx"  >
			<uni-forms-item  label="外出目的地（乡镇、街道）" name="place" >
			     <uni-easyinput v-model="formData.place" type="text"  placeholder="请输入外出目的地（乡镇、街道）"></uni-easyinput>
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
		</uni-forms> -->
		<button  @click="submit" class="aa">提交</button>
	</view>
	<view class="content1">
		<view class="content" v-if="tabbarIndex==1">
			<view class="txt_right">
				<text class="title">
					审批事项：居住地变更
				</text>
				<view class="litxt">
					<text class="xijie">迁入地：上海市徐家汇街道</text>
					<text class="xijie">时间：2023.06.30</text>
				</view>
			</view>
		</view>
	</view>


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
				tabbarIndex: 0,
				handlingType: [{
						value: '提交信息'
					},
					{
						value: '历史记录'
					},
				],
				formData: {
					place: '',
					detail:'',
					reason:'',
					days:'',
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
			showType(tbIndex) {
				// that = this
				//跳转订单列表类型
				this.tabbarIndex = tbIndex;
				if (this.tabbarIndex == 0) {
			
				}
				if (this.tabbarIndex == 1) {
			
				}
			
			},
			bigChange(){
						uni.navigateTo({
							url: '/pages/approveQuery/approveQuery'
						});
					}
			},

		}
	
</script>


<style lang="scss">
	.yy {
		height: 100%;
		background-color: #FBFAFF;
	}
	.topTabBar {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 0px;
		background-color: #f8f8f8;
	}
	
	.grid {
		width: 30%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #444;
		font-size: 28upx;
	}
	
	.text {
		height: 76upx;
		// width: 500rpx;
		display: flex;
		align-items: center;
	}
	
	.active {
		color: #0a79ff;
		border-bottom: solid 4upx #0a79ff;
	}
	
	.a {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
	}
	
	.may {
		width: 98%;
		height: 400rpx;
		margin-top: 100rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: 3px solid #F5F6FA;
	
	}
	
	.reason {
		width: 98%;
		height: 350rpx;
		padding-top: 30rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: 3px solid #F5F6FA;
	}
	
	.bb {
		height: 600rpx;
		overflow: hidden;
		margin-top: 100rpx;
		line-height: 70rpx;
		border-bottom: 1px dashed #E8E7E7;
	}
	
	.active {
		height: auto;
		overflow: visible;
	}
	
	.ss {
		text-align: center;
		font-size: 25rpx;
	}
	
	.content1 {
		width: 98%;
	}
	
	.content {
		display: flex;
		flex-direction: row;
		width: 98%;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 40rpx;
		margin-bottom: 10rpx;
		margin-left: 15rpx;
		margin-right: 10rpx;
		margin-top: 100rpx;
		background-color: #eff1fe;
	
	}
	
	.title {
		padding-top: 10rpx;
		padding-left: 15rpx;
		font-size: 30rpx;
		/* font-weight: 600; */
		/* font-style: oblique; */
		color: #5a6679;
	}
	
	.txt_right {
		display: flex;
		flex-direction: column;
		width: 70%;
	}
	
	.litxt {
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
		position: relative;
	
	
	}
	
	.xijie {
		margin-left: 50rpx;
		margin-top: 50rpx;
		color: #5a6679;
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
	.tell {
		margin-top: 10rpx;
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
		height: 100rpx;
	}
	
	
	
	
	.t {
	
	
		// padding-left: 15rpx;
		// padding-top: 5rpx;
		// padding-bottom: 5rpx;
		text-align: right;
		width: 500rpx;
	}
	
	.font{
		font-size: 25rpx;
	}
	
	.tt {
		font-size: 30rpx;
		margin-left: 10rpx;
		width: 200rpx;
	}
	
	.ii {
		margin-left: 30rpx;
		margin-top: 30rpx;
	}
	
	.jj {
		width: 600rpx;
		height: 200rpx;
		border: 1px solid #CDCDCD;
		margin-left: 30rpx;
		margin-top: 30rpx;
		box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5);
	}
	
	
	.button {
		width: 500rpx;
		height: 80rpx;
		font-size: 30rpx;
		padding: 0 10rpx;
	
	}
	
	.nav-actived {
		background-color: #2f6dff;
	}
	
	.b {
		display: flex;
		flex-direction: column;
		width: 97%;
		height: 150rpx;
		margin-top: 50rpx;
		margin-left: 8rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		border: 4px solid #F5F6FA;
		align-items: center;
		vertical-align: center;
		justify-content: center;
		// padding: 40rpx;
		// margin: 40rpx;
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
		background-color: #2f6dff;
		margin-top: 50rpx;
		border-radius: 30rpx;
		color:white;
	}
	
	
	// .xijie {
	// 	font-size: 30rpx;
	
	// 	// margin-top: 20rpx;
	// 	// margin-left: 20rpx;
	// }




</style>