(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,t,c){},57:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(21),s=c.n(r),i=(c(55),c(12)),j=c.n(i),l=c(18),o=c(41),d=c(42),u=c(23),b=c(50),h=c(49),p=(c(57),c(6)),O=c(94),x=c(92),m=c(93),f=c(91),v=c(32),w=c.n(v),g=(c(77),w.a.initializeApp({apiKey:"AIzaSyBbsNgXIJwymAzjNll8QF2wgqw4GnCZOKs",authDomain:"powerup-hardware-auth-dev.firebaseapp.com",projectId:"powerup-hardware-auth-dev",storageBucket:"powerup-hardware-auth-dev.appspot.com",messagingSenderId:"1062318995346",appId:"1:1062318995346:web:c63b17f4fa022c550f334b"})),y=w.a.auth(g),S=c(1),N=n.a.createContext();function P(){return Object(a.useContext)(N)}function k(e){var t=e.children,c=Object(a.useState)(),n=Object(p.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(!0),j=Object(p.a)(i,2),l=j[0],o=j[1];Object(a.useEffect)((function(){return y.onAuthStateChanged((function(e){s(e),o(!1)}))}),[]);var d={currentUser:r,login:function(e,t){return y.signInWithEmailAndPassword(e,t)},signup:function(e,t){return y.createUserWithEmailAndPassword(e,t)},logout:function(){return y.signOut()},resetPassword:function(e){return y.sendPasswordResetEmail(e)},updateEmail:function(e){return r.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)}};return Object(S.jsx)(N.Provider,{value:d,children:!l&&t})}var C=c(8),E=c(11),L=c(90);function F(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=P().signup,r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(""),u=Object(p.a)(d,2),b=u[0],h=u[1],v=Object(C.g)();function w(){return(w=Object(l.a)(j.a.mark((function a(r){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),t.current.value===c.current.value){a.next=3;break}return a.abrupt("return",o("Passwords do not match"));case 3:return a.prev=3,o(""),h(!0),a.next=8,n(e.current.value,t.current.value);case 8:v.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),o("Failed to create an account");case 14:h(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("header",{children:Object(S.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(S.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(O.a.Body,{children:Object(S.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"})}),i&&Object(S.jsx)(x.a,{variant:"danger",children:i}),Object(S.jsxs)(m.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(S.jsxs)(m.a.Group,{id:"email",children:[Object(S.jsx)(m.a.Label,{children:"Email"}),Object(S.jsx)(m.a.Control,{type:"email",ref:e,required:!0})]}),Object(S.jsxs)(m.a.Group,{id:"password",children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsx)(m.a.Control,{type:"password",ref:t,required:!0})]}),Object(S.jsxs)(m.a.Group,{id:"password-confirm",children:[Object(S.jsx)(m.a.Label,{children:"Password Confirmation"}),Object(S.jsx)(m.a.Control,{type:"password",ref:c,required:!0})]}),Object(S.jsx)(f.a,{disabled:b,className:"w-100",type:"submit",children:"Sign up"})]}),Object(S.jsxs)("div",{className:"w-100 text center mt-2",children:["Already have an account? ",Object(S.jsx)(E.b,{to:"/",children:"Log In"})]})]})})})})})}function R(){var e=Object(a.useState)(),t=Object(p.a)(e,2),c=t[0],r=t[1],s=P(),i=s.currentUser,o=s.logout,d=Object(C.g)().history,u=n.a.useState(""),b=Object(p.a)(u,2),h=b[0],v=b[1],w=n.a.useState(""),g=Object(p.a)(w,2),y=g[0],N=g[1];function k(){return(k=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,o();case 4:d.pushState("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){var e="https://powerup-hardware-app.herokuapp.com/api/dashboard/hardware";console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){return v(e.message)})).catch((function(e){console.log(e)}))}(),function(){var e="https://powerup-hardware-app.herokuapp.com/api/dashboard/projects";console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){return N(e.message)})).catch((function(e){console.log(e)}))}()}),[]);var F=Object(a.useRef)(),R=Object(a.useState)(""),G=Object(p.a)(R,2),I=G[0],U=G[1],q=Object(a.useState)(""),B=Object(p.a)(q,2),D=B[0],A=B[1],H=Object(a.useState)(""),W=Object(p.a)(H,2),J=W[0],z=W[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Your projects:"}),Object(S.jsx)("p",{children:y})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Join a project:"}),Object(S.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"25vh"},children:Object(S.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:Object(S.jsx)(O.a,{children:Object(S.jsxs)(O.a.Body,{children:[Object(S.jsx)("h2",{className:"text-center mb-4",children:"Enter Project ID"}),I&&Object(S.jsx)(x.a,{variant:"danger",children:I}),J&&Object(S.jsx)(x.a,{variant:"success",children:J}),Object(S.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),A(!0);var t={projectid:F.current.value,user:i.email};console.log(JSON.stringify(t)),fetch("https://powerup-hardware-app.herokuapp.com/api/dashboard/projects/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){U(""),console.log("Success:",e),z("Successfully joined project")})).catch((function(e){console.error("Error:",e),U("Failed to join project")})),A(!1)},children:[Object(S.jsxs)(m.a.Group,{id:"project_id",children:[Object(S.jsx)(m.a.Label,{children:"Project ID"}),Object(S.jsx)(m.a.Control,{type:"text",ref:F,required:!0})]}),Object(S.jsx)(f.a,{disabled:D,className:"w-100",type:"submit",children:"Join Project"})]})]})})})})]}),Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"Create a project:"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Current Hardware Sets:"}),Object(S.jsx)("p",{children:h})]}),Object(S.jsx)("header",{children:Object(S.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(S.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(S.jsx)(O.a,{children:Object(S.jsxs)(O.a.Body,{children:[Object(S.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(S.jsx)(x.a,{variant:"danger",children:c}),Object(S.jsx)("strong",{children:" Email: "}),i.email,Object(S.jsx)(E.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(S.jsx)("div",{className:"w-100 text center mt-2",children:Object(S.jsx)(f.a,{variant:"link",onClick:function(){return k.apply(this,arguments)},children:"Log Out"})})]})})})]})}function G(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=P().login,n=Object(a.useState)(""),r=Object(p.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(""),d=Object(p.a)(o,2),u=d[0],b=d[1],h=Object(C.g)();function v(){return(v=Object(l.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,i(""),b(!0),a.next=6,c(e.current.value,t.current.value);case 6:h.push("/dashboard"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),i("Failed to log in");case 12:b(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("header",{children:Object(S.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(S.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(S.jsx)(O.a,{children:Object(S.jsxs)(O.a.Body,{children:[Object(S.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(S.jsx)(x.a,{variant:"danger",children:s}),Object(S.jsxs)(m.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(S.jsxs)(m.a.Group,{id:"email",children:[Object(S.jsx)(m.a.Label,{children:"Email"}),Object(S.jsx)(m.a.Control,{type:"email",ref:e,required:!0})]}),Object(S.jsxs)(m.a.Group,{id:"password",children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsx)(m.a.Control,{type:"password",ref:t,required:!0})]}),Object(S.jsx)(f.a,{disabled:u,className:"w-100",type:"submit",children:"Log In"})]}),Object(S.jsx)("div",{className:"w-100 text center mt-3",children:Object(S.jsx)(E.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(S.jsxs)("div",{className:"w-100 text center mt-2",children:["Need an account? ",Object(S.jsx)(E.b,{to:"/signup",children:"Sign Up"})]})]})})})})}var I=c(2),U=c(3),q=["component"];function B(e){var t=e.component,c=Object(U.a)(e,q),a=P().currentUser;return Object(S.jsx)(C.b,Object(I.a)(Object(I.a)({},c),{},{render:function(e){return a?Object(S.jsx)(t,Object(I.a)({},e)):Object(S.jsx)(C.a,{to:"/login"})}}))}function D(){var e=Object(a.useRef)(),t=P().resetPassword,c=Object(a.useState)(""),n=Object(p.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),d=o[0],u=o[1],b=Object(a.useState)(""),h=Object(p.a)(b,2),v=h[0],w=h[1];function g(){return(g=Object(l.a)(j.a.mark((function c(a){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,w(""),s(""),u(!0),c.next=7,t(e.current.value);case 7:w("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),s("Failed to reset password");case 13:u(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("header",{children:Object(S.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(S.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(S.jsx)(O.a,{children:Object(S.jsxs)(O.a.Body,{children:[Object(S.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(S.jsx)(x.a,{variant:"danger",children:r}),v&&Object(S.jsx)(x.a,{variant:"success",children:v}),Object(S.jsxs)(m.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(S.jsxs)(m.a.Group,{id:"email",children:[Object(S.jsx)(m.a.Label,{children:"Email"}),Object(S.jsx)(m.a.Control,{type:"email",ref:e,required:!0})]}),Object(S.jsx)(f.a,{disabled:d,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(S.jsx)("div",{className:"w-100 text center mt-3",children:Object(S.jsx)(E.b,{to:"/",children:"Login"})})]})}),Object(S.jsxs)("div",{className:"w-100 text center mt-2",children:["Need an account? ",Object(S.jsx)(E.b,{to:"/signup",children:"Sign Up"})]})]})})})})}function A(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=P(),r=n.currentUser,s=n.updateEmail,i=n.updatePassword,j=Object(a.useState)(""),l=Object(p.a)(j,2),o=l[0],d=l[1],u=Object(a.useState)(""),b=Object(p.a)(u,2),h=b[0],v=b[1],w=Object(C.g)();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("header",{children:Object(S.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(S.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(S.jsxs)(O.a,{children:[Object(S.jsx)(O.a.Body,{children:Object(S.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"})}),o&&Object(S.jsx)(x.a,{variant:"danger",children:o}),Object(S.jsxs)(m.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==c.current.value)return d("Passwords do not match");var n=[];v(!0),d(""),e.current.value!==r.email&&n.push(s(e.current.value)),t.current.value&&n.push(i(t.current.value)),Promise.all(n).then((function(){w.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){v(!1)}))},children:[Object(S.jsxs)(m.a.Group,{id:"email",children:[Object(S.jsx)(m.a.Label,{children:"Email"}),Object(S.jsx)(m.a.Control,{type:"email",ref:e,required:!0,defaultValue:r.email})]}),Object(S.jsxs)(m.a.Group,{id:"password",children:[Object(S.jsx)(m.a.Label,{children:"Password"}),Object(S.jsx)(m.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(S.jsxs)(m.a.Group,{id:"password-confirm",children:[Object(S.jsx)(m.a.Label,{children:"Password Confirmation"}),Object(S.jsx)(m.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(S.jsx)(f.a,{disabled:h,className:"w-100",type:"submit",children:"Update"})]})]}),Object(S.jsx)("div",{className:"w-100 text center mt-2",children:Object(S.jsx)(E.b,{to:"/dashboard",children:"Cancel"})})]})})})})}var H=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(o.a)(this,c),(a=t.call(this,e)).state={name:"",names:[],loading:!0},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(d.a)(c,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loading:!0}),e.next=4,fetch("/addname/"+this.state.name,{method:"GET"});case 4:this.getNames();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("h1",{children:"PowerUp Hardware"}),Object(S.jsx)(E.a,{children:Object(S.jsx)(k,{children:Object(S.jsxs)(C.d,{children:[Object(S.jsx)(B,{exact:!0,path:"/dashboard",component:R}),Object(S.jsx)(B,{path:"/update-profile",component:A}),Object(S.jsx)(C.b,{path:"/signup",component:F}),Object(S.jsx)(C.b,{path:"/forgot-password",component:D}),Object(S.jsx)(C.b,{path:"/",component:G}),Object(S.jsx)(C.b,{path:"/login",component:G})]})})})]})}}]),c}(a.Component),W=H;c(87);s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c148c804.chunk.js.map