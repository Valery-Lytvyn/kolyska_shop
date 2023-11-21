import{r as f,B as y}from"./index-0742d672.js";import{C as F}from"./constants-ded45ac9.js";function ie(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ie(e[t]))&&(s&&(s+=" "),s+=o);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function $(){for(var e,t,o=0,s="";o<arguments.length;)(e=arguments[o++])&&(t=ie(e))&&(s&&(s+=" "),s+=t);return s}const G=e=>typeof e=="number"&&!isNaN(e),q=e=>typeof e=="string",O=e=>typeof e=="function",X=e=>q(e)||O(e)?e:null,ee=e=>f.isValidElement(e)||q(e)||O(e)||G(e);function ue(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:u}=e;requestAnimationFrame(()=>{u.minHeight="initial",u.height=s+"px",u.transition=`all ${o}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(t,o)})})}function J(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:u=!0,collapseDuration:l=300}=e;return function(n){let{children:a,position:I,preventExitTransition:E,done:v,nodeRef:g,isIn:b}=n;const i=s?`${t}--${I}`:t,d=s?`${o}--${I}`:o,p=f.useRef(0);return f.useLayoutEffect(()=>{const r=g.current,c=i.split(" "),C=L=>{L.target===g.current&&(r.dispatchEvent(new Event("d")),r.removeEventListener("animationend",C),r.removeEventListener("animationcancel",C),p.current===0&&L.type!=="animationcancel"&&r.classList.remove(...c))};r.classList.add(...c),r.addEventListener("animationend",C),r.addEventListener("animationcancel",C)},[]),f.useEffect(()=>{const r=g.current,c=()=>{r.removeEventListener("animationend",c),u?ue(r,v,l):v()};b||(E?c():(p.current=1,r.className+=` ${d}`,r.addEventListener("animationend",c)))},[b]),y.createElement(y.Fragment,null,a)}}function oe(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const M={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(s=>s!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},j=e=>{let{theme:t,type:o,...s}=e;return y.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s})},te={info:function(e){return y.createElement(j,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(j,{...e},y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(j,{...e},y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(j,{...e},y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function de(e){const[,t]=f.useReducer(i=>i+1,0),[o,s]=f.useState([]),u=f.useRef(null),l=f.useRef(new Map).current,n=i=>o.indexOf(i)!==-1,a=f.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:i=>l.get(i)}).current;function I(i){let{containerId:d}=i;const{limit:p}=a.props;!p||d&&a.containerId!==d||(a.count-=a.queue.length,a.queue=[])}function E(i){s(d=>i==null?[]:d.filter(p=>p!==i))}function v(){const{toastContent:i,toastProps:d,staleId:p}=a.queue.shift();b(i,d,p)}function g(i,d){let{delay:p,staleId:r,...c}=d;if(!ee(i)||function(w){return!u.current||a.props.enableMultiContainer&&w.containerId!==a.props.containerId||l.has(w.toastId)&&w.updateId==null}(c))return;const{toastId:C,updateId:L,data:m}=c,{props:h}=a,B=()=>E(C),D=L==null;D&&a.count++;const _={...h,style:h.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(c).filter(w=>{let[x,R]=w;return R!=null})),toastId:C,updateId:L,data:m,closeToast:B,isIn:!1,className:X(c.className||h.toastClassName),bodyClassName:X(c.bodyClassName||h.bodyClassName),progressClassName:X(c.progressClassName||h.progressClassName),autoClose:!c.isLoading&&(A=c.autoClose,Q=h.autoClose,A===!1||G(A)&&A>0?A:Q),deleteToast(){const w=oe(l.get(C),"removed");l.delete(C),M.emit(4,w);const x=a.queue.length;if(a.count=C==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),x>0){const R=C==null?a.props.limit:1;if(x===1||R===1)a.displayedToast++,v();else{const z=R>x?x:R;a.displayedToast=z;for(let N=0;N<z;N++)v()}}else t()}};var A,Q;_.iconOut=function(w){let{theme:x,type:R,isLoading:z,icon:N}=w,k=null;const S={theme:x,type:R};return N===!1||(O(N)?k=N(S):f.isValidElement(N)?k=f.cloneElement(N,S):q(N)||G(N)?k=N:z?k=te.spinner():(Y=>Y in te)(R)&&(k=te[R](S))),k}(_),O(c.onOpen)&&(_.onOpen=c.onOpen),O(c.onClose)&&(_.onClose=c.onClose),_.closeButton=h.closeButton,c.closeButton===!1||ee(c.closeButton)?_.closeButton=c.closeButton:c.closeButton===!0&&(_.closeButton=!ee(h.closeButton)||h.closeButton);let P=i;f.isValidElement(i)&&!q(i.type)?P=f.cloneElement(i,{closeToast:B,toastProps:_,data:m}):O(i)&&(P=i({closeToast:B,toastProps:_,data:m})),h.limit&&h.limit>0&&a.count>h.limit&&D?a.queue.push({toastContent:P,toastProps:_,staleId:r}):G(p)?setTimeout(()=>{b(P,_,r)},p):b(P,_,r)}function b(i,d,p){const{toastId:r}=d;p&&l.delete(p);const c={content:i,props:d};l.set(r,c),s(C=>[...C,r].filter(L=>L!==p)),M.emit(4,oe(c,c.props.updateId==null?"added":"updated"))}return f.useEffect(()=>(a.containerId=e.containerId,M.cancelEmit(3).on(0,g).on(1,i=>u.current&&E(i)).on(5,I).emit(2,a),()=>{l.clear(),M.emit(3,a)}),[]),f.useEffect(()=>{a.props=e,a.isToastActive=n,a.displayedToast=o.length}),{getToastToRender:function(i){const d=new Map,p=Array.from(l.values());return e.newestOnTop&&p.reverse(),p.forEach(r=>{const{position:c}=r.props;d.has(c)||d.set(c,[]),d.get(c).push(r)}),Array.from(d,r=>i(r[0],r[1]))},containerRef:u,isToastActive:n}}function se(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ae(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function pe(e){const[t,o]=f.useState(!1),[s,u]=f.useState(!1),l=f.useRef(null),n=f.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=f.useRef(e),{autoClose:I,pauseOnHover:E,closeToast:v,onClick:g,closeOnClick:b}=e;function i(m){if(e.draggable){m.nativeEvent.type==="touchstart"&&m.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",c),document.addEventListener("mouseup",C),document.addEventListener("touchmove",c),document.addEventListener("touchend",C);const h=l.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=h.getBoundingClientRect(),h.style.transition="",n.x=se(m.nativeEvent),n.y=ae(m.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=h.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=h.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(m){if(n.boundingRect){const{top:h,bottom:B,left:D,right:_}=n.boundingRect;m.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=D&&n.x<=_&&n.y>=h&&n.y<=B?r():p()}}function p(){o(!0)}function r(){o(!1)}function c(m){const h=l.current;n.canDrag&&h&&(n.didMove=!0,t&&r(),n.x=se(m),n.y=ae(m),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),h.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,h.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function C(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",C);const m=l.current;if(n.canDrag&&n.didMove&&m){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return u(!0),void e.closeToast();m.style.transition="transform 0.2s, opacity 0.2s",m.style.transform=`translate${e.draggableDirection}(0)`,m.style.opacity="1"}}f.useEffect(()=>{a.current=e}),f.useEffect(()=>(l.current&&l.current.addEventListener("d",p,{once:!0}),O(e.onOpen)&&e.onOpen(f.isValidElement(e.children)&&e.children.props),()=>{const m=a.current;O(m.onClose)&&m.onClose(f.isValidElement(m.children)&&m.children.props)}),[]),f.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||r(),window.addEventListener("focus",p),window.addEventListener("blur",r)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",p),window.removeEventListener("blur",r))}),[e.pauseOnFocusLoss]);const L={onMouseDown:i,onTouchStart:i,onMouseUp:d,onTouchEnd:d};return I&&E&&(L.onMouseEnter=r,L.onMouseLeave=p),b&&(L.onClick=m=>{g&&g(m),n.canCloseOnClick&&v()}),{playToast:p,pauseToast:r,isRunning:t,preventExitTransition:s,toastRef:l,eventHandlers:L}}function le(e){let{closeToast:t,theme:o,ariaLabel:s="close"}=e;return y.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:u=>{u.stopPropagation(),t(u)},"aria-label":s},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function fe(e){let{delay:t,isRunning:o,closeToast:s,type:u="default",hide:l,className:n,style:a,controlledProgress:I,progress:E,rtl:v,isIn:g,theme:b}=e;const i=l||I&&E===0,d={...a,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:i?0:1};I&&(d.transform=`scaleX(${E})`);const p=$("Toastify__progress-bar",I?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${b}`,`Toastify__progress-bar--${u}`,{"Toastify__progress-bar--rtl":v}),r=O(n)?n({rtl:v,type:u,defaultClassName:p}):$(p,n);return y.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:r,style:d,[I&&E>=1?"onTransitionEnd":"onAnimationEnd"]:I&&E<1?null:()=>{g&&s()}})}const me=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:u}=pe(e),{closeButton:l,children:n,autoClose:a,onClick:I,type:E,hideProgressBar:v,closeToast:g,transition:b,position:i,className:d,style:p,bodyClassName:r,bodyStyle:c,progressClassName:C,progressStyle:L,updateId:m,role:h,progress:B,rtl:D,toastId:_,deleteToast:A,isIn:Q,isLoading:P,iconOut:w,closeOnClick:x,theme:R}=e,z=$("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":x}),N=O(d)?d({rtl:D,position:i,type:E,defaultClassName:z}):$(z,d),k=!!B||!a,S={closeToast:g,type:E,theme:R};let Y=null;return l===!1||(Y=O(l)?l(S):f.isValidElement(l)?f.cloneElement(l,S):le(S)),y.createElement(b,{isIn:Q,done:A,position:i,preventExitTransition:o,nodeRef:s},y.createElement("div",{id:_,onClick:I,className:N,...u,style:p,ref:s},y.createElement("div",{...Q&&{role:h},className:O(r)?r({type:E}):$("Toastify__toast-body",r),style:c},w!=null&&y.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},w),y.createElement("div",null,n)),Y,y.createElement(fe,{...m&&!k?{key:`pb-${m}`}:{},rtl:D,theme:R,delay:a,isRunning:t,isIn:Q,closeToast:g,hide:v,type:E,style:L,className:C,controlledProgress:k,progress:B||0})))},Z=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},ge=J(Z("bounce",!0));J(Z("slide",!0));J(Z("zoom"));J(Z("flip"));const re=f.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:s,isToastActive:u}=de(e),{className:l,style:n,rtl:a,containerId:I}=e;function E(v){const g=$("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":a});return O(l)?l({position:v,rtl:a,defaultClassName:g}):$(g,X(l))}return f.useEffect(()=>{t&&(t.current=s.current)},[]),y.createElement("div",{ref:s,className:"Toastify",id:I},o((v,g)=>{const b=g.length?{...n}:{...n,pointerEvents:"none"};return y.createElement("div",{className:E(v),style:b,key:`container-${v}`},g.map((i,d)=>{let{content:p,props:r}=i;return y.createElement(me,{...r,isIn:u(r.toastId),style:{...r.style,"--nth":d+1,"--len":g.length},key:`toast-${r.key}`},p)}))}))});re.displayName="ToastContainer",re.defaultProps={position:"top-right",transition:ge,autoClose:5e3,closeButton:le,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ne,H=new Map,V=[],he=1;function ce(){return""+he++}function ye(e){return e&&(q(e.toastId)||G(e.toastId))?e.toastId:ce()}function U(e,t){return H.size>0?M.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:ye(t)}}function W(e){return(t,o)=>U(t,K(e,o))}function T(e,t){return U(e,K("default",t))}T.loading=(e,t)=>U(e,K("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),T.promise=function(e,t,o){let s,{pending:u,error:l,success:n}=t;u&&(s=q(u)?T.loading(u,o):T.loading(u.render,{...o,...u}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},I=(v,g,b)=>{if(g==null)return void T.dismiss(s);const i={type:v,...a,...o,data:b},d=q(g)?{render:g}:g;return s?T.update(s,{...i,...d}):T(d.render,{...i,...d}),b},E=O(e)?e():e;return E.then(v=>I("success",n,v)).catch(v=>I("error",l,v)),E},T.success=W("success"),T.info=W("info"),T.error=W("error"),T.warning=W("warning"),T.warn=T.warning,T.dark=(e,t)=>U(e,K("default",{theme:"dark",...t})),T.dismiss=e=>{H.size>0?M.emit(1,e):V=V.filter(t=>e!=null&&t.options.toastId!==e)},T.clearWaitingQueue=function(e){return e===void 0&&(e={}),M.emit(5,e)},T.isActive=e=>{let t=!1;return H.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},T.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(s,u){let{containerId:l}=u;const n=H.get(l||ne);return n&&n.getToast(s)}(e,t);if(o){const{props:s,content:u}=o,l={delay:100,...s,...t,toastId:t.toastId||e,updateId:ce()};l.toastId!==e&&(l.staleId=e);const n=l.render||u;delete l.render,U(n,l)}},0)},T.done=e=>{T.update(e,{progress:1})},T.onChange=e=>(M.on(4,e),()=>{M.off(4,e)}),T.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},T.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},M.on(2,e=>{ne=e.containerId||e,H.set(ne,e),V.forEach(t=>{M.emit(0,t.content,t.options)}),V=[]}).on(3,e=>{H.delete(e.containerId||e),H.size===0&&M.off(0).off(1).off(5)});const Ee=(e,t=1)=>(Math.random()*(e-t)+t).toFixed(1),Ce=e=>{if(e){let t=e;return typeof e=="string"&&(t=parseInt(e,10)),`${t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")} грн`}},Ie=(e,t)=>{T(e,{type:t})},be=e=>({childrenStrollers:F.strollers,walkers:F.walkers,carSeats:F.carSeats,childrenTransport:F.childrenTransport,playgrounds:F.playgrounds,swing:F.swing,chairs:F.chairs})[e]||0,_e=e=>{if(e)return e.charAt(0).toUpperCase()+e.slice(1)};export{Ce as a,_e as b,be as c,Ee as g,re as k,Ie as n};