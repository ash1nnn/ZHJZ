<template>
	<!-- <title>本模块为需求历史细节</title> -->
	<view class="chat">
		<scroll-view  :style="{height: `${windowHeight}rpx`}"
		id="scrollview"
		scroll-y="true" 
		:scroll-top="scrollTop"
		:scroll-with-animation="true"
		class="scroll-view"
		>
			<!-- 聊天主体 -->
			<view id="msglistview" class="chat-body">
				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index">
					<!-- 自己发的消息 -->
					<view class="item self" v-if="item.userContent != ''" >
						<!-- 文字内容 -->
						<view class="content right">
						{{item.userContent}}
						</view>
						<!-- 头像 -->
						<view class="avatar">
							<img src="../../../static/6.png" width="24px" height="24px" class="wenicon">
						</view>
					</view>
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent != ''">
						<!-- 头像 -->     
						<view class="avatar">
							<img src="../../../static/xl.png" width="24px" height="24px" class="daicon">
						</view>
						<!-- 文字内容 -->
						<view class="content left">
							{{item.botContent}}
						</view>
					</view>
					<!-- 回复的消息 -->
					<view class="item Ai" v-if="item.ansContent != ''">
						<!-- 头像 -->     
						<view class="avatar">
							<img src="../../../static/da.png" width="24px" height="24px" class="daicon">
						</view>
						<!-- 文字内容 -->
						<view class="content left">
							{{item.ansContent}}
						</view>
					</view>
					
					
					
					
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<!-- 用来占位，防止聊天消息被发送框遮挡 -->
		<!-- <view class="chat-bottom">
			<view class="send-msg">
                <view class="uni-textarea">
					<textarea v-model="chatMsg"
					  maxlength="300"
					  :show-confirm-bar="false"
					 auto-height></textarea>
				</view>
				<button @click="handleSend" class="send-btn">发送</button>
			</view>
		</view> -->
	</view>
</template>
<script>
	import main from '../../../main.js';
	import {
			oneDemandUrl,
			myrequest,
			myget,
		} from '../../../api.js';
	
	export default {
		data() {
			return {
				//滚动距离
				scrollTop: 0,
				userId:'',
				//发送的消息
				chatMsg:"",
				msgList:[
					// {
					//     botContent: "",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "你好我要留言",
					// 	ansContent:"",
					//     userId: 0
					// },{
					//     botContent: "",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "怎样可以快速调整情绪？",
					// 	ansContent:"",
					//     userId: 0
					// },
					// {
					//     botContent: "收到您的留言了，您的家人正在拯救宇宙，请等待回复。",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "",
					// 	ansContent:"",
					//     userId: 0
					// },
					// {
					//     botContent: "",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "",
					// 	ansContent:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
					//     userId: 0
					// },
				]	
			}
		},
		computed: {
			windowHeight() {
			    return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
			}
		},
		
		created() {
			this.initial();
		},
		
		
		methods: {
			async initial(){
				console.log(main.demandId);
				console.log(uni.getStorageSync('demondId'));

				let tid = "demandId="+uni.getStorageSync('demandId');
				// console.log(dId);
				let demondreply = await myrequest(oneDemandUrl,'GET',{ demandId : tid});
				
				console.log(demondreply);
				let obj = 
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "你好我要留言",
						ansContent:"",
					    userId: 0
					}
				this.msgList.push(obj);
				let obj1 =
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: demondreply.data.demand.demandDesc,
						ansContent:"",
					    userId: 0
					}
					this.msgList.push(obj1);
				let obj2 =
					{
					    botContent: "收到您的留言了，您的家人正在拯救宇宙，请等待回复。",
					    recordId: 0,
					    titleId: 0,
					    userContent: "",
					    ansContent:"",
					    userId: 0
					}
					this.msgList.push(obj2);
				if(demondreply.data.replyContent){
					let obj3 =
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "",
					    ansContent: demondreply.data.replyContent,
					    userId: 0
					}
					this.msgList.push(obj3);
				}
				
				
			},
			
			
			
			
			
			// px转换成rpx
			rpxTopx(px){
				let deviceWidth = wx.getSystemInfoSync().windowWidth
				let rpx = ( 750 / deviceWidth ) * Number(px)
				return Math.floor(rpx)
			},
			// 发送消息
			handleSend() {
				//如果消息不为空
				if(!this.chatMsg||!/^\s+$/.test(this.chatMsg)){
					let obj = {
						botContent: "",
						recordId: 0,
						titleId: 0,
						userContent: this.chatMsg,
						userId: 0
					}
					this.msgList.push(obj);
					this.chatMsg = '';
				}else {
					this.$modal.showToast('不能发送空白消息')
				}
			},
		}
	}
