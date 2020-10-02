(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{287:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),i=(r(0),r(316)),a={id:"hydra-serve-public",title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs"},c={unversionedId:"cli/hydra-serve-public",id:"cli/hydra-serve-public",isDocsHomePage:!1,title:"hydra serve public",description:"hydra serve public Serves Public HTTP/2 APIs",source:"@site/docs/cli/hydra-serve-public.md",slug:"/cli/hydra-serve-public",permalink:"/hydra/docs/next/cli/hydra-serve-public",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve-public.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601372836,sidebar:"docs",previous:{title:"hydra serve all",permalink:"/hydra/docs/next/cli/hydra-serve-all"},next:{title:"hydra token",permalink:"/hydra/docs/next/cli/hydra-token"}},s=[{value:"hydra serve public",id:"hydra-serve-public",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-serve-public"},"hydra serve public"),Object(i.b)("p",null,"Serves Public HTTP/2 APIs"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles requests coming from the public internet, like OAuth 2.0 Authorization\nand Token requests, OpenID Connect UserInfo, OAuth 2.0 Token Revokation, and\nOpenID Connect Discovery."),Object(i.b)("p",null,'This command is configurable using the same options available to "serve admin"\nand "serve all".'),Object(i.b)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the privileged and public APIs. For example, you might want to run\ndifferent TLS certificates or CORS settings on the public and privileged API."),Object(i.b)("p",null,'This command does not work with the "memory" database. Both services\n(privileged, public) MUST use the same database connection to be able to\nsynchronize.'),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/config.yaml"}),"https://github.com/ory/hydra/blob/undefined/docs/config.yaml")," <<"))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"hydra serve public [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for public\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}d.isMDXComponent=!0},316:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);