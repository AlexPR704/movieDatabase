(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(20),a(2)),s=a(14),i=a(3),u=a.n(i);var m=function(e){var t=e.handleInput,a=e.search;return r.a.createElement("section",{className:"seachbox-wrap"},r.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"searchbox",onChange:t,onKeyPress:a}))};var p=function(e){var t=e.result,a=e.openPopup;return r.a.createElement("div",{className:"result",onClick:function(){return a(t.imdbID)}},r.a.createElement("img",{src:t.Poster}),r.a.createElement("h3",null,t.Title))};var d=function(e){var t=e.results,a=e.openPopup;return r.a.createElement("section",{className:"results"},t.map((function(e){return r.a.createElement(p,{key:e.imdbID,result:e,openPopup:a})})))};var h=function(e){var t=e.selected,a=e.closePopup;return r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.Title," ",r.a.createElement("span",null,"(",t.Year,")")),r.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.Poster}),r.a.createElement("p",null,t.Plot)),r.a.createElement("button",{className:"close",onClick:a},"Close")))};var v=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(s.a)(e,2),a=t[0],c=t[1],l="http://www.omdbapi.com/?apikey=trilogy";return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Movie Database")),r.a.createElement("main",null,r.a.createElement(m,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&u()(l+"&s="+a.s).then((function(e){var t=e.data.Search;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{results:t})}))}))}}),r.a.createElement(d,{results:a.results,openPopup:function(e){u()(l+"&i="+e).then((function(e){var t=e.data;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof a.selected.Title&&r.a.createElement(h,{selected:a.selected,closePopup:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.9282f8e0.chunk.js.map