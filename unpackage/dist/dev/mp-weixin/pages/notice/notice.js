"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imgList: [
        {
          id: "1",
          title: "中华人民共和国社区矫正法",
          text: "7786人阅读"
        },
        {
          id: "2",
          title: "矫正对象报到接收规范",
          text: "1236人阅读"
        },
        {
          id: "3",
          title: "社区矫正对象报告规范",
          text: "4396人阅读"
        },
        {
          id: "4",
          title: "请假外出审批规范",
          text: "6547人阅读"
        },
        {
          id: "5",
          url: "../../static/notice/3.png",
          title: "居住、执行地变更审批规范",
          text: "1687人阅读"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    change(id) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?id=" + JSON.stringify(id)
        //将传递的对象转化成字符串
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.imgList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.change(item.id))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lcz/Desktop/ZHJZ-main/pages/notice/notice.vue"]]);
wx.createPage(MiniProgramPage);
