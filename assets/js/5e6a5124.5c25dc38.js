"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,c={unversionedId:"leetcode/data structures-js/array",id:"leetcode/data structures-js/array",title:"array",description:"\u5b9a\u4e49",source:"@site/docs/leetcode/data structures-js/array.md",sourceDirName:"leetcode/data structures-js",slug:"/leetcode/data structures-js/array",permalink:"/coder/docs/leetcode/data structures-js/array",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/data structures-js/array.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/coder/docs/tutorial-extras/translate-your-site"}},u={},i=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u533a\u5206",id:"\u533a\u5206",level:2},{value:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:2},{value:"\u7ec3\u4e60\u9898",id:"\u7ec3\u4e60\u9898",level:2}],s={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\u4e2d\uff0c\u5b58\u50a8\u4e00\u7ec4\u76f8\u540c\u7c7b\u578b\u7684\u5143\u7d20"),(0,a.kt)("h2",{id:"\u533a\u5206"},"\u533a\u5206"),(0,a.kt)("p",null,"\u8bbf\u95ee\uff1a\u901a\u8fc7\u7d22\u5f15\u627e\u5230\u67d0\u5143\u7d20\u7684\u503c\uff0c\n\u641c\u7d22\uff1a\u76f4\u63a5\u627e\u67d0\u5143\u7d20\uff0c\u9700\u8981\u904d\u5386\uff0c\u548c\u7d22\u5f15\u65e0\u5173\uff0c\u901a\u8fc7\u503c\u627e\u7d22\u5f15"),(0,a.kt)("h2",{id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6"},"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("p",null,"1.\u8bbf\u95eeO(1)\n2.\u641c\u7d22O(N)\n3.\u63d2\u5165O(N)\n4.\u5220\u9664O(N)"),(0,a.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)("p",null,"\u8bfb\u591a\u5199\u5c11"),(0,a.kt)("h2",{id:"\u5e38\u7528\u64cd\u4f5c"},"\u5e38\u7528\u64cd\u4f5c"),(0,a.kt)("p",null,"1.\u521b\u5efa\u6570\u7ec4\n2.\u6dfb\u52a0\u5143\u7d20\n3.\u8bbf\u95ee\u5143\u7d20\n4.\u4fee\u6539\u5143\u7d20\n5.\u5220\u9664\u5143\u7d20\n6.\u904d\u5386\u6570\u7ec4\n7.\u67e5\u627e\u5143\u7d20\n8.\u6570\u7ec4\u7684\u957f\u5ea6\n9.\u6570\u7ec4\u6392\u5e8f\uff08\u5185\u7f6e\u7684\u6392\u5e8f\u65b9\u6cd5\uff09"),(0,a.kt)("h2",{id:"\u7ec3\u4e60\u9898"},"\u7ec3\u4e60\u9898"),(0,a.kt)("p",null,"485\u6700\u5927\u8fde\u7eed1\u7684\u4e2a\u6570\n283\u79fb\u52a80\n27\u79fb\u9664\u5143\u7d20"))}d.isMDXComponent=!0}}]);