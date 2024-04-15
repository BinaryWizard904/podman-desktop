"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57368],{53670:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var c=i(24246),s=i(71670);const t={},o="Interface: QuickPickOptions",r={id:"interfaces/QuickPickOptions",title:"Interface: QuickPickOptions",description:"Options to configure the behavior of the quick pick UI.",source:"@site/api/interfaces/QuickPickOptions.md",sourceDirName:"interfaces",slug:"/interfaces/QuickPickOptions",permalink:"/api/interfaces/QuickPickOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Interface: QuickPickItem",permalink:"/api/interfaces/QuickPickItem"},next:{title:"Interface: RegisterContainerConnectionEvent",permalink:"/api/interfaces/RegisterContainerConnectionEvent"}},a={},d=[{value:"Properties",id:"properties",level:2},{value:"canPickMany?",id:"canpickmany",level:3},{value:"Source",id:"source",level:4},{value:"ignoreFocusOut?",id:"ignorefocusout",level:3},{value:"Source",id:"source-1",level:4},{value:"matchOnDescription?",id:"matchondescription",level:3},{value:"Source",id:"source-2",level:4},{value:"matchOnDetail?",id:"matchondetail",level:3},{value:"Source",id:"source-3",level:4},{value:"placeHolder?",id:"placeholder",level:3},{value:"Source",id:"source-4",level:4},{value:"title?",id:"title",level:3},{value:"Source",id:"source-5",level:4},{value:"Methods",id:"methods",level:2},{value:"onDidSelectItem()?",id:"ondidselectitem",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source-6",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"interface-quickpickoptions",children:"Interface: QuickPickOptions"}),"\n",(0,c.jsx)(n.p,{children:"Options to configure the behavior of the quick pick UI."}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(n.h3,{id:"canpickmany",children:"canPickMany?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"canPickMany"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional flag to make the picker accept multiple selections, if true the result is an array of picks."}),"\n",(0,c.jsx)(n.h4,{id:"source",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L968",children:"packages/extension-api/src/extension-api.d.ts:968"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"ignorefocusout",children:"ignoreFocusOut?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"ignoreFocusOut"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Set to ",(0,c.jsx)(n.code,{children:"true"})," to keep the picker open when focus moves to another part of the editor or to another window.\nThis setting is ignored on iPad and is always false."]}),"\n",(0,c.jsx)(n.h4,{id:"source-1",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L963",children:"packages/extension-api/src/extension-api.d.ts:963"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"matchondescription",children:"matchOnDescription?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"matchOnDescription"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional flag to include the description when filtering the picks."}),"\n",(0,c.jsx)(n.h4,{id:"source-2",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L947",children:"packages/extension-api/src/extension-api.d.ts:947"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"matchondetail",children:"matchOnDetail?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"matchOnDetail"}),": ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional flag to include the detail when filtering the picks."}),"\n",(0,c.jsx)(n.h4,{id:"source-3",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L952",children:"packages/extension-api/src/extension-api.d.ts:952"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"placeholder",children:"placeHolder?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"placeHolder"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional string to show as placeholder in the input box to guide the user what to pick on."}),"\n",(0,c.jsx)(n.h4,{id:"source-4",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L957",children:"packages/extension-api/src/extension-api.d.ts:957"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"title"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional string that represents the title of the quick pick."}),"\n",(0,c.jsx)(n.h4,{id:"source-5",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L942",children:"packages/extension-api/src/extension-api.d.ts:942"})}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(n.h3,{id:"ondidselectitem",children:"onDidSelectItem()?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:"optional"})})," ",(0,c.jsx)(n.strong,{children:"onDidSelectItem"}),"(",(0,c.jsx)(n.code,{children:"item"}),"): ",(0,c.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"An optional function that is invoked whenever an item is selected."}),"\n",(0,c.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:["\u2022 ",(0,c.jsx)(n.strong,{children:"item"}),": ",(0,c.jsx)(n.code,{children:"string"})," | ",(0,c.jsx)(n.a,{href:"/api/interfaces/QuickPickItem",children:(0,c.jsx)(n.code,{children:"QuickPickItem"})})]}),"\n",(0,c.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"any"})}),"\n",(0,c.jsx)(n.h4,{id:"source-6",children:"Source"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/beccae416be69e6c24a3ef8e5ade5f74d2bd10a8/packages/extension-api/src/extension-api.d.ts#L974",children:"packages/extension-api/src/extension-api.d.ts:974"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var c=i(27378);const s={},t=c.createContext(s);function o(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);