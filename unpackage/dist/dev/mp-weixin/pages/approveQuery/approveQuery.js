"use strict";const e=require("../../common/vendor.js"),l={data(){return{tabbarIndex:0,handlingType:[{value:"已审核"},{value:"审核中"}],list:[{title:"审批事项：外出请假",detial1:"时间：2023.05.20-2023.05.25",detial2:"外出目的地：江苏省太仓市",detial3:"审核情况：通过！",imgpass:"../../static/success.png"},{title:"审批事项：居住地变更",detial1:"时间：2023.06.24",detial2:"外出目的地：上海市徐家汇街道",detial3:"审核情况：未通过！",imgpass:"../../static/fail.png"}],list1:[{title:"审批事项：外出请假",detial1:"时间：2023.05.20-2023.05.25",detial2:"外出目的地：江苏省太仓市",detial3:"审核情况：审核中",imgpass:"../../static/sh (2).png"},{title:"审批事项：居住地变更",detial1:"时间：2023.06.24",detial2:"外出目的地：上海市徐家汇街道",detial3:"审核情况：审核中",imgpass:"../../static/sh (2).png"}]}},methods:{showType(s){this.tabbarIndex=s,this.tabbarIndex==0,this.tabbarIndex==1,console.info(this.tabbarIndex)}}};function d(s,b,p,o,a,r){return e.e({a:e.f(a.handlingType,(t,i,n)=>({a:e.t(t.value),b:e.n(i==a.tabbarIndex?"active":""),c:e.o(u=>r.showType(i))})),b:a.tabbarIndex==0},a.tabbarIndex==0?{c:e.f(a.list,(t,i,n)=>({a:e.t(t.title),b:e.t(t.detial1),c:e.t(t.detial2),d:e.t(t.detial3),e:t.imgpass}))}:{},{d:a.tabbarIndex==1},a.tabbarIndex==1?{e:e.f(a.list1,(t,i,n)=>({a:e.t(t.title),b:e.t(t.detial1),c:e.t(t.detial2),d:e.t(t.detial3),e:t.imgpass}))}:{})}const c=e._export_sfc(l,[["render",d],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/approveQuery/approveQuery.vue"]]);wx.createPage(c);
