"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:20,title:"Formatting"},s=void 0,p={unversionedId:"getting-started/formatting",id:"getting-started/formatting",title:"Formatting",description:"Links",source:"@site/docs/getting-started/formatting.md",sourceDirName:"getting-started",slug:"/getting-started/formatting",permalink:"/modonomicon/docs/getting-started/formatting",editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/getting-started/formatting.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Formatting"},sidebar:"tutorialSidebar",previous:{title:"Page Types",permalink:"/modonomicon/docs/getting-started/page-types"},next:{title:"Defining Multiblocks",permalink:"/modonomicon/docs/multiblocks/defining-multiblocks"}},u={},c=[{value:"Links",id:"links",level:2},{value:"HTTP Links",id:"http-links",level:3},{value:"Book Links",id:"book-links",level:3},{value:"Non-Standard Markdown",id:"non-standard-markdown",level:2},{value:"Text Color",id:"text-color",level:3}],d={toc:c};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("p",null,"Markdown links use the following syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"[text](url)"),"."),(0,i.kt)("h3",{id:"http-links"},"HTTP Links"),(0,i.kt)("p",null,"HTTP URLs will be handled like in the minecraft chat, which means clicking them will show an approval dialogue window and will then open the URL in an external browser. "),(0,i.kt)("h3",{id:"book-links"},"Book Links"),(0,i.kt)("p",null,"Book links are special links between different pages of the same book, or even to other books.\nThere are three types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Book Link"))),(0,i.kt)("p",null,"Open another book on it's default page.\nFormat: ",(0,i.kt)("inlineCode",{parentName:"p"},"[display text](book://<book-id>)"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Category Link"))),(0,i.kt)("p",null,"Open a category (in the same book, or in another book).\nFormat: ",(0,i.kt)("inlineCode",{parentName:"p"},"[display text](book://<book-id>/<category-id>)"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entry Link"))),(0,i.kt)("p",null,"Opens an entry (in the same book, or in another book), optionally at a given page number / page anchor.\nFormat: ",(0,i.kt)("inlineCode",{parentName:"p"},"[display text](book://<book-id>/<entry-id>[#page-number][@page-anchor])"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": The entry id is the full path of the entry within the ",(0,i.kt)("inlineCode",{parentName:"p"},"/entries/")," folder, that often includes the category id, if it is used as a subdirectory, e.g. for ",(0,i.kt)("inlineCode",{parentName:"p"},"/entries/my-category/my-entry")," the entry id is ",(0,i.kt)("inlineCode",{parentName:"p"},"my-category/my-entry"),"."),(0,i.kt)("h2",{id:"non-standard-markdown"},"Non-Standard Markdown"),(0,i.kt)("p",null,"In order to provide a bit more flexibility, the markdown parser supports a few non-standard instructions."),(0,i.kt)("h3",{id:"text-color"},"Text Color"),(0,i.kt)("p",null,"Color instructions (ab)use the link syntax as follows: to start a colored region use ",(0,i.kt)("inlineCode",{parentName:"p"},"[#](<hexcode>)"),", to reset to the default color use ",(0,i.kt)("inlineCode",{parentName:"p"},"[#]()"),".\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"[#](ff0000)Red text [#](00ff00)from here on green [#](0000ff)now blue [#]()and finally back to default color.\n")))}k.isMDXComponent=!0}}]);