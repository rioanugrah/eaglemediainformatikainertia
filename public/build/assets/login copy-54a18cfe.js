import{W as u,r as x,j as e}from"./app-ff0c987e.js";import{I as o}from"./input-error-293ba64a.js";import{I as i}from"./input-91396f29.js";import{C as f}from"./checkbox-3d82189e.js";import{B as h}from"./button-999723b8.js";import{L as l}from"./label-a39ba54b.js";import{G as j}from"./guest-layout-2ef937a1.js";import{P as g}from"./primary-link-9544250b.js";import"./IconCheck-a3e2a4d0.js";import"./index-5a24085a.js";import"./index-c9888fbc.js";import"./index-45aa3962.js";import"./index-c3488cab.js";import"./card-c6f55f02.js";import"./theme-toggle-c4241cc4.js";import"./icon-14c6e278.js";function b({status:r,canResetPassword:w}){const{data:a,setData:m,post:n,processing:c,errors:t,reset:d}=u({email:"",password:"",remember:!1});x.useEffect(()=>()=>{d("password")},[]);const p=s=>{s.preventDefault(),n(route("login"))};return e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",className:"capitalize",children:"email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",autoFocus:!0,onChange:s=>m("email",s.target.value)}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",className:"capitalize",children:"password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>m("password",s.target.value)}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(f,{name:"remember",checked:a.remember,onCheckedChange:s=>m("remember",s)}),e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[e.jsx(g,{href:route("register"),value:"register?"}),e.jsx(h,{className:"ml-4",disabled:c,children:"Log in"})]})]})]})}b.layout=r=>e.jsx(j,{title:"Login",description:"Welcome back, Login and jump to your dashboard",children:r});export{b as default};
