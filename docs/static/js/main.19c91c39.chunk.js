(this["webpackJsonpnotehub-ui"]=this["webpackJsonpnotehub-ui"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(21),r=a.n(s),o=(a(75),a(12)),i=c.a.createContext(null),l=a(26),j=a(8),u=(a(76),a(77),a(78),a(31)),d=a(32),b=(a(79),a(120)),h=a(121),O=a(119),m=a(117),x=a(118),p=a(68),f=a(48),g=a(122),v=a(19),S=a(24),N=a.n(S),C=a(2);var k=function(){var e=Object(n.useContext)(i),t="https://notehubapi.emineyenice.com",a=e.token,c=Object(n.useState)([]),s=Object(o.a)(c,2),r=s[0],j=s[1],S={id:0,title:"",content:"",createdTime:"",modifiedTime:""},k=Object(n.useState)(Object(d.a)({},S)),y=Object(o.a)(k,2),w=y[0],I=y[1];return Object(n.useEffect)((function(){N.a.get(t+"/api/Notes",{headers:{Authorization:"Bearer "+a}}).then((function(e){j(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(C.jsxs)("div",{className:"home-wrapper",children:[Object(C.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(C.jsx)(b.a.Brand,{href:"#home",children:"NoteHub"}),Object(C.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(C.jsx)(h.a,{className:"mr-auto",children:Object(C.jsx)(h.a.Link,{href:"#home",children:"Home"})}),Object(C.jsx)(h.a,{children:Object(C.jsx)(O.a,{alignRight:!0,title:"My Account",id:"basic-nav-dropdown",children:Object(C.jsxs)(l.b,{className:"dropdown-item",to:"/logout",children:["Logout (",e.username,")"]})})})]})]}),Object(C.jsx)(m.a,{fluid:!0,className:"flex-fill",children:Object(C.jsxs)(x.a,{className:"h-100",children:[Object(C.jsxs)(p.a,{sm:4,md:3,children:[Object(C.jsxs)("h3",{className:"mt-4 d-flex",children:["My Notes",Object(C.jsx)(f.a,{className:"ml-auto",variant:"success",onClick:function(e){e.preventDefault(),N.a.post(t+"/api/Notes",{title:"New Note",content:""},{headers:{Authorization:"Bearer "+a}}).then((function(e){var t=e.data;j([].concat(Object(u.a)(r),[t]))})).catch((function(e){console.log(e)}))},children:Object(C.jsx)("i",{className:"fas fa-plus "})})]}),Object(C.jsx)(g.a,{activeKey:"#notes-"+w.id,children:r.map((function(e,t){return Object(C.jsx)(g.a.Item,{action:!0,href:"#notes-"+e.id,onClick:function(t){return function(e,t){e.preventDefault(),I(t)}(t,e)},children:e.title},e.id)}))})]}),Object(C.jsx)(p.a,{className:"h-100",sm:8,md:9,children:0==w.id?Object(C.jsx)(v.a,{}):Object(C.jsxs)(v.a,{className:"py-3 h-100 d-flex flex-column",children:[Object(C.jsx)(v.a.Group,{children:Object(C.jsx)(v.a.Control,{type:"text",placeholder:"Title",value:w.title,onChange:function(e){return I(Object(d.a)(Object(d.a)({},w),{},{title:e.target.value}))}})}),Object(C.jsx)(v.a.Group,{className:"flex-fill",children:Object(C.jsx)(v.a.Control,{className:"h-100",as:"textarea",rows:10,placeholder:"Content",value:w.content,onChange:function(e){return I(Object(d.a)(Object(d.a)({},w),{},{content:e.target.value}))}})}),Object(C.jsxs)("div",{children:[Object(C.jsx)(f.a,{variant:"primary",onClick:function(e){e.preventDefault(),N.a.put(t+"/api/Notes/"+w.id,{id:w.id,title:w.title,content:w.content},{headers:{Authorization:"Bearer "+a}}).then((function(e){var t=Object(u.a)(r),a=t.find((function(e){return e.id==w.id}));a.title=w.title,a.content=w.content,j(t)})).catch((function(e){console.log(e)}))},children:"Save"}),Object(C.jsx)(f.a,{variant:"danger",onClick:function(e){e.preventDefault(),N.a.delete(t+"/api/Notes/"+w.id,{headers:{Authorization:"Bearer "+a}}).then((function(e){var t=r.filter((function(e){return e.id!=w.id}));j(t),I(Object(d.a)({},S))})).catch((function(e){console.log(e)}))},className:"ml-2",children:"Delete"})]})]})})]})})]})},y=(a(109),a(34)),w=a(56),I=a(69);var L=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),i=r[0],j=r[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),h=b[0],O=b[1],m=Object(n.useState)([]),x=Object(o.a)(m,2),p=x[0],g=x[1];return Object(C.jsx)(w.a,{className:"card-register",children:Object(C.jsxs)(w.a.Body,{className:"p-sm-4",children:[Object(C.jsx)(y.a,{}),Object(C.jsx)("h1",{className:"text-center",children:"Register"}),Object(C.jsx)(I.a,{variant:"danger",className:0===p.length?"d-none":"",children:p.join(" ")}),Object(C.jsxs)(v.a,{onSubmit:function(e){g([]),e.preventDefault(),N.a.post("https://notehubapi.emineyenice.com/api/Account/Register",{email:a,password:i,confirmPassword:h}).then((function(e){c(""),j(""),O(""),y.b.success("Account creation is succesful.Now you can login and start using app !")})).catch((function(e){if(e.response){if(e.response.data&&e.response.data.errors){var t=[];for(var a in e.response.data.errors)t.push.apply(t,Object(u.a)(e.response.data.errors[a]));g(t)}}else g(["Cannot connect to the server. Please try again later."])}))},children:[Object(C.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(v.a.Label,{children:"Email address"}),Object(C.jsx)(v.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:a,onChange:function(e){return c(e.target.value)}})]}),Object(C.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(v.a.Label,{children:"Password"}),Object(C.jsx)(v.a.Control,{type:"password",placeholder:"Password",required:!0,value:i,onChange:function(e){return j(e.target.value)}})]}),Object(C.jsxs)(v.a.Group,{controlId:"formConfirmPassword",children:[Object(C.jsx)(v.a.Label,{children:"Confirm Password"}),Object(C.jsx)(v.a.Control,{type:"password",placeholder:"Password",required:!0,value:h,onChange:function(e){return O(e.target.value)}})]}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(C.jsx)("div",{className:"text-center mt-3",children:Object(C.jsx)(l.b,{to:"/login",children:"Login with existing user account"})})]})})};a(110),a(111);var P=function(){var e=Object(j.g)(),t=Object(n.useContext)(i),a=new URLSearchParams(Object(j.h)().search).get("logout");Object(n.useEffect)((function(){"success"===a&&Object(y.b)("You have logged out succesfully!")}),[a]);var c=Object(n.useState)(""),s=Object(o.a)(c,2),r=s[0],d=s[1],b=Object(n.useState)(""),h=Object(o.a)(b,2),O=h[0],m=h[1],x=Object(n.useState)(!0),p=Object(o.a)(x,2),g=p[0],S=p[1],k=Object(n.useState)([]),L=Object(o.a)(k,2),P=L[0],B=L[1];return Object(C.jsx)(w.a,{className:"card-login",children:Object(C.jsxs)(w.a.Body,{className:"p-sm-4",children:[Object(C.jsx)(y.a,{}),Object(C.jsx)("h1",{className:"text-center",children:"Login"}),Object(C.jsx)(I.a,{variant:"danger",className:0===P.length?"d-none":"",children:P.join(" ")}),Object(C.jsxs)(v.a,{onSubmit:function(a){a.preventDefault(),N.a.post("https://notehubapi.emineyenice.com/api/Account/Login",{username:r,password:O}).then((function(a){g?(localStorage.usename=r,localStorage.token=a.data.token,sessionStorage.removeItem("username"),sessionStorage.removeItem("token")):(sessionStorage.username=r,sessionStorage.token=a.data.token,localStorage.removeItem("username"),localStorage.removeItem("token")),t.setUsername(r),t.setToken(a.data.token),t.setIsLoggedIn(!0),e.push("/")})).catch((function(e){if(e.response){if(e.response.data&&e.response.data.errors){var t=[];for(var a in e.response.data.errors)t.push.apply(t,Object(u.a)(e.response.data.errors[a]));B(t)}}else B(["Cannot connect to the server. Please try again later."])}))},children:[Object(C.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(v.a.Label,{children:"Email address"}),Object(C.jsx)(v.a.Control,{type:"email",placeholder:"Enter email",value:r,onInput:function(e){return d(e.target.value)},required:!0})]}),Object(C.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(v.a.Label,{children:"Password"}),Object(C.jsx)(v.a.Control,{type:"password",placeholder:"Password",value:O,onInput:function(e){return m(e.target.value)},required:!0})]}),Object(C.jsx)(v.a.Group,{controlId:"formBasicCheckbox",children:Object(C.jsx)(v.a.Check,{type:"checkbox",label:"Remember me",checked:g,onChange:function(e){return S(e.target.checked)}})}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(C.jsx)("div",{className:"text-center mt-3",children:Object(C.jsx)(l.b,{to:"/register",children:"Register as a new user"})})]})})};var B=function(){var e=Object(n.useContext)(i);return localStorage.removeItem("token"),localStorage.removeItem("username"),sessionStorage.removeItem("token"),sessionStorage.removeItem("username"),Object(n.useEffect)((function(){e.setIsLoggedIn(!1),e.setToken(null)})),Object(C.jsx)(j.a,{to:"/login?logout=success"})};var E=function(){var e=sessionStorage.token||localStorage.token||null,t=Object(n.useState)(null!=e),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(e),u=Object(o.a)(r,2),d=u[0],b=u[1],h=Object(n.useState)(sessionStorage.username||localStorage.username||null),O=Object(o.a)(h,2),m=O[0],x=O[1];return Object(C.jsx)(i.Provider,{value:{token:d,setToken:b,isLoggedIn:c,setIsLoggedIn:s,username:m,setUsername:x},children:Object(C.jsx)(l.a,{basename:"/NoteHub",children:Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{path:"/register",children:Object(C.jsx)(L,{})}),Object(C.jsx)(j.b,{path:"/login",children:Object(C.jsx)(P,{})}),Object(C.jsx)(j.b,{path:"/logout",children:Object(C.jsx)(B,{})}),Object(C.jsx)(j.b,{path:"/",children:c?Object(C.jsx)(k,{}):Object(C.jsx)(j.a,{to:"/login"})})]})})})};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(E,{})}),document.getElementById("root"))},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.19c91c39.chunk.js.map