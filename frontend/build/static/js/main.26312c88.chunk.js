(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,a){},58:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(21),n=a.n(s),i=(a(58),a(12)),l=a.n(i),o=a(18),j=a(45),d=a(46),b=a(24),h=a(53),u=a(52),O=(a(37),a(5)),x=a(96),p=a(94),m=a(95),f=a(93),v=a(34),y=a.n(v),w=(a(79),y.a.initializeApp({apiKey:"AIzaSyBbsNgXIJwymAzjNll8QF2wgqw4GnCZOKs",authDomain:"powerup-hardware-auth-dev.firebaseapp.com",projectId:"powerup-hardware-auth-dev",storageBucket:"powerup-hardware-auth-dev.appspot.com",messagingSenderId:"1062318995346",appId:"1:1062318995346:web:c63b17f4fa022c550f334b"})),g=y.a.auth(w),N=a(0),S=r.a.createContext();function k(){return Object(c.useContext)(S)}function C(e){var t=e.children,a=Object(c.useState)(),r=Object(O.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(!0),l=Object(O.a)(i,2),o=l[0],j=l[1];Object(c.useEffect)((function(){return g.onAuthStateChanged((function(e){n(e),j(!1)}))}),[]);var d={currentUser:s,login:function(e,t){return g.signInWithEmailAndPassword(e,t)},signup:function(e,t){return g.createUserWithEmailAndPassword(e,t)},logout:function(){return g.signOut()},resetPassword:function(e){return g.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(N.jsx)(S.Provider,{value:d,children:!o&&t})}var P=a(8),D=a(11),L=a(92);function E(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=k().signup,s=Object(c.useState)(""),n=Object(O.a)(s,2),i=n[0],j=n[1],d=Object(c.useState)(""),b=Object(O.a)(d,2),h=b[0],u=b[1],v=Object(P.g)();function y(){return(y=Object(o.a)(l.a.mark((function c(s){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",j("Passwords do not match"));case 3:return c.prev=3,j(""),u(!0),c.next=8,r(e.current.value,t.current.value);case 8:v.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),j("Failed to create an account");case 14:u(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("header",{children:Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"91vh"},children:Object(N.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(N.jsx)(p.a,{variant:"danger",children:i}),Object(N.jsxs)(m.a,{onSubmit:function(e){return y.apply(this,arguments)},children:[Object(N.jsxs)(m.a.Group,{id:"email",children:[Object(N.jsx)(m.a.Label,{children:"Email"}),Object(N.jsx)(m.a.Control,{type:"email",ref:e,required:!0,placeholder:"Email"})]}),Object(N.jsxs)(m.a.Group,{id:"password",children:[Object(N.jsx)(m.a.Label,{children:"Password"}),Object(N.jsx)(m.a.Control,{type:"password",ref:t,required:!0,placeholder:"Password (at least 6 characters)"})]}),Object(N.jsxs)(m.a.Group,{id:"password-confirm",children:[Object(N.jsx)(m.a.Label,{children:"Password Confirmation"}),Object(N.jsx)(m.a.Control,{type:"password",ref:a,required:!0,placeholder:"Confirm passsword"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:h,className:"w-100",type:"submit",children:"Sign up"})]})]})}),Object(N.jsxs)("div",{className:"w-100 text center mt-2 white-font",children:["Already have an account? ",Object(N.jsx)(D.b,{to:"/",children:"Log In"})]})]})})})})}var H=a(27),B=a(36);function R(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.name}),Object(N.jsx)("td",{children:e.id}),Object(N.jsx)("td",{children:e.description}),I(e.HWSets),W(e.users)]})}function W(e){var t=[];return e.map((function(e){t.push(Object(N.jsx)("div",{children:e}))})),Object(N.jsx)("td",{children:t})}function I(e){var t=[];return e.map((function(e){t.push(Object(N.jsxs)("div",{children:[e[0],": ",e[1]]}))})),Object(N.jsx)("td",{children:t})}function G(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.name}),Object(N.jsx)("td",{children:e.capacity}),Object(N.jsx)("td",{children:e.availability})]})}function A(){var e=Object(c.useState)(),t=Object(O.a)(e,2),a=t[0],r=t[1],s=k(),n=s.currentUser,i=s.logout,j=Object(P.g)().history,d=Object(c.useState)([]),b=Object(O.a)(d,2),h=b[0],u=b[1],v=Object(c.useState)([]),y=Object(O.a)(v,2),w=y[0],g=y[1],S=function(e){var t,a,c=[];for(t=0;t<h.length;t++)if(h[t].name===e.newSet.name)for(a=0;a<h.length;a++)if(a===t){var r=h[t];r.availability=e.newSet.availability,c.push(r)}else c.push(h[a]);u(c)},C=function(e){var t,a,c=[];for(t=0;t<w.length;t++)if(w[t].id===e.newProject.id)for(a=0;a<w.length;a++)if(a===t){var r=w[t];r.checkedOutHW=e.newProject.checkedOutHW,c.push(r)}else c.push(w[a]);g(c)};function E(){return(E=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,i();case 4:j.pushState("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var W=function(){var e="https://powerup-hardware-app.herokuapp.com/api/dashboard/hardware";console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){return function(e){var t,a=Object(B.a)(e.sets.entries());try{var c=function(){var e=Object(O.a)(t.value,2),a=(e[0],e[1]);u((function(e){return[].concat(Object(H.a)(e),[a])}))};for(a.s();!(t=a.n()).done;)c()}catch(r){a.e(r)}finally{a.f()}}(e)})).catch((function(e){console.log(e)}))},I=function(){var e="https://powerup-hardware-app.herokuapp.com/api/dashboard/projects/"+n.email;console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){return function(e){var t,a=Object(B.a)(e.userProjects.entries());try{var c=function(){var e=Object(O.a)(t.value,2),a=(e[0],e[1]);g((function(e){return[].concat(Object(H.a)(e),[a])}))};for(a.s();!(t=a.n()).done;)c()}catch(r){a.e(r)}finally{a.f()}}(e)})).catch((function(e){console.log(e)}))};Object(c.useEffect)((function(){W(),I()}),[]);var A=Object(c.useRef)(),F=Object(c.useState)(""),q=Object(O.a)(F,2),J=q[0],T=q[1],U=Object(c.useState)(""),z=Object(O.a)(U,2),M=z[0],K=z[1],_=Object(c.useState)(""),Q=Object(O.a)(_,2),V=Q[0],X=Q[1];var Y=Object(c.useRef)(),Z=Object(c.useRef)(),$=Object(c.useRef)(),ee=Object(c.useState)(""),te=Object(O.a)(ee,2),ae=te[0],ce=te[1],re=Object(c.useState)(""),se=Object(O.a)(re,2),ne=se[0],ie=se[1],le=Object(c.useState)(""),oe=Object(O.a)(le,2),je=oe[0],de=oe[1];var be=Object(c.useRef)(),he=Object(c.useRef)(),ue=Object(c.useRef)(),Oe=Object(c.useState)(""),xe=Object(O.a)(Oe,2),pe=xe[0],me=xe[1],fe=Object(c.useState)(""),ve=Object(O.a)(fe,2),ye=ve[0],we=ve[1],ge=Object(c.useState)(""),Ne=Object(O.a)(ge,2),Se=Ne[0],ke=Ne[1];var Ce=Object(c.useRef)(),Pe=Object(c.useRef)(),De=Object(c.useRef)(),Le=Object(c.useState)(""),Ee=Object(O.a)(Le,2),He=Ee[0],Be=Ee[1],Re=Object(c.useState)(""),We=Object(O.a)(Re,2),Ie=We[0],Ge=We[1],Ae=Object(c.useState)(""),Fe=Object(O.a)(Ae,2),qe=Fe[0],Je=Fe[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"white-font overflow-auto col-sm",style:{maxHeight:"600px",minWidth:"800px"},children:[Object(N.jsx)("h1",{children:"Your projects"}),Object(N.jsxs)("table",{className:"table table-dark table-striped table-bordered",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{class:"table-primary",children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Project ID"}),Object(N.jsx)("th",{children:"Description"}),Object(N.jsx)("th",{children:"Current Hardware"}),Object(N.jsx)("th",{children:"Users"})]})}),Object(N.jsx)("tbody",{children:w.map((function(e){return Object(N.jsx)(R,{name:e.name,id:e.id,description:e.description,HWSets:e.checkedOutHW,users:e.users},e.id)}))})]})]}),Object(N.jsxs)("div",{className:"col-sm",children:[Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"25vh"},children:Object(N.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Join project"}),J&&Object(N.jsx)(p.a,{variant:"danger",children:J}),V&&Object(N.jsx)(p.a,{variant:"success",children:V}),Object(N.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),K(!0);var t={projectid:A.current.value,user:n.email};console.log(JSON.stringify(t)),fetch("https://powerup-hardware-app.herokuapp.com/api/dashboard/projects/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){X(""),T(""),console.log("Success on connection:",e),-1!==e.status?(g((function(t){return[].concat(Object(H.a)(t),[e.newlyJoinedProject])})),X("Successfully joined project")):T(e.error)})).catch((function(e){X(""),console.error("Error:",e),T("Failed to join project")})),K(!1)},children:[Object(N.jsxs)(m.a.Group,{id:"join_project",children:[Object(N.jsx)(m.a.Label,{children:"Enter project ID"}),Object(N.jsx)(m.a.Control,{type:"text",ref:A,required:!0,placeholder:"ID"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:M,className:"w-100",type:"submit",children:"Join Project"})]})]})})})}),Object(N.jsx)("hr",{className:"break1"}),Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"25vh"},children:Object(N.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Create project"}),ae&&Object(N.jsx)(p.a,{variant:"danger",children:ae}),je&&Object(N.jsx)(p.a,{variant:"success",children:je}),Object(N.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),ie(!0);var t={name:Y.current.value,description:Z.current.value,id:$.current.value,user:n.email};console.log(JSON.stringify(t)),fetch("https://powerup-hardware-app.herokuapp.com/api/dashboard/projects/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){if(ce(""),console.log("Success:",e),-1===e.status)return de(""),void ce(e.error);g((function(t){return[].concat(Object(H.a)(t),[e.newlyCreatedProject])})),de("Successfully created project")})).catch((function(e){de(""),console.error("Error:",e),ce("Failed to create project")})),ie(!1)},children:[Object(N.jsxs)(m.a.Group,{id:"create_project",children:[Object(N.jsx)(m.a.Label,{children:"Enter a project name"}),Object(N.jsx)(m.a.Control,{type:"text",ref:Y,required:!0,placeholder:"Name"}),Object(N.jsx)(m.a.Label,{children:"Enter a project description"}),Object(N.jsx)(m.a.Control,{type:"text",ref:Z,required:!0,placeholder:"Description"}),Object(N.jsx)(m.a.Label,{children:"Enter a project ID"}),Object(N.jsx)(m.a.Control,{type:"text",ref:$,required:!0,placeholder:"Positive number"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:ne,className:"w-100",type:"submit",children:"Create project"})]})]})})})})]})]})}),Object(N.jsx)("hr",{style:{color:"blue",backgroundColor:"blue",height:10}}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"white-font overflow-auto col-sm",style:{maxHeight:"600px",minWidth:"800px"},children:[Object(N.jsx)("h1",{children:"Available Hardware Sets"}),Object(N.jsxs)("table",{className:"table table-dark table-striped table-bordered",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{class:"table-primary",children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Capacity"}),Object(N.jsx)("th",{children:"Availability"})]})}),Object(N.jsx)("tbody",{children:h.map((function(e){return Object(N.jsx)(G,{name:e.name,capacity:e.capacity,availability:e.availability},e.name)}))})]})]}),Object(N.jsxs)("div",{className:"col-sm",children:[Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"25vh"},children:Object(N.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Checkout hardware"}),pe&&Object(N.jsx)(p.a,{variant:"danger",children:pe}),Se&&Object(N.jsx)(p.a,{variant:"success",children:Se}),Object(N.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),we(!0);var t={id:be.current.value,hwset:he.current.value,amount:ue.current.value,user:n.email};console.log(JSON.stringify(t)),fetch("https://powerup-hardware-app.herokuapp.com/api/dashboard/hardware/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){if(me(""),console.log("Success network-wise:",e),-1===e.status)return ke(""),void me(e.error);S(e),C(e),ke("Successfully checked out hardware")})).catch((function(e){ke(""),console.error("Error:",e),me("Failed checked out hardware")})),we(!1)},children:[Object(N.jsxs)(m.a.Group,{id:"checkout",children:[Object(N.jsx)(m.a.Label,{children:"Enter a project ID"}),Object(N.jsx)(m.a.Control,{type:"text",ref:be,required:!0,placeholder:"ID"}),Object(N.jsx)(m.a.Label,{children:"Enter a hardware set name"}),Object(N.jsx)(m.a.Control,{type:"text",ref:he,required:!0,placeholder:"Set name"}),Object(N.jsx)(m.a.Label,{children:"Enter an amount"}),Object(N.jsx)(m.a.Control,{type:"text",ref:ue,required:!0,placeholder:"Amount to check out"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:ye,className:"w-100",type:"submit",children:"Checkout"})]})]})})})}),Object(N.jsx)("hr",{className:"break2"}),Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"25vh"},children:Object(N.jsx)("div",{className:"w-100",style:{maxWidth:"450px"},children:Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Check-in hardware"}),He&&Object(N.jsx)(p.a,{variant:"danger",children:He}),qe&&Object(N.jsx)(p.a,{variant:"success",children:qe}),Object(N.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),Ge(!0);var t={id:Ce.current.value,hwset:Pe.current.value,amount:De.current.value,user:n.email};console.log(JSON.stringify(t)),fetch("https://powerup-hardware-app.herokuapp.com/api/dashboard/hardware/checkin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){if(Be(""),console.log("Success network-wise:",e),-1===e.status)return Je(""),void Be(e.error);S(e),C(e),Je("Successfully checked in hardware")})).catch((function(e){console.error("Error:",e),Je(""),Be("Failed to check in hardware")})),Ge(!1)},children:[Object(N.jsxs)(m.a.Group,{id:"checkout",children:[Object(N.jsx)(m.a.Label,{children:"Enter a project ID"}),Object(N.jsx)(m.a.Control,{type:"text",ref:Ce,required:!0,placeholder:"ID"}),Object(N.jsx)(m.a.Label,{children:"Enter a hardware set name"}),Object(N.jsx)(m.a.Control,{type:"text",ref:Pe,required:!0,placeholder:"Set name"}),Object(N.jsx)(m.a.Label,{children:"Enter an amount"}),Object(N.jsx)(m.a.Control,{type:"text",ref:De,required:!0,placeholder:"Amount to check in"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:Ie,className:"w-100",type:"submit",children:"Check-in"})]})]})})})})]})]})}),Object(N.jsx)("hr",{style:{color:"blue",backgroundColor:"blue",height:10}}),Object(N.jsx)("div",{children:Object(N.jsxs)(L.a,{className:"align-items-center justify-content-center",style:{minHeight:"25vh"},children:[Object(N.jsx)("h1",{className:"white-font",children:"Available Datasets"}),Object(N.jsxs)("table",{className:"table table-dark table-striped table-bordered white-font overflow-auto center",style:{maxHeight:"600px",maxWidth:"1272px"},children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{class:"table-primary",children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Description"}),Object(N.jsx)("th",{children:"Download"})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"Blood Pressure in Salt-Sensitive Dahl Rats"}),Object(N.jsx)("td",{children:"This database contains continuous blood pressure recordings for 9 Dahl SS rats and 6 Dahl SS.13BN rats, under high and low salt conditions."}),Object(N.jsx)("td",{children:Object(N.jsx)("a",{href:"https://physionet.org/static/published-projects/bpssrat/blood-pressure-in-salt-sensitive-dahl-rats-1.0.0.zip",children:"Download (3.4MB)"})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"Gait in Aging and Disease Database"}),Object(N.jsx)("td",{children:"Walking stride interval time series from 15 subjects."}),Object(N.jsx)("td",{children:Object(N.jsx)("a",{href:"https://physionet.org/static/published-projects/gaitdb/gait-in-aging-and-disease-database-1.0.0.zip",children:"Download (354.6KB)"})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"Long Term AF Database"}),Object(N.jsx)("td",{children:"This database includes 84 long-term ECG recordings of subjects with paroxysmal or sustained atrial fibrillation (AF). Each record contains two simultaneously recorded ECG signals digitized at 128 Hz \u2026"}),Object(N.jsx)("td",{children:Object(N.jsx)("a",{href:"https://physionet.org/static/published-projects/ltafdb/long-term-af-database-1.0.0.zip",children:"Download (1.7GB)"})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"MIT-BIH Arrhythmia Database"}),Object(N.jsx)("td",{children:"Two-channel ambulatory ECG recordings, obtained from 47 subjects studied by the BIH Arrhythmia Laboratory between 1975 and 1979."}),Object(N.jsx)("td",{children:Object(N.jsx)("a",{href:"https://physionet.org/static/published-projects/mitdb/mit-bih-arrhythmia-database-1.0.0.zip",children:"Download (73.5MB)"})})]}),Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"MMG Database"}),Object(N.jsx)("td",{children:"Uterine magnetomyographic signals from 25 subjects recorded using a 151 channel Reproductive Assessment system."}),Object(N.jsx)("td",{children:Object(N.jsx)("a",{href:"https://physionet.org/static/published-projects/mmgdb/mmg-database-1.0.0.zip",children:"Download (215.7MB)"})})]})]})]})]})}),Object(N.jsx)("hr",{style:{color:"blue",backgroundColor:"blue",height:10}}),Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"25vh"},children:Object(N.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(N.jsx)(p.a,{variant:"danger",children:a}),Object(N.jsx)("strong",{children:" Email: "}),n.email,Object(N.jsx)(D.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(N.jsx)("div",{className:"w-100 text center mt-2",children:Object(N.jsx)(f.a,{variant:"link",onClick:function(){return E.apply(this,arguments)},children:"Log Out"})})]})})]})}function F(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=k().login,r=Object(c.useState)(""),s=Object(O.a)(r,2),n=s[0],i=s[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),b=d[0],h=d[1],u=Object(P.g)();function v(){return(v=Object(o.a)(l.a.mark((function c(r){return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,i(""),h(!0),c.next=6,a(e.current.value,t.current.value);case 6:u.push("/dashboard"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),i("Failed to log in");case 12:h(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-sm",children:Object(N.jsx)("header",{children:Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"91vh"},children:Object(N.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(N.jsxs)("div",{class:"card aboutCardBlue",children:[Object(N.jsx)("div",{class:"card-header aboutCardBlue",children:Object(N.jsx)("h2",{class:"card-title",children:"About us"})}),Object(N.jsx)("div",{class:"card-body",children:Object(N.jsx)("p",{class:"card-text aboutText",children:"PowerUp Hardware is a Hardware-as-a-Service proof of concept web application developed by Emran Khan, Jeesoo Min, John Wright, Ryan McSweeney, and Sophia Jiang. It features the ability to have multiple users, join and create projects, checkout hardware, check in hardware, and download datasets. We used Heroku as our cloud host with MongoDB as our database, React as our frontend, and Python Flask as our backend."})})]}),Object(N.jsx)("hr",{style:{color:"blue",backgroundColor:"blue",height:10}}),Object(N.jsxs)("div",{class:"card aboutCardBlue",children:[Object(N.jsx)("div",{class:"card-header aboutCardBlue",children:Object(N.jsx)("h2",{class:"card-title",children:"Contact us"})}),Object(N.jsx)("div",{class:"card-body",children:Object(N.jsx)("ul",{class:"list-group aboutText",children:Object(N.jsx)("li",{class:"list-group-item contactList",children:"John Wright - johnawright@utexas.edu"})})})]})]})})})}),Object(N.jsx)("div",{className:"col-sm",children:Object(N.jsx)("header",{children:Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"91vh"},children:Object(N.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),n&&Object(N.jsx)(p.a,{variant:"danger",children:n}),Object(N.jsxs)(m.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(N.jsxs)(m.a.Group,{id:"email",children:[Object(N.jsx)(m.a.Label,{children:"Email"}),Object(N.jsx)(m.a.Control,{type:"email",ref:e,required:!0,placeholder:"Email"})]}),Object(N.jsxs)(m.a.Group,{id:"password",children:[Object(N.jsx)(m.a.Label,{children:"Password"}),Object(N.jsx)(m.a.Control,{type:"password",ref:t,required:!0,placeholder:"Password"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:b,className:"w-100",type:"submit",children:"Log In"})]}),Object(N.jsx)("div",{className:"w-100 text center mt-3",children:Object(N.jsx)(D.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(N.jsxs)("div",{className:"w-100 text center mt-2 white-font",children:["Need an account? ",Object(N.jsx)(D.b,{to:"/signup",children:"Sign Up"})]})]})})})})]})})}var q=a(2),J=a(3),T=["component"];function U(e){var t=e.component,a=Object(J.a)(e,T),c=k().currentUser;return Object(N.jsx)(P.b,Object(q.a)(Object(q.a)({},a),{},{render:function(e){return c?Object(N.jsx)(t,Object(q.a)({},e)):Object(N.jsx)(P.a,{to:"/login"})}}))}function z(){var e=Object(c.useRef)(),t=k().resetPassword,a=Object(c.useState)(""),r=Object(O.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(""),j=Object(O.a)(i,2),d=j[0],b=j[1],h=Object(c.useState)(""),u=Object(O.a)(h,2),v=u[0],y=u[1];function w(){return(w=Object(o.a)(l.a.mark((function a(c){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,y(""),n(""),b(!0),a.next=7,t(e.current.value);case 7:y("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n("Failed to reset password");case 13:b(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("header",{children:Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(N.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(N.jsx)(p.a,{variant:"danger",children:s}),v&&Object(N.jsx)(p.a,{variant:"success",children:v}),Object(N.jsxs)(m.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(N.jsxs)(m.a.Group,{id:"email",children:[Object(N.jsx)(m.a.Label,{children:"Email"}),Object(N.jsx)(m.a.Control,{type:"email",ref:e,required:!0}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:d,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(N.jsx)("div",{className:"w-100 text center mt-3",children:Object(N.jsx)(D.b,{to:"/",children:"Login"})})]})}),Object(N.jsxs)("div",{className:"w-100 text center mt-2 white-font",children:["Need an account? ",Object(N.jsx)(D.b,{to:"/signup",children:"Sign Up"})]})]})})})})}function M(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=k(),s=r.currentUser,n=r.updateEmail,i=r.updatePassword,l=Object(c.useState)(""),o=Object(O.a)(l,2),j=o[0],d=o[1],b=Object(c.useState)(""),h=Object(O.a)(b,2),u=h[0],v=h[1],y=Object(P.g)();return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("header",{children:Object(N.jsx)(L.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"90vh"},children:Object(N.jsxs)("div",{className:"w-100",style:{maxWidth:"450px"},children:[Object(N.jsx)(x.a,{className:"container-darkmode",children:Object(N.jsxs)(x.a.Body,{children:[Object(N.jsx)("h2",{className:"text-center mb-4",children:"Update Profile (work in progress)"}),j&&Object(N.jsx)(p.a,{variant:"danger",children:j}),Object(N.jsxs)(m.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return d("Passwords do not match");var r=[];v(!0),d(""),e.current.value!==s.email&&r.push(n(e.current.value)),t.current.value&&r.push(i(t.current.value)),Promise.all(r).then((function(){y.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){v(!1)}))},children:[Object(N.jsxs)(m.a.Group,{id:"email",children:[Object(N.jsx)(m.a.Label,{children:"Email"}),Object(N.jsx)(m.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(N.jsxs)(m.a.Group,{id:"password",children:[Object(N.jsx)(m.a.Label,{children:"Password"}),Object(N.jsx)(m.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(N.jsxs)(m.a.Group,{id:"password-confirm",children:[Object(N.jsx)(m.a.Label,{children:"Password Confirmation"}),Object(N.jsx)(m.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"}),Object(N.jsx)(m.a.Label,{})]}),Object(N.jsx)(f.a,{disabled:u,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(N.jsx)("div",{className:"w-100 text center mt-2 white-font",children:Object(N.jsx)(D.b,{to:"/dashboard",children:"Cancel"})})]})})})})}var K=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(j.a)(this,a),(c=t.call(this,e)).state={name:"",names:[],loading:!0},c.handleChange=c.handleChange.bind(Object(b.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(b.a)(c)),c}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loading:!0}),e.next=4,fetch("/addname/"+this.state.name,{method:"GET"});case 4:this.getNames();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("h1",{className:"gradient-text",children:"PowerUp Hardware"}),Object(N.jsx)("hr",{style:{color:"blue",backgroundColor:"blue",height:10}}),Object(N.jsx)(D.a,{children:Object(N.jsx)(C,{children:Object(N.jsxs)(P.d,{children:[Object(N.jsx)(U,{exact:!0,path:"/dashboard",component:A}),Object(N.jsx)(U,{path:"/update-profile",component:M}),Object(N.jsx)(P.b,{path:"/signup",component:E}),Object(N.jsx)(P.b,{path:"/forgot-password",component:z}),Object(N.jsx)(P.b,{path:"/",component:F}),Object(N.jsx)(P.b,{path:"/login",component:F})]})})})]})}}]),a}(c.Component),_=K;a(89);n.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(_,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.26312c88.chunk.js.map