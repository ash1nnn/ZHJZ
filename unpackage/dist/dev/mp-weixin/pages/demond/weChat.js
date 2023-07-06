"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //滚动距离
      scrollTop: 0,
      userId: "",
      //发送的消息
      chatMsg: "",
      messageBoard: "您好，有什么需求请留言",
      msgList: [
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "你好呀我想问你一件事",
          userId: 0
        }
      ]
    };
  },
  computed: {
    windowHeight() {
      return this.rpxTopx(common_vendor.index.getSystemInfoSync().windowHeight);
    }
  },
  methods: {
    // px转换成rpx
    rpxTopx(px) {
      let deviceWidth = common_vendor.wx$1.getSystemInfoSync().windowWidth;
      let rpx = 750 / deviceWidth * Number(px);
      return Math.floor(rpx);
    },
    // 发送消息
    handleSend() {
      if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
        let obj = {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: this.chatMsg,
          userId: 0
        };
        this.msgList.push(obj);
        this.chatMsg = "";
      } else {
        this.$modal.showToast("不能发送空白消息");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.messageBoard),
    b: common_vendor.f($data.msgList, (item, index, i0) => {
      return common_vendor.e({
        a: item.userContent != ""
      }, item.userContent != "" ? {
        b: common_vendor.t(item.userContent)
      } : {}, {
        c: item.botContent != ""
      }, item.botContent != "" ? {
        d: common_vendor.t(item.botContent)
      } : {}, {
        e: index
      });
    }),
    c: `${$options.windowHeight}rpx`,
    d: $data.scrollTop,
    e: $data.chatMsg,
    f: common_vendor.o(($event) => $data.chatMsg = $event.detail.value),
    g: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f215478"], ["__file", "D:/ZHJZ-main/pages/demond/weChat.vue"]]);
wx.createPage(MiniProgramPage);
