"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          title: "号外！号外！职业技能行业登记培训课程火热报名中！",
          detial1: "徐汇区",
          detial2: "6月1日",
          detial3: "剩余20人",
          detial4: "1天前",
          imgpass: "../../static/going (1).png",
          imgsrc: "../../static/jiuye1.jpg",
          url: ""
        },
        {
          title: "号外！号外！职业技能行业登记培训课程火热报名中！",
          detial1: "徐汇区",
          detial2: "6月1日",
          detial3: "剩余20人",
          detial4: "1天前",
          imgpass: "../../static/going (1).png",
          imgsrc: "../../static/jiuye1.jpg",
          url: ""
        },
        {
          title: "好消息！咖啡 日料 插花专项类补贴课程又来了，一定不要错过！",
          detial1: "闵行区",
          detial2: "6月3日",
          detial3: "剩余25人",
          detial4: "3天前",
          imgpass: "../../static/going (1).png",
          imgsrc: "../../static/jiuye2.jpg",
          url: ""
        },
        {
          title: "课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
          detial1: "闵行区",
          detial2: "6月6日",
          detial3: "剩余32人",
          detial4: "6天前",
          imgpass: "../../static/going (2).png",
          imgsrc: "../../static/jiuye1.jpg",
          url: ""
        },
        {
          title: "职业技能行业登记培训课程，火热招生种！",
          detial1: "徐汇区",
          detial2: "6月1日",
          detial3: "剩余20人",
          detial4: "1天前",
          imgpass: "../../static/going (3).png",
          imgsrc: "../../static/jiuye2.jpg",
          url: ""
        }
      ]
    };
  },
  methods: {
    todetial() {
      common_vendor.index.navigateTo({
        url: "../../pages/activatedetail/activatedetail"
      });
    },
    tolist() {
      common_vendor.index.navigateTo({
        url: "../../pages/orderlist/orderlist"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.tolist && $options.tolist(...args)),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.detial1),
        c: common_vendor.t(item.detial2),
        d: common_vendor.t(item.detial3),
        e: common_vendor.t(item.detial4),
        f: item.imgpass,
        g: item.imgsrc
      };
    }),
    c: common_vendor.o(($event) => $options.todetial())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/actOrder/actOrder.vue"]]);
wx.createPage(MiniProgramPage);
