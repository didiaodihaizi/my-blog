webpackJsonp([1],{"1hhR":function(t,e){},j7e0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),s=n("exGp"),i=n.n(s),c=n("1Scu"),u={mixins:[{data:function(){return{}},mounted:function(){var t=this;return i()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,c.default.forEach(function(){var e=i()(a.a.mark(function e(r){var s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r;case 2:(s=t.sent).type=r.type,n.push(s);case 5:case"end":return t.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 3:t.$store.dispatch("article/updateAllArticle",n);case 4:case"end":return e.stop()}},e,t)}))()}}],data:function(){return{articleList:[]}},mounted:function(){var t,e=this;console.log(c.default),c.default.forEach((t=i()(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:(r=t.sent).default.type=n.type,e.articleList.push(r.default);case 5:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)}))},methods:{toDetail:function(t){this.$router.push("/article/"+t.type+"/"+t.id)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ul",{staticClass:"article-list"},t._l(t.articleList,function(e){return n("li",{key:""+e.type+e.id,staticClass:"article-item",on:{click:function(n){return t.toDetail(e)}}},[n("div",{staticClass:"article-inner"},[n("h1",{staticClass:"article-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),n("p",{staticClass:"create-time"},[t._v(t._s(e.create_time))])])])}),0)])},staticRenderFns:[]};var o=n("VU/8")(u,l,!1,function(t){n("1hhR")},null,null);e.default=o.exports}});
//# sourceMappingURL=1.668c8e611beefd62f972.js.map