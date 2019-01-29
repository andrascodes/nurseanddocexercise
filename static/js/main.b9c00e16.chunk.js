(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(2),a=t(0),i=t.n(a),c=t(52),o=t(51),u=t(5),l=t(8),s=t(9),m=t(11),d=t(10),f=t(12),h=t(19),p=function(e){return!0!==e.ok?Promise.reject({error:!0,statusCode:e.status,statusText:e.statusText}):e.json()},g=function(e){return"200"!==e.cod&&200!==e.cod?Promise.reject(new Error({error:!0,message:e.message,response:e})):e},v=function(e){var n=function(e,n){return{day:e,night:n||e}};return 200<=e&&e<=232?n("bolt"):300<=e&&e<=321?n("cloud-rain"):500<=e&&e<=504?n("cloud-sun-rain","cloud-moon-rain"):511===e?n("icicles"):520<=e&&e<=531?n("cloud-showers-heavy"):600<=e&&e<=622?n("snowflake"):701<=e&&e<=781?n("water"):800===e?n("sun","moon"):801===e?n("cloud-sun","cloud-moon"):802===e?n("cloud"):803===e||804===e?n("cloud"):void 0},b=function(e){return e<.5?"Calm":.5<=e&&e<1.6?"Light air":1.6<=e&&e<3.4?"Light breeze":3.4<=e&&e<5.6?"Gentle breeze":5.6<=e&&e<8?"Moderate breeze":8<=e&&e<10.8?"Fresh breeze":10.8<=e&&e<13.9?"Strong breeze":13.9<=e&&e<17.2?"High winds":17.2<=e&&e<20.8?"Gale":20.8<=e&&e<24.5?"Strong gale":24.5<=e&&e<28.5?"Storm":28.5<=e&&e<32.6?"Violent storm":"Hurricane force"},y=function(e){var n=e.fetch,t="https://api.openweathermap.org/data/2.5/";return{findCityByName:function(e){return n("".concat(t,"find?q=").concat(e,"&units=metric&appid=").concat("b94fbeff88bc828676078aa06349c308")).then(p).then(g).then(function(e){return e.list}).then(function(e){return e.map(function(e){return{id:e.id,name:e.name,countryCode:e.sys.country,flag:Object(h.flag)(e.sys.country),coord:e.coord,temperature:{max:Math.floor(e.main.temp_max),min:Math.floor(e.main.temp_min),current:Math.floor(e.main.temp)},humidity:e.main.humidity,wind:{speed:e.wind.speed,description:b(e.wind.speed)},weather:e.weather.map(function(e){var n=e.id,t=e.description;return{id:n,icon:v(n),description:t}})}})})},getCurrentWeatherByCityId:function(e){return n("".concat(t,"weather?id=").concat(e,"&units=metric&appid=").concat("b94fbeff88bc828676078aa06349c308")).then(p).then(g).then(function(e){return{id:e.id,name:e.name,countryCode:e.sys.country,flag:Object(h.flag)(e.sys.country),coord:e.coord,temperature:{max:Math.floor(e.main.temp_max),min:Math.floor(e.main.temp_min),current:Math.floor(e.main.temp)},humidity:e.main.humidity,wind:{speed:e.wind.speed,description:b(e.wind.speed)},weather:e.weather.map(function(e){var n=e.id,t=e.description;return{id:n,icon:v(n),description:t}})}})}}},w=function e(n,t,r){return fetch(n,t).catch(function(a){if(r<0)throw a;return(i=1200,new Promise(function(e){return setTimeout(e,i)})).then(function(){return e(n,t,r-1)});var i})},E=function(e){e.fetch;return{getTimezoneByLocation:function e(n,t){var r=n.lat,a=n.lon;return w("https://api.timezonedb.com/v2.1/get-time-zone?key=".concat("LFJOXDC1RVJO","&format=json&by=position&lat=").concat(r,"&lng=").concat(a),{},t).then(p).then(function(e){return"OK"!==e.status?Promise.reject(new Error({error:!0,message:e.message,data:e})):e}).then(function(e){var n,t=new Date(e.formatted);return{hours:t.getHours(),minutes:t.getMinutes(),color:(n=t.getHours(),n<7?"night":n<12?"morning":n<18?"day":n<21?"evening":"night")}}).catch(function(n){return t<0?Promise.reject(n):setTimeout(e({lat:r,lon:a},t-1),1e3)})}}}({fetch:window.fetch}),O=y({fetch:window.fetch}),j=function(){return i.a.createElement("div",null,"Something went wrong!")},x=t(13),S=t(50),k=function(){return i.a.createElement("div",null,"Loading...")},z=function(e){return e<10?"0".concat(e):"".concat(e)},C=t(3);function T(){var e=Object(r.a)([""]);return T=function(){return e},e}function D(){var e=Object(r.a)(["\n  margin-right: 20px;\n"]);return D=function(){return e},e}function L(){var e=Object(r.a)(["\n  display: flex;\n  font-size: 40px;\n"]);return L=function(){return e},e}function M(){var e=Object(r.a)(["\n  flex-grow: 1;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  & div {\n    margin-top: 4px;\n    margin-left: 8px;\n    font-size: 25px;\n  }\n"]);return M=function(){return e},e}function B(){var e=Object(r.a)(["\n  color: unset;\n  text-decoration: unset;\n  display: flex;\n  align-items: center;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin-bottom: 4px;\n  height: 65px;\n  padding-left: 15px;\n  padding-right: 12px;\n"]);return B=function(){return e},e}var F=Object(C.b)(S.a)(B()),H=C.b.div(M()),N=C.b.div(L()),P=C.b.div(D()),A=C.b.div(T()),J=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={localTime:void 0,timeOfDay:"",error:!1},t.renderError=function(){return i.a.createElement(j,null)},t.renderLoading=function(){return i.a.createElement(k,null)},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.getTimezoneByLocation().then(function(n){return e.setState({localTime:"".concat(z(n.hours),":").concat(z(n.minutes)),timeOfDay:n.timeOfDay})}).catch(function(n){return e.setState({error:n})})}},{key:"render",value:function(){return!1!==this.state.error?this.renderError():void 0===this.state.localTime?this.renderLoading():i.a.createElement(F,{to:"/weather/".concat(this.props.id)},i.a.createElement(H,null,this.props.name,i.a.createElement("div",null,this.props.flag)),i.a.createElement(N,null,i.a.createElement(P,null,"night"===this.state.timeOfDay?i.a.createElement(x.a,{icon:this.props.weather[0].icon.night}):i.a.createElement(x.a,{icon:this.props.weather[0].icon.day})),i.a.createElement(A,null,this.props.temperature,"\xb0")))}}]),n}(a.Component),W=t(26),_=t.n(W);function q(){var e=Object(r.a)(["\n  align-self: flex-start;\n  width: calc(100% - 10px);\n  margin-top: 5px;\n"]);return q=function(){return e},e}var I=C.b.div(q()),Q=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={cities:void 0,error:!1},t.renderLoading=function(){return i.a.createElement(k,null)},t.renderError=function(){return i.a.createElement(j,null)},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=_.a.parse(this.props.location.search).city;O.findCityByName(n).then(function(n){return e.setState({cities:n})}).catch(function(n){return e.setState({error:n})})}},{key:"render",value:function(){var e=this;return!1!==this.state.error?this.renderError():void 0===this.state.cities?this.renderLoading():i.a.createElement(I,null,this.state.cities.map(function(n){return i.a.createElement(J,{key:"".concat(n.id,"-card"),id:n.id,getTimezoneByLocation:function(){return E.getTimezoneByLocation(n.coord,e.state.cities.length)},name:n.name,flag:n.flag,temperature:n.temperature.current,weather:n.weather})}))}}]),n}(a.Component);function G(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return G=function(){return e},e}function V(){var e=Object(r.a)(["\n  height: 97vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return V=function(){return e},e}var K=C.b.div(V()),R=C.b.div(G()),X=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={searchQuery:""},t.handleSearchFieldChange=function(e){return t.setState({searchQuery:e.target.value})},t.handleSearchFormSubmit=function(e){e.preventDefault(),t.props.history.push({pathname:"/search",search:"?city=".concat(t.state.searchQuery)})},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement(K,null,i.a.createElement(R,null,i.a.createElement("div",{className:"Title"},"How's the weather?"),i.a.createElement("form",{action:"submit",onSubmit:this.handleSearchFormSubmit},i.a.createElement(R,null,i.a.createElement("input",{required:"required",type:"text",onChange:this.handleSearchFieldChange}),i.a.createElement("button",{type:"submit"},"Search")))))}}]),n}(a.Component),$=t(29);function U(){var e=Object(r.a)(["\n  margin-right: 20px;\n"]);return U=function(){return e},e}function Y(){var e=Object(r.a)(["\n  margin-left: 20px;\n  font-size: 40px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(r.a)(["\n  font-size: 55px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  &:first-child {\n    margin-left: 10px;\n  }\n\n  &:last-child {\n    margin-right: 10px;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 20px 0;\n"]);return ne=function(){return e},e}function te(){var e=Object(r.a)(["\n  font-size: 50px;\n"]);return te=function(){return e},e}function re(){var e=Object(r.a)([""]);return re=function(){return e},e}function ae(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1 1;\n"]);return ae=function(){return e},e}function ie(){var e=Object(r.a)(["\n  width: calc(100% - 10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: calc(100% - 10px);\n  border: 1px solid black;\n  border-radius: 8px;\n"]);return ie=function(){return e},e}var ce=C.b.div(ie()),oe=C.b.div(ae()),ue=C.b.div(re()),le=C.b.div(te()),se=C.b.div(ne()),me=C.b.div(ee()),de=C.b.div(Z()),fe=C.b.div(Y()),he=C.b.div(U()),pe=function(e){var n=e.name,t=e.flag,r=e.temperature,a=e.wind,c=e.weather,o=e.localTime,u=e.timeOfDay;return i.a.createElement(ce,null,i.a.createElement(oe,null,i.a.createElement(ue,null,o),i.a.createElement(le,null,i.a.createElement("div",null,n,", ",t))),i.a.createElement(se,null,i.a.createElement(me,null,i.a.createElement("div",null,"Min"),r.min,"\xb0"),i.a.createElement(de,null,r.current,"\xb0"),i.a.createElement(me,null,i.a.createElement("div",null,"Max"),r.max,"\xb0")),i.a.createElement(se,null,i.a.createElement(fe,null,"night"===u?i.a.createElement(x.a,{icon:c[0].icon.night}):i.a.createElement(x.a,{icon:c[0].icon.day})),i.a.createElement(he,null,c[0].description)),i.a.createElement(se,null,i.a.createElement(fe,null,i.a.createElement(x.a,{icon:"wind"})),i.a.createElement(he,null,a.description," (",a.speed," m/s)")))},ge=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={city:void 0,localTime:void 0,timeOfDay:"",error:!1},t.renderError=function(){return i.a.createElement(j,null)},t.renderLoading=function(){return i.a.createElement(k,null)},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.match.params.id;O.getCurrentWeatherByCityId(n).then(function(n){return e.setState({city:n}),E.getTimezoneByLocation(Object($.a)({},n.coord),1)}).then(function(n){return e.setState({localTime:"".concat(z(n.hours),":").concat(z(n.minutes)),timeOfDay:n.timeOfDay})}).catch(function(n){return e.setState({error:n})})}},{key:"render",value:function(){var e=this.state,n=e.city,t=e.localTime;return!1!==e.error?this.renderError():void 0===n||void 0===t?this.renderLoading():i.a.createElement(pe,{name:n.name,flag:n.flag,temperature:n.temperature,wind:n.wind,weather:n.weather,localTime:t,timeOfDay:this.state.timeOfDay})}}]),n}(a.Component);function ve(){var e=Object(r.a)(["\n  body {\n     /* @import url('https://fonts.googleapis.com/css?family=Notable');\n    font-family: 'Notable', sans-serif; */\n    margin: 0;\n    height: 100vh;\n    background-color: #ecf0f1;\n  }\n\n  #root {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    margin: 0;\n  }\n"]);return ve=function(){return e},e}t(15).b.add(u.a,u.b,u.c,u.d,u.e,u.f,u.g,u.h,u.i,u.j,u.k,u.l,u.m,u.n);var be=Object(C.a)(ve()),ye=function(){return i.a.createElement(a.Fragment,null,i.a.createElement(be,null),i.a.createElement(c.a,null,i.a.createElement(a.Fragment,null,i.a.createElement(o.a,{exact:!0,path:"/",component:X}),i.a.createElement(o.a,{path:"/search/",component:Q}),i.a.createElement(o.a,{path:"/weather/:id",component:ge}))))},we=t(16);t.n(we).a.render(i.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.b9c00e16.chunk.js.map