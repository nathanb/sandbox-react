(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(t,e,n){"use strict";n.r(e);var a=n(38),r=n.n(a),c=n(74),s=n.n(c),u=n(39),o=n.n(u),i=n(8),l=n.n(i),f=n(0),p=n.n(f),m=n(9),d=n(11),h=n.n(d),g=n(100),y=n(191),v=n(42),x=(n(118),n(65)),b=n(119),w=n.n(b),k=n(97),j=n.n(k),E=function(t){var e=t.sourceData,n=t.groupKey,a=t.metricKey,c=t.colorScheme,s=t.title,u=Object(f.useState)({message:null,type:"info"}),i=l()(u,2),m=i[0],d=i[1],h=Object(f.useRef)(null),b=null,k=null;function E(){return(E=o()(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/counties-albers-10m.json");case 2:if(!(c=t.sent).ok){t.next=12;break}return t.next=6,c.json();case 6:b=t.sent,(k=new Map(e.map((function(t){return[j()(t,n,""),j()(t,a,0)]})))).title=s,S(),t.next=13;break;case 12:d({message:c.errorMessage});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){var t=x.b(".1%"),n=g.geoPath(),r=a,u=w()(e,(function(t,e){return e[r]+t}),0)/e.length,o=e.filter((function(t){return t[r]>u})),i=w()(o,(function(t,e){return e[r]+t}),0)/o.length;o=null;var l=g.scaleQuantize([0,i],g[c][9]),f=g.select(h.current).attr("viewBox","0 0 960 600").style("width","100%").style("height","auto");f.append("g").attr("transform","translate(600,40)").call((function(e){var n=g.scaleLinear().domain(g.extent(l.domain())).rangeRound([0,260]);e.selectAll("rect").data(l.range().map((function(t){return l.invertExtent(t)}))).join("rect").attr("height",8).attr("x",(function(t){return n(t[0])})).attr("width",(function(t){return n(t[1])-n(t[0])})).attr("fill",(function(t){return l(t[0])})),e.append("text").attr("x",n.range()[0]).attr("y",-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(s),e.call(g.axisBottom(n).tickSize(20).tickFormat((function(e){return t(e)})).tickValues(l.range().slice(1).map((function(t){return l.invertExtent(t)[0]})))).select(".domain").remove()}));var p=b.objects.counties;f.append("g").selectAll("path").data(y.a(b,p).features).join("path").attr("fill",(function(t){return l(k.get(t.id)||0)})).attr("d",n).append("title").text((function(e){return"".concat(e.properties.name,", ").concat(t(k.get(e.id)))})),f.append("path").datum(y.b(b,b.objects.states,(function(t,e){return t!==e}))).attr("fill","none").attr("stroke","white").attr("stroke-linejoin","round").attr("d",n)}return Object(f.useEffect)((function(){e&&function(){E.apply(this,arguments)}()}),[e]),p.a.createElement("div",null,m.message?p.a.createElement(v.a,{message:m.message,type:m.type}):null,p.a.createElement("svg",{ref:h,className:"geo"}))};E.propTypes={sourceData:h.a.array.isRequired,byCounty:h.a.bool.isRequired,metricKey:h.a.string.isRequired,colorScheme:h.a.string.isRequired,title:h.a.string},E.defaultProps={byCounty:!1,colorScheme:"schemeBlues",title:""};var S=E;e.default=function(){var t=Object(f.useState)([]),e=l()(t,2),n=e[0],a=e[1],c=Object(f.useState)(null),u=l()(c,2),i=u[0],d=u[1];function h(){return(h=o()(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/unemployment-x.csv");case 2:if(!(e=t.sent).ok){t.next=10;break}return t.next=6,e.text();case 6:n=t.sent,a(g.csvParse(n,(function(t){return{id:t.id,rate:+t.rate/100}}))),t.next=11;break;case 10:d("Failed to load data CSV; Response code: ".concat(e.statusCode));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(f.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),p.a.createElement(m.a,null,p.a.createElement("h1",null,"Test Geo Chart"),p.a.createElement(v.a,{message:i}),p.a.createElement(S,s()({sourceData:n,title:"Test chart",groupKey:"id",metricKey:"rate",byCounty:!0},"title","Unemployment rate (%)")))}},42:function(t,e,n){"use strict";var a=n(0),r=n.n(a),c=function(t){var e=t.message,n=t.type;return e?r.a.createElement("div",{className:"alert alert-".concat(n)},e):null};c.defaultProps={type:"danger"},e.a=c}}]);