!function(e){function t(t){for(var n,c,o=t[0],u=t[1],i=t[2],m=0,p=[];m<o.length;m++)c=o[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);p.length;)p.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={1:0},l=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var l,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=function(e){return c.p+""+e+".bc8445ff796d8f81edcd.js"}(e);var u=new Error;l=function(t){o.onerror=o.onload=null,clearTimeout(i);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+l+")",u.name="ChunkLoadError",u.type=n,u.request=l,a[1](u)}r[e]=void 0}};var i=setTimeout((function(){l({type:"timeout",target:o})}),12e4);o.onerror=o.onload=l,document.head.appendChild(o)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="http://localhost:3000/",c.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=u;l.push([33,2]),a()}({10:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext();t.a=r},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a(7),o=a(3),u=a(2),i=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Page not found"),r.a.createElement("p",{className:"lead"},"The page you're looking for doesn't exist. ",r.a.createElement(u.a,{to:"/"},"Try from here")))},s=a(9),m=function(){var e=Object(c.h)();return r.a.createElement(s.a,null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"We have access to the current path from any component using ",r.a.createElement("code",null,"useRouteMatch()"),": ",e.url),r.a.createElement("p",null,r.a.createElement(u.a,{to:"/about"},"Link to about test")))},p=function(){return r.a.createElement(s.a,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,r.a.createElement(u.a,{to:"/"},"Link to home test")))},f=function(){return r.a.createElement(s.a,null,r.a.createElement("p",{className:"lead"},"Loading.... ",r.a.createElement("i",{className:"fa fa-spin fa-sync"})))},d=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,194))})),v=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,192))})),b=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,193))})),h=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(7)]).then(a.bind(null,195))})),E=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:m}),r.a.createElement(c.a,{exact:!0,path:"/about",component:p}),r.a.createElement(c.a,{exact:!0,path:"/people",component:d}),r.a.createElement(c.a,{exact:!0,path:"/people/:id",component:v}),r.a.createElement(c.a,{exact:!0,path:"/people/:id/edit",component:b}),r.a.createElement(c.a,{exact:!0,path:"/chart",component:h}),r.a.createElement(c.a,{component:i})))},g=a(6),y=a.n(g),x=a(10),O=function(e){var t=e.children,a=Object(n.useState)(null),l=y()(a,2),c=l[0],o=l[1],u=Object(n.useState)(null),i=y()(u,2),s=i[0],m=i[1],p=Object(n.useState)(!1),f=y()(p,2),d=f[0],v=f[1],b=Object(n.useState)(0),h=y()(b,2),E=h[0],g=h[1],O=Object(n.useState)(!1),j=y()(O,2),N=j[0],P=j[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=Math.round(100*Math.random());g(e),console.log("AppContext.Provider: interval, data changed to: ".concat(e))}),5e3);return function(){console.log("AppContext.Provider: cleanup"),clearInterval(e)}}),[]),r.a.createElement(x.a.Provider,{value:{user:c,account:s,authenticated:d,backgroundUpdateData:E,busy:N,setBusy:function(e){P(e)},refresh:function(){P(!0),setTimeout((function(){console.log("AppContext.Provider: manual refresh"),P(!1),o({username:"fred"}),m({accountId:"123F"}),v(!0)}),1e3)}}},t)},j=(a(32),Object(o.a)()),N=document.querySelector("#main");Object(l.render)(r.a.createElement(O,null,r.a.createElement(c.b,{history:j},r.a.createElement(E,null))),N)},9:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=a(2),u=a(10),i=function(){var e=Object(n.useContext)(u.a),t=e.user,a=e.refresh,l=e.busy;return t?r.a.createElement("span",{className:"nav-text mr-3"},"Hi ",null==t?void 0:t.username,"!"):r.a.createElement("span",{className:"nav-text mr-3"},l?r.a.createElement("i",{className:"fa fa-spin fa-sync"}):r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a()}},"Login"))},s=function(){var e=Object(n.useContext)(u.a).backgroundUpdateData;return r.a.createElement("span",{className:"nav-text mr-3"},r.a.createElement("code",null,"random: ",e))},m=function(){var e=Object(n.useState)(!1),t=c()(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.a,{className:"navbar-brand",to:"/"},"React Sandbox"),r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(){l(!a)},"aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ".concat(a?"show":"")},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",exact:!0,className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/people",exact:!0,className:"nav-link"},"People")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/chart",exact:!0,className:"nav-link"},"Test Chart (code splitting)")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/about",exact:!0,className:"nav-link"},"About"))),r.a.createElement(s,null),r.a.createElement(i,null),r.a.createElement("span",{className:"nav-text"},"v1.0.0")))};t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement(m,null)),r.a.createElement("div",{role:"main","data-hook":"main",className:"container mt-4"},t))}}});