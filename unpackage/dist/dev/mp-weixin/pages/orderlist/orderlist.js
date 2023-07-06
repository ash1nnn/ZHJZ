"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          title: "课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
          detial1: "闵行区",
          detial2: "6月6日",
          detial3: "报名成功！",
          detial4: " ",
          imgpass: "../../static/success.png",
          imgsrc: "../../static/jiuye1.jpg",
          url: ""
        },
        {
          title: "职业技能行业登记培训课程，火热招生种！",
          detial1: "徐汇区",
          detial2: "6月1日",
          detial3: "报名失败！",
          detial4: " ",
          imgpass: "../../static/fail.png",
          imgsrc: "../../static/jiuye2.jpg",
          url: ""
        }
      ],
      tabIndex: "GuanZhu",
      tabBars: [
        {
          name: "关注",
          id: "GuanZhu"
        },
        {
          name: "推荐",
          id: "TuiJian"
        },
        {
          name: "财经",
          id: "caijing"
        },
        {
          name: "体育",
          id: "tiyu"
        },
        {
          name: "娱乐",
          id: "yule"
        }
      ],
      currentTabComponent: "GuanZhu"
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
    },
    tabtap(index) {
      this.$emit("tabtap", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
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
    b: common_vendor.o(($event) => $options.todetial())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/orderlist/orderlist.vue"]]);
wx.createPage(MiniProgramPage);
