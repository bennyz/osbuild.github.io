"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5252],{9218:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=s(5893),n=s(1151);const i={},r="org.osbuild.bootc.install-to-filesystem",l={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.bootc.install-to-filesystem",title:"org.osbuild.bootc.install-to-filesystem",description:"Run bootc install to-filesystem",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.bootc.install-to-filesystem.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootc.install-to-filesystem",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootc.install-to-filesystem",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.bootc.install-to-filesystem.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.authselect",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.authselect"},next:{title:"org.osbuild.bootc.install.config",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.bootc.install.config"}},d={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"orgosbuildbootcinstall-to-filesystem",children:"org.osbuild.bootc.install-to-filesystem"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Run bootc install to-filesystem"})}),"\n",(0,o.jsx)(t.p,{children:'Note that this needs the disk.img in the inputs as one continous\ndevices so that bootupd can install grub to the mbr. It also needs\nall relevant mount points for booting (e.g. /boot, /boot/efi) in\nmounted in the "mounts" path.\nBuildhost commands used: bootc'}),"\n",(0,o.jsx)(t.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "inputs": {\n    "type": "object",\n    "additionalProperties": false,\n    "required": [\n      "images"\n    ],\n    "properties": {\n      "images": {\n        "type": "object",\n        "additionalProperties": true\n      }\n    }\n  },\n  "options": {\n    "additionalProperties": false,\n    "properties": {\n      "root-ssh-authorized-keys": {\n        "description": "array of SSH Public Keys to add to roots authorized_keys",\n        "type": "array",\n        "items": {\n          "type": "string"\n        }\n      },\n      "kernel-args": {\n        "description": "array of additional kernel arguments",\n        "type": "array",\n        "items": {\n          "type": "string"\n        }\n      },\n      "target-imgref": {\n        "description": "Specify the image to fetch for subsequent updates",\n        "type": "string"\n      }\n    }\n  },\n  "devices": {\n    "type": "object",\n    "additionalProperties": true\n  },\n  "mounts": {\n    "type": "array"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var o=s(7294);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);