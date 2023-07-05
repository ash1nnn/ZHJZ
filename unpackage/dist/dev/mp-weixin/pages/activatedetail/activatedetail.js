<<<<<<< HEAD
"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    orderok() {
      const ook = common_vendor.index.getStorage({
        key: "orderok"
      });
      if (ook) {
        common_vendor.index.showToast({
          title: "已报名！",
          icon: "success",
          duration: 490
        });
      } else {
        common_vendor.index.setStorage({
          data: true,
          key: "orderok"
        });
        common_vendor.index.showToast({
          title: "报名成功！",
          //将值设置为 success 或者直接不用写icon这个参数
          icon: "success",
          //显示持续时间为 2秒
          duration: 490
        });
      }
      setTimeout(function() {
        common_vendor.index.navigateTo({
          url: "../../pages/orderlist/orderlist"
        });
      }, 500);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.orderok && $options.orderok(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/activatedetail/activatedetail.vue"]]);
wx.createPage(MiniProgramPage);
=======
"use strict";const e=require("../../common/vendor.js"),o={data(){return{}},methods:{orderok(){e.index.showToast({title:"报名成功！",icon:"success",duration:490}),setTimeout(function(){e.index.navigateTo({url:"../../pages/orderlist/orderlist"})},500)}}};function a(c,i,n,d,u,t){return{a:e.o((...r)=>t.orderok&&t.orderok(...r))}}const s=e._export_sfc(o,[["render",a],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/activatedetail/activatedetail.vue"]]);wx.createPage(s);
>>>>>>> 9aaf9e77dbd3815e604ac12287520fe7701666db
