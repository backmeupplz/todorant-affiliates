(this["webpackJsonptodorant-affiliates"]=this["webpackJsonptodorant-affiliates"]||[]).push([[0],{28:function(t){t.exports=JSON.parse('{"title":"Frontend Template"}')},29:function(t){t.exports=JSON.parse('{"title":"\u0422\u0435\u043c\u043f\u043b\u0435\u0439\u0442 \u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434\u0430"}')},39:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(16),o=n.n(a),u=(n(39),n(24).a),s=n(3),i=u("container","mx-auto","pb-10","max-w-4xl","py-4"),l=function(t){var e=t.children;return Object(s.jsx)("div",{className:i,children:e})},p=n(9),b=n.n(p),f=n(10),d=n(31),j=n(25);function x(){return h.apply(this,arguments)}function h(){return(h=Object(f.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)("https://stats.borodutch.com/count");case 2:return t.next=4,t.sent.json();case 4:return e=t.sent,t.abrupt("return",e.count);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O,v=function(){var t=Object(r.useState)(void 0),e=Object(d.a)(t,2),n=e[0],c=e[1],a=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=c,t.next=4,x();case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.log(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),{userCount:n}},m=u("text-white"),g=u("text-gray-300"),w=(u(m,"text-3xl","md:text-6xl","font-bold","text-center","mb-6"),u(m,"text-xl","md:text-2xl","font-bold","text-center","my-12"),u(g,"text-center")),y=function(t){var e=t.children;return Object(s.jsx)("p",{className:w,children:e})};!function(t){t.en="en",t.ru="ru"}(O||(O={}));var k=O,S=n(63),C=n(30),N=n(26),J=n(27),A=n(4),I=n(15),z=new I.StorageAdapter({read:function(){var t=Object(f.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem(e),t.abrupt("return",null===n?void 0:n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),write:function(){var t=Object(f.a)(b.a.mark((function t(e,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem(e,n);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}),E=function(){function t(){Object(N.a)(this,t),this.language=k.en,Object(A.makeAutoObservable)(this)}return Object(J.a)(t,[{key:"isSynchronized",get:function(){return Object(I.isSynchronized)(this)}}]),t}(),B=Object(I.persistence)({name:"AppStore",properties:["language"],adapter:z})(new E),F={en:n(28),ru:n(29)},L=Object(C.a)((function(t){var e=t.children;return Object(s.jsx)(S.a,{locale:B.language,defaultLocale:k.en,messages:F[B.language],children:e})})),M=u("bg-transparent","hover:bg-blue-500","text-blue-700","font-semibold","hover:text-white","py-2","px-4","border","border-blue-500","hover:border-transparent","rounded","focus:outline-none","mx-1"),T=function(t){var e=t.onClick,n=t.title;return Object(s.jsx)("button",{className:M,onClick:e,children:n})};function U(){return Object(s.jsx)("div",{children:Object.values(k).map((function(t){return Object(s.jsx)(T,{onClick:function(){B.language=t},title:t},t)}))})}var q=n(64),D=function(){var t=v().userCount;return Object(s.jsx)(l,{children:Object(s.jsxs)(L,{children:[Object(s.jsxs)(y,{children:["User count: ",t]}),Object(s.jsx)(y,{children:Object(s.jsx)(q.a,{id:"title"})}),Object(s.jsx)(U,{})]})})};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.d6b55c55.chunk.js.map