(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{197:function(e,t,a){e.exports=a(344)},202:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(48),c=a.n(s),o=(a(202),a(62)),l=a(26),i=a(15),u=a.n(i),m=a(20),p=a(21),h=a(22),d=a(23),f=a(24),b=a(25),g=a(59),y=a.n(g),E=y.a.create({baseURL:"".concat("https://ttp-db.herokuapp.com")}),v=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.post("/login",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.post("/signup",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.put("/user/".concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.post("/user/".concat(t,"/stock"),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/user/".concat(t,"/stocks"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),j=a(34),S=a(355),x=a(357),q=a(352),C=a(354),P=a(353),L=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={change:"",latest:""},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"pk_60ef2a46b58e4d3e9ba1c7138a8eed18",t="https://cloud.iexapis.com/stable/stock/".concat(this.props.symbol,"/quote?token=").concat("pk_60ef2a46b58e4d3e9ba1c7138a8eed18"),e.next=4,y.a.get(t).then((function(e){return e.data})).then((function(e){a.setState({change:e.change,latest:e.latestPrice})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.company,a=e.qty,n=e.symbol,s=this.state,c=s.change,o=s.latest,i=a*o;return r.a.createElement(P.a,Object(l.a)({raised:!0,key:n,className:"card-style"},"className",0==c?"grey-back":c>0?"green-back":"red-back"),r.a.createElement(P.a.Content,null,r.a.createElement(P.a.Header,{className:"card-style-2"},t),r.a.createElement(P.a.Description,{className:"card-style"},"You currently own ",a," shares of ",n,". Each share is worth $",o,".")),r.a.createElement(P.a.Content,{className:"card-style"},"Total Value: $",i.toFixed(2)))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).handleInputs=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.findStock=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.search,t.searchErr,"pk_60ef2a46b58e4d3e9ba1c7138a8eed18",r="https://cloud.iexapis.com/stable/stock/".concat(n,"/quote?token=").concat("pk_60ef2a46b58e4d3e9ba1c7138a8eed18"),e.next=5,y.a.get(r).then((function(e){return e.data})).then((function(e){a.setState({result:e,searchErr:!1})})).catch((function(e){a.setState({searchErr:!0}),setTimeout((function(){a.setState({searchErr:!1})}),2e3)}));case 5:case"end":return e.stop()}}),e)}))),a.checkStock=Object(m.a)(u.a.mark((function e(){var t,n,r,s,c,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.result,r=t.qty,s=a.props.user,c=s.wallet,o=r*n.latestPrice,!(n.latestPrice*r>c)){e.next=9;break}a.setState({qtyErr:!0}),setTimeout((function(){a.setState({qtyErr:!1})}),2e3),e.next=16;break;case 9:return l={company:n.companyName,symbol:n.symbol,qty:r,change:n.change,price:n.latestPrice},e.next=12,N(s.id,l);case 12:e.sent,a.props.spend(o),a.setState({success:!0,results:{},qty:""}),setTimeout((function(){a.setState({success:!1})}),2500);case 16:case"end":return e.stop()}}),e)}))),a.cancelSearch=function(){a.setState({result:{}})},a.filterStocks=function(e){a.state.change;var t={},n=[];e.forEach((function(e){t[e.symbol]!==e.symbol&&(t[e.symbol]={qty:0,symbol:e.symbol,company:e.company,price:e.price})}));for(var r=0,s=Object.values(t);r<s.length;r++){var c=s[r];n.push(c)}for(var o=0;o<e.length;o++)for(var l=0;l<n.length;l++)e[o].symbol===n[l].symbol&&(n[l].qty+=e[o].qty);return n},a.state={search:"",searchErr:!1,qtyErr:!1,result:{},qty:"",success:!1,change:""},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchErr,a=e.result,n=e.qtyErr,s=e.qty,c=e.success,o=this.props,l=o.stocks,i=o.user,u=this.filterStocks(l);return r.a.createElement("div",null,r.a.createElement("div",{className:"wel-bud"},r.a.createElement("h1",{className:"welcome-back"},"Welcome back, ",i.fullname," !"),r.a.createElement("h1",{className:"budget-style"},"My Budget: $ ",i.wallet.toFixed(2))),r.a.createElement(x.a,{className:"grid-style"},r.a.createElement(x.a.Column,{width:5,className:"left-column"},r.a.createElement(q.a,{onSubmit:this.findStock},r.a.createElement(q.a.Input,{required:!0,name:"search",icon:"search",placeholder:"Enter a Stock Symbol",onChange:this.handleInputs})),t?r.a.createElement(C.a,{error:!0,content:"This is an invalid search value"}):null,Object.entries(a).length?r.a.createElement(P.a,{fluid:!0},r.a.createElement(P.a.Content,null,r.a.createElement(P.a.Header,{className:"card-style-2"},a.companyName," ",r.a.createElement(S.a,{onClick:this.cancelSearch,className:"button-position",icon:"close"})),r.a.createElement(P.a.Meta,{className:"card-style"},a.symbol),r.a.createElement(P.a.Description,{className:"card-style"},"Current Price: $",a.latestPrice)),r.a.createElement(P.a.Content,{extra:!0},r.a.createElement(q.a,{onSubmit:this.checkStock},r.a.createElement(q.a.Group,{className:"qty-style"},r.a.createElement(q.a.Input,{value:s,name:"qty",placeholder:"$".concat(a.latestPrice),onChange:this.handleInputs,type:"number",min:"0",step:"0"}),r.a.createElement(q.a.Button,{type:"submit",content:"Buy",color:"green"}))))):r.a.createElement(C.a,{header:"You have no search results",content:"Enter the symbol of the stock you want to buy"}),n?r.a.createElement(C.a,{error:!0,content:"Please cheack to make sure you have enough money in your budget."}):null,c?r.a.createElement(C.a,{color:"green",header:"Success",content:"Your purchase was successful!"}):null),r.a.createElement(x.a.Column,{width:11,className:"right-column"},l.length?r.a.createElement(P.a.Group,{stackable:!0,itemsPerRow:"1"},u.map((function(e){return r.a.createElement(L,{company:e.company,qty:e.qty,symbol:e.symbol})}))):r.a.createElement(C.a,{className:"no-stock",size:"big",color:"yellow",content:"Your portfolio is currently empty. Search and purchase your first stock today!"}))))}}]),t}(n.Component),T=a(341),U=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(s)))).renderTransactions=function(){return a.props.stocks.map((function(e){var t=e.qty*e.price,a=e.createdAt,n=T(a);return r.a.createElement(P.a,{raised:!0,key:e.id,className:"card-style"},r.a.createElement(P.a.Content,null,r.a.createElement(P.a.Header,{className:"card-style-2"},e.company),r.a.createElement(P.a.Meta,{className:"card-style"},n.format("LLLL")),r.a.createElement(P.a.Description,{className:"card-style"},"You purchsed ",e.qty," shares of ",e.symbol," at $",e.price," a share.")),r.a.createElement(P.a.Content,{className:"card-style"},"Total: $ ",t.toFixed(2)))}))},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return!1===this.props.isLogged?r.a.createElement(j.a,{to:"/"}):r.a.createElement("div",{className:"trans-contain"},this.props.stocks.length?r.a.createElement(P.a.Group,{stackable:!0,itemsPerRow:"1"},this.renderTransactions()):r.a.createElement(C.a,{className:"no-stock",size:"big",color:"yellow",content:"You have no previous transactions"}))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={active:"portfolio"},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stocks,a=e.fetchStocks,n=e.isLogged,s=e.user,c=e.spend;return r.a.createElement("div",null,r.a.createElement("nav",{className:"ui secondary menu"},r.a.createElement(o.b,{className:"custom-style",to:"/"}," ",r.a.createElement("div",null,"Portfolio")),r.a.createElement(o.b,{className:"custom-style",to:"/transactions"}," ",r.a.createElement("div",null,"Transactions")),r.a.createElement("div",{className:"right menu"},r.a.createElement(o.b,{to:"/",onClick:this.props.logout},r.a.createElement(S.a,{inverted:!0,color:"red",className:"logout-style"},"Sign Out")))),r.a.createElement(j.b,{exact:!0,path:"/",render:function(){return r.a.createElement(I,{user:s,stocks:t,fetchStocks:a,spend:c})}}),r.a.createElement(j.b,{path:"/transactions",render:function(){return r.a.createElement(U,{stocks:t,isLogged:n})}}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).toggleUser=function(){var e=a.state.newUser;a.setState({newUser:!e})},a.state={newUser:!0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleInputs,a=e.login,n=e.register,s=e.form1err,c=e.form2err,o=this.state.newUser;return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement("h1",{className:"login-title"},"TTP Stocks"),r.a.createElement("div",{className:"login-bottom"},o?r.a.createElement("div",{className:"form-reg-div"},r.a.createElement(q.a,{error:!0,className:"form-reg",onSubmit:function(){return n()}},r.a.createElement(q.a.Input,{className:"login-font",icon:"user",iconPosition:"left",label:"Full Name",placeholder:"Full Name",onChange:t,name:"fullname",required:!0}),r.a.createElement(q.a.Input,{className:"login-font",icon:"mail",iconPosition:"left",label:"Email",type:"email",placeholder:"Email Address",onChange:t,name:"newEmail",required:!0}),r.a.createElement(q.a.Input,{className:"login-font",icon:"lock",iconPosition:"left",label:"Password",type:"password",placeholder:"Password",onChange:t,name:"newPassword",required:!0}),c?r.a.createElement(C.a,{error:!0,header:"Unable to register",content:"This email address is already in use. Please try with a new email."}):null,r.a.createElement(S.a,{inverted:!0,className:"login-font",color:"blue",content:"Register!",primary:!0})),r.a.createElement("div",{className:"button-center"},r.a.createElement(S.a,{color:"green",className:"button-style login-font",onClick:this.toggleUser,content:"Existing User? Sign In!"}))):r.a.createElement("div",{className:"form-login-div"},r.a.createElement(q.a,{error:!0,className:"form-login",onSubmit:function(){return a()}},r.a.createElement(q.a.Input,{className:"login-font",icon:"mail",iconPosition:"left",label:"Email",placeholder:"Email Address",type:"email",onChange:t,name:"email",required:!0}),r.a.createElement(q.a.Input,{className:"login-font",icon:"lock",iconPosition:"left",label:"Password",type:"password",placeholder:"Password",onChange:t,name:"password",required:!0}),s?r.a.createElement(C.a,{error:!0,header:"Invalid email or password",content:"We are unable to find your account. Please try again."}):null,r.a.createElement(S.a,{inverted:!0,className:"login-font",color:"green",content:"Login"})),r.a.createElement("div",{className:"button-center"},r.a.createElement(S.a,{inverted:!0,className:"button-style login-font",color:"blue",onClick:this.toggleUser,content:"New User? Sign Up!"})))))}}]),t}(n.Component),F=(a(343),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).spend=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.user,r=n.wallet-t,s={wallet:r},e.next=5,w(n.id,s);case 5:c=e.sent,a.setState({user:c}),a.fetchStocks();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.toggleLogged=function(){a.setState({isLogged:!0})},a.fetchStocks=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.user,e.next=3,O(t.id);case 3:n=e.sent,a.setState({stocks:n});case 5:case"end":return e.stop()}}),e)}))),a.login=Object(m.a)(u.a.mark((function e(){var t,n,r,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.email,r=t.password,s={email:n,password:r},e.next=4,v(s);case 4:if(!(c=e.sent)){e.next=12;break}return a.setState({user:c}),e.next=9,a.fetchStocks();case 9:a.toggleLogged(),e.next=13;break;case 12:a.setState({form1err:!0});case 13:case"end":return e.stop()}}),e)}))),a.register=Object(m.a)(u.a.mark((function e(){var t,n,r,s,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.fullname,r=t.newEmail,s=t.newPassword,c={fullname:n,email:r.toLowerCase(),password:s},e.next=4,k(c);case 4:(o=e.sent)?(a.setState({user:o}),a.toggleLogged()):a.setState({form2err:!0});case 6:case"end":return e.stop()}}),e)}))),a.handleInputs=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a.handleLogOut=function(){a.setState({email:"",password:"",newEmail:"",newPassword:"",fullname:"",isLogged:!1,user:{},stocks:[],form1err:!1,form2err:!1})},a.state={email:"",password:"",newEmail:"",newPassword:"",fullname:"",isLogged:!1,stocks:[],user:{},form1err:!1,form2err:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.form1err,n=e.form2err,s=e.stocks,c=e.user;return r.a.createElement("div",{className:"main-div"},t?r.a.createElement($,{logout:this.handleLogOut,stocks:s,fetchStocks:this.fetchStocks,isLogged:t,user:c,spend:this.spend}):r.a.createElement(Y,{form1err:a,form2err:n,handleInputs:this.handleInputs,login:this.login,register:this.register}))}}]),t}(n.Component));c.a.render(r.a.createElement(o.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.deff8a20.chunk.js.map