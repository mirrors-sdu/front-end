(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{5417:function(e,t,o){var a=o(111),r=o(3157),n=o(5112)("species");e.exports=function(e,t){var o;return r(e)&&("function"!=typeof(o=e.constructor)||o!==Array&&!r(o.prototype)?a(o)&&null===(o=o[n])&&(o=void 0):o=void 0),new(void 0===o?Array:o)(0===t?0:t)}},6790:function(e,t,o){"use strict";var a=o(3157),r=o(7466),n=o(9974),i=function(e,t,o,l,c,s,d,p){for(var u,h=c,m=0,f=!!d&&n(d,p,3);m<l;){if(m in o){if(u=f?f(o[m],m,t):o[m],s>0&&a(u))h=i(e,t,u,r(u.length),h,s-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[h]=u}h++}m++}return h};e.exports=i},9974:function(e,t,o){var a=o(3099);e.exports=function(e,t,o){if(a(e),void 0===t)return e;switch(o){case 0:return function(){return e.call(t)};case 1:return function(o){return e.call(t,o)};case 2:return function(o,a){return e.call(t,o,a)};case 3:return function(o,a,r){return e.call(t,o,a,r)}}return function(){return e.apply(t,arguments)}}},3157:function(e,t,o){var a=o(4326);e.exports=Array.isArray||function(e){return"Array"==a(e)}},4944:function(e,t,o){"use strict";var a=o(2109),r=o(6790),n=o(7908),i=o(7466),l=o(9958),c=o(5417);a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=n(this),o=i(t.length),a=c(t,0);return a.length=r(a,t,t,o,0,void 0===e?1:l(e)),a}})},1340:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return k}});var a=o(7294);o(6039),(0,o(920).Z)((function(e){return{Layout:{marginTop:100},Div:{display:"flex"}}}));var r=o(9202),n=o(3552),i=o(6187),l=o(1253),c=o(2122),s=o(5505),d=o(4621),p=o(7595),u=o(2486),h=o(1664),m=a.forwardRef((function(e,t){var o=e.children,r=e.classes,n=e.className,i=e.color,d=void 0===i?"default":i,p=e.component,m=void 0===p?"button":p,f=e.disabled,b=void 0!==f&&f,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,x=void 0!==y&&y,S=e.endIcon,C=e.focusVisibleClassName,w=e.fullWidth,k=void 0!==w&&w,E=e.size,z=void 0===E?"medium":E,Z=e.startIcon,L=e.type,N=void 0===L?"button":L,R=e.variant,T=void 0===R?"text":R,I=(0,l.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),$=Z&&a.createElement("span",{className:(0,s.Z)(r.startIcon,r["iconSize".concat((0,h.Z)(z))])},Z),O=S&&a.createElement("span",{className:(0,s.Z)(r.endIcon,r["iconSize".concat((0,h.Z)(z))])},S);return a.createElement(u.Z,(0,c.Z)({className:(0,s.Z)(r.root,r[T],n,"inherit"===d?r.colorInherit:"default"!==d&&r["".concat(T).concat((0,h.Z)(d))],"medium"!==z&&[r["".concat(T,"Size").concat((0,h.Z)(z))],r["size".concat((0,h.Z)(z))]],g&&r.disableElevation,b&&r.disabled,k&&r.fullWidth),component:m,disabled:b,focusRipple:!x,focusVisibleClassName:(0,s.Z)(r.focusVisible,C),ref:t,type:N},I),a.createElement("span",{className:r.label},$,o,O))})),f=(0,d.Z)((function(e){return{root:(0,c.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,p.U1)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,p.U1)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,p.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,p.U1)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,p.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(m),b=function(e){function t(t){return e.call(this,t)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"blog-nav-buttons",style:{display:"flex",justifyContent:"center"}},a.createElement("div",null,this.props.previous&&a.createElement(f,{href:"/docs"+this.props.previous.fields.slug,variant:"contained",color:"primary"},"← ",this.props.previous.frontmatter.title)),a.createElement("div",null,this.props.next&&a.createElement(f,{href:"/docs"+this.props.next.fields.slug,variant:"contained",color:"primary"},this.props.next.frontmatter.title," →")))},t}(a.Component),v=function(e){function t(t){return e.call(this,t)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.article;return a.createElement("div",{className:"blog-body-"+this.props.table},a.createElement("h1",{itemProp:"headline"},e.frontmatter.title),a.createElement("p",null,e.frontmatter.date),a.createElement("br",null),a.createElement(i.Z,{className:"blog-post",dangerouslySetInnerHTML:{__html:e.html},itemProp:"articleBody"}),a.createElement("hr",null))},t}(a.Component),g=function(e){function t(t){return e.call(this,t)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("aside",null,a.createElement("div",{className:"css-aside-body"},a.createElement("h4",{className:"css-aside-top"},"目录"),a.createElement("div",{className:"css-aside",dangerouslySetInnerHTML:{__html:this.props.table}})))},t}(a.Component),y=o(8747),x=o.n(y);function S(e){if(null==e)return{x:0,y:0};for(var t=e,o=0;null!=t;)o+=t.offsetLeft,t=t.offsetParent;var a=0;for(t=e;null!=t;)a+=t.offsetTop,t=t.offsetParent;return{x:o,y:a}}function C(e,t){if(null==t)return 2147483647;var o=S(t);return o.y<=e?e-o.y:2147483647}function w(e){x()((function(){x()(".css-aside").find("ul").each((function(){this.classList.add("ul-hide")})),x()(".css-aside").children("ul").each((function(){this.classList.remove("ul-hide")}));for(var e=x()(".css-aside").find("a"),t=0;t<e.length;t++)e[t].classList.remove("a-scroll");var o=Array();if(0!=e.length){for(var a=0;a<e.length;a++){var r=x()(document.body).find("a[href='"+e[a].getAttribute("href")+"'].anchor");1!=r.length&&window.alert("wrong!"),o.push(r[0])}var n=function(e){var t=document.documentElement.scrollTop;if(0!=e.length){for(var o=0,a=1,r=1;r<e.length;r++){var n=C(t,e[r]);2147483647!=n&&(a=0),n<=C(t,e[o])&&(o=r)}if(a)for(var i=1;i<e.length;i++)S(e[i]).y<=S(e[o]).y&&(o=i);return o}}(o);e[n].classList.add("a-scroll");for(var i=x()(e[n]).parents("ul"),l=0;l<i.length;l++)i[l].classList.remove("ul-hide")}}))}var k=function(e){var t=e.data,o=t.markdownRemark,n=t.previous,i=t.next;return console.log(o.tableOfContents),x()((function(){x()(".css-aside").find("ul").each((function(){this.classList.add("ul-hide")})),x()(".css-aside").children("ul").each((function(){this.classList.remove("ul-hide")}))})),window.onscroll=w,a.createElement(r.Z,null,a.createElement("div",{className:""!==o.tableOfContents?"div-app":"div-app-without-toc"},a.createElement("div",null,""!==o.tableOfContents?a.createElement(v,{article:o,previous:n,next:i,table:"with-table"}):a.createElement(v,{article:o,previous:n,next:i,table:"without-table"}),a.createElement(b,{previous:n,next:i})),""!==o.tableOfContents&&a.createElement(g,{table:o.tableOfContents})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3b79a64f650fa706c7fc.js.map