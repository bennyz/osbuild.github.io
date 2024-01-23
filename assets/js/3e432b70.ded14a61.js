"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[2951],{509:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=o(5893),t=o(1151);const r={},a="Uploading an image to Microsoft Azure",s={id:"user-guide/uploading-cloud-images/uploading-to-azure",title:"Uploading an image to Microsoft Azure",description:"osbuild-composer builds images and delivers them to [Microsoft Azure]",source:"@site/docs/user-guide/04-uploading-cloud-images/03-uploading-to-azure.md",sourceDirName:"user-guide/04-uploading-cloud-images",slug:"/user-guide/uploading-cloud-images/uploading-to-azure",permalink:"/docs/user-guide/uploading-cloud-images/uploading-to-azure",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/user-guide/04-uploading-cloud-images/03-uploading-to-azure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"userguide",previous:{title:"Uploading an image to an AWS S3 Bucket",permalink:"/docs/user-guide/uploading-cloud-images/uploading-to-aws-s3"},next:{title:"Uploading an image to GCP",permalink:"/docs/user-guide/uploading-cloud-images/uploading-to-gcp"}},u={},c=[{value:"Initial setup",id:"initial-setup",level:2},{value:"Deploy",id:"deploy",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"uploading-an-image-to-microsoft-azure",children:"Uploading an image to Microsoft Azure"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"osbuild-composer"})," builds images and delivers them to ",(0,i.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/",children:"Microsoft Azure"}),"\nautomatically. These images are ready to use with ",(0,i.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/services/virtual-machines/",children:"virtual machines"})," in the\nAzure cloud."]}),"\n",(0,i.jsx)(n.h2,{id:"initial-setup",children:"Initial setup"}),"\n",(0,i.jsxs)(n.p,{children:["Before you can upload images to Azure with ",(0,i.jsx)(n.code,{children:"osbuild-composer"}),", your account\nneeds some initial setup. Be sure to complete these steps"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a resource group"}),"\n",(0,i.jsx)(n.li,{children:"Create a storage account inside the resource group"}),"\n",(0,i.jsx)(n.li,{children:"Create a storage container within the storage account"}),"\n",(0,i.jsx)(n.li,{children:"Gather your access keys"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a detailed walkthrough on each step within the Azure portal, review the\n",(0,i.jsx)(n.a,{href:"https://www.redhat.com/en/blog/build-rhel-images-azure-image-builder",children:"Build RHEL images for Azure with Image Builder"})," post on the Red Hat Blog."]}),"\n",(0,i.jsxs)(n.p,{children:["Make a note of the following items during the setup so you can provide them to\n",(0,i.jsx)(n.code,{children:"osbuild-composer"})," during the build process:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the name of your storage account"}),"\n",(0,i.jsx)(n.li,{children:"the name of the storage container inside your storage account"}),"\n",(0,i.jsx)(n.li,{children:"the access key for your storage account"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,i.jsxs)(n.p,{children:["Push a blueprint containing your image configuration and create a new file\ncalled ",(0,i.jsx)(n.code,{children:"azure.toml"})," that contains the information about your Azure storage\naccount:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'provider = "azure"\n\n[settings]\nstorageAccount = "your storage account name"\nstorageAccessKey = "storage access key you copied in the Azure portal"\ncontainer = "your storage container name"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Build and deploy the image to Azure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"composer-cli compose start my_blueprint vhd my_image_key azure.toml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example ",(0,i.jsx)(n.code,{children:"my_blueprint"})," is the name of the blueprint containing your\nimage configuration. Replace ",(0,i.jsx)(n.code,{children:"my_image_key"})," with the preferred image name you\nwant to see in Azure. This is the name that appears inside your storage\ncontainer."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var i=o(7294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);