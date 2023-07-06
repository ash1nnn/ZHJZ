"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: "",
      list1: [
        {
          idd: "1",
          name: "杨福宝\n",
          sex: "男\n",
          age: "35\n",
          tel: "18566421114\n",
          place: "上海市徐汇区\n",
          level: "一级矫正对象\n"
        },
        {
          idd: "2",
          name: "蒋振良\n",
          sex: "男\n",
          age: "35\n",
          tel: "18566421114\n",
          place: "上海市徐汇区\n",
          level: "一级矫正对象\n"
        },
        {
          idd: "3",
          name: "胡晓俊\n",
          sex: "男\n",
          age: "35\n",
          tel: "18566421114\n",
          place: "上海市徐汇区\n",
          level: "一级矫正对象\n"
        },
        {
          idd: "4",
          name: "姚惠琴\n",
          sex: "女\n",
          age: "35\n",
          tel: "18566421114\n",
          place: "上海市徐汇区\n",
          level: "一级矫正对象\n"
        },
        {
          idd: "5",
          name: "宋百旺\n",
          sex: "男\n",
          age: "35\n",
          tel: "18566421114\n",
          place: "上海市徐汇区\n",
          level: "一级矫正对象\n"
        }
      ]
    };
  },
  onLoad(options) {
    this.id = JSON.parse(options.id);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list1, (item, index, i0) => {
      return common_vendor.e({
        a: $data.id === item.idd
      }, $data.id === item.idd ? {
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.sex),
        d: common_vendor.t(item.age),
        e: common_vendor.t(item.tel),
        f: common_vendor.t(item.place),
        g: common_vendor.t(item.level)
      } : {});
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/member/member.vue"]]);
wx.createPage(MiniProgramPage);
