(this.webpackJsonphanoi_towers=this.webpackJsonphanoi_towers||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(43),s=n.n(a),i=(n(57),n(12)),r=n(32),o=n(50),l=(n(58),n(59),n(76)),j=n(77),d=n(3);var b=function(e){var t=Object(l.a)((function(){return{type:"DISK",item:{from:e.towerNum,diskNum:e.disks},end:function(e,t){t.getDropResult()},collect:function(e){return{isDragging:!!e.isDragging()}}}})),n=Object(i.a)(t,2),a=(n[0].isDragging,n[1]),s=Object(c.useState)(e.disks),r=Object(i.a)(s,2),o=r[0],b=(r[1],Object(j.a)((function(){return{accept:"DISK",canDrop:function(t,n){if(0===e.disks.length||e.disks[0]>t.diskNum[0])return!0},drop:function(t,n){e.handleDiskMove(t.from,e.towerNum)}}}))),u=Object(i.a)(b,2),m=u[0],h=(m.canDrop,m.isOver,u[1]);return Object(d.jsx)("div",{ref:h,className:"tower-container",id:e.towerNum,children:Object(d.jsx)("div",{className:"tower",children:o.map((function(e,t){return Object(d.jsx)("div",{ref:e===o[0]?a:null,className:"disk",id:e,style:{width:50*e+"px"}})}))})})},u=n(75),m=n(49),h=n(10),O=(n(61),n(48).a.initializeApp({apiKey:"AIzaSyB28YEgJmDI3pLliL1pifZiW8zZo9170FY",authDomain:"gameproject-bd008.firebaseapp.com",projectId:"gameproject-bd008",storageBucket:"gameproject-bd008.appspot.com",messagingSenderId:"551406795341",appId:"1:551406795341:web:f70fde7ee9c8b5da8efa04"}).firestore());var v=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(h.f)();return Object(d.jsx)("div",{game__complete:!0,children:Object(d.jsxs)("form",{action:"/",type:"POST",onSubmit:function(t){t.preventDefault(),O.collection("playersRecords").add({level:e.towerLevel,movesCount:e.moveCount,playerName:a,timeCount:e.buildTime}).then((function(){r.push("/leaderboard")})).catch((function(e){alert(e)})),s("")},children:[Object(d.jsxs)("div",{className:"game__complete-description",children:[Object(d.jsx)("p",{children:"Congratulations \ud83c\udf89\ud83c\udf89\ud83c\udf89"}),Object(d.jsxs)("p",{children:["You built the ",e.towerLevel,"-disk Hanoi Tower in only"," ",e.buildTime," seconds and ",e.moveCount," moves \ud83d\udc4f."]}),Object(d.jsx)("p",{children:"Please enter your name to be in the leaderboard!"})]}),Object(d.jsx)("input",{type:"text",name:"name",className:"game__username-input",placeholder:"your name",onChange:function(e){return s(e.target.value)},value:a,maxLength:15}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"game__btn",children:"Submit"})})]})})};var p=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)(0),j=Object(i.a)(l,2),h=j[0],O=j[1],p=Object(c.useState)(0),x=Object(i.a)(p,2),f=x[0],g=x[1],N=Object(c.useState)({1:Object(o.a)(Array(e.gameLevel).keys()).map((function(e){return e+1})),2:[],3:[]}),_=Object(i.a)(N,2),k=_[0],S=_[1];function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Object(r.a)({},k),c=n[e].shift();O((function(e){return e+1})),S(Object(r.a)(Object(r.a)({},k),{},{fromTower:n[e],toTower:n[t].unshift(c)}))}return Object(c.useEffect)((function(){var t=setInterval((function(){g((function(e){return e+1}))}),1e3);return k[2].length!==e.gameLevel&&k[3].length!==e.gameLevel||(clearInterval(t),s(!0)),function(){clearInterval(t)}}),[k]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)(v,{towerLevel:e.gameLevel,buildTime:f,moveCount:h}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"game__timer",children:["Time: ",f," s"]}),Object(d.jsxs)("div",{className:"game__move-count",children:["Moves: ",h]}),Object(d.jsx)("div",{className:"towers",children:Object(d.jsxs)(u.a,{backend:m.a,children:[Object(d.jsx)(b,{disks:k[1],handleDiskMove:y,towerNum:1}),Object(d.jsx)(b,{disks:k[2],towerNum:2,handleDiskMove:y}),Object(d.jsx)(b,{disks:k[3],towerNum:3,handleDiskMove:y})]})})]})})};n(68),n(69);var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(3),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){var e=[];O.collection("playersRecords").where("level","==",o).get().then((function(t){t.forEach((function(t){e.push(t.data())})),a(e)}))}),[o]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"leaderboard__list",children:[Object(d.jsx)("span",{children:"Level:"}),Object(d.jsxs)("select",{id:"levels",onChange:function(e){l(Number(e.target.value))},children:[Object(d.jsx)("option",{value:3,children:"Three"}),Object(d.jsx)("option",{value:4,children:"Four"}),Object(d.jsx)("option",{value:5,children:"Five"}),Object(d.jsx)("option",{value:6,children:"Six"}),Object(d.jsx)("option",{value:7,children:"Seven"})]})]}),Object(d.jsxs)("table",{className:"leaderboard__leaders-table",children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"position"}),Object(d.jsx)("th",{children:"name"}),Object(d.jsx)("th",{children:"moves"}),Object(d.jsx)("th",{children:"time"})]}),n.sort((function(e,t){return e.timeCount-t.timeCount})).map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t+1}),Object(d.jsx)("td",{children:e.playerName}),Object(d.jsx)("td",{children:e.movesCount}),Object(d.jsx)("td",{children:e.timeCount})]})}))]})]})};var f=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"game__description",children:[Object(d.jsxs)("p",{children:["Hello \ud83d\udc4b\ud83d\udc4b! In this game you have to solve a popular mathematical game-puzzle called ",Object(d.jsx)("strong",{children:"Hanoi Towers! "}),"The objective of the puzzle is to move the entire stack to last rod, obeying the following simple rules:"]}),Object(d.jsx)("p",{children:"Only one disk can be moved at a time. "}),Object(d.jsx)("p",{children:"Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod."}),Object(d.jsx)("p",{children:"No larger disk may be placed on top of a smaller disk."})]})})},g=n(21);var N=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(3),o=Object(i.a)(r,2),l=o[0],j=o[1],b=Object(c.useState)([]),u=Object(i.a)(b,2),m=u[0],h=u[1];return Object(d.jsxs)(d.Fragment,{children:[!a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"Please select the level: "}),Object(d.jsx)("span",{className:"game__error-message",style:{color:"red"},children:m}),Object(d.jsxs)("div",{className:"game__level",children:[Object(d.jsx)("input",{placeholder:"Enter the level",type:"number",className:"game__level-input",name:"level",min:3,max:7,onInput:function(e){e.target.value>7?h((function(e){return["Level can't be over 7 (It might just take you a bit longer than you think \ud83e\udd2d)"]})):e.target.value<3?h((function(e){return["Level can't be less than 3 (You won't enjoy building it if it's that easy \ud83d\ude09)"]})):(h([]),j(e.target.value||3))}}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"game__btn",onClick:function(e){s(!0)},disabled:0!==m.length,children:"Start"})})]})]}),a&&Object(d.jsx)(p,{gameLevel:Number(l)})]})},_=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"app-container",children:[Object(d.jsxs)("div",{className:"app-main",children:[Object(d.jsx)("h1",{className:"game__title",children:"HANOI TOWERS"}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/",exact:!0,component:N}),Object(d.jsx)(h.a,{path:"/about",component:f}),Object(d.jsx)(h.a,{path:"/leaderboard",component:x})]})]}),Object(d.jsx)("nav",{className:"nav-menu",children:Object(d.jsxs)("ul",{className:"nav-list",children:[Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(g.b,{className:"SectionNavigation-Item Section",to:"/",children:"Game"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(g.b,{className:"SectionNavigation-Item Section",to:"/leaderboard",children:"Leaderboard"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(g.b,{className:"SectionNavigation-Item Section",to:"/about",children:"About"})})]})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};s.a.render(Object(d.jsx)(g.a,{basename:"/",children:Object(d.jsx)(_,{})}),document.getElementById("root")),k()}},[[70,1,2]]]);
//# sourceMappingURL=main.455465f9.chunk.js.map