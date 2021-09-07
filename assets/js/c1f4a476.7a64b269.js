(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{102:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return m}));var t=n(0),r=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||l;return n?r.a.createElement(m,i(i({ref:a},s),{},{components:n})):r.a.createElement(m,i({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return i})),n.d(a,"toc",(function(){return o})),n.d(a,"default",(function(){return p}));var t=n(3),r=n(7),l=(n(0),n(102)),c={title:"Run",sidebar_position:6},i={unversionedId:"run",id:"run",isDocsHomePage:!1,title:"Run",description:"The run command offers to run your Scala code:",source:"@site/docs/run.md",sourceDirName:".",slug:"/run",permalink:"/scala-cli/docs/run",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/run.md",version:"current",sidebarPosition:6,frontMatter:{title:"Run",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/scala-cli/docs/compile"},next:{title:"Test",permalink:"/scala-cli/docs/test"}},o=[{value:"Passing arguments",id:"passing-arguments",children:[]},{value:"Main class",id:"main-class",children:[]},{value:"Custom JVM",id:"custom-jvm",children:[]},{value:"Scala.JS",id:"scalajs",children:[]},{value:"Scala Native",id:"scala-native",children:[]},{value:"ScalaCli from docker",id:"scalacli-from-docker",children:[]}],s={toc:o};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"run")," command offers to run your Scala code:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli run Hello.scala\n# Hello\n')),Object(l.b)("p",null,"This is the default command, so you're not required to specify it explicitly:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n# Hello\n")),Object(l.b)("h2",{id:"passing-arguments"},"Passing arguments"),Object(l.b)("p",null,"You can pass arguments to the application you're launching after ",Object(l.b)("inlineCode",{parentName:"p"},"--"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"scala-cli MyApp.scala -- first-arg second-arg\n# MyApp called with arguments: first-arg second-arg\n")),Object(l.b)("h2",{id:"main-class"},"Main class"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--main-class")," allows to specify an explicit main class, in case your application\ndefines several main classes for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-app/ --main-class app.Main\n")),Object(l.b)("p",null,"If you application only defines a single main class, you can just omit ",Object(l.b)("inlineCode",{parentName:"p"},"--main-class"),"."),Object(l.b)("h2",{id:"custom-jvm"},"Custom JVM"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--jvm")," allows to run your application with a custom JVM:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-app/ --jvm adopt:14\n")),Object(l.b)("p",null,"JVMs are ",Object(l.b)("a",{parentName:"p",href:"https://get-coursier.io/docs/cli-java#managed-jvms"},"managed by coursier"),"."),Object(l.b)("h2",{id:"scalajs"},"Scala.JS"),Object(l.b)("p",null,"Scala.JS applications can also be compiled and run, with the ",Object(l.b)("inlineCode",{parentName:"p"},"--js")," option. Note that this requires ",Object(l.b)("inlineCode",{parentName:"p"},"node"),"\nto be installed on your system."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-scala-js-app/ --js\n")),Object(l.b)("h2",{id:"scala-native"},"Scala Native"),Object(l.b)("p",null,"Scala Native applications can also be compiled and run, with the ",Object(l.b)("inlineCode",{parentName:"p"},"--native")," option.\nNote that the ",Object(l.b)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"Scala Native requirements")," need to be installed for this to work fine,\nand that Scala Native only supports Linux and macOS for now."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-scala-native-app/ --native\n")),Object(l.b)("h2",{id:"scalacli-from-docker"},"ScalaCli from docker"),Object(l.b)("p",null,"Scala applications can also be compiled and run using docker image with ",Object(l.b)("inlineCode",{parentName:"p"},"scala-cli"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"docker run ghcr.io/virtuslabrnd/scala-cli:latest about\n")),Object(l.b)("h3",{id:""}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'cat HelloWorld.scala\n# object HelloWorld extends App {\n#     println("Hello world")\n# }\ndocker run  -v $(pwd)/HelloWorld.scala:/HelloWorld.scala ghcr.io/virtuslabrnd/scala-cli /HelloWorld.scala \n# Hello world\n')))}p.isMDXComponent=!0}}]);