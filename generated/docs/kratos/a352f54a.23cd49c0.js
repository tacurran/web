(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{275:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(6),s=(n(0),n(413)),i={id:"security-questions-best-practice",title:"Choosing Security Questions"},a={unversionedId:"guides/security-questions-best-practice",id:"version-v0.5/guides/security-questions-best-practice",isDocsHomePage:!1,title:"Choosing Security Questions",description:"Security questions are currently not supported for this flow, but might be added",source:"@site/versioned_docs/version-v0.5/guides/security-questions.mdx",slug:"/guides/security-questions-best-practice",permalink:"/kratos/docs/guides/security-questions-best-practice",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/guides/security-questions.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Security questions are currently not supported for this flow, but might be added\nin a future version of ORY Kratos."),Object(s.b)("p",null,"This section contains an overview of picking the right security questions.\nAnother good resource is\n",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Choosing_and_Using_Security_Questions_Cheat_Sheet.html"}),"Choosing and Using Security Questions Cheat Sheet"),"."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"One option is to allow the user to self-construct their own questions. The\nproblem with this though is that you end up with either painfully obvious\nquestions:"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"What colour is the sky?")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"How do you spell \u201cpassword\u201d?"))),Object(s.b)("p",{parentName:"blockquote"},"Questions which can put people in an uncomfortable position when a human uses\nthe secret question for verification (such as in a call centre):"),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Who did I sleep with at the Christmas party?")),Object(s.b)("p",{parentName:"blockquote"},"When it comes to secret questions, people need to be saved from themselves! In\nother words, the site itself should define the secret question, or rather\ndefine a series of secret questions from which the user can choose. And not\njust choose one either; ideally, the user should define two or more secret\nquestions at the time of account registration which can then be used as a\nsecond channel of identity verification. Having multiple questions adds a\nhigher degree of confidence to the verification process plus gives you\nopportunity to add randomness (not always show the same question) plus\nprovides a bit of redundancy should someone legitimate forget an answer."),Object(s.b)("p",{parentName:"blockquote"},"So what makes a good secret question? There are a few different factors:"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"It should be concise \u2013 the question is to the point and unambiguous"),Object(s.b)("li",{parentName:"ul"},"The answer is specific \u2013 you don\u2019t want a question which could be answered\nin different ways by the same person"),Object(s.b)("li",{parentName:"ul"},"The possible answers must be diverse \u2013 a question about someone\u2019s favourite\ncolour would result in a small subset of possible answers"),Object(s.b)("li",{parentName:"ul"},"Answer discovery should be hard \u2013 if you can readily find the answer for\nanyone (think high-profile people) then it\u2019s no good"),Object(s.b)("li",{parentName:"ul"},"The answer must be constant over time \u2013 asking for someone\u2019s favourite movie\nmay result in a different answer a year from now")),Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.troyhunt.com/everything-you-ever-wanted-to-know/"}),"Source"))),Object(s.b)("p",null,"Here are some good examples:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'What was the first concert you ever went to and where? (e.g. "Pink Floyd at\nGotham City Stadium")'),Object(s.b)("li",{parentName:"ul"},"...")))}l.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return n?r.a.createElement(h,a(a({ref:t},u),{},{components:n})):r.a.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);