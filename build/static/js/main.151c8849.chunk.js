(this.webpackJsonppeople=this.webpackJsonppeople||[]).push([[0],{126:function(e,n,t){},127:function(e,n,t){"use strict";t.r(n);var a,i,c,r,o,s,l,j,d,b,x,p,m,h,O,u,g,f,v,w,y,k=t(0),z=t.n(k),C=t(11),M=t.n(C),S=t(88),N=t(46),I=t(89),R=t(179),B=t(90),T={people:[],contacts:[],favourites:[]},D=Object(B.a)({reducer:{people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return e}}}),L=t(14),F=t(9),J=t(7),W=t(10),E=t(15),A=t(164),P=t(165),G=t(182),H=t(167),U=t(166),$=t(168),_=t(169),q=t(156),K=t(160),Q=t(161),V=t(162),X=t(163),Y=t(2),Z=W.a.ul(a||(a=Object(F.a)(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"]))),ee=W.a.li(i||(i=Object(F.a)(["\n    color: white;\n    text-transform: uppercase;\n    text-decoration: none;\n"]))),ne=Object(W.a)(N.b)(c||(c=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    color: white;\n    text-transform: uppercase;\n    text-decoration: none;\n    box-sizing: border-box;\n    padding: 10px 40px;\n\n    &.active {\n        background: #39a6f3;\n    }\n\n    @media (max-width: 1023px) {\n        padding: 10px 20px;\n    }\n"]))),te=W.a.div(r||(r=Object(F.a)(["\n    margin-left: 5px;\n"]))),ae=function(e){var n=e.mobile,t=e.hideMobileMenu,a=[{path:"/home",title:"Home",icon:Object(Y.jsx)(q.a,{color:"white"})},{path:"/contacts",title:"Contacts",icon:Object(Y.jsx)(K.a,{color:"white"})},{path:"/favourites",title:"Favourites",icon:Object(Y.jsx)(Q.a,{color:"white"})},{path:"/people",title:"People",icon:Object(Y.jsx)(V.a,{color:"white"})},{path:"/companies",title:"Companies",icon:Object(Y.jsx)(X.a,{color:"white"})}];return Object(Y.jsx)("nav",{children:Object(Y.jsx)(Z,{children:a.map((function(e){return Object(Y.jsx)(ee,{children:Object(Y.jsxs)(ne,{className:function(e){return e.isActive?"active":""},onClick:function(){n&&t()},to:e.path,children:[e.icon,Object(Y.jsx)(te,{children:e.title})]})},(new Date).toString)}))})})},ie="#39a6f3",ce="#a4a3a3",re=Object(A.a)((function(e){return{avatar:{width:e.spacing(22),height:e.spacing(22),margin:"0 auto"},closeIcon:Object(E.a)({position:"absolute",right:"10px",top:"10px"},e.breakpoints.up("sm"),{display:"none"})}})),oe=W.a.div(o||(o=Object(F.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 20px 0;\n    background: black;\n    color: white;\n    @media (max-width: 1023px) {\n        width: 230px;\n    }\n    @media (max-width: 767px) {\n        width: 100%;\n        align-items: center;\n        z-index: 100;\n        transform: translate(-100%);\n        transition: transform 0.3s linear;\n        &.active {\n            transform: translate(0);\n        }\n    }\n"]))),se=W.a.div(s||(s=Object(F.a)(["\n    font-size: 30px;\n    font-weight: 700;\n    text-align: center;\n    text-transform: uppercase;\n    color: ",";\n    margin: 10px 0;\n"])),ce),le=W.a.div(l||(l=Object(F.a)(["\n    text-align: center;\n    color: ",";\n"])),ie),je=W.a.div(j||(j=Object(F.a)(["\n    box-sizing: border-box;\n    padding: 0 40px;\n    @media (max-width: 1023px) {\n        padding: 0 20px;\n    }\n"]))),de=function(e){var n=e.mobile,t=e.onMobileMenuToggle,a=re();return Object(Y.jsxs)(oe,{className:n?"active":"",children:[Object(Y.jsx)(P.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:t,className:a.closeIcon,children:Object(Y.jsx)(U.a,{color:"secondary"})}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(G.a,{alt:"avatar",src:"/assets/images/man.jpeg",className:a.avatar})}),Object(Y.jsx)(se,{children:"John Doe"}),Object(Y.jsx)(le,{children:"Sunscript, CEO"})]}),Object(Y.jsx)(ae,{mobile:n,hideMobileMenu:function(){t()}}),Object(Y.jsxs)(je,{children:[Object(Y.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)($.a,{color:"primary"})}),Object(Y.jsx)(H.a,{children:"Settings"})]}),Object(Y.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)(_.a,{color:"primary"})}),Object(Y.jsx)(H.a,{item:!0,children:"Logout"})]})]})]})},be=t(83),xe=t.n(be),pe=t(181),me=function(){return Object(Y.jsx)(pe.a,{id:"outlined-basic",type:"search",label:"Search",variant:"outlined"})},he=Object(A.a)((function(e){return{avatar:{width:"40px",height:"40px",margin:"5px 10px 0 0"},menuIcon:Object(E.a)({position:"absolute",top:"10px",right:"10px"},e.breakpoints.up("sm"),{display:"none"})}})),Oe=W.a.div(d||(d=Object(F.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 40px;\n    @media (max-width: 767px) {\n        margin-top: 20px;\n    }\n    @media (max-width: 500px) {\n        flex-direction: column-reverse;\n    }\n"]))),ue=W.a.div(b||(b=Object(F.a)(["\n    display: flex;\n    align-items: center;\n"]))),ge=W.a.div(x||(x=Object(F.a)(["\n    display: flex;\n    align-items: center;\n    text-align: right;\n    & img {\n        margin-left: 10px;\n    }\n    @media (max-width: 500px) {\n        margin-bottom: 20px;\n    }\n"]))),fe=function(e){var n=e.onMobileMenuToggle,t=he();return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(P.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,className:t.menuIcon,children:Object(Y.jsx)(xe.a,{color:"primary"})}),Object(Y.jsxs)(Oe,{children:[Object(Y.jsx)(me,{}),Object(Y.jsxs)(ge,{children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:"Welcome,"}),Object(Y.jsxs)(ue,{children:[Object(Y.jsx)(G.a,{className:t.avatar,children:"JD"}),Object(Y.jsx)("div",{children:"Jon Doe"})]})]}),Object(Y.jsx)("img",{alt:"logo",src:"/assets/images/logo.png",width:"70px"})]})]})]})},ve=W.a.h1(p||(p=Object(F.a)(["\n    font-size: 46px;\n    font-weight: 700;\n    color: ",";\n    margin: 15px 0 30px;\n    @media (max-width: 1023px) {\n        font-size: 40px;\n    }\n    @media (max-width: 767px) {\n        font-size: 26px;\n    }\n"])),ie),we=function(e){var n=e.title;return Object(Y.jsx)(ve,{children:n})},ye=function(){return Object(Y.jsx)(we,{title:"Home"})},ke=t(178),ze=t(87),Ce=t.n(ze),Me=t(84),Se=t.n(Me),Ne=function(){return Object(Y.jsx)(Se.a,{color:"primary"})},Ie=t(85),Re=t.n(Ie),Be=function(){return Object(Y.jsx)(Re.a,{color:"primary"})},Te=t(172),De=t(180),Le=t(184),Fe=Object(A.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),Je=function(){var e=Object(k.useState)("Lviv"),n=Object(L.a)(e,2),t=n[0],a=n[1],i=Fe();return Object(Y.jsx)(Te.a,{className:i.formControl,children:Object(Y.jsxs)(De.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,onChange:function(e){return a(e)},children:[Object(Y.jsx)(Le.a,{value:"Lviv",children:"Ukraine, Lviv"}),Object(Y.jsx)(Le.a,{value:"Minks",children:"Belarus, Minks"}),Object(Y.jsx)(Le.a,{value:"Gdansk",children:"Poland, Gdansk"})]})})},We=t(86),Ee=t.n(We),Ae=t(177),Pe=t(173),Ge=t(174),He=t(175),Ue=t(176),$e=W.a.div(m||(m=Object(F.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    margin: 10px 0;\n"]))),_e=W.a.a(h||(h=Object(F.a)(["\n    width: 34px;\n    height: 34px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    border: 1px solid ",";\n    padding: 5px;\n    margin: 0 5px;\n"])),ie),qe=function(e){var n=e.links;return Object(Y.jsxs)($e,{children:[n.facebook&&Object(Y.jsx)(_e,{href:n.facebook,children:Object(Y.jsx)(Pe.a,{color:"primary",fontSize:"small"})}),n.twitter&&Object(Y.jsx)(_e,{href:n.twitter,children:Object(Y.jsx)(Ge.a,{color:"primary",fontSize:"small"})}),n.instagram&&Object(Y.jsx)(_e,{href:n.instagram,children:Object(Y.jsx)(He.a,{color:"primary",fontSize:"small"})}),n.linkedin&&Object(Y.jsx)(_e,{href:n.linkedin,children:Object(Y.jsx)(Ue.a,{color:"primary",fontSize:"small"})})]})},Ke=Object(A.a)((function(e){return{avatar:{width:e.spacing(20),height:e.spacing(20),margin:"0 auto"},button:{width:"100%",maxWidth:"230px",borderRadius:"20px",marginBottom:e.spacing(1),marginRight:"auto",marginLeft:"auto"}}})),Qe=W.a.div(O||(O=Object(F.a)(["\n    text-align: center;\n"]))),Ve=W.a.div(u||(u=Object(F.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 20px;\n"]))),Xe=W.a.div(g||(g=Object(F.a)(["\n    font-size: 26px;\n    font-weight: 600;\n    color: ",";\n    margin: 10px 0;\n"])),ie),Ye=W.a.div(f||(f=Object(F.a)(["\n    color: ",";\n"])),ce),Ze=W.a.div(v||(v=Object(F.a)(["\n    color: ",";\n"])),ce),en=function(e){var n=e.person,t=Ke();return Object(Y.jsxs)(Qe,{children:[Object(Y.jsx)(G.a,{alt:"avatar",src:n.avatar,className:t.avatar}),Object(Y.jsx)(Xe,{children:n.name}),Object(Y.jsx)(Ye,{children:n.position}),Object(Y.jsx)(qe,{links:n.social_networks}),Object(Y.jsx)(Ze,{children:n.city}),Object(Y.jsxs)(Ve,{children:[!n.isContact&&Object(Y.jsx)(Ae.a,{variant:"outlined",size:"small",color:"primary",className:t.button,children:"Add to contacts"}),n.isContact&&Object(Y.jsx)(Ae.a,{variant:"outlined",size:"small",style:{color:"red",borderColor:"red"},className:t.button,children:"Delete from contacts"}),!n.isFavourite&&Object(Y.jsx)(Ae.a,{variant:"outlined",size:"small",color:"primary",className:t.button,children:"Add to favourites"}),n.isFavourite&&Object(Y.jsx)(Ae.a,{variant:"outlined",size:"small",style:{color:"red",borderColor:"red"},className:t.button,children:"Delete from favourites"})]})]})},nn=Object(A.a)((function(e){var n;return{cardsContainer:{marginTop:"30px"},cardItem:(n={boxSizing:"border-box",paddingTop:"20px",paddingBottom:"20px",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},Object(E.a)(n,e.breakpoints.up("md"),{borderRight:"1px solid rgba(0, 0, 0, 0.12)","&:nth-child(2n)":{borderRight:"0"}}),Object(E.a)(n,e.breakpoints.up("lg"),{"&:nth-child(2n)":{borderRight:"1px solid rgba(0, 0, 0, 0.12)"},"&:nth-child(3n)":{borderRight:"0"}}),Object(E.a)(n,e.breakpoints.up("xl"),{"&:nth-child(3n)":{borderRight:"1px solid rgba(0, 0, 0, 0.12)"},"&:nth-child(4n)":{borderRight:"0"}}),n)}})),tn=function(){var e=Object(k.useState)([]),n=Object(L.a)(e,2),t=n[0],a=n[1],i=Object(k.useState)(!1),c=Object(L.a)(i,2),r=c[0],o=c[1],s=Object(k.useState)(null),l=Object(L.a)(s,2),j=l[0],d=l[1],b=nn(),x=Object(k.useCallback)((function(){o(!0),d(null),Ee.a.get("./data/data.json").then((function(e){a(e.data.people)})).catch((function(e){d(e.message)})),o(!1)}),[]);return Object(k.useEffect)((function(){x()}),[x]),Object(Y.jsxs)("div",{children:[r&&Object(Y.jsx)("p",{children:"Loaging"}),!r&&j&&Object(Y.jsx)("p",{children:j}),!r&&!j&&Object(Y.jsx)(H.a,{container:!0,spacing:3,className:b.cardsContainer,children:t.map((function(e){return Object(Y.jsx)(H.a,{item:!0,xs:12,md:6,lg:4,xl:3,className:b.cardItem,children:Object(Y.jsx)(en,{person:e})},e.id)}))})]})},an=function(){return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)(H.a,{container:!0,wrap:"nowrap",alignItems:"center",justifyContent:"space-between",children:[Object(Y.jsxs)(H.a,{container:!0,item:!0,alignItems:"center",spacing:1,children:[Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)(we,{title:"People"})}),Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)(Ne,{})}),Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)(Be,{})})]}),Object(Y.jsxs)(H.a,{container:!0,nowrap:!0,alignItems:"center",justifyContent:"flex-end",spacing:1,children:[Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)(Ce.a,{color:"primary"})}),Object(Y.jsx)(H.a,{item:!0,children:Object(Y.jsx)(Je,{})})]})]}),Object(Y.jsx)(ke.a,{}),Object(Y.jsx)(tn,{})]})},cn=function(){return Object(Y.jsx)(we,{title:"Favourites"})},rn=function(){return Object(Y.jsx)(we,{title:"Contacts"})},on=function(){return Object(Y.jsx)(we,{title:"Companies"})},sn=W.a.div(w||(w=Object(F.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n"]))),ln=W.a.main(y||(y=Object(F.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 40px;\n  margin-left: 300px;\n  @media (max-width: 1023px) {\n    margin-left: 230px;\n    padding: 40px 15px;\n  }\n  @media (max-width: 767px) {\n    margin-left: 0;\n  }\n"])));var jn=function(){var e=z.a.useState(!1),n=Object(L.a)(e,2),t=n[0],a=n[1],i=function(){a(!t)};return Object(Y.jsxs)(sn,{children:[Object(Y.jsx)(de,{mobile:t,onMobileMenuToggle:i}),Object(Y.jsxs)(ln,{children:[Object(Y.jsx)(fe,{onMobileMenuToggle:i}),Object(Y.jsxs)(J.d,{children:[Object(Y.jsx)(J.b,{path:"/",element:Object(Y.jsx)(J.a,{to:"home"})}),Object(Y.jsx)(J.b,{path:"/home",element:Object(Y.jsx)(ye,{})}),Object(Y.jsx)(J.b,{path:"/contacts",element:Object(Y.jsx)(rn,{})}),Object(Y.jsx)(J.b,{path:"/favourites",element:Object(Y.jsx)(cn,{})}),Object(Y.jsx)(J.b,{path:"/people",element:Object(Y.jsx)(an,{})}),Object(Y.jsx)(J.b,{path:"/companies",element:Object(Y.jsx)(on,{})})]})]})]})};t(126),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dn=Object(I.a)({palette:{primary:{main:"#39a6f3"},secondary:{main:"#a4a3a3"},deleteButton:{main:"red"}},breakpoints:{values:{xs:0,sm:768,md:1024,lg:1280,xl:1920}}});M.a.render(Object(Y.jsx)(z.a.StrictMode,{children:Object(Y.jsx)(S.a,{store:D,children:Object(Y.jsx)(R.a,{theme:dn,children:Object(Y.jsx)(N.a,{children:Object(Y.jsx)(jn,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[127,1,2]]]);
//# sourceMappingURL=main.151c8849.chunk.js.map