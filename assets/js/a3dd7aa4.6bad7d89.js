"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7856],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={},c=void 0,i={unversionedId:"nodes/proc",id:"version-1.x/nodes/proc",title:"proc",description:"proc",source:"@site/versioned_docs/version-1.x/nodes/proc.md",sourceDirName:"nodes",slug:"/nodes/proc",permalink:"/react-native-reanimated/docs/1.x/nodes/proc",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-1.x/nodes/proc.md",tags:[],version:"1.x",frontMatter:{},sidebar:"version-1.x/docs",previous:{title:"onChange",permalink:"/react-native-reanimated/docs/1.x/nodes/onChange"},next:{title:"set",permalink:"/react-native-reanimated/docs/1.x/nodes/set"}},s={},l=[{value:"<code>proc</code>",id:"proc",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"proc"},(0,o.yg)("inlineCode",{parentName:"h2"},"proc")),(0,o.yg)("p",null,"Returns a callable function node that can be used to define expressions that can be called from other nodes."),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// Global constant\nconst myProc = proc((a, b) => multiply(a, b));\n\n// In your component\nconst style = { width: myProc(10, 10) };\n")),(0,o.yg)("p",null,"A proc node should be declared as a global constant in your code and not recreated from inside components."),(0,o.yg)("p",null,"It is not possible to reference nodes that are not passed as parameters."))}u.isMDXComponent=!0}}]);