const r="https://materialsproject-build.s3.amazonaws.com/collections/2022-10-28";async function c(n){const o=new DecompressionStream("gzip"),e=n.pipeThrough(o);return await new Response(e).text()}async function i(n,{unzip:o=!0}={}){const e=await fetch(n);return e.ok?o?JSON.parse(await c(e.body)):await e.blob():(console.error(`${e.status} ${e.statusText} for ${e.url}`),null)}function l(n,o,e){const s=new Blob([n],{type:e}),t=document.createElement("a"),a=URL.createObjectURL(s);t.style.display="none",t.href=a,t.download=o,document.body.appendChild(t),t.click(),t.remove()}export{l as d,i as f,r as m};