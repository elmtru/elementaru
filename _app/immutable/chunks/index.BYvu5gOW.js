import{c as y}from"./index.D4uN2bNE.js";import{D as m,E as d}from"./scheduler.DSZzDcX6.js";function g(t,{delay:o=0,duration:c=400,easing:s=y,amount:e=5,opacity:i=0}={}){const n=getComputedStyle(t),r=+n.opacity,u=n.filter==="none"?"":n.filter,p=r*(1-i),[f,l]=m(e);return{delay:o,duration:c,easing:s,css:($,a)=>`opacity: ${r-p*a}; filter: ${u} blur(${a*f}${l});`}}function C(t,{delay:o=0,duration:c=400,easing:s=d}={}){const e=+getComputedStyle(t).opacity;return{delay:o,duration:c,easing:s,css:i=>`opacity: ${i*e}`}}export{g as b,C as f};