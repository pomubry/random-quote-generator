(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/quote.f0e9498d.svg"},function(e,t,a){e.exports=a.p+"static/media/githubIcon.0a3a0978.svg"},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),l=(a(15),a(7)),s=a(3),i=a(4),u=a(9),h=a(8),m=a(5),d=a.n(m),f=a(6),p=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={author:"",content:"",href:"",quoteArr:[],color:["#ED4C67","#F79F1F","#1289A7","#D980FA","#B53471","#EE5A24","#009432","#0652DD","#9980FA","#833471","#EA2027","#5758BB"],activeColor:""},e.handleGenerate=function(t){t.preventDefault();var a=e.state,n=a.quoteArr,o=a.color,r=Math.floor(Math.random()*n.length);e.setState({author:n[r].author,content:n[r].content,activeColor:o[Math.floor(Math.random()*o.length)]})},e.handleTweet=function(t){var a=e.state.author.replace(/\s/g,"%20"),n=e.state.content.replace(/\s/g,"%20");console.log(e.state.href),e.setState({href:'twitter.com/intent/tweet?text="'.concat(n,'"%20-%20').concat(a)})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.quotable.io/quotes").then((function(e){return e.json()})).then((function(t){var a=e.state.color,n=Math.floor(Math.random()*t.results.length);e.setState({author:t.results[n].author,content:t.results[n].content,quoteArr:Object(l.a)(t.results),activeColor:a[Math.floor(Math.random()*a.length)]})}))}},{key:"render",value:function(){var e=this.state.activeColor;return o.a.createElement("div",{className:"App",style:{backgroundColor:e,transition:"all 0.5s ease"}},o.a.createElement("header",null,o.a.createElement("h1",null,"Random Quote Generator")),o.a.createElement("div",{className:"content-box",id:"quote-box"},o.a.createElement("div",{className:"quote"},o.a.createElement("h2",{id:"text",style:{color:e,transition:"all 0.5s ease"}},o.a.createElement("img",{src:d.a,alt:"quote",className:"quoteSVG"})," ",this.state.content),o.a.createElement("p",{id:"author",style:{color:e,transition:"all 1s ease"}},"- ",this.state.author)),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:this.handleGenerate,id:"new-quote",style:{backgroundColor:e}},"Generate a Random Quote"),o.a.createElement("a",{href:this.state.href,onClick:this.handleTweet,rel:"noopener noreferrer",id:"tweet-quote",style:{backgroundColor:e},target:"_blank"},"Tweet this Quote"))),o.a.createElement("div",{className:"credits"},o.a.createElement("p",null,"Designed and Coded By"),o.a.createElement("a",{href:"https://github.com/pomubry",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:p.a,alt:"github icon"}),"Bryan Taduran")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.277778c0.chunk.js.map