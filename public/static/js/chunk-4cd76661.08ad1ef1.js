(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cd76661"],{"503e":function(t,e,r){"use strict";r("b395")},6662:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-p"},[r("el-form",{ref:"form",attrs:{model:t.form,size:"normal"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"创建时间","label-width":"120px"}},[r("el-input",{model:{value:t.form.createTime,callback:function(e){t.$set(t.form,"createTime",e)},expression:"form.createTime"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"活动超市名称","label-width":"120px"}},[r("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),r("el-col",{attrs:{span:12,offset:0}},[r("el-form-item",{attrs:{label:"捐赠活动简述","label-width":"120px"}},[r("el-input",{model:{value:t.form.subtitle,callback:function(e){t.$set(t.form,"subtitle",e)},expression:"form.subtitle"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"需要物品","label-width":"120px"}},[r("el-input",{model:{value:t.form.article.ar_name,callback:function(e){t.$set(t.form.article,"ar_name",e)},expression:"form.article.ar_name"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"需要数量","label-width":"120px"}},[r("el-input",{model:{value:t.form.article.ar_math,callback:function(e){t.$set(t.form.article,"ar_math",e)},expression:"form.article.ar_math"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"已经获得","label-width":"120px"}},[r("el-input",{model:{value:t.form.article.ar_obtain,callback:function(e){t.$set(t.form.article,"ar_obtain",e)},expression:"form.article.ar_obtain"}})],1)],1),r("el-col",{attrs:{span:6,offset:0}},[r("el-form-item",{attrs:{label:"已经发放","label-width":"120px"}},[r("el-input",{model:{value:t.form.article.ar_lack,callback:function(e){t.$set(t.form.article,"ar_lack",e)},expression:"form.article.ar_lack"}})],1)],1)],1),r("el-form-item",{attrs:{label:"活动小图标","label-width":"120px"}},[r("el-input",{model:{value:t.form.img,callback:function(e){t.$set(t.form,"img",e)},expression:"form.img"}})],1),r("el-form-item",{attrs:{label:"活动内图片","label-width":"120px"}},[r("el-input",{model:{value:t.form.subImg,callback:function(e){t.$set(t.form,"subImg",e)},expression:"form.subImg"}})],1),r("el-form-item",{attrs:{label:"活动简介","label-width":"120px"}},[r("vue-editor",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("el-form-item",{attrs:{label:"项目状态","label-width":"120px"}},[r("el-switch",{attrs:{"active-text":1==t.form.auth?"活动进行中":"结束活动"},model:{value:t.form.auth,callback:function(e){t.$set(t.form,"auth",e)},expression:"form.auth"}})],1),r("el-form-item",{attrs:{"label-width":"120px"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确认修改")]),r("el-button",{on:{click:t.onCancel}},[t._v("取消返回")])],1)],1)],1)},a=[],o=r("ad8f"),c=r("5873"),u={components:{VueEditor:c["a"]},data:function(){return{form:{article:{}}}},created:function(){var t=this;Object(o["g"])({id:this.$route.params.id}).then((function(e){t.form=e.data[0]}))},methods:{onCancel:function(){this.$router.go(-1)},onSubmit:function(){var t=this;Object(o["h"])(this.form).then((function(e){e.data.modified>0?(t.$message({message:"更新成功",type:"success"}),t.$router.push("/dgoods/dgoods")):t.$message.warning("没有任何改动.可点击取消返回")}))}}},l=u,i=(r("503e"),r("2877")),m=Object(i["a"])(l,n,a,!1,null,"6b8f5198",null);e["default"]=m.exports},ad8f:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"v",(function(){return u})),r.d(e,"n",(function(){return l})),r.d(e,"k",(function(){return i})),r.d(e,"b",(function(){return m})),r.d(e,"d",(function(){return s})),r.d(e,"e",(function(){return f})),r.d(e,"w",(function(){return d})),r.d(e,"x",(function(){return b})),r.d(e,"q",(function(){return p})),r.d(e,"o",(function(){return h})),r.d(e,"p",(function(){return g})),r.d(e,"r",(function(){return j})),r.d(e,"y",(function(){return O})),r.d(e,"c",(function(){return x})),r.d(e,"g",(function(){return k})),r.d(e,"h",(function(){return w})),r.d(e,"t",(function(){return v})),r.d(e,"i",(function(){return $})),r.d(e,"f",(function(){return _})),r.d(e,"s",(function(){return I})),r.d(e,"m",(function(){return y})),r.d(e,"l",(function(){return C})),r.d(e,"u",(function(){return T})),r.d(e,"j",(function(){return A}));var n=r("5530"),a=r("b775"),o="http://localhost:3000/";function c(t){return Object(a["a"])({data:Object(n["a"])({},t),url:"".concat(o,"add"),method:"post"})}function u(t){return Object(a["a"])({params:t,url:"".concat(o,"order"),method:"get"})}function l(t){return Object(a["a"])({params:t,url:"".concat(o,"list"),method:"get"})}function i(t){return Object(a["a"])({params:t,url:"".concat(o,"del"),method:"get"})}function m(t){return Object(a["a"])({params:t,url:"".concat(o,"deleted"),method:"get"})}function s(t){return Object(a["a"])({params:t,url:"".concat(o,"json"),method:"get"})}function f(t){return Object(a["a"])({params:t,url:"".concat(o,"getId"),method:"get"})}function d(t){return Object(a["a"])({params:t,url:"".concat(o,"supermarket"),method:"get"})}function b(t){return Object(a["a"])({url:"".concat(o,"update"),data:Object(n["a"])({},t),method:"post"})}function p(t){return Object(a["a"])({params:t,url:"".concat(o,"marketId"),method:"get"})}function h(t){return Object(a["a"])({url:"".concat(o,"market"),data:Object(n["a"])({},t),method:"post"})}function g(t){return Object(a["a"])({url:"".concat(o,"marketDel"),params:t,method:"get"})}function j(t){return Object(a["a"])({url:"".concat(o,"mkupdate"),data:Object(n["a"])({},t),method:"post"})}function O(t){return Object(a["a"])({url:"".concat(o,"users"),method:"get",params:t})}function x(t){return Object(a["a"])({url:"".concat(o,"dgoods"),method:"get",params:t})}function k(t){return Object(a["a"])({url:"".concat(o,"goodId"),method:"get",params:t})}function w(t){return Object(a["a"])({url:"".concat(o,"goodUpdate"),method:"post",data:Object(n["a"])({},t)})}function v(t){return Object(a["a"])({url:"".concat(o,"newsUpdate"),method:"post",data:Object(n["a"])({},t)})}function $(t){return Object(a["a"])({url:"".concat(o,"goodel"),method:"get",params:t})}function _(t){return Object(a["a"])({url:"".concat(o,"goodAdd"),method:"post",data:Object(n["a"])({},t)})}function I(t){return Object(a["a"])({url:"".concat(o,"newsAdd"),method:"post",data:Object(n["a"])({},t)})}function y(t){return Object(a["a"])({url:"".concat(o,"helps"),method:"get",params:t})}function C(t){return Object(a["a"])({url:"".concat(o,"helpid"),method:"get",params:t})}function T(t){return Object(a["a"])({url:"".concat(o,"obtain"),method:"get",params:t})}function A(t){return Object(a["a"])({url:"".concat(o,"grant"),method:"get",params:t})}},b395:function(t,e,r){}}]);