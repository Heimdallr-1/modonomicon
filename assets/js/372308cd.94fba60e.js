"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4286],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),l=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=l(n.components);return o.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,s=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(f,a(a({ref:e},d),{},{components:t})):o.createElement(f,a({ref:e},d))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8485:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var o=t(3117),r=(t(7294),t(3905));const i={sidebar_position:30},a="Advancement Condition",c={unversionedId:"basics/unlock-conditions/advancement-condition",id:"basics/unlock-conditions/advancement-condition",title:"Advancement Condition",description:"Condition typeadvancement",source:"@site/docs/basics/unlock-conditions/advancement-condition.md",sourceDirName:"basics/unlock-conditions",slug:"/basics/unlock-conditions/advancement-condition",permalink:"/modonomicon/docs/basics/unlock-conditions/advancement-condition",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/unlock-conditions/advancement-condition.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Entry Unlocked Condition",permalink:"/modonomicon/docs/basics/unlock-conditions/entry-unlocked-condition"},next:{title:"And Condition",permalink:"/modonomicon/docs/basics/unlock-conditions/and-condition"}},s={},l=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],d={toc:l};function u(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advancement-condition"},"Advancement Condition"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Condition type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"modonomicon:advancement")),(0,r.kt)("p",null,"This condition will be met, if the player has the specified advancement. "),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"advancement_id")," (ResourceLocation, ",(0,r.kt)("em",{parentName:"li"},"mandatory"),")")),(0,r.kt)("p",null,"The ResourceLocation of the advancement that the player needs to have to unlock this entry."),(0,r.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<my-entry>.json")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "condition": {\n      "type": "modonomicon:advancement",\n      "advancement_id": "occultism:occultism/craft_dimensional_matrix"\n  },\n  ...\n}\n')))}u.isMDXComponent=!0}}]);