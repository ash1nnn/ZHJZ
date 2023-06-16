"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: ""
    };
  },
  onLoad(options) {
    this.id = JSON.parse(options.id);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.id == 1
  }, $data.id == 1 ? {} : {}, {
    b: $data.id == 2
  }, $data.id == 2 ? {} : {}, {
    c: $data.id == 3
  }, $data.id == 3 ? {} : {}, {
    d: $data.id == 4
  }, $data.id == 4 ? {} : {}, {
    e: $data.id == 5
  }, $data.id == 5 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
