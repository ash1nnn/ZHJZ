"use strict";const e=require("../../../common/vendor.js"),i={data(){return{scrollTop:0,userId:"",chatMsg:"",msgList:[{botContent:"",recordId:0,titleId:0,userContent:"你好呀我想问你一件事？",userId:0},{botContent:"",recordId:0,titleId:0,userContent:"怎样可以快速调整情绪？",userId:0},{botContent:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",recordId:0,titleId:0,userContent:"",userId:0}]}},computed:{windowHeight(){return this.rpxTopx(e.index.getSystemInfoSync().windowHeight)}},methods:{rpxTopx(n){let r=750/e.wx$1.getSystemInfoSync().windowWidth*Number(n);return Math.floor(r)},handleSend(){if(!this.chatMsg||!/^\s+$/.test(this.chatMsg)){let n={botContent:"",recordId:0,titleId:0,userContent:this.chatMsg,userId:0};this.msgList.push(n),this.chatMsg=""}else this.$modal.showToast("不能发送空白消息")}}};function h(n,d,r,a,o,s){return{a:e.f(o.msgList,(t,c,l)=>e.e({a:t.userContent!=""},t.userContent!=""?{b:e.t(t.userContent)}:{},{c:t.botContent!=""},t.botContent!=""?{d:e.t(t.botContent)}:{},{e:c})),b:`${s.windowHeight}rpx`,c:o.scrollTop,d:o.chatMsg,e:e.o(t=>o.chatMsg=t.detail.value),f:e.o((...t)=>s.handleSend&&s.handleSend(...t))}}const u=e._export_sfc(i,[["render",h],["__scopeId","data-v-6faf52db"],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/demond/history/demondAnswerMotion.vue"]]);wx.createPage(u);
