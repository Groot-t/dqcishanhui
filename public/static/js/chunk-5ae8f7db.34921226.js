(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ae8f7db"],{"1e90":function(t,e,n){},"7c3b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mp"},[n("el-form",{attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"创建时间","label-width":"120px"}},[n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.createTime,callback:function(e){t.$set(t.form,"createTime",e)},expression:"form.createTime"}})],1),n("el-form-item",{attrs:{label:"新闻标题"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"新闻副标题"}},[n("el-input",{model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}})],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:18,offset:0}},[n("el-form-item",{attrs:{label:"背景图","label-width":"120px"}},[n("el-input",{model:{value:t.form.img,callback:function(e){t.$set(t.form,"img",e)},expression:"form.img"}})],1)],1),n("el-col",{staticStyle:{"line-height":"42px"},attrs:{span:6,offset:0}},[n("el-link",{attrs:{icon:"el-icon-s-tools",underline:!1}},[t._v("默认，如无新地址，无需改动。")])],1)],1),n("el-form-item",{attrs:{label:"新闻内容"}},[n("vue-editor",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定更新")]),n("el-button",{on:{click:t.onCancel}},[t._v("取消返回")])],1)],1)],1)},o=[],c=n("ad8f"),a=n("5873"),u={components:{VueEditor:a["a"]},data:function(){return{form:{}}},created:function(){var t=this;Object(c["g"])({id:this.$route.params.id}).then((function(e){t.form=e.data[0]}))},methods:{onSubmit:function(){var t=this;Object(c["t"])(this.form).then((function(e){e.data.modified>0?(t.$message({message:"更新成功",type:"success"}),t.$router.push("/dgoods/goodnews")):t.$message.warning("没有任何改动.可点击取消返回")}))},onCancel:function(){this.$router.go(-1)}}},i=u,d=(n("c168"),n("2877")),l=Object(d["a"])(i,r,o,!1,null,"b1005444",null);e["default"]=l.exports},ad8f:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"v",(function(){return u})),n.d(e,"n",(function(){return i})),n.d(e,"k",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return m})),n.d(e,"w",(function(){return f})),n.d(e,"x",(function(){return b})),n.d(e,"q",(function(){return p})),n.d(e,"o",(function(){return h})),n.d(e,"p",(function(){return g})),n.d(e,"r",(function(){return j})),n.d(e,"y",(function(){return O})),n.d(e,"c",(function(){return k})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return w})),n.d(e,"t",(function(){return x})),n.d(e,"i",(function(){return $})),n.d(e,"f",(function(){return y})),n.d(e,"s",(function(){return _})),n.d(e,"m",(function(){return C})),n.d(e,"l",(function(){return I})),n.d(e,"u",(function(){return S})),n.d(e,"j",(function(){return T}));var r=n("5530"),o=n("b775"),c="http://localhost:3000/";function a(t){return Object(o["a"])({data:Object(r["a"])({},t),url:"".concat(c,"add"),method:"post"})}function u(t){return Object(o["a"])({params:t,url:"".concat(c,"order"),method:"get"})}function i(t){return Object(o["a"])({params:t,url:"".concat(c,"list"),method:"get"})}function d(t){return Object(o["a"])({params:t,url:"".concat(c,"del"),method:"get"})}function l(t){return Object(o["a"])({params:t,url:"".concat(c,"deleted"),method:"get"})}function s(t){return Object(o["a"])({params:t,url:"".concat(c,"json"),method:"get"})}function m(t){return Object(o["a"])({params:t,url:"".concat(c,"getId"),method:"get"})}function f(t){return Object(o["a"])({params:t,url:"".concat(c,"supermarket"),method:"get"})}function b(t){return Object(o["a"])({url:"".concat(c,"update"),data:Object(r["a"])({},t),method:"post"})}function p(t){return Object(o["a"])({params:t,url:"".concat(c,"marketId"),method:"get"})}function h(t){return Object(o["a"])({url:"".concat(c,"market"),data:Object(r["a"])({},t),method:"post"})}function g(t){return Object(o["a"])({url:"".concat(c,"marketDel"),params:t,method:"get"})}function j(t){return Object(o["a"])({url:"".concat(c,"mkupdate"),data:Object(r["a"])({},t),method:"post"})}function O(t){return Object(o["a"])({url:"".concat(c,"users"),method:"get",params:t})}function k(t){return Object(o["a"])({url:"".concat(c,"dgoods"),method:"get",params:t})}function v(t){return Object(o["a"])({url:"".concat(c,"goodId"),method:"get",params:t})}function w(t){return Object(o["a"])({url:"".concat(c,"goodUpdate"),method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(o["a"])({url:"".concat(c,"newsUpdate"),method:"post",data:Object(r["a"])({},t)})}function $(t){return Object(o["a"])({url:"".concat(c,"goodel"),method:"get",params:t})}function y(t){return Object(o["a"])({url:"".concat(c,"goodAdd"),method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(o["a"])({url:"".concat(c,"newsAdd"),method:"post",data:Object(r["a"])({},t)})}function C(t){return Object(o["a"])({url:"".concat(c,"helps"),method:"get",params:t})}function I(t){return Object(o["a"])({url:"".concat(c,"helpid"),method:"get",params:t})}function S(t){return Object(o["a"])({url:"".concat(c,"obtain"),method:"get",params:t})}function T(t){return Object(o["a"])({url:"".concat(c,"grant"),method:"get",params:t})}},c168:function(t,e,n){"use strict";n("1e90")}}]);