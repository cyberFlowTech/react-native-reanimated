"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9685],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>S,default:()=>C,frontMatter:()=>y,metadata:()=>v,toc:()=>R});var r=t(58168),a=t(96540),o=t(15680),i=t(78506),l=t(9176),s=t(91691),u=t(78786),d=t(46096),c=t(11378);const p={code:"function anonymous(){const{measure,animatedRef,runOnJS,onPress}=this.__closure;const measurements=measure(animatedRef);runOnJS(onPress)(measurements);}"};function m(e){const{children:n,onPress:t}=e,r=(0,u.a)();return a.createElement(i.A,{style:f.title,onPress:()=>{(0,d.Jy)(function(){const e=function(){const e=(0,c.x)(r);(0,d.OG)(t)(e)};return e.__closure={measure:c.x,animatedRef:r,runOnJS:d.OG,onPress:t},e.__workletHash=0xebf29c746b8,e.__initData=p,e}())()},ref:r},n)}function g(){const[e,n]=a.useState(0),t=e=>{n(Math.floor(e.width))};return a.createElement(l.A,{style:f.container},["React","Native","Reanimated"].map((e=>a.createElement(m,{key:e,onPress:t},e))),a.createElement(i.A,{style:f.label},"width: ",e))}const f=s.A.create({container:{flex:1,alignItems:"center"},box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64,alignSelf:"center"},title:{fontSize:42,textAlign:"center",fontWeight:"bold",marginRight:8},label:{fontSize:24,marginVertical:16,color:"#b58df1"}}),h="import React from 'react';\nimport { View, StyleSheet, Text } from 'react-native';\nimport {\n  runOnJS,\n  measure,\n  useAnimatedRef,\n  runOnUI,\n} from 'react-native-reanimated';\n\nfunction MeasurableText(props) {\n  const { children, onPress } = props;\n  const animatedRef = useAnimatedRef();\n\n  const handleMeasure = () => {\n    // highlight-next-line\n    runOnUI(() => {\n      const measurements = measure(animatedRef);\n      runOnJS(onPress)(measurements);\n      // highlight-next-line\n    })();\n  };\n\n  return (\n    <Text style={styles.title} onPress={handleMeasure} ref={animatedRef}>\n      {children}\n    </Text>\n  );\n}\n\nexport default function App() {\n  const [text, setText] = React.useState(0);\n\n  const handlePress = (measurements) => {\n    setText(Math.floor(measurements.width));\n  };\n\n  return (\n    <View style={styles.container}>\n      {['React', 'Native', 'Reanimated'].map((word) => (\n        <MeasurableText key={word} onPress={handlePress}>\n          {word}\n        </MeasurableText>\n      ))}\n      <Text style={styles.label}>width: {text}</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n    alignSelf: 'center',\n  },\n  title: {\n    fontSize: 42,\n    textAlign: 'center',\n    fontWeight: 'bold',\n    marginRight: 8,\n  },\n  label: {\n    fontSize: 24,\n    marginVertical: 16,\n    color: '#b58df1',\n  },\n});\n",y={sidebar_position:2},S="runOnUI",v={unversionedId:"threading/runOnUI",id:"threading/runOnUI",title:"runOnUI",description:"runOnUI lets you asynchronously run workletized functions on the UI thread.",source:"@site/docs/threading/runOnUI.mdx",sourceDirName:"threading",slug:"/threading/runOnUI",permalink:"/react-native-reanimated/docs/threading/runOnUI",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/threading/runOnUI.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/threading/runOnJS"},next:{title:"createWorkletRuntime",permalink:"/react-native-reanimated/docs/threading/createWorkletRuntime"}},b={},R=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"fn",id:"fn",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],w=(x="InteractiveExample",function(e){return console.warn("Component "+x+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var x;const O={toc:R},N="wrapper";function C(e){let{components:n,...t}=e;return(0,o.yg)(N,(0,r.A)({},O,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"runonui"},"runOnUI"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI")," lets you asynchronously run ",(0,o.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," functions on the ",(0,o.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),"."),(0,o.yg)("p",null,"Most commonly used either with an ",(0,o.yg)("inlineCode",{parentName:"p"},"useEffect")," to start an animation on component mount/unmount or with ",(0,o.yg)("a",{parentName:"p",href:"/docs/advanced/measure"},(0,o.yg)("inlineCode",{parentName:"a"},"measure"))," and ",(0,o.yg)("a",{parentName:"p",href:"/docs/scroll/scrollTo"},(0,o.yg)("inlineCode",{parentName:"a"},"scrollTo"))," functions which have implementations only on the UI thread."),(0,o.yg)("h2",{id:"reference"},"Reference"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"import { runOnUI } from 'react-native-reanimated';\n\nfunction App() {\n  // E.g. in event handler or in an effect\n  // highlight-next-line\n  runOnUI((greeting) => {\n    console.log(`${greeting} from the UI thread`);\n    // highlight-next-line\n  })('Howdy');\n\n  // ...\n}\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Type definitions"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"function runOnUI<A extends any[], R>(\n  fn: (...args: A) => R\n): (...args: Parameters<typeof fn>) => void;\n"))),(0,o.yg)("h3",{id:"arguments"},"Arguments"),(0,o.yg)("h4",{id:"fn"},"fn"),(0,o.yg)("p",null,"A reference to a function you want to execute on the ",(0,o.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread")," from the ",(0,o.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread"),". Arguments to your function have to be passed to the function returned from ",(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI")," i.e. ",(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI(myWorklet)(10);"),"."),(0,o.yg)("h3",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI")," returns a function that accepts arguments for the function passed as the first argument."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Don't forget to call the function returned from ",(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI"),".")),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)(w,{src:h,component:(0,o.yg)(g,{mdxType:"RunOnUI"}),label:"Tap each word",mdxType:"InteractiveExample"}),(0,o.yg)("h2",{id:"remarks"},"Remarks"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"When implementing your animations you should first reach for more general solutions such as ",(0,o.yg)("a",{parentName:"p",href:"/docs/core/useDerivedValue"},(0,o.yg)("inlineCode",{parentName:"a"},"useDerivedValue")),", ",(0,o.yg)("a",{parentName:"p",href:"/docs/advanced/useAnimatedReaction"},(0,o.yg)("inlineCode",{parentName:"a"},"useAnimatedReaction"))," or running code in gesture callbacks and only use ",(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI")," after you've tried other methods.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"It's a common mistake to execute function inside of runOnUI like this: ",(0,o.yg)("del",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"del"},"runOnUI(myWorklet(10))()")),". Here, the correct usage would be ",(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI(myWorklet)(10)"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The callback passed as the argument is automatically ",(0,o.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," and ready to be run on the ",(0,o.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Make sure not to execute ",(0,o.yg)("inlineCode",{parentName:"p"},"runOnUI")," on the UI thread as this will result in an error."))),(0,o.yg)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,o.yg)("div",{className:"platform-compatibility"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Android"),(0,o.yg)("th",{parentName:"tr",align:null},"iOS"),(0,o.yg)("th",{parentName:"tr",align:null},"Web"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,o.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,o.yg)("td",{parentName:"tr",align:null},"\u2705"))))))}C.isMDXComponent=!0},78786:(e,n,t)=>{t.d(n,{a:()=>m});var r=t(96540),a=t(50014),o=t(57659),i=t(30221),l=t(46038),s=t(4992),u=t(67862),d=t(38507);const c=(0,d.HZ)();function p(e){return(0,d.J2)()&&e.getNativeScrollRef?e.getNativeScrollRef():!(0,d.J2)()&&e.getScrollableNode?e.getScrollableNode():e}function m(){const e=(0,a.U)(-1),n=(0,a.U)(null),t=(0,r.useRef)();if(!t.current){const r=t=>{if(t){const i=(0,d.J2)()?o.t:s.A,l=()=>c?p(t):i(p(t));var a;if(e.value=l(),r.getTag=(0,d.J2)()?()=>(0,s.A)(p(t)):l,r.current=t,"ios"===u.A.OS&&!(0,d.J2)())n.value=(null==t||null===(a=t.viewConfig)||void 0===a?void 0:a.uiViewClassName)||"RCTView"}return e.value};r.current=null;const a=(0,i.jt)({__init:()=>{const t=()=>e.value;return t.viewName=n,t}});l.A.set(r,a),t.current=r}return t.current}},11378:(e,n,t)=>{function r(e){const n=e();if(-1===n)return console.warn(`[Reanimated] The view with tag ${n} is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).`),null;const t=n.getBoundingClientRect();return{width:n.offsetWidth,height:n.offsetHeight,x:n.offsetLeft,y:n.offsetTop,pageX:t.left,pageY:t.top}}t.d(n,{x:()=>r})},78506:(e,n,t)=>{t.d(n,{A:()=>R});var r=t(99343),a=t(98587),o=t(96540),i=t(35131),l=t(68697),s=t(40254),u=t(92008),d=t(11804),c=t(96177),p=t(40448),m=t(91691),g=t(85243),f=t(89419),h=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],y=Object.assign({},l.Gs,l.Fh,l.DY,l.l3,l.Aw,l.k2,l.CD,l.eO,{href:!0,lang:!0,pointerEvents:!0}),S=o.forwardRef(((e,n)=>{var t=e.hrefAttrs,r=e.numberOfLines,l=e.onClick,m=e.onLayout,S=e.onPress,v=e.onMoveShouldSetResponder,R=e.onMoveShouldSetResponderCapture,w=e.onResponderEnd,x=e.onResponderGrant,O=e.onResponderMove,N=e.onResponderReject,C=e.onResponderRelease,A=e.onResponderStart,k=e.onResponderTerminate,I=e.onResponderTerminationRequest,T=e.onScrollShouldSetResponder,U=e.onScrollShouldSetResponderCapture,P=e.onSelectionChangeShouldSetResponder,M=e.onSelectionChangeShouldSetResponderCapture,E=e.onStartShouldSetResponder,j=e.onStartShouldSetResponderCapture,_=e.selectable,D=(0,a.A)(e,h),W=o.useContext(g.A),J=o.useRef(null),L=(0,f.PZ)().direction;(0,u.A)(J,m),(0,p.A)(J,{onMoveShouldSetResponder:v,onMoveShouldSetResponderCapture:R,onResponderEnd:w,onResponderGrant:x,onResponderMove:O,onResponderReject:N,onResponderRelease:C,onResponderStart:A,onResponderTerminate:k,onResponderTerminationRequest:I,onScrollShouldSetResponder:T,onScrollShouldSetResponderCapture:U,onSelectionChangeShouldSetResponder:P,onSelectionChangeShouldSetResponderCapture:M,onStartShouldSetResponder:E,onStartShouldSetResponderCapture:j});var V=o.useCallback((e=>{null!=l?l(e):null!=S&&(e.stopPropagation(),S(e))}),[l,S]),z=W?"span":"div",H=null!=e.lang?(0,f.il)(e.lang):null,G=e.dir||H,$=G||L,X=(e=>(0,s.A)(e,y))(D);if(X.dir=G,W||(X.dir=null!=G?G:"auto"),(l||S)&&(X.onClick=V),X.style=[null!=r&&r>1&&{WebkitLineClamp:r},!0===W?b.textHasAncestor$raw:b.text$raw,1===r&&b.textOneLine,null!=r&&r>1&&b.textMultiLine,e.style,!0===_&&b.selectable,!1===_&&b.notSelectable,S&&b.pressable],null!=e.href&&(z="a",null!=t)){var q=t.download,F=t.rel,B=t.target;null!=q&&(X.download=q),null!=F&&(X.rel=F),"string"==typeof B&&(X.target="_"!==B.charAt(0)?"_"+B:B)}var Y=(0,c.A)(X),Z=(0,d.A)(J,Y,n);X.ref=Z;var K=(0,i.A)(z,X,{writingDirection:$});return W?K:o.createElement(g.A.Provider,{value:!0},K)}));S.displayName="Text";var v={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,textAlign:"inherit",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},b=m.A.create({text$raw:v,textHasAncestor$raw:(0,r.A)((0,r.A)({},v),{},{color:"inherit",font:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const R=S}}]);