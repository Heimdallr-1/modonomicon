"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9661],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3688:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_position:30},i="Categories",s={unversionedId:"basics/structure/categories",id:"basics/structure/categories",title:"Categories",description:"Categories are defined in json files placed in the /data//modonomicons//categories/ folder.",source:"@site/docs/basics/structure/categories.md",sourceDirName:"basics/structure",slug:"/basics/structure/categories",permalink:"/modonomicon/docs/basics/structure/categories",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/structure/categories.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Book.json",permalink:"/modonomicon/docs/basics/structure/book"},next:{title:"Entries",permalink:"/modonomicon/docs/basics/structure/entries"}},u={},l=[{value:"Attributes",id:"attributes",level:2},{value:"Usage Examples",id:"usage-examples",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"categories"},"Categories"),(0,o.kt)("p",null,"Categories are defined in json files placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/data/<mod_id>/modonomicons/<book_id>/categories/")," folder. "),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," (DescriptionId, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,"The category name. Will not parse markdown."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"icon")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"mandatory"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Either")," an item/block ResourceLocation that should be used as icon. E.g.:  ",(0,o.kt)("inlineCode",{parentName:"p"},"minecraft:nether_star")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"minecraft:chest"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Or")," the ResourceLocation to a texture. The texture must be 16x16 pixels. E.g.:  ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:textures/gui/some_random_icon.png"),". "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To use a texture make sure the ResourceLocation includes the file endinge ",(0,o.kt)("inlineCode",{parentName:"p"},".png")," as seen in the example above.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sort_number")," (Integer, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),".",(0,o.kt)("br",{parentName:"p"}),"\n",'Category "Bookmark"-Buttos on the left side of the Book will be sorted by this number.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"condition")," (Condition, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Categories, like Entries, can be hidden until an Unlock Condition is fulfilled. Conditions are JSON objects.",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../unlock-conditions"},"Unlock Conditions"))," for details."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"background")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:textures/gui/dark_slate_seamless.png"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The ResourceLocation for the Background texture to use for this category. The texture must be 512px by 512px."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"entry_textures")," (ResourceLocation, ",(0,o.kt)("em",{parentName:"li"},"optional"),")")),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon:textures/gui/entry_textures.png"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The ResourceLocation for the Entry textures to use for this category. The texture must be 512px by 512px.",(0,o.kt)("br",{parentName:"p"}),"\n","Entry textures govern how the Entry background behind the Icon as well as the arrows connecting entries look.   "),(0,o.kt)("p",null,"If you want to use a custom texture, make sure to copy the default file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/klikli-dev/modonomicon/blob/version/1.19/src/main/resources/assets/modonomicon/textures/gui/entry_textures.png"},(0,o.kt)("inlineCode",{parentName:"a"},"/assets/modonomicon/textures/gui/entry_textures.png"))," and modify it in order to preserve the UV coordinates of all parts."),(0,o.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/data/<mod_id>/modonomicons/<book_id>/categories/features.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "background": "modonomicon:textures/gui/dark_slate_seamless.png",\n  "entry_textures": "modonomicon:textures/gui/entry_textures.png",\n  "icon": "minecraft:nether_star",\n  "name": "book.modonomicon.demo.features.name",\n  "sort_number": -1\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/lang/*.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "book.modonomicon.demo.features.name": "Features Category",\n}\n')))}p.isMDXComponent=!0}}]);