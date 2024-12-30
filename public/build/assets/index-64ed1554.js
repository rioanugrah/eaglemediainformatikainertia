import{r as l,W as h,j as e}from"./app-48a73d6f.js";import{B as s}from"./button-ef600e10.js";import"./sheet-221f7229.js";import"./index-2ed82434.js";import{D as j,a as y,b as w,c as D,d as g,e as C}from"./command-0bcbffa7.js";import"./XMarkIcon-d5eac91c.js";import{I as v}from"./input-error-738fc042.js";import{L as b}from"./label-57682825.js";import{I as A}from"./input-3c4bef21.js";import{C as I,a as E,b as F,c as N,d as S}from"./card-82b9fbbd.js";import{A as U}from"./appLayout-338bf04a.js";import"./IconCheck-cced5415.js";import"./react-icons.esm-d4d217b8.js";import"./index-943e7502.js";import"./Combination-bf475783.js";import"./index-b7bcbd7c.js";import"./floating-ui.react-dom-01b7a512.js";import"./index-7e5e9982.js";import"./index-cbb0b026.js";import"./icon-cc7f4ae3.js";import"./label-b5ca4213.js";import"./logo_eagle_media_informatika-1bdfb645.js";import"./menuadministrator-01361e6b.js";import"./menuUser-92a9f8b7.js";function k(){const[r,o]=l.useState(!1),a=l.useRef(),{data:d,setData:c,delete:p,processing:m,reset:n,errors:u}=h({password:""}),x=()=>{o(!0)},f=t=>{t.preventDefault(),p(route("danger.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>a.current.focus(),onFinish:()=>n()})},i=()=>{o(!1),n()};return e.jsxs(I,{children:[e.jsxs(E,{children:[e.jsx(F,{children:"Delete Account"}),e.jsx(N,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsxs(S,{children:[e.jsx(s,{variant:"destructive",onClick:x,children:"Delete Account"}),e.jsx(j,{open:r,onOpenChange:o,children:e.jsxs(y,{children:[e.jsxs(w,{children:[e.jsx(D,{children:"Are you sure you want to delete your account?"}),e.jsx(g,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."})]}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(b,{htmlFor:"password",children:"Password"}),e.jsx(A,{id:"password",type:"password",name:"password",ref:a,value:d.password,onChange:t=>c("password",t.target.value),className:"mt-1",autoFocus:!0,placeholder:"Password"}),e.jsx(v,{message:u.password,className:"mt-2"})]}),e.jsxs(C,{className:"gap-x-2",children:[e.jsx(s,{type:"button",variant:"outline",onClick:i,children:"Cancel"}),e.jsx(s,{variant:"destructive",disabled:m,children:"Delete Account"})]})]})]})})]})]})}k.layout=r=>e.jsx(U,{title:"Danger",children:r});export{k as default};