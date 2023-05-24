"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={},s=void 0,c={unversionedId:"leetcode/data structures-js/hash table",id:"leetcode/data structures-js/hash table",title:"hash table",description:"\u4ecb\u7ecd",source:"@site/docs/leetcode/data structures-js/hash table.md",sourceDirName:"leetcode/data structures-js",slug:"/leetcode/data structures-js/hash table",permalink:"/coder/docs/leetcode/data structures-js/hash table",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/data structures-js/hash table.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"graph",permalink:"/coder/docs/leetcode/data structures-js/graph"},next:{title:"heap",permalink:"/coder/docs/leetcode/data structures-js/heap"}},o={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff08\u5206\u6790\u6570\u636e\u7ed3\u6784\u4f18\u52a3\uff09",id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\u6570\u636e\u7ed3\u6784\u4f18\u52a3",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:2},{value:"1.\u521b\u5efa\u54c8\u5e0c\u8868",id:"1\u521b\u5efa\u54c8\u5e0c\u8868",level:3},{value:"2.\u6dfb\u52a0\u5143\u7d20",id:"2\u6dfb\u52a0\u5143\u7d20",level:3},{value:"3.\u5220\u9664\u5143\u7d20",id:"3\u5220\u9664\u5143\u7d20",level:3},{value:"4.\u4fee\u6539\u5143\u7d20",id:"4\u4fee\u6539\u5143\u7d20",level:3},{value:"5.\u83b7\u53d6key\u7684value",id:"5\u83b7\u53d6key\u7684value",level:3},{value:"6.\u68c0\u6d4bkey\u662f\u5426\u5b58\u5728",id:"6\u68c0\u6d4bkey\u662f\u5426\u5b58\u5728",level:3},{value:"7.\u54c8\u5e0c\u8868\u7684\u957f\u5ea6",id:"7\u54c8\u5e0c\u8868\u7684\u957f\u5ea6",level:3},{value:"8.\u54c8\u5e0c\u8868\u662f\u5426\u8fd8\u6709\u5143\u7d20",id:"8\u54c8\u5e0c\u8868\u662f\u5426\u8fd8\u6709\u5143\u7d20",level:3},{value:"\u7ec3\u4e60\u9898",id:"\u7ec3\u4e60\u9898",level:2}],u={toc:i},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u3002\u54c8\u5e0c\u8868=\u6563\u5217\u8868\uff1a\u952e\u503c\u5bf9\n\u54c8\u5e0c\u78b0\u649e\uff1a2\u4e2a\u4e0d\u540c\u7684key\u901a\u8fc7\u540c\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\u5f97\u5230\u76f8\u540c\u7684\u5185\u5b58\u5730\u5740\u3002\u89e3\u51b3\u65b9\u6cd5\uff1a1\u94fe\u8868\uff1a\u628a\u952e\u503c\u5bf91\u7684\u6307\u9488\u6307\u5411\u78b0\u649e\u7684\u952e\u503c\u5bf92\u5185\u5b58\u5757"),(0,r.kt)("h2",{id:"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5206\u6790\u6570\u636e\u7ed3\u6784\u4f18\u52a3"},"\u57fa\u672c\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff08\u5206\u6790\u6570\u636e\u7ed3\u6784\u4f18\u52a3\uff09"),(0,r.kt)("p",null,"1.\u8bbf\u95eeO\u2716\n\u6ca1\u6709\u7d22\u5f15\u7684\u6982\u5ff5\uff0c\u53ea\u6709key:value\n2.\u641c\u7d22keyO(1)\n\u9047\u5230\u78b0\u649e\uff0ck\u662f\u78b0\u649e\u5143\u7d20\u7684\u4e2a\u6570O(k)\uff0c\u5982\uff1a\u5148\u627e\u5230\u503c1\u518d\u627e\u5230\u503c2\uff0ck=2\n3.\u63d2\u5165O(1)"),(0,r.kt)("p",null,"4.\u5220\u9664O(1)\n\u9047\u5230\u78b0\u649e\uff0ck\u662f\u78b0\u649e\u5143\u7d20\u7684\u4e2a\u6570O(k)"),(0,r.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u5229\u7528\u7387\u4e0d\u9ad8\uff0c\u5e95\u5c42\u4f7f\u7528\u7684\u6570\u7ec4\u53ef\u80fd\u5e76\u4e0d\u662f\u6bcf-\u4e2a\u5355\u5143\u90fd\u88ab\u5229\u7528\u4e86\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u662f\u65e0\u5e8f\u7684\uff0c\u4e0d\u80fd\u6309\u67d0\u4e00\u987a\u5e8f\u904d\u5386\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5feb\u901f\u627e\u51fa\u6700\u5927\u503c\u6216\u6700\u5c0f\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5bf9\u8c61\u65f6\uff0c\u5bf9\u8c61\u7684 key \u503c\u662f\u4e0d\u53ef\u4ee5\u91cd\u590d\u7684\u3002")),(0,r.kt)("h2",{id:"\u5e38\u7528\u64cd\u4f5c"},"\u5e38\u7528\u64cd\u4f5c"),(0,r.kt)("h3",{id:"1\u521b\u5efa\u54c8\u5e0c\u8868"},"1.\u521b\u5efa\u54c8\u5e0c\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nlet map = new Map();\n")),(0,r.kt)("h3",{id:"2\u6dfb\u52a0\u5143\u7d20"},"2.\u6dfb\u52a0\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\n  map.set(i, 1);\n")),(0,r.kt)("h3",{id:"3\u5220\u9664\u5143\u7d20"},"3.\u5220\u9664\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"map.remove(key) \n")),(0,r.kt)("h3",{id:"4\u4fee\u6539\u5143\u7d20"},"4.\u4fee\u6539\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," push([key, value])\n update([key, value])\n")),(0,r.kt)("h3",{id:"5\u83b7\u53d6key\u7684value"},"5.\u83b7\u53d6key\u7684value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," map.get(key)\n")),(0,r.kt)("h3",{id:"6\u68c0\u6d4bkey\u662f\u5426\u5b58\u5728"},"6.\u68c0\u6d4bkey\u662f\u5426\u5b58\u5728"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," set.has(x)\n map.has(i)\n")),(0,r.kt)("h3",{id:"7\u54c8\u5e0c\u8868\u7684\u957f\u5ea6"},"7.\u54c8\u5e0c\u8868\u7684\u957f\u5ea6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," size()\n")),(0,r.kt)("h3",{id:"8\u54c8\u5e0c\u8868\u662f\u5426\u8fd8\u6709\u5143\u7d20"},"8.\u54c8\u5e0c\u8868\u662f\u5426\u8fd8\u6709\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," isEmpty()\n")),(0,r.kt)("h2",{id:"\u7ec3\u4e60\u9898"},"\u7ec3\u4e60\u9898"),(0,r.kt)("p",null,"217\u5b58\u5728\u91cd\u590d\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," var containsDuplicate = function(nums) {\n    const set = new Set();\n    for (const x of nums) {\n        if (set.has(x)) {\n            return true;\n        }\n        set.add(x);\n    }\n    return false;\n};\n\n\u4f5c\u8005\uff1a\u529b\u6263\u5b98\u65b9\u9898\u89e3\n\u94fe\u63a5\uff1ahttps://leetcode.cn/problems/contains-duplicate/solutions/518991/cun-zai-zhong-fu-yuan-su-by-leetcode-sol-iedd/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002\n")),(0,r.kt)("p",null,"389\u627e\u4e0d\u540c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," key:\u5b57\u7b26\uff08\u5c0f\u5199\u5b57\u6bcd\uff09-> \u6570\u5b57ASCII\u7801\n value:\u6b21\u6570\n \u6280\u5de71\uff1a\u6570\u5b57ASCII\u7801-a\uff0897\uff09=0/1/25...//\u5c0f\u5199\u5b57\u6bcd\u53ea\u670926\u4e2a\uff0c\u7d22\u5f15\u6700\u591a25\u3002\u6269\u5c55\u4e00\u4e2a\n charCodeAt() //\u83b7\u53d6\u67d0\u4e2a\u5b57\u7b26\u5bf9\u5e94\u7684unicode\u7f16\u7801\n String.fromCharCode()\uff1bcodePointAt() \u548c String.fromCodePoint()\n 2\uff1aa\u5728s\u6570\u7ec4\u51fa\u73b0\u4e00\u6b21-1,t\u6570\u7ec4\u51fa\u73b0\u4e00\u6b21+1\uff0c\u4e8c\u8005\u6b21\u6570\u76f8\u540c\u548c\u4e3a0\uff0c\u4e0d\u4e3a0\u5219\u4e0d\u540c\uff0c\u8f6c\u6362\u4e3a\u5b57\u7b26.\n //\u4ee5\u4e0b\u89e3\u6cd5\u6ca1\u7528\u54c8\u5e0c\u8868\uff0c\u7528\u53d8\u91cf\u76f8\u51cf\nvar findTheDifference = function(s, t) {\n    let as = 0, at = 0;\n    for (let i = 0; i < s.length; i++) {//\u7edf\u8ba1\u5b57\u7b26\u4e32s\u4e2d\u5b57\u7b26Unicode\u503c\u7684\u603b\u548c\n        as += s[i].charCodeAt();\n    }\n    for (let i = 0; i < t.length; i++) {//\u7edf\u8ba1\u5b57\u7b26\u4e32t\u4e2d\u5b57\u7b26Unicode\u503c\u7684\u603b\u548c\n        at += t[i].charCodeAt();\n    }\n    return String.fromCharCode(at - as);//\u4e24\u4e2a\u53d8\u91cf\u7684\u548c\u7684\u5dee \u5c31\u662f\u4e0d\u540c\u7684\u5b57\u7b26\n};\n\n\n\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(N)\n\n\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)\n\u4f5c\u8005\uff1a\u529b\u6263\u5b98\u65b9\u9898\u89e3\n\u94fe\u63a5\uff1ahttps://leetcode.cn/problems/find-the-difference/solutions/525705/zhao-bu-tong-by-leetcode-solution-mtqf/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002\n")),(0,r.kt)("p",null,"496\u4e0b\u4e00\u4e2a\u6700\u5927\u5143\u7d201\uff08\u6808+\u54c8\u5e0c\u8868\uff0c\u5355\u8c03\u6808\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let nextGreaterElement = function(nums1, nums2) {\n    let map = new Map(), stack = [], ans = [];\n    nums2.forEach(item => {\n        while(stack.length && item > stack[stack.length-1]){\n            map.set(stack.pop(), item)\n        };\n        stack.push(item);\n    });\n    stack.forEach(item => map.set(item, -1));\n    nums1.forEach(item => ans.push(map.get(item)));\n    return ans;\n};\n\n\u4f5c\u8005\uff1a\u5fa1\u4e09\u4e94 \ud83e\udd47\n\u94fe\u63a5\uff1ahttps://leetcode.cn/problems/next-greater-element-i/solutions/683878/zhan-xia-yi-ge-geng-da-yuan-su-i-by-demi-cumj/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002 \nvar nextGreaterElement = function (nums1, nums2) {\n  const stack = [], map = new Map();\n  nums2.forEach(item => {\n    while (stack.length && item > stack[stack.length - 1]) //item\u6bd4\u524d\u4e00\u4e2aitem\u5373\u6808\u9876\u5143\u7d20\u5927\uff0c\u5c31\u8ba9\u6808\u9876\u51fa\u6808\u4e3akey,item\u4e3avalue\n    {\n      map.set(stack.pop(), item)\n    }\n    stack.push(item);\n  })\n  const res = nums1.map(item => map.get(item) || -1)\n  return res;\n};\n")))}d.isMDXComponent=!0}}]);