(this.webpackJsonptrybewallet=this.webpackJsonptrybewallet||[]).push([[0],{40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),s=n.n(c),i=n(16),l=n(13),o=(n(40),n(5)),d=n(11),u=n(12),b=n(6),j=n(15),h=n(14),p=n(3),m=n.n(p),O=n(1);m.a.string,m.a.func,m.a.bool;var x=function(e){var t=e.type,n=e.name,a=e.text,r=e.id,c=e.className,s=e.testID,i=e.onClick,l=e.disabled;return Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:t?"button":"submit",name:n,id:r,className:c,"data-testid":s,onClick:i,disabled:l,children:a})})},v=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).totalAmount=e.totalAmount.bind(Object(b.a)(e)),e}return Object(u.a)(n,[{key:"totalAmount",value:function(){var e=this.props.getWalletExpenses.reduce((function(e,t){var n=t.value,a=t.currency,r=t.exchangeRates[a].ask;return e+=parseFloat(n)*parseFloat(r)}),0);return Math.round(100*e)/100}},{key:"render",value:function(){var e=this.props.user;return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsxs)("h3",{"data-testid":"email-field",children:["Email:",Object(O.jsx)("span",{children:" ".concat(e)})]}),Object(O.jsx)("div",{"data-testid":"total-field",children:Object(O.jsxs)("p",{children:["Despesa total: R$",this.totalAmount()]})}),Object(O.jsx)("div",{"data-testid":"header-currency-field",children:Object(O.jsx)("p",{children:"C\xe2mbio: BRL"})}),Object(O.jsx)(i.b,{to:"/trybewallet",className:"link",children:"Home"})]})}}]),n}(r.a.Component),f=(m.a.string,Object(l.b)((function(e){return{user:e.user.email,getWalletExpenses:e.wallet.expenses}}))(v));m.a.string,m.a.func;var g=function(e){var t=e.type,n=e.name,a=e.labelText,r=e.placeholder,c=e.className,s=e.id,i=e.testID,l=e.onChange;return Object(O.jsx)("div",{children:Object(O.jsxs)("label",{htmlFor:s,children:[a,Object(O.jsx)("input",{type:t,name:n,placeholder:r,className:c,id:s,"data-testid":i,onChange:l})]})})};m.a.string,m.a.func;var y=function(e){var t=e.name,n=e.labelText,a=e.id,r=e.options,c=e.onChange,s=e.className;return Object(O.jsxs)("label",{htmlFor:a,children:[n,Object(O.jsx)("select",{name:t,id:a,className:s,onChange:c,children:r?r.map((function(e,t){return Object(O.jsx)("option",{className:"option",value:e,children:e},t)})):null})]})};var w="USER_INFO",k="LOADING_TYPE",C="SUCCESS_TYPE",S="ERROR_TYPE",E="ADD_EXPENSES",N="DELETE_EXPENSE",T=function(){return{type:S}},D=function(e){return{type:E,payload:e}},P=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",invalidEmail:!0,invalidPassword:!0,redirect:!1},a.validatePassword=a.validatePassword.bind(Object(b.a)(a)),a.validateEmail=a.validateEmail.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"validatePassword",value:function(e){var t=e.target.value;return function(e){return e.length>=6}(t)?this.setState({password:t,invalidPassword:!1}):this.setState({password:t,invalidPassword:!0})}},{key:"validateEmail",value:function(e){var t=e.target.value;return function(e){return/\S+@\S+\.\S+/.test(e)}(t)?this.setState({email:t,invalidEmail:!1}):this.setState({email:t,invalidEmail:!0})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.setEmailToStore,n=this.state;t({email:n.email,password:n.password}),this.setState({redirect:!0})}},{key:"render",value:function(){var e=this.state,t=e.redirect,n=e.invalidEmail,a=e.invalidPassword;return t?Object(O.jsx)(o.a,{to:"/trybewallet/wallet"}):Object(O.jsxs)("div",{className:"login-container",children:[Object(O.jsxs)("div",{className:"logo-container",children:[Object(O.jsx)("div",{className:"wallet",children:Object(O.jsx)("img",{src:"https://i.ibb.co/3dBLWWV/clipart1723162.png",alt:"wallet",id:"wallet"})}),Object(O.jsx)("div",{className:"trybe",children:Object(O.jsx)("img",{src:"https://freecourse.betrybe.com/images/trybe-logo-e10dbaaa26462aa149b81a924b00df07.png?vsn=d",alt:"trybe",id:"trybe"})})]}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)(g,{type:"text",placeholder:"E-mail",className:"input",id:"email",testID:"email-input",onChange:this.validateEmail}),Object(O.jsx)(g,{type:"password",placeholder:"Senha",className:"input",id:"password",testID:"password-input",onChange:this.validatePassword}),Object(O.jsx)(x,{id:"submit-button",text:"Entrar",disabled:n||a})]})]})}}]),n}(r.a.Component),I=Object(l.b)(null,(function(e){return{setEmailToStore:function(t){return e({type:w,payload:t})}}}))(P);var F=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"P\xe1gina n\xe3o encontrada"}),Object(O.jsx)(i.b,{to:"/trybewallet",children:"P\xe1gina Inicial"})]})},R=n(21),A=n(4),M=n(18),L=n.n(M),W=n(22),U=function(){var e=Object(W.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){return function(e){return e({type:k}),U().then((function(t){return e({type:C,payload:t})}),(function(){return e(T())}))}},B=["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"],V=["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"],Y=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleClick=e.handleClick.bind(Object(b.a)(e)),e}return Object(u.a)(n,[{key:"handleClick",value:function(e){var t=e.target;(0,this.props.remove)(parseInt(t.name,10))}},{key:"render",value:function(){var e=this,t=this.props.getExpenses;return Object(O.jsx)(O.Fragment,{children:t.map((function(t){var n=t.id,a=t.currency,r=t.description,c=t.tag,s=t.method,i=t.value,l=t.exchangeRates;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:r}),Object(O.jsx)("td",{children:c}),Object(O.jsx)("td",{children:s}),Object(O.jsx)("td",{children:i}),Object(O.jsx)("td",{children:l[a].name.split("/")[0]}),Object(O.jsx)("td",{children:Number(l[a].ask).toFixed(2)}),Object(O.jsx)("td",{children:Number(l[a].ask*i).toFixed(2)}),Object(O.jsx)("td",{children:"Real"}),Object(O.jsx)("td",{children:Object(O.jsx)(x,{type:"button",name:n,testID:"delete-btn",onClick:e.handleClick,text:"Excluir"})})]},n)}))})}}]),n}(r.a.Component),z=(m.a.arrayOf,m.a.object,Object(l.b)((function(e){return{getExpenses:e.wallet.expenses}}),(function(e){return{remove:function(t){return e({type:N,id:t})}}}))(Y)),J=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={},e.renderTable=e.renderTable.bind(Object(b.a)(e)),e}return Object(u.a)(n,[{key:"renderTable",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("table",{className:"table",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("tr",{className:"table-row",children:["Descri\xe7\xe3o","Tag","M\xe9todo de pagamento","Valor","Moeda","C\xe2mbio utilizado","Valor convertido","Moeda de convers\xe3o","Excluir"].map((function(e){return Object(O.jsx)("th",{className:"table-cell",children:e},e)}))})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(z,{})})]})})}},{key:"render",value:function(){return Object(O.jsx)("section",{children:this.renderTable()})}}]),n}(r.a.Component),X=(m.a.arrayOf,m.a.object,Object(l.b)((function(e){return{getExpenses:e.wallet.expenses}}))(J)),$=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={expense:{id:0,value:0,description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"}},e.renderInputs=e.renderInputs.bind(Object(b.a)(e)),e.renderSelects=e.renderSelects.bind(Object(b.a)(e)),e.renderForm=e.renderForm.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getCoinsThunk)()}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value,r=this.state.expense;this.setState({expense:Object(A.a)(Object(A.a)({},r),{},Object(R.a)({},n,a))})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.expense,n=this.props.expenses;this.setState({expense:{id:t.id+1,value:0,description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"}},(function(){n(t)}))}},{key:"renderSelects",value:function(){var e=this.props.currencies,t=Object.keys(e).filter((function(e){return"USDT"!==e}));return Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)(y,{name:"currency",labelText:"Moeda",id:"expense-currency",className:"form-control select",options:t,onChange:this.handleChange}),Object(O.jsx)(y,{name:"method",labelText:"M\xe9todo de pagamento",id:"expense-payment",className:"form-control select",options:V,onChange:this.handleChange}),Object(O.jsx)(y,{name:"tag",labelText:"Tag",className:"form-control select",id:"expense-category",options:B,onChange:this.handleChange})]})}},{key:"renderInputs",value:function(){return Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)(g,{type:"number",name:"value",placeholder:"0",className:"form-control",id:"expense-value",labelText:"Valor",onChange:this.handleChange}),Object(O.jsx)(g,{type:"text",name:"description",className:"form-control",id:"expense-description",labelText:"Descri\xe7\xe3o",onChange:this.handleChange})]})}},{key:"renderForm",value:function(){return Object(O.jsx)("section",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-group",children:[this.renderInputs(),this.renderSelects(),Object(O.jsx)(x,{name:"expense-submit",id:"expense-submit",text:"Adicionar despesa"})]})})}},{key:"render",value:function(){return Object(O.jsxs)("main",{children:[this.renderForm(),Object(O.jsx)(X,{})]})}}]),n}(r.a.Component),G=Object(l.b)((function(e){return{currencies:e.wallet.currencies,getExpenses:e.wallet.expenses}}),(function(e){return{getCoinsThunk:function(){return e(_())},expenses:function(t){return e(function(e){return function(){var t=Object(W.a)(L.a.mark((function t(n){var a,r,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://economia.awesomeapi.com.br/json/all");case 3:if((a=t.sent).ok){t.next=6;break}throw new Error("Fetch failed");case 6:return t.next=8,a.json();case 8:return delete(r=t.sent).USDT,c=Object(A.a)(Object(A.a)({},e),{},{exchangeRates:r}),t.abrupt("return",n(D(c)));case 14:return t.prev=14,t.t0=t.catch(0),t.abrupt("return",n(T(t.t0.message)));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))($),H=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(G,{})]})}}]),n}(r.a.Component);n(47);var q=function(){return Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/trybewallet",component:I}),Object(O.jsx)(o.b,{exact:!0,path:"/trybewallet/wallet",component:H}),Object(O.jsx)(o.b,{path:"*",component:F})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(17),Q=n(28),Z=n(29),ee={email:"",password:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(A.a)(Object(A.a)({},e),{},{email:t.payload.email,password:t.payload.password});default:return e}},ne=n(30),ae={currencies:[],isLoading:!1,expenses:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0});case C:return Object(A.a)(Object(A.a)({},e),{},{currencies:t.payload});case S:return Object(A.a)(Object(A.a)({},e),{},{error:"error 404"});case E:return Object(A.a)(Object(A.a)({},e),{},{expenses:[].concat(Object(ne.a)(e.expenses),[Object(A.a)(Object(A.a)({},t.payload),{},{id:e.expenses.length})]),error:""});case N:return Object(A.a)(Object(A.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});default:return e}},ce=Object(K.combineReducers)({user:te,wallet:re}),se=Object(K.createStore)(ce,Object(Q.composeWithDevTools)(Object(K.applyMiddleware)(Z.a)));s.a.render(Object(O.jsx)(l.a,{store:se,children:Object(O.jsx)(i.a,{children:Object(O.jsx)(q,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.a2acece4.chunk.js.map