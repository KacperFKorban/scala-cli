(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||i;return t?a.a.createElement(m,o(o({ref:n},p),{},{components:t})):a.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(102)),c={title:"Dependency format",sidebar_position:4},o={unversionedId:"reference/dependency",id:"reference/dependency",isDocsHomePage:!1,title:"Dependency format",description:"- Same as mill",source:"@site/docs/reference/dependency.md",sourceDirName:"reference",slug:"/reference/dependency",permalink:"/scala-cli/docs/reference/dependency",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/reference/dependency.md",version:"current",sidebarPosition:4,frontMatter:{title:"Dependency format",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/scala-cli/docs/reference/commands"},next:{title:"Working directory",permalink:"/scala-cli/docs/reference/working-dir"}},l=[],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Same as mill")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"first ",Object(i.b)("inlineCode",{parentName:"p"},":"),": scala version suffix"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"single ",Object(i.b)("inlineCode",{parentName:"li"},":"),": no scala version suffix"),Object(i.b)("li",{parentName:"ul"},"double ",Object(i.b)("inlineCode",{parentName:"li"},"::"),": scala binary version suffix"),Object(i.b)("li",{parentName:"ul"},"triple ",Object(i.b)("inlineCode",{parentName:"li"},":::"),": full scala version suffix"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"second ",Object(i.b)("inlineCode",{parentName:"p"},":"),": scala platform suffix"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"single ",Object(i.b)("inlineCode",{parentName:"li"},":"),": no platform suffix"),Object(i.b)("li",{parentName:"ul"},"double ",Object(i.b)("inlineCode",{parentName:"li"},"::"),": platform suffix if any")))))}u.isMDXComponent=!0}}]);