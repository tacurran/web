(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{431:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(431)),s={id:"html-forms",title:"HTML Form Parser"},c={unversionedId:"reference/html-forms",id:"version-v0.3/reference/html-forms",isDocsHomePage:!1,title:"HTML Form Parser",description:"If you're using HTML Forms to sign users up or update profiles, ORY Kratos needs",source:"@site/versioned_docs/version-v0.3/reference/html-forms.md",slug:"/reference/html-forms",permalink:"/kratos/docs/v0.3/reference/html-forms",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/reference/html-forms.md",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,sidebar:"version-v0.3/docs",previous:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/v0.3/reference/json-schema-json-paths"},next:{title:"REST API",permalink:"/kratos/docs/v0.3/reference/api"}},i=[{value:"Nesting",id:"nesting",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]}],p={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you're using HTML Forms to sign users up or update profiles, ORY Kratos needs\nto assert the type of each field, as HTML Form Field Values are untyped."),Object(a.b)("p",null,"ORY Kratos uses the JSON Schema to assert types. There are a few tricks you\nshould know when using this feature."),Object(a.b)("h2",{id:"nesting"},"Nesting"),Object(a.b)("p",null,"Assuming this JSON Schema:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "name": {\n      "type": "object",\n      "properties": {\n        "first": {\n          "type": "string"\n        },\n        "last": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"You could address ",Object(a.b)("inlineCode",{parentName:"p"},"name.first")," this with an HTML Input Form:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<input type="text" name="name.last">\n')),Object(a.b)("h2",{id:"checkboxes"},"Checkboxes"),Object(a.b)("p",null,"Checkboxes for ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," can be set up as follows. If the value is\nsupposed to be false: not checked:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<input type="hidden" value="false" name="traits.path.to.my.boolean" />\n<input type="checkbox" value="true" name="traits.path.to.my.boolean" />\n')))}l.isMDXComponent=!0}}]);