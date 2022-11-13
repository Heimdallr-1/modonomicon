"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2589],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5150:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:31},i="Block State Property Matcher",l={unversionedId:"multiblocks/state-matchers/blockstate-property-matcher",id:"multiblocks/state-matchers/blockstate-property-matcher",title:"Block State Property Matcher",description:"Typeblockstateproperty",source:"@site/docs/multiblocks/state-matchers/blockstate-property-matcher.md",sourceDirName:"multiblocks/state-matchers",slug:"/multiblocks/state-matchers/blockstate-property-matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/blockstate-property-matcher",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/multiblocks/state-matchers/blockstate-property-matcher.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"Block State Matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/blockstate-matcher"},next:{title:"Display (Only) Matcher",permalink:"/modonomicon/docs/multiblocks/state-matchers/display-matcher"}},c={},p=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"block-state-property-matcher"},"Block State Property Matcher"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"modonomicon:blockstateproperty")),(0,a.kt)("p",null,"BlockStateProperty matchers will check for ",(0,a.kt)("strong",{parentName:"p"},"only the properties you provide"),", not all existing BlockState properties for that block."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This matcher check only against the properties you actually provide, and ignore all other properties.\nE.g.: If you provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"facing")," property, but the block you are checking against also has a ",(0,a.kt)("inlineCode",{parentName:"p"},"waterlogged")," property, it will match as long as the ",(0,a.kt)("inlineCode",{parentName:"p"},"facing")," property is correct, and ignore the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"waterlogged")," property.")),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"block")," (BlockState, ",(0,a.kt)("em",{parentName:"p"},"mandatory"),")"),(0,a.kt)("p",{parentName:"li"},"BlockState to match against when checking if a given block fits this matcher."),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you omit the BlockState properties (",(0,a.kt)("inlineCode",{parentName:"p"},"[key=value]"),"), Modonomicon will match against it's default BlockState. ")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"display")," (BlockState, ",(0,a.kt)("em",{parentName:"p"},"optional"),")"),(0,a.kt)("p",{parentName:"li"},"Defaults to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"block")," property.",(0,a.kt)("br",{parentName:"p"}),"\n","The block to display in the multiblock preview. "),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you omit the BlockState properties (",(0,a.kt)("inlineCode",{parentName:"p"},"[key=value]"),"), Modonomicon will display the Block's default BlockState.")))),(0,a.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Matches lit candles, inependent of the amount of candles, and if they are waterlogged or not (although the latter of course has the in-game constraint that waterlogged will unlight the candle ...)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "modonomicon:blockstateproperty",\n    "display": "minecraft:white_candle[lit=true]",\n    "block": "minecraft:white_candle[lit=true]"\n}\n')))}m.isMDXComponent=!0}}]);