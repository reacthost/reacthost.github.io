(window.webpackJsonpreactjs_tutorials=window.webpackJsonpreactjs_tutorials||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/background2.fdc73516.jpg"},,,,function(e,t,a){},,,,,function(e){e.exports=JSON.parse('{"Order_Information":[{"order_number":"12345","customer":"amazon","cutomer_status":"Sold"},{"order_number":"700048","customer":"google","cutomer_status":"Active"},{"order_number":"5000485","customer":"linkedin","cutomer_status":"Sold"}]}')},,,function(e,t,a){e.exports=a(45)},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(30),a(1)),c=a(2),l=a(4),i=a(3),s=a(5),u=a(6),m=a(11),p=(a(31),a(32),a(20),a(33),a(34),a(12),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"hello bootstrap ! we are here to integrate the bootstrap with reactJS"))}}]),t}(n.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"hello RedDux ! we are here to Learn the Redux"))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"headertab_div"},r.a.createElement(u.b,{to:"/Bootstrap_react"},"Bootstrap-react (Headertabs)"),r.a.createElement(u.b,{to:"/Redux_Info"},"Redux"),r.a.createElement(u.b,{to:"/Material_UI"},"Material-UI"),r.a.createElement(u.b,{to:"/Material_UI"},"DashBorad-1"))}}]),t}(n.Component),d=(n.Component,n.Component,function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"hey Hi, i am component 1 - wassup ? "),r.a.createElement("h2",null,"the Below state of the variable is coming from component 2  "),r.a.createElement("h1",null,this.state.component1_variable),r.a.createElement("h5",null,this.props.component2_variable))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={component2_variable:"I belongs to compoent2, my home is component2"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"hey Hi, i am component 2 - wassup ? "),r.a.createElement("h5",null,"the Below state of the variable is coming from component 2"),r.a.createElement("h5",null,"componet_variable2:",this.state.component2_variable),r.a.createElement("h5",null,"variable from compoent 1"))}}]),t}(n.Component),v=a(24),f=(a(40),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"header"},r.a.createElement(u.b,{class:"logo",to:"/"},r.a.createElement("h6",null,"ReatJS Tutorials")),r.a.createElement("div",{class:"header-right"},r.a.createElement(u.b,Object(v.a)({class:"home_active",to:""},"class","home_active"),"Home"),r.a.createElement(u.b,{to:"/"},"Contact"),r.a.createElement(u.b,{to:"#about"},"About")))}}]),t}(n.Component)),j=a(25),O=(a(41),j.Order_Information),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={test:[],lcs:""},a.change_select=function(e){console.log(e.target.value),a.setState({lcs:e.target.value}),console.log(a.state.lcs),a.renderjsondata()},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=[];O.map(function(t){e.push(t),console.log(t)}),console.log(e),this.setState({test:e})}},{key:"renderjsondata",value:function(){var e=this.state.test.length,t=this.state.lcs;console.log("json aray size : "+t);var a=[];console.log("lcs value before filter array:: "+t);for(var n=0;n<e;n++){var o=this.state.test[n].cutomer_status;console.log(o+"   "+t),t!=o&&"All"!=t&&""!=t||a.push(r.a.createElement("tr",null,r.a.createElement("td",null," ",this.state.test[n].order_number,"    "),r.a.createElement("td",null," ",this.state.test[n].customer,"        "),r.a.createElement("td",null," ",this.state.test[n].cutomer_status,"  ")))}return a}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"searhc_criteria"},r.a.createElement("p",null,"status"),r.a.createElement("select",{name:"customerstatus",onChange:this.change_select,value:this.state.lcs},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Sold"},"Sold"),r.a.createElement("option",{value:"Active"},"Active"),r.a.createElement("option",{value:"Terminated"},"Terminated"),r.a.createElement("option",{value:"hardnostart"},"Hardnostart"))),r.a.createElement("div",{class:"customerpage"},r.a.createElement("table",{border:"1",position:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"order number"),r.a.createElement("th",null,"customer"),r.a.createElement("th",null,"Customer status")),this.renderjsondata()))))}}]),t}(n.Component);var g=function(){return r.a.createElement("div",{class:"rightsidenav"},r.a.createElement("div",{class:"temphomediv",position:"relative"},r.a.createElement(u.b,null,r.a.createElement("h5",{class:"temp",align:"center"}," Temp")),r.a.createElement("hr",null)),r.a.createElement("div",{class:"abcd"},r.a.createElement(u.b,null,r.a.createElement("h5",{align:"center"}," Temp_2"))),r.a.createElement("hr",null),r.a.createElement("div",{class:"abc"},r.a.createElement(u.b,{to:"/Json_data1"},r.a.createElement("h5",{align:"center"},"Json_data1"))),r.a.createElement("hr",null),r.a.createElement("div",{class:"tempstateinediv"},r.a.createElement(u.b,{to:"/Stateinforeact"},r.a.createElement("h5",{align:"center"},"State in react"))))},y=a(16),k=a.n(y),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(g,null))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"hello RedDux ! we are here to Learn the Redux"))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"this is a dashborad ! we are here to Learn the Redux"))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).display_com1_pros=function(){a.props.click_comp1()},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/Component_1",onClick:this.display_com1_pros},"Component1"),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/Component_2",onClick:this.display_com2_pros},"Component2")))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).click_comp1=function(){a.setState({component2_variable:"test"})},a.state={component1_variable:" i belongs to component 1 , component 1 is my home",component2_variable:" i belongs to component 2 , component 2 is my home"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:k.a,id:"bg"}),r.a.createElement(u.a,null,r.a.createElement("switch",null,r.a.createElement(m.a,{path:"/",exact:!0,component:w}),r.a.createElement(m.a,{path:"/component_1",component:d,component2_variable:this.component2_variable}),r.a.createElement(m.a,{path:"/component_2",component:E}),r.a.createElement(m.a,{path:"/Bootstrap_react",component:p}),r.a.createElement(m.a,{path:"/Redux_Info",component:h}),r.a.createElement(m.a,{path:"/Material_UI",component:C}),r.a.createElement(m.a,{path:"/Temp_Dashboard",component:S}),r.a.createElement(m.a,{path:"/Json_data1",component:_}),r.a.createElement(m.a,{path:"/Stateinforeact",component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(26);Object(A.render)(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,1,2]]]);
//# sourceMappingURL=main.f951d180.chunk.js.map