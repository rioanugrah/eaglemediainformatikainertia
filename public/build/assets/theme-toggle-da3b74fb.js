import{j as e}from"./app-48a73d6f.js";import{B as r}from"./button-ef600e10.js";import{I as n}from"./icon-cc7f4ae3.js";function m(){function t(){document.documentElement.classList.add("[&_*]:!transition-none"),window.setTimeout(()=>{document.documentElement.classList.remove("[&_*]:!transition-none")},0)}function s(){t();let a=window.matchMedia("(prefers-color-scheme: dark)").matches,o=document.documentElement.classList.toggle("dark");o===a?delete window.localStorage.isDarkMode:window.localStorage.isDarkMode=o}return e.jsx(e.Fragment,{children:e.jsxs(r,{size:"icon",variant:"outline",className:"h-[2.6rem] w-[2.6rem] rounded-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.2] ",type:"button","aria-label":"Toggle dark mode",onClick:s,children:[e.jsx(n,{icon:"IconSun",className:"dark:hidden"}),e.jsx(n,{icon:"IconMoonStars",className:"hidden dark:block"})]})})}export{m as T};