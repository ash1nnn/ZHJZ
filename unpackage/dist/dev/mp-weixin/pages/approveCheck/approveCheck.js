"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          id: "2",
          title1: "请审批：请假",
          title: "地点：江苏省太仓市",
          title2: " 时间：2023.6.22-2023.6.24",
          detial1: "报名人:",
          detial2: "杨福宝",
          detial3: "审核结果:",
          detial4: "",
          detial5: "通过",
          detial6: "未通过",
          imgpass: "../../static/sh (1).png",
          img1: "../../static/sh (2).png",
          imgsrc: "../../static/jiuye1.jpg",
          url: "1"
        },
        {
          id: "1",
          title1: "请审批：居住地变更",
          title: "地点：上海市徐家汇街道",
          title2: " 时间：2023.6.24",
          detial1: "报名人:",
          detial2: "胡骁俊",
          detial3: "审核结果:",
          detial4: "",
          detial5: "通过",
          detial6: "未通过",
          imgpass: "../../static/sh (1).png",
          img1: "../../static/sh (2).png",
          imgsrc: "../../static/jiuye2.jpg",
          url: "2"
        }
      ]
    };
  },
  methods: {
    todetial(item) {
      if (item.url == 2) {
        common_vendor.index.showModal({
          title: "活动预约审核",
          content: "是否同意该申请？",
          cancelText: "不同意",
          // 确认按钮的文字自定义
          confirmText: "同意",
          success: function(res) {
            if (res.confirm) {
              item.url = 1;
              item.id = 2;
            } else {
              item.url = 1;
              item.id = 3;
            }
          }
        });
      }
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
      return common_vendor.e({
        a: common_vendor.t(item.title1),
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.title2),
        d: common_vendor.t(item.detial1),
        e: common_vendor.t(item.detial2),
        f: common_vendor.t(item.detial3),
        g: item.id == 1
      }, item.id == 1 ? {
        h: common_vendor.t(item.detial4)
      } : {}, {
        i: item.id == 2
      }, item.id == 2 ? {
        j: common_vendor.t(item.detial5)
      } : {}, {
        k: item.id == 3
      }, item.id == 3 ? {
        l: common_vendor.t(item.detial6)
      } : {}, {
        m: item.url == 1
      }, item.url == 1 ? {
        n: item.imgpass
      } : {}, {
        o: item.url == 2
      }, item.url == 2 ? {
        p: item.img1
      } : {}, {
        q: common_vendor.o(($event) => $options.todetial(item))
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/approveCheck/approveCheck.vue"]]);
wx.createPage(MiniProgramPage);
