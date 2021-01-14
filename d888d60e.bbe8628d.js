(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(121)),i=r(123),c={id:"index-develop",title:"Develop",sidebar_label:"Develop",slug:"/develop/"},l={unversionedId:"develop/index-develop",id:"develop/index-develop",isDocsHomePage:!1,title:"Develop",description:"Build applications with Redis and your favorite programing language",source:"@site/docs/develop/index-develop.mdx",slug:"/develop/",permalink:"/develop/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/index-develop.mdx",version:"current",sidebar_label:"Develop"},u=[{value:"Build applications with Redis and your favorite programing language",id:"build-applications-with-redis-and-your-favorite-programing-language",children:[]}],p={toc:u};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"build-applications-with-redis-and-your-favorite-programing-language"},"Build applications with Redis and your favorite programing language"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:" col col--2 text--center"},Object(a.b)("a",{href:Object(i.a)("/develop/java")},Object(a.b)("img",{src:Object(i.a)("/img/logos/java.png")}),Object(a.b)("h4",null,"Java"))),Object(a.b)("div",{className:" col col--2 text--center"},Object(a.b)("a",{href:Object(i.a)("/develop/python")},Object(a.b)("img",{src:Object(i.a)("/img/logos/python.png")}),Object(a.b)("h4",null,"Python"))),Object(a.b)("div",{className:" col col--2 text--center"},Object(a.b)("a",{href:Object(i.a)("/develop/node")},Object(a.b)("img",{src:Object(i.a)("/img/logos/nodejs.png")}),Object(a.b)("h4",null,"Node.js"))),Object(a.b)("div",{className:" col col--2 text--center"},Object(a.b)("a",{href:Object(i.a)("/develop/golang")},Object(a.b)("img",{src:Object(i.a)("/img/logos/golang.png")}),Object(a.b)("h4",null,"Go")))))}d.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},123:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(22),o=r(126);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+p:p}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},126:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);