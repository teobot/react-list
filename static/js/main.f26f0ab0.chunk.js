(this.webpackJsonplist=this.webpackJsonplist||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(7),c=n.n(l),r=(n(24),n(12)),s=n(13),m=n(16),u=n(18),o=n(14),p=n(17),d=n(10),h=n(15);n(25);function E(e){return i.a.createElement("div",{className:"list-container"},i.a.createElement("div",null,e.children))}function f(e){return i.a.createElement("div",{className:"list-item"},i.a.createElement(h.a,{variant:"info"},e.name))}var v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState({input_item:e.target.value})},a.handleSubmit=function(e){a.state.listItems.push(a.state.input_item),a.setState({input_item:""})},a.state={listItems:[],input_item:""},a}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(E,null,i.a.createElement("div",{className:"container item-container"},this.state.listItems.map((function(e){return i.a.createElement(f,{name:e})}))),i.a.createElement("div",{className:"input-form"},i.a.createElement(d.a,{className:"mb-3"},i.a.createElement(p.a,{placeholder:"Add new list item",value:this.state.input_item,onChange:this.handleInputChange}),i.a.createElement(d.a.Append,null,i.a.createElement(o.a,{onClick:this.handleSubmit},"Submit"))))))}}]),n}(a.Component);n(31);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f26f0ab0.chunk.js.map