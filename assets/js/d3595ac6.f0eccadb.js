(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(f,o(o({ref:t},p),{},{components:n})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(102)),c={title:"Scala Native",sidebar_position:12},o={unversionedId:"scala-native",id:"scala-native",isDocsHomePage:!1,title:"Scala Native",description:"- requires LLVM toolchain, see requirements on Scala Native website",source:"@site/docs/scala-native.md",sourceDirName:".",slug:"/scala-native",permalink:"/scala-cli/docs/scala-native",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/scala-native.md",version:"current",sidebarPosition:12,frontMatter:{title:"Scala Native",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Scala.JS",permalink:"/scala-cli/docs/scala-js"},next:{title:"Running benchmarks",permalink:"/scala-cli/docs/misc/benchmarking"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"requires LLVM toolchain, see requirements on Scala Native website")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"enable it either on the command-line, or in conf file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beware platform dependencies")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"compile")," / ",Object(i.b)("inlineCode",{parentName:"p"},"run")," / ",Object(i.b)("inlineCode",{parentName:"p"},"test")," / ",Object(i.b)("inlineCode",{parentName:"p"},"package")," should all work"))))}s.isMDXComponent=!0}}]);