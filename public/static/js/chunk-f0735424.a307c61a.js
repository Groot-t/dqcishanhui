(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0735424"],{"05c9":function(t,e,n){},"534d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mp"},[n("el-form",{attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"创建时间","label-width":"120px"}},[n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.createTime,callback:function(e){t.$set(t.form,"createTime",e)},expression:"form.createTime"}})],1),n("el-form-item",{attrs:{label:"新闻标题"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"新闻副标题"}},[n("el-input",{model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}})],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:18,offset:0}},[n("el-form-item",{attrs:{label:"背景图","label-width":"120px"}},[n("el-input",{model:{value:t.form.img,callback:function(e){t.$set(t.form,"img",e)},expression:"form.img"}})],1)],1),n("el-col",{staticStyle:{"line-height":"42px"},attrs:{span:6,offset:0}},[n("el-link",{attrs:{icon:"el-icon-s-tools",underline:!1}},[t._v("默认，如无新地址，无需改动。")])],1)],1),n("el-form-item",{attrs:{label:"新闻内容"}},[n("vue-editor",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),n("el-button",{on:{click:t.onCancel}},[t._v("取消返回")])],1)],1)],1)},o=[],u=n("ad8f"),a=n("5873"),c={components:{VueEditor:a["a"]},data:function(){return{form:{img:"cloud://cloud1-7g8693yfd8aaf364.636c-cloud1-7g8693yfd8aaf364-1306660212/new-list/gonggao.png"}}},methods:{onSubmit:function(){var t=this;Object(u["s"])(this.form).then((function(e){t.$message({message:"新闻创建成功",type:"success",showClose:!0,duration:2e3}),t.$router.push("/dgoods/goodnews")}))},onCancel:function(){this.$router.go(-1)}}},i=c,l=(n("feab"),n("2877")),d=Object(l["a"])(i,r,o,!1,null,"b71efe54",null);e["default"]=d.exports},ad8f:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"v",(function(){return a})),n.d(e,"n",(function(){return c})),n.d(e,"k",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"w",(function(){return s})),n.d(e,"x",(function(){return m})),n.d(e,"q",(function(){return b})),n.d(e,"o",(function(){return p})),n.d(e,"p",(function(){return h})),n.d(e,"r",(function(){return g})),n.d(e,"y",(function(){return j})),n.d(e,"c",(function(){return O})),n.d(e,"g",(function(){return k})),n.d(e,"h",(function(){return w})),n.d(e,"t",(function(){return v})),n.d(e,"i",(function(){return x})),n.d(e,"f",(function(){return $})),n.d(e,"s",(function(){return y})),n.d(e,"m",(function(){return _})),n.d(e,"l",(function(){return C})),n.d(e,"u",(function(){return I})),n.d(e,"j",(function(){return S}));var r=n("5530"),o=n("b775");function u(t){return Object(o["a"])({data:Object(r["a"])({},t),url:"add",method:"post"})}function a(t){return Object(o["a"])({params:t,url:"order",method:"get"})}function c(t){return Object(o["a"])({params:t,url:"list",method:"get"})}function i(t){return Object(o["a"])({params:t,url:"del",method:"get"})}function l(t){return Object(o["a"])({params:t,url:"deleted",method:"get"})}function d(t){return Object(o["a"])({params:t,url:"json",method:"get"})}function f(t){return Object(o["a"])({params:t,url:"getId",method:"get"})}function s(t){return Object(o["a"])({params:t,url:"supermarket",method:"get"})}function m(t){return Object(o["a"])({url:"update",data:Object(r["a"])({},t),method:"post"})}function b(t){return Object(o["a"])({params:t,url:"marketId",method:"get"})}function p(t){return Object(o["a"])({url:"market",data:Object(r["a"])({},t),method:"post"})}function h(t){return Object(o["a"])({url:"marketDel",params:t,method:"get"})}function g(t){return Object(o["a"])({url:"mkupdate",data:Object(r["a"])({},t),method:"post"})}function j(t){return Object(o["a"])({url:"users",method:"get",params:t})}function O(t){return Object(o["a"])({url:"dgoods",method:"get",params:t})}function k(t){return Object(o["a"])({url:"goodId",method:"get",params:t})}function w(t){return Object(o["a"])({url:"goodUpdate",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(o["a"])({url:"newsUpdate",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(o["a"])({url:"goodel",method:"get",params:t})}function $(t){return Object(o["a"])({url:"goodAdd",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(o["a"])({url:"newsAdd",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(o["a"])({url:"helps",method:"get",params:t})}function C(t){return Object(o["a"])({url:"helpid",method:"get",params:t})}function I(t){return Object(o["a"])({url:"obtain",method:"get",params:t})}function S(t){return Object(o["a"])({url:"grant",method:"get",params:t})}},feab:function(t,e,n){"use strict";n("05c9")}}]);