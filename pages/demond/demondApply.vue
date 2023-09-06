<template>
<!-- <title>需求APPLY页面</title> -->
	<view class = "demond">
		<div class = "back">
			<div class="container">
				<img src="../../static/background.png" class="background" mode="widthFix" alt="" />
			
				<div class="txt1">{{textTitle1}}</div>
				<div class="txt2">{{textTitle2}}</div>
			</div>
			
		</div>
		<div class = "box">
			<div class="wen">
				<img src="../../static/wen.png" width="24px" height="24px" class="wenicon">
				
				<!-- <label for="type">需求类型</label> -->
					<!-- <select id="type" v-model="selectDemond" class="type">
						<option value="">请选择类型</option>
						<option v-for="demond in demonds" :value="demond">{{demond}}</option>
					</select> -->
				    <!-- <select id="type"  v-model="selectDemond"  class="type">
				          <option value="">请选择类型</option>
				          <option v-for="demond in demonds" :value="demond">{{ demond }}</option>
				    </select> -->
				
				<label for="content" style="left: 50px;" class="contentTitle">需求内容</label>
				    <textarea id="content" type="text"  v-model = "content"  class="content"></textarea>
			</div>
			<!-- <div  class="message" v-for="(item,index) in list">
				<div class="wen">
					<img src="../../static/wen.png" width="24px" height="24px" class="wenicon">
				<text class="txt3">{{item.text1}}</text>
				</div>
				<div class="da">
					<img src="../../static/da.png" width="24px" height="24px" class="daicon">
					<text class="txt4">{{item.text2}}</text>
				</div>
				<div>
					<text style="color: darkgrey;" class="line">_____________________________________</text>
				</div>
			</div>	 -->
			
			<div  class="demondApply">
				<img src="../../static/demondApply.png" class="demondApplyImg" alt="" @click = "goto()" />
				
			</div>
			
			
		</div>

	</view>
	
	
</template>

<script>
	export default{
		 data() {
		        return {
					textTitle1: "Hi，很高兴为您服务",
					textTitle2: "请登记您的需求",
					
					content:'',
					
					selectDemond: '',
					demonds:['心理需求', '法律援助', '生活需求', '其他'],
					
					list:[{
						text1:"怎样可以快速调整情绪？",
						text2:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
						time:"2023-06-01"
					},{
						// text1:"怎样可以快速调整情绪？",
						// text2:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
						// time:"2023-06-01"
					}]
					
		        };
				
				
				
				
		    },
		methods:{
			goto(url){
				uni.navigateTo({
					url: "../demond/weChat"
				});
			}
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
		width:400px;
		
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
	.wen{
		position: absolute;
		top:10px;
		bottom: 20px;
	}
	.wenicon{
		position: absolute;
		left:10px;
		width: 24px;
		height: 24px;
		background-color: #F6F6F6;
	}
	.contentTitle{
		position: absolute;
		left: 30px;
		top:3px;
		width: 100px;
		font-size: 16px;
		letter-spacing: 0.1em;
	}
	.content{
		position: absolute;
		top:30px;
		left: 50px;
		color: black;
		width: 250px;
		font-size: 14px;
		letter-spacing: 0.1em;
		line-height: 1.5;
		height: 150px;
		box-shadow: 2px 2px 10px #999;
	}
	.da{
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
		background-color: #F6F6F6;
	}
	.txt4{
		position: absolute;
		top:10px;
		left: 50px;
		color: gray;
		width: 250px;
		font-size: 13px;
		letter-spacing: 0.1em;
	}
	.line{
		position: absolute;
		top:140px;
		left: 30px;
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