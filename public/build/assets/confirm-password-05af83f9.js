import{W as p,r as d,j as s}from"./app-075f5845.js";import{I as l}from"./input-error-8859ce2a.js";import{G as c}from"./guest-layout-06f08231.js";import{L as u}from"./label-a1545edb.js";import{I as f}from"./input-8b6e1af4.js";import{B as w}from"./button-3d216f4b.js";import"./card-6f9a1a67.js";import"./icon-d221877e.js";import"./theme-toggle-4b741069.js";import"./index-e8743c49.js";function x(){const{data:r,setData:t,post:a,processing:e,errors:i,reset:m}=p({password:""});d.useEffect(()=>()=>{m("password")},[]);const n=o=>{o.preventDefault(),a(route("password.confirm"))};return s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(u,{htmlFor:"password",children:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoFocus:!0,onChange:o=>t("password",o.target.value)}),s.jsx(l,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(w,{className:"ml-4",disabled:e,children:"Confirm"})})]})}x.layout=r=>s.jsx(c,{title:"Confirm Password",description:"This is a secure area of the application. Please confirm your password before continuing.",children:r});export{x as default};