</script>
<style lang="scss" scoped>
	
	$chatContentbgc: #C2DCFF;
	$sendBtnbgc: #4F7DF5;
	
	view,button,text,input,textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* 聊天消息 */
	.chat {
		.scroll-view {
			::-webkit-scrollbar {
					    display: none;
					    width: 0 !important;
					    height: 0 !important;
					    -webkit-appearance: none;
					    background: transparent;
					    color: transparent;
					  }
			
			// background-color: orange;
			background-color: #F6F6F6;
			
			.chat-body {
				display: flex;
				flex-direction: column;
				padding-top: 23rpx;
				// background-color:skyblue;
				
				.self {
					justify-content: flex-end;
				}
				.item {
					display: flex;
					padding: 23rpx 30rpx;
					// background-color: greenyellow;

					.right {
						background-color: $chatContentbgc;
					}
					.left {
						background-color: #FFFFFF;
					}
                    // 聊天消息的三角形
					.right::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						left: 100%;
						top: 10px;
						border: 12rpx solid transparent;
						border-left: 12rpx solid $chatContentbgc;
					}

					.left::after {
						position: absolute;
						display: inline-block;
						content: '';
						width: 0;
						height: 0;
						top: 10px;
						right: 100%;
						border: 12rpx solid transparent;
						border-right: 12rpx solid #FFFFFF;
					}

					.content {
						position: relative;
						max-width: 486rpx;
						border-radius: 8rpx;
						word-wrap: break-word;
						padding: 24rpx 24rpx;
						margin: 0 24rpx;
						border-radius: 5px;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 42rpx;
					}

					.avatar {
						display: flex;
						justify-content: center;
						width: 78rpx;
						height: 78rpx;
						// background: $sendBtnbgc;
						background: white;
						// border-radius: 8rpx;
						overflow: hidden;
						
						image {
							align-self: center;
						}

					}
				}
			}
		}

		/* 底部聊天发送栏 */
		.chat-bottom {
			width: 100%;
			height: 177rpx;
			background: #F4F5F7;

			.send-msg {
				display: flex;
				align-items: flex-end;
				padding: 16rpx 30rpx;
				width: 100%;
				min-height: 177rpx;
				position: fixed;
				bottom: 0;
				background: #EDEDED;
			}

			.uni-textarea {
				padding-bottom: 70rpx;
                
				textarea {
					width: 537rpx;
					min-height: 75rpx;
					max-height: 500rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					color: #333333;
					line-height: 43rpx;
					padding: 5rpx 8rpx;
				}
			}
            
			.send-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 70rpx;
				margin-left: 25rpx;
				width: 128rpx;
				height: 75rpx;
				background: $sendBtnbgc;
				border-radius: 8rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 28rpx;
			}
		}
		
	}
	.wenicon{
		position: absolute;
		width: 78rpx;
		height: 78rpx;
		background-color: #F6F6F6;
	}
	.daicon{
		position: absolute;
		width: 78rpx;
		height: 78rpx;
		background-color: #F6F6F6;
	}
</style>
