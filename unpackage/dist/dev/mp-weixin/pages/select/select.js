"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list1: [
        {
          id: "1",
          text: "杨福宝"
        },
        {
          id: "2",
          text: "蒋振良"
        },
        {
          id: "3",
          text: "胡晓俊"
        },
        {
          id: "4",
          text: "姚惠琴"
        },
        {
          id: "5",
          text: "宋百旺"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    change(id) {
      common_vendor.index.navigateTo({
        url: "/pages/member/member?id=" + JSON.stringify(id)
        //将传递的对象转化成字符串
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: common_vendor.o(($event) => $options.change(item.id))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/select/select.vue"]]);
wx.createPage(MiniProgramPage);
