(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=n(32),s=n(15),l=n(19),u=n(12),d=n(42),j=n(216),b=n(204),m=n(203),p=n(214),h=n(200),g=n(99),O=n(215),x=n(202),f=n(162),v=n(201),y=n(50),k=n.n(y),w=n(21),C=n(66),S=n(25),N=n.n(S),T=n(43),I="https://buen-sabor-api.herokuapp.com/api",E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(I,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},B=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(I,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},D="[auth] Finish cheking login state",W="[auth] login",L="[auth] Logout",q="[articles] obtaining articles",G="[articles] quiting article",M="[cart] adding item to cart",R=n(37),F=n.n(R),A=function(){return{type:D}},P=function(e){return{type:W,payload:e}},_=function(){return{type:L}},z=n(2);function H(){return Object(z.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(h.a,{color:"inherit",href:"https://genshin.gg/",children:"Program1.h -"})," ",(new Date).getFullYear(),"."]})}var J=Object(v.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),V=function(){var e=J(),t=function(e){console.log(e);var t=e.tokenId;n(function(e){return function(){var t=Object(T.a)(N.a.mark((function t(n){var a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("auth/google",{id_token:e},"POST");case 2:return a=t.sent,t.next=5,a.json();case 5:"Google OK"===(r=t.sent).msg?(localStorage.setItem("tokenGoogle",r.token),localStorage.setItem("tokenGoogle-init-date",(new Date).getTime()),n(P({uid:r.usuario.uid,name:r.usuario.nombre,resto:r.usuario}))):F.a.fire("Error","".concat(r.msg),"warning");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},n=Object(w.b)(),r=Object(a.useState)({email:"",password:""}),c=Object(d.a)(r,2),o=c[0],s=c[1],v=o.email,y=o.password,S=function(e){var t=e.target;s(Object(u.a)(Object(u.a)({},o),{},Object(l.a)({},t.name,t.value)))};return Object(z.jsxs)(x.a,{container:!0,component:"main",className:e.root,children:[Object(z.jsx)(m.a,{}),Object(z.jsx)(x.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(z.jsx)(x.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0,children:Object(z.jsxs)("div",{className:e.paper,children:[Object(z.jsx)(j.a,{className:e.avatar,children:Object(z.jsx)(k.a,{})}),Object(z.jsx)(f.a,{component:"h1",variant:"h5",children:"Bienvenido Al Buen Sabor!"}),Object(z.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){if(e.preventDefault(),""===v||""===y)return F.a.fire("","Complete Los Campos!","warning");n(function(e,t){return function(){var n=Object(T.a)(N.a.mark((function n(a){var r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E("auth/login",{email:e,password:t},"POST");case 2:return r=n.sent,n.next=5,r.json();case 5:c=n.sent,console.log(c),"Login OK"===c.msg?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(P({uid:c.usuario.uid,name:c.usuario.nombre,resto:c.usuario}))):F.a.fire("Error","".concat(c.msg),"warning");case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(v,y))},children:[Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:S}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"current-password",onChange:S}),Object(z.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,children:"Iniciar Sesi\xf3n"}),Object(z.jsx)(C.GoogleLogin,{clientId:"1068418280364-qlcmg4k58169if3h5jis6plnfmvml8e8.apps.googleusercontent.com",buttonText:"Iniciar Sesi\xf3n Con Google",onSuccess:t,isSignedIn:!0,onFailure:t}),Object(z.jsxs)(x.a,{container:!0,children:[Object(z.jsx)(x.a,{item:!0,xs:!0}),Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(h.a,{component:i.b,to:"/new-user",type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,children:"Aun No Tienes Cuenta? Registrate Aqui!"})})]}),Object(z.jsx)(O.a,{mt:5,children:Object(z.jsx)(H,{})})]})]})})]})};function Y(){return Object(z.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(h.a,{color:"inherit",href:"https://genshin.gg/",children:"Program1.h -"})," ",(new Date).getFullYear(),"."]})}var X=Object(v.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Z=function(){var e=X(),t=Object(w.b)(),n=Object(a.useState)({nombre:"",apellido:"",email:"",password:"",telefono:"",img:"",rol:"USER_ROLE"}),r=Object(d.a)(n,2),c=r[0],o=r[1],s=c.nombre,v=c.apellido,y=c.email,C=c.password,S=c.telefono,I=c.rol,B=c.localidad,D=c.calle,W=c.numero,L=c.domicilio,q=c.img,G=function(e){var t,n,a=e.target;o(Object(u.a)(Object(u.a)({},c),{},(n={},Object(l.a)(n,a.name,a.value),Object(l.a)(n,"domicilio",(t={calle:D},Object(l.a)(t,a.name,a.value),Object(l.a)(t,"localidad",B),Object(l.a)(t,a.name,a.value),Object(l.a)(t,"numero",W),Object(l.a)(t,a.name,a.value),t)),n)))};return Object(z.jsxs)(x.a,{container:!0,component:"main",className:e.root,children:[Object(z.jsx)(m.a,{}),Object(z.jsx)(x.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(z.jsx)(x.a,{item:!0,xs:12,sm:8,md:5,component:g.a,elevation:6,square:!0,children:Object(z.jsxs)("div",{className:e.paper,children:[Object(z.jsx)(j.a,{className:e.avatar,children:Object(z.jsx)(k.a,{})}),Object(z.jsx)(f.a,{component:"h1",variant:"h5",children:"Registro Nuevo Cliente"}),Object(z.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log(c),t(function(e,t,n,a,r,c,o,i){return function(){var s=Object(T.a)(N.a.mark((function s(l){var u,d;return N.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,E("usuarios",{nombre:e,apellido:t,email:n,password:a,telefono:r,rol:c,domicilio:o,img:i},"POST");case 2:return u=s.sent,s.next=5,u.json();case 5:d=s.sent,console.log(d),"Login OK"===d.msg?(localStorage.setItem("token",d.token),localStorage.setItem("token-init-date",(new Date).getTime()),l(P({uid:d.usuario.uid,name:d.usuario.nombre}))):F.a.fire("","".concat(d.errors[0].msg),"warning");case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(s,v,y,C,S,I,L,q))},children:[Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"nombre",label:"Nombre",name:"nombre",autoFocus:!0,onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"apellido",label:"Apellido",type:"text",id:"apellido",onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"email",label:"E-Mail",type:"text",id:"email",onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"telefono",label:"Telefono",type:"text",id:"telefono",onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"calle",label:"Calle",type:"text",id:"calle",onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"localidad",label:"Localidad",type:"text",id:"localidad",onChange:G}),Object(z.jsx)(p.a,{variant:"outlined",margin:"normal",required:"true",fullWidth:!0,name:"numero",label:"Numero",type:"number",id:"numero",onChange:G}),Object(z.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,children:"Crear Cuenta"}),Object(z.jsxs)(x.a,{container:!0,children:[Object(z.jsx)(x.a,{item:!0,xs:!0}),Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(h.a,{component:i.b,to:"/",type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,children:"Ya Tienes Cuenta? Inicia Sesi\xf3n!"})})]}),Object(z.jsx)(O.a,{mt:5,children:Object(z.jsx)(Y,{})})]})]})})]})},K=n(20),U=n(207),Q=n(208),$=n(205),ee=n(217),te=n(206),ne=n(218),ae=n(95),re=n(89),ce=n.n(re),oe=n(90),ie=n.n(oe),se=n(79),le=n.n(se),ue=Object(v.a)((function(e){return{grow:{flexGrow:1},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),avatarName:{alignContent:"center"},search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function de(){var e=ue(),t=r.a.useState(null),n=Object(d.a)(t,2),a=n[0],c=n[1],o=r.a.useState(null),i=Object(d.a)(o,2),s=i[0],l=i[1],u=Boolean(a),b=Boolean(s),m=function(e){c(e.currentTarget)},p=function(){l(null)},h=function(){c(null),p()},g=Object(w.c)((function(e){return e.auth.resto})),O=g.nombre,x=g.img,v=g.google,y=Object(w.b)(),S=function(){y((function(e){localStorage.clear(),e(_())}))},N="primary-search-account-menu",T=Object(z.jsxs)(ae.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:N,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:h,children:[Object(z.jsx)(ne.a,{onClick:h,children:"Perfil"}),!0===v?Object(z.jsx)(ne.a,{children:Object(z.jsx)(C.GoogleLogout,{clientId:"1068418280364-qlcmg4k58169if3h5jis6plnfmvml8e8.apps.googleusercontent.com",render:function(e){return Object(z.jsxs)("button",{type:"button",className:"btn dropdown-item",onClick:e.onClick,disabled:e.disabled,children:[Object(z.jsx)("img",{src:"assets/images/logout.svg",alt:"logout",style:{maxHeight:"23px",maxWidth:"23px"}}),"\xa0Cerrar Sesi\xf3n"]})},buttonText:"Cerrar Sesi\xf3n",onLogoutSuccess:S})}):Object(z.jsx)(ne.a,{onClick:S,children:"Cerrar Sesi\xf3n"})]}),I="primary-search-account-menu-mobile",E=Object(z.jsxs)(ae.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:p,children:[Object(z.jsxs)(ne.a,{children:[Object(z.jsx)($.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(z.jsx)(te.a,{badgeContent:4,color:"secondary",children:Object(z.jsx)(le.a,{})})}),Object(z.jsx)("p",{children:"Carrito"})]}),Object(z.jsxs)(ne.a,{onClick:m,children:[Object(z.jsxs)($.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:[Object(z.jsx)(f.a,{className:e.avatarName,children:O}),Object(z.jsx)(j.a,{alt:"Remy Sharp",src:x,className:e.large})]}),Object(z.jsx)("p",{children:"Perfil"})]})]});return Object(z.jsxs)("div",{className:e.grow,children:[Object(z.jsx)(U.a,{position:"absolute",children:Object(z.jsxs)(Q.a,{children:[Object(z.jsx)(k.a,{}),Object(z.jsx)(f.a,{className:e.title,variant:"h6",noWrap:!0,children:"El Buen Sabor"}),Object(z.jsxs)("div",{className:e.search,children:[Object(z.jsx)("div",{className:e.searchIcon,children:Object(z.jsx)(ce.a,{})}),Object(z.jsx)(ee.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(z.jsx)("div",{className:e.grow}),Object(z.jsxs)("div",{className:e.sectionDesktop,children:[Object(z.jsx)($.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(z.jsx)(te.a,{badgeContent:4,color:"secondary",children:Object(z.jsx)(le.a,{})})}),Object(z.jsx)($.a,{edge:"end","aria-label":"account of current user","aria-controls":N,"aria-haspopup":"true",onClick:m,color:"inherit",children:Object(z.jsx)(j.a,{alt:"Remy Sharp",src:x,className:e.large})})]}),Object(z.jsx)("div",{className:e.sectionMobile,children:Object(z.jsx)($.a,{"aria-label":"show more","aria-controls":I,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit",children:Object(z.jsx)(ie.a,{})})})]})}),E,T]})}var je=n(209),be=Object(v.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)}}})),me=function(){var e=be();return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("div",{className:e.heroContent,children:Object(z.jsxs)(je.a,{maxWidth:"sm",children:[Object(z.jsx)(f.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Bienvenido Al Buen Sabor!"}),Object(z.jsx)(f.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"}),Object(z.jsx)("div",{className:e.heroButtons,children:Object(z.jsxs)(x.a,{container:!0,spacing:2,justify:"center",children:[Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(b.a,{variant:"contained",color:"primary",children:"Main call to action"})}),Object(z.jsx)(x.a,{item:!0,children:Object(z.jsx)(b.a,{variant:"outlined",color:"primary",children:"Secondary action"})})]})})]})})})},pe=n(210),he=n(213),ge=n(212),Oe=n(211),xe=Object(v.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"80.25%"},cardContent:{flexGrow:1}}})),fe=function(e){var t=e.product,n=xe();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(pe.a,{className:n.card,children:[Object(z.jsx)(Oe.a,{className:n.cardMedia,image:t.imagen,title:"Image title"}),Object(z.jsxs)(ge.a,{className:n.cardContent,children:[Object(z.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.denominacion}),Object(z.jsx)(f.a,{children:"This is a media card. You can use this section to describe the content."})]}),Object(z.jsx)(he.a,{children:Object(z.jsx)(b.a,{size:"small",color:"primary",children:"Add To Cart"})})]})})};function ve(){return Object(z.jsxs)(f.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(h.a,{color:"inherit",href:"https://genshin.gg",children:"El Buen Sabor"})," ",(new Date).getFullYear(),"."]})}var ye=Object(v.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),ke=function(){var e=ye();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("footer",{className:e.footer,children:[Object(z.jsx)(f.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(z.jsx)(f.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(z.jsx)(ve,{})]})})},we=Object(v.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),Ce=function(){var e=Object(w.c)((function(e){return e.article.articulos})),t=we();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(de,{}),Object(z.jsx)(me,{}),Object(z.jsx)(je.a,{className:t.cardGrid,maxWidth:"md",children:Object(z.jsx)(x.a,{container:!0,spacing:4,children:e.map((function(e){return Object(z.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,children:Object(z.jsx)(fe,{product:e},e._id)},e._id)}))})}),Object(z.jsx)(ke,{})]})},Se=n(70),Ne=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Se.a)(e,["isAuthenticated","component"]);return Object(z.jsx)(s.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(z.jsx)(s.a,{to:"/product-list"}):Object(z.jsx)(n,Object(u.a)({},e))}}))},Te=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Se.a)(e,["isAuthenticated","component"]);return Object(z.jsx)(s.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(z.jsx)(n,Object(u.a)({},e)):Object(z.jsx)(s.a,{to:"/"})}}))},Ie=n(91),Ee=function(e){return{type:q,payload:e}},Be=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(T.a)(N.a.mark((function e(t){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("auth/renewtoken");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(P({uid:a._id,name:a.nombre,resto:a.usuario}))):t(A());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(T.a)(N.a.mark((function e(t){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("articulos","GET");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).status?t(Ee({articulos:a.articulos,msg:a.msg})):F.a.fire("Error","".concat(a.msg),"warning");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(z.jsx)(Ie.SemipolarLoading,{}):Object(z.jsxs)(i.a,{children:[Object(z.jsxs)(s.d,{children:[Object(z.jsx)(Ne,{exact:!0,path:"/",component:V,isAuthenticated:!!r}),Object(z.jsx)(Ne,{exact:!0,path:"/new-user",component:Z}),Object(z.jsx)(Te,{exact:!0,path:"/product-list",component:Ce,isAuthenticated:!!r})]}),Object(z.jsx)(s.a,{path:"/"})]})},De=n(36),We=n(94),Le={checking:!0},qe={checking:!0,articles:[],error:null},Ge=n(82),Me={checking:!0,cart:[],error:null},Re=Object(De.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case D:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case L:return{checking:!1};default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(u.a)(Object(u.a)({},e),{},{cart:[].concat(Object(Ge.a)(e.cart),[t.payload]),checking:!1});case G:return Object(u.a)(Object(u.a)({},e),{},{cart:Object(Ge.a)(e.cart.filter((function(e){return e.action.payload})))});default:return e}}}),Fe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||De.d,Ae=Object(De.e)(Re,Fe(Object(De.a)(We.a)));var Pe=function(){return Object(z.jsx)(w.a,{store:Ae,children:Object(z.jsx)(Be,{})})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(z.jsx)(Pe,{}),document.getElementById("root")),_e()}},[[160,1,2]]]);
//# sourceMappingURL=main.505e72b0.chunk.js.map