"use strict";const i=require("../../common/vendor.js"),c={data(){return{tabbarIndex:0,handlingType:[{value:"待审核"},{value:"已审核"}],list:[{id:"1",title1:"请审批：请假",title:"地点：江苏省太仓市",title2:" 时间：2023.6.22-2023.6.24",detial1:"报名人:",detial2:"杨福宝",detial3:"审核结果:",detial4:"",detial5:"通过",detial6:"未通过",imgpass:"../../static/sh (1).png",img1:"../../static/sh (2).png",imgsrc:"../../static/jiuye1.jpg",url:"2"},{id:"1",title1:"请审批：居住地变更",title:"地点：上海市徐家汇街道",title2:" 时间：2023.6.24",detial1:"报名人:",detial2:"胡骁俊",detial3:"审核结果:",detial4:"",detial5:"通过",detial6:"未通过",imgpass:"../../static/sh (1).png",img1:"../../static/sh (2).png",imgsrc:"../../static/jiuye2.jpg",url:"2"}],list1:[{id:"2",title1:"请审批：请假",title:"地点：江苏省太仓市",title2:" 时间：2023.6.22-2023.6.24",detial1:"报名人:",detial2:"杨福宝",detial3:"审核结果:",detial4:"",detial5:"通过",detial6:"未通过",imgpass:"../../static/sh (1).png",img1:"../../static/sh (2).png",imgsrc:"../../static/jiuye1.jpg",url:"1"},{id:"3",title1:"请审批：居住地变更",title:"地点：上海市徐家汇街道",title2:" 时间：2023.6.24",detial1:"报名人:",detial2:"胡骁俊",detial3:"审核结果:",detial4:"",detial5:"通过",detial6:"未通过",imgpass:"../../static/sh (1).png",img1:"../../static/sh (2).png",imgsrc:"../../static/jiuye2.jpg",url:"1"}]}},methods:{todetial(l){l.url==2&&i.index.showModal({title:"审批事项审核",content:"是否同意该申请？",cancelText:"不同意",confirmText:"同意",success:function(s){s.confirm?(l.url=1,l.id=2):(l.url=1,l.id=3)}})},showType(l){this.tabbarIndex=l,this.tabbarIndex==0,this.tabbarIndex==1,console.info(this.tabbarIndex)}}};function g(l,s,p,o,a,d){return i.e({a:i.f(a.handlingType,(t,e,r)=>({a:i.t(t.value),b:i.n(e==a.tabbarIndex?"active":""),c:i.o(n=>d.showType(e))})),b:a.tabbarIndex==0},a.tabbarIndex==0?{c:i.f(a.list,(t,e,r)=>i.e({a:i.t(t.title1),b:i.t(t.title),c:i.t(t.title2),d:i.t(t.detial1),e:i.t(t.detial2),f:i.t(t.detial3),g:t.id==1},t.id==1?{h:i.t(t.detial4)}:{},{i:t.id==2},t.id==2?{j:i.t(t.detial5)}:{},{k:t.id==3},t.id==3?{l:i.t(t.detial6)}:{},{m:t.url==1},t.url==1?{n:t.imgpass}:{},{o:t.url==2},t.url==2?{p:t.img1}:{},{q:i.o(n=>d.todetial(t))}))}:{},{d:a.tabbarIndex==1},a.tabbarIndex==1?{e:i.f(a.list1,(t,e,r)=>i.e({a:i.t(t.title1),b:i.t(t.title),c:i.t(t.title2),d:i.t(t.detial1),e:i.t(t.detial2),f:i.t(t.detial3),g:t.id==1},t.id==1?{h:i.t(t.detial4)}:{},{i:t.id==2},t.id==2?{j:i.t(t.detial5)}:{},{k:t.id==3},t.id==3?{l:i.t(t.detial6)}:{},{m:t.url==1},t.url==1?{n:t.imgpass}:{},{o:t.url==2},t.url==2?{p:t.img1}:{},{q:i.o(n=>d.todetial(t))}))}:{})}const u=i._export_sfc(c,[["render",g],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/approveCheck/approveCheck.vue"]]);wx.createPage(u);
