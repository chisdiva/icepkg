"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[460],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1119:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(79),r=n(9841);const l="tabItem_z081";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},4124:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7583),r=n(79),l=n(9841),s=n(6935),i=n(8737),o=n(5474),u=n(7880),p=n(9096);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=k({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=o??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=n(672);const g="tabList_lGTq",N="tabItem_JixC";function v(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",N,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7583),r=(n(79),n(8570)),l=n(4124),s=n(1119);const i={},o="\u6784\u5efa\u80fd\u529b",u={unversionedId:"guide/abilities",id:"guide/abilities",title:"\u6784\u5efa\u80fd\u529b",description:"\u53cc\u6a21\u5f0f\u6784\u5efa",source:"@site/docs/guide/abilities.md",sourceDirName:"guide",slug:"/guide/abilities",permalink:"/guide/abilities",draft:!1,editUrl:"https://github.com/ice-lab/icepkg/tree/main/website/docs/docs/guide/abilities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/quick-start"},next:{title:"\u6784\u5efa\u573a\u666f",permalink:"/guide/scenarios"}},p={},c=[{value:"\u53cc\u6a21\u5f0f\u6784\u5efa",id:"\u53cc\u6a21\u5f0f\u6784\u5efa",level:2},{value:"Transform \u6a21\u5f0f",id:"transform-\u6a21\u5f0f",level:3},{value:"Bundle \u6a21\u5f0f",id:"bundle-\u6a21\u5f0f",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"JSX",id:"jsx",level:2},{value:"CSS",id:"css",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u9884\u5904\u7406\u5668",id:"\u9884\u5904\u7406\u5668",level:3},{value:"CSS Modules",id:"css-modules",level:3},{value:"ES2017 \u4ea7\u7269",id:"es2017-\u4ea7\u7269",level:2},{value:"\u751f\u6210\u7c7b\u578b\u6587\u4ef6",id:"\u751f\u6210\u7c7b\u578b\u6587\u4ef6",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6784\u5efa\u80fd\u529b"},"\u6784\u5efa\u80fd\u529b"),(0,r.kt)("h2",{id:"\u53cc\u6a21\u5f0f\u6784\u5efa"},"\u53cc\u6a21\u5f0f\u6784\u5efa"),(0,r.kt)("p",null,"ICE PKG \u539f\u751f\u63d0\u4f9b Transform \u6784\u5efa\u6a21\u5f0f\u548c Bundle \u6784\u5efa\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u7684\u5f00\u53d1\u9700\u6c42\u4f7f\u7528\u5bf9\u5e94\u7684\u6784\u5efa\u6a21\u5f0f\u3002"),(0,r.kt)("h3",{id:"transform-\u6a21\u5f0f"},"Transform \u6a21\u5f0f"),(0,r.kt)("p",null,"Transform \u6a21\u5f0f\u5373\u628a\u6e90\u6587\u4ef6\u9010\u4e2a\u7f16\u8bd1\u5230\u8f93\u51fa\u76ee\u5f55\uff0c\u4e0d\u5bf9\u4f9d\u8d56\u505a\u4efb\u4f55\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709\u4ee5\u4e0b\u7684\u6587\u4ef6\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"src\n\u251c\u2500\u2500 components\n|  \u251c\u2500\u2500 About.jsx\n|  \u2514\u2500\u2500 Button.tsx\n\u251c\u2500\u2500 index.ts\n\u251c\u2500\u2500 util.js\n\u2514\u2500\u2500 index.scss\n")),(0,r.kt)("p",null,"\u7ecf\u8fc7 ICE PKG \u6784\u5efa\u540e\uff0c\u5f97\u5230\u4ee5\u4e0b\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"esm\n\u251c\u2500\u2500 components\n|  \u251c\u2500\u2500 About.js\n|  \u251c\u2500\u2500 Button.d.ts\n|  \u2514\u2500\u2500 Button.js\n\u251c\u2500\u2500 index.d.ts\n\u251c\u2500\u2500 index.ts\n\u251c\u2500\u2500 util.js\n\u251c\u2500\u2500 index.scss\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5728 Transform \u6a21\u5f0f\u4e0b\uff0cICE PKG \u5bf9\u6e90\u6587\u4ef6\u7684\u5904\u7406\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e TypeScript \u6587\u4ef6\uff0c\u5c06\u4f1a\u88ab\u7f16\u8bd1\u6210 JavaScript \u6587\u4ef6\uff0c\u5e76\u8f93\u51fa\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"d.ts")," \u7c7b\u578b\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e TSX \u548c JSX \u6587\u4ef6\u6765\u8bf4\uff0c\u5c06\u4f1a\u88ab\u7f16\u8bd1\u6210 JavaScript \u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e JavaScript \u6587\u4ef6\uff0c\u5c06\u4f1a\u8fdb\u884c\u8bed\u6cd5\u7f16\u8bd1"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff08\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},".css"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".scss")," \u7b49\u7b49\uff09\uff0c\u4e0d\u505a\u4efb\u4f55\u7f16\u8bd1\u64cd\u4f5c\uff0c\u5c06\u4f1a\u88ab\u76f4\u63a5\u62f7\u8d1d\u5230\u8f93\u51fa\u76ee\u5f55")),(0,r.kt)("p",null,"Transform \u6a21\u5f0f\u4e0b\u8f93\u51fa\u7684\u4ea7\u7269\u5177\u6709\u8f83\u597d\u7684\u8c03\u8bd5\u6027\uff0c\u5e76\u4e14\u5bf9 Tree-Shaking \u53cb\u597d\u3002\u9002\u7528\u4e8e\u5927\u90e8\u5206\u5f00\u53d1 React/Rax \u7ec4\u4ef6\u6216\u8005 Node \u6a21\u5757\u573a\u666f\u3002"),(0,r.kt)("h3",{id:"bundle-\u6a21\u5f0f"},"Bundle \u6a21\u5f0f"),(0,r.kt)("p",null,"Bundle \u6a21\u5f0f\u5373\u4ee5\u5165\u53e3\u6587\u4ef6\u4f5c\u4e3a\u8d77\u70b9\uff0c\u9012\u5f52\u5904\u7406\u5404\u79cd\u6a21\u5757\uff0c\u6700\u7ec8\u628a\u76f8\u540c\u7c7b\u578b\u7684\u6587\u4ef6\u5408\u5e76\u6210\u4e00\u4e2a\u6784\u5efa\u4ea7\u7269\u3002\u76ee\u524d ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://rollupjs.org"},"Rollup")," \u7b49\u5c31\u662f\u5bf9\u6e90\u7801\u8fdb\u884c\u6253\u5305\u6784\u5efa\u7684\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709\u4ee5\u4e0b\u7684\u6587\u4ef6\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 components\n|  \u2514\u2500\u2500 Button.tsx\n\u251c\u2500\u2500 index.tsx\n\u2514\u2500\u2500 index.scss\n")),(0,r.kt)("p",null,"\u7ecf\u8fc7 ICE PKG \u6784\u5efa\u540e\uff0c\u5f97\u5230\u4ee5\u4e0b\u7684\u6784\u5efa\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dist\n\u251c\u2500\u2500 index.esm.es2017.production.js\n\u2514\u2500\u2500 index.esm.es2017.production.css\n")),(0,r.kt)("p",null,"Bundle \u6a21\u5f0f\u4e0b\u8f93\u51fa\u7684\u4ea7\u7269\u4e0d\u9700\u8981\u989d\u5916\u4f9d\u8d56\u5176\u4ed6\u6a21\u5757\uff08\u4e0d\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"external")," \u60c5\u51b5\u4e0b\uff09\uff0c\u4e00\u822c\u9002\u7528\u4e8e\u524d\u7aef\u7c7b\u5e93\u8981\u6253\u5305\u6210 UMD \u683c\u5f0f\u4ea7\u7269\u6216\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u5bfc\u5165\u6784\u5efa\u4ea7\u7269\u7b49\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"ICE PKG \u539f\u751f\u652f\u6301\u5f15\u5165\u548c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," \u6587\u4ef6\u3002\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://swc.rs/docs/configuration/swcrc"},"SWC")," \u8fdb\u884c\u7f16\u8bd1\uff0c\u76f8\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," \u6709\u7740\u6570\u5341\u500d\u7684\u7f16\u8bd1\u901f\u5ea6\u63d0\u5347\uff0c\u540c\u65f6\u70ed\u66f4\u65b0\u7684\u65f6\u95f4\u4e5f\u6709\u660e\u663e\u7684\u51cf\u5c11\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528\u7684\u4e00\u4e9b\u6a21\u5757\uff08\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},".module.css"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".jpg")," \u7b49\uff09\u6216\u8005\u5168\u5c40\u53d8\u91cf\uff08\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u7b49\uff09\u7c7b\u578b\u662f\u672a\u5b9a\u4e49\u7684\uff0c\u5728\u7f16\u8f91\u5668\u4e2d\u662f\u6709\u62a5\u9519\u63d0\u793a\u3002\u4e3a\u6b64 ICE PKG \u9ed8\u8ba4\u63d0\u4f9b\u4e00\u4efd\u7c7b\u578b\u58f0\u660e\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u65b0\u589e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"d.ts")," \u7c7b\u578b\u58f0\u660e\u6587\u4ef6\u5e76\u52a0\u5165\u4ee5\u4e0b\u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/typings.d.ts"',title:'"src/typings.d.ts"'},'/// <reference types="@ice/pkg/types" />\n')),(0,r.kt)("h2",{id:"jsx"},"JSX"),(0,r.kt)("p",null,"ICE PKG \u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},".jsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx")," \u540c\u6837\u4e5f\u662f\u539f\u751f\u652f\u6301\u7684\u3002JSX \u7684\u7f16\u8bd1\u540c\u6837\u4e5f\u662f\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://swc.rs/docs/configuration/swcrc"},"SWC"),"\u3002"),(0,r.kt)("h2",{id:"css"},"CSS"),(0,r.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("p",null,"\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u4e0b\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"index.css"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," \u5f15\u5165\u6837\u5f0f\u6587\u4ef6\u3002\u5982\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"index.tsx",label:"src/index.tsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport './a.css';\n\nexport default function Home() {\n  return (\n    <div className=\"container\"></div>\n  )\n}\n"))),(0,r.kt)(s.Z,{value:"index.css",label:"src/index.css",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  color: red;\n}\n")))),(0,r.kt)("h3",{id:"\u9884\u5904\u7406\u5668"},"\u9884\u5904\u7406\u5668"),(0,r.kt)("p",null,"ICE PKG \u5185\u7f6e\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},".scss"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".less"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".sass")," \u6587\u4ef6\uff0c\u4f7f\u7528\u65b9\u5f0f\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},".css")," \u6587\u4ef6\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u5728\u5f00\u542f Bundle \u6a21\u5f0f\u540e\uff0c\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684\u9884\u5904\u7406\u5668\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# .scss and .sass\nnpm add -D sass\n\n# .less\nnpm add -D less\n")),(0,r.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,r.kt)("p",null,"ICE PKG \u4e5f\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules"),"\uff0c\u6837\u5f0f\u6587\u4ef6\u9700\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},".module.css"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},".module.less")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},".module.scss")," \u7ed3\u5c3e\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"index.tsx",label:"src/index.tsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import styles from './index.module.css';\n\nexport default () => (\n  <div className={styles.root}>\n    <div className={styles.item}>Hello</div>\n  </div>\n);\n"))),(0,r.kt)(s.Z,{value:"index.module.css",label:"src/index.module.css",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".root {\n  display: flex;\n}\n.item {\n  color: red;\n}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728\u7ec4\u4ef6\u91cc\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"import './index.css'")," \u7684\u65b9\u5f0f\u5f15\u5165\u6837\u5f0f\uff0c\u6837\u5f0f\u5c06\u4f1a\u5bf9\u5168\u5c40\u6837\u5f0f\u9020\u6210\u5f71\u54cd\u3002\u6700\u597d\u7ed9\u8be5\u7ec4\u4ef6\u5185\u6240\u6709\u7684 CSS \u9009\u62e9\u5668\u589e\u52a0\u524d\u7f00\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- .container {\n+ .rc-container { \n  color: red;  \n}\n")),(0,r.kt)("p",{parentName:"admonition"},"\u6216\u8005\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 CSS Modules \u76f4\u63a5\u5f15\u5165\u6837\u5f0f\u3002")),(0,r.kt)("h2",{id:"es2017-\u4ea7\u7269"},"ES2017 \u4ea7\u7269"),(0,r.kt)("p",null,"ICE PKG \u652f\u6301\u989d\u5916\u8f93\u51fa ES2017 \u89c4\u8303\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://web.dev/publish-modern-javascript/"},"Modern \u4ea7\u7269"),"\u3002\u8fd9\u4efd\u4ea7\u7269\u5728\u7f16\u8bd1\u65f6\u4f1a\u4fdd\u7559\u5927\u90e8\u5206\u7684 JavaScript \u8bed\u6cd5\u7279\u6027\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class"),(0,r.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"async/await"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u6784"),(0,r.kt)("li",{parentName:"ul"},"spread \u8fd0\u7b97\u7b26"),(0,r.kt)("li",{parentName:"ul"},"Generator")),(0,r.kt)("p",null,"\u4f46\u53ef\u4ee5\u8fd0\u884c\u5728",(0,r.kt)("a",{parentName:"p",href:"https://caniuse.com/async-functions,object-values,object-entries,mdn-javascript_builtins_object_getownpropertydescriptors,pad-start-end,mdn-javascript_grammar_trailing_commas_trailing_commas_in_functions"},"\u5927\u90e8\u5206\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\u7248\u672c"),"\u4e0a\uff08\u5e02\u573a\u4efd\u989d > 95%\uff09\u3002\u5f53\u7f51\u7ad9\u4e0d\u518d\u8f6c\u8bd1\u8fd9\u4e9b\u8bed\u6cd5\u65f6\uff0c\u6587\u4ef6\u7684\u5b57\u8282\u6570\u5f97\u4ee5\u5927\u5e45\u51cf\u5c11\uff0c\u4ece\u800c\u6781\u5927\u5730\u6539\u5584\u811a\u672c\u52a0\u8f7d\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u9762\u4e00\u4e2a\u7b80\u5355\u7684 React \u7ec4\u4ef6\u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const addCount = useCallback(() => {\n    setCount((c: number) => c + 1);\n  }, [count]);\n\n  return (\n    <div>\n      <button onClick={addCount}>Add Count</button>\n      <p>{count}</p>\n    </div>\n  );\n};\n\nexport default App;\n")),(0,r.kt)("p",null,"\u8f93\u51fa ES2017 \u4ea7\u7269\u4e0e ES5 \u4ea7\u7269\u7684\u5927\u5c0f\u5bf9\u6bd4\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u4ea7\u7269"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5927\u5c0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ES2017 \u4ea7\u7269"),(0,r.kt)("td",{parentName:"tr",align:null},"1.8k")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ES5 \u4ea7\u7269"),(0,r.kt)("td",{parentName:"tr",align:null},"3.7k")))),(0,r.kt)("p",null,"\u5e76\u4e14\uff0c\u4ea7\u7269\u5927\u5c0f\u4f1a\u968f\u7740\u4f7f\u7528\u7684\u73b0\u4ee3\u8bed\u6cd5\u7279\u6027\u589e\u591a\uff0c\u5dee\u8ddd\u53d8\u5f97\u8d8a\u6765\u8d8a\u5927\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4f20\u7edf\u7684 NPM \u5305 \u5f00\u53d1\u4e2d\uff0c\u5927\u91cf\u7684\u4ee3\u7801\u4ecd\u88ab\u7f16\u8bd1\u5230 ES5 \u8bed\u6cd5\u3002\u82e5\u4f60\u60f3\u8ba1\u7b97\u4f60\u7684\u7f51\u7ad9\u5728\u4f7f\u7528 es2017 \u4ea7\u7269\u540e\u53ef\u5b9e\u73b0\u7684\u4ea7\u7269\u5927\u5c0f\u548c\u6027\u80fd\u7684\u6539\u8fdb\uff0c\u53ef\u4ee5\u8bd5\u8bd5 ",(0,r.kt)("a",{parentName:"p",href:"https://estimator.dev/"},"estimator.dev")," \u8fd9\u4e2a\u5de5\u5177\u3002")),(0,r.kt)("p",null,"\u5728 ICE PKG \u4ec5\u914d\u7f6e\u8f93\u51fa ES2017 \u4ea7\u7269\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="build.config.mts"',title:'"build.config.mts"'},"import { defineConfig } from '@ice/pkg';\n\nexport default defineConfig({\n  // Transform \u6a21\u5f0f\u8f93\u51fa es2017 \u4ea7\u7269\n  transform: {\n    formats: ['es2017'],\n  },\n  // Bundle \u6a21\u5f0f\u8f93\u51fa es2017 \u4ea7\u7269\n  bundle: {\n    formats: ['esm', 'es2017'],\n  },\n});\n")),(0,r.kt)("h2",{id:"\u751f\u6210\u7c7b\u578b\u6587\u4ef6"},"\u751f\u6210\u7c7b\u578b\u6587\u4ef6"),(0,r.kt)("p",null,"ICE PKG \u9ed8\u8ba4\u4e3a TypeScript \u751f\u6210\u7c7b\u578b\u6587\u4ef6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u65e0\u9700\u4e3b\u52a8\u5f00\u542f"),"\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u7528\u6237\u53ef\u80fd\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"JSDoc")," \u4e3a JavaScript \u751f\u6210\u6ce8\u89e3\uff0c\u4f60\u53ef\u4ee5\u4e3b\u52a8\u5f00\u542f\u4e3a JavaScript \u4ee3\u7801\u751f\u6210\u7c7b\u578b\u6587\u4ef6\u7684\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," \u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"JSDoc")," \u8fdb\u884c\u7c7b\u578b\u6ce8\u89e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param {number} a\n * @param {number} b\n * @returns {number}\n */\nexport function add(a, b) {\n  return a + b;\n}\n")),(0,r.kt)("p",null,"\u4e3a JavaScript \u6587\u4ef6\u5f00\u542f ",(0,r.kt)("a",{parentName:"p",href:"../reference/config#generatetypesforjs"},"generateTypesForJs")," \u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@ice/pkg';\n\nexport default defineConfig({\n  generateTypesForJs: true,\n});\n")),(0,r.kt)("p",null,"\u5219\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"add.d.ts")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export function add(a: number, b: number): number;\n")),(0,r.kt)("admonition",{title:"\u8c28\u614e\u4f7f\u7528\u8be5\u914d\u7f6e",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u82e5\u8d38\u7136\u4e3a\u6ca1\u6709\u4f7f\u7528 JSDoc \u6ce8\u89e3\u7684 JavaScript \u4ee3\u7801\u5f00\u542f\u8be5\u914d\u7f6e\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u81ea\u52a8\u7c7b\u578b\u63a8\u65ad\u9519\u8bef\u7684\u60c5\u51b5\u3002")))}m.isMDXComponent=!0}}]);