"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1007],{15680:(e,i,a)=>{a.d(i,{xA:()=>p,yg:()=>u});var n=a(96540);function l(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function t(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?t(Object(a),!0).forEach((function(i){l(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}function r(e,i){if(null==e)return{};var a,n,l=function(e,i){if(null==e)return{};var a,n,l={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],i.indexOf(a)>=0||(l[a]=e[a]);return l}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),d=function(e){var i=n.useContext(m),a=i;return e&&(a="function"==typeof e?e(i):o(o({},i),e)),a},p=function(e){var i=d(e.components);return n.createElement(m.Provider,{value:i},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},y=n.forwardRef((function(e,i){var a=e.components,l=e.mdxType,t=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=d(a),y=l,u=s["".concat(m,".").concat(y)]||s[y]||g[y]||t;return a?n.createElement(u,o(o({ref:i},p),{},{components:a})):n.createElement(u,o({ref:i},p))}));function u(e,i){var a=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var t=a.length,o=new Array(t);o[0]=y;var r={};for(var m in i)hasOwnProperty.call(i,m)&&(r[m]=i[m]);r.originalType=e,r[s]="string"==typeof e?e:l,o[1]=r;for(var d=2;d<t;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},83175:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var n=a(58168),l=(a(96540),a(15680));const t={id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},o=void 0,r={unversionedId:"api/LayoutAnimations/entryAnimations",id:"version-2.x/api/LayoutAnimations/entryAnimations",title:"Entering Animations",description:"Layout Animations are available since v2.3.0",source:"@site/versioned_docs/version-2.x/api/LayoutAnimations/EntryAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/entryAnimations",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/entryAnimations",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/LayoutAnimations/EntryAnimations.md",tags:[],version:"2.x",frontMatter:{id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},sidebar:"docs",previous:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/customAnimations"},next:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/exitAnimations"}},m={},d=[{value:"How to use predefined entering animation?",id:"how-to-use-predefined-entering-animation",level:2},{value:"1. Import chosen animation",id:"1-import-chosen-animation",level:3},{value:"2. Choose Animated Component which entering you want to animate",id:"2-choose-animated-component-which-entering-you-want-to-animate",level:3},{value:"3. Customize the animation",id:"3-customize-the-animation",level:3},{value:"Predefined Animations",id:"predefined-animations",level:2},{value:"Fade",id:"fade",level:3},{value:"Animations",id:"animations",level:4},{value:"Modifiers",id:"modifiers",level:4},{value:"Example",id:"example",level:4},{value:"Bounce",id:"bounce",level:3},{value:"Animations",id:"animations-1",level:4},{value:"Modifiers",id:"modifiers-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Flip",id:"flip",level:3},{value:"Animations",id:"animations-2",level:4},{value:"Modifiers",id:"modifiers-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Stretch",id:"stretch",level:3},{value:"Animations",id:"animations-3",level:4},{value:"Modifiers",id:"modifiers-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Zoom",id:"zoom",level:3},{value:"Animations",id:"animations-4",level:4},{value:"Modifiers",id:"modifiers-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Slide",id:"slide",level:3},{value:"Animations",id:"animations-5",level:4},{value:"Modifiers",id:"modifiers-5",level:4},{value:"Example",id:"example-5",level:4},{value:"LightSpeed",id:"lightspeed",level:3},{value:"Animations",id:"animations-6",level:4},{value:"Modifiers",id:"modifiers-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Pinwheel",id:"pinwheel",level:3},{value:"Animations",id:"animations-7",level:4},{value:"Modifiers",id:"modifiers-7",level:4},{value:"Example",id:"example-7",level:4},{value:"Roll",id:"roll",level:3},{value:"Animations",id:"animations-8",level:4},{value:"Modifiers",id:"modifiers-8",level:4},{value:"Example",id:"example-8",level:4},{value:"Rotate",id:"rotate",level:3},{value:"Animations",id:"animations-9",level:4},{value:"Modifiers",id:"modifiers-9",level:4},{value:"Example",id:"example-9",level:4}],p={toc:d},s="wrapper";function g(e){let{components:i,...a}=e;return(0,l.yg)(s,(0,n.A)({},p,a,{components:i,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Layout Animations are available since v2.3.0")),(0,l.yg)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view."),(0,l.yg)("p",null,"We provide an easy API that allows you to code almost any animation you want. Because some of the animations are more frequently used than the others we coded them for you and provided in an accessible way. Below you can find an instruction step by step explaining how to use them. A little further down you will find a detailed description of all the predefined entering animations."),(0,l.yg)("p",null,"If you want to create more complex animation you can use ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.x/api/LayoutAnimations/keyframeAnimations"},"Keyframes"),"."),(0,l.yg)("h2",{id:"how-to-use-predefined-entering-animation"},"How to use predefined entering animation?"),(0,l.yg)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"// AnimationName is just an example and should be replaced by real animation. For Instance FadeIn\nimport { AnimationName } from 'react-native-reanimated';\n")),(0,l.yg)("h3",{id:"2-choose-animated-component-which-entering-you-want-to-animate"},"2. Choose Animated Component which entering you want to animate"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"// AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n<AnimatedComponent entering={AnimationName} >\n")),(0,l.yg)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),(0,l.yg)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particular animation type."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"<AnimatedComponent entering={AnimationName.duration(3000).otherModifier()} >\n")),(0,l.yg)("h2",{id:"predefined-animations"},"Predefined Animations"),(0,l.yg)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),(0,l.yg)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request."),(0,l.yg)("h3",{id:"fade"},"Fade"),(0,l.yg)("p",null,"Simple animation based on changing of opacity."),(0,l.yg)("h4",{id:"animations"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"FadeIn"),(0,l.yg)("li",{parentName:"ul"},"FadeInRight"),(0,l.yg)("li",{parentName:"ul"},"FadeInLeft"),(0,l.yg)("li",{parentName:"ul"},"FadeInUp"),(0,l.yg)("li",{parentName:"ul"},"FadeInDown")),(0,l.yg)("h4",{id:"modifiers"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/36106620/120317260-b3ccbe00-c2de-11eb-8434-8998b12dfa3c.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"bounce"},"Bounce"),(0,l.yg)("p",null,"Animation based on smoothly shaking of component."),(0,l.yg)("h4",{id:"animations-1"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"BounceIn"),(0,l.yg)("li",{parentName:"ul"},"BounceInRight"),(0,l.yg)("li",{parentName:"ul"},"BounceInLeft"),(0,l.yg)("li",{parentName:"ul"},"BounceInUp"),(0,l.yg)("li",{parentName:"ul"},"BounceInDown")),(0,l.yg)("h4",{id:"modifiers-1"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-1"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/36106620/120317341-cc3cd880-c2de-11eb-9d72-4065c740667e.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"flip"},"Flip"),(0,l.yg)("p",null,"3D animation based on flipping object over specific axis."),(0,l.yg)("h4",{id:"animations-2"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"FlipInYRight"),(0,l.yg)("li",{parentName:"ul"},"FlipInYLeft"),(0,l.yg)("li",{parentName:"ul"},"FlipInXUp"),(0,l.yg)("li",{parentName:"ul"},"FlipInXDown"),(0,l.yg)("li",{parentName:"ul"},"FlipInEasyX"),(0,l.yg)("li",{parentName:"ul"},"FlipInEasyY")),(0,l.yg)("h4",{id:"modifiers-2"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-2"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/36106620/120317406-deb71200-c2de-11eb-8dee-c658a4e1e47a.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"stretch"},"Stretch"),(0,l.yg)("p",null,"Animation based on changing width or height of object."),(0,l.yg)("h4",{id:"animations-3"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"StretchInX"),(0,l.yg)("li",{parentName:"ul"},"StretchInY")),(0,l.yg)("h4",{id:"modifiers-3"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-3"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/36106620/120317473-f42c3c00-c2de-11eb-8772-b366c2ddde7f.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"zoom"},"Zoom"),(0,l.yg)("p",null,"Animation based on changing scale of object."),(0,l.yg)("h4",{id:"animations-4"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"ZoomIn"),(0,l.yg)("li",{parentName:"ul"},"ZoomInRotate"),(0,l.yg)("li",{parentName:"ul"},"ZoomInRight"),(0,l.yg)("li",{parentName:"ul"},"ZoomInLeft"),(0,l.yg)("li",{parentName:"ul"},"ZoomInUp"),(0,l.yg)("li",{parentName:"ul"},"ZoomInDown"),(0,l.yg)("li",{parentName:"ul"},"ZoomInEasyUp"),(0,l.yg)("li",{parentName:"ul"},"ZoomInEasyDown")),(0,l.yg)("h4",{id:"modifiers-4"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-4"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/36106620/120317529-04441b80-c2df-11eb-9627-c56e986e44c1.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"slide"},"Slide"),(0,l.yg)("p",null,"Animation based on horizontal or vertical moving of object."),(0,l.yg)("h4",{id:"animations-5"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"SlideInRight"),(0,l.yg)("li",{parentName:"ul"},"SlideInLeft"),(0,l.yg)("li",{parentName:"ul"},"SlideInUp"),(0,l.yg)("li",{parentName:"ul"},"SlideInDown")),(0,l.yg)("h4",{id:"modifiers-5"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-5"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/36106620/120317587-1a51dc00-c2df-11eb-937a-c53a237afca2.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"lightspeed"},"LightSpeed"),(0,l.yg)("p",null,"Animation based on horizontal moving of object with changing of opacity and skew."),(0,l.yg)("h4",{id:"animations-6"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"LightSpeedInRight"),(0,l.yg)("li",{parentName:"ul"},"LightSpeedInLeft")),(0,l.yg)("h4",{id:"modifiers-6"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-6"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/48885911/125057634-c094bc80-e0a9-11eb-98d9-0c8eed1e63b0.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"pinwheel"},"Pinwheel"),(0,l.yg)("p",null,"Animation based on rotation with scale and opacity change."),(0,l.yg)("h4",{id:"animations-7"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PinwheelIn")),(0,l.yg)("h4",{id:"modifiers-7"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-7"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/48885911/125058126-40228b80-e0aa-11eb-8396-7f373af7fcbe.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"roll"},"Roll"),(0,l.yg)("p",null,"Animation based on horizontal moving of object with rotation."),(0,l.yg)("h4",{id:"animations-8"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"RollInLeft"),(0,l.yg)("li",{parentName:"ul"},"RollInRight")),(0,l.yg)("h4",{id:"modifiers-8"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-8"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/48885911/125058243-60524a80-e0aa-11eb-94c8-79728688e2f3.mov",controls:"controls",muted:"muted"}),(0,l.yg)("h3",{id:"rotate"},"Rotate"),(0,l.yg)("p",null,"Animation based on rotation of object."),(0,l.yg)("h4",{id:"animations-9"},"Animations"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"RotateInDownLeft"),(0,l.yg)("li",{parentName:"ul"},"RotateInDownRight"),(0,l.yg)("li",{parentName:"ul"},"RotateInUpLeft"),(0,l.yg)("li",{parentName:"ul"},"RotateInUpRight")),(0,l.yg)("h4",{id:"modifiers-9"},"Modifiers"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,l.yg)("inlineCode",{parentName:"li"},"withTiming")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,l.yg)("h4",{id:"example-9"},"Example"),(0,l.yg)("video",{src:"https://user-images.githubusercontent.com/48885911/125058359-79f39200-e0aa-11eb-8c78-c31e461e3748.mov",controls:"controls",muted:"muted"}))}g.isMDXComponent=!0}}]);