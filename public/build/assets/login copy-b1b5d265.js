import{W as u,r as x,j as e}from"./app-be20bef8.js";import{I as o}from"./input-error-f9491367.js";import{I as i}from"./input-12b1902d.js";import{C as f}from"./checkbox-ebd1caff.js";import{B as h}from"./button-20848f55.js";import{L as l}from"./label-a9a95fb2.js";import{G as j}from"./guest-layout-e55a90fd.js";import{P as g}from"./primary-link-ac3c94ae.js";import"./IconCheck-bd80cdf9.js";import"./index-074bec93.js";import"./index-2f9b48a2.js";import"./index-e15d49d8.js";import"./index-949d00e4.js";import"./card-9b5db02f.js";import"./theme-toggle-049738b1.js";import"./icon-9aa90223.js";function b({status:r,canResetPassword:w}){const{data:a,setData:m,post:n,processing:c,errors:t,reset:d}=u({email:"",password:"",remember:!1});x.useEffect(()=>()=>{d("password")},[]);const p=s=>{s.preventDefault(),n(route("login"))};return e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",className:"capitalize",children:"email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",autoFocus:!0,onChange:s=>m("email",s.target.value)}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",className:"capitalize",children:"password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>m("password",s.target.value)}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(f,{name:"remember",checked:a.remember,onCheckedChange:s=>m("remember",s)}),e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(g,{href:route("register"),value:"register?"}),e.jsx(h,{className:"ml-4",disabled:c,children:"Log in"})]})]})]})}b.layout=r=>e.jsx(j,{title:"Login",description:"Welcome back, Login and jump to your dashboard",children:r});export{b as default};