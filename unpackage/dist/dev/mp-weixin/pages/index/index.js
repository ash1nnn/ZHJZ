"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classify: 1,
      title: "Hello",
      list1: [
        {
          icon: "../../static/index/3.png",
          text: "日常考核",
          url: "/pages/check/check"
        },
        {
          icon: "../../static/index/4.png",
          text: "活动预约"
        },
        {
          icon: "../../static/index/5.png",
          text: "需求登记"
        },
        {
          icon: "../../static/index/6.png",
          text: "矫正经历",
          url: "/pages/experience/experience"
        }
      ],
      // list2: [{
      // 		icon: "../../static/5.png",
      // 		text: "活动预约",
      // 		url: "../../static/h.png"
      // 	},
      // 	{
      // 		icon: "../../static/6.png",
      // 		text: "事项审批",
      // 		url: "../../static/h.png"
      // 	},
      // 	{
      // 		icon: "../../static/7.png",
      // 		text: "需求登记",
      // 		url: "../../static/h.png"
      // 	},
      // 	{
      // 		icon: "../../static/8.png",
      // 		text: "经历查询",
      // 		url: "../../static/h.png"
      // 	}
      // ],
      list3: [
        {
          icon: "../../static/index/3.png",
          text: "社矫查询"
        },
        {
          icon: "../../static/index/4.png",
          text: "通知公告"
        },
        {
          icon: "../../static/index/5.png",
          text: "活动管理"
        },
        {
          icon: "../../static/index/6.png",
          text: "需求处理"
        }
      ],
      list4: [
        {
          icon: "../../static/index/3.png",
          text: "执法公开"
        },
        {
          icon: "../../static/index/4.png",
          text: "服务登记"
        },
        {
          icon: "../../static/index/5.png",
          text: "活动预约"
        }
        // {
        // 	icon: "../../static/8.png",
        // 	text: "需求处理",
        // 	url: "../../static/h.png"
        // }
      ],
      newsList: [
        {
          id: "2",
          icon: "../../static/index/10.png",
          text: "社区矫正对象报到接受规范",
          text1: "1236人阅读"
        },
        {
          id: "3",
          icon: "../../static/index/11.png",
          text: "社区矫正对象报告规范",
          text1: "7786人阅读"
        },
        {
          id: "4",
          icon: "../../static/index/12.png",
          text: "请假外出审批规范",
          text1: "5658人阅读"
        },
        {
          id: "5",
          icon: "../../static/index/13.png",
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
    d: common_vendor.f($data.list3, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text)
      };
    })
  } : {}, {
    e: $data.classify == 3
  }, $data.classify == 3 ? {
    f: common_vendor.f($data.list4, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text)
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lcz/Documents/GitHub/ZHJZ/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
