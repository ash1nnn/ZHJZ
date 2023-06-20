"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      no: 0
    };
  },
  onLoad() {
  },
  methods: {
    change(index) {
      this.no = 1;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.no == 0
  }, $data.no == 0 ? {
    b: common_vendor.o(($event) => $options.change(0))
  } : {}, {
    c: $data.no == 1
  }, $data.no == 1 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/experience/experience.vue"]]);
wx.createPage(MiniProgramPage);
