import{s as $,p as N,y as E,n as S,z as B,d as q,g as d,B as A,h as y,i as k,j as M,l as F,t as O,M as Y,r as ee,N as w,O as z,P as j,Q as P,R as G,S as H}from"./scheduler.DSZzDcX6.js";import{e as I}from"./each.CNH9y-bx.js";import{g as C}from"./spread.CgU5AtxT.js";import{S as le,i as te}from"./index.Ck97c3H1.js";import"./index.DB-DdzQC.js";function J(s,e,t){const l=s.slice();l[20]=e[t],l[25]=t;const _=l[25]+1;l[21]=_;const m=l[13].r+l[21]*l[3];l[22]=m;const u=l[21]===l[7];return l[23]=u,l}function K(s,e,t){const l=s.slice();l[26]=e[t],l[30]=t;const _=Math.cos(2*Math.PI*l[30]/l[20])*l[22];l[27]=_;const m=Math.sin(2*Math.PI*l[30]/l[20])*l[22];return l[28]=m,l}function ie(s){const e=s.slice(),t=e[2].slice(0,e[25]).reduce((l,_)=>l+_,0)+e[30]+1;return e[31]=t,e}function L(s){let e,t;return{c(){e=E("title"),t=w(s[1])},l(l){e=B(l,"title",{});var _=q(e);t=z(_,s[1]),_.forEach(d)},m(l,_){k(l,e,_),M(e,t)},p(l,_){_[0]&2&&j(t,l[1])},d(l){l&&d(e)}}}function T(s){let e,t;return{c(){e=E("text"),t=w(s[0]),this.h()},l(l){e=B(l,"text",{class:!0});var _=q(e);t=z(_,s[0]),_.forEach(d),this.h()},h(){y(e,"class","svelte-1ntzqmz")},m(l,_){k(l,e,_),M(e,t)},p(l,_){_[0]&1&&j(t,l[0])},d(l){l&&d(e)}}}function U(s){let e,t,l,_;function m(i,n){return typeof i[9]=="function"?ne:i[9]==="hierarchical"?se:V}function u(i,n){return n===V?ie(i):i}let f=m(s),c=f(u(s,f)),o=[{x:t=s[27]},{y:l=s[28]},s[10],{transform:_="rotate("+s[30]*360/s[20]+" "+s[27]+" "+s[28]+")"}],a={};for(let i=0;i<o.length;i+=1)a=N(a,o[i]);return{c(){e=E("text"),c.c(),this.h()},l(i){e=B(i,"text",{x:!0,y:!0,transform:!0});var n=q(e);c.l(n),n.forEach(d),this.h()},h(){A(e,a),H(e,"svelte-1ntzqmz",!0)},m(i,n){k(i,e,n),c.m(e,null)},p(i,n){f===(f=m(i))&&c?c.p(u(i,f),n):(c.d(1),c=f(u(i,f)),c&&(c.c(),c.m(e,null))),A(e,a=C(o,[n[0]&8204&&t!==(t=i[27])&&{x:t},n[0]&8204&&l!==(l=i[28])&&{y:l},n[0]&1024&&i[10],n[0]&8204&&_!==(_="rotate("+i[30]*360/i[20]+" "+i[27]+" "+i[28]+")")&&{transform:_}])),H(e,"svelte-1ntzqmz",!0)},d(i){i&&d(e),c.d()}}}function V(s){let e=s[31]+"",t;return{c(){t=w(e)},l(l){t=z(l,e)},m(l,_){k(l,t,_)},p(l,_){_[0]&4&&e!==(e=l[31]+"")&&j(t,e)},d(l){l&&d(t)}}}function se(s){let e=s[25]+1+"",t,l,_=s[30]+1+"",m;return{c(){t=w(e),l=w("."),m=w(_)},l(u){t=z(u,e),l=z(u,"."),m=z(u,_)},m(u,f){k(u,t,f),k(u,l,f),k(u,m,f)},p:O,d(u){u&&(d(t),d(l),d(m))}}}function ne(s){let e=s[9](s[30])+"",t;return{c(){t=w(e)},l(l){t=z(l,e)},m(l,_){k(l,t,_)},p(l,_){_[0]&512&&e!==(e=l[9](l[30])+"")&&j(t,e)},d(l){l&&d(t)}}}function W(s){let e,t,l,_=s[30]+1+"",m,u,f,c,o=[{class:"electron"},{cx:u=s[27]},{cy:f=s[28]},s[11]],a={};for(let n=0;n<o.length;n+=1)a=N(a,o[n]);let i=s[9]&&U(s);return{c(){e=E("circle"),t=E("title"),l=w("Electron "),m=w(_),i&&i.c(),c=S(),this.h()},l(n){e=B(n,"circle",{class:!0,cx:!0,cy:!0});var r=q(e);t=B(r,"title",{});var g=q(t);l=z(g,"Electron "),m=z(g,_),g.forEach(d),r.forEach(d),i&&i.l(n),c=S(),this.h()},h(){A(e,a)},m(n,r){k(n,e,r),M(e,t),M(t,l),M(t,m),i&&i.m(n,r),k(n,c,r)},p(n,r){A(e,a=C(o,[{class:"electron"},r[0]&8204&&u!==(u=n[27])&&{cx:u},r[0]&8204&&f!==(f=n[28])&&{cy:f},r[0]&2048&&n[11]])),n[9]?i?i.p(n,r):(i=U(n),i.c(),i.m(c.parentNode,c)):i&&(i.d(1),i=null)},d(n){n&&(d(e),d(c)),i&&i.d(n)}}}function X(s){let e,t,l,_=`${s[6]*s[21]**1.5}s`,m=[{r:l=s[22]},s[12]],u={};for(let o=0;o<m.length;o+=1)u=N(u,m[o]);let f=I(Array(s[20])),c=[];for(let o=0;o<f.length;o+=1)c[o]=W(K(s,f,o));return{c(){e=E("g"),t=E("circle");for(let o=0;o<c.length;o+=1)c[o].c();this.h()},l(o){e=B(o,"g",{class:!0});var a=q(e);t=B(a,"circle",{r:!0}),q(t).forEach(d);for(let i=0;i<c.length;i+=1)c[i].l(a);a.forEach(d),this.h()},h(){A(t,u),P(t,"stroke-width",s[23]?2:1),P(t,"stroke",s[23]?"yellow":"white"),y(e,"class","shell svelte-1ntzqmz"),P(e,"animation-duration",_)},m(o,a){k(o,e,a),M(e,t);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(e,null)},p(o,a){if(A(t,u=C(m,[a[0]&8200&&l!==(l=o[22])&&{r:l},a[0]&4096&&o[12]])),P(t,"stroke-width",o[23]?2:1),P(t,"stroke",o[23]?"yellow":"white"),a[0]&11788){f=I(Array(o[20]));let i;for(i=0;i<f.length;i+=1){const n=K(o,f,i);c[i]?c[i].p(n,a):(c[i]=W(n),c[i].c(),c[i].m(e,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=f.length}a[0]&64&&_!==(_=`${o[6]*o[21]**1.5}s`)&&P(e,"animation-duration",_)},d(o){o&&d(e),Y(c,o)}}}function _e(s){let e,t,l,_,m,u,f=s[1]&&L(s),c=[{class:"nucleus"},s[13]],o={};for(let r=0;r<c.length;r+=1)o=N(o,c[r]);let a=s[0]&&T(s),i=I(s[2]),n=[];for(let r=0;r<i.length;r+=1)n[r]=X(J(s,i,r));return{c(){e=E("svg"),t=E("circle"),f&&f.c(),a&&a.c(),l=S();for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=B(r,"svg",{fill:!0,viewBox:!0,role:!0,style:!0,class:!0});var g=q(e);t=B(g,"circle",{class:!0});var b=q(t);f&&f.l(b),b.forEach(d),a&&a.l(g),l=S();for(let v=0;v<n.length;v+=1)n[v].l(g);g.forEach(d),this.h()},h(){A(t,o),y(e,"fill",s[5]),y(e,"viewBox",_="-"+s[4]/2+", -"+s[4]/2+", "+s[4]+", "+s[4]),y(e,"role","presentation"),y(e,"style",s[8]),y(e,"class","svelte-1ntzqmz")},m(r,g){k(r,e,g),M(e,t),f&&f.m(t,null),a&&a.m(e,null),M(e,l);for(let b=0;b<n.length;b+=1)n[b]&&n[b].m(e,null);m||(u=[F(e,"click",s[18]),F(e,"keyup",s[19])],m=!0)},p(r,g){if(r[1]?f?f.p(r,g):(f=L(r),f.c(),f.m(t,null)):f&&(f.d(1),f=null),A(t,o=C(c,[{class:"nucleus"},g[0]&8192&&r[13]])),r[0]?a?a.p(r,g):(a=T(r),a.c(),a.m(e,l)):a&&(a.d(1),a=null),g[0]&16076){i=I(r[2]);let b;for(b=0;b<i.length;b+=1){const v=J(r,i,b);n[b]?n[b].p(v,g):(n[b]=X(v),n[b].c(),n[b].m(e,null))}for(;b<n.length;b+=1)n[b].d(1);n.length=i.length}g[0]&32&&y(e,"fill",r[5]),g[0]&16&&_!==(_="-"+r[4]/2+", -"+r[4]/2+", "+r[4]+", "+r[4])&&y(e,"viewBox",_),g[0]&256&&y(e,"style",r[8])},i:O,o:O,d(r){r&&d(e),f&&f.d(),a&&a.d(),Y(n,r),m=!1,ee(u)}}}function re(s,e,t){let l,_,m,{symbol:u=""}=e,{name:f=""}=e,{shells:c}=e,{adapt_size:o=!1}=e,{shell_width:a=20}=e,{size:i=o?(c.length+1)*2*a+50:270}=e,{base_fill:n="white"}=e,{orbital_period:r=3}=e,{nucleus_props:g={}}=e,{shell_props:b={}}=e,{electron_props:v={}}=e,{highlight_shell:Q=null}=e,{style:R=""}=e,{number_electrons:p=!1}=e,{electron_label_props:D={}}=e;function Z(h){G.call(this,s,h)}function x(h){G.call(this,s,h)}return s.$$set=h=>{"symbol"in h&&t(0,u=h.symbol),"name"in h&&t(1,f=h.name),"shells"in h&&t(2,c=h.shells),"adapt_size"in h&&t(14,o=h.adapt_size),"shell_width"in h&&t(3,a=h.shell_width),"size"in h&&t(4,i=h.size),"base_fill"in h&&t(5,n=h.base_fill),"orbital_period"in h&&t(6,r=h.orbital_period),"nucleus_props"in h&&t(15,g=h.nucleus_props),"shell_props"in h&&t(16,b=h.shell_props),"electron_props"in h&&t(17,v=h.electron_props),"highlight_shell"in h&&t(7,Q=h.highlight_shell),"style"in h&&t(8,R=h.style),"number_electrons"in h&&t(9,p=h.number_electrons),"electron_label_props"in h&&t(10,D=h.electron_label_props)},s.$$.update=()=>{s.$$.dirty[0]&32768&&t(13,l={r:20,fill:"white","fill-opacity":"0.3",...g}),s.$$.dirty[0]&65536&&t(12,_={stroke:"white","stroke-width":1,fill:"none",...b}),s.$$.dirty[0]&131072&&t(11,m={r:3,stroke:"white","stroke-width":1,fill:"blue",...v})},[u,f,c,a,i,n,r,Q,R,p,D,m,_,l,o,g,b,v,Z,x]}class ue extends le{constructor(e){super(),te(this,e,re,_e,$,{symbol:0,name:1,shells:2,adapt_size:14,shell_width:3,size:4,base_fill:5,orbital_period:6,nucleus_props:15,shell_props:16,electron_props:17,highlight_shell:7,style:8,number_electrons:9,electron_label_props:10},null,[-1,-1])}}export{ue as B};
