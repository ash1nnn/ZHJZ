"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classify: "",
      list1: [
        {
          icon: "../../static/me/7.jpg",
          text: "沪智矫",
          appid: "wxd9c723d098992660",
          url: "/pages/flash/index"
        },
        {
          icon: "../../static/me/8.jpg",
          text: "慧矫正",
          appid: "wx14c2b0d4a80a43d0",
          url: "/pages/home/index"
        }
      ]
    };
  },
  onLoad() {
    var self = this;
    common_vendor.index.getStorage({
      key: "classify",
      success: function(res) {
        self.classify = res.data;
      }
    });
  },
  methods: {
    click(item) {
      common_vendor.index.navigateToMiniProgram({
        appId: item.appid,
        path: item.url
        // extraData: {
        // 			// 'type': 'out'
        // 		},
      });
    },
    bigChange() {
      common_vendor.index.navigateTo({
        url: "/pages/approveQuery/approveQuery"
      });
    },
    change() {
      common_vendor.index.navigateTo({
        url: "/pages/approveCheck/approveCheck"
      });
    },
    change1() {
      common_vendor.index.navigateTo({
        url: "/pages/ordermanage/ordermanage"
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
  return common_vendor.e({
    a: $data.classify == 1
  }, $data.classify == 1 ? {} : {}, {
    b: $data.classify == 2
  }, $data.classify == 2 ? {} : {}, {
    c: $data.classify == 3
  }, $data.classify == 3 ? {} : {}, {
    d: $data.classify == 1
  }, $data.classify == 1 ? {} : {}, {
    e: $data.classify == 1
  }, $data.classify == 1 ? {} : {}, {
    f: $data.classify == 1
  }, $data.classify == 1 ? {} : {}, {
    g: $data.classify == 1
  }, $data.classify == 1 ? {
    h: common_vendor.o((...args) => $options.tolist && $options.tolist(...args))
  } : {}, {
    i: $data.classify == 1
  }, $data.classify == 1 ? {
    j: common_vendor.o((...args) => $options.bigChange && $options.bigChange(...args))
  } : {}, {
    k: $data.classify == 2
  }, $data.classify == 2 ? {
    l: common_vendor.o((...args) => $options.change1 && $options.change1(...args))
  } : {}, {
    m: $data.classify == 2
  }, $data.classify == 2 ? {
    n: common_vendor.o((...args) => $options.change && $options.change(...args))
  } : {}, {
    o: $data.classify == 1
  }, $data.classify == 1 ? {
    p: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.click(item))
      };
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
