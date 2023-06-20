"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          title1: "请审批：杨福宝 活动预约",
          title: "活动名称：【闵行区-6月6日】课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
          detial1: "报名人:",
          detial2: "杨福宝",
          detial3: "审核结果:",
          detial4: "同意报名",
          imgpass: "../../static/sh (1).png",
          imgsrc: "../../static/jiuye1.jpg",
          url: ""
        },
        {
          title1: "请审批：胡骁俊 活动预约",
          title: "活动名称：【徐汇区-6月1日】职业技能行业登记培训课程，火热招生种！",
          detial1: "报名人:",
          detial2: "胡骁俊",
          detial3: "审核结果:",
          detial4: "不同意报名",
          imgpass: "../../static/sh (2).png",
          imgsrc: "../../static/jiuye2.jpg",
          url: ""
        }
      ]
    };
  },
  methods: {
    todetial() {
      common_vendor.index.showModal({
        title: "活动预约审核",
        content: "是否同意该申请？",
        cancelText: "不同意",
        // 确认按钮的文字自定义
        confirmText: "同意",
        success: function(res) {
          if (res.confirm)
            ;
        }
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
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title1),
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.detial1),
        d: common_vendor.t(item.detial2),
        e: common_vendor.t(item.detial3),
        f: common_vendor.t(item.detial4),
        g: item.imgpass
      };
    }),
    b: common_vendor.o(($event) => $options.todetial())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/ordermanage/ordermanage.vue"]]);
wx.createPage(MiniProgramPage);
