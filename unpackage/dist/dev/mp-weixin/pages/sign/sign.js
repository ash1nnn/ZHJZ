"use strict";const t=require("../../common/vendor.js"),s={data(){return{classify:1,title:"Hello",list1:[{icon:"../../static/3.png",text:"个别教育"},{icon:"../../static/4.png",text:"集中教育"},{icon:"../../static/5.png",text:"公益活动"}]}},onLoad(){},methods:{click(n){t.index.navigateTo({url:n})}}};function r(n,a,l,u,c,i){return{a:t.f(c.list1,(e,_,g)=>({a:e.icon,b:t.t(e.text),c:t.o(x=>i.click(e.url))}))}}const o=t._export_sfc(s,[["render",r],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/sign/sign.vue"]]);wx.createPage(o);
