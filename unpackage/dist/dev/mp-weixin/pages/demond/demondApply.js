"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      textTitle1: "Hi，很高兴为您服务",
      textTitle2: "请登记您的需求",
      content: "",
      selectDemond: "",
      demonds: ["心理需求", "法律援助", "生活需求", "其他"],
      list: [{
        text1: "怎样可以快速调整情绪？",
        text2: "做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
        time: "2023-06-01"
      }, {
        // text1:"怎样可以快速调整情绪？",
        // text2:"做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
        // time:"2023-06-01"
      }]
    };
  },
  methods: {
    goto(url) {
      common_vendor.index.navigateTo({
        url: "../demond/weChat"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.textTitle1),
    b: common_vendor.t($data.textTitle2),
    c: $data.content,
    d: common_vendor.o(($event) => $data.content = $event.detail.value),
    e: common_vendor.o(($event) => $options.goto())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-01f78ae2"], ["__file", "C:/Users/lcz/Desktop/ZHJZ-main/pages/demond/demondApply.vue"]]);
wx.createPage(MiniProgramPage);
