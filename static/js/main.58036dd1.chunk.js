(this.webpackJsonplike_amazing_lion=this.webpackJsonplike_amazing_lion||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(13),i=c.n(r),o=c(16),u=c(52),j=c(161),l=c(159),b=c(11),d=c(53),O=(c(95),c(111),{apiKey:"AIzaSyA_HEuSJuwkDUUmW-mZzM9loXOu9ruSPbI",authDomain:"like-amazing-lion.firebaseapp.com",projectId:"like-amazing-lion",storageBucket:"like-amazing-lion.appspot.com",messagingSenderId:"477672594501",appId:"1:477672594501:web:9319859d668254e9c5172c"});d.a.initializeApp(O);var m=d.a,h=d.a.auth(),f=d.a.firestore(),x=function(){var e=Object(a.useState)(h.currentUser),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){n(e)}))}),[]),c},_=function(e){var t=Object(a.useState)(!1),c=Object(b.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){if(e){var t=e.email;f.collection("correctedUser").where("email","==",t).get().then((function(e){e.forEach((function(e){var t=e.exists;s(t)}))})).catch((function(e){console.log("Error getting documents: ",e)}))}}))}),[]),n},v=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useRef)();return Object(a.useEffect)((function(){setInterval((function(){s(!0)}),1500),setInterval((function(){r.current.remove()}),2350)}),[]),Object(n.jsx)("div",{ref:r,className:"loading ".concat(c?"loading__end":""),children:Object(n.jsx)("div",{className:"loading__circle"})})},p=c(31),g=c.n(p),N=c(44),z=c(156),k=c(146),w=(c(98),c.p+"static/media/bglogo.a6dd963f.png"),C=c(55),S=c(139),y=c(160),E=c(157),q=function(e){var t=e.msg,c=e.setMsg,r=s.a.useState({open:!1,Transition:S.a}),i=Object(b.a)(r,2),o=i[0],u=i[1];Object(a.useEffect)((function(){u(Object(C.a)(Object(C.a)({},o),{},{open:""!==t}))}),[t]);var j=function(){u(Object(C.a)(Object(C.a)({},o),{},{open:!1})),c("")};return Object(n.jsx)(y.a,{open:o.open,onClose:j,TransitionComponent:o.Transition,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(n.jsx)(E.a,{onClose:j,severity:"warning",children:t})},o.Transition.name)},I=c(63),A=c(64),Q=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(N.a)(g.a.mark((function e(t){var c,n,a,r,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target,n=c.parentNode,a=n.id,e.prev=2,"google"===a?r=new m.auth.GoogleAuthProvider:"facebook"===a?r=new m.auth.FacebookAuthProvider:"github"===a&&(r=new m.auth.GithubAuthProvider),e.next=6,h.signInWithPopup(r);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),i=e.t0.message,s(i);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"social",children:[Object(n.jsx)(k.a,{onClick:r,id:"google",className:"social__button",children:Object(n.jsx)(I.a,{icon:A.c,size:"4x",className:"social__icon"})}),Object(n.jsx)(k.a,{onClick:r,id:"facebook",className:"social__button",children:Object(n.jsx)(I.a,{icon:A.a,size:"4x",className:"social__icon"})}),Object(n.jsx)(k.a,{onClick:r,id:"github",className:"social__button",children:Object(n.jsx)(I.a,{icon:A.b,size:"4x",className:"social__icon"})}),Object(n.jsx)(q,{msg:c,setMsg:s})]})},U=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),i=Object(b.a)(r,2),o=i[0],u=i[1],j=Object(a.useState)(!0),l=Object(b.a)(j,2),d=l[0],O=l[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),x=f[0],_=f[1],v=function(e){var t=e.target,c=t.type,n=t.value;"email"===c?s(n):"password"===c&&u(n)},p=function(){var e=Object(N.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(c,o);case 5:e.next=9;break;case 7:return e.next=9,h.signInWithEmailAndPassword(c,o);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),n=e.t0.message,_(n);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"auth",children:[Object(n.jsx)("div",{className:"background",children:Object(n.jsx)("img",{className:"background__logo",src:w,alt:"bg_logo"})}),Object(n.jsxs)("div",{className:"form",children:[Object(n.jsxs)("form",{className:"form__form",onSubmit:p,children:[Object(n.jsx)(z.a,{id:"standard-basic",label:"E-mail",type:"email",value:c,onChange:v,className:"form__input"}),Object(n.jsx)(z.a,{id:"standard-basic",label:"Password",type:"password",value:o,onChange:v,className:"form__input"}),Object(n.jsx)(k.a,{type:"submit",className:"form__submit",children:d?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778"}),Object(n.jsxs)("span",{className:"form__span",children:[d?"\uc774\ubbf8 \uac00\uc785\uc744 \ud558\uc168\ub098\uc694?":"\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",Object(n.jsx)("span",{onClick:function(){O((function(e){return!e}))},children:d?"\ub85c\uadf8\uc778 \ud558\uae30":"\ud68c\uc6d0\uac00\uc785 \ud558\uae30"})]})]}),Object(n.jsx)(Q,{}),Object(n.jsx)(q,{msg:x,setMsg:_})]})]})},L=(c(104),c(158)),P=c(149),T=c(150),F=c(147),M=c(148),D=function(e){var t=e.name,c=e.index,a=e.submitValue,s=e.submitAnswer,r=e.setCurrentQuiz;return Object(n.jsx)(k.a,{className:"quiz__name",color:"secondary",onClick:function(e){s&&r&&r(c)},children:Object(n.jsxs)("span",{className:"name__span ".concat(s&&"name__check"),children:[t,s?a?Object(n.jsx)(L.a,{checked:!0,className:"quiz__yes",icon:Object(n.jsx)(F.a,{}),checkedIcon:Object(n.jsx)(M.a,{})}):Object(n.jsx)(L.a,{checked:!0,className:"quiz__no",icon:Object(n.jsx)(P.a,{}),checkedIcon:Object(n.jsx)(T.a,{})}):""]})})},W=function(e){var t=e.id,c=e.quiz,s=e.answer,r=e.setAnswer,i=e.isCurrent,o=Object(a.useState)(!0),u=Object(b.a)(o,2),j=u[0],l=u[1],d=function(){s[t]=!s[t],null===r||void 0===r||r(s),l(s[t])};return Object(n.jsxs)("div",{className:"quiz__select ".concat(i&&"quiz__select__showing"),children:[Object(n.jsxs)("div",{className:"select__button",children:[Object(n.jsx)(L.a,{onChange:d,checked:!j,className:"quiz__no",icon:Object(n.jsx)(P.a,{}),checkedIcon:Object(n.jsx)(T.a,{})}),Object(n.jsx)(L.a,{onChange:d,checked:j,className:"quiz__yes",icon:Object(n.jsx)(F.a,{}),checkedIcon:Object(n.jsx)(M.a,{})})]}),Object(n.jsx)(D,{name:null===c||void 0===c?void 0:c.name,index:t})]})},H=c(145),J=c(151),R=c(152),B=function(e){var t=e.setCurrentQuiz,c=e.maxQuizNum,s=e.currentQuizNum,r=Object(a.useRef)(null),i=Object(a.useRef)(null);Object(a.useEffect)((function(){r.current.classList.remove("slider__hide"),i.current.classList.remove("slider__hide"),0===s?r.current.classList.add("slider__hide"):s===c&&i.current.classList.add("slider__hide")}),[s]);return Object(n.jsxs)("div",{className:"quiz__slider",children:[Object(n.jsx)(H.a,{ref:r,onClick:function(){s>0&&t((function(e){return e-1}))},className:"slider__btn slider__hide",color:"primary","aria-label":"left",component:"span",children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(H.a,{ref:i,onClick:function(){s<c&&t((function(e){return e+1}))},className:"slider__btn",color:"primary","aria-label":"right",component:"span",children:Object(n.jsx)(R.a,{})})]})},G=function(e){e.id;var t=e.isCurrent,c=e.answer,a=e.quizzes,s=e.setCurrentQuiz,r=e.setIsSubmit;return Object(n.jsxs)("div",{className:"quiz__select ".concat(t&&"quiz__select__showing"),children:[null===a||void 0===a?void 0:a.map((function(e,t){return Object(n.jsx)(D,{index:t,submitAnswer:!0,name:"".concat(e.name),submitValue:c[t],setCurrentQuiz:s},t)})),Object(n.jsx)(k.a,{onClick:function(){r(!0)},className:"select__submit",color:"primary",children:"\uacb0\uacfc \ud655\uc778\ud558\uae30"})]})},K=[{name:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc 1\uae30\ub294 \uc11c\uc6b8\ub300\ud559\uad50\uc5d0\uc11c\ub9cc \uc9c4\ud589\ud588\ub2e4 ?",answer:!0},{name:"\uc790\uc18c\uc124\ub2f7\ucef4\uc740 \uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc \ucd9c\uc2e0 \uc11c\ube44\uc2a4\uac00 \uc544\ub2c8\ub2e4 ?",answer:!1},{name:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc\uc740 IT \uc804\uacf5\uc790\ub9cc \uc2e0\uccad \uac00\ub2a5\ud558\ub2e4 ?",answer:!1},{name:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc\uc740 \ub9e4\ub144 \ud574\ucee4\ud1a4\uc744 \uc9c4\ud589\ud55c\ub2e4 ?",answer:!0},{name:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc \ud65c\ub3d9 \uc2dc\uae30\ub294 3\uc6d4\ubd80\ud130 12\uc6d4\uc774\ub2e4 ?",answer:!0},{name:"\uba4b\uc7c1\uc774 \uc0ac\uc790\ucc98\ub7fc\uc740 '\uc774\ub450\ud76c'\uc528\uac00 \ub9cc\ub4e4\uc9c0 \uc54a\uc558\ub2e4 ?",answer:!1},{name:"\ucf54\ub85c\ub098, \ub9c8\uc2a4\ud06c \uc54c\ub9ac\ubbf8\ub294 \uba4b\uc7c1\uc774 \uc0ac\uc790\ucc28\ub7fc \ucd9c\uc2e0\uc774\ub2e4 ?",answer:!0}],V=K.length,X=function(){var e=Math.random()*V;return Math.floor(e)},Z=function(e){var t=e.maxQuizNum,c=e.currentQuizNum,s=e.setCurrentQuizNum,r=Object(a.useState)(),i=Object(b.a)(r,2),o=i[0],u=i[1];Object(a.useEffect)((function(){for(var e=[],n=0;n<=t;n++){var a="progress__element ".concat(n===c&&"progress__selected");e.push(a)}u(e)}),[t,c]);var j=function(e){var t=e.target.id;s(parseInt(t))};return Object(n.jsx)("div",{className:"quiz__progress",children:Object(n.jsx)("div",{className:"progress__box",children:null===o||void 0===o?void 0:o.map((function(e,t){return Object(n.jsx)("div",{className:e,id:"".concat(t),onClick:j},t)}))})})},Y=c(153),$=c(154),ee=function(){var e=Object(N.a)(g.a.mark((function e(t){var c,n,a,s,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(c=t).email,a=c.uid,null===n||void 0===n){e.next=6;break}return s=Date.now(),r=new Date(s),e.next=6,f.collection("correctedUser").add({correctedAt:r.toUTCString(),email:n,uid:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e){var t=e.isCorrect,c=Object(a.useState)(""),s=Object(b.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),u=Object(b.a)(o,2),j=u[0],l=u[1];return Object(a.useEffect)((function(){i(t?"\uc815\ub2f5\uc785\ub2c8\ub2e4 !":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc2b5\ub2c8\ub2e4"),l(t?"\uc774\ubca4\ud2b8 \ub2f9\ucca8\uc790\uc5d0\uac8c\ub294 2\uc6d4 99\uc77c \ud68c\uc6d0\uac00\uc785\uc5d0 \uc0ac\uc6a9\ud558\uc168\ub358 \uc774\uba54\uc77c\uc744 \ud1b5\ud574 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4 !":"\ud558\ub2e8 \ubc84\ud2bc\uc744 \uc774\uc6a9\ud574 \ub2e4\uc2dc \ub3c4\uc804 \ud574\ubcf4\uc138\uc694 !!")}),[t]),Object(n.jsxs)("div",{className:"result__title",children:[Object(n.jsx)("span",{className:"title__header",children:r}),Object(n.jsx)("span",{className:"title__info",children:j})]})},ce=function(e){var t=e.isCorrect;return Object(a.useEffect)((function(){}),[]),Object(n.jsxs)("div",{className:"result__button",children:[t?Object(n.jsx)("a",{href:"",children:Object(n.jsx)(k.a,{variant:"contained",color:"primary",children:"\ub9cc\ub4e0 \uc0ac\ub78c \ubcf4\uae30"})}):Object(n.jsx)("a",{href:"",children:Object(n.jsx)(k.a,{variant:"contained",color:"primary",children:"\uc7ac\ub3c4\uc804"})}),Object(n.jsx)("a",{href:"https://github.com/hyesungoh/Like_Amazing_Lion",target:"_blank",children:Object(n.jsx)(k.a,{variant:"contained",color:"primary",children:"\uc18c\uc2a4 \ubcf4\uae30"})})]})},ne=(c(105),function(e){var t=e.quizzes,c=e.answers,s=e.isSubmit,r=Object(a.useState)(!1),i=Object(b.a)(r,2),o=i[0],u=i[1],j=x();return Object(a.useEffect)((function(){u(function(e){for(var t=e.quizzes,c=e.answers,n=e.currentUser,a=0;a<c.length;a++)if((null===t||void 0===t?void 0:t[a].answer)!==c[a])return!1;return ee(n),!0}({quizzes:t,answers:c,currentUser:j}))}),[s]),Object(n.jsxs)("div",{className:"result ".concat(s?"":"result__hide"),children:[Object(n.jsx)("div",{className:"result__overlay"}),Object(n.jsxs)("div",{className:"result__box",children:[o?Object(n.jsx)(Y.a,{}):Object(n.jsx)($.a,{}),Object(n.jsx)(te,{isCorrect:o}),Object(n.jsx)(ce,{isCorrect:o})]})]})}),ae=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([!0,!0,!0]),i=Object(b.a)(r,2),o=i[0],u=i[1],j=Object(a.useState)(0),l=Object(b.a)(j,2),d=l[0],O=l[1],m=Object(a.useState)(!1),h=Object(b.a)(m,2),f=h[0],x=h[1];return Object(a.useEffect)((function(){var e=function(e){for(var t=[];t.length<e;){var c=X();t.includes(c)||t.push(c)}return t.map((function(e){return K[e]}))}(3);s(e)}),[]),Object(n.jsxs)("div",{className:"quiz",children:[Object(n.jsxs)("div",{className:"quiz__box",children:[null===c||void 0===c?void 0:c.map((function(e,t){return Object(n.jsx)(W,{id:t,isCurrent:t===d,quiz:e,answer:o,setAnswer:u},t)})),Object(n.jsx)(G,{id:3,isCurrent:3===d,answer:o,quizzes:c,setCurrentQuiz:O,setIsSubmit:x}),Object(n.jsx)(B,{setCurrentQuiz:O,maxQuizNum:3,currentQuizNum:d})]}),Object(n.jsx)(Z,{maxQuizNum:3,currentQuizNum:d,setCurrentQuizNum:O}),Object(n.jsx)(ne,{quizzes:c,answers:o,isSubmit:f})]})},se=(c(106),function(){return Object(n.jsxs)("div",{className:"waiting",children:[Object(n.jsx)("div",{className:"background__waiting"}),Object(n.jsxs)("div",{className:"waiting__content",children:[Object(n.jsxs)("div",{className:"content__title",children:[Object(n.jsx)("h1",{children:"\ucd95\ud558\ud569\ub2c8\ub2e4 !"}),Object(n.jsxs)("p",{children:["3\uac00\uc9c0 \ubb38\uc81c\ub97c \ubaa8\ub450 \ub9de\ud614\uc744 \uc2dc, ",Object(n.jsx)("br",{}),"\uc790\ub3d9\uc801\uc73c\ub85c \uc774\ubca4\ud2b8 \uc751\ubaa8\uac00 \uc644\ub8cc\ub41c \uac83 \uc785\ub2c8\ub2e4! \ud83c\udf81"]}),Object(n.jsxs)("p",{children:["\ub2f9\ucca8\uc790 \ucd94\ucca8\uc740 ",Object(n.jsx)("b",{children:"2\uc6d4 99\uc77c"}),"\uc5d0 \uc9c4\ud589\ud560 \uc608\uc815\uc774\uba70,",Object(n.jsx)("br",{}),"\ub2f9\ucca8\uc790\uc5d0\uac8c\ub294 \uc774\uba54\uc77c\ub85c \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \ud83d\ude01"]})]}),Object(n.jsxs)("div",{className:"content__other",children:[Object(n.jsx)("a",{href:"",children:Object(n.jsx)(k.a,{color:"primary",children:"\uba4b\uc7c1\uc774\uc0ac\uc790\ucc98\ub7fc \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30"})}),Object(n.jsx)("a",{href:"",children:Object(n.jsx)(k.a,{color:"primary",children:"\ub9db\uc9d1 \ubcf4\uae30"})})]})]})]})}),re=(c(107),function(){return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsxs)("div",{className:"about__info",children:[Object(n.jsx)("span",{children:"Hyesung Oh"}),Object(n.jsx)("span",{children:"LikeLion at SKHU 5th"})]}),Object(n.jsxs)("div",{className:"about__contect",children:[Object(n.jsx)("span",{children:"github.com/hyesungoh"}),Object(n.jsx)("span",{children:"haesungoh414@gmail.com"})]})]})}),ie=function(e){var t=e.user,c=Object(o.f)();return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)(k.a,{className:"nav__logo",children:"\ub180\ub77c\uc6b4 \uc0ac\uc790\ucc98\ub7fc"})}),Object(n.jsxs)("div",{className:"nav__elements",children:[Object(n.jsx)(u.b,{to:"/about",children:Object(n.jsx)(k.a,{className:"nav__element",children:"\ub9cc\ub4e0 \uc0ac\ub78c"})}),t&&Object(n.jsx)(k.a,{className:"nav__element",onClick:function(){h.signOut(),c.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})]})},oe=function(){var e=x(),t=_(e),c=Object(o.g)((function(c){var a=c.location;return Object(n.jsx)(j.a,{className:"app",children:Object(n.jsx)(l.a,{classNames:"slide",timeout:1500,children:Object(n.jsxs)(o.c,{location:a,children:[null===e?Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(U,{})}):t?Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(se,{})}):Object(n.jsx)(o.a,{exact:!0,path:"/",children:Object(n.jsx)(ae,{})}),Object(n.jsx)(o.a,{path:"/about",children:Object(n.jsx)(re,{})})]})},a.pathname)})}));return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(v,{}),Object(n.jsx)(ie,{user:e}),Object(n.jsx)(c,{})]})},ue=c(155),je=c(80),le=Object(je.a)({palette:{primary:{light:"#F79E1C",main:"#F79E1C",dark:"#F79E1C",contrastText:"#F79E1C"},secondary:{light:"#ffffff",main:"#ffffff",dark:"#ffffff",contrastText:"#F79E1C"}}});var be=function(){return Object(n.jsx)(ue.a,{theme:le,children:Object(n.jsx)(oe,{})})};c(109);i.a.render(Object(n.jsx)(be,{}),document.getElementById("root"))},98:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.58036dd1.chunk.js.map