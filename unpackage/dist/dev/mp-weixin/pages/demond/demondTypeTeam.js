"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      newsList: [
        {
          icon: "../../static/demondType/bk.png",
          url: "/pages/demond/demondAnswer"
        },
        {
          icon: "../../static/demondType/xl.png",
          url: "/pages/demond/demondAnswer"
        },
        {
          icon: "../../static/demondType/fl.png",
          url: "/pages/demond/demondAnswer"
        },
        {
          icon: "../../static/demondType/jy.png",
          url: "/pages/demond/demondAnswer"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    click(item) {
      common_vendor.index.navigateTo({
        url: item
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lcz/Desktop/ZHJZ-main/pages/demond/demondTypeTeam.vue"]]);
wx.createPage(MiniProgramPage);
