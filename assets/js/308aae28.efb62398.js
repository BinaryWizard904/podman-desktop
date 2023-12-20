"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[522],{64674:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=o(24246),i=o(71670);const t={sidebar_position:20},r="Troubleshooting Podman on Windows",l={id:"troubleshooting/troubleshooting-podman-on-windows",title:"Troubleshooting Podman on Windows",description:"You can find here troubleshooting help for issues specific to Windows.",source:"@site/docs/troubleshooting/troubleshooting-podman-on-windows.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-podman-on-windows",permalink:"/docs/troubleshooting/troubleshooting-podman-on-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting/troubleshooting-podman-on-windows.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"mySidebar",previous:{title:"Troubleshooting Podman",permalink:"/docs/troubleshooting/troubleshooting-podman"},next:{title:"Troubleshooting Podman on macOS",permalink:"/docs/troubleshooting/troubleshooting-podman-on-macos"}},d={},a=[{value:"Deleting a corrupted Podman Machine",id:"deleting-a-corrupted-podman-machine",level:2},{value:"Issue",id:"issue",level:4},{value:"Workaround",id:"workaround",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"The terminal session attaches to Podman Desktop when launching it from the command line",id:"the-terminal-session-attaches-to-podman-desktop-when-launching-it-from-the-command-line",level:2},{value:"Issue",id:"issue-1",level:4},{value:"Workaround",id:"workaround-1",level:4},{value:"When the host is behind a VPN, Podman cannot access network resources",id:"when-the-host-is-behind-a-vpn-podman-cannot-access-network-resources",level:2},{value:"Solution",id:"solution",level:3},{value:"Older WSL versions might lead to networking issues",id:"older-wsl-versions-might-lead-to-networking-issues",level:2},{value:"Solution",id:"solution-1",level:4}];function h(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"troubleshooting-podman-on-windows",children:"Troubleshooting Podman on Windows"}),"\n",(0,s.jsx)(e.p,{children:"You can find here troubleshooting help for issues specific to Windows."}),"\n",(0,s.jsx)(e.h2,{id:"deleting-a-corrupted-podman-machine",children:"Deleting a corrupted Podman Machine"}),"\n",(0,s.jsx)(e.h4,{id:"issue",children:"Issue"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"You are not able to stop your Podman Machine."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine stop\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"The Logs contain this error:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"Error: Error stopping sysd: exit status 1\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"workaround",children:"Workaround"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"To display the active Windows Subsystem for Linux (WSL) distribution list: in the terminal, run:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ wsl --list\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["The command returns the list of active WSL distributions. Identify your Podman Machine in the list, such as ",(0,s.jsx)(e.code,{children:"podman-machine-default"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To stop, and uninstall your Podman Machine: in the terminal, replace ",(0,s.jsx)(e.code,{children:"podman-machine-default"})," by your Podman machine name, and run:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"$ wsl --unregister podman-machine-default\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"additional-resources",children:"Additional resources"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/basic-commands#unregister-or-uninstall-a-linux-distribution",children:"WSL documentation: Uninstall a Linux distribution"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"the-terminal-session-attaches-to-podman-desktop-when-launching-it-from-the-command-line",children:"The terminal session attaches to Podman Desktop when launching it from the command line"}),"\n",(0,s.jsx)(e.h4,{id:"issue-1",children:"Issue"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"When you start Podman Desktop from the command line in Windows the terminal session attaches to it."}),"\n",(0,s.jsx)(e.li,{children:"When you quit the terminal, it kills Podman Desktop."}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"workaround-1",children:"Workaround"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Set the environment variable ",(0,s.jsx)(e.code,{children:"ELECTRON_NO_ATTACH_CONSOLE"})," to true before launching Podman Desktop."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"when-the-host-is-behind-a-vpn-podman-cannot-access-network-resources",children:"When the host is behind a VPN, Podman cannot access network resources"}),"\n",(0,s.jsxs)(e.p,{children:["When the host is behind a VPN, Podman might fail to access network resources, and display errors such as ",(0,s.jsx)(e.em,{children:"Temporary failure in name resolution"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(e.p,{children:["See ",(0,s.jsx)(e.a,{href:"/docs/proxy/using-a-vpn-on-windows",children:"Accessing resources behind a VPN with Podman on Windows"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"older-wsl-versions-might-lead-to-networking-issues",children:"Older WSL versions might lead to networking issues"}),"\n",(0,s.jsxs)(e.p,{children:["Older versions of WSL might cause networking issues, such as the ",(0,s.jsx)(e.code,{children:"Get-NetTCPConnection"})," error, indicating that the WSL loopback forwarding facility is not functioning correctly. Recent versions of WSL do not have this issue."]}),"\n",(0,s.jsx)(e.h4,{id:"solution-1",children:"Solution"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Update Windows to either the 21H1, 21H2, or 22H2 version of Windows 10, or to the 21H1 version of Windows 11, or greater."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Update WSL:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell-session",children:"wsl --update\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Optionally, delete your Podman machine, and create a new one."}),"\n"]}),"\n"]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},71670:(n,e,o)=>{o.d(e,{Z:()=>l,a:()=>r});var s=o(27378);const i={},t=s.createContext(i);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);