<template>
	<!-- 留言板 -->
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
				<!-- 留言提示 -->
				<view class="picMessageBoard">
					<img src="../../static/liuyanban1.png" mode="widthFix" class="picMessage">
				</view>
				
				<!-- <view class="message">
					{{messageBoard}}
				</view> -->


				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index">
					<!-- 自己发的消息 -->
					<!-- <view class="item self" v-if="item.userContent != ''" > -->
						<!-- 文字内容 -->
						<!-- <view class="content right">
						{{item.userContent}}
						</view> -->
						<!-- 头像 -->
						<!-- <view class="avatar">
							<img src="../../static/wen.png" width="24px" height="24px" class="wenicon">
						</view>
					</view> -->
					<!-- 新的自己发的消息 -->
					<view class="item Ai" v-if="item.userContent != ''" >
						<!-- 头像 -->
						<view class="avatar">
							<img src="../../static/6.png" width="24px" height="24px" class="daicon">
						</view>
						<!-- 文字内容 -->
						<view class="content left">
						{{item.userContent}}
						</view>
					</view>
					
					
					
					
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent != ''">
						<!-- 头像 -->
						<view class="avatar">
							<!-- <img src="../../static/da.png" width="24px" height="24px" class="daicon"> -->
							<img src="../../static/xl.png" width="24px" height="24px" class="daicon">
						</view>
						<!-- 文字内容 -->
						<view class="content left">
							{{item.botContent}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<!-- 用来占位，防止聊天消息被发送框遮挡 -->
		<view class="chat-bottom">
			<view class="send-msg">
                <view class="uni-textarea">
					<textarea v-model="chatMsg"
					  maxlength="300"
					  :show-confirm-bar="false"
					 auto-height></textarea>
				</view>
				<button @click="handleSend" class="send-btn">写留言</button>
			</view>
		</view>
	</view>
</template>
<script>
	
	import main from '../../main.js';
	import {
			demandAddUrl,
			myrequest,
			myget,
		} from '../../api.js';
		
		
	export default {
		data() {
			return {
				//滚动距离
				scrollTop: 0,
				userId:'',
				//发送的消息
				chatMsg:"",
				messageBoard:"您好，有什么需求请留言",
				msgList:[

					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "你好我要留言",
					    userId: 0
					},
				]
			}
		},
		
		computed: {
			windowHeight() {
			    return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
			}
		},
		created() {
			let tid = uni.getStorageSync('demandType');
			console.log(tid);
			
		},
		methods: {
			
			
			
			
			// px转换成rpx
			rpxTopx(px){
				let deviceWidth = wx.getSystemInfoSync().windowWidth
				let rpx = ( 750 / deviceWidth ) * Number(px)
				return Math.floor(rpx)
			},
			// 发送消息
			async handleSend() {
				let ttype = uni.getStorageSync('demandType');
				console.log(ttype);
				
				
				//如果消息不为空
				if(!this.chatMsg||!/^\s+$/.test(this.chatMsg)){
					let obj = {
						botContent: 0,
						recordId: 0,
						titleId: 0,
						userContent: this.chatMsg,
						userId: 0
					}
					this.msgList.push(obj);
					let obj1 = {
						botContent: "收到您的留言了，您的家人正在拯救宇宙，请等待回复。",
						recordId: 0,
						titleId: 0,
						userContent: 0,
						userId: 0
					}
					this.msgList.push(obj1);
					uni.request({
						//本地
					    // url: 'http://localhost:8888/demand/addDemand',
						//服务器
					    url: 'http://118.25.148.102:8080/demand/addDemand',
					    method: 'POST',
					    header: {
					        'content-type': 'application/json',
					        
					    },
					    data: {
					        userId : "2",
					        demandDesc: this.chatMsg,
							demandType: ttype
					    },
					    success: (res) => {
					        console.log(res)
					    },
					    fail: (err) => {
					        console.log(err)
					    }
					})
					this.chatMsg = '';
				}else {
					this.$modal.showToast('不能发送空白消息')
				}
				
				//向后端写需求
				// const demondadd = await myrequest(demandAddUrl,'POST',{ userId : "userId=2" ,demandDesc: this.chatMsg,demandType: ttype})//修改接口
				// const demondreply = await myrequest(hostreplyurl,{ userId : "2" })
				// console.log(demondadd)
				
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
				padding-top: 0rpx;
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
	.message{
		background-color: #FFFFFF;

		width: 700rpx;
		height: 50rpx;
		margin-left: 25rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		text-align:center;
		// vertical-align:middle;
		// display:table-cell;
		border-radius: 20rpx;
		border: 12rpx solid transparent;
		border-right: 12rpx solid #FFFFFF;

	}
	
	.picMessageBoard{
		text-align:center;
	}
	.picMessage{
		text-align:center;
		width: 400px;
		
		
	}
	
</style>
