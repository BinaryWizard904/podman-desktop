"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2217],{544:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7378),r=a(161);const n=function(){function e(){var e,t;if(null==(e=document)||!e.documentElement)return;const a=document.documentElement;"dark"===(null==(t=a.dataset)?void 0:t.theme)?(a.classList.add("dark"),setTimeout((()=>{a.classList.add("dark")}),100)):(a.classList.remove("dark"),setTimeout((()=>{a.classList.remove("dark")}),100))}return(0,l.useEffect)((()=>{r.Z.canUseDOM&&e()}),[r.Z.canUseDOM]),(0,l.useEffect)((()=>{if(!r.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{"attributes"!=t.type||"data-rh"!==t.attributeName&&"data-theme"!==t.attributeName||e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[r.Z.canUseDOM]),l.createElement("div",null)}},464:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(353),r=a(432),n=a(7378),m=a(544),s=a(4034),c=a(8948);function i(){return n.createElement("div",null,n.createElement("section",{className:"text-gray-900 bg-zinc-200 dark:bg-charcoal-600 dark:text-gray-700 body-font"},n.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},n.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},n.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"Manage containers",n.createElement("br",{className:"hidden lg:inline-block"})),n.createElement("p",{className:"mb-8 leading-relaxed dark:text-gray-300 text-gray-900"},"List, Search, Inspect, Connect, Run and Stop containers.")),n.createElement("div",{className:"lg:w-5/6 md:w-4/5 w-5/6 flex flex:col gap-10"},n.createElement(s.Z,{className:"py-4",alt:"Manage containers",sources:{light:(0,c.Z)("img/features/manage-containers.png"),dark:(0,c.Z)("img/features/manage-containers.png")}})))))}function d(){return n.createElement("section",{className:"text-gray-900 bg-zinc-100 dark:text-gray-700 dark:bg-charcoal-800 body-font"},n.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},n.createElement("div",{className:"w-5/6 mb-10 md:mb-0"},n.createElement(s.Z,{className:"py-4",alt:"Pull image and manage registries",sources:{light:(0,c.Z)("img/features/pull-image.png"),dark:(0,c.Z)("img/features/pull-image.png")}})),n.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"},n.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"Build, Pull and Push images"),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Build images from the tool."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Pull and push images by managing registries."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Run containers from these images"))))}function o(){return n.createElement("div",null,n.createElement("section",{className:"text-gray-900 bg-zinc-200 dark:bg-charcoal-600 dark:text-gray-700 body-font"},n.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},n.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},n.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"Management from the tray icon",n.createElement("br",{className:"hidden lg:inline-block"})),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Check status and start/stop container engines."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Create new machine if needed as well as start or stop Podman machines directly from the tray icon."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Quickly check activity status and stay updated without losing focus from other tasks.")),n.createElement("div",{className:"lg:w-5/6 md:w-4/5 w-5/6 flex flex:col gap-10"},n.createElement(s.Z,{className:"rounded-lg shadow-lg md:mx-16 lg:mx-20",alt:"Manage Podman Machine",sources:{light:(0,c.Z)("img/features/management-from-tray-icon.png"),dark:(0,c.Z)("img/features/management-from-tray-icon.png")}})))))}function g(){return n.createElement("div",null,n.createElement("section",{className:"text-gray-900 bg-zinc-100 dark:bg-charcoal-800 dark:text-gray-700 body-font"},n.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},n.createElement("div",{className:"lg:w-5/6 md:w-4/5 w-5/6 flex flex:col gap-10"},n.createElement(s.Z,{className:"py-4",alt:"Manage Podman Machine",sources:{light:(0,c.Z)("img/features/manage-podman-machine.png"),dark:(0,c.Z)("img/features/manage-podman-machine.png")}})),n.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"},n.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"Manage Podman resources",n.createElement("br",{className:"hidden lg:inline-block"})),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"View allocated memory, CPU and storage."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Create new machine if needed")))))}function x(){return n.createElement("div",null,n.createElement("section",{className:"text-gray-900 bg-zinc-200 dark:bg-charcoal-600 dark:text-gray-700 body-font"},n.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},n.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},n.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"Create and start Pods with Podman",n.createElement("br",{className:"hidden lg:inline-block"})),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Select containers to run as a Pod."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Play Kubernetes YAML locally without Kubernetes."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Generate Kubernetes YAML from Pods.")),n.createElement("div",{className:"lg:w-5/6 md:w-4/5 w-5/6 flex flex:col gap-10"},n.createElement(s.Z,{className:"py-4",alt:"Manage Pods",sources:{light:(0,c.Z)("img/features/manage-pods.png"),dark:(0,c.Z)("img/features/manage-pods.png")}})))))}function f(){return n.createElement("section",{className:"text-gray-900 bg-zinc-100 dark:bg-charcoal-800 dark:text-gray-700 body-font"},n.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},n.createElement("div",{className:"lg:w-5/6 md:w-4/5 w-5/6 flex flex:col gap-10"},n.createElement(s.Z,{className:"py-4",alt:"Pull image and manage registries",sources:{light:(0,c.Z)("img/ddextensions/dd-support.png"),dark:(0,c.Z)("img/ddextensions/dd-support.png")}})),n.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"},n.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"},"Import Docker Desktop extensions"),n.createElement("br",{className:"hidden lg:inline-block"}),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"Specify OCI image of a Docker Desktop extension to import it."),n.createElement("p",{className:"leading-relaxed list-item dark:text-gray-300 text-gray-900"},"For example: security scanner or deploy to OpenShift extensions."))))}function u(){const{siteConfig:e}=(0,l.Z)();return n.createElement(r.Z,{title:e.title,description:"Features"},n.createElement(m.Z,null),n.createElement(i,null),n.createElement(d,null),n.createElement(o,null),n.createElement(g,null),n.createElement(x,null),n.createElement(f,null))}}}]);