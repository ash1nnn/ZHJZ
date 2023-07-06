"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabbarIndex: 0,
      handlingType: [
        {
          value: "待审核"
        },
        {
          value: "已审核"
        }
      ],
      list: [
        {
          id: "1",
          title1: "请审批：杨福宝 活动预约",
          title: "活动名称：【闵行区-6月6日】课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
          detial1: "报名人:",
          detial2: "杨福宝",
          detial3: "审核结果:",
          detial4: "",
          detial5: "通过",
          detial6: "未通过",
          imgpass: "../../static/sh (1).png",
          img1: "../../static/sh (2).png",
          imgsrc: "../../static/jiuye1.jpg",
          url: "2"
        },
        {
          id: "1",
          title1: "请审批：胡骁俊 活动预约",
          title: "活动名称：【徐汇区-6月1日】职业技能行业登记培训课程，火热招生种！",
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
      ],
      list1: [
        {
          id: "2",
          title1: "请审批：杨福宝 活动预约",
          title: "活动名称：【闵行区-6月6日】课讯！线下花艺分享冬日浪漫，你的生活需要这样的仪式感！",
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
          id: "3",
          title1: "请审批：胡骁俊 活动预约",
          title: "活动名称：【徐汇区-6月1日】职业技能行业登记培训课程，火热招生种！",
          detial1: "报名人:",
          detial2: "胡骁俊",
          detial3: "审核结果:",
          detial4: "",
          detial5: "通过",
          detial6: "未通过",
          imgpass: "../../static/sh (1).png",
          img1: "../../static/sh (2).png",
          imgsrc: "../../static/jiuye2.jpg",
          url: "1"
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
    },
    showType(tbIndex) {
      this.tabbarIndex = tbIndex;
      if (this.tabbarIndex == 0)
        ;
      if (this.tabbarIndex == 1)
        ;
      console.info(this.tabbarIndex);
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
      return common_vendor.e({
        a: common_vendor.t(item.title1),
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.detial1),
        d: common_vendor.t(item.detial2),
        e: common_vendor.t(item.detial3),
        f: item.id == 1
      }, item.id == 1 ? {
        g: common_vendor.t(item.detial4)
      } : {}, {
        h: item.id == 2
      }, item.id == 2 ? {
        i: common_vendor.t(item.detial5)
      } : {}, {
        j: item.id == 3
      }, item.id == 3 ? {
        k: common_vendor.t(item.detial6)
      } : {}, {
        l: item.url == 1
      }, item.url == 1 ? {
        m: item.imgpass
      } : {}, {
        n: item.url == 2
      }, item.url == 2 ? {
        o: item.img1
      } : {}, {
        p: common_vendor.o(($event) => $options.todetial(item))
      });
    })
  } : {}, {
    d: $data.tabbarIndex == 1
  }, $data.tabbarIndex == 1 ? {
    e: common_vendor.f($data.list1, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title1),
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.detial1),
        d: common_vendor.t(item.detial2),
        e: common_vendor.t(item.detial3),
        f: item.id == 1
      }, item.id == 1 ? {
        g: common_vendor.t(item.detial4)
      } : {}, {
        h: item.id == 2
      }, item.id == 2 ? {
        i: common_vendor.t(item.detial5)
      } : {}, {
        j: item.id == 3
      }, item.id == 3 ? {
        k: common_vendor.t(item.detial6)
      } : {}, {
        l: item.url == 1
      }, item.url == 1 ? {
        m: item.imgpass
      } : {}, {
        n: item.url == 2
      }, item.url == 2 ? {
        o: item.img1
      } : {}, {
        p: common_vendor.o(($event) => $options.todetial(item))
      });
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/ordermanage/ordermanage.vue"]]);
wx.createPage(MiniProgramPage);
