import{j as e}from"./app-48a73d6f.js";import"./button-ef600e10.js";import"./sheet-221f7229.js";import"./index-2ed82434.js";import{A as d,$ as n,m as l}from"./command-0bcbffa7.js";import"./XMarkIcon-d5eac91c.js";import{C as m,a as o,b as c,c as x,d as j}from"./card-82b9fbbd.js";import{UserListOptions as p}from"./user-list-options-ccbc4c48.js";import{A as h}from"./app-layout-b789456a.js";import"./IconCheck-cced5415.js";import"./react-icons.esm-d4d217b8.js";import"./index-943e7502.js";import"./Combination-bf475783.js";import"./index-b7bcbd7c.js";import"./floating-ui.react-dom-01b7a512.js";import"./index-7e5e9982.js";import"./index-cbb0b026.js";import"./icon-cc7f4ae3.js";import"./label-b5ca4213.js";import"./logo_eagle_media_informatika-1bdfb645.js";import"./menuadministrator-01361e6b.js";function f({user:r}){return e.jsxs(m,{className:"mx-auto max-w-sm lg:mx-0",children:[e.jsx(o,{children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx(c,{children:"Profile Detail"}),e.jsx(x,{children:"All profile information from this user"})]}),e.jsx(p,{user:r,details:!1})]})}),e.jsxs(j,{children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs(d,{className:"h-52 w-52 border-2",children:[e.jsx(n,{src:r.avatar}),e.jsx(l,{children:r.acronym})]})}),e.jsxs("div",{className:"mt-5 text-center",children:[e.jsx("h4",{className:"font-medium text-primary",children:r.name}),e.jsx("p",{className:"text-sm text-muted-foreground",children:r.email})]}),e.jsxs("div",{className:"mt-5 space-y-2",children:[e.jsxs(i,{children:[e.jsx(s,{children:"Username"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.username})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Joined"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.joined})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Verified"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.email_verified})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Updated"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.updated})]})]})]})]})}function i({children:r}){return e.jsx("div",{className:"grid grid-cols-12 text-sm",children:r})}function s({children:r}){return e.jsx("div",{className:"col-span-4 font-medium text-muted-foreground",children:r})}function t({children:r}){return e.jsx("div",{className:"col-span-1 font-medium text-muted-foreground",children:r})}function a({children:r}){return e.jsx("div",{className:"col-span-7 text-primary",children:r})}f.layout=r=>e.jsx(h,{title:"User Detail",children:r});export{f as default};