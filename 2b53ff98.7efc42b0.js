(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.a.createElement(f,s(s({ref:t},u),{},{components:r})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(113)),o={id:"import-data",title:"Online Database Migration from Amazon ElastiCache to Redis Enterprise Cloud Made Simple",sidebar_label:"Import Data",slug:"/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud"},s={unversionedId:"guides/import/import-data",id:"guides/import/import-data",isDocsHomePage:!1,title:"Online Database Migration from Amazon ElastiCache to Redis Enterprise Cloud Made Simple",description:"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention.",source:"@site/docs/guides/import/database-migration-aws-elasticache-redis-enterprise-cloud.mdx",slug:"/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud",permalink:"/docs/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/website/docs/guides/import/database-migration-aws-elasticache-redis-enterprise-cloud.mdx",version:"current",sidebar_label:"Import Data"},c=[{value:"Introducing RIOT",id:"introducing-riot",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention. "),Object(i.b)("p",null,"If you want to migrate your data from Amazon ElastiCache to Redis Enterprise Cloud, for example, the usual process is to back up your ElastiCache data to an Amazon S3 bucket and then import your data using the Redis Enterprise Cloud UI. This process can require painful downtime and could result in data loss. Other available techniques include creating point-in-time snapshots of the source Redis server and applying the changes to the destination servers to keep both the servers in sync. That might sound like a good approach, but it can be challenging when you have to maintain dozens of scripts to implement the migration strategy. "),Object(i.b)("p",null,"So we\u2019ve come up with a different approach:"),Object(i.b)("h3",{id:"introducing-riot"},"Introducing RIOT"))}l.isMDXComponent=!0}}]);