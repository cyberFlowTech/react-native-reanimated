"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8589],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>h,default:()=>N,frontMatter:()=>v,metadata:()=>b,toc:()=>C});var a=n(58168),o=n(96540),r=n(15680),i=n(9176),l=n(80101),s=n(91691),c=n(72089),m=n(50014),d=n(27979);const p=o.forwardRef(((e,t)=>o.createElement(i.A,(0,a.A)({ref:t},e)))),u=c.b(p);function g(){const e=(0,m.U)(100);return o.createElement(i.A,{style:y.container},o.createElement(u,{style:{...y.box,width:e}}),o.createElement(l.A,{onPress:()=>{e.value=(0,d.e)(e.value+50)},title:"Click me"}))}const y=s.A.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64}}),f="import React from 'react';\nimport { StyleSheet, View, Button } from 'react-native';\nimport Animated, { useSharedValue, withSpring } from 'react-native-reanimated';\n\nconst MyView = React.forwardRef((props, ref) => {\n  // some additional logic\n  return <View ref={ref} {...props} />;\n});\n\n// highlight-next-line\nconst MyAnimatedView = Animated.createAnimatedComponent(MyView);\n\nexport default function App() {\n  const width = useSharedValue(100);\n\n  const handlePress = () => {\n    width.value = withSpring(width.value + 50);\n  };\n\n  return (\n    <View style={styles.container}>\n      <MyAnimatedView style={{ ...styles.box, width }} />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n  },\n});\n",v={sidebar_position:6},h="createAnimatedComponent",b={unversionedId:"core/createAnimatedComponent",id:"core/createAnimatedComponent",title:"createAnimatedComponent",description:"createAnimatedComponent lets you create an Animated version of any React Native component. Wrapping a component with createAnimatedComponent allows Reanimated to animate any prop or style associated with that component.",source:"@site/docs/core/createAnimatedComponent.mdx",sourceDirName:"core",slug:"/core/createAnimatedComponent",permalink:"/react-native-reanimated/docs/core/createAnimatedComponent",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/createAnimatedComponent.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/core/useDerivedValue"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/core/cancelAnimation"}},A={},C=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>component</code>",id:"component",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],x=(w="InteractiveExample",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var w;const P={toc:C},T="wrapper";function N(e){let{components:t,...n}=e;return(0,r.yg)(T,(0,a.A)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"createanimatedcomponent"},"createAnimatedComponent"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"createAnimatedComponent")," lets you create an Animated version of any React Native component. Wrapping a component with ",(0,r.yg)("inlineCode",{parentName:"p"},"createAnimatedComponent")," allows Reanimated to animate any prop or style associated with that component."),(0,r.yg)("p",null,"Reanimated comes with five built-in Animated components:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Animated.FlatList")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Animated.Image")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Animated.View")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Animated.ScrollView")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Animated.Text"))),(0,r.yg)("p",null,"Rest of the components you might want to animate in React Native have to be wrapped with a ",(0,r.yg)("inlineCode",{parentName:"p"},"createAnimatedComponent")," function."),(0,r.yg)("h2",{id:"reference"},"Reference"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"import Animated from 'react-native-reanimated';\nimport { TextInput } from 'react-native';\n\nconst AnimatedTextInput = Animated.createAnimatedComponent(TextInput);\n")),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Type definitions"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"function createAnimatedComponent<P extends object>(\n  component: ComponentClass<P>\n): ComponentClass<AnimateProps<P>>;\n\nfunction createAnimatedComponent<P extends object>(\n  component: FunctionComponent<P>\n): FunctionComponent<AnimateProps<P>>;\n"))),(0,r.yg)("h3",{id:"arguments"},"Arguments"),(0,r.yg)("h4",{id:"component"},(0,r.yg)("inlineCode",{parentName:"h4"},"component")),(0,r.yg)("p",null,"The component you want to make animatable. Function components have to be wrapped with ",(0,r.yg)("inlineCode",{parentName:"p"},"React.forwardRef()"),"."),(0,r.yg)("h3",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"createAnimatedComponent")," returns a component that Reanimated is capable of animating."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(x,{src:f,component:(0,r.yg)(g,{mdxType:"CreateAnimatedComponent"}),showCode:!0,mdxType:"InteractiveExample"}),(0,r.yg)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,r.yg)("div",{className:"platform-compatibility"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Android"),(0,r.yg)("th",{parentName:"tr",align:null},"iOS"),(0,r.yg)("th",{parentName:"tr",align:null},"Web"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"))))))}N.isMDXComponent=!0},27979:(e,t,n)=>{n.d(t,{e:()=>r});var a=n(49253);function o(e,t,n){if(t.skipAnimation)return 0;const{stiffness:a,dampingRatio:o,restSpeedThreshold:r,duration:i}=t;return function(e){let{min:t,max:n,func:a,maxIterations:o=20}=e,r=o,i=(n+t)/2;for(;Math.abs(a(i))>5e-5&&r>0;)r-=1,a(i)<0?t=i:n=i,i=(t+n)/2;return i}({min:0,max:100,func:t=>{const l=(t*n*n+a*e*e)/(Math.exp(1-.5*o)*a);return-2*t/(2*o*Math.sqrt(a*t))*1e3*Math.log(.01*r/l)-i}})}const r=(e,t,n)=>(0,a.yK)(e,(()=>{const r={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0,clamp:void 0},...t,useDuration:!!(null!=t&&t.duration||null!=t&&t.dampingRatio),skipAnimation:!1};return r.skipAnimation=!function(e){var t,n;let a="";return["stiffness","damping","dampingRatio","restDisplacementThreshold","restSpeedThreshold","mass"].forEach((t=>{const n=e[t];n<=0&&(a+=`, ${t} must be grater than zero but got ${n}`)})),e.duration<0&&(a+=`, duration can't be negative, got ${e.duration}`),null!==(t=e.clamp)&&void 0!==t&&t.min&&null!==(n=e.clamp)&&void 0!==n&&n.max&&e.clamp.min>e.clamp.max&&(a+=`, clamp.min should be lower than clamp.max, got clamp: {min: ${e.clamp.min}, max: ${e.clamp.max}} `),""!==a&&console.warn("[Reanimated] Invalid spring config"+a),""===a}(r),0===r.duration&&(r.skipAnimation=!0),{onFrame:function(e,t){const{toValue:n,startTimestamp:a,current:o}=e,i=t-a;if(r.useDuration&&i>=r.duration)return e.current=n,e.lastTimestamp=0,!0;if(r.skipAnimation)return e.current=n,e.lastTimestamp=0,!0;const{lastTimestamp:l,velocity:s}=e,c=Math.min(t-l,64);e.lastTimestamp=t;const m=c/1e3,d=-s,p=n-o,{zeta:u,omega0:g,omega1:y}=e,{position:f,velocity:v}=u<1?function(e,t){const{toValue:n,current:a,velocity:o}=e,{zeta:r,t:i,omega0:l,omega1:s}=t,c=-o,m=n-a,d=Math.sin(s*i),p=Math.cos(s*i),u=Math.exp(-r*l*i),g=u*(d*((c+r*l*m)/s)+m*p);return{position:n-g,velocity:r*l*g-u*(p*(c+r*l*m)-s*m*d)}}(e,{zeta:u,v0:d,x0:p,omega0:g,omega1:y,t:m}):function(e,t){const{toValue:n}=e,{v0:a,x0:o,omega0:r,t:i}=t,l=Math.exp(-r*i);return{position:n-l*(o+(a+r*o)*i),velocity:l*(a*(i*r-1)+i*o*r*r)}}(e,{v0:d,x0:p,omega0:g,t:m});e.current=f,e.velocity=v;const{isOvershooting:h,isVelocity:b,isDisplacement:A}=function(e,t){const{toValue:n,velocity:a,startValue:o,current:r}=e;return{isOvershooting:!!t.overshootClamping&&(r>n&&o<n||r<n&&o>n),isVelocity:Math.abs(a)<t.restSpeedThreshold,isDisplacement:Math.abs(n-r)<t.restDisplacementThreshold}}(e,r),C=h||b&&A;return!(r.useDuration||!C)&&(e.velocity=0,e.current=n,e.lastTimestamp=0,!0)},onStart:function(e,t,n,a){e.current=t,e.startValue=t;let i=r.mass;const l=function(e,t){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===t.toValue&&(null==e?void 0:e.duration)===t.duration&&(null==e?void 0:e.dampingRatio)===t.dampingRatio}(a,e),s=r.duration,c=l?null==a?void 0:a.startValue:Number(e.toValue)-t;if(e.velocity=a?(l?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+r.velocity)||0:r.velocity||0,l)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(r.useDuration){const t=l?s-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):s;r.duration=t,i=o(c,r,e.velocity)}const{zeta:t,omega0:n,omega1:m}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if(t.skipAnimation)return{zeta:0,omega0:0,omega1:0};if(t.useDuration){const{stiffness:n,dampingRatio:a}=t,o=Math.sqrt(n/e);return{zeta:a,omega0:o,omega1:o*Math.sqrt(1-a**2)}}{const{damping:e,mass:n,stiffness:a}=t,o=e/(2*Math.sqrt(a*n)),r=Math.sqrt(a/n);return{zeta:o,omega0:r,omega1:r*Math.sqrt(1-o**2)}}}(i,r);e.zeta=t,e.omega0=n,e.omega1=m,void 0!==r.clamp&&(e.zeta=function(e,t){const{zeta:n,toValue:a,startValue:o}=e,r=Number(a);if(r===o)return n;const[i,l]=r-o>0?[t.min,t.max]:[t.max,t.min],s=void 0!==l?Math.abs((l-r)/(r-o)):void 0,c=void 0!==i?Math.abs((i-r)/(r-o)):void 0,m=[void 0!==s?Math.abs(Math.log(s)/Math.PI):void 0,void 0!==c?Math.abs(Math.log(c)/(2*Math.PI)):void 0].filter((e=>void 0!==e));return Math.max(...m,n)}(e,r.clamp))}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||n,e.startTimestamp=l&&(null==a?void 0:a.startTimestamp)||n},toValue:e,velocity:r.velocity||0,current:e,startValue:0,callback:n,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.AR)(r.reduceMotion)}}))},80101:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(96540),o=n(91691),r=n(58168),i=n(98587),l=n(11804),s=n(17069),c=n(9176),m=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,o=e.delayPressIn,d=e.delayPressOut,u=e.delayLongPress,g=e.disabled,y=e.focusable,f=e.onLongPress,v=e.onPress,h=e.onPressIn,b=e.onPressOut,A=e.rejectResponderTermination,C=e.style,x=(0,i.A)(e,m),w=(0,a.useRef)(null),P=(0,l.A)(t,w),T=(0,a.useState)("0s"),N=T[0],M=T[1],R=(0,a.useState)(null),O=R[0],V=R[1],D=(0,a.useCallback)(((e,t)=>{V(e),M(t?t/1e3+"s":"0s")}),[V,M]),k=(0,a.useCallback)((e=>{D(null!=n?n:.2,e)}),[n,D]),E=(0,a.useCallback)((e=>{D(null,e)}),[D]),S=(0,a.useMemo)((()=>({cancelable:!A,disabled:g,delayLongPress:u,delayPressStart:o,delayPressEnd:d,onLongPress:f,onPress:v,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;k(t?0:150),null!=h&&h(e)},onPressEnd(e){E(250),null!=b&&b(e)}})),[u,o,d,g,f,v,h,b,A,k,E]),j=(0,s.A)(w,S);return a.createElement(c.A,(0,r.A)({},x,j,{accessibilityDisabled:g,focusable:!g&&!1!==y,pointerEvents:g?"none":void 0,ref:P,style:[p.root,!g&&p.actionable,C,null!=O&&{opacity:O},{transitionDuration:N}]}))}var p=o.A.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),u=a.memo(a.forwardRef(d));u.displayName="TouchableOpacity";const g=u;var y=n(78506),f=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,r=e.disabled,i=e.onPress,l=e.testID,s=e.title;return a.createElement(g,{accessibilityLabel:n,accessibilityRole:"button",disabled:r,focusable:!r,onPress:i,ref:t,style:[v.button,o&&{backgroundColor:o},r&&v.buttonDisabled],testID:l},a.createElement(y.A,{style:[v.text,r&&v.textDisabled]},s))}));f.displayName="Button";var v=o.A.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const h=f}}]);