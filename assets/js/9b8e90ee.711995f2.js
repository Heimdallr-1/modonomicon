"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),k=d(n),m=i,c=k["".concat(s,".").concat(m)]||k[m]||u[m]||o;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return d}});var a=n(3117),i=(n(7294),n(3905));const o={sidebar_position:30},l="Formatting",r={unversionedId:"basics/formatting",id:"basics/formatting",title:"Formatting",description:"Modonomicon texts support a subset of Markdown, with some quirks due to how minecraft text rendering works.",source:"@site/docs/basics/formatting.md",sourceDirName:"basics",slug:"/basics/formatting",permalink:"/modonomicon/docs/basics/formatting",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/basics/formatting.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Empty Page",permalink:"/modonomicon/docs/basics/page-types/empty-page"},next:{title:"Unlock Conditions",permalink:"/modonomicon/docs/basics/unlock-conditions/"}},s={},d=[{value:"General",id:"general",level:2},{value:"Bold",id:"bold",level:3},{value:"Italics",id:"italics",level:3},{value:"Underline",id:"underline",level:3},{value:"Strikethrough",id:"strikethrough",level:3},{value:"Newline",id:"newline",level:3},{value:"Empty Line",id:"empty-line",level:4},{value:"Lists",id:"lists",level:2},{value:"Headings",id:"headings",level:2},{value:"Images",id:"images",level:2},{value:"Translatable Content nested in Markdown Texts",id:"translatable-content-nested-in-markdown-texts",level:2},{value:"Links",id:"links",level:2},{value:"HTTP Links",id:"http-links",level:3},{value:"Book Links",id:"book-links",level:3},{value:"Item / Block Link",id:"item--block-link",level:3},{value:"Patchouli Links",id:"patchouli-links",level:3},{value:"Translations",id:"translations",level:4},{value:"Non-Standard Markdown",id:"non-standard-markdown",level:2},{value:"Text Color",id:"text-color",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"formatting"},"Formatting"),(0,i.kt)("p",null,"Modonomicon texts support a subset of ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/cheat-sheet/"},"Markdown"),", with some quirks due to how minecraft text rendering works.\nAdditionally there is some non-standard functionality to support minecraft-specific use cases."),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"bold"},"Bold"),(0,i.kt)("p",null,"Format: ",(0,i.kt)("inlineCode",{parentName:"p"},"**bold**")),(0,i.kt)("h3",{id:"italics"},"Italics"),(0,i.kt)("p",null,"Format: ",(0,i.kt)("inlineCode",{parentName:"p"},"*italics*")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"_italics_")),(0,i.kt)("h3",{id:"underline"},"Underline"),(0,i.kt)("p",null,"Format: ",(0,i.kt)("inlineCode",{parentName:"p"},"++underline++")),(0,i.kt)("h3",{id:"strikethrough"},"Strikethrough"),(0,i.kt)("p",null,"Format: ",(0,i.kt)("inlineCode",{parentName:"p"},"~~stricken through~~")),(0,i.kt)("h3",{id:"newline"},"Newline"),(0,i.kt)("p",null,"Newlines ",(0,i.kt)("em",{parentName:"p"},"generally")," work like in markdown, meaning a linebreak only renders as newline if it is preceded by three spaces."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If using Java Text Blocks to datagen texts java actually trims spaces at the end of lines so you need to use forced line breaks!\nAlternatively you can place ",(0,i.kt)("inlineCode",{parentName:"p"},"\\s")," at the end of the line after the three spaces to prevent java from trimming the spaces.")),(0,i.kt)("p",null,"In markdown linebreak can also be forced with a backslash ",(0,i.kt)("inlineCode",{parentName:"p"},"\\"),". In modonomicon, due to the underlying techonology you need to escape the backslash in both Java and JSON by simply doing two backslashes: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\"),"."),(0,i.kt)("h4",{id:"empty-line"},"Empty Line"),(0,i.kt)("p",null,'Because in many cases a line of text does not perfectly and at the end of the maximum length a line can have in the book, you need to use a little "trick" to force a fully empty line. '),(0,i.kt)("p",null,"You need two escaped backslashes (= 4 backslashes) like so ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\\\\\"),", which will tell the markdown parser to do two line breaks. The first linebreak ends the previous text line, the second line then is the empty line."),(0,i.kt)("p",null,"As seen in the code sample below, you can also spread the two escaped backslashes over two lines for better readability:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'this.add(helper.pageText(),\n  """\n      Chalk is used to draw pentacle runes and define the pentacle shape. Different types of chalk are used for different purposes, as outlined on the next pages.\n      \\\\\n      \\\\\n      The different runes are purely decorative.\n      """);\n')),(0,i.kt)("p",null,"or "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'this.add(helper.pageText(),\n  """\n      Chalk is used to draw pentacle runes and define the pentacle shape. Different types of chalk are used for different purposes, as outlined on the next pages.\\\\\n      \\\\\n      The different runes are purely decorative.\n      """);\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'This is only necessary in modonomicon (but not in "normal" markdown editors) because of the above-mentioned behaviour of java to strip trailing spaces.\nIn normal markdown you would simply add three spaces at the end of your text line, and then insert the forced line break with a backslash.')),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"Lists work like in markdown using ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," for unordered lists and ",(0,i.kt)("inlineCode",{parentName:"p"},"1."),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2."),", ... for ordered lists."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A newline/empty line should be placed after a list, otherwise the parser will add content of the line to the last list item.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Nested lists only have limited support and may not correctly wrap to the next line. If there are issues reduce nesting level or force a line break with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\"),".")),(0,i.kt)("h2",{id:"headings"},"Headings"),(0,i.kt)("p",null,"Markdown headings are not supported. Page titles are a separate JSON element."),(0,i.kt)("h2",{id:"images"},"Images"),(0,i.kt)("p",null,"Like headings, images are not supported. There are specific page types to display images."),(0,i.kt)("h2",{id:"translatable-content-nested-in-markdown-texts"},"Translatable Content nested in Markdown Texts"),(0,i.kt)("p",null,"To included the translated contents from a DescriptionId contained in ",(0,i.kt)("inlineCode",{parentName:"p"},"lang.json")," simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"<t>my.description.id</t>"),". "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The translated contents will not be sent through the markdown renderer, however you can use this to e.g. have an item (or any vanilla/modded object type that uses the minecraft translation system) name automatically be translated.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("p",null,"Markdown links use the following syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"[text](url)"),"."),(0,i.kt)("h3",{id:"http-links"},"HTTP Links"),(0,i.kt)("p",null,"HTTP URLs will be handled like in the minecraft chat, which means clicking them will show an approval dialogue window and will then open the URL in an external browser. "),(0,i.kt)("h3",{id:"book-links"},"Book Links"),(0,i.kt)("p",null,"Book links are special links between different pages of the same book, or even to other books.\nThere are three types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Book Link"))),(0,i.kt)("p",null,"Open another book on it's default page.\nSyntax: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"book://%3Cbook-id%3E"},"display text"),"` ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Category Link"))),(0,i.kt)("p",null,"Open a category (in the same book, or in another book).\nSyntax: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[display text](book://<book-id>/<category-id>)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[display text](book://<category-id>)")," ")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"<book-id>")," is ommitted the current book is assumed.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Entry Link"))),(0,i.kt)("p",null,"Opens an entry (in the same book, or in another book), optionally at either a given page number or page anchor.\nSyntax: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[display text](book://<book-id>/<entry-id>[#page-number][@page-anchor])"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[display text](book://<entry-id>[#page-number][@page-anchor])"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"<book-id>")," is ommitted the current book is assumed.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The entry id is the full path of the entry within the ",(0,i.kt)("inlineCode",{parentName:"p"},"/entries/")," folder, that often includes the category id, if it is used as a subdirectory, e.g. for ",(0,i.kt)("inlineCode",{parentName:"p"},"/entries/my-category/my-entry")," the entry id is ",(0,i.kt)("inlineCode",{parentName:"p"},"my-category/my-entry"),".")),(0,i.kt)("h3",{id:"item--block-link"},"Item / Block Link"),(0,i.kt)("p",null,"Item links are links that cannot be clicked, but that will show the (translated) item or block name if hovered, and if not provided with a link text, will also automatically have the translated name as rendered text."),(0,i.kt)("p",null,"Syntax: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[optional display text](item://minecraft:apple)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[](item://minecraft:chest)"))),(0,i.kt)("h3",{id:"patchouli-links"},"Patchouli Links"),(0,i.kt)("p",null,"Patchouli links are special links that can be used to link to a particular patchouli entry and open it on click."),(0,i.kt)("p",null,"Syntax: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[display text](patchouli://<mod_id>:<patchouli_book_id>//<entry_id>#<page_number>)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[display text](patchouli://<mod_id>:<patchouli_book_id>//<entry_id>)"),".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Link to a Patchouli Entry](patchouli://occultism:dictionary_of_spirits//misc/books_of_calling)"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note the double ",(0,i.kt)("inlineCode",{parentName:"p"},"//")," separating the book id from the entry id. This is required, because both book and entry ids may contain one or multile  ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," characters if the files are in subdirectories.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The entry id is the full path of the entry within the ",(0,i.kt)("inlineCode",{parentName:"p"},"/entries/")," folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"patchouli_books"),", the path you would also use for links within patchouli with the ",(0,i.kt)("inlineCode",{parentName:"p"},"$(l:<entry_id>)")," syntax.")),(0,i.kt)("h4",{id:"translations"},"Translations"),(0,i.kt)("p",null,"On hover the link will attempt to display the name of the patchouli page that will be opened on click.\nPatchouli does not have a standard DescriptionId format for entry names (in fact, entry names can be provided without using the translation system at all), so you need to manually include the translation for the link text in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lang.json")," file. "),(0,i.kt)("p",null,"The DescriptionId used for hover texts is ",(0,i.kt)("inlineCode",{parentName:"p"},"patchouli.<patchouli_book_id>.<entry_id>.name"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"patchouli.occultism.dictionary_of_spirits.misc.books_of_calling.name"),". Make sure to provide a translation for this DescriptionId in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lang.json")," file (or better, in your language datagen), otherwise the hover text will show the DescriptionId itself."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<patchouli_book_id>")," will include the mod id, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<entry_id>")," will not.")),(0,i.kt)("h2",{id:"non-standard-markdown"},"Non-Standard Markdown"),(0,i.kt)("p",null,"In order to provide a bit more flexibility, the markdown parser supports a few non-standard instructions."),(0,i.kt)("h3",{id:"text-color"},"Text Color"),(0,i.kt)("p",null,"Color instructions (ab)use the link syntax as follows: to start a colored region use ",(0,i.kt)("inlineCode",{parentName:"p"},"[#](<hexcode>)"),", to reset to the default color use ",(0,i.kt)("inlineCode",{parentName:"p"},"[#]()"),".\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"[#](ff0000)Red text [#](00ff00)from here on green [#](0000ff)now blue [#]()and finally back to default color.\n")))}u.isMDXComponent=!0}}]);