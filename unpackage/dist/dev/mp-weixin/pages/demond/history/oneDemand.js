"use strict";const e=require("../../../common/vendor.js");require("../../../app.js");const r=require("../../../api.js"),a={data(){return{scrollTop:0,userId:"",chatMsg:"",msgList:[{botContent:"",recordId:0,titleId:0,userContent:"你好我要留言",ansContent:"",userId:0},{botContent:"",recordId:0,titleId:0,userContent:"应对突发事件发生的方法？",ansContent:"",userId:0},{botContent:"收到您的留言了，您的家人正在拯救宇宙，请等待回复。",recordId:0,titleId:0,userContent:"",ansContent:"",userId:0},{botContent:"",recordId:0,titleId:0,userContent:"",ansContent:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",userId:0}]}},created(){this.initial()},computed:{windowHeight(){return this.rpxTopx(e.index.getSystemInfoSync().windowHeight)}},methods:{async initial(){const n=await r.myrequest(r.historyDemondUrl,"GET",{userId:"userId=2"});console.log(n)},rpxTopx(n){let o=750/e.wx$1.getSystemInfoSync().windowWidth*Number(n);return Math.floor(o)},handleSend(){if(!this.chatMsg||!/^\s+$/.test(this.chatMsg)){let n={botContent:"",recordId:0,titleId:0,userContent:this.chatMsg,userId:0};this.msgList.push(n),this.chatMsg=""}else this.$modal.showToast("不能发送空白消息")}}};function u(n,d,o,l,s,i){return{a:e.f(s.msgList,(t,c,C)=>e.e({a:t.userContent!=""},t.userContent!=""?{b:e.t(t.userContent)}:{},{c:t.botContent!=""},t.botContent!=""?{d:e.t(t.botContent)}:{},{e:t.ansContent!=""},t.ansContent!=""?{f:e.t(t.ansContent)}:{},{g:c})),b:`${i.windowHeight}rpx`,c:s.scrollTop}}const h=e._export_sfc(a,[["render",u],["__scopeId","data-v-c2f66eb8"],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/demond/history/oneDemand.vue"]]);wx.createPage(h);
