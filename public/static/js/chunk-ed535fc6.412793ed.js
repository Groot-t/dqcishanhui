(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed535fc6"],{2339:function(t,e,n){"use strict";n("cc41")},"25dc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{staticClass:"love-mx",attrs:{type:"primary",size:"default"},on:{click:function(e){return t.add()}}},[t._v("新建慈善项目")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"love-m-1 love-font-size",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{label:"项目创建时间",width:"200",prop:"createTime",align:"center"}}),n("el-table-column",{attrs:{prop:"title",label:"项目名称","label-width":"360",align:"center"}}),n("el-table-column",{attrs:{label:"项目所属","label-width":"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?n("div",[t._v("品牌项目")]):t._e(),2===e.row.status?n("div",[t._v("冠名基金")]):t._e(),3===e.row.status?n("div",[t._v("慈善一日捐")]):t._e(),4===e.row.status?n("div",[t._v("慈善捐助")]):t._e()]}}])}),n("el-table-column",{attrs:{label:"募捐总额度","label-width":"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[""==e.row.cashFixed?n("div",[t._v("活动进行中...")]):n("div",{staticStyle:{color:"red"}},[t._v(" ￥"+t._s(e.row.cashFixed)+"元人民币 ")])]}}])}),n("el-table-column",{attrs:{label:"项目状态","label-width":"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[!1===e.row.inprogress?n("div",[n("el-tag",{attrs:{type:"info"}},[t._v("结束")])],1):t._e(),!0===e.row.inprogress?n("div",[n("el-tag",{attrs:{type:"danger"}},[t._v(" 进行中")])],1):t._e()]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"auto"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],u=n("ad8f"),o={name:"love",data:function(){return{tableData:[],loading:!1}},created:function(){this.getlist()},methods:{add:function(){this.$router.push("./add")},handleEdit:function(t,e){this.$router.push("./edit/".concat(e._id))},handleDelete:function(t,e){var n=this;console.log(t,e),this.$confirm('确定要删除"'.concat(e.title,'"吗？删除后无法恢复,请谨慎操作!'),"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(t){Object(u["b"])({id:e._id}).then((function(t){n.$message({message:t.message,type:"success"}),n.getlist()}))}))},getlist:function(){var t=this;this.loading=!0,Object(u["d"])().then((function(e){t.tableData=e.data,t.loading=!1}))}}},c=o,i=(n("2339"),n("2877")),d=Object(i["a"])(c,r,a,!1,null,"65f9260a",null);e["default"]=d.exports},ad8f:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"v",(function(){return o})),n.d(e,"n",(function(){return c})),n.d(e,"k",(function(){return i})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return s})),n.d(e,"w",(function(){return f})),n.d(e,"x",(function(){return m})),n.d(e,"q",(function(){return b})),n.d(e,"o",(function(){return p})),n.d(e,"p",(function(){return h})),n.d(e,"r",(function(){return g})),n.d(e,"y",(function(){return j})),n.d(e,"c",(function(){return O})),n.d(e,"g",(function(){return v})),n.d(e,"h",(function(){return w})),n.d(e,"t",(function(){return _})),n.d(e,"i",(function(){return k})),n.d(e,"f",(function(){return y})),n.d(e,"s",(function(){return x})),n.d(e,"m",(function(){return $})),n.d(e,"l",(function(){return D})),n.d(e,"u",(function(){return S})),n.d(e,"j",(function(){return z}));var r=n("5530"),a=n("b775");function u(t){return Object(a["a"])({data:Object(r["a"])({},t),url:"add",method:"post"})}function o(t){return Object(a["a"])({params:t,url:"order",method:"get"})}function c(t){return Object(a["a"])({params:t,url:"list",method:"get"})}function i(t){return Object(a["a"])({params:t,url:"del",method:"get"})}function d(t){return Object(a["a"])({params:t,url:"deleted",method:"get"})}function l(t){return Object(a["a"])({params:t,url:"json",method:"get"})}function s(t){return Object(a["a"])({params:t,url:"getId",method:"get"})}function f(t){return Object(a["a"])({params:t,url:"supermarket",method:"get"})}function m(t){return Object(a["a"])({url:"update",data:Object(r["a"])({},t),method:"post"})}function b(t){return Object(a["a"])({params:t,url:"marketId",method:"get"})}function p(t){return Object(a["a"])({url:"market",data:Object(r["a"])({},t),method:"post"})}function h(t){return Object(a["a"])({url:"marketDel",params:t,method:"get"})}function g(t){return Object(a["a"])({url:"mkupdate",data:Object(r["a"])({},t),method:"post"})}function j(t){return Object(a["a"])({url:"users",method:"get",params:t})}function O(t){return Object(a["a"])({url:"dgoods",method:"get",params:t})}function v(t){return Object(a["a"])({url:"goodId",method:"get",params:t})}function w(t){return Object(a["a"])({url:"goodUpdate",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(a["a"])({url:"newsUpdate",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(a["a"])({url:"goodel",method:"get",params:t})}function y(t){return Object(a["a"])({url:"goodAdd",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(a["a"])({url:"newsAdd",method:"post",data:Object(r["a"])({},t)})}function $(t){return Object(a["a"])({url:"helps",method:"get",params:t})}function D(t){return Object(a["a"])({url:"helpid",method:"get",params:t})}function S(t){return Object(a["a"])({url:"obtain",method:"get",params:t})}function z(t){return Object(a["a"])({url:"grant",method:"get",params:t})}},cc41:function(t,e,n){}}]);