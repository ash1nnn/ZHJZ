<template>
	<!-- <title>心理辅导</title> -->
	<!-- <title>本模块已放弃使用</title> -->
	
	<view class = "demond">
		<div class = "back">
			<div class="container">
				<img src="../../static/background.png" class="background" mode="widthFix" alt="" />
			
				<div class="txt1">{{textTitle1}}</div>
				<div class="txt2">{{textTitle2}}</div>
			</div>
			
		</div>
		<div class = "box">
			<div  class="message" v-for="(item,index) in list" @click="history1()">
				<div class="wen">
					<img src="../../static/wen.png" width="24px" height="24px" class="wenicon">
				<text class="txt3">{{item.text1}}</text>
				</div>
				<!-- <image src= mode=""></image> -->
				<div class="da">
					<img src="../../static/da.png" width="24px" height="24px" class="daicon">
					<text class="txt4">{{item.text2}}</text>
				</div>
				<!-- <text class="txt5">{{item.time}}</text> -->
				<div>
					<text style="color: darkgrey;" class="line">_____________________________________</text>
				</div>
			</div>	
			
			<div  class="demondApply">
				<img src="../../static/demondApply.png" class="demondApplyImg" alt=""  @click="demondApply()"/>
				
			</div>
			
			<div  class="message1" v-for="(item,index) in list1" @click="history2()">
				<div class="wen1">
					<img src="../../static/wen.png" width="24px" height="24px" class="wenicon1">
				<text class="txt31">{{item.text1}}</text>
				</div>
				<!-- <image src= mode=""></image> -->
				<div class="da1">
					<img src="../../static/da.png" width="24px" height="24px" class="daicon1">
					<text class="txt41">{{item.text2}}</text>
				</div>
				<!-- <text class="txt5">{{item.time}}</text> -->
				<div>
					<text style="color: darkgrey;" class="line1">_____________________________________</text>
				</div>
			</div>	
			
		</div>

	</view>
	
	
</template>

<script>
	export default{
		 data() {
		        return {
		            // currentImg: "",
					textTitle1: "Hi，很高兴为您服务",
					textTitle2: "有什么问题需要为您解答吗？",
					
					list:[{
						text1:"怎样可以快速调整情绪？",
						text2:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
						time:"2023-06-01"
					}],
					list1:[{
						text1:"应对突发事件发生的方法？",
						text2:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
						time:"2023-06-01"
					}]
					
		        };
				
				
				
				
		    },
		methods:{
			demondApply(url){
				uni.navigateTo({
				    url:"../demond/demondType"
				});
			},
			history1(url){
				uni.navigateTo({
				    url:"../demond/history/demondAnswerMotion"
				});
			},
			history2(url){
				uni.navigateTo({
				    url:"../demond/history/demondAnswerMeasure"
				});
			},
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
		background-color: white;
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
		position: absolute;
		top:100px;
		width: 70px;
		
	}
	.demondApplyImg{
		position: absolute;
		top: 400px;
		width: 150px;
		height: 32px;
		left: 120px;
	}
	
</style>