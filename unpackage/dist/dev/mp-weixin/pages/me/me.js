"use strict";const e=require("../../common/vendor.js"),i={data(){return{list1:[{icon:"../../static/me/7.jpg",text:"沪智矫",appid:"wx14c2b0d4a80a43d0",url:"/pages/home/index"},{icon:"../../static/me/8.jpg",text:"慧矫正",appid:"wxd9c723d098992660",url:"/pages/flash/index"}]}},onLoad(){},methods:{click(r){e.index.navigateToMiniProgram({appId:r.appid,path:r.url})},bigChange(){e.index.navigateTo({url:"/pages/approveQuery/approveQuery"})}}};function c(r,p,s,d,t,n){return{a:e.o((...a)=>n.bigChange&&n.bigChange(...a)),b:e.f(t.list1,(a,g,u)=>({a:a.icon,b:e.t(a.text),c:e.o(x=>n.click(a))}))}}const o=e._export_sfc(i,[["render",c],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/me/me.vue"]]);wx.createPage(o);
