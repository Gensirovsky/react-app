(()=>{var e,t={696:(e,t,r)=>{"use strict";var n=r(7378),a=r(1542),l=r(3809),i=r.n(l);function o(e){return n.createElement("div",{className:"weather-app__search-bar"},n.createElement("img",{className:"image",src:i()}),n.createElement("input",{type:"text",placeholder:"City",onKeyPress:function(t){return e.handleKeyPress(t)}}))}var c=r(3406),s=r.n(c);function u(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"city-​​not-found"},n.createElement("p",{className:" slideSource"},"Сity ​​not found")),n.createElement("div",{className:"weather-app__header"},n.createElement(o,{handleKeyPress:e.handleKeyPress}),n.createElement("img",{src:s(),alt:"moon",className:"weather-app__header-img"}),n.createElement("div",{className:"weather-app__title"},n.createElement("h2",null,"Weather"))))}const d=n.createContext();function m(e){var t=(0,n.useContext)(d).weatherStatus;return n.createElement("div",{className:"weather-hour",onClick:function(){return e.handlerDetails(e.weatherDataHour)}},n.createElement("div",{className:"weather-hour__time"},e.weatherDataHour.dt_txt.slice(11,16)),n.createElement("div",{className:"weather-hour__status-img"},n.createElement("img",{src:t(e.weatherDataHour),alt:"sun"})),n.createElement("div",{className:"weather-hour__temperature"},Math.round(e.weatherDataHour.main.temp),"°С"))}var f=r(1892),h=r.n(f),p=r(5760),v=r.n(p),y=r(8311),_=r.n(y),g=r(8192),E=r.n(g),b=r(8060),w=r.n(b),k=r(4865),N=r.n(k),S=r(1586),O={};O.styleTagTransform=N(),O.setAttributes=E(),O.insert=_().bind(null,"head"),O.domAPI=v(),O.insertStyleElement=w();h()(S.Z,O);S.Z&&S.Z.locals&&S.Z.locals;function D(){return n.createElement("div",{className:"lds-dual-ring"})}var x=r(1990),A=r.n(x),j=r(6156),L=r.n(j),C=r(1791),T=r.n(C),P=r(4203),I=r.n(P),M=r(5570),H=r.n(M),q=r(3944),F=r.n(q);function W(e){var t=(0,n.useContext)(d),r=t.daysOfWeek,a=t.weatherStatus;function l(){return n.createElement("div",{className:"weather-hour-detail__line"})}return e.hourDetail?n.createElement("div",{className:"weather-hour-detail weather-app__carousel-content"},n.createElement("div",{className:"weather-hour-detail__detail"},n.createElement("div",{className:"weather-hour-detail__temperature detail-p"},n.createElement("div",{className:"weather-hour-detail__image"},n.createElement("img",{src:A(),alt:"temperature"})),n.createElement("div",{className:"weather-hour-detail__title"},"Temperature"),n.createElement("div",null,"Average ",Math.round(e.hourDetail.main.temp),"°C"),n.createElement("div",null,"Feels like ",Math.round(e.hourDetail.main.feels_like),"°C")),n.createElement("div",{className:"weather-hour-detail__wind detail-p"},n.createElement("div",{className:"weather-hour-detail__image"},n.createElement("img",{src:I(),alt:"wind"})),n.createElement("div",{className:"weather-hour-detail__title"},"Wind"),n.createElement("div",null,"Speed ",e.hourDetail.wind.speed," m/s")),n.createElement("div",{className:"weather-hour-detail__pressure detail-p"},n.createElement("div",{className:"weather-hour-detail__image"},n.createElement("img",{src:F(),alt:"pressure"})),n.createElement("div",{className:"weather-hour-detail__title"},"Pressure"),n.createElement("div",null,e.hourDetail.main.pressure,' pressure unit "hPa"')),n.createElement("div",{className:"weather-hour-detail__humidity detail-p"},n.createElement("div",{className:"weather-hour-detail__image"},n.createElement("img",{src:T(),alt:"umbrella"})),n.createElement("div",{className:"weather-hour-detail__title"},"Humidity"),n.createElement("div",null,e.hourDetail.main.humidity,"%")),n.createElement("div",{className:"weather-hour-detail__pop detail-p"},n.createElement("div",{className:"weather-hour-detail__image"},n.createElement("img",{src:L(),alt:"drop"})),n.createElement("div",{className:"weather-hour-detail__title"},"Rainfall"),n.createElement("div",null,e.hourDetail.pop,"%")),n.createElement("div",{className:"weather-hour-detail__cloudy detail-p"},n.createElement("div",{className:"weather-hour-detail__image"},n.createElement("img",{src:H(),alt:"cloud"})),n.createElement("div",{className:"weather-hour-detail__title"},"Cloudy"),n.createElement("div",null,e.hourDetail.clouds.all,"%"))),n.createElement(l,null),n.createElement("div",{className:"weather-hour-detail__header-container"},n.createElement("div",{className:"weather-hour-detail__header"},n.createElement("div",{className:"weather-hour-detail__city"},e.city),n.createElement("div",{className:"weather-hour-detail__day"},r(e.hourDetail)),n.createElement("div",{className:"weather-hour-detail__date"},e.hourDetail.dt_txt.slice(0,11)),n.createElement("div",{className:"weather-hour-detail__time"},e.hourDetail.dt_txt.slice(11,16))),n.createElement("div",{className:"weather-hour-detail__img-status"},n.createElement("div",{className:"weather-hour-detail__img"},n.createElement("img",{src:a(e.hourDetail),alt:""})))),n.createElement("div",{className:"close",onClick:function(){return e.closeDetail()}})):null}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(e){var t=$((0,n.useState)(null),2),r=t[0],a=t[1],l=document.querySelector("#weather-today-carousel"),i=(0,n.useContext)(d).daysOfWeek;function o(e){a(e),l.style.transition="margin-left 0.5s",l.style.marginLeft="-100%"}function c(){return n.createElement("div",{className:"weather-hour__line weather-hour__line--small"})}function s(){return n.createElement("div",{className:"weather-hour__line"})}return n.createElement("div",{className:"weather-app__weather-today-container"},n.createElement("div",{className:"weather-app__weather-today-carousel-container",id:"weather-today-carousel"},n.createElement("div",{className:"weather-app__weather-today-content weather-app__carousel-content"},n.createElement("div",{className:"weather-app__weather-today-title"},n.createElement("h3",{className:"weather-app__weather-today-city"},e.city),n.createElement("span",{className:"weather-app__weather-today-day"},e.weatherData?i(e.weatherData[0]):null),n.createElement("div",{className:"weather-app__weather-today-date"},e.weatherData?e.weatherData[0].dt_txt.slice(0,10):null)),n.createElement("div",{className:"weather-app__weather-today"},n.createElement(c,null),e.weatherData?e.weatherData.slice(0,8).map((function(e,t){return[n.createElement(m,{weatherDataHour:e,handlerDetails:o,key:t}),7!=t?n.createElement(s,{key:t+2}):null]})):n.createElement(D,null),n.createElement(c,null))),n.createElement(W,{hourDetail:r,city:e.city,closeDetail:function(){l.style.transition="margin-left 0.5s",l.style.marginLeft="0"}})))}function Z(e){var t=e.weatherDay,r=t[5],a=(0,n.useContext)(d),l=a.daysOfWeek,i=a.weatherStatus;return n.createElement("div",{className:"weather-day-card",onClick:function(r){var n,a;(a=document.querySelector("#weather-today-carousel")).style.transition="margin-left 0.5s",a.style.marginLeft="0",e.setWeatherData(t),(n=r.target.closest(".weather-day-card")).closest(".select-border")?n.classList.remove("select-border"):(document.querySelectorAll(".weather-day-card").forEach((function(e){return e.classList.remove("select-border")})),n.classList.add("select-border"))}},n.createElement("div",{className:"weather-day-card-animation"},n.createElement("div",{className:"weather-day-card__temperature incard"},n.createElement("div",{className:"card-img-container"},n.createElement("img",{src:A(),alt:"temperature"})),n.createElement("span",null,Math.round(r.main.temp),"°C")),n.createElement("div",{className:"weather-day-card__drop incard"},n.createElement("div",{className:"card-img-container"},n.createElement("img",{src:L(),alt:"drop"})),n.createElement("span",null,Math.round(r.main.humidity),"%")),n.createElement("div",{className:"weather-day-card__humidity incard"},n.createElement("div",{className:"card-img-container"},n.createElement("img",{src:T(),alt:"umbrella"})),n.createElement("span",null,Math.round(100*r.pop),"%")),n.createElement("div",{className:"weather-day-card__wind incard"},n.createElement("div",{className:"card-img-container"},n.createElement("img",{src:I(),alt:"wind"})),n.createElement("span",null,r.wind.speed.toFixed(1),"m/s")),n.createElement("div",{className:"weather-day-card__status"},n.createElement("img",{className:"weather-day-card__status-img",src:i(r),alt:"sun"}),n.createElement("h3",{className:"weather-day-card__title"},l(t[0])))))}function B(e){var t=e.weatherData;return t?n.createElement("div",{className:"weather-app__weather-week"},function(){var r=[];if(t)for(var a=new Date(e.weatherData[0].dt_txt).getDay(),l=0;l<=t.length-8;l++){var i=new Date(t[l].dt_txt).getDay();a!==i&&(a=i,r.push(n.createElement(Z,{setWeatherData:e.setWeatherData,weatherDay:t.slice(l,l+8),dayNum:a,key:l})))}return r}()):null}var R=r(8768),V=r.n(R),z=r(6679),G=r.n(z),J=r(2150),Q=r.n(J),X=r(3155),Y=r.n(X),ee=r(8846),te=r.n(ee);function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ae(){var e=re((0,n.useState)("Lviv"),2),t=e[0],r=e[1],a=re((0,n.useState)("Lviv"),2),l=a[0],i=a[1],o=re((0,n.useState)(null),2),c=o[0],s=o[1],m=re((0,n.useState)(null),2),f=m[0],h=m[1],p=document.querySelector("#weather-today-carousel"),v=re((0,n.useState)(null),2),y=v[0],_=v[1],g=re((0,n.useState)(!1),2),E=g[0],b=g[1];function w(e,t){var r=window.getComputedStyle(e,null).getPropertyValue("margin-left");parseInt(r)<0?t():E||(b(!0),setTimeout((function(){b(!1)}),750),e.style.transition="margin-top 0.3s",e.style.marginTop="100%",setTimeout((function(){e.style.transition="margin-top 0s",e.style.marginTop="-100%",t(),setTimeout((function(){e.style.transition="margin-top 0.3s",e.style.marginTop="0"}),100)}),300))}return(0,n.useEffect)((function(){var e="https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&appid=b54007d1a20d9e5b6402cbb67162c324");fetch(e).then((function(e){if(!e.ok)throw console.log(e.status),Error(e.status);return e.json()})).then((function(e){s(e.list),h(e.list),i(t),document.querySelectorAll(".weather-day-card-animation").forEach((function(e){e.classList.remove("select-border"),e.classList.add("opacity"),setTimeout((function(){e.classList.remove("opacity")}),500)})),w(document.querySelector("#weather-today-carousel"),(function(){}))})).catch((function(e){var t;(t=document.querySelector(".slideSource")).classList.add("fade"),setTimeout((function(){t.classList.remove("fade")}),4e3)}))}),[t]),n.createElement("div",{className:"weather-app"},n.createElement(u,{handleKeyPress:function(e){if("Enter"===e.key){var t=e.target.value.split("").map((function(e,t){return 0===t?e.toUpperCase():e.toLowerCase()})).join("");r(t)}}}),n.createElement(d.Provider,{value:{daysOfWeek:function(e){return{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}[new Date(e.dt_txt).getDay()]},weatherStatus:function(e){var t=e.dt_txt.slice(11,13),r=e.weather[0].id;switch(!0){case r<=299:return Y();case r<=599:return G();case r<=700:return Q();case r<=799:return I();case r<=800:return t>=6&&t<21?V():te();case r<=1e3:return H()}}}},n.createElement(K,{weatherData:c,city:l}),n.createElement(B,{weatherData:f,setWeatherData:function(e){var t=f.slice(0,8);if(e[0].dt_txt===y)return w(p,(function(){return s(t)})),void _(f[0].dt_txt);w(p,(function(){return s(e)})),_(e[0].dt_txt)}})))}function le(){return n.createElement(n.StrictMode,null,n.createElement(ae,null))}a.render(n.createElement(le,null),document.getElementById("weather-app"));var ie=r(6794),oe=r.n(ie),ce=r(4380),se=r.n(ce);ue=!1;var ue,de=r(4910),me=r.n(de),fe=r(9419),he=r.n(fe),pe=r(4620),ve=r.n(pe);const ye=function(e){var t=e.item;function r(e){return e.target.closest(".todos-do__sub-menu").querySelectorAll(".todos-do__sub-menu-mark")}return n.createElement("div",{className:"todos-do__sub-menu"},n.createElement("div",{className:"todos-do__sub-menu-content"},t.mark?t.mark.map((function(e,t){return n.createElement("span",{className:"todos-do__sub-menu-mark",onClick:function(e){e.target.classList.toggle("cls-mark")},key:t},e)})):n.createElement("div",{className:"todos-do__sub-menu-without-content"},"empty")),n.createElement("div",{className:"todos-do__sub-menu-btn-del todos-do__sub-menu-btn",onClick:function(e){!function(e){r(e).forEach((function(e){e.classList.contains("cls-mark")&&e.remove()}))}(e)}},n.createElement("img",{src:he(),alt:"",title:"Remove marks"})),n.createElement("div",{className:"todos-do__sub-menu-btn-del-todo todos-do__sub-menu-btn",onClick:function(e){!function(e){e.target.closest(".todos-do").remove()}(e)}},n.createElement("img",{src:ve(),alt:"",title:"Remove todo"})),n.createElement("div",{className:"todos-do__sub-menu-btn-cls todos-do__sub-menu-btn",onClick:function(e){return function(e){r(e).forEach((function(e){e.classList.remove("cls-mark")})),e.target.closest(".todos-do").style.marginLeft="0"}(e)}},n.createElement("img",{src:oe(),alt:""})))};var _e=r(6855),ge=r.n(_e),Ee=["item","isFiltered"];function be(e){return function(e){if(Array.isArray(e))return De(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Oe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){Ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||Oe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e,t){if(e){if("string"==typeof e)return De(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?De(e,t):void 0}}function De(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Ae(e){var t=e.item,r=e.isFiltered,a=xe(e,Ee);if(t.filtered)return null;var l=null;return r||t.children&&t.children.length&&(l=n.createElement("ul",{className:"todos-do__child todos-do visually-hidden"},t.children.map((function(e){return n.createElement(Ae,{item:e,key:e.id,isFiltered:r,dragStartHandler:a.dragStartHandler,dragLeaveHandler:a.dragLeaveHandler,dragEndHandler:a.dragEndHandler,dragOverHandler:a.dragOverHandler,dropHandler:a.dropHandler})})))),n.createElement("li",{className:"todos-do",draggable:!0,onDragStart:function(e){return a.dragStartHandler(e,t)},onDragLeave:function(e){return a.dragLeaveHandler(e,t)},onDragEnd:function(e){return a.dragEndHandler(e)},onDragOver:function(e){return a.dragOverHandler(e)},onDrop:function(e){return a.dropHandler(e,t)}},n.createElement("div",{className:"todos-do__container"},n.createElement("label",{className:"todos-do__checkbox-label checkbox-label"},n.createElement("input",{type:"checkbox",className:"todos-do__checkbox checkbox",onChange:function(e){return function(e){if(e.target.checked){var t=e.target.closest(".todos-do__container").querySelectorAll(".todos-do__checkbox");t.length&&t.forEach((function(e){e.checked=!0}))}}(e)}}),n.createElement("span",{className:"todos-do__checkbox-fake checkbox-fake"}),n.createElement("span",null,t.name)),l?n.createElement("div",{className:"todos-do__btn-down",onClick:function(e){return function(e){var t=e.target.closest(".todos-do__container").parentNode.querySelector("ul");t&&(t.classList.toggle("visually-hidden"),e.target.style.transition="all .25s ease",e.target.style.transform=t.classList.contains("visually-hidden")?"rotate(0deg)":"rotate(-90deg)")}(e)}},n.createElement("img",{src:oe(),className:"todos-do__btn-down-img"})):n.createElement("div",{className:"todos-do__btn-down"}),n.createElement("div",{className:"todos-do__btn-menu",onClick:function(e){return function(e){document.querySelectorAll(".todos-do").forEach((function(e){e.style.transition="margin-left 0.25s ease",e.style.marginLeft="0"}));var t=e.target.closest(".todos-do");t.style.marginLeft="-100%";var r=t.querySelector(".todos-do__child");r&&(r.classList.contains("visually-hidden")||(r.classList.add("visually-hidden"),t.querySelector(".todos-do__btn-down-img").style.transform="rotate(0deg)"))}(e)}},n.createElement("img",{src:me(),alt:""})),n.createElement("div",{className:"todos-do__line"}),l),n.createElement(ye,{item:t}))}const je=function(e){var t=e.todos,r=e.isFiltered,a=e.setListToDo,l=Se((0,n.useState)(null),2),i=l[0],o=l[1],c=Se((0,n.useState)(null),2),s=c[0],u=c[1],d=Se((0,n.useState)(),2),m=d[0],f=d[1];function h(e,t){return e=e.filter((function(e){return e.id!==t.id})).map((function(e){return e.children?ke(ke({},e),{},{children:h(e.children,t)}):e}))}function p(e,t,r){return e=e.map((function(e){return e.id===r.id?ke(ke({},e),{},{children:e.children?[].concat(be(e.children),[ke(ke({},t),{},{child:!0,depth:e.depth+1})]):e.children=[ke(ke({},t),{},{child:!0,depth:e.depth+1})]}):e.children?e.children.length?ke(ke({},e),{},{children:p(e.children,t,r)}):ke(ke({},e),{},{children:null}):e}))}function v(e){return e.target.closest(".todos-do")}function y(e,t){return e.target.closest(".todos-do").querySelector(".todos-do__line").style.backgroundColor=t}function _(e,t){e.stopPropagation(),o(t),u(v(e)),v(e).style.opacity="0.5",e.dataTransfer.setDragImage(m,0,0)}function g(e){y(e,"")}function E(){s.style.opacity="",u(null)}function b(e){e.preventDefault(),s!==v(e)&&y(e,"#98C379")}function w(e,r){if(e.preventDefault(),e.stopPropagation(),r!==i&&(c=!0,r.children?r.children.forEach((function(e){e.id===i.id&&(c=!1)})):c=!0,c)&&(l=r,o=0,(o+=function e(t){var r=1;return t.children&&(r++,t.children.forEach((function(t){var n=e(t)+1;r=Math.max(n,r)}))),r}(i)+l.depth)<4)){var n=h(t,i);a(p(n,i,r))}var l,o,c;y(e,"")}return(0,n.useEffect)((function(){var e=new Image;e.src=se(),e.onload=function(){return f(e)}}),[]),n.createElement("ul",{className:"todo-app__todos"},n.createElement("div",{className:"todo-app__depth-cls",style:s?{display:""}:{display:"none"},onDragOver:function(e){e.preventDefault()},onDrop:function(e){if(e.preventDefault(),1!==i.depth){var r=h(t,i);a([ke(ke({},i),{},{depth:1})].concat(be(r))),u(null)}}},n.createElement("div",{className:"todo-app__depth-cls-img"},n.createElement("img",{src:ge(),alt:"first level"}))),t.map((function(e){return n.createElement(Ae,{item:e,isFiltered:r,key:e.id,dragStartHandler:_,dragLeaveHandler:g,dragEndHandler:E,dragOverHandler:b,dropHandler:w})})))};function Le(e){return function(e){if(Array.isArray(e))return Ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Te(e){var t=e.marks,r=e.divId,a=e.setMarks;return n.createElement("div",{hidden:!0,className:"marks-list",id:r,onClick:function(e){return function(e){"cls"===e.target.id&&(document.querySelector("#"+r).hidden=!0),e.stopPropagation()}(e)}},n.createElement("div",{className:"marks-list__btn-close"},n.createElement("img",{src:ve(),alt:"close",id:"cls"})),n.createElement("h3",{className:"marks-list__title"},"Marks"),n.createElement("form",{className:"marks-list__mark-add",onSubmit:function(e){return function(e){e.preventDefault();var t=e.target.elements.inputMark.value;a((function(e){return[].concat(Le(e),[t])})),document.querySelector("#"+r).hidden=!1,document.querySelector("#"+r).focus()}(e)}},n.createElement("input",{type:"input",name:"inputMark",placeholder:"Add mark",autoComplete:"off",className:"marks-list__mark-add-npt"}),n.createElement("input",{type:"submit",value:"Add",className:"marks-list__mark-add-btn"})),n.createElement("ul",{className:"marks-list__marks-list"},t.map((function(e,t){return n.createElement("li",{key:t},n.createElement("span",{onClick:function(e){return e.target.classList.toggle("add-mark")}},e))}))))}function Pe(e){return function(e){if(Array.isArray(e))return Ie(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ie(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const Me=function(e){var t=e.setListToDo,r=e.marks,a=e.setMarks,l=e.isFiltered;return n.createElement("div",{className:"menu__add"},n.createElement("div",{className:"menu__add__main-container"},n.createElement("form",{action:"",className:"menu__add__form",onSubmit:function(e){return function(e){e.preventDefault();var r=e.target.elements.todoName.value;if(r.length){var n=Array.from(document.querySelectorAll(".add-mark")).map((function(e){return e.innerHTML+" "})),a={id:Date.now(),name:r,depth:1,mark:n.length?n:null,child:!1,children:null,filtered:l};console.log(a),t((function(e){return[].concat(Pe(e),[a])})),e.target.elements.todoName.value=""}}(e)},name:"addTodo"},n.createElement("input",{type:"text",placeholder:"Add task",className:"menu__add__input menu__add__npt",name:"todoName",autoComplete:"off"}),n.createElement("input",{type:"submit",value:"Add",className:"menu__add__submit menu__add__npt"})),n.createElement("div",{className:"menu__add__marks",onClick:function(){var e=document.querySelector("#menu-add-marks-list");e.hidden=!1,e.focus()}},n.createElement("div",{className:"menu__add__marks-title"},"Marks"),n.createElement(Te,{marks:r,setMarks:a,divId:"menu-add-marks-list"})),n.createElement("div",{className:"menu__add__close",onClick:function(){document.querySelector(".menu__container").style.marginLeft="0"}},n.createElement("img",{src:ve(),alt:"close"}))))};var He=r(7596),qe=r.n(He),Fe=r(6951),We=r.n(Fe),$e=r(9635),Ue=r.n($e),Ke=r(7511),Ze=r.n(Ke);function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){Ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ze(e){var t=e.marks,r=e.setMarks,a=e.list,l=e.setListToDo,i=e.setIsListFiltered;function o(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector("#marks-list");t.hidden=!e,t.querySelector(".marks-list__mark-add-npt").focus()}return n.createElement(n.Fragment,null,n.createElement("div",{className:"menu__main-item-container"},n.createElement("div",{className:"menu__add-button menu__button",onClick:function(){return o(!1),void(document.querySelector(".menu__container").style.marginLeft="-100%")}},n.createElement("div",{className:"menu__content"},n.createElement("img",{src:qe(),alt:"Add task"}),n.createElement("div",{className:"menu__text"}))),n.createElement("div",{className:"menu__filter menu__button"},n.createElement("div",{className:"menu__filter-container",onClick:function(e){return function(e){e.target.closest(".menu__filter-content")?e.currentTarget.style.marginTop=-e.currentTarget.offsetHeight/2+"px":e.target.closest("#filterCls")&&(e.currentTarget.style.marginTop="0px")}(e)}},n.createElement("div",{className:"menu__content menu__filter-content"},n.createElement("img",{src:We(),alt:"filter"}),n.createElement("div",{className:"menu__text"})),n.createElement("div",{className:"filter__container"},n.createElement("form",{onSubmit:function(e){return function(e,t){e.preventDefault();var r=e.target.elements.filterValue.value;function n(e){return e.map((function(e){var t,a,l;return e.children&&null!==(t=e.mark)&&void 0!==t&&t.includes(r)?Re(Re({},e),{},{children:n(e.children)}):(!e.children||null!==(a=e.mark)&&void 0!==a&&a.includes(r)||n(e.children),null!==(l=e.mark)&&void 0!==l&&l.includes(r)?e:Re(Re({},e),{},{filtered:!0}))}))}r.length&&(r+=" ",console.log(n(t)),i(!0),l(n(t)))}(e,a)}},n.createElement("input",{className:"filter__input",type:"text",name:"filterValue",autoComplete:"off"}),n.createElement("button",{type:"submit",className:"filter__submit"},n.createElement("img",{src:We(),alt:"search"})),n.createElement("div",{className:"filter__clear",onClick:function(){return function(e){i(!1),l(e.map((function(e){return e.child?null:Re(Re({},e),{},{filtered:!1})})).filter((function(e){return null!=e})))}(a)}},n.createElement("img",{src:ve(),alt:""}))),n.createElement("div",{className:"filter__close"},n.createElement("img",{src:Ue(),alt:"close filter",id:"filterCls"}))))),n.createElement("div",{className:"menu__forlders menu__button",onClick:function(){o()}},n.createElement("div",{className:"menu__content"},n.createElement("img",{src:Ze(),alt:"Folder"}),n.createElement("div",{className:"menu__text"})),n.createElement(Te,{marks:t,setMarks:r,divId:"marks-list"}))))}const Ge=function(e){var t=e.marks,r=e.setMarks,a=e.list,l=e.setListToDo,i=e.setIsListFiltered,o=e.isFiltered;return n.createElement("div",{className:"todo-app__menu"},n.createElement("div",{className:"menu__container"},n.createElement(ze,{marks:t,setMarks:r,setListToDo:l,list:a,setIsListFiltered:i}),n.createElement(Me,{setListToDo:l,marks:t,setMarks:r,isFiltered:o})))};function Je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Qe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Qe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Xe(){return n.createElement("div",{className:"todo-app__header"},n.createElement("h2",null,"To-do list"))}const Ye=function(){localStorage.setItem("MarksMenu",!1);var e=Je((0,n.useState)(["main","secondary","last","chell","secondary","secondary","secondary","secondary","secondary","secondary","chell","chell","chell","chell","chell","chell","chell","chell"]),2),t=e[0],r=e[1],a=Je((0,n.useState)([{id:1631222044156,name:"Піти в магазин",depth:1,mark:["shop "],child:!1,filtered:!1,children:[{id:1631222051647,name:"Купити чай",depth:2,mark:null,children:null,child:!0,filtered:!1},{id:1631222051617,name:"Купити цукор",depth:2,mark:null,children:null,child:!0,filtered:!1},{id:1631222052215,name:"Купити ПРОФЕСІЙНІ інструменти для приготування чаю",depth:2,mark:["shop "],child:!0,filtered:!1,children:[{id:1631222052812,mark:null,name:"Чайник",depth:3,child:!0,children:null,filtered:!1},{id:1631222053345,name:"Чайна ложка",depth:3,mark:null,child:!0,children:null,filtered:!1},{id:1631222053347,name:"Чашка",depth:3,mark:null,child:!0,children:null,filtered:!1}]}]},{id:1631222046008,name:"Закип'ятити воду у чайнику",depth:1,mark:["main "],children:null,child:!1,filtered:!1},{id:1631222046983,name:"Посмістити чай у чашку",depth:1,mark:["main "],children:null,child:!1,filtered:!1},{id:1631222048185,name:"Насипати цукор у чашку",depth:1,mark:["main "],children:null,child:!1,filtered:!1},{id:1631222049905,name:"Залити чай окропом",depth:1,mark:["secondary "],children:null,child:!1,filtered:!1},{id:1631222050975,name:"Не обпектися",depth:1,mark:["main "],child:!1,filtered:!1,children:!1},{id:1631222050976,name:"Насолоджуватися чаєм",depth:1,mark:["main "],child:!1,filtered:!1,children:!1}]),2),l=a[0],i=a[1],o=Je((0,n.useState)(!1),2),c=o[0],s=o[1];return n.createElement("div",{className:"todo-app"},n.createElement(Xe,null),n.createElement(je,{todos:l,isFiltered:c,setListToDo:i}),n.createElement(Ge,{marks:t,setMarks:r,list:l,setListToDo:i,isFiltered:c,setIsListFiltered:s}))};function et(){return n.createElement(n.StrictMode,null,n.createElement(Ye,null))}a.render(n.createElement(et,null),document.getElementById("todolist-app")),document.addEventListener("click",(function(e){if(e.target.closest(".about-app-section__button-cls")){var t=e.target.closest(".about-app-section");t.style.transition="right 0.15s ease-in",console.log(t.offsetWidth),t.style.right="-"+t.offsetWidth+"px"}})),document.addEventListener("click",(function(e){var t=e.target.closest(".about-app-section-open");if(t){var r=document.querySelector("#".concat(t.dataset.id));r.style.transition="right 0.1s linear",r.style.right="0"}}))},1586:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(3476),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,'.lds-dual-ring {\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-dual-ring:after {\r\n  content: " ";\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n  margin: 8px;\r\n  border-radius: 50%;\r\n  border: 6px solid #fff;\r\n  border-color: #fff transparent #fff transparent;\r\n  animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n',""]);const l=a},7596:(e,t,r)=>{e.exports=r.p+"public/images/add.svg"},4620:(e,t,r)=>{e.exports=r.p+"public/images/cancel.svg"},6855:(e,t,r)=>{e.exports=r.p+"public/images/depth.svg"},4380:(e,t,r)=>{e.exports=r.p+"public/images/document.svg"},9635:(e,t,r)=>{e.exports=r.p+"public/images/down-arrow.svg"},7511:(e,t,r)=>{e.exports=r.p+"public/images/folder.svg"},6794:(e,t,r)=>{e.exports=r.p+"public/images/left-arrow.svg"},6951:(e,t,r)=>{e.exports=r.p+"public/images/search.svg"},4910:(e,t,r)=>{e.exports=r.p+"public/images/submenu.svg"},9419:(e,t,r)=>{e.exports=r.p+"public/images/trashBin.svg"},5570:(e,t,r)=>{e.exports=r.p+"public/images/cloud.svg"},6156:(e,t,r)=>{e.exports=r.p+"public/images/drop.svg"},3809:(e,t,r)=>{e.exports=r.p+"public/images/location.svg"},3406:(e,t,r)=>{e.exports=r.p+"public/images/moon.svg"},8846:(e,t,r)=>{e.exports=r.p+"public/images/moon_2.svg"},3944:(e,t,r)=>{e.exports=r.p+"public/images/pressure.svg"},6679:(e,t,r)=>{e.exports=r.p+"public/images/raining.svg"},2150:(e,t,r)=>{e.exports=r.p+"public/images/snowflake.svg"},3155:(e,t,r)=>{e.exports=r.p+"public/images/storm.svg"},8768:(e,t,r)=>{e.exports=r.p+"public/images/sun.svg"},1990:(e,t,r)=>{e.exports=r.p+"public/images/temperature.svg"},1791:(e,t,r)=>{e.exports=r.p+"public/images/umbrella.svg"},4203:(e,t,r)=>{e.exports=r.p+"public/images/wind.svg"}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={id:e,exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,a,l)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,l]=e[u],o=!0,c=0;c<r.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(o=!1,l<i&&(i=l));if(o){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,a,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,[i,o,c]=r,s=0;for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var u=c(n);for(t&&t(r);s<i.length;s++)l=i[s],n.o(e,l)&&e[l]&&e[l][0](),e[i[s]]=0;return n.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[384],(()=>n(1202)));var a=n.O(void 0,[384],(()=>n(696)));a=n.O(a)})();