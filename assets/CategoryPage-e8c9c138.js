import{c as u,q as g,t as d,r as m,j as t}from"./index-ad4b6af9.js";import{P as l}from"./PageTitle-4402f1e0.js";import{p as n}from"./Layout-23d779e3.js";import{P as x}from"./ProductList-a09bdd03.js";import{L as P}from"./Loader-532deac9.js";import"./LazyImage-03e7303f.js";import"./typeToast-425ada16.js";import"./services-3fc5e297.js";import"./constants-ded45ac9.js";import"./useDispatch-c30611bf.js";import"./index-4f9e2239.js";import"./useMatchMedia-706a7b16.js";import"./TextButton-f9c10c34.js";function D(){const s=u(g),{categoryName:o}=d(),[i,p]=m.useState("");function f(e){const c=n.find(r=>r.category===e);if(c)return c.name;{const r=n.flatMap(a=>a.categories||[]).find(a=>a.category===e);if(r)return r.name}}return m.useEffect(()=>{if(o){const e=f(o);p(e||"")}},[o]),t.jsx("div",{className:"category-page",children:t.jsxs("div",{className:"container",children:[i&&t.jsx(l,{text:i}),s?t.jsx(x,{productsData:s}):t.jsx(P,{})]})})}export{D as default};