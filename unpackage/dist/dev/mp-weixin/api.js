"use strict";const m=require("./common/vendor.js"),n="http://118.25.148.102:8080/",c=n+"/demand/getHistoryDemand",a=n+"/demand/search",l=n+"/demand/getOneDemand",i=n+"/demand/getDemand",u=function(o,d,e){return(e!=null||e!=null||e!={})&&Object.keys(e).forEach(function(r){o+="?"+e[r]}),console.log(o),new Promise((r,t)=>{m.index.request({url:o,method:d,header:{"custom-header":"housework"},success:s=>{r(s.data)},fail:s=>{t(s.data),console.log("获取数据失败")}})})};exports.demandReplyInitialUrl=i;exports.historyDemondUrl=c;exports.myrequest=u;exports.oneDemandUrl=l;exports.searchDemandUrl=a;
