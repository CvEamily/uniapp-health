(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/eatWhat/eatWhat"],{101:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var r=o(t(102));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},102:function(e,n,t){"use strict";t.r(n);var o=t(103),r=t(105);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t(107);var u,i=t(32),c=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);c.options.__file="pages/index/eatWhat/eatWhat.vue",n["default"]=c.exports},103:function(e,n,t){"use strict";t.r(n);var o=t(104);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},104:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return o}));try{o={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,132))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},a=!1,u=[];r._withStripped=!0},105:function(e,n,t){"use strict";t.r(n);var o=t(106),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},106:function(e,n,t){"use strict";(function(e,o){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(49)),u=r(t(51)),i=r(t(52)),c={data:function(){return{img1:"https://ts1.cn.mm.bing.net/th/id/R-C.d4aed49d23066deda3ace1b0956dc13b?rik=czEqQdmhB8tnZg&riu=http%3a%2f%2f16597216.s21i.faiusr.com%2f2%2fABUI4IH1BxACGAAg5qyP_QUouNziogUwnAw42BE.jpg&ehk=Dgu1zqRBxHXxGt9bqvFZeYhth9iD2dLK10aIgRqYjWU%3d&risl=1&pid=ImgRaw&r=0",token:""}},onLoad:function(){this.getToken()},methods:{getToken:function(){console.log("1111"),this.token=e.getStorageSync("token")},getEat:function(e){var n=this;return(0,u.default)(a.default.mark((function e(){var t,r,u;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={setMyHeaderxxx:{token:n.token}},o.showLoading({title:"Loading"}),e.next=4,o.$http.get(i.default.host+"/dishes/random",t);case 4:r=e.sent,u=r.data,200==u.code?(console.log(u.data),o.showToast({title:"抽取成功",duration:2e3,icon:"none"})):(console.log(u.code),o.showToast({title:"抽取失败",duration:2e3,icon:"none"}));case 7:case"end":return e.stop()}}),e)})))()},open:function(){this.$refs.popup.open("top")}}};n.default=c}).call(this,t(1)["default"],t(2)["default"])},107:function(e,n,t){"use strict";t.r(n);var o=t(108),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},108:function(e,n,t){}},[[101,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/eatWhat/eatWhat.js.map