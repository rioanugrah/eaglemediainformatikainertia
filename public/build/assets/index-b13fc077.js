import{q as f,W as h,j as e,d as j}from"./app-68816f60.js";import{B as v}from"./button-6a186830.js";import"./sheet-152034eb.js";import"./index-46cbd623.js";import"./command-6ddf525c.js";import"./menu-e9e3cfe3.js";import{I as o}from"./input-error-92aee2dc.js";import{L as n}from"./label-82d46120.js";import{I as l}from"./input-a6c10c19.js";import{C as g,a as C,b as N,c as y,d as b}from"./card-52042284.js";import{A as k}from"./app-layout-9a9a5d22.js";import{z as I}from"./dialog-1d157e3a.js";import"./icon-c442931a.js";import"./react-icons.esm-8cab37da.js";import"./index-ae6cdc4f.js";import"./Combination-4ece5043.js";import"./index-4e72858c.js";import"./floating-ui.react-dom-1c488868.js";import"./index-bc4b2fa3.js";import"./index-3e418a37.js";import"./label-136b1232.js";function w({mustVerifyEmail:a,status:d}){const s=f().props.auth.user,{data:t,setData:i,patch:u,errors:m,processing:c,recentlySuccessful:p}=h({name:s.name,username:s.username,email:s.email}),x=r=>{r.preventDefault(),u(route("profile.update"))};return e.jsxs(g,{children:[e.jsxs(C,{children:[e.jsx(N,{children:"Profile Information"}),e.jsx(y,{children:"Update your account's profile information and email address."})]}),e.jsx(b,{children:e.jsxs("form",{onSubmit:x,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"name",children:"Name"}),e.jsx(l,{id:"name",className:"mt-1 block w-full",value:t.name,onChange:r=>i("name",r.target.value),required:!0,autoFocus:!0,autoComplete:"name"}),e.jsx(o,{className:"mt-2",message:m.name})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"username",children:"Username"}),e.jsx(l,{id:"username",className:"mt-1 block w-full",value:t.username,onChange:r=>i("username",r.target.value),required:!0,autoComplete:"username"}),e.jsx(o,{className:"mt-2",message:m.username})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(l,{id:"email",type:"email",className:"mt-1 block w-full",value:t.email,onChange:r=>i("email",r.target.value),required:!0,autoComplete:"username"}),e.jsx(o,{className:"mt-2",message:m.email})]}),a&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"mt-2 text-sm text-gray-800",children:["Your email address is unverified.",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"rounded-md text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e.jsx("div",{className:"mt-2 text-sm font-medium text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(v,{disabled:c,children:"Save"}),e.jsx(I,{show:p,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Saved."})})]})]})})]})}w.layout=a=>e.jsx(k,{title:"Profile",children:a});export{w as default};