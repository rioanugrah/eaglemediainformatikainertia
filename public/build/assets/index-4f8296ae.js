import{r as t}from"./app-32e4e76a.js";function c(r){const e=t.useRef({value:r,previous:r});return t.useMemo(()=>(e.current.value!==r&&(e.current.previous=e.current.value,e.current.value=r),e.current.previous),[r])}export{c as $};