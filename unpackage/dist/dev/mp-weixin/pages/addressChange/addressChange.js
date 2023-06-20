"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      formData: {
        place: "",
        detail: "",
        reason: "",
        date: ""
      }
    };
  },
  onLoad() {
  },
  methods: {
    change(index) {
      this.currentIndex = index;
    },
    submit() {
      common_vendor.index.showToast({
        title: "提交成功！",
        icon: "success",
        success: () => {
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 500);
        }
      });
    },
    bigChange() {
      common_vendor.index.navigateTo({
        url: "/pages/approveQuery/approveQuery"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.currentIndex === 0 ? "nav-actived" : ""),
    b: common_vendor.o(($event) => $options.change(0)),
    c: common_vendor.n($data.currentIndex === 1 ? "nav-actived" : ""),
    d: common_vendor.o(($event) => $options.change(1)),
    e: common_vendor.o((...args) => $options.bigChange && $options.bigChange(...args)),
    f: common_vendor.o(($event) => $data.formData.place = $event),
    g: common_vendor.p({
      type: "text",
      placeholder: "请输入外出目的地（乡镇、街道）",
      modelValue: $data.formData.place
    }),
    h: common_vendor.p({
      label: "迁入地（乡镇、街道）",
      name: "place"
    }),
    i: common_vendor.o(($event) => $data.formData.detail = $event),
    j: common_vendor.p({
      type: "text",
      placeholder: "请输入外出目的地明细",
      modelValue: $data.formData.detail
    }),
    k: common_vendor.p({
      label: "迁入地明细",
      name: "detail"
    }),
    l: common_vendor.o(($event) => $data.formData.reason = $event),
    m: common_vendor.p({
      type: "text",
      placeholder: "请输入外出理由",
      modelValue: $data.formData.reason
    }),
    n: common_vendor.p({
      label: "变更理由",
      name: "reason"
    }),
    o: common_vendor.o(($event) => $data.formData.date = $event),
    p: common_vendor.p({
      type: "date",
      modelValue: $data.formData.date
    }),
    q: common_vendor.p({
      label: "申请时间",
      name: "date"
    }),
    r: common_vendor.p({
      modelValue: $data.formData,
      ["label-position"]: "top",
      ["label-width"]: "1000rpx"
    }),
    s: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    t: $data.currentIndex
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/addressChange/addressChange.vue"]]);
wx.createPage(MiniProgramPage);
