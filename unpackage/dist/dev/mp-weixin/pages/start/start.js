<<<<<<< HEAD
"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: "",
      range: [
        { value: 1, text: "矫正对象" },
        { value: 2, text: "矫正小组成员" },
        { value: 3, text: "志愿者" }
      ]
    };
  },
  methods: {
    change(e) {
      common_vendor.index.setStorage({
        key: "classify",
        data: e
      });
    },
    goto(value) {
      common_vendor.index.switchTab({
        url: "../../pages/index/index"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  _easycom_uni_data_select2();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  _easycom_uni_data_select();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      localdata: $data.range,
      clear: false,
      modelValue: $data.value
    }),
    d: common_vendor.o(($event) => $options.goto($data.value))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/start/start.vue"]]);
wx.createPage(MiniProgramPage);
=======
"use strict";const e=require("../../common/vendor.js"),c={data(){return{value:"",range:[{value:1,text:"矫正对象"},{value:2,text:"矫正小组成员"},{value:3,text:"志愿者"}]}},methods:{change(t){e.index.setStorage({key:"classify",data:t})},goto(){e.index.switchTab({url:"../../pages/index/index"})}}};Array||e.resolveComponent("uni-data-select")();const o=()=>"../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";Math||o();function r(t,l,_,i,a,s){return{a:e.o(s.change),b:e.o(n=>a.value=n),c:e.p({localdata:a.range,clear:!1,modelValue:a.value}),d:e.o(n=>s.goto())}}const u=e._export_sfc(c,[["render",r],["__file","C:/Users/lcz/Documents/GitHub/ZHJZ/pages/start/start.vue"]]);wx.createPage(u);
>>>>>>> 0c01d05ceb68768966ef3165d30ecaf7f909e1a1
