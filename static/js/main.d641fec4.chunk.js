(window.webpackJsonpreactjs_tutorials=window.webpackJsonpreactjs_tutorials||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/background2.fdc73516.jpg"},,,,function(e,t,n){},,,,,function(e){e.exports=JSON.parse('{"Order_Information":[{"order_number":"12345","customer":"amazon","cutomer_status":"Sold"},{"order_number":"700048","customer":"google","cutomer_status":"Active"},{"order_number":"5000485","customer":"linkedin","cutomer_status":"Sold"}]}')},,,function(e,t,n){e.exports=n(45)},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(30),n(1)),c=n(2),l=n(4),i=n(3),u=n(5),s=n(6),m=n(11),p=(n(31),n(32),n(20),n(33),n(34),n(12),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"hello bootstrap ! we are here to integrate the bootstrap with reactJS"))}}]),t}(a.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"hello RedDux ! we are here to Learn the Redux"))}}]),t}(a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"headertab_div"},r.a.createElement(s.b,{to:"/Bootstrap_react"},"Bootstrap-react (Headertabs)"),r.a.createElement(s.b,{to:"/Redux_Info"},"Redux"),r.a.createElement(s.b,{to:"/Material_UI"},"Material-UI"),r.a.createElement(s.b,{to:"/Material_UI"},"DashBorad-1"))}}]),t}(a.Component),d=(a.Component,a.Component,function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"hey Hi, i am component 1 - wassup ? "),r.a.createElement("h2",null,"the Below state of the variable is coming from component 2  "),r.a.createElement("h1",null,this.state.component1_variable),r.a.createElement("h5",null,this.props.component2_variable))}}]),t}(a.Component)),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={component2_variable:"I belongs to compoent2, my home is component2"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"hey Hi, i am component 2 - wassup ? "),r.a.createElement("h5",null,"the Below state of the variable is coming from component 2"),r.a.createElement("h5",null,"componet_variable2:",this.state.component2_variable),r.a.createElement("h5",null,"variable from compoent 1"))}}]),t}(a.Component),v=n(24),f=(n(40),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"header"},r.a.createElement(s.b,{class:"logo",to:"/"},"ReatJS Tutorials"),r.a.createElement("div",{class:"header-right"},r.a.createElement(s.b,Object(v.a)({class:"home_active",to:""},"class","home_active"),"Home"),r.a.createElement(s.b,{to:"/"},"Contact"),r.a.createElement(s.b,{to:"#about"},"About")))}}]),t}(a.Component)),j=n(25),O=(n(41),j.Order_Information),_=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={test:[],lcs:""},n.change_select=function(e){console.log(e.target.value),n.setState({lcs:e.target.value}),console.log(n.state.lcs),n.renderjsondata()},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=[];O.map(function(t){e.push(t),console.log(t)}),console.log(e),this.setState({test:e})}},{key:"renderjsondata",value:function(){var e=this.state.test.length,t=this.state.lcs;console.log("json aray size : "+t);var n=[];console.log("lcs value before filter array:: "+t);for(var a=0;a<e;a++){var o=this.state.test[a].cutomer_status;console.log(o+"   "+t),t!=o&&"All"!=t&&""!=t||n.push(r.a.createElement("tr",null,r.a.createElement("td",null," ",this.state.test[a].order_number,"    "),r.a.createElement("td",null," ",this.state.test[a].customer,"        "),r.a.createElement("td",null," ",this.state.test[a].cutomer_status,"  ")))}return n}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"searhc_criteria"},r.a.createElement("p",null,"status"),r.a.createElement("select",{name:"customerstatus",onChange:this.change_select,value:this.state.lcs},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Sold"},"Sold"),r.a.createElement("option",{value:"Active"},"Active"),r.a.createElement("option",{value:"Terminated"},"Terminated"),r.a.createElement("option",{value:"hardnostart"},"Hardnostart"))),r.a.createElement("div",{class:"customerpage"},r.a.createElement("table",{border:"1",position:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"order number"),r.a.createElement("th",null,"customer"),r.a.createElement("th",null,"Customer status")),this.renderjsondata()))))}}]),t}(a.Component);var g=function(){return r.a.createElement("div",{class:"rightsidenav"},r.a.createElement("div",{position:"relative"},r.a.createElement(s.b,null,r.a.createElement("h5",{align:"center"}," Temp"))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(s.b,null,r.a.createElement("h5",{align:"center"}," Temp_2"))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/Json_data1"},r.a.createElement("h5",{align:"center"},"Json_data1"))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/Stateinforeact"},r.a.createElement("h5",{align:"center"},"State in react"))))},y=n(16),k=n.n(y),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(g,null))}}]),t}(a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"hello RedDux ! we are here to Learn the Redux"))}}]),t}(a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"this is a dashborad ! we are here to Learn the Redux"))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).display_com1_pros=function(){n.props.click_comp1()},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(s.b,{to:"/Component_1",onClick:this.display_com1_pros},"Component1"),r.a.createElement("br",null),r.a.createElement(s.b,{to:"/Component_2",onClick:this.display_com2_pros},"Component2")))}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).click_comp1=function(){n.setState({component2_variable:"test"})},n.state={component1_variable:" i belongs to component 1 , component 1 is my home",component2_variable:" i belongs to component 2 , component 2 is my home"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:k.a,id:"bg"}),r.a.createElement(s.a,null,r.a.createElement("switch",null,r.a.createElement(m.a,{path:"/",exact:!0,component:w}),r.a.createElement(m.a,{path:"/component_1",component:d,component2_variable:this.component2_variable}),r.a.createElement(m.a,{path:"/component_2",component:E}),r.a.createElement(m.a,{path:"/Bootstrap_react",component:p}),r.a.createElement(m.a,{path:"/Redux_Info",component:h}),r.a.createElement(m.a,{path:"/Material_UI",component:C}),r.a.createElement(m.a,{path:"/Temp_Dashboard",component:S}),r.a.createElement(m.a,{path:"/Json_data1",component:_}),r.a.createElement(m.a,{path:"/Stateinforeact",component:x}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(26);Object(A.render)(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,1,2]]]);
//# sourceMappingURL=main.d641fec4.chunk.js.map