(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d701f15e"],{"2a34":function(t,n,e){"use strict";e("e8c4")},ad8f:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"v",(function(){return u})),e.d(n,"n",(function(){return d})),e.d(n,"k",(function(){return i})),e.d(n,"b",(function(){return l})),e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return f})),e.d(n,"w",(function(){return m})),e.d(n,"x",(function(){return p})),e.d(n,"q",(function(){return b})),e.d(n,"o",(function(){return h})),e.d(n,"p",(function(){return g})),e.d(n,"r",(function(){return j})),e.d(n,"y",(function(){return O})),e.d(n,"c",(function(){return w})),e.d(n,"g",(function(){return v})),e.d(n,"h",(function(){return k})),e.d(n,"t",(function(){return _})),e.d(n,"i",(function(){return y})),e.d(n,"f",(function(){return x})),e.d(n,"s",(function(){return $})),e.d(n,"m",(function(){return E})),e.d(n,"l",(function(){return A})),e.d(n,"u",(function(){return D})),e.d(n,"j",(function(){return I}));var r=e("5530"),a=e("b775"),c="http://localhost:3000/";function o(t){return Object(a["a"])({data:Object(r["a"])({},t),url:"".concat(c,"add"),method:"post"})}function u(t){return Object(a["a"])({params:t,url:"".concat(c,"order"),method:"get"})}function d(t){return Object(a["a"])({params:t,url:"".concat(c,"list"),method:"get"})}function i(t){return Object(a["a"])({params:t,url:"".concat(c,"del"),method:"get"})}function l(t){return Object(a["a"])({params:t,url:"".concat(c,"deleted"),method:"get"})}function s(t){return Object(a["a"])({params:t,url:"".concat(c,"json"),method:"get"})}function f(t){return Object(a["a"])({params:t,url:"".concat(c,"getId"),method:"get"})}function m(t){return Object(a["a"])({params:t,url:"".concat(c,"supermarket"),method:"get"})}function p(t){return Object(a["a"])({url:"".concat(c,"update"),data:Object(r["a"])({},t),method:"post"})}function b(t){return Object(a["a"])({params:t,url:"".concat(c,"marketId"),method:"get"})}function h(t){return Object(a["a"])({url:"".concat(c,"market"),data:Object(r["a"])({},t),method:"post"})}function g(t){return Object(a["a"])({url:"".concat(c,"marketDel"),params:t,method:"get"})}function j(t){return Object(a["a"])({url:"".concat(c,"mkupdate"),data:Object(r["a"])({},t),method:"post"})}function O(t){return Object(a["a"])({url:"".concat(c,"users"),method:"get",params:t})}function w(t){return Object(a["a"])({url:"".concat(c,"dgoods"),method:"get",params:t})}function v(t){return Object(a["a"])({url:"".concat(c,"goodId"),method:"get",params:t})}function k(t){return Object(a["a"])({url:"".concat(c,"goodUpdate"),method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(a["a"])({url:"".concat(c,"newsUpdate"),method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(a["a"])({url:"".concat(c,"goodel"),method:"get",params:t})}function x(t){return Object(a["a"])({url:"".concat(c,"goodAdd"),method:"post",data:Object(r["a"])({},t)})}function $(t){return Object(a["a"])({url:"".concat(c,"newsAdd"),method:"post",data:Object(r["a"])({},t)})}function E(t){return Object(a["a"])({url:"".concat(c,"helps"),method:"get",params:t})}function A(t){return Object(a["a"])({url:"".concat(c,"helpid"),method:"get",params:t})}function D(t){return Object(a["a"])({url:"".concat(c,"obtain"),method:"get",params:t})}function I(t){return Object(a["a"])({url:"".concat(c,"grant"),method:"get",params:t})}},c924:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"m-d"},[e("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",size:"default"},on:{click:t.News}},[t._v("创建新闻")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.data,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180",align:"center"}}),e("el-table-column",{attrs:{prop:"status",label:"所属类型","label-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",[t._v(" "+t._s(0===n.row.status?"捐物活动":"捐物新闻")+" ")])]}}])}),e("el-table-column",{attrs:{prop:"title",label:"新闻标题","label-width":"240",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"240"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{on:{click:function(e){return t.handleEdit(n.$index,n.row)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.handleDelete(n.$index,n.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],c=e("ad8f"),o={data:function(){return{data:[],status:1,loading:""}},created:function(){this._dlist()},methods:{News:function(){this.$router.push("./goodnewAdd")},handleEdit:function(t,n){this.$router.push("./goodnewEdit/".concat(n._id))},handleDelete:function(t,n){var e=this;this.$confirm("确定要删除“".concat(n.title,"”吗？删除后无法恢复，请谨慎操作."),"重要提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["i"])({id:n._id}).then((function(t){e.$message({message:t.message,type:"success",showClose:!0,duration:2e3}),e._dlist()}))}))},_dlist:function(){var t=this;this.loading=!0,Object(c["c"])({status:this.status}).then((function(n){t.data=n.data,t.loading=!1}))}}},u=o,d=(e("2a34"),e("2877")),i=Object(d["a"])(u,r,a,!1,null,"50f550e6",null);n["default"]=i.exports},e8c4:function(t,n,e){}}]);