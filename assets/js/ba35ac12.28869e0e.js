"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[979],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),u=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=u(n.components);return o.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,s=a(n,["components","mdxType","originalType","parentName"]),p=u(t),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(y,c(c({ref:e},s),{},{components:t})):o.createElement(y,c({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a.mdxType="string"==typeof n?n:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9968:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var o=t(3117),r=(t(7294),t(3905));const i={sidebar_position:20},c="Entry Unlocked Condition",a={unversionedId:"basics/unlock-conditions/entry-unlocked-condition",id:"basics/unlock-conditions/entry-unlocked-condition",title:"Entry Unlocked Condition",description:"Condition typeentry_unlocked",source:"@site/docs/basics/unlock-conditions/entry-unlocked-condition.md",sourceDirName:"basics/unlock-conditions",slug:"/basics/unlock-conditions/entry-unlocked-condition",permalink:"/modonomicon/docs/basics/unlock-conditions/entry-unlocked-condition",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/unlock-conditions/entry-unlocked-condition.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Entry Read Condition",permalink:"/modonomicon/docs/basics/unlock-conditions/entry-read-condition"},next:{title:"Advancement Condition",permalink:"/modonomicon/docs/basics/unlock-conditions/advancement-condition"}},l={},u=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],s={toc:u};function d(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entry-unlocked-condition"},"Entry Unlocked Condition"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Condition type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"modonomicon:entry_unlocked")),(0,r.kt)("p",null,'This condition will be met, if the entry with the specified ID has been unlocked for the player, meaning that that entry\'s condition has been met.\nThis allows to lock one entry behind a specific condition, and "chain" other entries to unlock together with that entry, effectively unlocking multiple entries at once.'),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"entry_id")," (ResourceLocation, ",(0,r.kt)("em",{parentName:"li"},"mandatory"),")")),(0,r.kt)("p",null,"The ResourceLocation of the entry that needs to be unlocked to unlock this entry."),(0,r.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<my-entry>.json")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "condition": {\n      "type": "modonomicon:entry_unlocked",\n      "entry_id": "modonomicon:features/condition_root"\n  },\n  ...\n}\n')))}d.isMDXComponent=!0}}]);