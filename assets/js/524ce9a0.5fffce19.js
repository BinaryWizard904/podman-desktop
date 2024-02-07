"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18768],{16588:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var o=i(24246),r=i(71670);const s={sidebar_position:3,title:"Configuring Podman for Kind",description:"Configuring Podman for Kind on Windows Subsystem for Linux (WSL).",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},d="Configuring Podman for Kind on Windows Subsystem for Linux (WSL)",t={id:"kind/configuring-podman-for-kind-on-windows",title:"Configuring Podman for Kind",description:"Configuring Podman for Kind on Windows Subsystem for Linux (WSL).",source:"@site/docs/kind/configuring-podman-for-kind-on-windows.md",sourceDirName:"kind",slug:"/kind/configuring-podman-for-kind-on-windows",permalink:"/docs/kind/configuring-podman-for-kind-on-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kind/configuring-podman-for-kind-on-windows.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Configuring Podman for Kind",description:"Configuring Podman for Kind on Windows Subsystem for Linux (WSL).",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Installing the `kind` CLI",permalink:"/docs/kind/installing"},next:{title:"Creating a Kind cluster",permalink:"/docs/kind/creating-a-kind-cluster"}},a={},c=[{value:"Procedure",id:"procedure",level:4}];function l(n){const e={code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"configuring-podman-for-kind-on-windows-subsystem-for-linux-wsl",children:"Configuring Podman for Kind on Windows Subsystem for Linux (WSL)"}),"\n",(0,o.jsx)(e.p,{children:"When you create a Podman machine, Podman creates the machine in rootless mode."}),"\n",(0,o.jsx)(e.p,{children:"With a Podman machine running on WSL, Kind:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Requires the rootful machine."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Therefore, set the Podman machine to rootful mode."}),"\n",(0,o.jsx)(e.h4,{id:"procedure",children:"Procedure"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Stop the Podman machine:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine stop\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Set the Podman machine in rootful mode:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine set --rootful\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Start the Podman machine:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine start\n"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},71670:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>d});var o=i(27378);const r={},s=o.createContext(r);function d(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);