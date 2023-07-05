<<<<<<< HEAD
"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classify: 1,
      title: "Hello",
      list1: [
        {
          icon: "https://test-37b.pages.dev/index/3.png",
          text: "日常考核",
          url: "/pages/check/check"
        },
        {
          icon: "https://test-37b.pages.dev/index/4.png",
          text: "活动预约",
          url: "/pages/activatemain/activatemain"
        },
        {
          icon: "https://test-37b.pages.dev/index/5.png",
          text: "需求登记",
          url: "/pages/demond/demond"
        },
        {
          icon: "https://test-37b.pages.dev/index/6.png",
          text: "矫正经历",
          url: "/pages/experience/experience"
        }
      ],
      list2: [
        {
          icon: "https://test-37b.pages.dev/index/3.png",
          text: "社矫查询",
          url: "/pages/select/select"
        },
        {
          icon: "https://test-37b.pages.dev/index/4.png",
          text: "通知公告",
          url: "/pages/notice/notice"
        },
        {
          icon: "https://test-37b.pages.dev/index/5.png",
          text: "活动管理",
          url: "/pages/ordermanage/ordermanage"
        },
        {
          icon: "https://test-37b.pages.dev/index/6.png",
          text: "需求处理",
          url: "/pages/demond/demondTypeTeam"
        }
      ],
      list3: [
        {
          icon: "https://test-37b.pages.dev/index/3.png",
          text: "执法公开"
        },
        {
          icon: "https://test-37b.pages.dev/index/4.png",
          text: "服务登记"
        },
        {
          icon: "https://test-37b.pages.dev/index/5.png",
          text: "活动预约"
        }
        // {
        // 	icon: "https://test-37b.pages.dev/8.png",
        // 	text: "需求处理",
        // 	url: "https://test-37b.pages.dev/h.png"
        // }
      ],
      newsList: [
        {
          id: "2",
          icon: "https://test-37b.pages.dev/index/10.png",
          text: "社区矫正对象报到接受规范",
          text1: "1236人阅读"
        },
        {
          id: "3",
          icon: "https://test-37b.pages.dev/index/11.png",
          text: "社区矫正对象报告规范",
          text1: "7786人阅读"
        },
        {
          id: "4",
          icon: "https://test-37b.pages.dev/index/12.png",
          text: "请假外出审批规范",
          text1: "5658人阅读"
        },
        {
          id: "5",
          icon: "https://test-37b.pages.dev/index/13.png",
          text: "居住、执行地变更审批规范",
          text1: "5675人阅读"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    click(item) {
      common_vendor.index.navigateTo({
        url: item
      });
    },
    change(id) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?id=" + JSON.stringify(id)
        //将传递的对象转化成字符串
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.classify == 1
  }, $data.classify == 1 ? {
    b: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  } : {}, {
    c: $data.classify == 2
  }, $data.classify == 2 ? {
    d: common_vendor.f($data.list2, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  } : {}, {
    e: $data.classify == 3
  }, $data.classify == 3 ? {
    f: common_vendor.f($data.list3, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  } : {}, {
    g: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.t(item.text1),
        d: common_vendor.o(($event) => $options.change(item.id))
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
=======
"use strict";const e=require("../../common/vendor.js"),g={data(){return{classify:"",title:"Hello",list1:[{icon:"https://test-37b.pages.dev/index/3.png",text:"日常考核",url:"/pages/check/check"},{icon:"https://test-37b.pages.dev/index/4.png",text:"活动预约",url:"/pages/activatemain/activatemain"},{icon:"https://test-37b.pages.dev/index/5.png",text:"需求登记",url:"/pages/demond/demond"},{icon:"https://test-37b.pages.dev/index/6.png",text:"矫正经历",url:"/pages/experience/experience"}],list2:[{icon:"https://test-37b.pages.dev/index/3.png",text:"社矫查询",url:"/pages/select/select"},{icon:"https://test-37b.pages.dev/index/4.png",text:"通知公告",url:"/pages/notice/notice"},{icon:"https://test-37b.pages.dev/index/5.png",text:"活动管理",url:"/pages/ordermanage/ordermanage"},{icon:"https://test-37b.pages.dev/index/6.png",text:"需求处理",url:"/pages/demond/demondTypeTeam"}],list3:[{icon:"https://test-37b.pages.dev/index/3.png",text:"执法公开",url:"/pages/notice/notice"},{icon:"https://test-37b.pages.dev/index/4.png",text:"服务登记",url:"/pages/volunteerDetail/volunteerDetail"},{icon:"https://test-37b.pages.dev/index/5.png",text:"活动预约",url:"/pages/volunteerList/volunteerList"}],newsList:[{id:"2",icon:"https://test-37b.pages.dev/index/10.png",text:"社区矫正对象报到接受规范",text1:"1236人阅读"},{id:"3",icon:"https://test-37b.pages.dev/index/11.png",text:"社区矫正对象报告规范",text1:"7786人阅读"},{id:"4",icon:"https://test-37b.pages.dev/index/12.png",text:"请假外出审批规范",text1:"5658人阅读"},{id:"5",icon:"https://test-37b.pages.dev/index/13.png",text:"居住、执行地变更审批规范",text1:"5675人阅读"}]}},onLoad(){var n=this;e.index.getStorage({key:"classify",success:function(d){n.classify=d.data}})},methods:{click(n){e.index.navigateTo({url:n})},change(n){e.index.navigateTo({url:"/pages/detail/detail?id="+JSON.stringify(n)})}}};function r(n,d,l,o,s,i){return e.e({a:s.classify==1},s.classify==1?{b:e.f(s.list1,(t,c,p)=>({a:t.icon,b:e.t(t.text),c:e.o(a=>i.click(t.url))}))}:{},{c:s.classify==2},s.classify==2?{d:e.f(s.list2,(t,c,p)=>({a:t.icon,b:e.t(t.text),c:e.o(a=>i.click(t.url))}))}:{},{e:s.classify==3},s.classify==3?{f:e.f(s.list3,(t,c,p)=>({a:t.icon,b:e.t(t.text),c:e.o(a=>i.click(t.url))}))}:{},{g:e.f(s.newsList,(t,c,p)=>({a:t.icon,b:e.t(t.text),c:e.t(t.text1),d:e.o(a=>i.change(t.id))}))})}const x=e._export_sfc(g,[["render",r],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/index/index.vue"]]);wx.createPage(x);
>>>>>>> 9aaf9e77dbd3815e604ac12287520fe7701666db
