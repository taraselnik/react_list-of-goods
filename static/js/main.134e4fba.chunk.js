(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),i=s(5),c=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=s.n(h),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortByAlpha=function(){t.setState({sortType:n.ALPABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.sortNone=function(){t.setState({sortType:n.NONE,isReversed:!1})},t.toReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(c.a)(s,[{key:"render",value:function(){var t=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return o.sort((function(t,e){switch(s){case n.ALPABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;case n.NONE:default:return 0}})),r&&o.sort((function(){return-1})),o}(N,this.state);return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":this.state.sortType!==n.ALPABET}),onClick:this.sortByAlpha,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":this.state.sortType!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!this.state.isReversed}),onClick:this.toReverse,children:"Reverse"}),(this.state.sortType!==n.NONE||this.state.isReversed)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.sortNone,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:t.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(b.a.Component);o.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.134e4fba.chunk.js.map