"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toedu() {
      common_vendor.index.navigateTo({
        url: "../../pages/actOrder/actOrder"
      });
    },
    towork() {
      common_vendor.index.navigateTo({
        url: "../../pages/actOrder/actOrder"
      });
    },
    todisplay() {
      common_vendor.index.navigateTo({
        url: "../../pages/actOrder/actOrder"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toedu && $options.toedu(...args)),
    b: common_vendor.o((...args) => $options.towork && $options.towork(...args)),
    c: common_vendor.o((...args) => $options.todisplay && $options.todisplay(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lcz/Desktop/ZHJZ-main/pages/activatemain/activatemain.vue"]]);
wx.createPage(MiniProgramPage);
