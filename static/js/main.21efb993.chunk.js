(this.webpackJsonpresch1=this.webpackJsonpresch1||[]).push([[0],{110:function(e,t,a){},112:function(e,t,a){},116:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(10),i=a(54),u=a(9),s=a.n(u),d=(a(91),a(31)),m=a.n(d),f=a(41),E=a(82),v=a(42),p=a.n(v),h=a(73),b=a(39),g=function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,null,[{key:"mergeAssociatedEvents",value:function(e){return e.forEach((function(t,a){if(a!==e.length&&0!==a)for(;e[a].summary===e[a-1].summary&&s()(e[a].dtend).date()===s()(e[a-1].dtend).date();)e[a-1].dtend=e[a].dtend,e.splice(a,1)})),e}},{key:"transformToApiEvent",value:function(e){return e.map((function(e){return{allDay:!1,title:e.summary.replace(/\\;/g," | "),start:s()(e.dtstart).toDate(),end:s()(e.dtend).toDate()}}))}}]),e}(),O=s()();O.locale("de");var j,x={isLoading:!1,eventData:[],dateContext:O,today:O.date(),month:O.month()+1,year:O.year(),setIsLoading:function(e){},setEventData:function(e){},setDateContext:function(e){},setToday:function(e){},setMonth:function(e){},setYear:function(e){}},y=r.a.createContext(x),w=function(){return Object(n.useContext)(y)},D=(a(110),a(111),a(112),a(121)),k=a(51),S=a.n(k),A=function(e){var t=e.todayWeather;return r.a.createElement("div",{className:"temperature-display"},r.a.createElement("p",null,r.a.createElement("span",{style:{color:"rgba(255,91,107,0.71)"}},"Hoch:",t[0].temperatureHigh,"C",S.a.decode("&deg")),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"rgba(79,141,255,0.85)"}},"Tief: ",t[0].temperatureLow,"C",S.a.decode("&deg"))))},C=a(74),N=a.n(C),I=function(e){var t=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:"weather-icon",icon:t.toUpperCase().replace(new RegExp("-","g"),"_"),color:"white",autoplay:!0}))},L=function(){return r.a.createElement("div",{id:"error"},r.a.createElement("p",null,r.a.createElement("em",null,"Fehler beim Laden der Daten!")))},Y=function(e){var t=e.label,a=e.date,c=Object(n.useState)(),l=Object(o.a)(c,2),i=l[0],u=l[1],d=Object(n.useState)(!0),E=Object(o.a)(d,2),v=E[0],h=E[1],b=Object(n.useState)(!1),g=Object(o.a)(b,2),O=g[0],j=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://proncal-weather-api.dns-cloud.net/"+s()(a).unix());case 2:t=e.sent,u(t.data.daily.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){return j(e.isAxiosError)})).finally((function(){return h(!1)}))}),[a]),r.a.createElement("div",null,v&&void 0===i?r.a.createElement(D.a,{animation:"grow",variant:"light"}):O?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"inline-block",flexDirection:"row",margin:"5px"}},t,r.a.createElement(I,{icon:i[0].icon})),r.a.createElement(A,{todayWeather:i})))},M=a(122),H=a(124),T=a(125),R=a(76),W=a.n(R),F=a(126),G=r.a.createContext({index:0,setIndex:function(e){}}),P=function(){return Object(n.useContext)(G)},B=function(e){var t=e.children,a=Object(n.useState)(0),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(G.Provider,{value:{index:l,setIndex:i}},t)},z=function(e){var t=e.content,a=P().index;return r.a.createElement(F.a,{className:"carouselA",activeIndex:a,onSelect:function(){},interval:null,prevIcon:null,nextIcon:null,indicators:!1,controls:!1,touch:!0},t.map((function(e,t){return r.a.createElement(F.a.Item,{key:t},e)})))};!function(e){e[e.HOMEPAGE=0]="HOMEPAGE",e[e.CALENDAR=1]="CALENDAR"}(j||(j={}));var J=function(){var e=P(),t=e.index,a=e.setIndex;return r.a.createElement(H.a,{bg:"dark",variant:"dark",sticky:"top",as:"div"},r.a.createElement(H.a.Brand,{onClick:function(){t===j.CALENDAR&&a(t-1)}},r.a.createElement("img",{alt:"failed to load logo",src:W.a,width:"30",height:"30",className:"d-inline-block align-top mr-4"}),"HWR Berlin - Stundenplan"),t===j.CALENDAR&&r.a.createElement(T.a.Link,{style:{color:"lightgray"},onClick:function(){return a(t-1)}},"Zur\xfcck"))},Z=a(123),q=a(78),K=a.n(q),U=function(){var e=P(),t=e.setIndex,a=e.index;return r.a.createElement(Z.a,{className:"home-container"},r.a.createElement(Z.a,{className:"homepage-presentment-container"},r.a.createElement("div",{id:"homepage-presentment-text"},r.a.createElement("h1",null,"HWR - Kalender"),r.a.createElement("h4",null," Dein moderner Stundenplan "),r.a.createElement("h5",null," Immer, \xdcberall ")),r.a.createElement("div",{id:"homepage-presentment-button",onClick:function(){a===j.HOMEPAGE&&setTimeout((function(){t(a+1)}),300)}},r.a.createElement("img",{src:K.a,alt:"Fehler beim laden des logos",className:"calendar-icon"}))))},V=a(79),$=a(26),_=(a(116),[r.a.createElement(U,null),r.a.createElement((function(e){var t=e.children,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(O),s=Object(o.a)(u,2),d=s[0],v=s[1],h=Object(n.useState)(O.date()),b=Object(o.a)(h,2),j=b[0],x=b[1],w=Object(n.useState)(O.month()+1),D=Object(o.a)(w,2),k=D[0],S=D[1],A=Object(n.useState)(O.year()),C=Object(o.a)(A,2),N=C[0],I=C[1],L=Object(n.useState)(!1),Y=Object(o.a)(L,2),M={isLoading:Y[0],eventData:l,dateContext:d,today:j,month:k,year:N},H={setIsLoading:Y[1],setEventData:i,setDateContext:v,setToday:x,setMonth:S,setYear:I},T=Object(E.a)({},M,{},H);return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.request({method:"GET",url:"https://hwr-wi-204.sagebiels.org/api/v1/events"});case 2:t=e.sent,console.log(t),i(g.mergeAssociatedEvents(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){console.log(e)}))}),[]),r.a.createElement(y.Provider,{value:T},t)}),null,r.a.createElement((function(){var e=w(),t=e.eventData,a=e.dateContext,c=Object(i.b)(s.a),l=Object(n.useState)(void 0),u=Object(o.a)(l,2),d=u[0],m=u[1];return Object(n.useEffect)((function(){m(g.transformToApiEvent(t))}),[t]),r.a.createElement("div",null,d?r.a.createElement(i.a,{localizer:c,events:d,defaultView:"week",views:["day","week"],endAccessor:"end",startAccessor:"start",timeslots:12,step:5,min:new Date(1,1,1,8),max:new Date(1,1,1,22),components:{event:function(e){return t=e,r.a.createElement("div",{className:"event-card"},t.title);var t},timeGutterHeader:function(){return null},week:{header:function(e){return s()(e.date).week()===a.week()?r.a.createElement("div",{className:"rbc-header"},r.a.createElement(Y,{label:e.label,date:e.date})):r.a.createElement("div",null,e.label,r.a.createElement("p",{className:"weather-forecast-not"},"Wettervoraussage in: ",s.a.duration(s()(e.date).diff(a)).asDays().toFixed(0)+" ","Tagen"))}}}}):r.a.createElement(M.a,{variant:"info",animated:!0}))}),null),r.a.createElement((function(){var e=w(),t=e.eventData,a=e.isLoading,c=Object(n.useState)(),l=Object(o.a)(c,2),i=l[0],u=l[1],d=Object(n.useState)(),m=Object(o.a)(d,2),f=m[0],E=m[1],v=Object(n.useState)(),p=Object(o.a)(v,2),h=p[0],b=p[1];return Object(n.useEffect)((function(){void 0!==t[0]&&(u(s()(t[0].dtstart)),E(s()(t[t.length-1].dtend)),b(s()(t[t.length-1].dtend).from(s()(t[0].dtstart),!0)))}),[a,t]),r.a.createElement("div",null,!a&&void 0!==f&&void 0!==i&&r.a.createElement("div",{className:"calendar-metadata-container"},r.a.createElement("h5",null,"Semesterstart: ",r.a.createElement("b",null,null===i||void 0===i?void 0:i.format("DD.MM.YYYY"))),r.a.createElement("h5",null,"Semesterende: ",r.a.createElement("b",null,null===f||void 0===f?void 0:f.format("DD.MM.YYYY"))),r.a.createElement("h5",null,"Zeit bis zum Semesterende: ",r.a.createElement("b",null,h))))}),null))]),Q=function(){return r.a.createElement(V.a,{basename:"/proncal"},r.a.createElement($.a,{exact:!0,path:"/"},r.a.createElement(B,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(z,{content:_})))),r.a.createElement("footer",{id:"footer"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a.p+"static/media/hwr-logo-alt.244061df.svg"},78:function(e,t,a){e.exports=a.p+"static/media/calendar.cd46548e.png"},84:function(e,t,a){e.exports=a(119)}},[[84,1,2]]]);
//# sourceMappingURL=main.21efb993.chunk.js.map