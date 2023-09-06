<template>
	<!-- <title>需求历史页面</title> -->
	<!-- <title>本模块为矫正对象需求的主界面</title> -->
	<view class = "demond">
		<scroll-view scroll-y="true" style="height: 100vh;" bindscrolltolower="loadMore">
		<div class = "back">
			<div class="container">
				<img src="../../static/background.png" class="background" mode="widthFix" alt="" />
			
				<div class="txt1">{{textTitle1}}</div>
				<div class="txt2">{{textTitle2}}</div>
			</div>
		</div>
		
		
		<div class = "box">
			<view class="search-block">
				<input type="text" v-model="searchContent" placeholder="请输入需要搜索的需求" class="search-text" maxlength="10" focus />
				<view class="search-ico-wapper1" > 
					   <image src="../../static/search.png" class="search-ico-1" mode="" alt="" @click="search()" />
				</view>
			</view>
			<view class="shadow">
			</view>
			<!-- 新增内容,历史列表-->
			<view class="content1" v-for="(item,index) in list3" :key="index" >
				<view class="content" @click="todetial(item.demand.demandId)">
					<view class="txt_right">
						<text class="title">
							{{item.demand.demandDesc}}
							<!-- {{item.text1}} -->
						</text>
						<view class="litxt">
							<text class="answer">{{item.replyContent}}</text>
							<!-- <text class="answer">{{item.demandReply}}</text> -->
							<!-- <text class="answer">{{item.demandReply.replyTime}}</text> -->
							<!-- <text class="answer">{{item.demandReplyList[0].replyTime}}</text> -->
							<!-- <text class="answer">{{item.demandReplyList[0].replyContent}}</text> -->
							<!-- <text class="answer">{{item.text2}}</text> -->
							<text class="time">{{item.demand.demandCreate}}</text>
							
							
							<!-- <img :src="item.imgpass" class="img1"> -->
						</view>
					</view>
					<img :src="item.imgsrc" class="img">
				</view>
			</view>
			
			<!-- 按钮 -->
			<div  class="demondApply">
			<img src="../../static/demondApply.png" class="demondApplyImg" alt=""  @click="demondApply()"/>
			</div>
		</div>
		</scroll-view>
		
		
	</view>
	
	
</template>

