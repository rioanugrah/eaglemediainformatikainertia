import{W as p,r as d,j as s}from"./app-32e4e76a.js";import{I as l}from"./input-error-b7ca67b5.js";import{G as c}from"./guest-layout-9734d28a.js";import{L as u}from"./label-47896067.js";import{I as f}from"./input-5010e72a.js";import{B as w}from"./button-a1fafa34.js";import"./card-c238f1b7.js";import"./IconCheck-2d79c95c.js";import"./theme-toggle-d06513df.js";import"./icon-932d723b.js";import"./index-ed135bb3.js";function x(){const{data:r,setData:t,post:a,processing:e,errors:i,reset:m}=p({password:""});d.useEffect(()=>()=>{m("password")},[]);const n=o=>{o.preventDefault(),a(route("password.confirm"))};return s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(u,{htmlFor:"password",children:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoFocus:!0,onChange:o=>t("password",o.target.value)}),s.jsx(l,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(w,{className:"ml-4",disabled:e,children:"Confirm"})})]})}x.layout=r=>s.jsx(c,{title:"Confirm Password",description:"This is a secure area of the application. Please confirm your password before continuing.",children:r});export{x as default};