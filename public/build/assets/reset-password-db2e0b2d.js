import{W as w,r as f,j as s}from"./app-32e4e76a.js";import{I as m}from"./input-error-b7ca67b5.js";import{L as i}from"./label-47896067.js";import{I as l}from"./input-5010e72a.js";import{B as x}from"./button-a1fafa34.js";import{G as j}from"./guest-layout-9734d28a.js";import"./IconCheck-2d79c95c.js";import"./index-ed135bb3.js";import"./card-c238f1b7.js";import"./theme-toggle-d06513df.js";import"./icon-932d723b.js";function h({token:e,email:n}){const{data:o,setData:r,post:d,processing:p,errors:t,reset:c}=w({token:e,email:n,password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),d(route("password.store"))};return s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"email",children:"Email "}),s.jsx(l,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s.jsx(m,{message:t.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password",children:"Password"}),s.jsx(l,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",autoFocus:!0,onChange:a=>r("password",a.target.value)}),s.jsx(m,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(i,{htmlFor:"password_confirmation",children:"Confirm Password"}),s.jsx(l,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(x,{className:"ml-4",disabled:p,children:"Reset Password"})})]})}h.layout=e=>s.jsx(j,{title:"Reset Password",description:"Please insert your new password before continuing.",children:e});export{h as default};