<script>
	import main from '../../main.js';
	import {
			historyDemondUrl,
			searchDemandUrl,
			myrequest,
			myget,
		} from '../../api.js';
	
	// import axios from "axios";
	// import {postRequest} from "../../axios.js";
	
	
	// import { postRequest } from "../../api.js";
	export default{
		 data() {
		        return {
		            // currentImg: "",
					textTitle1: "Hi，很高兴为您服务",
					textTitle2: "需求服务历史",
					
					list3:[{
						text1:"怎样可以快速调整情绪？",
						text2:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
						time:"2023-07-01",
						url: "../demond/history/demondAnswerMotion",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-30",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-29",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-28",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-27",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-26",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-25",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-24",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-23",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-22",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-21",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-20",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-19",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-18",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-17",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-16",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-15",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-14",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-12",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-11",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-10",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-09",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-08",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-07",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-06",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-05",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-04",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-03",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-02",
						url: "../demond/history/demondAnswerMeasure",
					},{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-01",
						url: "../demond/history/demondAnswerMeasure",
					},
					],//列表结束
					
					searchContent:"",
		     		loading: true, // 是否正在加载
					page: 1, // 当前页码
					pageSize: 4,// 每页显示的数据量
					
					
		        };
				
				
		    },
		mounted(){
			// this.scrollWindow()
		},
		created(){
			// this.init();//初始化
			this.initial();//初始化
		},
		
		methods:{
			
			// init(){//js.$http 版本
			// 	this.$http.post(main.url + "/d/dd ",{'dd': 0}).then(
			// 	success=>{
			// 		this.list3 = success.data;
			// 	})	
			// },
			
			
			// initial(){//axios 版本
			// 	const _this = this;
			// 	    // this.professionId = window.sessionStorage.getItem("professionId");  获取id
			// 	    postRequest("/demand/getHistoryDemond", { userId: "1" }).then(
			// 	      function (resp) {
			// 	        if (resp.succeed) {
			// 				console.log(resp.data)
			// 				// this.list3 = success.data;
			// 	          }
			// 	        }
			// 	      }
			// 	    );
			// },
			
			// initial(){//uniapp 版本
			// 	const _this = this;
			// 	    // this.professionId = window.sessionStorage.getItem("professionId");  获取id
			// 	    uni.request({
			// 	      url: "https://127.0.0.1/8888/demand/getHistoryDemond",
			// 		  method: 'GET',
			// 		  header:{
			// 		  		'Content-Type' : 'application/json',
			// 		  		token : uni.getStorageSync("TOKEN")
			// 		  	},
			// 		  	data: {
			// 		  		userId : "2"
			// 		  	},
			// 	      success: (res) => {
			// 	        console.log(res.data);
			// 	      },
			// 	      fail: (err) => {
			// 	        console.error(err);
			// 	      },
			// 	    });
			// },
			
			
			async initial(){ //自带版本
				let demondreply = await myrequest(historyDemondUrl,'GET',{ userId : "userId=2" });
				// const demondreply = await myrequest(hostreplyurl,{ userId : "2" })
				console.log(demondreply);
				console.log(demondreply.data);
				// this.list3 = demondreply["data"] || [];
				this.list3 = demondreply.data;
				// this.list3.text2 = demondreply.data.demandReplyList[0].replyContent;
				console.log(this.list3[0].demand.demandDesc);
				console.log(this.list3[0].replyContent);
				// console.log(this.list3[0].text2);
				// console.log(this.list3[0].demandReplyList[0].replyContent);
				console.log(this.list3[0].demandReply.replyContent);
				
				// console.log(this.list3[0].demandReplyList);
			},
			async search(){
				
				let searchContent = "userId=2&keyword=" + this.searchContent;
				let searchreply = await myrequest(searchDemandUrl,'GET',{ userId : searchContent});
				// const demondreply = await myrequest(hostreplyurl,{ userId : "2" })
				console.log(searchreply);
				console.log(searchreply.data);
				// this.list3 = demondreply["data"] || [];
				this.list3 = searchreply.data;
				// this.list3.text2 = demondreply.data.demandReplyList[0].replyContent;
				// console.log(this.list3[0].demand.demandDesc);
				// console.log(this.list3[0].text2);
			},
			
			
			onLoad() {
			    // 初始化数据
			    this.loadMore();
			  },
			loadMore() {
			    // 如果正在加载，则直接返回
			    if (this.data.loading) {
			      return;
			    }
			    // 标记为正在加载
			    this.setData({ loading: true });
			    // 模拟异步加载数据
			    setTimeout(() => {
			      const start = (this.data.page - 1) * this.data.pageSize;
			      const end = start + this.data.pageSize;
			      const newData = [];
			      for (let i = start; i < end; i++) {
			        newData.push({ id: i, name: `Item ${i}` });
			      }
			      // 添加新数据到列表末尾
			      this.setData({ items: [...this.data.items, ...newData], loading: false, page: this.data.page + 1 });
			    }, 1000);
			  },  
			
			todetial(id) {
				console.log(id);
				uni.setStorage({key:'demandId',data:id});
				// let tid = uni.getStorageSync('demandId');
				// console.log(tid);
				
				uni.navigateTo({
					url:"../demond/history/demondAnswerMotion"
				});
			},
			demondApply(url){
				uni.navigateTo({
				    url:"../demond/demondType"
				});
			},
			
			// history1(url){
			// 	uni.navigateTo({
			// 	    url:"../demond/history/demondAnswerMotion"
			// 	});
			// },
			// history2(url){
			// 	uni.navigateTo({
			// 	    url:"../demond/history/demondAnswerMeasure"
			// 	});
			// },
		}
		    
	}
	
</script>

