"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // currentImg: "",
      textTitle1: "Hi，很高兴为您服务",
      textTitle2: "有什么问题需要为您解答吗？",
      list: [{
        text1: "怎样可以快速调整情绪？",
        text2: "做自己喜欢、感兴趣的事情,转移注意力，让自己不再过度的沉浸在负面情绪中，全身心的去做自己喜欢的事情,可以暂时忘却使你感到压抑的负面情绪,最大程度的得到愉悦感，满足感。减少压抑感。",
        time: "2023-06-01"
      }],
      list1: [{
        text1: "应对突发事件发生的方法？",
        text2: "遇到突发事件不要围观,应立即离开;如正处在突发事件现场,且无法逃避时,应利用地形、隐蔽物遮掩、躲藏;如遇恐怖事件实施者抛洒不明气体或液体，应迅速躲避,且用毛巾、衣物等捂住口鼻。",
        time: "2023-06-01"
      }]
    };
  },
  methods: {
    demondApply(url) {
      common_vendor.index.navigateTo({
        url: "../demond/demondType"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.textTitle1),
    b: common_vendor.t($data.textTitle2),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text1),
        b: common_vendor.t(item.text2)
      };
    }),
    d: common_vendor.o(($event) => $options.demondApply()),
    e: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text1),
        b: common_vendor.t(item.text2)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1ef6f19d"], ["__file", "C:/Users/lcz/Desktop/ZHJZ-main/pages/demond/demond.vue"]]);
wx.createPage(MiniProgramPage);
