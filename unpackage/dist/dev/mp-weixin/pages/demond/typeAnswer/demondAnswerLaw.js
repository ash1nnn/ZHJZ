"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //滚动距离
      scrollTop: 0,
      userId: "",
      //发送的消息
      chatMsg: "",
      msgList: [
        {
          botContent: "你好呀我想问你一件事？",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        },
        {
          botContent: "刑法对于盗窃的量刑标准是什么？",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "盗窃罪量刑的标准是：\n1、犯此罪，数额较大的，处三年以下有期徒刑、拘役或者管制，并处或者单处罚金；\n2、数额巨大或者有其他严重情节的，处三年以上十年以下有期徒刑，并处罚金；\n3、数额特别巨大或者有其他特别严重情节的，处十年以上有期徒刑或者无期徒刑，并处罚金或者没收财产。",
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
    a: common_vendor.f($data.msgList, (item, index, i0) => {
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
    b: `${$options.windowHeight}rpx`,
    c: $data.scrollTop,
    d: $data.chatMsg,
    e: common_vendor.o(($event) => $data.chatMsg = $event.detail.value),
    f: common_vendor.o((...args) => $options.handleSend && $options.handleSend(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c54be96"], ["__file", "D:/ZHJZ-main/pages/demond/typeAnswer/demondAnswerLaw.vue"]]);
wx.createPage(MiniProgramPage);
