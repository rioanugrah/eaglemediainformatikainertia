import{U as P,r as a,$ as st,t as lt}from"./app-075f5845.js";import{$ as Oe,d as N,b as ee,e as ie,c as ut}from"./index-4bcc6e0a.js";import{$ as A,e as he,_ as F}from"./icon-d221877e.js";import{$ as M,a as dt}from"./index-e8743c49.js";import{u as ft,a as vt,o as pt,s as ht,l as mt,f as bt,b as $t,c as gt,h as yt}from"./floating-ui.react-dom-4c515601.js";function In(e){const t=e+"CollectionProvider",[n,r]=Oe(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=f=>{const{scope:E,children:i}=f,u=P.useRef(null),p=P.useRef(new Map).current;return P.createElement(o,{scope:E,itemMap:p,collectionRef:u},i)},c=e+"CollectionSlot",m=P.forwardRef((f,E)=>{const{scope:i,children:u}=f,p=s(c,i),g=A(E,p.collectionRef);return P.createElement(he,{ref:g},u)}),$=e+"CollectionItemSlot",v="data-radix-collection-item",l=P.forwardRef((f,E)=>{const{scope:i,children:u,...p}=f,g=P.useRef(null),b=A(E,g),h=s($,i);return P.useEffect(()=>(h.itemMap.set(g,{ref:g,...p}),()=>void h.itemMap.delete(g))),P.createElement(he,{[v]:"",ref:b},u)});function y(f){const E=s(e+"CollectionConsumer",f);return P.useCallback(()=>{const u=E.collectionRef.current;if(!u)return[];const p=Array.from(u.querySelectorAll(`[${v}]`));return Array.from(E.itemMap.values()).sort((h,S)=>p.indexOf(h.ref.current)-p.indexOf(S.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:d,Slot:m,ItemSlot:l},y,r]}function Et(e,t=globalThis==null?void 0:globalThis.document){const n=N(e);a.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const se="dismissableLayer.update",wt="dismissableLayer.pointerDownOutside",St="dismissableLayer.focusOutside";let me;const Re=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ct=a.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:d,onInteractOutside:c,onDismiss:m,...$}=e,v=a.useContext(Re),[l,y]=a.useState(null),f=(n=l==null?void 0:l.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,E]=a.useState({}),i=A(t,w=>y(w)),u=Array.from(v.layers),[p]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),g=u.indexOf(p),b=l?u.indexOf(l):-1,h=v.layersWithOutsidePointerEventsDisabled.size>0,S=b>=g,T=Pt(w=>{const x=w.target,H=[...v.branches].some(W=>W.contains(x));!S||H||(s==null||s(w),c==null||c(w),w.defaultPrevented||m==null||m())},f),C=Ot(w=>{const x=w.target;[...v.branches].some(W=>W.contains(x))||(d==null||d(w),c==null||c(w),w.defaultPrevented||m==null||m())},f);return Et(w=>{b===v.layers.size-1&&(o==null||o(w),!w.defaultPrevented&&m&&(w.preventDefault(),m()))},f),a.useEffect(()=>{if(l)return r&&(v.layersWithOutsidePointerEventsDisabled.size===0&&(me=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(l)),v.layers.add(l),be(),()=>{r&&v.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=me)}},[l,f,r,v]),a.useEffect(()=>()=>{l&&(v.layers.delete(l),v.layersWithOutsidePointerEventsDisabled.delete(l),be())},[l,v]),a.useEffect(()=>{const w=()=>E({});return document.addEventListener(se,w),()=>document.removeEventListener(se,w)},[]),a.createElement(M.div,F({},$,{ref:i,style:{pointerEvents:h?S?"auto":"none":void 0,...e.style},onFocusCapture:ee(e.onFocusCapture,C.onFocusCapture),onBlurCapture:ee(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:ee(e.onPointerDownCapture,T.onPointerDownCapture)}))}),xt=a.forwardRef((e,t)=>{const n=a.useContext(Re),r=a.useRef(null),o=A(t,r);return a.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),a.createElement(M.div,F({},e,{ref:o}))});function Pt(e,t=globalThis==null?void 0:globalThis.document){const n=N(e),r=a.useRef(!1),o=a.useRef(()=>{});return a.useEffect(()=>{const s=c=>{if(c.target&&!r.current){let $=function(){Te(wt,n,m,{discrete:!0})};const m={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=$,t.addEventListener("click",o.current,{once:!0})):$()}else t.removeEventListener("click",o.current);r.current=!1},d=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(d),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Ot(e,t=globalThis==null?void 0:globalThis.document){const n=N(e),r=a.useRef(!1);return a.useEffect(()=>{const o=s=>{s.target&&!r.current&&Te(St,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function be(){const e=new CustomEvent(se);document.dispatchEvent(e)}function Te(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?dt(o,s):o.dispatchEvent(s)}const kn=Ct,Nn=xt,Fn=a.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?st.createPortal(a.createElement(M.div,F({},o,{ref:t})),r):null}),Rt=a.createContext(void 0);function Mn(e){const t=a.useContext(Rt);return e||t||"ltr"}let te=0;function Wn(){a.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:$e()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:$e()),te++,()=>{te===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),te--}},[])}function $e(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const ne="focusScope.autoFocusOnMount",re="focusScope.autoFocusOnUnmount",ge={bubbles:!1,cancelable:!0},Bn=a.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...d}=e,[c,m]=a.useState(null),$=N(o),v=N(s),l=a.useRef(null),y=A(t,i=>m(i)),f=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let i=function(b){if(f.paused||!c)return;const h=b.target;c.contains(h)?l.current=h:R(l.current,{select:!0})},u=function(b){if(f.paused||!c)return;const h=b.relatedTarget;h!==null&&(c.contains(h)||R(l.current,{select:!0}))},p=function(b){if(document.activeElement===document.body)for(const S of b)S.removedNodes.length>0&&R(c)};document.addEventListener("focusin",i),document.addEventListener("focusout",u);const g=new MutationObserver(p);return c&&g.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",i),document.removeEventListener("focusout",u),g.disconnect()}}},[r,c,f.paused]),a.useEffect(()=>{if(c){Ee.add(f);const i=document.activeElement;if(!c.contains(i)){const p=new CustomEvent(ne,ge);c.addEventListener(ne,$),c.dispatchEvent(p),p.defaultPrevented||(Tt(It(Ae(c)),{select:!0}),document.activeElement===i&&R(c))}return()=>{c.removeEventListener(ne,$),setTimeout(()=>{const p=new CustomEvent(re,ge);c.addEventListener(re,v),c.dispatchEvent(p),p.defaultPrevented||R(i??document.body,{select:!0}),c.removeEventListener(re,v),Ee.remove(f)},0)}}},[c,$,v,f]);const E=a.useCallback(i=>{if(!n&&!r||f.paused)return;const u=i.key==="Tab"&&!i.altKey&&!i.ctrlKey&&!i.metaKey,p=document.activeElement;if(u&&p){const g=i.currentTarget,[b,h]=At(g);b&&h?!i.shiftKey&&p===h?(i.preventDefault(),n&&R(b,{select:!0})):i.shiftKey&&p===b&&(i.preventDefault(),n&&R(h,{select:!0})):p===g&&i.preventDefault()}},[n,r,f.paused]);return a.createElement(M.div,F({tabIndex:-1},d,{ref:y,onKeyDown:E}))});function Tt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(R(r,{select:t}),document.activeElement!==n)return}function At(e){const t=Ae(e),n=ye(t,e),r=ye(t.reverse(),e);return[n,r]}function Ae(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ye(e,t){for(const n of e)if(!Dt(n,{upTo:t}))return n}function Dt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function _t(e){return e instanceof HTMLInputElement&&"select"in e}function R(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&_t(e)&&t&&e.select()}}const Ee=Lt();function Lt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=we(e,t),e.unshift(t)},remove(t){var n;e=we(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function we(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function It(e){return e.filter(t=>t.tagName!=="A")}const kt=lt["useId".toString()]||(()=>{});let Nt=0;function Hn(e){const[t,n]=a.useState(kt());return ie(()=>{e||n(r=>r??String(Nt++))},[e]),e||(t?`radix-${t}`:"")}const De="Popper",[_e,Un]=Oe(De),[Ft,Le]=_e(De),Mt=e=>{const{__scopePopper:t,children:n}=e,[r,o]=a.useState(null);return a.createElement(Ft,{scope:t,anchor:r,onAnchorChange:o},n)},Wt="PopperAnchor",Bt=a.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,s=Le(Wt,n),d=a.useRef(null),c=A(t,d);return a.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||d.current)}),r?null:a.createElement(M.div,F({},o,{ref:c}))}),Ie="PopperContent",[Ht,zn]=_e(Ie),Ut=a.forwardRef((e,t)=>{var n,r,o,s,d,c,m,$;const{__scopePopper:v,side:l="bottom",sideOffset:y=0,align:f="center",alignOffset:E=0,arrowPadding:i=0,avoidCollisions:u=!0,collisionBoundary:p=[],collisionPadding:g=0,sticky:b="partial",hideWhenDetached:h=!1,updatePositionStrategy:S="optimized",onPlaced:T,...C}=e,w=Le(Ie,v),[x,H]=a.useState(null),W=A(t,B=>H(B)),[J,Xe]=a.useState(null),D=ut(J),je=(n=D==null?void 0:D.width)!==null&&n!==void 0?n:0,ue=(r=D==null?void 0:D.height)!==null&&r!==void 0?r:0,Ye=l+(f!=="center"?"-"+f:""),Ve=typeof g=="number"?g:{top:0,right:0,bottom:0,left:0,...g},de=Array.isArray(p)?p:[p],Ze=de.length>0,U={padding:Ve,boundary:de.filter(zt),altBoundary:Ze},{refs:Ge,floatingStyles:fe,placement:qe,isPositioned:z,middlewareData:_}=ft({strategy:"fixed",placement:Ye,whileElementsMounted:(...B)=>vt(...B,{animationFrame:S==="always"}),elements:{reference:w.anchor},middleware:[pt({mainAxis:y+ue,alignmentAxis:E}),u&&ht({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?mt():void 0,...U}),u&&bt({...U}),$t({...U,apply:({elements:B,rects:pe,availableWidth:ot,availableHeight:at})=>{const{width:ct,height:it}=pe.reference,X=B.floating.style;X.setProperty("--radix-popper-available-width",`${ot}px`),X.setProperty("--radix-popper-available-height",`${at}px`),X.setProperty("--radix-popper-anchor-width",`${ct}px`),X.setProperty("--radix-popper-anchor-height",`${it}px`)}}),J&&gt({element:J,padding:i}),Kt({arrowWidth:je,arrowHeight:ue}),h&&yt({strategy:"referenceHidden",...U})]}),[ve,Qe]=ke(qe),K=N(T);ie(()=>{z&&(K==null||K())},[z,K]);const Je=(o=_.arrow)===null||o===void 0?void 0:o.x,et=(s=_.arrow)===null||s===void 0?void 0:s.y,tt=((d=_.arrow)===null||d===void 0?void 0:d.centerOffset)!==0,[nt,rt]=a.useState();return ie(()=>{x&&rt(window.getComputedStyle(x).zIndex)},[x]),a.createElement("div",{ref:Ge.setFloating,"data-radix-popper-content-wrapper":"",style:{...fe,transform:z?fe.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:nt,"--radix-popper-transform-origin":[(c=_.transformOrigin)===null||c===void 0?void 0:c.x,(m=_.transformOrigin)===null||m===void 0?void 0:m.y].join(" ")},dir:e.dir},a.createElement(Ht,{scope:v,placedSide:ve,onArrowChange:Xe,arrowX:Je,arrowY:et,shouldHideArrow:tt},a.createElement(M.div,F({"data-side":ve,"data-align":Qe},C,{ref:W,style:{...C.style,animation:z?void 0:"none",opacity:($=_.hide)!==null&&$!==void 0&&$.referenceHidden?0:void 0}}))))});function zt(e){return e!==null}const Kt=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,s,d;const{placement:c,rects:m,middlewareData:$}=t,l=((n=$.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,y=l?0:e.arrowWidth,f=l?0:e.arrowHeight,[E,i]=ke(c),u={start:"0%",center:"50%",end:"100%"}[i],p=((r=(o=$.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+y/2,g=((s=(d=$.arrow)===null||d===void 0?void 0:d.y)!==null&&s!==void 0?s:0)+f/2;let b="",h="";return E==="bottom"?(b=l?u:`${p}px`,h=`${-f}px`):E==="top"?(b=l?u:`${p}px`,h=`${m.floating.height+f}px`):E==="right"?(b=`${-f}px`,h=l?u:`${g}px`):E==="left"&&(b=`${m.floating.width+f}px`,h=l?u:`${g}px`),{data:{x:b,y:h}}}});function ke(e){const[t,n="center"]=e.split("-");return[t,n]}const Kn=Mt,Xn=Bt,jn=Ut;var Xt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},L=new WeakMap,j=new WeakMap,Y={},oe=0,Ne=function(e){return e&&(e.host||Ne(e.parentNode))},jt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ne(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Yt=function(e,t,n,r){var o=jt(t,Array.isArray(e)?e:[e]);Y[n]||(Y[n]=new WeakMap);var s=Y[n],d=[],c=new Set,m=new Set(o),$=function(l){!l||c.has(l)||(c.add(l),$(l.parentNode))};o.forEach($);var v=function(l){!l||m.has(l)||Array.prototype.forEach.call(l.children,function(y){if(c.has(y))v(y);else{var f=y.getAttribute(r),E=f!==null&&f!=="false",i=(L.get(y)||0)+1,u=(s.get(y)||0)+1;L.set(y,i),s.set(y,u),d.push(y),i===1&&E&&j.set(y,!0),u===1&&y.setAttribute(n,"true"),E||y.setAttribute(r,"true")}})};return v(t),c.clear(),oe++,function(){d.forEach(function(l){var y=L.get(l)-1,f=s.get(l)-1;L.set(l,y),s.set(l,f),y||(j.has(l)||l.removeAttribute(r),j.delete(l)),f||l.removeAttribute(n)}),oe--,oe||(L=new WeakMap,L=new WeakMap,j=new WeakMap,Y={})}},Yn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||Xt(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Yt(r,o,n,"aria-hidden")):function(){return null}},O=function(){return O=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},O.apply(this,arguments)};function Fe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Vt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var G="right-scroll-bar-position",q="width-before-scroll-bar",Zt="with-scroll-bars-hidden",Gt="--removed-body-scroll-bar-size";function qt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Qt(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function Jt(e,t){return Qt(t||null,function(n){return e.forEach(function(r){return qt(r,n)})})}function en(e){return e}function tn(e,t){t===void 0&&(t=en);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var d=t(s,r);return n.push(d),function(){n=n.filter(function(c){return c!==d})}},assignSyncMedium:function(s){for(r=!0;n.length;){var d=n;n=[],d.forEach(s)}n={push:function(c){return s(c)},filter:function(){return n}}},assignMedium:function(s){r=!0;var d=[];if(n.length){var c=n;n=[],c.forEach(s),d=n}var m=function(){var v=d;d=[],v.forEach(s)},$=function(){return Promise.resolve().then(m)};$(),n={push:function(v){d.push(v),$()},filter:function(v){return d=d.filter(v),n}}}};return o}function nn(e){e===void 0&&(e={});var t=tn(null);return t.options=O({async:!0,ssr:!1},e),t}var Me=function(e){var t=e.sideCar,n=Fe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,O({},n))};Me.isSideCarExport=!0;function rn(e,t){return e.useMedium(t),Me}var We=nn(),ae=function(){},Q=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:ae,onWheelCapture:ae,onTouchMoveCapture:ae}),o=r[0],s=r[1],d=e.forwardProps,c=e.children,m=e.className,$=e.removeScrollBar,v=e.enabled,l=e.shards,y=e.sideCar,f=e.noIsolation,E=e.inert,i=e.allowPinchZoom,u=e.as,p=u===void 0?"div":u,g=Fe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),b=y,h=Jt([n,t]),S=O(O({},g),o);return a.createElement(a.Fragment,null,v&&a.createElement(b,{sideCar:We,removeScrollBar:$,shards:l,noIsolation:f,inert:E,setCallbacks:s,allowPinchZoom:!!i,lockRef:n}),d?a.cloneElement(a.Children.only(c),O(O({},S),{ref:h})):a.createElement(p,O({},S,{className:m,ref:h}),c))});Q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Q.classNames={fullWidth:q,zeroRight:G};var Se,on=function(){if(Se)return Se;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function an(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=on();return t&&e.setAttribute("nonce",t),e}function cn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function sn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ln=function(){var e=0,t=null;return{add:function(n){e==0&&(t=an())&&(cn(t,n),sn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},un=function(){var e=ln();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Be=function(){var e=un(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},dn={left:0,top:0,right:0,gap:0},ce=function(e){return parseInt(e||"",10)||0},fn=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ce(n),ce(r),ce(o)]},vn=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return dn;var t=fn(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},pn=Be(),hn=function(e,t,n,r){var o=e.left,s=e.top,d=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Zt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(G,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(q,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(q," .").concat(q,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Gt,": ").concat(c,`px;
  }
`)},mn=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,s=a.useMemo(function(){return vn(o)},[o]);return a.createElement(pn,{styles:hn(s,!t,o,n?"":"!important")})},le=!1;if(typeof window<"u")try{var V=Object.defineProperty({},"passive",{get:function(){return le=!0,!0}});window.addEventListener("test",V,V),window.removeEventListener("test",V,V)}catch{le=!1}var I=le?{passive:!1}:!1,bn=function(e){return e.tagName==="TEXTAREA"},He=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!bn(e)&&n[t]==="visible")},$n=function(e){return He(e,"overflowY")},gn=function(e){return He(e,"overflowX")},Ce=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Ue(e,n);if(r){var o=ze(e,n),s=o[1],d=o[2];if(s>d)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},yn=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},En=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ue=function(e,t){return e==="v"?$n(t):gn(t)},ze=function(e,t){return e==="v"?yn(t):En(t)},wn=function(e,t){return e==="h"&&t==="rtl"?-1:1},Sn=function(e,t,n,r,o){var s=wn(e,window.getComputedStyle(t).direction),d=s*r,c=n.target,m=t.contains(c),$=!1,v=d>0,l=0,y=0;do{var f=ze(e,c),E=f[0],i=f[1],u=f[2],p=i-u-s*E;(E||p)&&Ue(e,c)&&(l+=p,y+=E),c=c.parentNode}while(!m&&c!==document.body||m&&(t.contains(c)||t===c));return(v&&(o&&l===0||!o&&d>l)||!v&&(o&&y===0||!o&&-d>y))&&($=!0),$},Z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},xe=function(e){return[e.deltaX,e.deltaY]},Pe=function(e){return e&&"current"in e?e.current:e},Cn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},xn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Pn=0,k=[];function On(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(Pn++)[0],s=a.useState(function(){return Be()})[0],d=a.useRef(e);a.useEffect(function(){d.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var i=Vt([e.lockRef.current],(e.shards||[]).map(Pe),!0).filter(Boolean);return i.forEach(function(u){return u.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),i.forEach(function(u){return u.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=a.useCallback(function(i,u){if("touches"in i&&i.touches.length===2)return!d.current.allowPinchZoom;var p=Z(i),g=n.current,b="deltaX"in i?i.deltaX:g[0]-p[0],h="deltaY"in i?i.deltaY:g[1]-p[1],S,T=i.target,C=Math.abs(b)>Math.abs(h)?"h":"v";if("touches"in i&&C==="h"&&T.type==="range")return!1;var w=Ce(C,T);if(!w)return!0;if(w?S=C:(S=C==="v"?"h":"v",w=Ce(C,T)),!w)return!1;if(!r.current&&"changedTouches"in i&&(b||h)&&(r.current=S),!S)return!0;var x=r.current||S;return Sn(x,u,i,x==="h"?b:h,!0)},[]),m=a.useCallback(function(i){var u=i;if(!(!k.length||k[k.length-1]!==s)){var p="deltaY"in u?xe(u):Z(u),g=t.current.filter(function(S){return S.name===u.type&&S.target===u.target&&Cn(S.delta,p)})[0];if(g&&g.should){u.cancelable&&u.preventDefault();return}if(!g){var b=(d.current.shards||[]).map(Pe).filter(Boolean).filter(function(S){return S.contains(u.target)}),h=b.length>0?c(u,b[0]):!d.current.noIsolation;h&&u.cancelable&&u.preventDefault()}}},[]),$=a.useCallback(function(i,u,p,g){var b={name:i,delta:u,target:p,should:g};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(h){return h!==b})},1)},[]),v=a.useCallback(function(i){n.current=Z(i),r.current=void 0},[]),l=a.useCallback(function(i){$(i.type,xe(i),i.target,c(i,e.lockRef.current))},[]),y=a.useCallback(function(i){$(i.type,Z(i),i.target,c(i,e.lockRef.current))},[]);a.useEffect(function(){return k.push(s),e.setCallbacks({onScrollCapture:l,onWheelCapture:l,onTouchMoveCapture:y}),document.addEventListener("wheel",m,I),document.addEventListener("touchmove",m,I),document.addEventListener("touchstart",v,I),function(){k=k.filter(function(i){return i!==s}),document.removeEventListener("wheel",m,I),document.removeEventListener("touchmove",m,I),document.removeEventListener("touchstart",v,I)}},[]);var f=e.removeScrollBar,E=e.inert;return a.createElement(a.Fragment,null,E?a.createElement(s,{styles:xn(o)}):null,f?a.createElement(mn,{gapMode:"margin"}):null)}const Rn=rn(We,On);var Ke=a.forwardRef(function(e,t){return a.createElement(Q,O({},e,{ref:t,sideCar:Rn}))});Ke.classNames=Q.classNames;const Vn=Ke;export{In as $,mn as R,Fe as _,Nn as a,kn as b,Fn as c,nn as d,O as e,q as f,Vt as g,rn as h,Yn as i,Mn as j,Hn as k,Un as l,Wn as m,Bn as n,Ct as o,jn as p,Kn as q,Xn as r,Be as s,Vn as t,Jt as u,G as z};