<style scoped>
	.demond{
		position: relative;
	}
	.back{
		position: absolute;
	}
	.container{
		position: relative;
	}
	.background{
		object-fit: cover;
		width: 400px;
	}
	.txt1{
		position: absolute;
		top:40px;
		left: 20px;
		color: white;
		font-size: 18px;
		letter-spacing: 0.1em;
	}
	.txt2{
		position: absolute;
		top:68px;
		left: 20px;
		color: lightgrey;
		font-size: 13px;
		letter-spacing: 0.1em;
	}
	
	
	.box{
		position: absolute;
		width: 100px;
		height: 1000px;
		width: 100%;
		margin-top: 120px;
		border-radius: 40upx;
		background-color: ghostwhite;
		box-shadow: 3px 2px 10px #999;
	}
	
	.message{
		position: relative;
		top:10px;
	}
	.message1{
		position: relative;
		top:200px;
	}
	.wen{
		position: absolute;
		top:10px;
		bottom: 20px;
	}
	.wen1{
		position: absolute;
		top:10px;
		bottom: 20px;
	}
	.wenicon{
		position: absolute;
		left:10px;
		width: 24px;
		height: 24px;
	}
	.wenicon1{
		position: absolute;
		left:10px;
		width: 24px;
		height: 24px;
	}
	.txt3{
		position: absolute;
		top:0px;
		left: 50px;
		color: black;
		width: 400px;
		font-size: 20px;
		letter-spacing: 0.1em;
		font-weight: bold;
	}
	.txt31{
		position: absolute;
		top:0px;
		left: 50px;
		color: black;
		width: 400px;
		font-size: 20px;
		letter-spacing: 0.1em;
		font-weight: bold;
	}
	.da{
		position: absolute;
		top:40px;
		bottom: 20px;
		
	}
	.da1{
		position: absolute;
		top:40px;
		bottom: 20px;
		
	}
	.daicon{
		position: absolute;
		top:10px;
		left:10px;
		width: 24px;
		height: 24px;
	}
	.daicon1{
		position: absolute;
		top:10px;
		left:10px;
		width: 24px;
		height: 24px;
	}
	.txt4{
		position: absolute;
		top:10px;
		left: 50px;
		color: gray;
		width: 300px;
		font-size: 13px;
		letter-spacing: 0.1em;
	}
	.txt41{
		position: absolute;
		top:10px;
		left: 50px;
		color: gray;
		width: 300px;
		font-size: 13px;
		letter-spacing: 0.1em;
	}
	.line{
		position: absolute;
		top:140px;
		left: 70px;
		color: black;
		width: 200px;
	}
	.line1{
		position: absolute;
		top:140px;
		left: 70px;
		color: black;
		width: 200px;
	}
	.demondApply{
		position: fixed;
		bottom:60px;
		width: 70px;
		
	}
	.demondApplyImg{
		position: fixed;
		bottom: 60 px;
		width: 150px;
		height: 32px;
		left: 120px;
	}
	
	
	/* 新增 */
	.but[plain]{
			background-color: #ebf2ff;
			font-size: 35rpx;
			color: #ffffff;
			/* border-bottom: #FFFFFF; */
			/* button[plain]{ border:0 }; */
			border-radius: 40rpx;
			border: 0;
			margin-left: 10rpx;
			margin-right: 10rpx;
			
		}
		.content {
			display: flex;
			flex-direction: row;
			width: 98%;
			padding-top: 40rpx;
			padding-bottom: 20rpx;
			border-radius: 40rpx;
			box-shadow: 1px 1px 3px #999;
			/* border-bottom: 5rpx solid #ececec; */
			/* border-top: 5rpx solid #ececec; */
	/* 		border-left: 5rpx solid #ec/* ecec;
			border-right: 5rpx solid #ececec; */ 
			margin-bottom: 10rpx;
			margin-left: 8rpx;
			margin-right: 10rpx;
			margin-top: 10rpx;
			background-color: white;
			
		}
	
		.img {
			width: 25%;
			height: 200rpx;
		}
		.img1{
			width: 100rpx;
			height: 100rpx;
		}
	
		.title {
			padding-top: 10rpx;
			padding-left: 20px;
			/* font-style: oblique; */
			color: black;
			width: 400px;
			font-size: 20px;
			letter-spacing: 0.1em;
			font-weight: bold;
		}
	
		/* .txt_right {
			display: flex;
			flex-direction: column;
			width: 70%;
		} */
	
		.litxt {
			display: flex;
			flex-direction: column;
			font-size: 25rpx;
			align-items: left;
			justify-items: left;
			padding-top: 30rpx;
			padding-left: 15rpx;
		}
	
		.answer {
			/* padding-right: 20rpx; */
			color: gray;
			padding-top:5px;
			padding-left: 15px;
			color: gray;
			width: 340px;
			font-size: 14px;
			letter-spacing: 0.1em;
		}
		.time{
			/* padding-right: 20rpx; */
			color: gray;
			padding-top:5px;
			padding-left: 15px;
			color: gray;
			width: 400px;
			font-size: 12px;
			letter-spacing: 0.1em;
		}
		.search {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 110rpx;
			width: 110rpx;
			border-radius: 50%;
			background-color: #00007f;
			position: fixed;
			font-size: 16rpx;
			color: white;
			box-shadow: 0 0 10px #00007f;
			right: 50rpx;
			bottom: 100rpx;
			
		}
		.search-ico,
		.search-ico-1 {
			width: 40upx;
			height: 40upx;
			z-index: 1;
		}
		
		.search-text {
			font-size: 14px;
			background-color: #FFFFFF;
			height: 60upx;
			width: 480upx;
		}
		
		.search-block {
			display: flex;
			flex-direction: row;
			padding-left: 130upx;
			position: relative;
			top: 30upx;
		}
		
		.search-ico-wapper {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0upx 0upx 0upx 40upx;
			border-bottom-left-radius: 18px;
			border-top-left-radius: 18px;
		}
		
		.search-ico-wapper1 {
			background-color: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0upx 40upx 0upx 0upx;
			border-bottom-right-radius: 18px;
			border-top-right-radius: 18px;
		}
		
		.shadow {
			width: 638upx;
			height: 60upx;
			border-radius: 18px;
			-moz-box-shadow: 0 0 10px #e6e6e6;
			-webkit-box-shadow: 0 0 10px #e6e6e6;
			box-shadow: 0 0 10px gray;
			position: relative;
			top: -30upx;
			left: 60upx;
		}
	
		
	
	
</style>