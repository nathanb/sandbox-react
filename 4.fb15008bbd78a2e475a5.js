(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(e,t,n){var r=n(103),a=n(104),o=n(105);e.exports=function(e){return r(e)||a(e)||o()}},103:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},104:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},105:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},194:function(e,t,n){"use strict";n.r(t);var r=n(38),a=n.n(r),o=n(102),c=n.n(o),u=n(39),l=n.n(u),s=n(6),i=n.n(s),p=n(0),f=n.n(p),d=n(9),m=n(11),v=n.n(m),h=n(2),y=function(e){var t=e.person;return f.a.createElement("tr",null,f.a.createElement("td",null,f.a.createElement(h.a,{to:"/people/".concat(t.id)},t.name)),f.a.createElement("td",null,t.age),f.a.createElement("td",null,t.hasHair?"Yes":""),f.a.createElement("td",null,t.hairColor),f.a.createElement("td",null,t.randomField))};y.propTypes={person:v.a.object.isRequired};var b=y,E=function(e){var t=e.data;return f.a.createElement("div",null,t.length?f.a.createElement("table",{className:"table table-striped"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Name"),f.a.createElement("th",null,"Age"),f.a.createElement("th",null,"Has Hair"),f.a.createElement("th",null,"Hair Color"),f.a.createElement("th",null,"randomField"))),f.a.createElement("tbody",null,t.map((function(e,t){return f.a.createElement(b,{key:t,person:e})})))):f.a.createElement("span",null,"No people to display"))};E.propTypes={data:v.a.array.isRequired};var g=E,x=function(e){var t=e.refresh,n=e.addPerson,r=e.people;return f.a.createElement("p",null,f.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){t()}},"Refresh"),f.a.createElement("button",{className:"btn btn-secondary",onClick:function(){n(r.length)}},"Add"))};x.propTypes={refresh:v.a.func.isRequired,addPerson:v.a.func.isRequired,people:v.a.array.isRequired};var j=x,w=n(45),O=n(42);t.default=function(){var e=Object(p.useState)([]),t=i()(e,2),n=t[0],r=t[1],o=Object(p.useState)(null),u=i()(o,2),s=u[0],m=u[1],v=Object(p.useState)(!1),h=i()(v,2),y=h[0],b=h[1],E=Object(p.useState)(null),x=i()(E,2),k=x[0],P=x[1];function A(){return N.apply(this,arguments)}function N(){return(N=l()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("loading..."),b(!0),P(null),e.next=5,Object(w.a)("/people.json");case 5:(t=e.sent).ok?(r(t.json),m(null),b(!1)):P(t.errorMessage);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=l()(a.a.mark((function e(t){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(null),o={id:+n[n.length-1].id+1+"",name:"George",age:30+t},r([].concat(c()(n),[o]));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){console.log("PeoplePage: useEffect onload only, denoted by: []"),A()}),[]),f.a.createElement(d.a,null,f.a.createElement("h1",null,"People"),f.a.createElement(O.a,{message:k}),f.a.createElement(j,{addPerson:S,people:n,refresh:A}),f.a.createElement(g,{data:n}),f.a.createElement("p",null,s,y?f.a.createElement("i",{className:"fa fa-spin fa-sync"}):null))}},42:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=function(e){var t=e.message,n=e.type;return t?a.a.createElement("div",{className:"alert alert-".concat(n)},t):null};o.defaultProps={type:"danger"},t.a=o},44:function(e,t,n){var r=n(46),a=n(40),o=n(55),c=n(57),u=Object.prototype,l=u.hasOwnProperty,s=r((function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&o(t[0],t[1],s)&&(r=1);++n<r;)for(var i=t[n],p=c(i),f=-1,d=p.length;++f<d;){var m=p[f],v=e[m];(void 0===v||a(v,u[m])&&!l.call(e,m))&&(e[m]=i[m])}return e}));e.exports=s},45:function(e,t,n){"use strict";var r=n(38),a=n.n(r),o=n(39),c=n.n(o),u=n(44),l=n.n(u);function s(){return(s=c()(a.a.mark((function e(t){var n,r,o,c,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r={},e.prev=2,o=l()(n,{method:"GET",headers:{"Content-type":"application/json"}}),void 0!==n.json&&(o.body=JSON.stringify(n.json)),e.next=7,fetch(t,o);case 7:return c=e.sent,r.response=c,r.status=c.status,r.ok=c.ok,e.next=13,c.json();case 13:r.json=e.sent,r.errorMessage=r.json.error,e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),r.error=e.t0,r.errorMessage=e.t0.message;case 21:return e.abrupt("return",r);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},46:function(e,t,n){var r=n(43),a=n(47),o=n(49);e.exports=function(e,t){return o(a(e,t,r),e+"")}},47:function(e,t,n){var r=n(48),a=Math.max;e.exports=function(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){for(var o=arguments,c=-1,u=a(o.length-t,0),l=Array(u);++c<u;)l[c]=o[t+c];c=-1;for(var s=Array(t+1);++c<t;)s[c]=o[c];return s[t]=n(l),r(e,this,s)}}},48:function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},49:function(e,t,n){var r=n(50),a=n(54)(r);e.exports=a},50:function(e,t,n){var r=n(51),a=n(52),o=n(43),c=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:o;e.exports=c},51:function(e,t){e.exports=function(e){return function(){return e}}},52:function(e,t,n){var r=n(34),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=a},54:function(e,t){var n=Date.now;e.exports=function(e){var t=0,r=0;return function(){var a=n(),o=16-(a-r);if(r=a,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},55:function(e,t,n){var r=n(40),a=n(41),o=n(56),c=n(36);e.exports=function(e,t,n){if(!c(n))return!1;var u=typeof t;return!!("number"==u?a(n)&&o(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},57:function(e,t,n){var r=n(63),a=n(59),o=n(41);e.exports=function(e){return o(e)?r(e,!0):a(e)}},59:function(e,t,n){var r=n(36),a=n(64),o=n(60),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=a(e),n=[];for(var u in e)("constructor"!=u||!t&&c.call(e,u))&&n.push(u);return n}},60:function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}}}]);