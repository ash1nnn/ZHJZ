"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/me/me.js";
  "./pages/activatemain/activatemain.js";
  "./pages/actOrder/actOrder.js";
  "./pages/activatedetail/activatedetail.js";
  "./pages/notice/notice.js";
  "./pages/detail/detail.js";
  "./pages/experience/experience.js";
  "./pages/leave/leave.js";
  "./pages/addressChange/addressChange.js";
  "./pages/locationChange/locationChange.js";
  "./pages/check/check.js";
  "./pages/approve/approve.js";
  "./pages/approveQuery/approveQuery.js";
  "./pages/rollCall/rollCall.js";
  "./pages/sign/sign.js";
  "./pages/demond/demond.js";
  "./pages/demond/demondApply.js";
  "./pages/demond/demondType.js";
  "./pages/demond/demondAnswer.js";
  "./pages/demond/weChat.js";
  "./pages/demond/demondTypeTeam.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/lcz/Desktop/ZHJZ-main/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
