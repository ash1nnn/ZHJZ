"use strict";const i=require("../../common/vendor.js"),s={data(){return{list:[{id:"2",title1:"请审批：杨福宝 活动预约",title:"活动名称：【闵行区-6月6日】课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",detial1:"报名人:",detial2:"杨福宝",detial3:"审核结果:",detial4:"",detial5:"通过",detial6:"未通过",imgpass:"../../static/sh (1).png",img1:"../../static/sh (2).png",imgsrc:"../../static/jiuye1.jpg",url:"1"},{id:"1",title1:"请审批：胡骁俊 活动预约",title:"活动名称：【徐汇区-6月1日】职业技能行业登记培训课程，火热招生种！",detial1:"报名人:",detial2:"胡骁俊",detial3:"审核结果:",detial4:"",detial5:"通过",detial6:"未通过",imgpass:"../../static/sh (1).png",img1:"../../static/sh (2).png",imgsrc:"../../static/jiuye2.jpg",url:"2"}]}},methods:{todetial(e){e.url==2&&i.index.showModal({title:"活动预约审核",content:"是否同意该申请？",cancelText:"不同意",confirmText:"同意",success:function(a){a.confirm?(e.url=1,e.id=2):(e.url=1,e.id=3)}})},tolist(){i.index.navigateTo({url:"../../pages/orderlist/orderlist"})}}};function r(e,a,c,o,l,d){return{a:i.f(l.list,(t,u,g)=>i.e({a:i.t(t.title1),b:i.t(t.title),c:i.t(t.detial1),d:i.t(t.detial2),e:i.t(t.detial3),f:t.id==1},t.id==1?{g:i.t(t.detial4)}:{},{h:t.id==2},t.id==2?{i:i.t(t.detial5)}:{},{j:t.id==3},t.id==3?{k:i.t(t.detial6)}:{},{l:t.url==1},t.url==1?{m:t.imgpass}:{},{n:t.url==2},t.url==2?{o:t.img1}:{},{p:i.o(p=>d.todetial(t))}))}}const n=i._export_sfc(s,[["render",r],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/ordermanage/ordermanage.vue"]]);wx.createPage(n);
