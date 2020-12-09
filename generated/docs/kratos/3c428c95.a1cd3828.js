(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(441)),o=n(446),s=n(447),c={id:"managing-users-identities",title:"Managing Users and Identities"},l={unversionedId:"admin/managing-users-identities",id:"version-v0.5/admin/managing-users-identities",isDocsHomePage:!1,title:"Managing Users and Identities",description:"This document walks you through the administrative identity management in ORY",source:"@site/versioned_docs/version-v0.5/admin/managing-users-identities.mdx",slug:"/admin/managing-users-identities",permalink:"/kratos/docs/admin/managing-users-identities",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/admin/managing-users-identities.mdx",version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,sidebar:"version-v0.5/docs",previous:{title:"Hooks",permalink:"/kratos/docs/self-service/hooks"},next:{title:"Sign in with GitHub, GitLab, Google, Facebook, LinkedIn, Microsoft ...",permalink:"/kratos/docs/guides/sign-in-with-github-google-facebook-linkedin"}},u=[{value:"Creating an Identity",id:"creating-an-identity",children:[{value:"Invite a User",id:"invite-a-user",children:[]},{value:"Import a User Identity",id:"import-a-user-identity",children:[]},{value:"Creating a Machine Identity",id:"creating-a-machine-identity",children:[]},{value:"Enable recovery flows",id:"enable-recovery-flows",children:[]}]}],d={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document walks you through the administrative identity management in ORY\nKratos. You should already be familiar with the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/concepts/identity-data-model"}),"Identity Data Model")," before reading this\nguide."),Object(i.b)("h2",{id:"creating-an-identity"},"Creating an Identity"),Object(i.b)("p",null,"There are three principal flows supported for creating identities as an\nadministrator:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Inviting users - e.g. inviting a new employee to your organization IT."),Object(i.b)("li",{parentName:"ol"},"Importing existing users - e.g. when migrating from another system to ORY\nKratos."),Object(i.b)("li",{parentName:"ol"},"Creating machine users - e.g. creating Service Accounts.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Similar to other guides, we assume that ORY Kratos runs on 127.0.0.1:4433\n(public endpoint) and 127.0.0.1:4434 (admin endpoint) in this guide, which is\nthe default when running the quickstart."))),Object(i.b)("h3",{id:"invite-a-user"},"Invite a User"),Object(i.b)("p",null,"The goal of this flow is to create an identity and provide the end-user with a\nway of signing into the identity (account) and setting their password (or any\nother type of credential) for future logins. To achieve this, first create the\nidentity and set its traits and schema:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "schema_id": "default",\n  "traits": {\n    "email": "foo@ory.sh"\n  }\n}\' \\\n    http://127.0.0.1:4434/identities\n\n{\n  "id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a",\n  "schema_id": "default",\n  "traits":{\n    "email": "foo@ory.sh"\n  }\n}\n')),Object(i.b)("p",null,"Keep in mind that you can change the ",Object(i.b)("inlineCode",{parentName:"p"},"schema_id"),' to reflect the schema you want\nto use for this user. Similarly, the trait key/values depend on your schema as\nwell. The command shown does not create a password for the identity or any other\ntype of credential. Instead, we will use another REST call to create a recovery\nlink (here "invite link" is probably more appropriate, but the flow uses an\naccount recovery link).'),Object(i.b)("p",null,"To create the account recovery link, use:"),Object(i.b)(o.a,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"GoLang",value:"go"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"curl",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl --request POST -sL \\\n    --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{\n  "expires_in": "12h",\n  "identity_id": "954f7f59-16a5-4152-8ce7-ad7c73bb124a"\n}\' \\\n    http://127.0.0.1:4434/recovery/link\n\n{\n  "expires_at": "2020-07-27T10:47:45.806Z",\n  "recovery_link": "http://127.0.0.1:4433/self-service/browser/flows/recovery/link?request=8b6fd3e4-1de2-49bf-aa88-1a26634bf062\\u0026token=b1tGmHf64cYDeHB9wKiuCF1FfycMJEyf"\n}\n'))),Object(i.b)(s.a,{value:"go",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "github.com/ory/kratos-client-go/client"\n    "github.com/ory/kratos-client-go/client/admin"\n    "github.com/ory/kratos-client-go/models"\n)\n\nfunc main() {\n    c := client.New(nil, &client.TransportConfig{\n        Host: "127.0.0.1:4434",\n        BasePath: "/",\n        Schemes: []string{"http"},\n    })\n\n    res, err := c.Admin.CreateRecoveryLink(admin.NewCreateRecoveryLinkParams().WithBody(admin.CreateRecoveryLinkBody{\n        IdentityID: models.UUID("the-uuid"),\n    }))\n    if err != nil {\n        // ...\n    }\n\n    fmt.Printf("Use link: %s", *res.Payload.RecoveryLink)\n}\n')),Object(i.b)("p",null,"The response contains a ",Object(i.b)("inlineCode",{parentName:"p"},"recovery_link")," value which is the link the user should\nuse to set up his or her credentials (e.g. connect to a Social Sign In Provider,\nset up a password, ...). The user has only a limited amount of time to do so -\nthe amount of time is specified in the ORY Kratos config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"selfservice:\n  flows:\n    settings:\n      privileged_session_max_age: 30m\n")),Object(i.b)("p",null,"If the user fails to set up his / her credentials in time, another recovery link\nneeds to be issued and the user needs to re-do the flow."),Object(i.b)("p",null,"It is currently not possible to send the recovery link directly to a user's\nemail, this feature is tracked as\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/595"}),"#595"),"."))),Object(i.b)("h3",{id:"import-a-user-identity"},"Import a User Identity"),Object(i.b)("p",null,"This feature is not implemented yet."),Object(i.b)("h3",{id:"creating-a-machine-identity"},"Creating a Machine Identity"),Object(i.b)("p",null,"This feature is not implemented yet."),Object(i.b)("h3",{id:"enable-recovery-flows"},"Enable recovery flows"),Object(i.b)("p",null,"To enable recovery flows, make the following adjustments to your ORY Kratos\nconfiguration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/config/kratos.yml"',title:'"path/to/config/kratos.yml"'}),"selfservice:\n  methods:\n    link:\n      enabled: true\n  flows:\n    recovery:\n      enabled: true\n")),Object(i.b)("p",null,"To specify that an identity's trait is a recovery email, use the following\nIdentity JSON Schema:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),' {\n   "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n   "$schema": "http://json-schema.org/draft-07/schema#",\n   "title": "Person",\n   "type": "object",\n   "properties": {\n     "traits": {\n       "type": "object",\n       "properties": {\n         "email": {\n           "type": "string",\n           "format": "email",\n           "ory.sh/kratos": {\n             "credentials": {\n               "password": {\n                 "identifier": true\n               }\n             },\n+            "recovery": {\n+              "via": "email"\n+            }\n           }\n         }\n       }\n       "additionalProperties": false\n     }\n   }\n }\n')),Object(i.b)("p",null,"For more detailed information and general guidelines on these flows, take a look\nat the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../self-service/flows/account-recovery.md"}),"Account Recovery and Password Reset"),"\nsection."))}m.isMDXComponent=!0},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d["".concat(o,".").concat(b)]||d[b]||m[b]||i;return n?r.a.createElement(p,s(s({ref:t},l),{},{components:n})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},446:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(450),o=n(445),s=n(55),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,m=e.groupId,b=e.className,p=Object(i.a)(),f=p.tabGroupChoices,h=p.setTabGroupChoices,y=Object(a.useState)(s),g=y[0],v=y[1],O=a.Children.toArray(e.children);if(null!=m){var j=f[m];null!=j&&j!==g&&d.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=m&&h(m,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},447:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},450:function(e,t,n){"use strict";var a=n(0),r=n(451);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},451:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r}}]);