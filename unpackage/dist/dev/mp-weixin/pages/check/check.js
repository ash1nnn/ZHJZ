"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list1: [
        {
          icon: "../../static/check/6.png",
          text: "矫正须知",
          url: "/pages/notice/notice"
        },
        {
          icon: "../../static/check/7.png",
          text: "日常点名",
          url: "/pages/rollCall/rollCall"
        },
        {
          icon: "../../static/check/8.png",
          text: "签到签退",
          url: "/pages/sign/sign"
        },
        {
          icon: "../../static/check/9.png",
          text: "审批事项办理",
          url: "/pages/approve/approve"
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.icon,
        c: common_vendor.n("aa" + (index + 1)),
        d: common_vendor.o(($event) => $options.click(item.url), index),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lcz/Documents/GitHub/ZHJZ/pages/check/check.vue"]]);
wx.createPage(MiniProgramPage);
