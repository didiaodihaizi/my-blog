webpackJsonp([2],{Lqoh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Xxa5"),a=i.n(n),s=i("exGp"),r=i.n(s),c=i("1Scu"),u={data:function(){return{articleList:[]}},computed:{},watch:{"$route.path":function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.articleList=[];var e,i=this.$route.params.type;c.default.filter(function(t){return t.type===i});c.default.forEach((e=r()(a.a.mark(function e(n){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.type!==i){e.next=6;break}return e.next=3,n;case 3:(s=e.sent).default.type=n.type,t.articleList.push(s.default);case 6:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},toDetail:function(t){this.$router.push("/article/"+t.type+"/"+t.id)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("ul",{staticClass:"article-list"},t._l(t.articleList,function(e){return i("li",{key:""+e.type+e.id,staticClass:"article-item",on:{click:function(i){return t.toDetail(e)}}},[i("div",{staticClass:"article-inner"},[i("h1",{staticClass:"article-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),i("p",{staticClass:"create-time"},[t._v(t._s(e.create_time))])])])}),0)])},staticRenderFns:[]};var o=i("VU/8")(u,l,!1,function(t){i("v9Sf")},null,null);e.default=o.exports},v9Sf:function(t,e){}});
//# sourceMappingURL=2.b6357d041abfe72f93f2.js.map