(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff841208"],{"254b":function(t,e,r){"use strict";r("9abb")},"9abb":function(t,e,r){},ad8f:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"v",(function(){return u})),r.d(e,"n",(function(){return i})),r.d(e,"k",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return l})),r.d(e,"e",(function(){return m})),r.d(e,"w",(function(){return f})),r.d(e,"x",(function(){return d})),r.d(e,"q",(function(){return p})),r.d(e,"o",(function(){return b})),r.d(e,"p",(function(){return g})),r.d(e,"r",(function(){return h})),r.d(e,"y",(function(){return j})),r.d(e,"c",(function(){return O})),r.d(e,"g",(function(){return v})),r.d(e,"h",(function(){return k})),r.d(e,"t",(function(){return w})),r.d(e,"i",(function(){return x})),r.d(e,"f",(function(){return $})),r.d(e,"s",(function(){return I})),r.d(e,"m",(function(){return T})),r.d(e,"l",(function(){return C})),r.d(e,"u",(function(){return D})),r.d(e,"j",(function(){return q}));var n=r("5530"),o=r("b775");function a(t){return Object(o["a"])({data:Object(n["a"])({},t),url:"add",method:"post"})}function u(t){return Object(o["a"])({params:t,url:"order",method:"get"})}function i(t){return Object(o["a"])({params:t,url:"list",method:"get"})}function c(t){return Object(o["a"])({params:t,url:"del",method:"get"})}function s(t){return Object(o["a"])({params:t,url:"deleted",method:"get"})}function l(t){return Object(o["a"])({params:t,url:"json",method:"get"})}function m(t){return Object(o["a"])({params:t,url:"getId",method:"get"})}function f(t){return Object(o["a"])({params:t,url:"supermarket",method:"get"})}function d(t){return Object(o["a"])({url:"update",data:Object(n["a"])({},t),method:"post"})}function p(t){return Object(o["a"])({params:t,url:"marketId",method:"get"})}function b(t){return Object(o["a"])({url:"market",data:Object(n["a"])({},t),method:"post"})}function g(t){return Object(o["a"])({url:"marketDel",params:t,method:"get"})}function h(t){return Object(o["a"])({url:"mkupdate",data:Object(n["a"])({},t),method:"post"})}function j(t){return Object(o["a"])({url:"users",method:"get",params:t})}function O(t){return Object(o["a"])({url:"dgoods",method:"get",params:t})}function v(t){return Object(o["a"])({url:"goodId",method:"get",params:t})}function k(t){return Object(o["a"])({url:"goodUpdate",method:"post",data:Object(n["a"])({},t)})}function w(t){return Object(o["a"])({url:"newsUpdate",method:"post",data:Object(n["a"])({},t)})}function x(t){return Object(o["a"])({url:"goodel",method:"get",params:t})}function $(t){return Object(o["a"])({url:"goodAdd",method:"post",data:Object(n["a"])({},t)})}function I(t){return Object(o["a"])({url:"newsAdd",method:"post",data:Object(n["a"])({},t)})}function T(t){return Object(o["a"])({url:"helps",method:"get",params:t})}function C(t){return Object(o["a"])({url:"helpid",method:"get",params:t})}function D(t){return Object(o["a"])({url:"obtain",method:"get",params:t})}function q(t){return Object(o["a"])({url:"grant",method:"get",params:t})}},bade:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px",rules:t.rules}},[r("el-row",{attrs:{gutter:15}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"项目名称",prop:"title"}},[r("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),r("el-col",{attrs:{span:16,offset:0}},[r("el-form-item",{attrs:{label:"项目副标题",prop:"subtitle"}},[r("el-input",{model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}})],1)],1)],1),r("el-row",{attrs:{gutter:15}},[r("el-col",{attrs:{span:8,offset:0}},[r("el-form-item",{attrs:{label:"项目所属",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择项目所属"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[r("el-option",{attrs:{label:"品牌项目",value:"1"}}),r("el-option",{attrs:{label:"冠名基金",value:"2"}}),r("el-option",{attrs:{label:"慈善一日捐",value:"3"}}),r("el-option",{attrs:{label:"慈善捐助",value:"4"}})],1)],1)],1),r("el-col",{attrs:{span:16,offset:0}},[r("el-form-item",{attrs:{label:"项目创建时间"}},[r("el-col",{attrs:{span:11}},[r("el-date-picker",{attrs:{align:"right",type:"date",placeholder:"选择日期","picker-options":t.pickerOptions},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1)],1)],1),r("el-form-item",{attrs:{label:"项目状态"}},[r("el-switch",{attrs:{"active-text":t.activeText},on:{change:t.zhuangtai},model:{value:t.form.inprogress,callback:function(e){t.$set(t.form,"inprogress",e)},expression:"form.inprogress"}})],1),r("el-form-item",{attrs:{label:"背景图片",prop:"bgImg"}},[r("el-input",{attrs:{placeholder:"请填写云端连接地址"},model:{value:t.form.bgImg,callback:function(e){t.$set(t.form,"bgImg",e)},expression:"form.bgImg"}})],1),r("el-form-item",{attrs:{label:"项目简介",prop:"content"}},[r("vue-editor",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("立即创建")]),r("el-button",{on:{click:t.onCancel}},[t._v("取消返回")])],1)],1)],1)},o=[],a=r("5873"),u=r("ad8f"),i={components:{VueEditor:a["a"]},data:function(){return{activeText:"新建项目默认开启,请勿关闭",form:{title:"",subtitle:"",status:"",date:"",inprogress:!0,bgImg:"",content:""},pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},rules:{title:[{required:!0,message:"请输入项目名称",trigger:"blur"}],subtitle:[{required:!0,message:"请输入项目副标题",trigger:"blur"}],status:[{required:!0,message:"请选择项目所属",trigger:"blur"}],content:[{required:!0,message:"请填写项目介绍",trigger:"blur"}]}}},methods:{zhuangtai:function(t){this.activeText=!1===t?"新建项目处于关闭状态,可能会导致错误,请注意!!!":"新建项目默认开启,请勿关闭."},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(u["a"])(e.form).then((function(t){console.log(t),e.$message({message:t.message,type:"success",showClose:!0,duration:3e3}),e.$router.push("/love/love")}))}))},onCancel:function(){this.$router.go(-1)}}},c=i,s=(r("254b"),r("2877")),l=Object(s["a"])(c,n,o,!1,null,"337e9a06",null);e["default"]=l.exports}}]);