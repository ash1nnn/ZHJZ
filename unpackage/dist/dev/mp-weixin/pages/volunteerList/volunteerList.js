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
          text: "矫正中心开放日预约"
        },
        {
          icon: "../../static/4.png",
          text: "志愿服务预约"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/volunteerList/volunteerList.vue"]]);
wx.createPage(MiniProgramPage);
=======
"use strict";const e=require("../../common/vendor.js"),s={data(){return{newsList:[{icon:"../../static/check/10.png",text:"矫正中心开放日预约"},{icon:"../../static/check/11.png",text:"志愿服务预约"}]}},onLoad(){},methods:{}};function r(i,a,u,_,n,p){return{a:e.f(n.newsList,(t,c,d)=>({a:e.t(t.text),b:t.icon,c:e.n("aa"+(c+1))}))}}const o=e._export_sfc(s,[["render",r],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/volunteerList/volunteerList.vue"]]);wx.createPage(o);
>>>>>>> 0c01d05ceb68768966ef3165d30ecaf7f909e1a1
