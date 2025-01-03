"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[922],{8570:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1119:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(79),a=n(9841);const l="tabItem_z081";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4124:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7583),a=n(79),l=n(9841),o=n(6935),i=n(8737),u=n(5474),s=n(7880),c=n(9096);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var k=n(672);const g="tabList_lGTq",x="tabItem_JixC";function h(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",x,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},7659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7583),a=(n(79),n(8570)),l=n(4124),o=n(1119);const i={},u="\u6784\u5efa\u573a\u666f",s={unversionedId:"guide/scenarios",id:"guide/scenarios",title:"\u6784\u5efa\u573a\u666f",description:"ICE PKG \u9ed8\u8ba4\u652f\u6301 React \u7ec4\u4ef6\u3001Rax \u7ec4\u4ef6\u3001Node \u6a21\u5757\u3001\u524d\u7aef\u7c7b\u5e93\u7814\u53d1\u573a\u666f\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a",source:"@site/docs/guide/scenarios.md",sourceDirName:"guide",slug:"/guide/scenarios",permalink:"/guide/scenarios",draft:!1,editUrl:"https://github.com/ice-lab/icepkg/tree/main/website/docs/docs/guide/scenarios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u80fd\u529b",permalink:"/guide/abilities"},next:{title:"\u6784\u5efa\u4ea7\u7269",permalink:"/guide/build"}},c={},p=[{value:"React \u7ec4\u4ef6",id:"react-\u7ec4\u4ef6",level:2},{value:"Node \u6a21\u5757",id:"node-\u6a21\u5757",level:2},{value:"\u524d\u7aef\u7c7b\u5e93",id:"\u524d\u7aef\u7c7b\u5e93",level:2},{value:"Rax \u7ec4\u4ef6",id:"rax-\u7ec4\u4ef6",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6784\u5efa\u573a\u666f"},"\u6784\u5efa\u573a\u666f"),(0,a.kt)("p",null,"ICE PKG \u9ed8\u8ba4\u652f\u6301 React \u7ec4\u4ef6\u3001Rax \u7ec4\u4ef6\u3001Node \u6a21\u5757\u3001\u524d\u7aef\u7c7b\u5e93\u7814\u53d1\u573a\u666f\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init @ice/pkg my-lib\n")),(0,a.kt)("p",null,"\u6839\u636e\u5b9e\u9645\u7814\u53d1\u9700\u6c42\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u811a\u624b\u67b6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u9879\u76ee\u7c7b\u578b (Use arrow keys)\n\u276f React \u7ec4\u4ef6\n  Node \u6a21\u5757\n  \u524d\u7aef\u7c7b\u5e93  \n  Rax \u7ec4\u4ef6\n")),(0,a.kt)("h2",{id:"react-\u7ec4\u4ef6"},"React \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u591a\u4e2a\u4e0d\u540c\u7684\u9879\u76ee\u4e2d\u5171\u540c\u4f7f\u7528\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a React \u7ec4\u4ef6\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8003\u8651\u628a\u8fd9\u4e9b\u516c\u5171\u7684 React \u7ec4\u4ef6\u62bd\u6210\u4e00\u4e2a npm \u5305\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u9879\u76ee\u4e2d\u590d\u7528\u7ec4\u4ef6\u4e86\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a npm \u5305\u4ec5\u5bfc\u51fa\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\u548c\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"src\n\u251c\u2500\u2500 Header        # \u5b50\u7ec4\u4ef6 Header\n|  \u251c\u2500\u2500 index.css\n|  \u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 index.tsx\n")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"index.tsx",label:"index.tsx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Header from './Header';\n\n//  \u901a\u8fc7 export default \u65b9\u5f0f\u5bfc\u51fa\nexport default function Component() {\n  return (\n    <div>\n      <Header />\n      ...\n    </div>\n  )\n}\n"))),(0,a.kt)(o.Z,{value:"Header/index.tsx",label:"Header/index.tsx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import './index.css';\n\nexport default function Header() {\n  return (<div>Header</div>)\n}\n")))),(0,a.kt)("p",null,"\u8fd9\u6837\u5728\u6d88\u8d39\u5904\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"import Component from 'your-component-name'")," \u7684\u65b9\u5f0f\u5bfc\u5165\u7ec4\u4ef6\u4e86\u3002"),(0,a.kt)("p",null,"\u5047\u5982\u4e00\u4e2a npm \u5305\u8981\u5bfc\u51fa\u591a\u4e2a\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u4e5f\u5c31\u662f\u7c7b\u4f3c\u6211\u4eec\u5e38\u8bf4\u7684\u7ec4\u4ef6\u5e93\uff0c\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u7684\u76ee\u5f55\u7ec4\u7ec7\u7ed3\u6784\u548c\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"src\n\u251c\u2500\u2500 Button\n|  \u251c\u2500\u2500 index.css\n|  \u2514\u2500\u2500 index.tsx\n\u251c\u2500\u2500 Input\n|  \u251c\u2500\u2500 index.css\n|  \u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 index.ts\n")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"index.ts",label:"index.ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export * from './Button';\nexport * from './Input';\n"))),(0,a.kt)(o.Z,{value:"Button/index.tsx",label:"Button/index.tsx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\n\nexport function Button() {\n  return (\n    <button>example</button>\n  )\n}\n")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6709\u5173\u6837\u5f0f\u7684\u8bf4\u660e\u548c\u5199\u6cd5\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"./abilities#css"},"\u6784\u5efa\u80fd\u529b - CSS")," \u6587\u6863\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," \u4f5c\u4e3a\u7ec4\u4ef6\u5e93\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u7136\u540e\u7edf\u4e00\u5bfc\u51fa\u4e0d\u540c\u7684 React \u7ec4\u4ef6\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"import { Button, Input } from 'your-component-name';")," \u5bfc\u5165\u7ec4\u4ef6\u4e86\u3002"),(0,a.kt)("h2",{id:"node-\u6a21\u5757"},"Node \u6a21\u5757"),(0,a.kt)("p",null,"\u5982\u679c\u73b0\u5728\u6709\u76f8\u540c\u7684\u5de5\u5177\u51fd\u6570\u5728\u591a\u4e2a Node \u5e94\u7528\u88ab\u6d88\u8d39\uff0c\u53ef\u4ee5\u628a\u8fd9\u4e9b\u516c\u5171\u7684\u51fd\u6570\u62bd\u6210\u4e00\u4e2a npm \u5305\uff0c\u4f9b\u591a\u4e2a Node \u5e94\u7528\u4f7f\u7528\u3002\u652f\u6301\u7ecf\u8fc7 Transform \u6a21\u5f0f\u751f\u6210 CommonJS \u4ea7\u7269\u548c ES Module \u4ea7\u7269\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"export function writeLicenseToFileHeader(absFilePath: string) {\n  const newFileContent = '/* LICENSE */' + fs.readFileSync(absFilePath, 'utf-8');\n  fs.writeFileSync(absFilePath, newFileContent);\n}\n")),(0,a.kt)("h2",{id:"\u524d\u7aef\u7c7b\u5e93"},"\u524d\u7aef\u7c7b\u5e93"),(0,a.kt)("p",null,"\u524d\u7aef\u7c7b\u5e93\u6307\u7684\u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u7684 JavaScript \u6a21\u5757\uff0c\u5e76\u4e14\u6240\u6709\u7684\u4f9d\u8d56\u90fd\u4f1a\u6253\u5305\u5230\u8fd9\u4e2a\u6a21\u5757\u91cc\u9762\u3002\u4f7f\u7528\u7684\u573a\u666f\u6709\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u4f3c ",(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/browse/react@18.2.0/umd/"},"React"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://unpkg.com/browse/moment@2.29.4/min/"},"moment")," \u7b49\u7c7b\u5e93\uff0c\u7528\u6237\u7684\u9879\u76ee\u4e2d\u628a\u8fd9\u4e9b\u4f9d\u8d56 external \u6389\uff0c\u9700\u8981\u5728 HTML \u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"<script />")," \u5f15\u5165 UMD \u4ea7\u7269\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n<head>\n  <script src="https://unpkg.com/your-lib-name/dist/index.umd.es5.production.js"><\/script>\n</head>\n<body>\n  <script>\n    console.log(window.YourLibName);\n  <\/script>\n</body>\n</html>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"<script />")," \u6807\u7b7e\u5185\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"ES Module")," \u65b9\u5f0f\u52a0\u8f7d\u7c7b\u5e93\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <body>\n    <script type=\"module\">\n      import lib from './index.esm.es2017.production.js';\n    <\/script>\n  </body>\n</html>\n")),(0,a.kt)("h2",{id:"rax-\u7ec4\u4ef6"},"Rax \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4e0e React \u7ec4\u4ef6\u573a\u666f\u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u628a\u516c\u5171\u7684 Rax \u7ec4\u4ef6\u62bd\u6210\u4e00\u4e2a npm \u5305\uff0c\u7136\u540e\u5728\u5176\u4ed6\u9879\u76ee\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import { createElement } from 'rax';\nimport styles from './index.module.css';\n\nexport default function Component() {\n\n  return (\n    <div className={styles.Component}>Hello</div>\n  );\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1aRax \u7ec4\u4ef6\u5fc5\u987b\u8981\u663e\u5f0f\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"createElement")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Fragment"),"\uff08\u5982\u679c\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"<></>")," \u8bed\u6cd5\uff09\uff0c\u5426\u5219\u5728\u8fd0\u884c\u65f6\u4f1a\u62a5\u9519\u3002")),(0,a.kt)("p",null,"\u7ec4\u4ef6\u7684\u76ee\u5f55\u7ed3\u6784\u7ec4\u7ec7\u548c\u6e90\u7801\u5199\u6cd5\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"#react-%E7%BB%84%E4%BB%B6"},"React \u7ec4\u4ef6"),"\u3002"))}m.isMDXComponent=!0}}]);