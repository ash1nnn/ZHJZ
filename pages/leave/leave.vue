<template>
	<view class="yy">
		<view class="a">
			<button class="button" :class="currentIndex === 0 ? 'nav-actived' : ''" @click="change(0)">提交信息</button>
			<button class="button" :class="currentIndex === 1 ? 'nav-actived' : ''" @click="change(1)">历史记录</button>
			<button class="button" @click="bigChange">审批事项查询</button>
		</view>
		<swiper   style="height:1500rpx" :current="currentIndex" >
					<swiper-item >
							<view class="x">
								<view class="may">
									<view class="tel">
										<text class="tt">目的地:</text>
										<input class="t" type="text" focus placeholder="请输入外出目的地(乡镇、街道)">
									<!-- 	<input class="t" type="text" focus placeholder="请输入外出目的地"> -->
									</view>
									<view class="tel">
										<text class="tt">目的地明细:</text>
										<input class="t" type="text" focus placeholder="请输入外出目的地明细">
									</view>
									<view class="tel">
										<text class="tt">外出天数:</text>
										<input class="t" type="number" focus placeholder="请输入外出天数">
									</view>
									<view class="tel">
										<text class="tt">外出日期:</text>
										<uni-datetime-picker v-model="formData.date" type="daterange" ></uni-datetime-picker>
									</view>
								</view>
								
								<view class="reason">

									<text class="ii">外出理由：</text>
									<textarea class="jj" name="" id="" cols="30" rows="10"></textarea>

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
					</swiper-item>
					<swiper-item class="swiper-item sns-news">
						<view class="bb" :class="{active:flag}">
							<view class="content1" v-for="(item,index) in list1">
								<view class="content" >
									<view class="txt_right">
										<text class="title">
											{{item.title}}
										</text>
										<view class="litxt">
											<text class="xijie">{{item.text}}</text>
											<text class="xijie">{{item.text1}}</text>
										</view>
									</view>
								</view>
							</view>
					<!-- 		<view class="b"  v-for="(item,index) in list1" >
								
								<text class="xijie">{{item.text}}</text>
								<text class="xijie">{{item.text1}}</text>
											
							</view> -->
						</view>
						
						<view class="ss" @click = "showTag">{{flag?"已经到底啦":"查看全部"}}</view>
						
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
	</view>


</template>
<script>
	export default {

		data() {
			return {
				currentIndex:0 ,
				flag: false,
				formData: {
					place: '',
					detail:'',
					reason:'',
					days:'',
					date:'',
				},
				list1: [{
						title: "审批事项：外出请假",
						text: "外出目的地：江苏省太仓市",
						text1: "时间：2023.07.01-2023.07.06"
					},
					{
						title: "审批事项：外出请假",
						text: "外出目的地：江苏省南京市",
						text1: "时间：2023.07.01-2023.07.06"
					},
					{
						title: "审批事项：外出请假",
						text: "外出目的地：广东省深圳市",
						text1: "时间：2023.07.01-2023.07.06"
					},
					{
						title: "审批事项：外出请假",
						text: "外出目的地：广东省深圳市",
						text1: "时间：2023.07.01-2023.07.06"
					},
					{
						title: "审批事项：外出请假",
						text: "外出目的地：广东省广州市",
						text1: "时间：2023.07.01-2023.07.06"
					},
					{
						title: "审批事项：外出请假",
						text: "外出目的地：湖北省武汉市",
						text1: "时间：2023.07.01-2023.07.06"
					},
				],

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
			bigChange(){
						uni.navigateTo({
							url: '/pages/approveQuery/approveQuery'
						});
					},
			showTag(){
					    this.flag = !this.flag;
					}, 
			
			},

		}
	
</script>


<style lang="scss">
	.yy{
		height: 100%;
		background-color: #FBFAFF;
	}
	.a{
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
	}
	.may{
		width: 98%;
		height: 550rpx;
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
		height: 600rpx;
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
	.content1{
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
		margin-left: 10rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;
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
		margin-top: 20rpx;
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
	.aa{
		width: 500rpx;
		align-items: center;  
		margin: auto;
		letter-spacing: 100rpx;
		text-indent: 100rpx;
		background-color: #6796F9;
		margin-top: 50rpx;
		border-radius: 30rpx;
	}
	
	
	// .xijie {
	// 	font-size: 30rpx;

	// 	// margin-top: 20rpx;
	// 	// margin-left: 20rpx;
	// }



	
	 



</style>