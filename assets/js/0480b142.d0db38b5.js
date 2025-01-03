"use strict";(self.webpackChunkicepkg_site=self.webpackChunkicepkg_site||[]).push([[836],{8570:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(79);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8451:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=r(7583),a=(r(79),r(8570));const i={},o="\u5e38\u89c1\u95ee\u9898",p={unversionedId:"faq",id:"faq",title:"\u5e38\u89c1\u95ee\u9898",description:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56 @ice/jsx-runtime",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,editUrl:"https://github.com/ice-lab/icepkg/tree/main/website/docs/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u63d2\u4ef6",permalink:"/reference/plugins-development"}},l={},s=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56 <code>@ice/jsx-runtime</code>",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56-icejsx-runtime",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56 <code>@swc/helpers</code>",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56-swchelpers",level:2},{value:"<code>Error: Can&#39;t resolve &#39;sass-loader&#39; in ...</code>",id:"error-cant-resolve-sass-loader-in-",level:2}],c={toc:s};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56-icejsx-runtime"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"h2"},"@ice/jsx-runtime")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ice/pkg")," \u5728 v1.5.0 \u7248\u672c\u4ee5\u540e\uff0c\u4e3a\u652f\u6301\u80fd\u5728\u5185\u8054\u6837\u5f0f\u4e2d\u4f7f\u7528 rpx \u5355\u4f4d\uff0c\u7ec4\u4ef6\u9700\u8981\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ice/jsx-runtime")," \u624d\u80fd\u6b63\u5e38\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const Home = () => {\n  return (\n    <div style={{ fontSize: '100rpx' }}>Home</div>\n  )\n}\n")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0cTransform \u6a21\u5f0f\u4e0b\uff0c\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ice/jsx-runtime")," \u4f5c\u4e3a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"\uff1bBundle \u6a21\u5f0f\u4e0b\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"@ice/jsx-runtime")," \u4f5c\u4e3a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Transform \u6a21\u5f0f\n$ npm i @ice/jsx-runtime --save\n# Bundle \u6a21\u5f0f\n$ npm i @ice/jsx-runtime --save-dev\n")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56-swchelpers"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"h2"},"@swc/helpers")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"@ice/pkg")," 1.5.6 \u7248\u672c\u5347\u7ea7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/core")," \u5230 1.3.55 \u7248\u672c\uff0c\u9700\u5c06\u9879\u76ee\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/helpers")," \u540c\u65f6\u5347\u7ea7\u5230 ^0.5.0 \u7248\u672c")),(0,a.kt)("p",null,"Transform \u6a21\u5f0f\u7684\u4ea7\u7269\u4ee3\u7801\u4e2d\u53ef\u80fd\u4f9d\u8d56\u4e00\u4e9b helper \u51fd\u6570\u7528\u4ee5\u652f\u6301\u76ee\u6807\u73af\u5883\u3002ICE PKG \u9ed8\u8ba4\u5c06\u8fd9\u4e9b helper \u51fd\u6570\u7edf\u4e00\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/helpers")," \u4e2d\u5bfc\u51fa\u4f7f\u7528\uff0c\u4ee5\u51cf\u5c0f\u4ea7\u7269\u4ee3\u7801\u4f53\u79ef\u3002\u56e0\u6b64\uff0c\u5f53\u4f60\u7684\u4ea7\u7269\u4ee3\u7801\u4e2d\u5f15\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/helpers")," \u65f6\uff0c\u8bf7\u52a1\u5fc5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/helpers")," \u4f5c\u4e3a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @swc/helpers --save\n")),(0,a.kt)("h2",{id:"error-cant-resolve-sass-loader-in-"},(0,a.kt)("inlineCode",{parentName:"h2"},"Error: Can't resolve 'sass-loader' in ...")),(0,a.kt)("p",null,"\u51fa\u73b0\u8fd9\u4e2a\u62a5\u9519\u7684\u539f\u56e0\u662f\u5728\u4f7f\u7528 docusaurus \u63d2\u4ef6\u65f6\uff0cdocusaurus \u65e0\u6cd5\u6b63\u5e38 resolve \u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"sass-loader")," \u4f9d\u8d56\u3002\u8bf7\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"@ice/pkg-plugin-docusaurus")," \u5230\u6700\u65b0\u7248\u672c\u3002"))}u.isMDXComponent=!0}}]);