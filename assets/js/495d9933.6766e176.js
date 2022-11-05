"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9993],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(o),h=a,k=c["".concat(p,".").concat(h)]||c[h]||m[h]||r;return o?n.createElement(k,i(i({ref:t},d),{},{components:o})):n.createElement(k,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4354:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var n=o(3117),a=(o(7294),o(3905));const r={sidebar_position:30},i="Step 3: Creating the Book",l={unversionedId:"getting-started/step-by-step-with-datagen/step3",id:"getting-started/step-by-step-with-datagen/step3",title:"Step 3: Creating the Book",description:"Now it is time to add code to generate our book, a first category and an entry with a page.",source:"@site/docs/getting-started/step-by-step-with-datagen/step3.md",sourceDirName:"getting-started/step-by-step-with-datagen",slug:"/getting-started/step-by-step-with-datagen/step3",permalink:"/modonomicon/docs/getting-started/step-by-step-with-datagen/step3",draft:!1,editUrl:"https://github.com/klikli-dev/modonomicon/tree/documentation/docs/getting-started/step-by-step-with-datagen/step3.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Step 2: A first look at the Demo Project",permalink:"/modonomicon/docs/getting-started/step-by-step-with-datagen/step2"},next:{title:"Step 4: Adding texts",permalink:"/modonomicon/docs/getting-started/step-by-step-with-datagen/step4"}},p={},s=[{value:"Preparations: Java Imports",id:"preparations-java-imports",level:2},{value:"Our first Book",id:"our-first-book",level:2},{value:"Our first Category",id:"our-first-category",level:2},{value:"Our first Entry",id:"our-first-entry",level:2},{value:"Results",id:"results",level:2}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"step-3-creating-the-book"},"Step 3: Creating the Book"),(0,a.kt)("p",null,"Now it is time to add code to generate our book, a first category and an entry with a page.\nWe will focus on the structure and layout of the book in this step, and add the texts in the next step."),(0,a.kt)("p",null,"If you are impatient you can skip ahead to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#results"},"Results"))," to see what we will be creating."),(0,a.kt)("h2",{id:"preparations-java-imports"},"Preparations: Java Imports"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"DemoBookProvider.java")," in your IDE or text editor."),(0,a.kt)("li",{parentName:"ol"},"Below ",(0,a.kt)("inlineCode",{parentName:"li"},"package ...")," but above ",(0,a.kt)("inlineCode",{parentName:"li"},"public class ...")," add the following lines:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.klikli_dev.modonomicon.api.datagen.EntryLocationHelper;\nimport com.klikli_dev.modonomicon.api.datagen.book.page.BookMultiblockPageModel;\nimport com.klikli_dev.modonomicon.api.datagen.book.page.BookSpotlightPageModel;\nimport com.klikli_dev.modonomicon.api.datagen.book.page.BookTextPageModel;\nimport net.minecraft.world.item.crafting.Ingredient;\n")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are using an IDE it might do this step for you.")),(0,a.kt)("h2",{id:"our-first-book"},"Our first Book"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"DemoBookProvider.java")," in your IDE or text editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"generate")," method, add the following code:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},' //call our code that generates a book with the id "demo"\nvar demoBook = this.makeDemoBook("demo");\n\n//then add the book to the list of books to generate    \nthis.add(demoBook);\n')),(0,a.kt)("p",{parentName:"li"},'This will create a new book with the id "demo" (the code for that follows in the next step) and add it to the list of books to be generated.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we add the method we're calling above to the bottom of the file, before the last ",(0,a.kt)("inlineCode",{parentName:"p"},"}"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private BookModel makeDemoBook(String bookName) {\n    //The lang helper keeps track of the "DescriptionIds", that is, the language keys for translations, for us\n    var helper = ModonomiconAPI.get().getLangHelper(this.modid);\n\n    //we tell the helper the book we\'re in.\n    helper.book(bookName);\n\n    //Now we create the book with settings of our choosing\n    var demoBook = BookModel.builder()\n            .withId(this.modLoc(bookName)) //the id of the book. modLoc() prepends the mod id.\n            .withName(helper.bookName()) //the name of the book. The lang helper gives us the correct translation key.\n            .withTooltip(helper.bookTooltip()) //the hover tooltip for the book. Again we get a translation key.\n            .withGenerateBookItem(true) //auto-generate a book item for us.\n            .withModel(new ResourceLocation("modonomicon:modonomicon_red")) //use the default red modonomicon icon for the book\n            .withCreativeTab("modonomicon") //and put it in the modonomicon tab\n            .build();\n    return demoBook;\n}\n')))),(0,a.kt)("p",null,"Congratulations! This will generate a book for us. Let's test how that works!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the terminal, run ",(0,a.kt)("inlineCode",{parentName:"li"},"./gradlew runData")," to generate the json file(s)."),(0,a.kt)("li",{parentName:"ol"},"After it is complete, run ",(0,a.kt)("inlineCode",{parentName:"li"},"./gradlew runClient")," to start Minecraft."),(0,a.kt)("li",{parentName:"ol"},"Create or join a world with cheats enabled."),(0,a.kt)("li",{parentName:"ol"},"Switch to creative mode with ",(0,a.kt)("inlineCode",{parentName:"li"},"/gamemode creative"),"."),(0,a.kt)("li",{parentName:"ol"},'Open the inventory and look for the "Modonomicon" creative tab or the search tab.'),(0,a.kt)("li",{parentName:"ol"},"There will be two purple books - the builtin modonomicon demos - and one red book, the one we just generated."),(0,a.kt)("li",{parentName:"ol"},"Take it into your hotbar and take a look at it",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You will notice a weird text for the name and tooltip: ",(0,a.kt)("inlineCode",{parentName:"li"},"book.modonomicon_demo_book.demo.name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"book.modonomicon_demo_book.demo.tooltip")," This is because we haven't added any translations yet."))),(0,a.kt)("li",{parentName:"ol"},"Right click with the book in hand."),(0,a.kt)("li",{parentName:"ol"},"Crash! That's ok - if we do not add any categories the book does not know what to display. Let's fix that!")),(0,a.kt)("h2",{id:"our-first-category"},"Our first Category"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"DemoBookProvider.java"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following code to the bottom of the file, before the last ",(0,a.kt)("inlineCode",{parentName:"p"},"}"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private BookCategoryModel makeFeaturesCategory(BookLangHelper helper) {\n    helper.category("features"); //tell our lang helper the category we are in\n\n    //the entry helper is the second helper for book datagen\n    //it allows us to place entries in the category without manually defining the coordinates.\n    //each letter can be used to represent an entry\n    var entryHelper = ModonomiconAPI.get().getEntryLocationHelper();\n    entryHelper.setMap(\n            "_____________________",\n            "__m______________d___",\n            "__________r__________",\n            "__c__________________",\n            "__________2___3___i__",\n            "__s_____e____________"\n    );\n\n    return BookCategoryModel.builder()\n            .withId(this.modLoc(helper.category)) //the id of the category, as stored in the lang helper. modLoc() prepends the mod id.\n            .withName(helper.categoryName()) //the name of the category. The lang helper gives us the correct translation key.\n            .withIcon("minecraft:nether_star") //the icon for the category. In this case we simply use an existing item.\n            .build();\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we need to add our category to the book. In ",(0,a.kt)("inlineCode",{parentName:"p"},"makeDemoBook")," add:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"below ",(0,a.kt)("inlineCode",{parentName:"li"},"helper.book(bookName);"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"var featuresCategory = this.makeFeaturesCategory(helper);\n"))),(0,a.kt)("li",{parentName:"ol"},"below ",(0,a.kt)("inlineCode",{parentName:"li"},'.withCreativeTab("modonomicon")'),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},".withCategories(featuresCategory) \n")))))),(0,a.kt)("p",null,'This will create a category with the id "features" using a nether star as icon and add it to our book. See also ',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/modonomicon/docs/basics/structure/categories#attributes"},"Categories"))," to learn more about the other attributes of a category, and how icons work.    "),(0,a.kt)("p",null,"We also already set up the entryHelper which gives us an idea where entries will be shown in the category in-game."),(0,a.kt)("p",null,"Let's see if that fixed our crash:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the terminal, run ",(0,a.kt)("inlineCode",{parentName:"li"},"./gradlew runData")," to generate the json file(s)."),(0,a.kt)("li",{parentName:"ol"},"After it is complete, run ",(0,a.kt)("inlineCode",{parentName:"li"},"./gradlew runClient")," to start Minecraft."),(0,a.kt)("li",{parentName:"ol"},"Re-join our old world."),(0,a.kt)("li",{parentName:"ol"},"Right click with the book in hand."),(0,a.kt)("li",{parentName:"ol"},"Et voila:\n",(0,a.kt)("img",{alt:"Category",src:o(9715).Z,width:"1920",height:"1009"})),(0,a.kt)("li",{parentName:"ol"},"Success! No crash, but no content either. Not too bad, right?"),(0,a.kt)("li",{parentName:"ol"},"You will notice that when hovering over the category's button on the left side we again have a weird text instead of a nice category name - no worries, we'll fix that later!")),(0,a.kt)("h2",{id:"our-first-entry"},"Our first Entry"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"DemoBookProvider.java"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Add the following code to the bottom of the file, before the last ",(0,a.kt)("inlineCode",{parentName:"li"},"}"),":")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private BookEntryModel makeMultiblockEntry(BookLangHelper helper, EntryLocationHelper entryHelper, char location) {\n    helper.entry("multiblock"); //tell our lang helper the entry we are in\n\n    helper.page("intro"); //and now the page\n    var multiBlockIntroPage =\n            BookTextPageModel.builder() //we start with a text page\n            .withText(helper.pageText()) //lang key for the text\n            .withTitle(helper.pageTitle()) //and for the title\n            .build();\n\n    helper.page("multiblock"); //next page\n    var multiblockPreviewPage =\n            BookMultiblockPageModel.builder() //now a page to show a multiblock\n            .withMultiblockId("modonomicon:blockentity") //sample multiblock from modonomicon\n            .withMultiblockName("multiblocks.modonomicon.blockentity") //and the lang key for its name\n            .withText(helper.pageText()) //plus a page text\n            .build();\n\n    return BookEntryModel.builder()\n            .withId(this.modLoc(helper.category + "/" + helper.entry)) //make entry id from lang helper data\n            .withName(helper.entryName()) //entry name lang key\n            .withDescription(helper.entryDescription()) //entry description lang key\n            .withIcon("minecraft:furnace") //we use furnace as icon\n            .withLocation(entryHelper.get(location)) //and we place it at the location we defined earlier in the entry helper mapping\n            .withPages(multiBlockIntroPage, multiblockPreviewPage) //finally we add our pages to the entry\n            .build();\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we need to add our entry to the features category. In ",(0,a.kt)("inlineCode",{parentName:"p"},"makeFeaturesCategory")," add:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"below ",(0,a.kt)("inlineCode",{parentName:"li"},"entryHelper.setMap( ... );"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"//place the multiblock entry where we put the \"m\" in the map above\nvar multiblockEntry = this.makeMultiblockEntry(helper, entryHelper, 'm');\n"))),(0,a.kt)("li",{parentName:"ol"},"below ",(0,a.kt)("inlineCode",{parentName:"li"},'.withIcon("minecraft:nether_star")'),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},".withEntries(multiblockEntry)\n")))))),(0,a.kt)("p",null,"This will create an entry with a text page and a page that displays a multiblock.\nText and title properties can be skipped, then the page will simply not use them. Especially pages with content like multiblocks or recipes may not need a text, or are better off without a text because there is only very little space on the page, and you can always add additional text pages to explain things in more detail."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For now let's not worry about multiblocks - we're using a demo one that comes with modonomicon. Later you can define your own multiblocks.")),(0,a.kt)("p",null,"Let's take a look at our entry!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the terminal, run ",(0,a.kt)("inlineCode",{parentName:"li"},"./gradlew runData")," to generate the json file(s)."),(0,a.kt)("li",{parentName:"ol"},"After it is complete, run ",(0,a.kt)("inlineCode",{parentName:"li"},"./gradlew runClient")," to start Minecraft."),(0,a.kt)("li",{parentName:"ol"},"Re-join our old world."),(0,a.kt)("li",{parentName:"ol"},"Right click with the book in hand."),(0,a.kt)("li",{parentName:"ol"},"Find and click the entry in the book (you may have to zoom/pan to find it)\n",(0,a.kt)("img",{alt:"Entry",src:o(3106).Z,width:"1920",height:"1009"})),(0,a.kt)("li",{parentName:"ol"},"Still no nice texts, but we see a multiblock, so that's pretty good, right?")),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"You can view the final code for this step in the branch for step 3: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/klikli-dev/modonomicon-demo-book/tree/guide/step3"},"https://github.com/klikli-dev/modonomicon-demo-book/tree/guide/step3")," "),(0,a.kt)("p",null,'Using the green "Code" Button and "Download ZIP" you can download the code for this step as a zip file to compare to your code.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is no branch for step 2, because that was only reviewing the files you downloaded in step 1!")))}m.isMDXComponent=!0},9715:function(e,t,o){t.Z=o.p+"assets/images/step3-create-category-28a641dcc27b41aa45694a71b4537765.png"},3106:function(e,t,o){t.Z=o.p+"assets/images/step3-create-entry-eaa2c11fdbcd15cb6eb992b668e9f02a.png"}}]);