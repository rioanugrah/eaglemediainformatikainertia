import{q as b,r as o,j as e,d as h,y as p}from"./app-32e4e76a.js";import"./button-a1fafa34.js";import{C as f,a as y,b as k,d as C,e as j}from"./card-c238f1b7.js";import{A as w}from"./app-layout-f3a1d847.js";import"./IconCheck-2d79c95c.js";import"./icon-932d723b.js";import"./XMarkIcon-9a8e623c.js";import"./index-ed135bb3.js";import"./label-57d6b833.js";import"./logo_eagle_media_informatika-bdbe21b7.js";import"./floating-ui.react-dom-29957443.js";import"./menuadministrator-414e8e19.js";function v(t){const{errors:a}=b().props,[n,g]=o.useState(t.role.name),[l,m]=o.useState([]);o.useState(!1);const[u,i]=o.useState(!1),c=r=>{const s=[...r.target.options].filter(d=>d.selected).map(d=>d.value);console.log("updatedOptions",s),m(s)},x=r=>{r.preventDefault(),i(!0),p.post(route("roles.update",[t.role.id]),{name:n,permission:l},{onFinish:()=>{i(!1)}})};return e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(y,{children:e.jsx(k,{children:"Update Roles"})}),e.jsxs("form",{onSubmit:x,children:[e.jsxs(C,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),e.jsx("input",{type:"text",value:n,onChange:r=>g(r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",placeholder:"Roles Name"}),a.role_name&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.role_name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Guard Name"}),e.jsxs("select",{multiple:!0,value:l,onChange:c,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{children:"Choose Permission"}),t.custom_permission.map((r,s)=>e.jsx("option",{value:r.name,children:r.name}))]}),a.role_guard_name&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:a.role_guard_name})]})]}),e.jsxs(j,{children:[e.jsx(h,{href:route("roles.index"),className:"mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",children:"Back"}),u?e.jsxs("button",{disabled:!0,type:"button",className:"me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",className:"me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Loading..."]}):e.jsx("button",{className:"mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800",children:"Submit"})]})]})]})})}v.layout=t=>e.jsx(w,{title:"Edit Roles",children:t});export{v as default};
