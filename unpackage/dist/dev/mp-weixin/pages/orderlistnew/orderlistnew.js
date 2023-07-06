"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabbarIndex: 0,
      handlingType: [
        {
          value: "报名成功"
        },
        {
          value: "报名失败"
        }
      ],
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
          detial3: "报名成功！",
          detial4: " ",
          imgpass: "../../static/success.png",
          imgsrc: "../../static/jiuye2.jpg",
          url: ""
        }
      ],
      list1: [
        {
          title: "课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
          detial1: "闵行区",
          detial2: "6月6日",
          detial3: "报名失败！",
          detial4: " ",
          imgpass: "../../static/fail.png",
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
      ]
    };
  },
  methods: {
    showType(tbIndex) {
      this.tabbarIndex = tbIndex;
      if (this.tabbarIndex == 0)
        ;
      if (this.tabbarIndex == 1)
        ;
      console.info(this.tabbarIndex);
    },
    todetial() {
      common_vendor.index.navigateTo({
        url: "../../pages/activatedetail/activatedetail"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.handlingType, (item, tbIndex, i0) => {
      return {
        a: common_vendor.t(item.value),
        b: common_vendor.n(tbIndex == $data.tabbarIndex ? "active" : ""),
        c: common_vendor.o(($event) => $options.showType(tbIndex))
      };
    }),
    b: $data.tabbarIndex == 0
  }, $data.tabbarIndex == 0 ? {
    c: common_vendor.f($data.list, (item, index, i0) => {
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
    d: common_vendor.o(($event) => $options.todetial())
  } : {}, {
    e: $data.tabbarIndex == 1
  }, $data.tabbarIndex == 1 ? {
    f: common_vendor.f($data.list1, (item, index, i0) => {
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
    g: common_vendor.o(($event) => $options.todetial())
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/orderlistnew/orderlistnew.vue"]]);
wx.createPage(MiniProgramPage);
