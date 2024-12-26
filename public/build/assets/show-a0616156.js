import{j as e}from"./app-68816f60.js";import"./button-6a186830.js";import"./sheet-152034eb.js";import"./index-46cbd623.js";import{A as d,$ as n,m as l}from"./command-6ddf525c.js";import"./menu-e9e3cfe3.js";import{C as m,a as c,b as o,c as x,d as j}from"./card-52042284.js";import{UserListOptions as p}from"./user-list-options-331ce3e0.js";import{A as h}from"./app-layout-9a9a5d22.js";import"./icon-c442931a.js";import"./react-icons.esm-8cab37da.js";import"./index-ae6cdc4f.js";import"./Combination-4ece5043.js";import"./index-4e72858c.js";import"./floating-ui.react-dom-1c488868.js";import"./index-bc4b2fa3.js";import"./index-3e418a37.js";import"./label-136b1232.js";import"./dialog-1d157e3a.js";function f({user:r}){return e.jsxs(m,{className:"mx-auto max-w-sm lg:mx-0",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx(o,{children:"Profile Detail"}),e.jsx(x,{children:"All profile information from this user"})]}),e.jsx(p,{user:r,details:!1})]})}),e.jsxs(j,{children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs(d,{className:"h-52 w-52 border-2",children:[e.jsx(n,{src:r.avatar}),e.jsx(l,{children:r.acronym})]})}),e.jsxs("div",{className:"mt-5 text-center",children:[e.jsx("h4",{className:"font-medium text-primary",children:r.name}),e.jsx("p",{className:"text-sm text-muted-foreground",children:r.email})]}),e.jsxs("div",{className:"mt-5 space-y-2",children:[e.jsxs(i,{children:[e.jsx(s,{children:"Username"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.username})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Joined"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.joined})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Verified"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.email_verified})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Updated"}),e.jsx(t,{children:":"}),e.jsx(a,{children:r.updated})]})]})]})]})}function i({children:r}){return e.jsx("div",{className:"grid grid-cols-12 text-sm",children:r})}function s({children:r}){return e.jsx("div",{className:"col-span-4 font-medium text-muted-foreground",children:r})}function t({children:r}){return e.jsx("div",{className:"col-span-1 font-medium text-muted-foreground",children:r})}function a({children:r}){return e.jsx("div",{className:"col-span-7 text-primary",children:r})}f.layout=r=>e.jsx(h,{title:"User Detail",children:r});export{f as default};