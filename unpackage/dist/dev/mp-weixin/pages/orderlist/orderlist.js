"use strict";const t=require("../../common/vendor.js"),r={data(){return{list:[{title:"课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",detial1:"闵行区",detial2:"6月6日",detial3:"报名成功！",detial4:" ",imgpass:"../../static/success.png",imgsrc:"../../static/jiuye1.jpg",url:""},{title:"职业技能行业登记培训课程，火热招生种！",detial1:"徐汇区",detial2:"6月1日",detial3:"报名失败！",detial4:" ",imgpass:"../../static/fail.png",imgsrc:"../../static/jiuye2.jpg",url:""}],tabIndex:"GuanZhu",tabBars:[{name:"关注",id:"GuanZhu"},{name:"推荐",id:"TuiJian"},{name:"财经",id:"caijing"},{name:"体育",id:"tiyu"},{name:"娱乐",id:"yule"}],currentTabComponent:"GuanZhu"}},methods:{todetial(){t.index.navigateTo({url:"../../pages/activatedetail/activatedetail"})},tolist(){t.index.navigateTo({url:"../../pages/orderlist/orderlist"})},tabtap(a){this.$emit("tabtap",a)}}};function n(a,l,c,u,i,s){return{a:t.f(i.list,(e,o,g)=>({a:t.t(e.title),b:t.t(e.detial1),c:t.t(e.detial2),d:t.t(e.detial3),e:t.t(e.detial4),f:e.imgpass,g:e.imgsrc})),b:t.o(e=>s.todetial())}}const d=t._export_sfc(r,[["render",n],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/orderlist/orderlist.vue"]]);wx.createPage(d);
