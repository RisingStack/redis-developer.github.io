(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},109:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(22),o=n(111);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},111:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},114:function(e,t,n){"use strict";var r=n(0),o=n(115);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},134:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(114),c=n(106),i=n(62),s=n.n(i);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:f,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:m}=Object(a.a)(),[v,y]=Object(r.useState)(i),O=r.Children.toArray(e.children);if(null!=f){const e=b[f];null!=e&&e!==v&&d.some((t=>t.value===e))&&y(e)}const j=e=>{y(e),null!=f&&m(f,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},135:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(105)),c=(n(134),n(135),n(109),{id:"index-node",title:"Node.js and Redis",sidebar_label:"Node.js",slug:"/develop/node/"}),i={unversionedId:"develop/node/index-node",id:"develop/node/index-node",isDocsHomePage:!1,title:"Node.js and Redis",source:"@site/docs/develop/node/index-node.mdx",slug:"/develop/node/",permalink:"/redis-developer/docs/develop/node/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/develop/node/index-node.mdx",version:"current",sidebar_label:"Node.js",sidebar:"mainSideBar",previous:{title:"Java and Redis",permalink:"/redis-developer/docs/develop/java/"},next:{title:"Powered by MDX",permalink:"/redis-developer/docs/mdx"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}))}l.isMDXComponent=!0}}]);