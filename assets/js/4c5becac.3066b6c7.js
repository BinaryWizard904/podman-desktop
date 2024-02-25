"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74961],{52519:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(24246),r=n(71670);const i={},c="Class: EventEmitter<T>",o={id:"classes/EventEmitter",title:"Class: EventEmitter\\<T\\>",description:"A class to create and manage an Event for clients to subscribe to.",source:"@site/api/classes/EventEmitter.md",sourceDirName:"classes",slug:"/classes/EventEmitter",permalink:"/api/classes/EventEmitter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Class: Disposable",permalink:"/api/classes/Disposable"},next:{title:"Class: TelemetryTrustedValue\\<T\\>",permalink:"/api/classes/TelemetryTrustedValue"}},d={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new EventEmitter()",id:"new-eventemitter",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"event",id:"event",level:3},{value:"Source",id:"source",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Source",id:"source-1",level:4},{value:"fire()",id:"fire",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Source",id:"source-2",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"class-eventemittert",children:"Class: EventEmitter<T>"}),"\n",(0,t.jsxs)(s.p,{children:["A class to create and manage an ",(0,t.jsx)(s.a,{href:"/api/interfaces/Event",children:"Event"})," for clients to subscribe to.\nThe emitter can only send one kind of event."]}),"\n",(0,t.jsx)(s.p,{children:"Use this class to send events inside extension or provide API to the other\nextensions."}),"\n",(0,t.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"T"})]}),"\n",(0,t.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(s.h3,{id:"new-eventemitter",children:"new EventEmitter()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"new EventEmitter"}),"<",(0,t.jsx)(s.code,{children:"T"}),">(): ",(0,t.jsx)(s.a,{href:"/api/classes/EventEmitter",children:(0,t.jsx)(s.code,{children:"EventEmitter"})}),"< ",(0,t.jsx)(s.code,{children:"T"})," >"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/classes/EventEmitter",children:(0,t.jsx)(s.code,{children:"EventEmitter"})}),"< ",(0,t.jsx)(s.code,{children:"T"})," >"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"event",children:"event"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"event"}),": ",(0,t.jsx)(s.a,{href:"/api/interfaces/Event",children:(0,t.jsx)(s.code,{children:"Event"})}),"< ",(0,t.jsx)(s.code,{children:"T"})," >"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For the public to allow to subscribe to events from this Emitter"}),"\n",(0,t.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L120",children:"packages/extension-api/src/extension-api.d.ts:120"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"dispose",children:"dispose()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"dispose"}),"(): ",(0,t.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Dispose by removing registered listeners"}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"void"})}),"\n",(0,t.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L129",children:"packages/extension-api/src/extension-api.d.ts:129"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"fire",children:"fire()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"fire"}),"(",(0,t.jsx)(s.code,{children:"data"}),"): ",(0,t.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"To fire an event to the subscribers"}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"data"}),": ",(0,t.jsx)(s.code,{children:"T"})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"void"})}),"\n",(0,t.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/containers/podman-desktop/blob/a40d100/packages/extension-api/src/extension-api.d.ts#L125",children:"packages/extension-api/src/extension-api.d.ts:125"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71670:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>c});var t=n(27378);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);