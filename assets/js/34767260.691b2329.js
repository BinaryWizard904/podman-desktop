"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72179],{14523:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=n(24246),s=n(71670);n(23930),n(39798);const o={title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",slug:"wasm-workloads-on-macos-and-windows-with-podman",authors:["benoitf"],tags:["podman-desktop","wasm","wasi","WebAssembly"],hide_table_of_contents:!1,image:"/img/blog/run-webassembly-wasm-workloads-windows-and-macos/webassembly-podman.webp"},r=void 0,l={permalink:"/blog/wasm-workloads-on-macos-and-windows-with-podman",source:"@site/blog/2024-01-29-run-webassembly-wasm-workloads-windows-and-macos.md",title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",date:"2024-01-29T00:00:00.000Z",formattedDate:"January 29, 2024",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"wasm",permalink:"/blog/tags/wasm"},{label:"wasi",permalink:"/blog/tags/wasi"},{label:"WebAssembly",permalink:"/blog/tags/web-assembly"}],readingTime:10.7,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Principal Software Engineer",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf"}],frontMatter:{title:"Unlock WebAssembly on macOS & Windows",description:"Spinning a OCI container image containing a WebAssembly/Wasm workload on macOS or Windows should be as simple as running any other OCI image.",slug:"wasm-workloads-on-macos-and-windows-with-podman",authors:["benoitf"],tags:["podman-desktop","wasm","wasi","WebAssembly"],hide_table_of_contents:!1,image:"/img/blog/run-webassembly-wasm-workloads-windows-and-macos/webassembly-podman.webp"},unlisted:!1,prevItem:{title:"Podman Desktop Wins 2024 DEVIES Award",permalink:"/blog/podman-desktop-wins-devies-award.md"},nextItem:{title:"Podman Desktop 1.7 Release",permalink:"/blog/podman-desktop-release-1.7"}},i={authorsImageUrls:[void 0]},u=[];function c(e){const a={img:"img",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Seamlessly run WebAssembly/Wasm binaries on macOS and Windows"}),"\n",(0,t.jsx)(a.p,{children:"You might have heard excitement recently about Wasm and WASI. Imagine a world where you can effortlessly run Wasm binaries and distribute them using Open Container Initiative (OCI) container images \u2013 a singular image deployable across multiple architectures."}),"\n",(0,t.jsx)(a.p,{children:"Though the concept seemed straightforward, accomplishing this task proved to be quite challenging, particularly on macOS and Windows. The complexity comes from the additional virtual machine running Linux. This machine needs all of the dependencies and prerequisites correctly setup."}),"\n",(0,t.jsx)(a.p,{children:"The wait is over. Our blog post unveils the solution, guiding you through the process of enabling Wasm workloads on both macOS and Windows."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"hero",src:n(77334).Z+"",width:"960",height:"480"})})]})}function d(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},39798:(e,a,n)=>{n.d(a,{Z:()=>r});n(27378);var t=n(38944);const s={tabItem:"tabItem_wHwb"};var o=n(24246);function r(e){let{children:a,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,r),hidden:n,children:a})}},23930:(e,a,n)=>{n.d(a,{Z:()=>I});var t=n(27378),s=n(38944),o=n(83457),r=n(3620),l=n(9834),i=n(30654),u=n(70784),c=n(71819);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function b(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const s=(0,r.k6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i._X)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(s.location.search);a.set(o,e),s.replace({...s.location,search:a.toString()})}),[o,s])]}function h(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,o=m(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[u,d]=p({queryString:n,groupId:s}),[h,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,o]=(0,c.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),w=(()=>{const e=u??h;return b({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{w&&i(w)}),[w]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(76457);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=n(24246);function y(e){let{className:a,block:n,selectedValue:t,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const a=e.currentTarget,n=i.indexOf(a),s=l[n].value;s!==t&&(u(a),r(s))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.Z)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function k(e){const a=h(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",w.tabList),children:[(0,f.jsx)(y,{...e,...a}),(0,f.jsx)(v,{...e,...a})]})}function I(e){const a=(0,g.Z)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(a))}},77334:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/webassembly-podman-e40f6760fbeda109aa109b4a4d926f40.webp"},71670:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>r});var t=n(27378);const s={},o=t.createContext(s);function r(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);