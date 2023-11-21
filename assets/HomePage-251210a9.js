import{r,j as e,u,R as w,f as y}from"./index-0742d672.js";import{L as m}from"./LazyImage-5e922bd3.js";import{u as v}from"./useMatchMedia-842693ff.js";import{P as p}from"./PageTitle-9d23e7a0.js";import{c as x}from"./services-30b6181c.js";import{u as I}from"./useDispatch-358e3647.js";import{A as E,m as j}from"./index-22ebc310.js";import"./constants-ded45ac9.js";const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzElEQVR4nO3aT4tNYRzA8Y+53MvMHdNgpuvPhLCSzGISOwuvw84bUUqNxchalJRkEkpSSJI0QvInEbERC6PxAkynjpr0O1YWOr/nU+cFPN869z7neX4URVEURVH8G3txCsfQkcwGfMev+rmE1RI5tGLxv595dCWxFm+CCDfQk8QU3gURbmGdJAZ4GUS4j74kJvEiiPAAo5KYwPMgwkOsl8Q4HgcRnmCjJMbwKIjwFJsk0ce9IMIrbJbECO4EEaq9wxZJDON2EOEttkqih+tBhI/YKYkurgYRPmGXRBHmgwifsVsSHVwIInypzxbSRDgfRPiKfZIYwtkgwjfsl8QqnAkiVKdMBySKMBdE+IGDEjkRRPiJwxI52RAhzetQOR5EuCuR2SBA9S2R4sfwdLD4RUxL+ne4mOH9H2rYEFV7gRkt18m8Je5k/ihagysNn8V7tFw388FID9eyHo0N/+VwdJuWG8l8PN5vuCB5neGCZKzhiuxZhiuy8cyXpBMN1+QLdZhWm8w8KDHIPCozlXlYajveB4u/WY/StdoOfMg6Kzha7+P/XPzl+ouv9Y4Ei7+YaV54gKUViz+XcWJ8uh6XP1ofbhZFURRFUfhfLQOdpAHqMOpHcwAAAABJRU5ErkJggg==",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO3aTSuEURjG8f8k+RRWykKIMkkxJVKTENHUiCg1DRGLyUZRFt4WImbLR7H3NSSajCHv7516pqbpfho7muv86uznuuuZc859H/A8z/M8z/vfGoA9YBGoRUwHkAe+g7WDkC6gUBLerTNE9AD3ZeHdSiMgFhJ+GwEDwJNq+DjwbIRfQ8Ag8FIW/AtYQcA48GaEX0JAAng3wi8gIGmE/wBmETAHfBrhpxGQCgk/iYB08I2Xhn8FxhCQMfZ4F34EAatGeLfvDyFgwwj/CPQjYNMI/wD0UuUiwL4RvhDc86s+/IER/hboRCD8sRHetbWiVLka4MQIfw20IuDUCH8JNCEgaoS/ABoR0W4U4ApoRkjWKEIOaENEBDhU3f6KpA9ApWSPwL+5BPUhZDWkCG4AIiMT0ggZRsh8SCtsFCEp5WZopXb4FEKSIQORGYQkQkZi7r9CxoTyULTSWHwZIXHlhxGVnsasIySm/DiqqBu4M4qwi9jr0BujCNmg34BKkzVvFMFdrFBqtObKCnCOmJZgsFIswBGC6oGt4HBU99c/xvM8z/M8qsIP7KkB02CSlmEAAAAASUVORK5CYII=";function R({photos:s}){const[t,A]=r.useState([]),[i,a]=r.useState(0),[o,l]=r.useState(!1),c=v("(max-width: 578px)");r.useEffect(()=>{s&&A([...s])},[s]),r.useEffect(()=>{if(!o){const n=setTimeout(()=>d(),5e3);return()=>clearTimeout(n)}},[i,o]);const g=s.length-1,h=()=>{a(n=>n===0?g:n-1)},d=()=>{a(n=>n===g?0:n+1)},b=t[i];return e.jsx(e.Fragment,{children:s&&e.jsxs("div",{className:"image-slider",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[t.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(m,{src:c?b.smallImage:b.image,alt:b.label},b.label),e.jsx("p",{className:"image-slider-motto",children:b.motto})]}),e.jsxs("div",{className:"control-buttons",children:[e.jsx("div",{className:"back-button",onClick:h,children:e.jsx(m,{src:P,alt:"back-arrow"})}),e.jsx("div",{className:"forward-button",onClick:d,children:e.jsx(m,{src:H,alt:"forward-arrow"})})]})]})})}const B="/kolyska_shop/assets/pexels-karolina-grabowska-4964488-50608c7a.webp",U="/kolyska_shop/assets/pexels-nataliya-vaitkevich-4452206-801266f7.webp",C="/kolyska_shop/assets/pexels-oleksandr-canary-islands-1007773-7febd562.webp",S="/kolyska_shop/assets/pexels-pavel-danilyuk-7055917-e3566aaf.webp",J="/kolyska_shop/assets/pexels-rene-asmussen-13027214-83f59ddd.webp",G="/kolyska_shop/assets/pexels-vicki-yde-5961616-e804e9ac.webp",Q="/kolyska_shop/assets/pexels-yan-krukau-5791039-399d43ba.webp",D="/kolyska_shop/assets/pexels-karolina-grabowska-4964488_small-1311cf13.webp",K="/kolyska_shop/assets/pexels-nataliya-vaitkevich-4452206_small-a1438738.webp",X="/kolyska_shop/assets/pexels-oleksandr-canary-islands-1007773_small-0a292d0b.webp",W="/kolyska_shop/assets/pexels-pavel-danilyuk-7055917_small-61fc23b4.webp",Z="/kolyska_shop/assets/pexels-rene-asmussen-13027214_small-1414fd5a.webp",M="/kolyska_shop/assets/pexels-vicki-yde-5961616_small-77d6337e.webp",V="/kolyska_shop/assets/pexels-yan-krukau-5791039_small-2948334f.webp",L="/kolyska_shop/assets/egg-4ee5781f.webp",N="/kolyska_shop/assets/icandy-b4506e55.webp",T="/kolyska_shop/assets/oyster-88aaf41a.webp",z="/kolyska_shop/assets/silver_cross-2019fd0e.webp",O="/kolyska_shop/assets/stroller-5e6ffbc4.webp",q="/kolyska_shop/assets/carSeat-7d6765dc.webp",F="/kolyska_shop/assets/childrenTransport-306f15f8.webp",Y="/kolyska_shop/assets/playground-be9d02be.webp",_="/kolyska_shop/assets/walker-d0409701.webp",$="data:image/webp;base64,UklGRtwDAABXRUJQVlA4WAoAAAAQAAAAhwAAJwAAQUxQSM8CAAABoIVs/xo7+vEnDGEIIQz/urv3yt2Huru7N3W3dXevZl2v3Ovu7vJnqXuPhmEI38VfaOZw7nYhIiaA/hfSrl/VUrhlWanGGo4ZUF1K/XyxTalm1Vw5riYReVuB6+1KM1azWaeKRDQoC+CLWKr30Keb2VS9h2HKatFD36U2o7o99Gm3eg/jdk63HsblqX6XHtp0O27ZNqOK62cEWRwd9U2HGOZk9OH9d61ZGX3Yyfk9oy+62o+ez+gfNp2fMT5a93bGtGjIkOtFGW34eG9ZIqr6M/L8jX9POo7rHdhT84HDW+W9Bfi3ug/cvqq83MbZiqKdW+WTWXxHLwLXrypPNpwihBA3I+QJIcTvNY8LIUQRIiGEuDzoR2RuXlffRXYYEdsM4HGH2lsBXC4bRxuS2We43dgHRnhqy9mK8x7J/Db+lrp4SpfZnHPeIw8fc865Z6U452X/REFFzjlP7cXZppXVoxDNImILQ+Bkly7rs4h+dOOjD3G7oQ/0I61J8ib+lFqQeavHeJMM2c/Is4mInP04zkmdVlBicfZin7N5/kb86VEcr8+QF17GQdcHvlq5cuXKHkxxe+EM+c0wWiutX7ly5coOJYGsTh0EUDCrV5JiidQ424x8qD9WIVIi+iwlKZ8tEUTpEIjepzh94NdA/upm+IXtA1uDIAjGqR5/Fcg/h/fHST8HQRAMKCHWwoLoh/JxtSHlq7jb1Af6kdbZivMeyfZFbGUvAi3IPMco4X9YkXJkNR63eVrsLA5bJS5+H1g9TB5zGA9b+cD6WeqGzlZcnzBMnp+Hg9Lrs9SVY9qNm88uVW9GNC2XDM+W9WE4xdkK0/fpRRim47ECGIddcmbUcf3+jU1pxHHDAcn1x7VHt65M0Zzjhq0UTXceX2j0/vHdCYmqf3XwuH7ncpYzCU/vWkQJzzBBjqdPMiLbM7QUluvZJpT0XFInXE/vMPpPfgBWUDgg5gAAABAJAJ0BKogAKAA+MRSJQqIhIRE3CCADBLOAJFn9gG6V/jNvAH6Ab6BwAH6zelB+s3wQeROC4RJjdUcG5IY9imZgJgQiNyQTp0BHfUA7ioEBAAD+//4miG//+39gJTVS/6mdcWykxXVYQJtn//+1/Lj3VPVDzCMkd//Xid+sQQD949xJKrrvUuv9wSQZ1jA8KzIZ/2RiQP/27r/6Pu6K/QIMA6X0E1FKJ//t9+3e7dzv/g5o/dED/9EzBmx5ZnR7sjZBO4B8dOFAVdyezczevh4f9+d6bTz5+9gFlvNRDA/f7lgAAAAA",ee="/kolyska_shop/assets/baby_style-921218f7.webp",se="/kolyska_shop/assets/besafe-cb6d4249.webp",ae="data:image/webp;base64,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",le="data:image/webp;base64,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",te="/kolyska_shop/assets/sybex-8a6c5567.webp",oe="data:image/webp;base64,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",re="/kolyska_shop/assets/x_lander-80b3036f.webp",Ae="/kolyska_shop/assets/stroller_lifestyle_2x-4487786f.webp",ie="/kolyska_shop/assets/comfort-tabbed-eed67162.webp",ne="/kolyska_shop/assets/PEACE-OF-MIND-bc1e083f.webp",ce=[{image:S,smallImage:W,label:"banner-image 1",motto:" Магазин дитячих колясок, де ваші мрії стають реальністю"},{image:U,smallImage:K,label:"banner-image 2",motto:" Шлях до щасливого батьківства починається з наших колясок"},{image:C,smallImage:X,label:"banner-image 3",motto:"Зробіть кожну мить особливою з нашими колясками"},{image:B,smallImage:D,label:"banner-image 4",motto:"Ліжечка, які створені для безтурботного сну вашої дитини"},{image:J,smallImage:Z,label:"banner-image 5",motto:"Завжди крокуємо у ногу з вашими потребами"},{image:G,smallImage:M,label:"banner-image 6",motto:"Ліжечка, що втілюють ваші бажання"},{image:Q,smallImage:V,label:"banner-image 7",motto:"Зручність та комфорт у кожній прогулянці"}],me=[{image:L,label:"Egg 2"},{image:N,label:"iCandy Peach"},{image:T,label:"Oyster 3"},{image:z,label:"Silver Cross"}],be=[{image:O,label:"Коляски",link:"childrenStrollers"},{image:q,label:"Автокрісла",link:"carSeats"},{image:F,label:"Транспорт",link:"childrenTransport"},{image:Y,label:"Манежі",link:"playgrounds"},{image:_,label:"Стільці та ходунки",link:"chairs"}],ge=[{image:$,label:"bebetto"},{image:ee,label:"baby_style"},{image:se,label:"besafe"},{image:ae,label:"chicco"},{image:le,label:"romer"},{image:te,label:"sybex"},{image:oe,label:"tako"},{image:re,label:"x_lander"}],f=[{id:0,picture:Ae,label:"Якість",motto:"Створені для тривалого використання",text:"Ви будете насолоджуватися своєю коляскою протягом довгого-довгого часу."},{id:1,picture:ie,label:"Безпека",motto:"Душевний спокій",text:"Кожна дитяча коляска ретельно перевірена, створена для довговічності та перевершує всі галузеві стандарти безпеки та якості."},{id:2,picture:ne,label:"Комфорт",motto:"Неперевершений комфорт",text:"Складати, зберігати  та пересувати наші коляски так само легко, як і спати в них."}];function k({galleryArray:s}){const t=I(),A=u(),i=a=>{const o=x(a);A(w.category(a)),t(y(o))};return e.jsx("div",{className:"photo-gallery",children:s.map(({image:a,label:o,link:l})=>e.jsxs("div",{className:"gallery-item",onClick:()=>l&&i(l),children:[e.jsx(m,{src:a,alt:o}),e.jsx("div",{className:"gallery-item-label",children:o})]},a))})}function pe(){return e.jsx("div",{className:"brands-gallery",children:ge.map(({image:s,label:t})=>e.jsx("div",{className:"brand",children:e.jsx(m,{src:s,alt:t})},t))})}function de(){const[s,t]=r.useState(0),[A,i]=r.useState(!1),a=()=>{i(!0)},o=()=>{if(A){const c=setTimeout(()=>{i(!1)},100);return()=>{clearTimeout(c)}}};r.useEffect(a,[s]),r.useEffect(o,[A]);const l=f[s];return e.jsxs("div",{className:"shop-blurb",children:[e.jsx("div",{className:"shop-blurb-picture-wrap",children:e.jsxs("div",{className:"shop-blurb-picture",children:[e.jsx(E,{children:A&&e.jsx(j.div,{className:"shop-blurb-picture-back",initial:{x:0},exit:{x:"-100%"},transition:{duration:1}})}),e.jsx(m,{src:l.picture,alt:l.label})]})}),e.jsxs("div",{className:"shop-blurb-description",children:[e.jsxs("h1",{className:"shop-blurb-title",children:['Чому коляски купують в магазині "КОЛИСКА"'," "]}),e.jsx("div",{className:"shop-blurb-navigation",children:f.map(({id:c,label:g})=>e.jsx("span",{className:"shop-blurb-label",onClick:()=>t(c),children:g},c))}),e.jsx("p",{className:"shop-blurb-motto",children:l.motto}),e.jsx("p",{className:"shop-blurb-text",children:l.text})]})]})}function Ie(){return e.jsxs("div",{className:"home",children:[e.jsx("div",{className:"banner",children:e.jsx(R,{photos:ce})}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"home-subtitle",children:e.jsx(p,{text:"Трендові пропозиції"})}),e.jsx(k,{galleryArray:me})]}),e.jsx(de,{}),e.jsxs("div",{className:"container",children:[e.jsx(p,{text:"Категорії"}),e.jsx(k,{galleryArray:be})]}),e.jsx(p,{text:"Бренди"}),e.jsx(pe,{})]})}export{Ie as default};