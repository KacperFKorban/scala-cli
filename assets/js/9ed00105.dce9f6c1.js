(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return t?r.a.createElement(m,o(o({ref:n},s),{},{components:t})):r.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(103)),c={title:"Configuration",sidebar_position:4},o={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"scala-cli can be configured in several ways:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/scala-cli/docs/configuration",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/configuration.md",version:"current",sidebarPosition:4,frontMatter:{title:"Configuration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Input format",permalink:"/scala-cli/docs/input"},next:{title:"Compile",permalink:"/scala-cli/docs/compile"}},l=[{value:"Command-line",id:"command-line",children:[]},{value:"Special imports",id:"special-imports",children:[]},{value:"Using directives",id:"using-directives",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"scala-cli")," can be configured in several ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"on the command-line"),Object(i.b)("li",{parentName:"ul"},"directly in ",Object(i.b)("inlineCode",{parentName:"li"},".scala")," and ",Object(i.b)("inlineCode",{parentName:"li"},".sc")," files")),Object(i.b)("p",null,"Parameters on the command-line take precedence over parameters in sources.\nThat way, you can quickly override parameters from the command-line."),Object(i.b)("p",null,"Note that the configuration options and syntax in ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," files is likely\nto evolve in the future."),Object(i.b)("h2",{id:"command-line"},"Command-line"),Object(i.b)("p",null,"Pass ",Object(i.b)("inlineCode",{parentName:"p"},"--help")," to any sub-command of ",Object(i.b)("inlineCode",{parentName:"p"},"scala-cli")," to list its options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"scala-cli --help\nscala-cli package --help\n")),Object(i.b)("p",null,"For example, you can specify the Scala version, or add dependencies, on the command-line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"scala-cli --scala 3.0.0 Test.scala\nscala-cli --dependency org.typelevel::cats-core:2.3.0 Test.scala\n")),Object(i.b)("p",null,"The reference documentation lists ",Object(i.b)("a",{parentName:"p",href:"/scala-cli/docs/reference/cli-options"},"all available options"),"."),Object(i.b)("h2",{id:"special-imports"},"Special imports"),Object(i.b)("p",null,"Dependencies can be added right from ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," and ",Object(i.b)("inlineCode",{parentName:"p"},".sc")," files, using the same\nsyntax as Ammonite and Metals worksheets:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},"import $dep.`com.lihaoyi::upickle:1.4.0`\nimport $ivy.`com.lihaoyi::pprint:0.6.6`\nimport ujson._\n")),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"import $ivy")," and ",Object(i.b)("inlineCode",{parentName:"p"},"import $dep")," are accepted, and are equivalent."),Object(i.b)("h2",{id:"using-directives"},"Using directives"),Object(i.b)("p",null,"Scala CLI can be configured from ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," files. You can specify ",Object(i.b)("inlineCode",{parentName:"p"},"using")," directives at the\ntop of a ",Object(i.b)("inlineCode",{parentName:"p"},".scala")," file, before any ",Object(i.b)("inlineCode",{parentName:"p"},"package")," or ",Object(i.b)("inlineCode",{parentName:"p"},"import")," statement."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scala"},"using scala 2.13\nusing scala-js\nusing options -Xasync\n")),Object(i.b)("p",null,"The reference documentation lists ",Object(i.b)("a",{parentName:"p",href:"/scala-cli/docs/reference/directives#using-directives"},"all available using directives"),"."))}p.isMDXComponent=!0}}]);