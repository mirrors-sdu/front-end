(this.webpackJsonplist=this.webpackJsonplist||[]).push([[6],{331:function(t,n,e){"use strict";e.r(n);e(0);var c=e(408),a=e.p+"static/media/docHome.5c39a6fa.md",r=e(2);n.default=function(){return Object(r.jsx)(c.a,{doc:a})}},408:function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var c=e(56),a=e(57),r=e(59),s=e(58),i=e(0),o=e.n(i),u=e(418),l=e.n(u),f=e(422),d=e.n(f),h=e(918),p=e(917),j=e(425),b=e.n(j),v=(e(412),e(2)),g={code:function(t){var n=t.language,e=t.value;return Object(v.jsx)(h.a,{style:p.a,language:n,children:e})}},m=b()({isValidNode:function(t){return"script"!==t.type},processingInstructions:[]}),O=function(t){Object(r.a)(e,t);var n=Object(s.a)(e);function e(t){var a;return Object(c.a)(this,e),(a=n.call(this,t)).state={text:""},a}return Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.doc).then((function(t){return t.text()})).then((function(n){t.setState({text:n})})).catch((function(t){console.log("fetch ERROR",t)}))}},{key:"render",value:function(){return Object(v.jsx)(d.a,{className:"doc",plugins:[l.a],renderers:g,htmlParser:m,allowDangerousHtml:!0,children:this.state.text})}}]),e}(o.a.Component)},412:function(t,n,e){}}]);
//# sourceMappingURL=6.9f45f4ed.chunk.js.map