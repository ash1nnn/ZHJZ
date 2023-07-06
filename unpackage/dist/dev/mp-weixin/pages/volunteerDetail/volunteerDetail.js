"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      formData: {
        name: "",
        sex: "",
        date: "",
        date1: ""
      },
      value: "",
      range: [
        { value: 0, text: "帮困救助" },
        { value: 1, text: "法律咨询" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "心理辅导" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
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
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_data_select + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.name = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "请输入姓名 ",
      modelValue: $data.formData.name
    }),
    c: common_vendor.p({
      label: "姓名",
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.sex = $event),
    e: common_vendor.p({
      type: "text",
      placeholder: "请输入性别",
      modelValue: $data.formData.sex
    }),
    f: common_vendor.p({
      label: "性别",
      name: "sex"
    }),
    g: common_vendor.o(($event) => $data.formData.date = $event),
    h: common_vendor.p({
      type: "date",
      modelValue: $data.formData.date
    }),
    i: common_vendor.p({
      label: "出生日期",
      name: "date"
    }),
    j: common_vendor.o(($event) => $data.value = $event),
    k: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.value
    }),
    l: common_vendor.p({
      label: "专业服务",
      name: "detail"
    }),
    m: common_vendor.o(($event) => $data.formData.date1 = $event),
    n: common_vendor.p({
      type: "date",
      modelValue: $data.formData.date1
    }),
    o: common_vendor.p({
      label: "志愿时间",
      name: "date1"
    }),
    p: common_vendor.p({
      modelValue: $data.formData,
      ["label-position"]: "top",
      ["label-width"]: "1000rpx"
    }),
    q: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ZHJZ-main/pages/volunteerDetail/volunteerDetail.vue"]]);
wx.createPage(MiniProgramPage);
