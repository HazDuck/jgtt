import{R as h,j as t}from"./vite-app.js";const R=async(a,s)=>await(await fetch(window.Shopify.routes.root+`recommendations/products.json?product_id=${a}&limit=${s}&intent=related`)).json(),N=()=>{const[a,s]=h.useState([]);return console.log("useHandleRVDataTEST4"),h.useEffect(()=>{const r=async(n,e)=>await R(n,e);(async()=>{const n=localStorage.getItem("jgRecentlyViewedData");if(n){let e=Object.values(JSON.parse(n));if(e=e.sort((i,o)=>o.time-i.time),(e==null?void 0:e.length)<4){const i=await r(e[0].id,10),o=[...e.sort((d,u)=>u.time-d.time)];let l=0;for(;o.length<4&&i.products.length;){const d=i.products.filter(y=>!e.find(f=>f.id===y.id));if(d.length===0||!d[l])break;const{id:u,title:m,media:p,handle:g,price:j,variants:x}=d[l],w={id:u,title:m,media:p,handle:g,price:j,variants:x};o.push(w),l++}s(o)}else s(e)}})()},[]),a},v=async a=>{const s=document.querySelector("cart-drawer"),c=await(async()=>{try{return(await fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[{id:a,quantity:1}],sections:s.getSectionsToRender().map(e=>e.id)})})).json()}catch(n){console.error(n)}})();s.renderContents(c)},_=({variantId:a,buttonBackgroundColor:s})=>t.jsx("button",{style:{backgroundColor:s},className:"button",onClick:()=>v(a),children:"Add to cart"}),C=({price:a})=>t.jsxs("div",{className:"price",children:["£",a/100," GBP"]}),T=({product:{id:a,title:s,media:r,handle:c,price:n,variants:e},buttonBackgroundColor:i})=>{var o,l,d;return t.jsx("li",{className:"grid__item scroll-trigger animate--slide-in",children:t.jsx("div",{className:"card-wrapper product-card-wrapper underline-links-hover",children:t.jsxs("div",{className:"card card--standard card--media",children:[t.jsx("img",{src:`${r&&((o=r[0])==null?void 0:o.src)}&_width=400`,alt:r&&((l=r[0])==null?void 0:l.alt),className:"motion-reduce",loading:"lazy"}),t.jsx("div",{className:"card__content",children:t.jsxs("div",{className:"card__information",children:[t.jsx("h3",{className:"card__heading h5",children:t.jsx("a",{href:`products/${c}`,children:s})}),t.jsxs("div",{className:"card__information",children:[t.jsx("span",{className:"caption-large light"}),t.jsx(C,{price:n})]})]})}),t.jsx(_,{buttonBackgroundColor:i,variantId:e&&e[0]&&((d=e[0])==null?void 0:d.id)})]})})},a)},D=({padding:a,rvData:s,buttonBackgroundColor:r})=>t.jsx("ul",{style:{padding:`${a}px`},className:"grid product-grid contains-card contains-card--product contains-card--standard grid--4-col-desktop grid--2-col-tablet-down",children:s.map(c=>t.jsx(T,{buttonBackgroundColor:r,product:c},c.id))}),b=({padding:a,button_background_color:s,text_color:r,title:c})=>{console.log("RVTEST4");const n=N();return n.length?t.jsxs("div",{className:"page-width-desktop",children:[t.jsx("h2",{style:{color:r},children:c}),t.jsx(D,{buttonBackgroundColor:s,padding:a,rvData:n})]}):null};export{b as default};
