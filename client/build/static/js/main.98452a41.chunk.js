(this["webpackJsonpbig-day-local"]=this["webpackJsonpbig-day-local"]||[]).push([[0],{139:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},199:function(e,t){},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/helena-lopes-Vrb_vtQAxJU-unsplash.7d88f2df.jpg"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/coplerunning.b4122b28.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/hearts.16c27cb5.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cake2.39671096.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/flowers.a870abbe.png"},205:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,l,u,j,d,b=n(0),m=n.n(b),g=n(20),O=n.n(g),h=(n(181),n(6)),p=n(23),f=n(17),v=(n(182),n(34)),x=n(15),_=n.n(x),S=n(27),w=n(275),y=n(286),C=n(278),k=n(279),N=n(120),E=n(41),I=n(290),P=Object(I.a)(a||(a=Object(E.a)(["\n\t{\n\t\tweddings {\n\t\t\t_id\n\t\t\tbride_first_name\n\t\t\tbride_last_name\n\t\t\tgroom_first_name\n\t\t\tgroom_last_name\n\t\t\tdate\n\t\t\tvenue\n\t\t\twedding_owner\n\t\t\tmenu_choice\n\t\t}\n\t}\n"]))),T=(Object(I.a)(r||(r=Object(E.a)(["\n\t{\n\t\tme {\n\t\t\t_id\n\t\t\tusername\n\t\t\temail\n\t\t\twedding\n\t\t}\n\t}\n"]))),Object(I.a)(c||(c=Object(E.a)(["\n\tquery finduser($userId: String) {\n\t\tuser(userId: $userId){\n\t\t\tusername\n\t\t\t_id\n\t\t\t\n\t\t\t\t\t\t\n\t\t}\n\t}\n"]))),Object(I.a)(i||(i=Object(E.a)(["\nquery getGuests{\n\tguests{\n\t\tname\n\t\temail\n\t\trsvp\n\t\tmenu\n\t\t_id\n\t\twedding_owner\n\t}\n}\n"])))),$=n(294),R=Object(I.a)(s||(s=Object(E.a)(["\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\ttoken\n\t\t\tuser {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"]))),A=Object(I.a)(o||(o=Object(E.a)(["\n\tmutation addUser(\n\t\t$username: String!\n\t\t$email: String!\n\t\t$password: String!\n\t) {\n\t\taddUser(\n\t\t\tusername: $username\n\t\t\temail: $email\n\t\t\tpassword: $password\n\t\t) {\n\t\t\ttoken\n\t\t\tuser {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"]))),D=Object(I.a)(l||(l=Object(E.a)(["\n\tmutation addGuests(\n\t\t$name: String!\n\t\t$email: String!\n\t\t$rsvp: String!\n\t\t$menu: String!\n\t\t$wedding_owner: String!\n\t) {\n\t\taddGuests(\n\t\t\tname: $name\n\t\t\temail: $email\n\t\t\trsvp: $rsvp\n\t\t\tmenu: $menu\n\t\t\twedding_owner: $wedding_owner\n\t\t)\n\t\t{\n\t\t\tname \n\t\t\t}\n\t\t}\n\t\n"]))),W=Object(I.a)(u||(u=Object(E.a)(["\nmutation addWedding ( \n\t$bride_first_name: String\n    $bride_last_name: String\n\t$groom_first_name: String\n\t$groom_last_name: String\n\t$date: String\n\t$venue: String\n\t$menu_choice: [String]\n\t$wedding_owner: String\n)\n{ addWedding(bride_first_name: $bride_first_name, bride_last_name: $bride_last_name, groom_first_name: $groom_first_name, groom_last_name: $groom_last_name, date: $date, venue: $venue, menu_choice: $menu_choice, wedding_owner: $wedding_owner)\n{\n\tbride_first_name\n}\n}\n\n"]))),L=Object(I.a)(j||(j=Object(E.a)(["\nmutation update_rsvp (\n\t$rsvp:String, $email:String\n){\n\tupdate_rsvp(rsvp: $rsvp, email:$email)\n\t{\n\t\tname\n\t}\n}\n"]))),F=Object(I.a)(d||(d=Object(E.a)(["\nmutation update_menu(\n\t$menu:String, $email:String)\n\t{\n\t\tupdate_menu(menu:$menu, email:$email)\n\t\t{\n\t\t\tname\n\t\t}\n\t}\n\n\n"]))),M=n(93),U=n(145),B=n(121),V=new(function(){function e(){Object(M.a)(this,e)}return Object(U.a)(e,[{key:"getProfile",value:function(){return Object(B.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken(),t=this.getUser();return{token:!(!e||this.isTokenExpired(e)),organiser:t}}},{key:"isTokenExpired",value:function(e){return Object(B.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),localStorage.removeItem("user"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"getUser",value:function(){var e=localStorage.getItem("user");return JSON.parse(e)}},{key:"login",value:function(e,t){localStorage.setItem("id_token",e),localStorage.setItem("user",JSON.stringify(t)),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("user"),localStorage.removeItem("guest")}}]),e}()),q=n(270),G=n(1);n.e(3).then(n.t.bind(null,297,7));var K=Object(q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}}));var H=function(){var e=K(),t=Object(b.useState)([{brideFirstName:"",brideLastName:"",groomFirstName:"",groomLastName:"",venue:"",weddingDate:"",menuChoices:""}]),n=Object(h.a)(t,2),a=n[0],r=n[1],c=Object(b.useState)(null),i=Object(h.a)(c,2),s=(i[0],i[1],Object(b.useState)(null)),o=Object(h.a)(s,2),l=o[0],u=o[1],j=Object(b.useState)(null),d=Object(h.a)(j,2),m=(d[0],d[1]);Object(b.useEffect)((function(){var e=V.loggedIn().organiser;console.log("this is the organiser from local storage",e),u(e.username),m(e._id)}),[]);var g=Object($.a)(W),O=Object(h.a)(g,2),p=O[0],f=(O[1].error,function(){var e=Object(S.a)(_.a.mark((function e(t){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),0,e.prev=2,e.next=5,p({variables:{bride_first_name:a[0].bride_first_name,bride_last_name:a[0].bride_last_name,groom_first_name:a[0].groom_first_name,groom_last_name:a[0].groom_last_name,venue:a[0].venue,date:a[0].date,menu_choice:a[0].menu_choice,wedding_owner:l}});case 5:n=e.sent,r=n.data,window.location.assign("/viewwedding"),console.log(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()),x=function(e,t){console.log(e,t.target.name);var n=Object(v.a)(a);n[e][t.target.name]=t.target.value,r(n)};return Object(G.jsxs)(w.a,{className:"bigcontainer",children:[Object(G.jsx)("h1",{className:"heading",children:" Fill in your wedding details"}),Object(G.jsxs)("form",{className:e.root,onSubmit:f,children:[a.map((function(e,t){return Object(G.jsxs)("div",{children:[Object(G.jsxs)("div",{children:[Object(G.jsx)(y.a,{name:"bride_first_name",label:"Bride's First Name",value:e.bride_first_name,onChange:function(e){return x(t,e)}}),Object(G.jsx)(y.a,{name:"bride_last_name",label:"Bride's Last Name",value:e.bride_last_name,onChange:function(e){return x(t,e)}})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)(y.a,{name:"groom_first_name",label:"Groom's First Name",value:e.groom_first_name,onChange:function(e){return x(t,e)}}),Object(G.jsx)(y.a,{name:"groom_last_name",label:"Groom's Last Name",value:e.groom_last_name,onChange:function(e){return x(t,e)}})]}),Object(G.jsx)("div",{children:Object(G.jsx)(y.a,{name:"venue",label:"Wedding Venue",value:e.venue,onChange:function(e){return x(t,e)}})}),Object(G.jsx)("div",{children:Object(G.jsx)(y.a,{name:"date",label:"Wedding Date",value:e.date,onChange:function(e){return x(t,e)}})}),Object(G.jsx)(y.a,{name:"menu_choice",label:"Menu Choices",value:e.menu_choice,onChange:function(e){return x(t,e)}})]},t)})),Object(G.jsx)(C.a,{className:e.button,vareient:"contained",color:"secondary",type:"submit",onClick:f,endIcon:Object(G.jsx)(k.a,{children:"favorite"}),children:"create your wedding"})]})]})},z=n(280),Y=n(102),J=n.n(Y),Q=n(103),X=n.n(Q),Z=n(291),ee=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAGIC_KEY:"pk_live_6164740A3CB453CC",REACT_APP_SERVER_URL:"https://thebigday-backend.herokuapp.com/graphql"}).REACT_APP_SERVICE_ID,te=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAGIC_KEY:"pk_live_6164740A3CB453CC",REACT_APP_SERVER_URL:"https://thebigday-backend.herokuapp.com/graphql"}).REACT_APP_TEMPLATE_ID,ne=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAGIC_KEY:"pk_live_6164740A3CB453CC",REACT_APP_SERVER_URL:"https://thebigday-backend.herokuapp.com/graphql"}).REACT_APP_USER_ID,ae=Object(q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},button:{margin:e.spacing(1)}}}));var re=function(){var e=ae(),t=Object(b.useState)([{name:"",email:"",rsvp:"",menu:""}]),n=Object(h.a)(t,2),a=n[0],r=n[1],c=Object(b.useState)(null),i=Object(h.a)(c,2),s=(i[0],i[1],Object(b.useState)(null)),o=Object(h.a)(s,2),l=o[0],u=o[1],j=Object(b.useState)(null),d=Object(h.a)(j,2),m=d[0],g=d[1],O=Object(b.useState)(null),p=Object(h.a)(O,2),f=(p[0],p[1],Object(b.useState)(null)),x=Object(h.a)(f,2),E=(x[0],x[1],Object(b.useState)(null)),I=Object(h.a)(E,2),P=(I[0],I[1],Object(b.useState)(null)),R=Object(h.a)(P,2);R[0],R[1],Object(b.useEffect)((function(){var e=V.loggedIn().organiser;console.log("this is the organiser from local storage",e),u(e.username),g(e._id)}),[]);var A=Object($.a)(D),W=Object(h.a)(A,2),L=W[0],F=(W[1].error,function(){var e=Object(S.a)(_.a.mark((function e(t){var n,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=0;case 2:if(!(n<a.length)){e.next=18;break}return console.log("i=",n,"input= ",a[n]),e.prev=4,e.next=7,L({variables:{name:a[n].name,email:a[n].email,rsvp:a[n].rsvp,menu:a[n].menu,wedding_owner:l}});case 7:r=e.sent,c=r.data,console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:n++,e.next=2;break;case 18:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()),M=function(e,t){console.log(e,t.target.name);var n=Object(v.a)(a);n[e][t.target.name]=t.target.value,r(n)},U=function(){r([].concat(Object(v.a)(a),[{name:"",email:"",rsvp:"",menu:""}]))},B=function(e){var t=Object(v.a)(a);t.splice(e,1),r(t)};function q(e){var t=Object(v.a)(a),n=t[e].email,r={name:t[e].name,email:n};N.a.send(ee,te,r,ne).then((function(e){console.log(e),alert("email sent thank you")})).catch((function(e){return console.log(e)}))}console.log("this is the current user",l);var K=Object(Z.a)(T),H=K.loading,Y=K.data;if(H)return Object(G.jsx)("p",{children:"Loading ...."});console.log("the guest list is",Y.guests);var Q=Y.guests.filter((function(e){return e.wedding_owner==l}));return console.log("the filtered guest list is",Q),Object(G.jsxs)(w.a,{children:[Object(G.jsx)("h1",{children:" Your Guest List"}),Object(G.jsx)("p",{children:" my test user id is"}),Object(G.jsxs)("p",{children:["the organiser is ",l," "]}),Object(G.jsxs)("p",{children:[" the user id is ",m]}),Object(G.jsxs)("form",{className:e.root,children:[Q.map((function(t,n){return Object(G.jsxs)("div",{children:[Object(G.jsx)(y.a,{name:"name",label:"Guest Name",value:t.name,onChange:function(e){return M(n,e)}}),Object(G.jsx)(y.a,{name:"email",label:"Email",value:t.email,onChange:function(e){return M(n,e)}}),Object(G.jsx)(y.a,{name:"rsvp",label:"RSVP",value:t.rsvp,onChange:function(e){return M(n,e)}}),Object(G.jsx)(y.a,{name:"menu",label:"Menu Choice",value:t.menu,onChange:function(e){return M(n,e)}}),Object(G.jsx)(C.a,{className:e.button,vareient:"contained",color:"secondary",onClick:function(e){return q(n)},children:"Send email"}),Object(G.jsx)(z.a,{onClick:function(){return B(n)},children:Object(G.jsx)(J.a,{})}),Object(G.jsx)(z.a,{onClick:function(){return U()},children:Object(G.jsx)(X.a,{})})]},n)})),a.map((function(t,n){return Object(G.jsxs)("div",{children:[Object(G.jsx)(y.a,{name:"name",label:"Guest Name",value:t.name,onChange:function(e){return M(n,e)}}),Object(G.jsx)(y.a,{name:"email",label:"Email",value:t.email,onChange:function(e){return M(n,e)}}),Object(G.jsx)(y.a,{name:"rsvp",label:"RSVP",value:t.rsvp,onChange:function(e){return M(n,e)}}),Object(G.jsx)(y.a,{name:"menu",label:"Menu Choice",value:t.menu,onChange:function(e){return M(n,e)}}),Object(G.jsx)(C.a,{className:e.button,vareient:"contained",color:"secondary",onClick:function(e){return q(n)},children:"Send email"}),Object(G.jsx)(z.a,{onClick:function(){return B(n)},children:Object(G.jsx)(J.a,{})}),Object(G.jsx)(z.a,{onClick:function(){return U()},children:Object(G.jsx)(X.a,{})})]},n)})),Object(G.jsx)(C.a,{className:e.button,vareient:"contained",color:"secondary",type:"submit",onClick:F,endIcon:Object(G.jsx)(k.a,{children:"save"}),children:"Save Guest List"})]})]})},ce=n(22),ie=n(293),se=n(282),oe=n(277),le=n(287),ue=n(281),je=n(104),de=n.n(je),be=n(283),me=Object(b.createContext)(null),ge=function(){return Object(b.useContext)(me)},Oe=function(e){var t=e.children,n=Object(b.useState)(null),a=Object(h.a)(n,2),r=a[0],c=a[1];return Object(G.jsx)(me.Provider,{value:{organiser:r,setOrganiser:c},children:t})},he=n(25),pe=Object(q.a)((function(e){return{root:{height:"100vh"},image:{backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function fe(){var e=pe(),t=(Object(he.f)(),ge()),n=(t.organiser,t.setOrganiser),a=Object(b.useState)({email:"",password:""}),r=Object(h.a)(a,2),c=r[0],i=r[1],s=Object($.a)(R),o=Object(h.a)(s,2),l=o[0],u=o[1],j=(u.error,u.data,function(e){var t=e.target,a=t.name,r=t.value;i(Object(p.a)(Object(p.a)({},c),{},Object(ce.a)({},a,r))),n(r)}),d=function(){var e=Object(S.a)(_.a.mark((function e(t){var a,r,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:Object(p.a)({},c)});case 4:a=e.sent,r=a.data,s=r.login.user,console.log("the new user is ",s),n(s),V.login(r.login.token,s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:i({email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsxs)(ue.a,{container:!0,component:"main",className:e.root,children:[Object(G.jsx)(se.a,{}),Object(G.jsx)(ue.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(G.jsx)(ue.a,{item:!0,xs:12,sm:8,md:5,component:oe.a,elevation:6,square:!0,children:Object(G.jsxs)("div",{className:e.paper,children:[Object(G.jsx)(ie.a,{className:e.avatar,children:Object(G.jsx)(de.a,{})}),Object(G.jsx)(be.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(G.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:d,children:[Object(G.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:j,value:c.email,autoFocus:!0}),Object(G.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:j,value:c.password}),Object(G.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(G.jsx)(ue.a,{container:!0}),Object(G.jsx)(le.a,{mt:5})]})]})})]})}var ve=Object(q.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:'url("./jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg")',backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function xe(){var e=ve(),t=Object(he.f)(),n=Object(b.useState)({username:"",email:"",password:""}),a=Object(h.a)(n,2),r=a[0],c=a[1],i=Object($.a)(A),s=Object(h.a)(i,2),o=s[0],l=(s[1].error,function(e){var t=e.target,n=t.name,a=t.value;c(Object(p.a)(Object(p.a)({},r),{},Object(ce.a)({},n,a)))}),u=function(){var e=Object(S.a)(_.a.mark((function e(n){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("the form data is",r),e.prev=2,e.next=5,o({variables:Object(p.a)({},r)});case 5:a=e.sent,a.data,t.push("/home"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsxs)(ue.a,{container:!0,component:"main",className:e.root,children:[Object(G.jsx)(se.a,{}),Object(G.jsx)(ue.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(G.jsx)(ue.a,{item:!0,xs:12,sm:8,md:5,component:oe.a,elevation:6,square:!0,children:Object(G.jsxs)("div",{className:e.paper,children:[Object(G.jsx)(ie.a,{className:e.avatar,children:Object(G.jsx)(de.a,{})}),Object(G.jsx)(be.a,{component:"h1",variant:"h5",children:"Create a new account"}),Object(G.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:u,children:[Object(G.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",onChange:l,value:r.username,autoFocus:!0}),Object(G.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:l,value:r.email,autoFocus:!0}),Object(G.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:l,value:r.password}),Object(G.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign UP"}),Object(G.jsx)(ue.a,{container:!0}),Object(G.jsx)(le.a,{mt:5})]})]})})]})}var _e=new(n(119).a)("pk_live_6164740A3CB453CC"),Se=Object(b.createContext)(null),we=Object(q.a)((function(e){return{button:{margin:e.spacing(1)}}})),ye=function(e){var t=e.onEmailSubmit,n=(e.disabled,Object(b.useState)("")),a=Object(h.a)(n,2),r=a[0],c=a[1],i=we();console.log("email is:    ",r);var s=function(){var e=Object(S.a)(_.a.mark((function e(n){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(r),localStorage.setItem("guest",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)("form",{onSubmit:s,children:[Object(G.jsx)("h3",{className:"form-header",children:"Login"}),Object(G.jsx)("div",{className:"input-wrapper",children:Object(G.jsx)("input",{placeholder:"Enter your email",size:"sm",value:r,onChange:function(e){return c(e.target.value)},prefix:Object(G.jsx)("div",{type:"",size:23,color:"#000"})})}),Object(G.jsx)("div",{children:Object(G.jsx)(C.a,{type:"submit",variant:"contained",color:"default",className:i.button,children:"Send Magic Link"})})]}),Object(G.jsx)("style",{children:"\n        form,\n        label {\n          display: flex;\n          flex-flow: column;\n          text-align: center;\n        }\n        .form-header {\n          font-size: 22px;\n          margin: 25px 0;\n        }\n        .input-wrapper {\n          width: 80%;\n          margin: 0 auto 20px;\n        }\n        \n      "})]})},Ce=function(){var e=Object(he.f)(),t=Object(b.useState)(!1),n=Object(h.a)(t,2),a=n[0],r=n[1],c=Object(b.useContext)(Se),i=Object(h.a)(c,2),s=i[0],o=i[1];function l(){return(l=Object(S.a)(_.a.mark((function t(n){var a,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,_e.auth.loginWithMagicLink({email:n,redirectURI:e.push("/guestlanding")});case 4:return a=t.sent,localStorage.setItem("guest",n),t.next=8,fetch("".concat("pk_live_6164740A3CB453CC","/api/login"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}});case 8:if(200!==t.sent.status){t.next=15;break}return t.next=12,_e.user.getMetadata();case 12:return c=t.sent,t.next=15,o(c);case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),r(!1),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}return Object(b.useEffect)((function(){s&&s.issuer&&e.push("/login")}),[s,e]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:"login",children:Object(G.jsx)(ye,{disabled:a,onEmailSubmit:function(e){return l.apply(this,arguments)}})}),Object(G.jsx)("style",{children:"\n        .login {\n          max-width: 20rem;\n          margin: 40px auto 0;\n          padding: 1rem;\n          border: 1px solid #dfe1e5;\n          border-radius: 4px;\n          text-align: center;\n          box-shadow: 0px 0px 6px 6px #f7f7f7;\n          box-sizing: border-box;\n        }\n      "})]})},ke=(n(199),n(77)),Ne={fontFamily:"sans-serif",textAlign:"center"},Ee={padding:20,position:"absolute",fontFamily:"ballada",color:"palevioletred",fontSize:"5rem",width:"100vw",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},Ie={padding:10,position:"absolute",color:"white",backgroundColor:"palevioletred",borderRadius:"25px",fontSize:"1rem",top:"90%",left:"50%",transform:"translate(-50%,-70%)"},Pe=n(200).default,Te=n(201).default,$e=n(202).default,Re=n(203).default,Ae=n(204).default,De=function(){return Object(G.jsxs)("div",{children:[Object(G.jsxs)(ke.Parallax,{bgImage:Ae,strength:-200,children:[Object(G.jsx)("div",{style:{height:"140vh"}}),Object(G.jsx)("h1",{style:Ee,children:"The Big Day"})]}),Object(G.jsxs)("div",{style:Ne,children:[Object(G.jsx)(ke.Parallax,{bgImage:Pe,strength:500,children:Object(G.jsxs)("div",{style:{height:"100vh"},children:[Object(G.jsx)("div",{style:Ee,children:"We are here to help!"}),Object(G.jsxs)("div",{style:Ie,children:[Object(G.jsx)("p",{children:"Planning a wedding can be a very magical but strssful time."}),Object(G.jsxs)("p",{children:[" ","Let us take the stress out of it for you and leave you to enjoy the magic"]})]})]})}),Object(G.jsx)(ke.Parallax,{bgImage:Te,blur:{min:-1,max:3},children:Object(G.jsxs)("div",{style:{height:"120vh"},children:[Object(G.jsx)("div",{style:Ee,children:"Send it in an Email"}),Object(G.jsx)("div",{style:Ie,children:Object(G.jsx)("p",{children:"Save time (and the planet) and send all your invites electronically from one place"})})]})}),Object(G.jsx)(ke.Parallax,{bgImage:$e,strength:1e3,children:Object(G.jsxs)("div",{style:{height:500},children:[Object(G.jsx)("div",{style:Ee,children:"Track it all"}),Object(G.jsx)("div",{style:Ie,children:Object(G.jsx)("p",{children:"For your peace of mind, track your guests' RSVPs and Menu choices from our app"})})]})}),Object(G.jsx)(ke.Parallax,{bgImage:Re,strength:200,renderLayer:function(e){return Object(G.jsx)("div",{children:Object(G.jsx)("div",{style:{position:"absolute",background:"rgba(255, 125, 0, ".concat(1*e,")"),left:"50%",top:"50%",borderRadius:"50%",transform:"translate(-50%,-50%)",width:500*e,height:500*e}})})},children:Object(G.jsx)("div",{style:{height:1e3},children:Object(G.jsxs)("div",{style:Ee,children:[" ",Object(G.jsx)(f.c,{to:"/createuser",children:"Sign up now"})]})})}),Object(G.jsx)("div",{style:{height:500}}),Object(G.jsx)("h2",{children:"\u2728"})]})]})},We=function(e){var t=e.deadline,n=Object(b.useState)(0),a=Object(h.a)(n,2),r=a[0],c=a[1],i=Object(b.useState)(0),s=Object(h.a)(i,2),o=s[0],l=s[1],u=Object(b.useState)(0),j=Object(h.a)(u,2),d=j[0],m=j[1],g=Object(b.useState)(0),O=Object(h.a)(g,2),p=O[0],f=O[1],v=function(e){return e<10?"0"+e:e},x=function(e){var t=Date.parse(e)-Date.parse(new Date);t<0?(c(0),l(0),m(0),f(0)):(c(Math.floor(t/864e5)),l(Math.floor(t/36e5%24)),m(Math.floor(t/1e3/60%60)),f(Math.floor(t/1e3%60)))};return Object(b.useEffect)((function(){return setInterval((function(){return x(t)}),1e3),function(){return x(t)}}),[t]),Object(G.jsxs)("div",{children:[Object(G.jsxs)("h5",{className:"Clock-days",children:[v(r)," Days"]}),Object(G.jsxs)("h5",{className:"Clock-hours",children:[v(o)," Hours"]}),Object(G.jsxs)("h5",{className:"Clock-minutes",children:[v(d)," Minutes"]}),Object(G.jsxs)("h5",{className:"Clock-seconds",children:[v(p)," Seconds"]})]})},Le=function(e){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(We,{deadline:e.deadline})})},Fe=(n(205),function(e){Object(he.f)();var t=Object(b.useContext)(Se),n=Object(h.a)(t,2),a=(n[0],n[1],Object(b.useState)(null)),r=Object(h.a)(a,2),c=(r[0],r[1],Object(b.useState)(null)),i=Object(h.a)(c,2),s=i[0],o=i[1],l=Object(b.useState)(null),u=Object(h.a)(l,2),j=u[0],d=u[1];Object(b.useEffect)((function(){var e=V.loggedIn().organiser;console.log("this is the organiser from local storage",e),o(e.username),d(e._id)}),[]),console.log("the currentUser is ",s),console.log("the current ID is",j);var m=Object(Z.a)(P),g=m.loading,O=m.data;if(g)return Object(G.jsx)("p",{children:" loading ..."});console.log("the wedding data from wedding query is",O);var p=O.weddings.filter((function(e){return e.wedding_owner==s}));return console.log("the wedding data is ",O.weddings),console.log("the filtered wedding data is ",p),Object(G.jsxs)("div",{className:"bigcontainer",children:[Object(G.jsx)("h1",{children:" Welcome to your wedding"}),Object(G.jsx)("div",{children:p.map((function(e){return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:Object(G.jsxs)("h2",{className:"heading",style:{marginBottom:"5vh"},children:[e.bride_first_name," & ",e.groom_first_name]})}),Object(G.jsx)("p",{children:"you are getting married on"}),Object(G.jsx)("h3",{style:{marginBottom:"5vh"},children:e.date}),Object(G.jsx)("p",{children:"that's in"}),Object(G.jsx)(Le,{style:{marginBottom:"5vh"},deadline:e.date}),Object(G.jsx)("p",{children:" You have invited your friends and family to join you at "}),Object(G.jsx)("h3",{children:e.venue}),Object(G.jsx)("p",{children:" and you have offered them a menu choice of"}),Object(G.jsx)("h2",{children:e.menu_choice})]})}))})]})}),Me=n(151),Ue=n(288),Be=n(289),Ve=n(284),qe=n(150),Ge=(n(139),n(285),n.p+"static/media/rose.bcee8332.png"),Ke=(n(216),n(217),n.p+"static/media/gl.f232ed18.jpg"),He=n.p+"static/media/loc.d6d1f7fc.jpg",ze=n.p+"static/media/clock.46432272.jpg";var Ye=function(){var e=Object(b.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(null),c=Object(h.a)(r,2),i=c[0],s=c[1],o=Object(b.useState)([]),l=Object(h.a)(o,2),u=l[0],j=l[1],d=Object(b.useState)(!1),m=Object(h.a)(d,2),g=m[0],O=m[1],p=Object(b.useState)([]),f=Object(h.a)(p,2),v=f[0],x=f[1],w=Object(Z.a)(P);console.log("all the weddings are :: ",w.data);var y=localStorage.getItem("guest");console.log("the stored email is ",y);var C=Object($.a)(L),k=Object(h.a)(C,2),N=k[0],E=(k[1].error,Object($.a)(F)),I=Object(h.a)(E,1)[0],R=Object(Z.a)(T),A=(R.loading,R.data);if(Object(b.useEffect)((function(){if(A){O(!0);var e=A.guests.filter((function(e){return e}));if(e.length){var t=e[0].wedding_owner,n=w&&w.data.weddings.filter((function(e){return e.wedding_owner==t}));j(e),x(n),O(!1)}else O(!1)}}),[A]),g)return Object(G.jsx)("p",{children:"loading"});console.log("menu options as "),console.log("the rsvp state=",n),console.log("the menustate is",i);var D=function(){var e=Object(S.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=u[0].email,console.log("the emai is ",a),e.prev=3,e.next=6,N({variables:{rsvp:n,email:a}});case 6:r=e.sent,r.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(S.a)(_.a.mark((function e(t){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=u[0].email,console.log("the emai is ",n),e.prev=3,e.next=6,I({variables:{menu:i,email:n}});case 6:a=e.sent,a.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)("div",{className:"bg container content d-flex flex-row p-2 justify-content-between",children:v.length?Object(G.jsx)("div",{className:"container content d-flex flex-row p-2 justify-content-between",children:Object(G.jsx)("div",{className:"row",children:Object(G.jsxs)("div",{className:"col-sm- talk",children:[Object(G.jsxs)("h1",{children:[v.length&&v[0].bride_first_name," &"," ",v.length&&v[0].groom_first_name]}),Object(G.jsx)("h1",{children:"would love to welcome you to their wedding"}),Object(G.jsx)("h1",{children:v.length&&v[0].name}),Object(G.jsx)("br",{}),Object(G.jsx)("img",{className:"img",src:Ke}),Object(G.jsxs)("div",{className:"container content d-flex flex-column p-2",children:[Object(G.jsxs)("form",{className:"mb-5",onSubmit:D,children:[Object(G.jsx)("h1",{children:Object(G.jsx)("label",{for:"Menu",children:"Please RSVP"})}),Object(G.jsxs)("select",{id:"rsvp",name:"rsvp",onChange:function(e){console.log("what is the rsvp choice ",e.target.value),a(e.target.value)},children:[Object(G.jsx)("option",{value:"choose",children:"Choose"}),Object(G.jsx)("option",{value:"yes",children:"Yes"}),Object(G.jsx)("option",{value:"no",children:"No"})]}),Object(G.jsx)("input",{type:"submit",value:"Submit"})]}),Object(G.jsxs)("form",{onSubmit:W,children:[Object(G.jsx)("h1",{children:Object(G.jsx)("label",{for:"Menu",children:"Choose your preferred Menu:"})}),Object(G.jsxs)("select",{id:"menu",name:"mwnu",onChange:function(e){console.log("what is the food",e.target.value),s(e.target.value)},children:[Object(G.jsx)("option",{vlaue:"choose",children:" Choose"}),Object(G.jsx)("option",{value:"vegan",children:"Vegan"}),Object(G.jsx)("option",{value:"vegeterian",children:"Vegeterian"}),Object(G.jsx)("option",{value:"meat",children:"Meat"})]}),Object(G.jsx)("input",{type:"submit",value:"Submit"})]}),Object(G.jsxs)("div",{className:"container content d-flex flex-column p-2",children:[Object(G.jsxs)("h1",{children:["We will Celebrate it at:",Object(G.jsx)("br",{}),v.length&&v[0].location]}),Object(G.jsx)("img",{className:"location",src:He}),Object(G.jsx)("br",{}),Object(G.jsxs)("h1",{children:["On ",Object(G.jsx)("br",{})," ",v.length&&v[0].date]}),Object(G.jsx)("br",{}),Object(G.jsx)("h6",{className:"bold-four",children:"We would love it if you could join us in our celebration. Please RSVP above to let us know. If you have any seperate diatery requirements please send us a message and we will do our best to accomnodate them."}),Object(G.jsx)("img",{src:ze,className:"clock"}),Object(G.jsx)("br",{}),Object(G.jsx)("h1",{children:"COUNTDOWN"}),v.length&&Object(G.jsx)(Le,{deadline:v[0].date})]})]})]})})}):null})},Je=(n(218),[{label:"Home",url:"/",cName:"nav-links"},{label:"Guest login",url:"/login",cName:"nav-links"},{label:"Couple login",url:"/home",cName:"nav-links"},{label:"Signup",url:"/createuser",cName:"nav-links"}]),Qe=[{label:"My Guests",url:"/guests",cName:"nav-links"},{label:"Wedding",url:"/viewwedding",cName:"nav-links"},{label:"Create Wedding",url:"/createwedding",cName:"nav-links"}],Xe=[{label:"Wedding",url:"/guestlanding",cName:"nav-links"}];n(235);var Ze=function(){var e,t,n=Object(b.useState)(!1),a=Object(h.a)(n,2),r=a[0],c=a[1],i=Object(b.useState)(""),s=Object(h.a)(i,2),o=s[0],l=s[1],u=Object(he.f)(),j=Object(b.useState)(""),d=Object(h.a)(j,2);return d[0],d[1],Object(b.useEffect)((function(){var e=localStorage.getItem("user"),t=localStorage.getItem("guest");e?(console.log("USER ",e,localStorage.getItem("user")),l("couple")):t&&l("guest")})),Object(G.jsxs)("nav",{className:"NavBarItems",role:"navigation",children:[Object(G.jsx)("div",{className:"logo",children:Object(G.jsx)(f.c,{to:"/",children:Object(G.jsx)("img",{className:"rose",src:Ge,alt:"brand"})})}),Object(G.jsx)("div",{className:"menu-icon",onClick:function(){c(!r)},children:Object(G.jsx)("i",{className:r?"fas fa-times":"fas fa-bars"})}),Object(G.jsxs)("ul",{className:r?"nav-menu active":"nav-menu",children:[""===o&&Je.map((function(e,t){return Object(G.jsx)("li",{onClick:function(){return c(!1)},kew:t,children:Object(G.jsx)(f.c,{className:e.cName,to:e.url,children:e.label})})})),"couple"===o&&Qe.map((function(e,t){return Object(G.jsx)("li",{onClick:function(){return c(!1)},children:Object(G.jsx)(f.c,{className:e.cName,to:e.url,children:e.label})},t)})),"couple"==o&&Object(G.jsx)("li",(e={onClick:function(){return c(!1)},className:"nav-links"},Object(ce.a)(e,"onClick",(function(e){e.preventDefault(),V.logout(),console.log("LINE NO #666 ",localStorage.getItem("user")),l(""),u.push("/")})),Object(ce.a)(e,"children","Couple Logout"),e)),"guest"===o&&Xe.map((function(e,t){return Object(G.jsx)("li",{onClick:function(){return c(!1)},children:Object(G.jsx)(f.c,{className:e.cName,to:e.url,children:e.label})},t)})),"guest"==o&&Object(G.jsx)("li",(t={onClick:function(){return c(!1)},className:"nav-links"},Object(ce.a)(t,"onClick",(function(e){e.preventDefault(),V.logout(),l(""),u.push("/")})),Object(ce.a)(t,"children","Guest Logout"),t))]})]})},et=n(73),tt=["component","restricted"],nt=function(e){var t=e.component,n=(e.restricted,Object(et.a)(e,tt));return Object(G.jsx)(he.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return localStorage.getItem("guest")?Object(G.jsx)(he.a,{to:"/guestlanding"}):localStorage.getItem("user")?Object(G.jsx)(he.a,{to:"/guests"}):Object(G.jsx)(t,Object(p.a)({},e))}}))},at=["component"],rt=function(e){var t=e.component,n=Object(et.a)(e,at);return Object(G.jsx)(he.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return localStorage.getItem("guest")?Object(G.jsx)(t,Object(p.a)({},e)):Object(G.jsx)(he.a,{to:"/"})}}))},ct=["component"],it=function(e){var t=e.component,n=Object(et.a)(e,ct);return Object(G.jsx)(he.b,Object(p.a)(Object(p.a)({},n),{},{render:function(e){return localStorage.getItem("user")?Object(G.jsx)(t,Object(p.a)({},e)):Object(G.jsx)(he.a,{to:"/"})}}))},st=Object(Me.a)({uri:"https://thebigday-backend.herokuapp.com/graphql"}),ot=Object(qe.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(p.a)(Object(p.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),lt=new Ue.a({link:ot.concat(st),cache:new Be.a});var ut=function(){var e=ge();console.log("party context=",e);var t=Object(b.useState)(),n=Object(h.a)(t,2),a=n[0],r=n[1],c=Object(b.useState)(!1),i=Object(h.a)(c,2);return i[0],i[1],Object(b.useEffect)((function(){var e=V.loggedIn().organiser;console.log("this is the organiser from local storage",e)}),[]),Object(b.useEffect)((function(){r({loading:!0}),_e.user.isLoggedIn().then((function(e){return e?_e.user.getMetadata().then((function(e){return r(e)})):r({user:null})}))}),[]),Object(G.jsx)(Ve.a,{client:lt,children:Object(G.jsx)(Oe,{children:Object(G.jsx)(Se.Provider,{value:[a,r],children:Object(G.jsx)(f.a,{children:Object(G.jsxs)(f.b,{children:[Object(G.jsx)(Ze,{}),Object(G.jsx)(nt,{path:"/",exact:!0,component:De}),Object(G.jsx)(nt,{exact:!0,path:"/home",component:fe}),Object(G.jsx)(nt,{path:"/login",component:Ce}),Object(G.jsx)(rt,{exact:!0,path:"/guestlanding",component:Ye}),Object(G.jsx)(it,{exact:!0,path:"/guests",component:re}),Object(G.jsx)(it,{exact:!0,path:"/createwedding",component:H}),Object(G.jsx)(it,{exact:!0,path:"/viewwedding",component:Fe}),Object(G.jsx)(nt,{exact:!0,path:"/createuser",component:xe})]})})})})})},jt=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,298)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};O.a.render(Object(G.jsx)(m.a.StrictMode,{children:Object(G.jsx)(ut,{})}),document.getElementById("root")),jt()}},[[236,1,2]]]);
//# sourceMappingURL=main.98452a41.chunk.js.map