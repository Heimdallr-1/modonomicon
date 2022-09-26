"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6824],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_position:50},i="Entity Page",l={unversionedId:"basics/page-types/entity-page",id:"basics/page-types/entity-page",title:"Entity Page",description:"Entity Page",source:"@site/docs/basics/page-types/entity-page.md",sourceDirName:"basics/page-types",slug:"/basics/page-types/entity-page",permalink:"/modonomicon/docs/basics/page-types/entity-page",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/page-types/entity-page.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Image Page",permalink:"/modonomicon/docs/basics/page-types/image-page"},next:{title:"Spotlight Page",permalink:"/modonomicon/docs/basics/page-types/spotlight-page"}},p={},s=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entity-page"},"Entity Page"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Entity Page",src:n(7584).Z,width:"1109",height:"764"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Page type:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:entity")),(0,o.kt)("p",null,"Displays an Entity and optionally a custom name and text."),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (DescriptionId or Component JSON, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"The entity name. Will not parse markdown, instead it uses the default title color as defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"book.json"),".",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("a",{parentName:"p",href:"../structure/book"},"Book.json")," for details."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If ommited, the entity's default name will be used.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"entity_id")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"Array of ResourceLocations of the images to display."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"text")," (DescriptionId or Component JSON, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"The page text. Can be styled using markdown."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"scale")," (Float, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),". Render scale for the entity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"offset")," (Float, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0"),". Offset to move entity up/down on the page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rotate")," (Boolean, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If true, slowly rotate entity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default_rotation")," (Float, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"-45.0"),". Default rotation to show the entity at (in degrees)."),(0,o.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<entry>.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "pages": [\n    {\n      "type": "modonomicon:entity",\n      "anchor": "",\n      "default_rotation": -45.0,\n      "entity_id": "minecraft:ender_dragon",\n      "name": "book.modonomicon.demo.features.entity.entity1.title",\n      "offset": 0.0,\n      "rotate": true,\n      "scale": 0.5,\n      "text": ""\n    }\n  ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/lang/*.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "book.modonomicon.demo.features.entity.entity1.title": "Custom Name"\n}\n')))}m.isMDXComponent=!0},7584:function(e,t,n){t.Z=n.p+"assets/images/entity-page-7214fb52be9bb631e4f89f7c8c06db12.png"}}]);