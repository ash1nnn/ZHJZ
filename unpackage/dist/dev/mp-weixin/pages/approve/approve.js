"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      newsList: [
        {
          icon: "../../static/check/6.png",
          url: "/pages/leave/leave"
        },
        {
          icon: "../../static/check/7.png",
          url: "/pages/addressChange/addressChange"
        },
        {
          icon: "../../static/check/8.png",
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
        a: item.icon,
        b: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lcz/Documents/HBuilderProjects/111/pages/approve/approve.vue"]]);
wx.createPage(MiniProgramPage);
