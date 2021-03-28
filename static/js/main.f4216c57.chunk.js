(this.webpackJsonphanoi_towers=this.webpackJsonphanoi_towers||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(20),i=n.n(s),r=(n(31),n(4)),o=n(14),l=n(24),j=(n(32),n(33),n(44)),u=n(45),d=n(2);var b=function(e){var t=Object(j.a)((function(){return{type:"DISK",item:{from:e.towerNum,diskNum:e.disks},end:function(e,t){t.getDropResult()},collect:function(e){return{isDragging:!!e.isDragging()}}}})),n=Object(r.a)(t,2),a=(n[0].isDragging,n[1]),s=Object(c.useState)(e.disks),i=Object(r.a)(s,2),o=i[0],l=(i[1],Object(u.a)((function(){return{accept:"DISK",canDrop:function(t,n){if(0===e.disks.length||e.disks[0]>t.diskNum[0])return!0},drop:function(t,n){e.handleDiskMove(t.from,e.towerNum)}}}))),b=Object(r.a)(l,2),m=b[0],h=(m.canDrop,m.isOver,b[1]);return Object(d.jsx)("div",{ref:h,className:"tower-container",id:e.towerNum,children:Object(d.jsx)("div",{className:"tower",children:o.map((function(e,t){return Object(d.jsx)("div",{ref:e===o[0]?a:null,className:"disk",id:e,style:{width:50*e+"px"}})}))})})},m=n(43),h=n(23);n(35);var O=function(e){return Object(d.jsx)("div",{game__complete:!0,children:Object(d.jsxs)("form",{action:"/",type:"POST",children:[Object(d.jsxs)("div",{className:"game__complete-description",children:[Object(d.jsx)("p",{children:"Congratulations \ud83c\udf89\ud83c\udf89\ud83c\udf89"}),Object(d.jsxs)("p",{children:["You built the ",e.towerLevel,"-disk Hanoi Tower in only",e.buildTime,e.time," seconds and ",e.moveCount," moves \ud83d\udc4f."]}),Object(d.jsx)("p",{children:"Please enter your name to be in the leaderboard!"})]}),Object(d.jsx)("input",{type:"text",name:"name",className:"game__username-input",placeholder:"your name"}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"game__btn",children:"Submit"})})]})})};var v=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(0),j=Object(r.a)(i,2),u=j[0],v=j[1],g=Object(c.useState)(0),p=Object(r.a)(g,2),f=p[0],x=p[1],k=Object(c.useState)({1:Object(l.a)(Array(e.gameLevel).keys()).map((function(e){return e+1})),2:[],3:[]}),N=Object(r.a)(k,2),_=N[0],w=N[1];function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Object(o.a)({},_),c=n[e].shift();v((function(e){return e+1})),w(Object(o.a)(Object(o.a)({},_),{},{fromTower:n[e],toTower:n[t].unshift(c)}))}return Object(c.useEffect)((function(){var t=setInterval((function(){x((function(e){return e+1}))}),1e3);return _[2].length!==e.gameLevel&&_[3].length!==e.gameLevel||(clearInterval(t),s(!0)),function(){clearInterval(t)}}),[u]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)(O,{towerLevel:e.gameLevel,buildTime:f,moveCount:u}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"game__timer",children:["Time: ",f," s"]}),Object(d.jsxs)("div",{className:"game__move-count",children:["Moves: ",u]}),Object(d.jsx)("div",{className:"towers",children:Object(d.jsxs)(m.a,{backend:h.a,children:[Object(d.jsx)(b,{disks:_[1],handleDiskMove:y,towerNum:1}),Object(d.jsx)(b,{disks:_[2],towerNum:2,handleDiskMove:y}),Object(d.jsx)(b,{disks:_[3],towerNum:3,handleDiskMove:y})]})})]})})};n(37);var g=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(3),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)([]),u=Object(r.a)(j,2),b=u[0],m=u[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"game__title",children:"HANOI TOWERS"}),!n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"game__description",children:[Object(d.jsxs)("p",{children:["Hello \ud83d\udc4b\ud83d\udc4b! In this game you have to solve a popular mathematical game-puzzle called ",Object(d.jsx)("strong",{children:"Hanoi Towers! "}),"The objective of the puzzle is to move the entire stack to last rod, obeying the following simple rules:"]}),Object(d.jsx)("p",{children:"Only one disk can be moved at a time. "}),Object(d.jsx)("p",{children:"Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod."}),Object(d.jsx)("p",{children:"No larger disk may be placed on top of a smaller disk."})]}),Object(d.jsx)("span",{children:"Please select the level: "}),Object(d.jsx)("span",{className:"game__error-message",style:{color:"red"},children:b}),Object(d.jsxs)("div",{className:"game__level",children:[Object(d.jsx)("input",{placeholder:"Enter the level",type:"number",className:"game__level-input",name:"level",min:3,max:10,onInput:function(e){e.target.value>10?m((function(e){return["Level can't be over 10 (It might just take you a bit longer than you think \ud83e\udd2d)"]})):e.target.value<3?m((function(e){return["Level can't be less than 3 (You won't enjoy building it if it's that easy \ud83d\ude09)"]})):(m([]),l(e.target.value||3))}}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"game__btn",onClick:function(e){a(!0)},disabled:0!==b.length,children:"Start"})})]})]}),n&&Object(d.jsx)(v,{gameLevel:Number(o)})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[38,1,2]]]);
//# sourceMappingURL=main.f4216c57.chunk.js.map