import{W as n,j as e}from"./app-4b2d981d.js";import{G as u}from"./guest-layout-c95d21ab.js";import{B as d}from"./button-c516e352.js";import{I as p}from"./input-40ed39c4.js";import{I as c}from"./input-error-f9af0044.js";import"./card-3e741120.js";import"./IconCheck-b7165752.js";import"./theme-toggle-bd7b8353.js";import"./icon-e1bb86bf.js";function x({status:t}){const{data:s,setData:a,post:r,processing:m,errors:l}=n({email:""}),i=o=>{o.preventDefault(),r(route("password.email"))};return e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsxs("form",{onSubmit:i,children:[e.jsx(p,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoFocus:!0,onChange:o=>a("email",o.target.value),placeholder:"Email"}),e.jsx(c,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(d,{className:"ml-4",disabled:m,children:"Send"})})]})]})}x.layout=t=>e.jsx(u,{title:"Forgot Password",description:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",children:t});export{x as default};