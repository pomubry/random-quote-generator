(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],[,,,,,function(t,e,a){t.exports=a.p+"static/media/quote.f0e9498d.svg"},function(t,e,a){t.exports=a.p+"static/media/githubIcon.0a3a0978.svg"},,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),s=(a(15),a(7)),i=a(3),l=a(4),u=a(9),h=a(8),m=a(5),d=a.n(m),p=a(6),f=a.n(p),v=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={author:"",content:"",href:"",quoteArr:[],color:["#ED4C67","#F79F1F","#1289A7","#D980FA","#B53471","#EE5A24","#009432","#0652DD","#9980FA","#833471","#EA2027","#5758BB"],activeColor:"",opacity:0,transition:"all 1s ease"},t.handleGenerate=function(e){e.preventDefault();var a=t.state,n=a.quoteArr,o=a.color,r=Math.floor(Math.random()*n.length);t.setState({author:n[r].author,content:n[r].content,activeColor:o[Math.floor(Math.random()*o.length)],opacity:0,transition:"none"},(function(){setTimeout((function(){t.setState({opacity:1,transition:"all .25s ease"})}),250)}))},t.handleTweet=function(e){var a=t.state.author.replace(/\s/g,"%20"),n=t.state.content.replace(/\s/g,"%20");console.log(t.state.href),t.setState({href:'https://twitter.com/intent/tweet?text="'.concat(n,'"%20-%20').concat(a)})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.quotable.io/quotes").then((function(t){return t.json()})).then((function(e){var a=t.state.color,n=Math.floor(Math.random()*e.results.length);t.setState({author:e.results[n].author,content:e.results[n].content,quoteArr:Object(s.a)(e.results),activeColor:a[Math.floor(Math.random()*a.length)],opacity:1})}))}},{key:"render",value:function(){var t=this.state,e=t.activeColor,a=t.opacity,n=t.transition,r={backgroundColor:e,transition:"all 1s ease"};return o.a.createElement("div",{className:"App",style:r},o.a.createElement("header",null,o.a.createElement("h1",null,"Random Quote Generator")),o.a.createElement("div",{className:"content-box",id:"quote-box"},o.a.createElement("div",{className:"quote"},o.a.createElement("h2",{id:"text",style:{color:e,transition:n,opacity:"".concat(a)},onTransitionEnd:this.handleTransition},o.a.createElement("img",{src:d.a,alt:"quote",className:"quoteSVG"})," ",this.state.content),o.a.createElement("p",{id:"author",style:{color:e,transition:n,opacity:"".concat(a)}},"- ",this.state.author)),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:this.handleGenerate,id:"new-quote",style:r},"Generate a Random Quote"),o.a.createElement("a",{href:this.state.href,onClick:this.handleTweet,rel:"noopener noreferrer",id:"tweet-quote",style:r,target:"_blank"},"Tweet this Quote"))),o.a.createElement("div",{className:"credits"},o.a.createElement("p",null,"Designed and Coded By"),o.a.createElement("a",{href:"https://github.com/pomubry",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:f.a,alt:"github icon"}),"Bryan Taduran")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.9775b46d.chunk.js.map