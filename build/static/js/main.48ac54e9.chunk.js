(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,t){},130:function(e,t,a){"use strict";a.r(t);a(88);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),l=(a(93),a(8)),s=a(31),i=a(6),u=a(140),m=a(86),d=(a(61),function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"App-header"},r.a.createElement(u.a,{bg:"transparent",expand:"lg"},r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{href:"/"},"Home"),e.jwt?r.a.createElement(m.a.Link,{href:"/user"},"User profile"):null,e.jwt?r.a.createElement(m.a.Link,{href:"/search"},"Search stocks"):null,e.jwt?r.a.createElement(m.a.Link,{onClick:e.logout},"Logout"):r.a.createElement(m.a.Link,{href:"/login"},"Login"))))))}),h=function(){return r.a.createElement("main",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"Hej och v\xe4lkommen"))},E=a(132),f=a(133),p=a(142),g=a(134),v=function(e){var t=Object(i.e)(),a=Object(n.useState)(""),o=Object(l.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),d=m[0],h=m[1];return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n={email:c,password:d};fetch("https://backend.ml-jsramverk.me/login",{method:"POST",body:JSON.stringify(n),credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){e.jwtAuth(a.data.token,a.data.user),t.push("/user")})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement(E.a,{controlId:"email"},r.a.createElement(f.a,null,"Email"),r.a.createElement(p.a,{autoFocus:!0,type:"email",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement(E.a,{controlId:"password"},r.a.createElement(f.a,null,"Password"),r.a.createElement(p.a,{value:d,onChange:function(e){return h(e.target.value)},type:"password"})),r.a.createElement(g.a,{block:!0,disabled:!(c.length>0&&d.length>0),type:"submit"},"Login"),r.a.createElement("p",null,"Dont have an account? ",r.a.createElement("a",{href:"/register"},"Register here"))))};function b(){var e=Object(i.e)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],d=u[1];return r.a.createElement("div",{className:"Login"},r.a.createElement("h3",null,"Register new user"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={email:o,password:m};fetch("https://backend.ml-jsramverk.me/register",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.push("/")})).catch((function(e){return console.error("Error:",e)}))}},r.a.createElement(E.a,{controlId:"email"},r.a.createElement(f.a,null,"Email"),r.a.createElement(p.a,{autoFocus:!0,type:"email",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement(E.a,{controlId:"password"},r.a.createElement(f.a,null,"Password"),r.a.createElement(p.a,{value:m,onChange:function(e){return d(e.target.value)},type:"password"})),r.a.createElement(g.a,{block:!0,disabled:!(o.length>0&&m.length>0),type:"submit"},"Register user")))}var k,j=a(141),y=a(137),S=a(135),w=a(136),O=a(80),C=function(){var e=Object(n.useState)({balance:null,stocks:[]}),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("https://backend.ml-jsramverk.me"+"/stock/overview/".concat(sessionStorage.getItem("user")),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o({balance:e.data[0].balance,stocks:e.data[0].stocks})})).catch((function(e){return console.error("Error:",e)}))})),r.a.createElement("main",null,r.a.createElement("h1",null,"User overview"),r.a.createElement("p",null,"Current balance: ",a.balance),r.a.createElement("h3",null,"Stocks"),r.a.createElement(S.a,{fluid:!0},r.a.createElement(w.a,null,a.stocks.map((function(e,t){return r.a.createElement(O.a,{sm:4},r.a.createElement("p",{key:t},e.stockname,": ",e.qty))})))))},I=a(139),T=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),s=Object(l.a)(c,2),i=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),h=d[0],f=d[1],v=function(){return f(!1)},b="https://backend.ml-jsramverk.me";Object(n.useEffect)((function(){fetch(b+"/stock/add-balance/".concat(sessionStorage.getItem("user")),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.data[0].balance)})).catch((function(e){return console.error("Error:",e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"User balance"),r.a.createElement("p",null,"Current balance: ",i),r.a.createElement(g.a,{variant:"primary",onClick:function(){return f(!0)}},"Add balance to your account"),r.a.createElement(I.a,{show:h,onHide:v},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,"How much would you like to add?")),r.a.createElement(I.a.Body,null,r.a.createElement(E.a,{controlId:"balance"},r.a.createElement(p.a,{autoFocus:!0,value:a,onChange:function(e){return o(e.target.value)}}))),r.a.createElement(I.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:v},"Close"),r.a.createElement(g.a,{variant:"primary",disabled:!(a>0),onClick:function(e){e.preventDefault();var t={email:sessionStorage.getItem("user"),balance:a};fetch(b+"/stock/add-balance",{method:"POST",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.data[0].balance),v()})).catch((function(e){return console.error("Error:",e)}))}},"Add balance"))))},x=function(){return r.a.createElement(j.a,{defaultActiveKey:"overview",id:"uncontrolled-tab-example"},r.a.createElement(y.a,{eventKey:"overview",title:"Overview"},r.a.createElement(C,null)),r.a.createElement(y.a,{eventKey:"balance",title:"Balance"},r.a.createElement(T,null)))},D=function(e){var t=e.stockname,a=Object(n.useState)(0),o=Object(l.a)(a,2),c=o[0],s=o[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),m=u[0],d=u[1],h=function(){return d(!1)},f=Object(n.useState)(0),v=Object(l.a)(f,2),b=v[0],k=v[1],j=Object(n.useState)(!1),y=Object(l.a)(j,2),S=y[0],w=y[1],O=function(){return w(!1)},C="https://backend.ml-jsramverk.me";function T(){return c>0||b>0}return r.a.createElement("div",null,r.a.createElement(g.a,{variant:"success",onClick:function(){return d(!0)}},"Buy")," ",r.a.createElement(g.a,{variant:"danger",onClick:function(){return w(!0)}},"Sell"),r.a.createElement(I.a,{show:m,onHide:h},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,"How much would you like to buy?")),r.a.createElement(I.a.Body,null,r.a.createElement(E.a,{controlId:"buy"},r.a.createElement(p.a,{autoFocus:!0,value:c,onChange:function(e){return s(e.target.value)}}))),r.a.createElement(I.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:h},"Close"),r.a.createElement(g.a,{variant:"primary",disabled:!T(),onClick:function(e){e.preventDefault();var a={stock:t,email:sessionStorage.getItem("user"),amount:c};fetch(C+"/stock/buy/",{method:"POST",body:JSON.stringify(a),credentials:"include",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),h()})).catch((function(e){return console.error("Error:",e)}))}},"Buy"))),r.a.createElement(I.a,{show:S,onHide:O},r.a.createElement(I.a.Header,{closeButton:!0},r.a.createElement(I.a.Title,null,"How much would you like to sell?")),r.a.createElement(I.a.Body,null,r.a.createElement(E.a,{controlId:"sell"},r.a.createElement(p.a,{autoFocus:!0,value:b,onChange:function(e){return k(e.target.value)}}))),r.a.createElement(I.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:O},"Close"),r.a.createElement(g.a,{variant:"primary",disabled:!T(),onClick:function(e){e.preventDefault();var a={stock:t,email:sessionStorage.getItem("user"),amount:b};fetch(C+"/stock/sell/",{method:"POST",body:JSON.stringify(a),credentials:"include",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),O()})).catch((function(e){return console.error("Error:",e)}))}},"Sell"))))},B=a(85),N=a.n(B),H=a(23),P=a.n(H),F=(a(129),function(e){var t=e.stockname;function a(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}return Object(n.useEffect)((function(){k=N()("https://socket.ml-jsramverk.me")}),[]),Object(n.useEffect)((function(){k.emit("stock name",{name:t})}),[t]),Object(n.useEffect)((function(){var e={},t=!0,n=document.getElementById("graphs");k.on("stocks",(function(r){if(t){var o=new P.a.Color.Palette({scheme:"colorwheel"});r.map((function(t){var r=document.createElement("h1");r.textContent=t.name;var c=document.createElement("div");n.appendChild(r),n.appendChild(c);var l=new P.a.Graph({element:c,width:"500",height:"300",renderer:"line",series:new P.a.Series.FixedDuration([{name:t.name,color:o.color()}],void 0,{timeInterval:5e3,maxDataPoints:1e3,timeBase:(new Date).getTime()/1e3})});l.configure({width:n.clientWidth}),new P.a.Graph.Axis.Time({graph:l}),new P.a.Graph.Axis.Y({graph:l,orientation:"left",tickFormat:P.a.Fixtures.Number.formatKMBT}),new P.a.Graph.HoverDetail({graph:l}),l.render();var s=a(t.name);return e[s]={name:t.name,graph:l},"Done"})),t=!1}r.map((function(t){var n=a(t.name),r={};return r[t.name]=t.startingPoint,e[n].graph.series.addData(r),e[n].graph.render(),"Done"}))}))}),[]),r.a.createElement("div",{className:"graphs",id:"graphs"})}),L=function(e){var t=e.match.params.stock;return r.a.createElement("div",null,r.a.createElement(D,{stockname:t}),r.a.createElement(F,{stockname:t}))},A=a(138),J=function(){var e=Object(i.e)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=function(t){t.preventDefault();var a={search:o};fetch("https://backend.ml-jsramverk.me/stock/search",{method:"POST",body:JSON.stringify(a),credentials:"include",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.push("/stock-page/".concat(t.data[0].stockname))})).catch((function(e){return console.error("Error:",e)}))};return r.a.createElement("div",null,r.a.createElement("h1",null,"User search"),r.a.createElement(A.a,{className:"mb-3 search-field"},r.a.createElement(A.a.Prepend,null,r.a.createElement(A.a.Text,{id:"basic-addon1"},"@stock")),r.a.createElement(p.a,{placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon1",value:o,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&s(e)}}),r.a.createElement(g.a,{block:!0,disabled:!(o.length>0),onClick:s},"Search")))};var G=function(){var e=Object(n.useState)(sessionStorage.getItem("token")||null),t=Object(l.a)(e,2),a=t[0],o=t[1],c=function(e,t){console.log(e),console.log(t),sessionStorage.setItem("token",e),sessionStorage.setItem("user",t.email),o(e)};return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,{jwt:a,logout:function(){sessionStorage.removeItem("token"),o(null)}}),r.a.createElement(i.a,{exact:!0,path:"/",component:h}),r.a.createElement(i.a,{path:"/login",render:function(e){return r.a.createElement(v,Object.assign({},e,{jwtAuth:c}))}}),r.a.createElement(i.a,{path:"/register",component:b}),r.a.createElement(i.a,{path:"/user",component:x}),r.a.createElement(i.a,{path:"/search",component:J}),r.a.createElement(i.a,{path:"/stock-page/:stock",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){},87:function(e,t,a){e.exports=a(130)},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.48ac54e9.chunk.js.map