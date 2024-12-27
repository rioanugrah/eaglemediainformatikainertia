import{r as u,j as e,d as v}from"./app-ff0c987e.js";import"./button-999723b8.js";import"./sheet-8b905d54.js";import"./index-c11bd199.js";import{A as b,f as p,m as C}from"./command-319957e2.js";import"./menu-29f16f54.js";import{C as _,a as N,b as g,c as S,d as y,e as T}from"./card-c6f55f02.js";import{u as k,S as w,a as A,b as I,c as E,d as n,T as F,e as H,f as x,g as r,h as c,i as P,j as s}from"./sort-indicator-730e6c4b.js";import{UserListOptions as U}from"./user-list-options-51d59cc1.js";import{S as D}from"./simple-pagination-fda0a4ae.js";import{I as L}from"./input-91396f29.js";import{A as R}from"./app-layout-fe8e866d.js";import"./IconCheck-a3e2a4d0.js";import"./react-icons.esm-1fc6cfe9.js";import"./index-5a24085a.js";import"./Combination-d156fc32.js";import"./index-c3488cab.js";import"./floating-ui.react-dom-0ba14448.js";import"./index-45aa3962.js";import"./index-00da978c.js";import"./icon-14c6e278.js";import"./label-651bdf34.js";import"./dialog-0982442b.js";import"./index-c9888fbc.js";function V(a){const{data:j,meta:h,links:m}=a.users,[i,o]=u.useState(a.state);k({route:route("users.index"),values:i,only:["users"]});const d=t=>{let l=(i==null?void 0:i.direction)??"asc";const f=(i==null?void 0:i.field)??"created_at";t===f&&(l=l==="asc"?"desc":"asc"),o({...i,field:t,direction:l})};return e.jsxs(_,{children:[e.jsxs(N,{children:[e.jsx(g,{children:"Users"}),e.jsx(S,{children:"The list of the registered users."})]}),e.jsxs(y,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(w,{value:i==null?void 0:i.limit,onValueChange:t=>o({...i,limit:t}),children:[e.jsx(A,{className:"w-[180px]",children:e.jsx(I,{placeholder:(i==null?void 0:i.limit)??10})}),e.jsxs(E,{children:[e.jsx(n,{value:"10",children:"10"}),e.jsx(n,{value:"25",children:"25"}),e.jsx(n,{value:"50",children:"50"}),e.jsx(n,{value:"75",children:"75"}),e.jsx(n,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(L,{type:"text",value:i==null?void 0:i.search,onChange:t=>o(l=>({...l,search:t.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(F,{children:[e.jsx(H,{children:e.jsxs(x,{children:[e.jsx(r,{className:"w-[50px] text-center",children:"#"}),e.jsx(r,{onClick:()=>d("name"),children:e.jsx(c,{label:"name",column:"name",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("username"),children:e.jsx(c,{label:"username",column:"username",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("email_verified_at"),children:e.jsx(c,{label:"verified",column:"email_verified_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("created_at"),children:e.jsx(c,{label:"joined",column:"created_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{onClick:()=>d("updated_at"),children:e.jsx(c,{label:"updated",column:"updated_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(r,{})]})}),e.jsx(P,{children:j.length>0?e.jsx(e.Fragment,{children:j.map((t,l)=>e.jsxs(x,{children:[e.jsx(s,{className:"w-0 py-7 text-center",children:h.from+l}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-center font-normal",children:[e.jsx("div",{className:"mr-3 shrink-0",children:e.jsxs(b,{children:[e.jsx(p,{src:t.avatar}),e.jsx(C,{children:t.acronym})]})}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(v,{href:route("users.show",t),children:t.name})}),e.jsx("div",{className:"text-muted-foreground",children:t.email})]})]})}),e.jsx(s,{children:t.username}),e.jsx(s,{className:t.email_verified_at=="Email not verified"?"font-medium text-destructive":"",children:t.email_verified_at}),e.jsx(s,{children:t.created_at}),e.jsx(s,{children:t.updated_at}),e.jsx(s,{children:e.jsx("div",{className:"flex justify-end",children:e.jsx(U,{user:t})})})]},l))}):e.jsx(x,{children:e.jsx(s,{colSpan:7,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No users."})})})]})]}),e.jsx(T,{className:"flex items-center justify-between pt-6",children:e.jsx(D,{links:m,meta:h})})]})}V.layout=a=>e.jsx(R,{title:"Users",children:a});export{V as default};
