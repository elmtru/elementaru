import{s as _e,e as m,a as H,b as p,d as M,V as q,f as P,g as E,h as I,Q as de,i as K,j as r,Y as se,l as G,t as ae,M as x,r as me,o as pe,N as R,O as U,P as Q}from"./scheduler.DSZzDcX6.js";import{e as J}from"./each.CNH9y-bx.js";import{S as ve,i as ge}from"./index.Ck97c3H1.js";import{m as ne,f as Z}from"./api.Dpw5L1iu.js";import{u as Ee}from"./Tooltip.svelte_svelte_type_style_lang.BzaACov9.js";import"./entry.DXM6qM76.js";function re(l,e,s){const a=l.slice();return a[9]=e[s],a[11]=s,a}function oe(l,e,s){const a=l.slice();return a[12]=e[s][0],a[13]=e[s][1],a}function ce(l,e,s){const a=l.slice();return a[9]=e[s],a}function ie(l){let e,s,a=l[9]+"",d,i;return{c(){e=m("li"),s=m("code"),d=R(a),i=H()},l(o){e=p(o,"LI",{});var c=M(e);s=p(c,"CODE",{});var _=M(s);d=U(_,a),_.forEach(E),i=P(c),c.forEach(E)},m(o,c){K(o,e,c),r(e,s),r(s,d),r(e,i)},p(o,c){c&1&&a!==(a=o[9]+"")&&Q(d,a)},d(o){o&&E(e)}}}function ue(l){let e,s,a=l[12]+"",d,i,o,c=typeof l[13],_;return{c(){e=m("li"),s=m("span"),d=R(a),i=R(": "),o=m("small"),_=R(c),this.h()},l(b){e=p(b,"LI",{});var y=M(e);s=p(y,"SPAN",{class:!0});var L=M(s);d=U(L,a),L.forEach(E),i=U(y,": "),o=p(y,"SMALL",{class:!0});var u=M(o);_=U(u,c),u.forEach(E),y.forEach(E),this.h()},h(){I(s,"class","key svelte-8e27l1"),I(o,"class","svelte-8e27l1")},m(b,y){K(b,e,y),r(e,s),r(s,d),r(e,i),r(e,o),r(o,_)},p(b,y){y&5&&a!==(a=b[12]+"")&&Q(d,a),y&5&&c!==(c=typeof b[13])&&Q(_,c)},d(b){b&&E(e)}}}function he(l){let e,s,a,d=l[11]+1+"",i,o,c,_=l[9]+"",b,y,L,u,A,T='<h4 class="svelte-8e27l1">Top-level keys</h4>',z,w,B,S,h,j='<h4 class="svelte-8e27l1">Full Response</h4>',v,n,f=JSON.stringify(l[2][l[9]],null,2)+"",t,N,D,$,F=J(Object.entries(l[2][l[9]]??{})),k=[];for(let C=0;C<F.length;C+=1)k[C]=ue(oe(l,F,C));function fe(){return l[8](l[9])}return{c(){e=m("details"),s=m("summary"),a=m("h3"),i=R(d),o=R(". "),c=m("code"),b=R(_),y=R(" bucket"),L=H(),u=m("details"),A=m("summary"),A.innerHTML=T,z=H(),w=m("ul");for(let C=0;C<k.length;C+=1)k[C].c();B=H(),S=m("details"),h=m("summary"),h.innerHTML=j,v=H(),n=m("pre"),t=R(f),N=H(),this.h()},l(C){e=p(C,"DETAILS",{class:!0});var O=M(e);s=p(O,"SUMMARY",{class:!0});var g=M(s);a=p(g,"H3",{class:!0});var Y=M(a);i=U(Y,d),o=U(Y,". "),c=p(Y,"CODE",{class:!0});var ee=M(c);b=U(ee,_),ee.forEach(E),y=U(Y," bucket"),Y.forEach(E),g.forEach(E),L=P(O),u=p(O,"DETAILS",{class:!0});var V=M(u);A=p(V,"SUMMARY",{class:!0,"data-svelte-h":!0}),q(A)!=="svelte-1l2aul7"&&(A.innerHTML=T),z=P(V),w=p(V,"UL",{class:!0});var te=M(w);for(let X=0;X<k.length;X+=1)k[X].l(te);te.forEach(E),V.forEach(E),B=P(O),S=p(O,"DETAILS",{class:!0});var W=M(S);h=p(W,"SUMMARY",{class:!0,"data-svelte-h":!0}),q(h)!=="svelte-12pvtf5"&&(h.innerHTML=j),v=P(W),n=p(W,"PRE",{class:!0});var le=M(n);t=U(le,f),le.forEach(E),W.forEach(E),N=P(O),O.forEach(E),this.h()},h(){I(c,"class","svelte-8e27l1"),I(a,"class","svelte-8e27l1"),I(s,"class","svelte-8e27l1"),I(A,"class","svelte-8e27l1"),I(w,"class","svelte-8e27l1"),u.open=!0,I(u,"class","svelte-8e27l1"),I(h,"class","svelte-8e27l1"),I(n,"class","svelte-8e27l1"),I(S,"class","svelte-8e27l1"),I(e,"class","svelte-8e27l1")},m(C,O){K(C,e,O),r(e,s),r(s,a),r(a,i),r(a,o),r(a,c),r(c,b),r(a,y),r(e,L),r(e,u),r(u,A),r(u,z),r(u,w);for(let g=0;g<k.length;g+=1)k[g]&&k[g].m(w,null);r(e,B),r(e,S),r(S,h),r(S,v),r(S,n),r(n,t),r(e,N),D||($=G(e,"toggle",fe),D=!0)},p(C,O){if(l=C,O&1&&_!==(_=l[9]+"")&&Q(b,_),O&5){F=J(Object.entries(l[2][l[9]]??{}));let g;for(g=0;g<F.length;g+=1){const Y=oe(l,F,g);k[g]?k[g].p(Y,O):(k[g]=ue(Y),k[g].c(),k[g].m(w,null))}for(;g<k.length;g+=1)k[g].d(1);k.length=F.length}O&5&&f!==(f=JSON.stringify(l[2][l[9]],null,2)+"")&&Q(t,f)},d(C){C&&E(e),x(k,C),D=!1,$()}}}function ye(l){let e,s,a="API Explorer",d,i,o,c,_,b="Fetch material",y,L,u="Available AWS Open Data Buckets",A,T,z,w,B,S=J(l[0].buckets),h=[];for(let n=0;n<S.length;n+=1)h[n]=ie(ce(l,S,n));let j=J(l[0].buckets),v=[];for(let n=0;n<j.length;n+=1)v[n]=he(re(l,j,n));return{c(){e=m("main"),s=m("h1"),s.textContent=a,d=H(),i=m("center"),o=m("input"),c=H(),_=m("button"),_.textContent=b,y=H(),L=m("h2"),L.textContent=u,A=H(),T=m("ol");for(let n=0;n<h.length;n+=1)h[n].c();z=H();for(let n=0;n<v.length;n+=1)v[n].c();this.h()},l(n){e=p(n,"MAIN",{});var f=M(e);s=p(f,"H1",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-exhvzr"&&(s.textContent=a),d=P(f),i=p(f,"CENTER",{});var t=M(i);o=p(t,"INPUT",{placeholder:!0}),c=P(t),_=p(t,"BUTTON",{"data-svelte-h":!0}),q(_)!=="svelte-19d9jtc"&&(_.textContent=b),t.forEach(E),y=P(f),L=p(f,"H2",{"data-svelte-h":!0}),q(L)!=="svelte-ips99d"&&(L.textContent=u),A=P(f),T=p(f,"OL",{style:!0});var N=M(T);for(let D=0;D<h.length;D+=1)h[D].l(N);N.forEach(E),z=P(f);for(let D=0;D<v.length;D+=1)v[D].l(f);f.forEach(E),this.h()},h(){I(s,"class","svelte-8e27l1"),I(o,"placeholder","Enter MP material ID"),de(T,"columns","3")},m(n,f){K(n,e,f),r(e,s),r(e,d),r(e,i),r(i,o),se(o,l[1]),r(i,c),r(i,_),r(e,y),r(e,L),r(e,A),r(e,T);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(T,null);r(e,z);for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(e,null);w||(B=[G(o,"input",l[5]),G(o,"keydown",l[6]),G(_,"click",l[7])],w=!0)},p(n,[f]){if(f&2&&o.value!==n[1]&&se(o,n[1]),f&1){S=J(n[0].buckets);let t;for(t=0;t<S.length;t+=1){const N=ce(n,S,t);h[t]?h[t].p(N,f):(h[t]=ie(N),h[t].c(),h[t].m(T,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=S.length}if(f&5){j=J(n[0].buckets);let t;for(t=0;t<j.length;t+=1){const N=re(n,j,t);v[t]?v[t].p(N,f):(v[t]=he(N),v[t].c(),v[t].m(e,null))}for(;t<v.length;t+=1)v[t].d(1);v.length=j.length}},i:ae,o:ae,d(n){n&&E(e),x(h,n),x(v,n),w=!1,me(B)}}}function be(l,e,s){let a,d,{data:i}=e;const o=Ee("id","mp-1");pe(l,o,u=>s(1,d=u));const c={};function _(){d=this.value,o.set(d)}const b=async u=>{u.key==="Enter"&&s(0,i.summary=await Z(a),i)},y=async()=>s(0,i.summary=await Z(a),i),L=async u=>{let A=!0,T=1;for(;A&&T<20;)try{s(2,c[u]=await Z(`${ne}/${u}/mp-${T}.json.gz`),c),A=!1}catch{T++}};return l.$$set=u=>{"data"in u&&s(0,i=u.data)},l.$$.update=()=>{l.$$.dirty&2&&s(3,a=`${ne}/summary/${d}.json.gz`)},[i,d,c,a,o,_,b,y,L]}class Te extends ve{constructor(e){super(),ge(this,e,be,ye,_e,{data:0})}}export{Te as default};