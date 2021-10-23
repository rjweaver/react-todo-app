(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(e,t,c){e.exports={item:"TodoItem_item__MqoCc",checkbox:"TodoItem_checkbox__S3g2h",textInput:"TodoItem_textInput__Vinqn"}},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(22),i=c.n(a),s=c(8),r=c(19),l=c(20),d=c(9),u=c(3),j=c(40),b=c(2),h=function(){console.log(Object(u.f)());var e=Object(u.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This App was created by rjweaver. I followed the great guide created by Ibas Majid, So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),c=t.title,n=t.description;return Object(b.jsxs)("div",{className:"main__content",children:[Object(b.jsx)("h1",{children:c}),Object(b.jsx)("p",{children:n})]})},p=function(e){console.log(Object(u.g)());var t=Object(u.g)(),c=t.url,n=t.path;return Object(b.jsxs)("div",{className:"about__content",children:[Object(b.jsxs)("ul",{className:"about__list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"".concat(c,"/about-app"),children:"About App"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"".concat(c,"/about-author"),children:"About Author"})})]}),Object(b.jsx)(u.a,{path:"".concat(n,"/:slug"),children:Object(b.jsx)(h,{})})]})},x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},O=c(25),f=c(26),m=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],o=t[1];return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)("button",{onClick:function(){o(!c)},children:c?Object(b.jsx)(O.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(b.jsx)(f.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(b.jsx)("ul",{className:"menuNav ".concat(c?"showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:e.path,onClick:function(){o(!1)},activeClassName:"active-link",exact:!0,children:e.text})},e.id)}))})]})},g=c(15),y=c.n(g),v=c(14),N=function(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),o=c[0],a=c[1],i=e.todo,s=i.completed,r=i.id,l=i.title,u={},j={};return o?u.display="none":j.display="none",Object(n.useEffect)((function(){return function(){console.log("Cleaning up")}}),[]),Object(b.jsxs)("li",{className:y.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){a(!0)},style:u,children:[Object(b.jsx)("input",{type:"checkbox",className:y.a.checkbox,checked:s,onChange:function(){return e.handleChangeProps(r)}}),Object(b.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(b.jsx)(v.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(b.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(b.jsx)("input",{type:"text",className:y.a.textInput,style:j,value:l,onChange:function(t){e.setUpdate(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&a(!1)}})]})},S=function(e){return Object(b.jsx)("ul",{children:e.todos.map((function(t){return Object(b.jsx)(N,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},k=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"Todos"})})},T=function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),o=c[0],a=c[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.trim()?(e.addTodoProps(o),a("")):alert("Please Write Item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o,name:"title",onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{className:"input-submit",children:Object(b.jsx)(v.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},w=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){var e=JSON.stringify(c);localStorage.setItem("todos",e)}),[c]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(k,{}),Object(b.jsx)(T,{addTodoProps:function(e){var t={id:Object(j.a)(),title:e,completed:!1};o([].concat(Object(r.a)(c),[t]))}}),Object(b.jsx)(S,{todos:c,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(r.a)(c.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(c.map((function(c){return c.id===t&&(c.title=e),c})))}})]})})}),Object(b.jsx)(u.a,{path:"/about",children:Object(b.jsx)(p,{})}),Object(b.jsx)(u.a,{path:"*",children:Object(b.jsx)(x,{})})]})]})};c(37);i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(s.a,{basename:"/react-todo-app",children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cb183a34.chunk.js.map