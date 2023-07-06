"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          title: "审批事项：外出请假",
          detial1: "时间：2023.5.20-2023.5.25",
          detial2: "外出目的地：江苏省太仓市",
          detial3: "审核情况：通过！",
          imgpass: "../../static/success.png"
        },
        {
          title: "审批事项：居住地变更",
          detial1: "时间：2023.6.24",
          detial2: "外出目的地：上海市徐家汇街道",
          detial3: "审核情况：不通过！",
          imgpass: "../../static/fail.png"
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.detial1),
        c: common_vendor.t(item.detial2),
        d: common_vendor.t(item.detial3),
        e: item.imgpass
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/approveQuery/approveQuery.vue"]]);
wx.createPage(MiniProgramPage);
