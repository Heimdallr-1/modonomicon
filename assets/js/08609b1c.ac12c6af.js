"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7304],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return N}});var r=n(3117),a=n(7294),o=n(3905),i=n(6010),l=n(2389),s=n(7392),u=n(7094),c=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:l,values:m,groupId:k,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[A,w]=(0,a.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==A&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==A&&(S(t),w(r),null!=k&&N(k,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>j.push(e),onKeyDown:E,onClick:C},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":A===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function k(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}var b="tabItem_Ymn6";function f(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(b,r),hidden:n},t)}const h={sidebar_position:10},g="Book Structure",y={unversionedId:"basics/structure/structure",id:"basics/structure/structure",title:"Book Structure",description:"Each Modonomicon Book consists of Categories, Entries and Pages. Entries are grouped into Categories, which are grouped into the Book itself. Pages are part of the Entries and represent the actual content of the book, they can be used to display text, images, recipes and more.",source:"@site/docs/basics/structure/structure.md",sourceDirName:"basics/structure",slug:"/basics/structure/",permalink:"/modonomicon/docs/basics/structure/",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/structure/structure.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Maven Dependencies",permalink:"/modonomicon/docs/getting-started/maven-dependencies"},next:{title:"Book.json",permalink:"/modonomicon/docs/basics/structure/book"}},v={},N=[{value:"Book.json",id:"bookjson",level:2},{value:"Categories",id:"categories",level:2},{value:"Entries",id:"entries",level:2},{value:"Pages",id:"pages",level:2}],A={toc:N};function w(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"book-structure"},"Book Structure"),(0,o.kt)("p",null,"Each Modonomicon Book consists of Categories, Entries and Pages. Entries are grouped into Categories, which are grouped into the Book itself. Pages are part of the Entries and represent the actual content of the book, they can be used to display text, images, recipes and more."),(0,o.kt)("p",null,"The file structure looks as follows:"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(f,{value:"hierarchy",label:"Hierarchy",default:!0,mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data/<mod_id>/modonomicons/<book_id>/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"book.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"categories/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<category_id1>.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<category_id2>.json")),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entries/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<category_id1>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<entry_id1>.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<entry_id2>.json")),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<category_id2>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<entry_id3>.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<entry_id4>.json")),(0,o.kt)("li",{parentName:"ul"},"..."))))))))),(0,o.kt)(f,{value:"screenshot",label:"Example Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"A book with the book id ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," and the mod id ",(0,o.kt)("inlineCode",{parentName:"p"},"modonomicon")," would look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"File Structure",src:n(2104).Z,width:"272",height:"468"})))),(0,o.kt)("h2",{id:"bookjson"},"Book.json"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"book.json")," file contains the general settings for the book. It is located in the root of the book folder.",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("a",{parentName:"p",href:"./book"},"Book.json")," for details."),(0,o.kt)("h2",{id:"categories"},"Categories"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Categories",src:n(8937).Z,width:"1920",height:"1009"})),(0,o.kt)("p",null,'Categories are a type of "Quest/Advancement"-style 2D view. A book consists of one or more categories, and each category can contain multiple entries that can be linked to each other.',(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("a",{parentName:"p",href:"./categories"},"Categories")," for details."),(0,o.kt)("h2",{id:"entries"},"Entries"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Entries",src:n(774).Z,width:"61",height:"61"})),(0,o.kt)("p",null,"Each entry is part of one category and consists of multiple pages, and may be linked to other entries.",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("a",{parentName:"p",href:"./entries"},"Entries")," for details."),(0,o.kt)("h2",{id:"pages"},"Pages"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pages",src:n(6511).Z,width:"1121",height:"759"})),(0,o.kt)("p",null,"Pages are placed inside entries and represent the actual content of the book. They can be used to display text, images, recipes and more.",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("a",{parentName:"p",href:"../page-types"},"Page Types")," for details."))}w.isMDXComponent=!0},8937:function(e,t,n){t.Z=n.p+"assets/images/categories-52684c93bd762016d793140076468da2.png"},774:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAYAAAAeYmHpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT4SURBVGhD7Zq7TuRIGEaJlghtsMFsNisxy1WAaMQdcb8IwTAiQEhoIUBCJCQkhCQ8AO8w4b7SPoyXY+2Hfn+q6bbBC+6hgyPbdbHr1F9VvnT3tVqtLDIxMdGWubm5Al5/ZmamwPLycoFO9Z2pqalKeH2//sLCQvYxpVMVIy4xPT3dFk4a6VTfG+n5k5OTBTwInj8/P98WztmTTtGp0U5PulukZ2dnC3RqtOd7fS/v+PUdlxobGyvQqRMcylSW7uvrayy1S+vE/3z/rbGojSlZ8XGll5aWsna47N/3vzaW/blfctTm8fHxJD3pFD3pn0Xab95M9Eg3S6fu4zwbvJv0t69fs7/OzvItpMpUpbHSy09T5vr6Oru7u8seHx/z7cPDQ54OqTplaZz0t6doIgdEWCAdoRykztGJ0tJ6+BAUjLxWmuhpGBNhycZoO6RTjzqpc/4Il04tYjyg/G/SGsaSc0EiThrbmK48dQziZeXfTVoRjbgUKA/xWFZoKui4jPybS6tRNFARVKN9K7wjNMcpxzFbjkFTpJ34i6X9I0BZ6ZlWK0cNi40FBKKMOoHj2BGUJY26ytM5f//0Kfvj8+fk9cGleYHyhSwPZJ3SK0/zmO3Q0NDzLYjGgiRAHRHTPI8OUV1EEUaikdJbW1vZ4eFhIfLII6joSgxJRTtKq7MQlezo6GhO46QlfH5+nu+fnJw8Rx4JX9HVCTrW6IiRRXRxcTHfh1qk/QXj4OCgQBVpIo0oxKizRVyRByQlLlnNWQkiy4cM0tmSxn7q+uDSqhNBvDZppBBFEmmizbE6Qh1AOUVeICpZDWMaPDAwkNPf35/L0gmNktbwjhGO+xIXlAdkkVSjXDaCdJXh/SaRRo4ISxhR9pEknWNBPtISVhSjrIvXFumjo6Mscva0ekaqSCOHUFzIXFbpdAbSf375kjcOoiwgCKRtbm5WjjQPI8PDwwXyF466pDW8FVnJQewEIkwZ9hVphCUHkoXd3d1cmChRtnHS9/f32e3tbS6IXBzibNUZ6iBGh2RcGFlQvtpHXur68ObSCFxdXWU3Nze5PCiq3gGAeEpasgz7KEu0Sa8l0uvr61lke3u7QFVpINou/6OFTNJIAbKkuSzzmf0q0oODg9nIyEgBzl2bNAKIKdqAPEhewoq2Io2Q5CWrxY0FjY5AljKNkz4+Pn4WbyePsOY2jUAuRjau5JHV1dVKc/pNpLVQxYi7PMeIc0wdRBm+GsZ+b47Q4FqkuVjE/5hSVhqQAEXSI+7ylNV1GeIMYwnqXi20qqeuK1waQRazSP5wEoXhNdKCuSp5SIkzGijHkOW6zNWUMOmdZMW7SosYeYjznX3yiDC4MLLtFq0UjZAWRBQ07BFm0UOahkn6pbKitPTe3l4W0a1C1CEtNOy14CnSNK7MnO2ES6+srGRra2sF+MPem0oLZAX35tfKikZLC6RT6S+lK6TrprQ0DwQR5lekm6X5M55/6OxJ96QD/PaT//7z34l04iYSZUVS+uLiIotsbGwUkHw3SccXDF46IrlLWWmXbyJRtif9Wmn/Tu5zJs4nYA5F/D8ufn6tIcLz/Vk6JRpJSusNSFxeXhbw/J2dnQLeKMcl+TAX8Ua6lJ+PF4aIf/jjB7qI1+ecPWnoSf+s0v7RYH9/v8Dp6WkBX+hcwi/iP/r7Que4dCcJv76/MPn1qdOT/hjSU9m/onrqXQZ6yHsAAAAASUVORK5CYII="},2104:function(e,t,n){t.Z=n.p+"assets/images/files-b95e083e1cb34193bf9808c4df5469f9.png"},6511:function(e,t,n){t.Z=n.p+"assets/images/pages-9ae09098da9546451b319ddefb1487c9.png"}}]);