(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),o=n.n(s),r=(n(15),n(10)),i=n(3),j=n(6),l=n(9),u=n(2),b=["#ED4C67","#F79F1F","#1289A7","#D980FA","#B53471","#EE5A24","#009432","#0652DD","#9980FA","#833471","#EA2027","#5758BB"],d=function(){return b[Math.floor(Math.random()*b.length)]},h=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),b=o[0],h=o[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],p=x[1],m=Object(c.useState)([]),g=Object(i.a)(m,2),v=g[0],y=g[1],q=Object(c.useState)(""),S=Object(i.a)(q,2),k=S[0],w=S[1],M=Object(c.useState)(0),A=Object(i.a)(M,2),B=A[0],D=A[1],E=Object(c.useState)("all 1s ease"),C=Object(i.a)(E,2),F=C[0],N=C[1];Object(c.useEffect)((function(){fetch("https://api.quotable.io/quotes?limit=50&maxLength=200").then((function(e){return e.json()})).then((function(e){var t=Math.floor(Math.random()*e.results.length),n=e.results[t],c=n.author,s=n.content;a(c),h(s),y(Object(r.a)(e.results)),w(d),D(1)}))}),[]);var Q={backgroundColor:k,transition:"all 1s ease"};return Object(u.jsxs)("div",{className:"App",style:Q,children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Random Quote Generator"})}),Object(u.jsxs)("div",{className:"content-box",id:"quote-box",children:[Object(u.jsxs)("div",{className:"quote",children:[Object(u.jsxs)("h2",{id:"text",style:{color:k,transition:F,opacity:"".concat(B)},children:[Object(u.jsx)(j.b,{}),b]}),Object(u.jsxs)("p",{id:"author",style:{color:k,transition:F,opacity:"".concat(B)},children:["- ",n]})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsxs)("button",{onClick:function(e){e.preventDefault();var t=Math.floor(Math.random()*v.length),n=v[t],c=n.author,s=n.content;a(c),h(s),w(d),D(0),N("none"),setTimeout((function(){D(1),N("all .25s ease")}),250)},id:"new-quote",style:Q,children:[Object(u.jsx)(l.a,{})," Generate a Random Quote"]}),Object(u.jsxs)("a",{href:f,onClick:function(e){var t=n.replace(/\s/g,"%20"),c=b.replace(/\s/g,"%20");p('https://twitter.com/intent/tweet?text="'.concat(c,'"%20-%20').concat(t))},rel:"noopener noreferrer",id:"tweet-quote",style:Q,target:"_blank",children:[Object(u.jsx)(j.c,{})," Tweet this Quote"]})]})]}),Object(u.jsxs)("div",{className:"credits",children:[Object(u.jsx)("p",{children:"Designed and Coded By"}),Object(u.jsxs)("a",{href:"https://github.com/pomubry",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)(j.a,{}),"Bryan Taduran"]})]})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.743269d0.chunk.js.map