(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{77:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var r=o(t(78));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},78:function(e,n,t){"use strict";t.r(n);var o=t(79),r=t(81);for(var s in r)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(s);t(83);var a,c=t(32),i=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);i.options.__file="pages/login/login.vue",n["default"]=i.exports},79:function(e,n,t){"use strict";t.r(n);var o=t(80);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},80:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return s})),t.d(n,"components",(function(){return o}));try{o={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,139))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},s=!1,a=[];r._withStripped=!0},81:function(e,n,t){"use strict";t.r(n);var o=t(82),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=r.a},82:function(e,n,t){"use strict";(function(e,o){var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=r(t(49)),a=r(t(51)),c=r(t(52)),i={data:function(){return{token:"",url:c.default.host+"/user/login",user_info:[],username:"",socketTask2:null,info:[]}},onLoad:function(){},methods:{closeSocket:function(){var n=this;e.closeSocket({success:function(e){n.socketOpen=!1,console.log("关闭成功",e)},fail:function(e){console.log("关闭失败",e)}})},connectSocketInit:function(){var n=this;this.socketTask2=e.connectSocket({url:c.default.WebSocket+"/websocket2/".concat(this.username),success:function(){console.log("this.socketTask = uni.connectSocket success")}}),console.log(this.socketTask2),this.socketTask2.onOpen((function(e){console.log("WebSocket连接正常打开中...！"),n.socketOpen=!0,n.socketTask2.send({data:"uni-app发送一条消息",success:function(){return(0,a.default)(s.default.mark((function e(){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("消息发送成功");case 1:case"end":return e.stop()}}),e)})))()}})})),this.socketTask2.onMessage((function(e){n.info=JSON.parse(e.data),o.setStorageSync("allUser",n.info.allUser),o.setStorageSync("onlineUsers",n.info.onlineUsers),o.setStorageSync("unreadsum",n.info.unreadsum)})),this.socketTask2.onClose((function(){console.log("已经被关闭了")}))},gotoFace:function(){e.navigateTo({url:"./faceLogin/faceLogin"})},getToken:function(){this.token=o.getStorageSync("token")},setUser:function(){o.setStorageSync("user_info",this.user_info)},allinformation:function(n){var t=this;return(0,a.default)(s.default.mark((function n(){var o,r,a;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o={setMyHeaderxxx:{token:t.token}},e.showLoading({title:"Loading"}),n.next=4,e.$http.get(c.default.host+"/user/allinformation",o);case 4:if(r=n.sent,a=r.data,1!=a.code){n.next=12;break}return t.user_info=a.data,t.setUser(),n.abrupt("return");case 12:console.log(a.code),e.showToast({title:"加载失败",duration:2e3,icon:"none"});case 14:case"end":return n.stop()}}),n)})))()},formSubmit:function(n){var t=this;return(0,a.default)(s.default.mark((function r(){var a,c,i;return s.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={username:n.detail.value.username,password:n.detail.value.password,setMyHeaderxxx:{"content-type":"application/x-www-form-urlencoded",accept:"application/json"},unToken:!0},e.showLoading({title:"登录中"}),r.next=4,e.$http.post(t.url,a);case 4:if(c=r.sent,i=c.data,"200"!=i.code){r.next=18;break}return o.setStorageSync("token",i.data),o.setStorageSync("username","小明"),t.getToken(),r.next=12,t.allinformation();case 12:return r.next=14,t.connectSocketInit();case 14:return e.switchTab({url:"/pages/index/index"}),r.abrupt("return",e.showToast({title:"成功",duration:2e3,icon:"none"}));case 18:e.showToast({title:"失败",duration:2e3,icon:"none"});case 19:case"end":return r.stop()}}),r)})))()},gotoRegister:function(){e.navigateTo({url:"../register/register"})},gotoPassword:function(){e.navigateTo({url:"./Password/Password"})}}};n.default=i}).call(this,t(2)["default"],t(1)["default"])},83:function(e,n,t){"use strict";t.r(n);var o=t(84),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=r.a},84:function(e,n,t){}},[[77,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map