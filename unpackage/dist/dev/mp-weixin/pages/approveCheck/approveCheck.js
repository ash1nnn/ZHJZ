"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      newsList: [
        {
          icon: "../../static/check/10.png",
          text: "请假",
          url: "/pages/leave/leave"
        },
        {
          icon: "../../static/check/11.png",
          text: "居住地变更",
          url: "/pages/addressChange/addressChange"
        },
        {
          icon: "../../static/check/12.png",
          text: "执行地变更",
          url: "/pages/locationChange/locationChange"
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
    a: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.icon,
        c: common_vendor.n("aa" + (index + 1)),
        d: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/approveCheck/approveCheck.vue"]]);
wx.createPage(MiniProgramPage);
