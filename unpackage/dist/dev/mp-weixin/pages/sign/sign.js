<<<<<<< HEAD
"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      classify: 1,
      title: "Hello",
      list1: [
        {
          icon: "../../static/3.png",
          text: "个别教育"
        },
        {
          icon: "../../static/4.png",
          text: "集中教育"
        },
        {
          icon: "../../static/5.png",
          text: "公益活动"
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
    a: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.click(item.url))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/sign/sign.vue"]]);
wx.createPage(MiniProgramPage);
=======
"use strict";const t=require("../../common/vendor.js"),s={data(){return{newsList:[{icon:"../../static/check/10.png",text:"个别教育"},{icon:"../../static/check/11.png",text:"集中教育"},{icon:"../../static/check/12.png",text:"公益活动"}]}},onLoad(){},methods:{}};function i(r,a,_,u,c,g){return{a:t.f(c.newsList,(e,n,p)=>({a:t.t(e.text),b:e.icon,c:t.n("aa"+(n+1))}))}}const o=t._export_sfc(s,[["render",i],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/sign/sign.vue"]]);wx.createPage(o);
>>>>>>> 0c01d05ceb68768966ef3165d30ecaf7f909e1a1
