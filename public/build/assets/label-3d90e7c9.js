import{U as K,r as a}from"./app-5ce5c845.js";import{K as Q,o as O,a as q,y as J,n as X,L as Z}from"./dialog-0de110a7.js";const V=typeof document<"u"?K.useLayoutEffect:()=>{};function ee(t){const n=a.useRef(null);return V(()=>{n.current=t},[t]),a.useCallback((...e)=>{const r=n.current;return r==null?void 0:r(...e)},[])}const y=t=>{var n;return(n=t==null?void 0:t.ownerDocument)!==null&&n!==void 0?n:document},E=t=>t&&"window"in t&&t.window===t?t:y(t).defaultView||window;function te(t){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent)}function ne(t){var n;return typeof window<"u"&&window.navigator!=null?t.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function j(t){let n=null;return()=>(n==null&&(n=t()),n)}const re=j(function(){return ne(/^Mac/i)}),oe=j(function(){return te(/Android/i)});function ie(t){return t.mozInputSource===0&&t.isTrusted?!0:oe()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}class ue{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,e){this.nativeEvent=e,this.target=e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget,this.bubbles=e.bubbles,this.cancelable=e.cancelable,this.defaultPrevented=e.defaultPrevented,this.eventPhase=e.eventPhase,this.isTrusted=e.isTrusted,this.timeStamp=e.timeStamp,this.type=n}}function _(t){let n=a.useRef({isFocused:!1,observer:null});V(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let e=ee(r=>{t==null||t(r)});return a.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,u=l=>{n.current.isFocused=!1,o.disabled&&e(new ue("blur",l)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",u,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var l;(l=n.current.observer)===null||l===void 0||l.disconnect();let i=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:i})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:i}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[e])}function ae(t){let{isDisabled:n,onFocus:e,onBlur:r,onFocusChange:o}=t;const u=a.useCallback(c=>{if(c.target===c.currentTarget)return r&&r(c),o&&o(!1),!0},[r,o]),l=_(u),i=a.useCallback(c=>{const d=y(c.target);c.target===c.currentTarget&&d.activeElement===c.target&&(e&&e(c),o&&o(!0),l(c))},[o,e,l]);return{focusProps:{onFocus:!n&&(e||o||r)?i:void 0,onBlur:!n&&(r||o)?u:void 0}}}let T=null,k=new Set,w=new Map,h=!1,x=!1;const se={Tab:!0,Escape:!0};function I(t,n){for(let e of k)e(t,n)}function le(t){return!(t.metaKey||!re()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function L(t){h=!0,le(t)&&(T="keyboard",I("keyboard",t))}function v(t){T="pointer",(t.type==="mousedown"||t.type==="pointerdown")&&(h=!0,I("pointer",t))}function U(t){ie(t)&&(h=!0,T="virtual")}function G(t){t.target===window||t.target===document||(!h&&!x&&(T="virtual",I("virtual",t)),h=!1,x=!1)}function R(){h=!1,x=!0}function S(t){if(typeof window>"u"||w.get(E(t)))return;const n=E(t),e=y(t);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){h=!0,r.apply(this,arguments)},e.addEventListener("keydown",L,!0),e.addEventListener("keyup",L,!0),e.addEventListener("click",U,!0),n.addEventListener("focus",G,!0),n.addEventListener("blur",R,!1),typeof PointerEvent<"u"?(e.addEventListener("pointerdown",v,!0),e.addEventListener("pointermove",v,!0),e.addEventListener("pointerup",v,!0)):(e.addEventListener("mousedown",v,!0),e.addEventListener("mousemove",v,!0),e.addEventListener("mouseup",v,!0)),n.addEventListener("beforeunload",()=>{N(t)},{once:!0}),w.set(n,{focus:r})}const N=(t,n)=>{const e=E(t),r=y(t);n&&r.removeEventListener("DOMContentLoaded",n),w.has(e)&&(e.HTMLElement.prototype.focus=w.get(e).focus,r.removeEventListener("keydown",L,!0),r.removeEventListener("keyup",L,!0),r.removeEventListener("click",U,!0),e.removeEventListener("focus",G,!0),e.removeEventListener("blur",R,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",v,!0),r.removeEventListener("pointermove",v,!0),r.removeEventListener("pointerup",v,!0)):(r.removeEventListener("mousedown",v,!0),r.removeEventListener("mousemove",v,!0),r.removeEventListener("mouseup",v,!0)),w.delete(e))};function ce(t){const n=y(t);let e;return n.readyState!=="loading"?S(t):(e=()=>{S(t)},n.addEventListener("DOMContentLoaded",e)),()=>N(t,e)}typeof document<"u"&&ce();function Y(){return T!=="pointer"}const de=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function fe(t,n,e){var r;const o=typeof window<"u"?E(e==null?void 0:e.target).HTMLInputElement:HTMLInputElement,u=typeof window<"u"?E(e==null?void 0:e.target).HTMLTextAreaElement:HTMLTextAreaElement,l=typeof window<"u"?E(e==null?void 0:e.target).HTMLElement:HTMLElement,i=typeof window<"u"?E(e==null?void 0:e.target).KeyboardEvent:KeyboardEvent;return t=t||(e==null?void 0:e.target)instanceof o&&!de.has(e==null||(r=e.target)===null||r===void 0?void 0:r.type)||(e==null?void 0:e.target)instanceof u||(e==null?void 0:e.target)instanceof l&&(e==null?void 0:e.target.isContentEditable),!(t&&n==="keyboard"&&e instanceof i&&!se[e.key])}function ve(t,n,e){S(),a.useEffect(()=>{let r=(o,u)=>{fe(!!(e!=null&&e.isTextInput),o,u)&&t(Y())};return k.add(r),()=>{k.delete(r)}},n)}function pe(t){let{isDisabled:n,onBlurWithin:e,onFocusWithin:r,onFocusWithinChange:o}=t,u=a.useRef({isFocusWithin:!1}),l=a.useCallback(d=>{u.current.isFocusWithin&&!d.currentTarget.contains(d.relatedTarget)&&(u.current.isFocusWithin=!1,e&&e(d),o&&o(!1))},[e,o,u]),i=_(l),c=a.useCallback(d=>{!u.current.isFocusWithin&&document.activeElement===d.target&&(r&&r(d),o&&o(!0),u.current.isFocusWithin=!0,i(d))},[r,o,i]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:c,onBlur:l}}}let F=!1,C=0;function D(){F=!0,setTimeout(()=>{F=!1},50)}function A(t){t.pointerType==="touch"&&D()}function be(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",A):document.addEventListener("touchend",D),C++,()=>{C--,!(C>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",A):document.removeEventListener("touchend",D))}}function Fe(t){let{onHoverStart:n,onHoverChange:e,onHoverEnd:r,isDisabled:o}=t,[u,l]=a.useState(!1),i=a.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;a.useEffect(be,[]);let{hoverProps:c,triggerHoverEnd:d}=a.useMemo(()=>{let f=(s,m)=>{if(i.pointerType=m,o||m==="touch"||i.isHovered||!s.currentTarget.contains(s.target))return;i.isHovered=!0;let g=s.currentTarget;i.target=g,n&&n({type:"hoverstart",target:g,pointerType:m}),e&&e(!0),l(!0)},b=(s,m)=>{if(i.pointerType="",i.target=null,m==="touch"||!i.isHovered)return;i.isHovered=!1;let g=s.currentTarget;r&&r({type:"hoverend",target:g,pointerType:m}),e&&e(!1),l(!1)},$={};return typeof PointerEvent<"u"?($.onPointerEnter=s=>{F&&s.pointerType==="mouse"||f(s,s.pointerType)},$.onPointerLeave=s=>{!o&&s.currentTarget.contains(s.target)&&b(s,s.pointerType)}):($.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},$.onMouseEnter=s=>{!i.ignoreEmulatedMouseEvents&&!F&&f(s,"mouse"),i.ignoreEmulatedMouseEvents=!1},$.onMouseLeave=s=>{!o&&s.currentTarget.contains(s.target)&&b(s,"mouse")}),{hoverProps:$,triggerHoverEnd:b}},[n,e,r,o,i]);return a.useEffect(()=>{o&&d({currentTarget:i.target},i.pointerType)},[o]),{hoverProps:c,isHovered:u}}function He(t={}){let{autoFocus:n=!1,isTextInput:e,within:r}=t,o=a.useRef({isFocused:!1,isFocusVisible:n||Y()}),[u,l]=a.useState(!1),[i,c]=a.useState(()=>o.current.isFocused&&o.current.isFocusVisible),d=a.useCallback(()=>c(o.current.isFocused&&o.current.isFocusVisible),[]),f=a.useCallback(s=>{o.current.isFocused=s,l(s),d()},[d]);ve(s=>{o.current.isFocusVisible=s,d()},[],{isTextInput:e});let{focusProps:b}=ae({isDisabled:r,onFocusChange:f}),{focusWithinProps:$}=pe({isDisabled:!r,onFocusWithinChange:f});return{isFocused:u,isFocusVisible:i,focusProps:r?$:b}}let $e=a.createContext(void 0);function ge(){return a.useContext($e)}function Me(t){let n=t.parentElement,e=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(e=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return r&&me(e)?!1:r}function me(t){if(!t)return!1;let n=t.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}let H=a.createContext(null);H.displayName="LabelContext";function z(){let t=a.useContext(H);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return t}function Ee(t){var n,e,r;let o=(e=(n=a.useContext(H))==null?void 0:n.value)!=null?e:void 0;return((r=t==null?void 0:t.length)!=null?r:0)>0?[o,...t].filter(Boolean).join(" "):o}function Pe({inherit:t=!1}={}){let n=Ee(),[e,r]=a.useState([]),o=t?[n,...e].filter(Boolean):e;return[o.length>0?o.join(" "):void 0,a.useMemo(()=>function(u){let l=O(c=>(r(d=>[...d,c]),()=>r(d=>{let f=d.slice(),b=f.indexOf(c);return b!==-1&&f.splice(b,1),f}))),i=a.useMemo(()=>({register:l,slot:u.slot,name:u.name,props:u.props,value:u.value}),[l,u.slot,u.name,u.props,u.value]);return K.createElement(H.Provider,{value:i},u.children)},[r])]}let he="label";function we(t,n){var e;let r=a.useId(),o=z(),u=ge(),l=q(),{id:i=`headlessui-label-${r}`,htmlFor:c=u??((e=o.props)==null?void 0:e.htmlFor),passive:d=!1,...f}=t,b=J(n);X(()=>o.register(i),[i,o.register]);let $=O(M=>{let P=M.currentTarget;if(P instanceof HTMLLabelElement&&M.preventDefault(),o.props&&"onClick"in o.props&&typeof o.props.onClick=="function"&&o.props.onClick(M),P instanceof HTMLLabelElement){let p=document.getElementById(P.htmlFor);if(p){let W=p.getAttribute("disabled");if(W==="true"||W==="")return;let B=p.getAttribute("aria-disabled");if(B==="true"||B==="")return;(p instanceof HTMLInputElement&&(p.type==="radio"||p.type==="checkbox")||p.role==="radio"||p.role==="checkbox"||p.role==="switch")&&p.click(),p.focus({preventScroll:!0})}}}),s=l||!1,m=a.useMemo(()=>({...o.slot,disabled:s}),[o.slot,s]),g={ref:b,...o.props,id:i,htmlFor:c,onClick:$};return d&&("onClick"in g&&(delete g.htmlFor,delete g.onClick),"onClick"in f&&delete f.onClick),Z()({ourProps:g,theirProps:f,slot:m,defaultTag:c?he:"div",name:o.name||"Label"})}let ye=Q(we),Ce=Object.assign(ye,{});export{He as $,Ee as I,Pe as K,z as P,Ce as Q,Fe as a,Me as r,ge as u};
