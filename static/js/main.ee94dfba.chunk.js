(this["webpackJsonpcharacter-counter"]=this["webpackJsonpcharacter-counter"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(4),a=c.n(s),i=c(6),o=c(5),u=c(8),d=c(7),j=c(9),h=c(19),l=(c(14),c(0)),b=function(e){var t=e.eachWord.word;return Object(l.jsx)("li",{children:Object(l.jsxs)("p",{className:"word",children:[t,":",t.length]})})},O=function(e){function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=Object(d.a)(this,t,[].concat(n))).state={userInput:"",wordsArray:[]},e.onClickAdd=function(t){t.preventDefault();var c=e.state.userInput,n={id:Object(h.a)(),word:c};e.setState((function(e){return{userInput:"",wordsArray:[].concat(Object(i.a)(e.wordsArray),[n])}}))},e.onUserChange=function(t){e.setState({userInput:t.target.value})},e}return Object(j.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userInput,c=e.wordsArray;return Object(l.jsxs)("div",{className:"bg",children:[Object(l.jsxs)("div",{className:"c1",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"chead",children:"Count the characters like a Boss..."})}),Object(l.jsx)("div",{children:0===c.length?Object(l.jsx)("img",{className:"img",alt:"no user inputs",src:"https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "}):Object(l.jsx)("ul",{className:"ul",children:c.map((function(e){return Object(l.jsx)(b,{eachWord:e},e.id)}))})})]}),Object(l.jsxs)("div",{className:"c2",children:[Object(l.jsx)("h1",{className:"c2head",children:"Character Counter"}),Object(l.jsx)("div",{className:"c2sc",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{value:t,onChange:this.onUserChange,type:"text",className:"in",placeholder:"Enter the Characters here"}),Object(l.jsx)("button",{onClick:this.onClickAdd,className:"btn",type:"submit",children:"Add"})]})})]})]})}}])}(n.Component),p=O,m=(c(16),function(){return Object(l.jsx)(p,{})});a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ee94dfba.chunk.js.map