"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73177],{84974:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=s(24246),i=s(71670);const c={},t="Interface: ImageCheck",o={id:"interfaces/ImageCheck",title:"Interface: ImageCheck",description:"a specific error/recommendation found during an image check",source:"@site/api/interfaces/ImageCheck.md",sourceDirName:"interfaces",slug:"/interfaces/ImageCheck",permalink:"/api/interfaces/ImageCheck",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: HostRestartPolicy",permalink:"/api/interfaces/HostRestartPolicy"},next:{title:"Interface: ImageCheckerProvider",permalink:"/api/interfaces/ImageCheckerProvider"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"markdownDescription?",id:"markdowndescription",level:3},{value:"Source",id:"source",level:4},{value:"name",id:"name",level:3},{value:"Source",id:"source-1",level:4},{value:"severity?",id:"severity",level:3},{value:"Source",id:"source-2",level:4},{value:"status",id:"status",level:3},{value:"Source",id:"source-3",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interface-imagecheck",children:"Interface: ImageCheck"}),"\n",(0,r.jsx)(n.p,{children:"a specific error/recommendation found during an image check"}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"markdowndescription",children:"markdownDescription?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"optional"})})," ",(0,r.jsx)(n.strong,{children:"markdownDescription"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"full description of the error/recommendation"}),"\n",(0,r.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L3727",children:"packages/extension-api/src/extension-api.d.ts:3727"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"name"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"a short and descriptive name for the error/recommendation"}),"\n",(0,r.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L3715",children:"packages/extension-api/src/extension-api.d.ts:3715"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"severity",children:"severity?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"optional"})})," ",(0,r.jsx)(n.strong,{children:"severity"}),": ",(0,r.jsx)(n.code,{children:'"low"'})," | ",(0,r.jsx)(n.code,{children:'"medium"'})," | ",(0,r.jsx)(n.code,{children:'"high"'})," | ",(0,r.jsx)(n.code,{children:'"critical"'})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["severity of the error/recommendation, when the status is ",(0,r.jsx)(n.code,{children:"failed"})]}),"\n",(0,r.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L3723",children:"packages/extension-api/src/extension-api.d.ts:3723"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"status",children:"status"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"status"}),": ",(0,r.jsx)(n.code,{children:'"success"'})," | ",(0,r.jsx)(n.code,{children:'"failed"'})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"either the feedback is positive or negative"}),"\n",(0,r.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L3719",children:"packages/extension-api/src/extension-api.d.ts:3719"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var r=s(27378);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);