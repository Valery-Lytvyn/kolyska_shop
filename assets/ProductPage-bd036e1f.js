import{r as o,b as h,m as f,n as C,j as t,o as v}from"./index-d2fe1167.js";import{L as T}from"./Loader-16cdab5c.js";import{L as g}from"./LazyImage-c9ab04d9.js";import{C as N}from"./Counter-05bfeacf.js";import{T as P}from"./Layout-43ea8ae6.js";import{T as y}from"./TextButton-e7a8be24.js";import{a as S,n as E}from"./services-a489f581.js";import{P as _}from"./PageTitle-1775c4b4.js";import{T as L}from"./typeToast-425ada16.js";import{u as b}from"./useDispatch-e8fb6d53.js";import"./index-b2e96a41.js";import"./constants-ded45ac9.js";function U(){const[r,c]=o.useState(1),i=h(f),n=b(),p=o.useContext(P);o.useEffect(()=>()=>{n(C())},[]);const{barcode:u,picture:d,name:e,description:{__cdata:m}={__cdata:""},price:s}=i,l=()=>{c(a=>a+1)},x=()=>{r>1&&c(a=>a-1)},j=()=>{n(v({id:u||0,title:e,image:d,price:s,quantity:r})),E("Товар додано до кошика",L.SUCCESS)};return t.jsx(t.Fragment,{children:Object.keys(i).length?t.jsx("div",{className:"product-page",children:t.jsxs("div",{className:"container",children:[t.jsx(_,{text:e||""}),t.jsxs("div",{className:"product",children:[t.jsx("div",{className:"product-image",children:t.jsx(g,{src:d,alt:e})}),t.jsxs("div",{className:"product-summary",children:[t.jsx("p",{className:"product-title",children:e}),s&&t.jsx("div",{className:"product-price",children:t.jsx("p",{children:S(s)})}),t.jsxs("div",{className:"product-services-part",children:[t.jsx(N,{quantity:r,incrementQty:l,decrementQty:x,theme:p}),t.jsx("div",{onClick:j,children:t.jsx(y,{text:"Додати до кошика"})})]})]})]}),m&&t.jsx("p",{className:"description",children:m})]})}):t.jsx(T,{})})}export{U as default};
