(this["webpackJsonpreact-calendar"]=this["webpackJsonpreact-calendar"]||[]).push([[0],{16:function(e,t,a){e.exports={controls:"Controls_controls__2tkdC",icon:"Controls_icon__1uxQA"}},2:function(e,t,a){e.exports={dateBlock:"Date_dateBlock__3BxBP",dateBlockLabel:"Date_dateBlockLabel__2eXQ8",flash:"Date_flash__3J5fa",red:"Date_red__1yBVd"}},20:function(e,t,a){e.exports={App:"App_App__15LM-"}},21:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(9),o=a.n(r),l=a(4),u=a(6),i=a(5),s=a(8),f=a(11),d=Object(f.b)({name:"date",initialState:{day:(new Date).getDate(),month:(new Date).getMonth(),year:(new Date).getFullYear()},reducers:{setDate:function(e,t){var a=t.payload;return Object(s.a)({},a)},setDay:function(e,t){var a=t.payload;return Object(s.a)({},e,{day:a})},setMonth:function(e,t){var a=t.payload;return Object(s.a)({},e,{month:a})},setYear:function(e,t){var a=t.payload;return Object(s.a)({},e,{year:a})}}}),m=d.actions,b=m.setDay,E=m.setMonth,O=m.setYear,p=(m.setDate,function(e){return e.date}),j=function(e){return e.date.day},_=function(e){return e.date.month},y=function(e){return e.date.year},h=d.reducer,v=a(17);function D(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return Boolean(e)})).map((function(e){return Array.isArray(e)?D.apply(void 0,Object(v.a)(e)):"object"===typeof e?D.apply(void 0,Object(v.a)(Object.entries(e).filter((function(e){return Object(i.a)(e,2)[1]})).map((function(e){return Object(i.a)(e,1)[0]})))):e.trim()})).filter((function(e){return e.length})).join(" ")}var k=a(2),B=a.n(k);function N(){var e=Object(l.c)(p),t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),500)}),[e]),c.a.createElement("div",{className:D(B.a.dateBlock,Object(u.a)({},B.a.flash,r))},c.a.createElement("span",{className:B.a.dateBlockLabel},"Full Date"),"".concat(e.day,"/").concat(e.month,"/").concat(e.year))}function M(){var e=Object(l.c)(j),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),500)}),[e]),c.a.createElement("div",{className:D(B.a.dateBlock,Object(u.a)({},B.a.flash,r))},c.a.createElement("span",{className:B.a.dateBlockLabel},"Day"),e)}function w(){var e=Object(l.c)(_),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),500)}),[e]),c.a.createElement("div",{className:D(B.a.dateBlock,Object(u.a)({},B.a.flash,r))},c.a.createElement("span",{className:B.a.dateBlockLabel},"Month"),e)}function S(){var e=Object(l.c)(y),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),500)}),[e]),c.a.createElement("div",{className:D(B.a.dateBlock,Object(u.a)({},B.a.flash,r))},c.a.createElement("span",{className:B.a.dateBlockLabel},"Year"),e)}var A=a(0),L=a(12),T=a(16),g=a.n(T);function x(){var e=Object(l.b)();return c.a.createElement("div",{className:g.a.controls},c.a.createElement(A.b.Provider,{value:{className:g.a.icon,color:"#909090"}},c.a.createElement("button",{type:"button",onClick:function(){e(b(Math.floor(30*Math.random()+1)))},title:"Generate random day"},c.a.createElement(L.a,null),"Day"),c.a.createElement("button",{type:"button",onClick:function(){e(E(Math.floor(11*Math.random()+1)))},title:"Generate random month"},c.a.createElement(L.a,null),"Month"),c.a.createElement("button",{type:"button",onClick:function(){e(O(2e3+Math.floor(20*Math.random())))},title:"Generate random year"},c.a.createElement(L.a,null),"Year")))}var C=a(20),X=a.n(C);var Y=function(){return c.a.createElement("div",{className:X.a.App,"data-testid":"App"},c.a.createElement(N,null),c.a.createElement(M,null),c.a.createElement(w,null),c.a.createElement(S,null),c.a.createElement(x,null))},G=Object(f.a)({reducer:{date:h}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(32);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:G},c.a.createElement(Y,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.eb66db2a.chunk.js.map