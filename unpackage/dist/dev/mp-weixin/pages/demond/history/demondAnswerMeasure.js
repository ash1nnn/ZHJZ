"use strict";const t=require("../../../common/vendor.js"),i={data(){return{scrollTop:0,userId:"",chatMsg:"",msgList:[{botContent:"",recordId:0,titleId:0,userContent:"你好呀我想问你一件事？",userId:0},{botContent:"",recordId:0,titleId:0,userContent:"应对突发事件发生的方法？",userId:0},{botContent:"遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",recordId:0,titleId:0,userContent:"",userId:0}]}},computed:{windowHeight(){return this.rpxTopx(t.index.getSystemInfoSync().windowHeight)}},methods:{rpxTopx(n){let r=750/t.wx$1.getSystemInfoSync().windowWidth*Number(n);return Math.floor(r)},handleSend(){if(!this.chatMsg||!/^\s+$/.test(this.chatMsg)){let n={botContent:"",recordId:0,titleId:0,userContent:this.chatMsg,userId:0};this.msgList.push(n),this.chatMsg=""}else this.$modal.showToast("不能发送空白消息")}}};function h(n,d,r,a,s,o){return{a:t.f(s.msgList,(e,c,l)=>t.e({a:e.userContent!=""},e.userContent!=""?{b:t.t(e.userContent)}:{},{c:e.botContent!=""},e.botContent!=""?{d:t.t(e.botContent)}:{},{e:c})),b:`${o.windowHeight}rpx`,c:s.scrollTop,d:s.chatMsg,e:t.o(e=>s.chatMsg=e.detail.value),f:t.o((...e)=>o.handleSend&&o.handleSend(...e))}}const u=t._export_sfc(i,[["render",h],["__scopeId","data-v-b9a83eea"],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/demond/history/demondAnswerMeasure.vue"]]);wx.createPage(u);