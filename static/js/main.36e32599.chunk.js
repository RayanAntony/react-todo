(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),s=n(3),c=n.n(s),r=(n(15),n(8)),o=n(5),u=n(6),d=n(2),m=n(10),l=n(9),h=(n(16),n(17),n(7)),j=n(0);var b=function(t){var e=t.items.map((function(e){return Object(j.jsx)("div",{className:"list",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"material-icons",onClick:function(){return t.removeItem(e.key)},children:"delete"})})]})},e.key)}));return Object(j.jsxs)("div",{children:[" ",Object(j.jsx)(h.a,{duratio:500,easing:"ease-in-out",children:e})]})},v=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},i.handleInput=i.handleInput.bind(Object(d.a)(i)),i.addItem=i.addItem.bind(Object(d.a)(i)),i.removeItem=i.removeItem.bind(Object(d.a)(i)),i.setUpdate=i.setUpdate.bind(Object(d.a)(i)),i}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"removeItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("form",{id:"todo-form",onSubmit:this.addItem,children:[Object(j.jsx)("input",{type:"text",placeholder:"Enter your activity",value:this.state.currentItem.text,onChange:this.handleInput}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})}),Object(j.jsx)(b,{items:this.state.items,removeItem:this.removeItem,setUpdate:this.setUpdate})]})}}]),n}(a.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.36e32599.chunk.js.map