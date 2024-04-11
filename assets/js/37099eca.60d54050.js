"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6198],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),p=i,f=l["".concat(m,".").concat(p)]||l[p]||u[p]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));const a={id:"migration-from-2.x",title:"Migrating from Reanimated 2.x to 3.x",sidebar_label:"Migration from 2.x"},o=void 0,c={unversionedId:"guides/migration-from-2.x",id:"guides/migration-from-2.x",title:"Migrating from Reanimated 2.x to 3.x",description:"Reanimated 3.x doesn't introduce any breaking changes between 2.x and 3.x in terms of the API. All the code you've written in Reanimated v2 API works in 3.x without any changes. However, Reanimated 3.x drops the Reanimated v1 API entirely. For the migration guide between 1.x and 2.x versions please consult Migration from 1.x to 2.x.",source:"@site/docs/guides/migration-from-2.x.md",sourceDirName:"guides",slug:"/guides/migration-from-2.x",permalink:"/react-native-reanimated/docs/guides/migration-from-2.x",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/guides/migration-from-2.x.md",tags:[],version:"current",frontMatter:{id:"migration-from-2.x",title:"Migrating from Reanimated 2.x to 3.x",sidebar_label:"Migration from 2.x"},sidebar:"tutorialSidebar",previous:{title:"Migration from 1.x",permalink:"/react-native-reanimated/docs/guides/migration-from-1.x"},next:{title:"Options for Reanimated Babel Plugin",permalink:"/react-native-reanimated/docs/guides/plugin-options"}},m={},s=[],d={toc:s},l="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(l,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Reanimated 3.x doesn't introduce any breaking changes between 2.x and 3.x in terms of the API. All the code you've written in Reanimated v2 API works in 3.x without any changes. However, Reanimated 3.x drops the Reanimated v1 API entirely. For the migration guide between 1.x and 2.x versions please consult ",(0,i.yg)("a",{parentName:"p",href:"/react-native-reanimated/docs/guides/migration-from-1.x"},"Migration from 1.x to 2.x"),"."))}u.isMDXComponent=!0}}]);