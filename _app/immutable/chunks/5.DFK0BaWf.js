var ba=Object.freeze,Da=Object.defineProperty;var X=(p,a)=>ba(Da(p,"raw",{value:ba(a||p.slice())}));import{s as sa,e as y,b as w,d as M,g as k,Q as x,i as m,M as _a,t as A,h as na,N as Oa,a as T,O as Wa,f as P,j as aa,J as ca,K as ua,V as Z,c as O,u as W,k as q,m as R,H as ia,n as D,A as ka}from"./scheduler.DSZzDcX6.js";import{S as ta,i as ea,t as f,g as fa,c as ga,a as d,b as C,d as j,m as S,e as B,f as ra}from"./index.Ck97c3H1.js";import{C as oa}from"./CodeLinks.m2JKuZog.js";import{e as Q}from"./each.CNH9y-bx.js";import{f as qa}from"./index.DOJAnMEU.js";import{C as K,a as Ra}from"./ColorScaleSelect.B_eqrHrA.js";import{d as Na,P as Aa}from"./PeriodicTable.B8p3oJc0.js";import{P as Fa}from"./PropertySelect.3Pj3D5xr.js";import{T as Ja}from"./TableInset.Bo4j6oXY.js";function $a(p,a,e){const t=p.slice();return t[1]=a[e][0],t[2]=a[e][1],t[3]=a[e][2],t[4]=a[e][3],t[5]=a[e][4],t}function va(p){let a,e,t;return a=new K({props:{label:p[1]+"<br>• tick side="+p[2]+"<br>• range="+p[4],color_scale:p[1],tick_side:p[2],tick_labels:p[3],range:p[4],label_style:"white-space: nowrap; padding-right: 1em;"}}),{c(){e=y("div"),C(a.$$.fragment),this.h()},l(n){e=w(n,"DIV",{style:!0});var s=M(e);j(a.$$.fragment,s),this.h()},h(){x(e,"display","contents"),x(e,"--cbar-width","100%"),x(e,"--cbar-padding","2em")},m(n,s){m(n,e,s),S(a,e,null),t=!0},p:A,i(n){t||(f(a.$$.fragment,n),t=!0)},o(n){d(a.$$.fragment,n),t=!1},d(n){n&&a&&k(e),B(a,n)}}}function Ka(p){let a,e,t=Q(p[0]),n=[];for(let l=0;l<t.length;l+=1)n[l]=va($a(p,t,l));const s=l=>d(n[l],1,1,()=>{n[l]=null});return{c(){a=y("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){a=w(l,"DIV",{style:!0});var c=M(a);for(let o=0;o<n.length;o+=1)n[o].l(c);c.forEach(k),this.h()},h(){x(a,"border","0.1px dashed white")},m(l,c){m(l,a,c);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(a,null);e=!0},p(l,[c]){if(c&1){t=Q(l[0]);let o;for(o=0;o<t.length;o+=1){const g=$a(l,t,o);n[o]?(n[o].p(g,c),f(n[o],1)):(n[o]=va(g),n[o].c(),f(n[o],1),n[o].m(a,null))}for(fa(),o=t.length;o<n.length;o+=1)s(o);ga()}},i(l){if(!e){for(let c=0;c<t.length;c+=1)f(n[c]);e=!0}},o(l){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)d(n[c]);e=!1},d(l){l&&k(a),_a(n,l)}}}function Qa(p){return[[["Viridis","top",[0,.25,.5,.75,1]],["Magma","center",[],[100,1631]],["Cividis","bottom",[],[-99.9812,-10]]]]}class Ua extends ta{constructor(a){super(),ea(this,a,Qa,Ka,sa,{})}}function ya(p,a,e){const t=p.slice();return t[1]=a[e],t[3]=e,t}function wa(p,a,e){const t=p.slice();t[4]=a[e];const n=t[4].replace("interpolate","");return t[5]=n,t}function Ca(p){let a,e,t;return e=new K({props:{label:p[5],color_scale:p[5],label_side:p[1],label_style:"min-width: 5em;"}}),{c(){a=y("li"),C(e.$$.fragment),this.h()},l(n){a=w(n,"LI",{class:!0});var s=M(a);j(e.$$.fragment,s),s.forEach(k),this.h()},h(){na(a,"class","svelte-1u1zcz5")},m(n,s){m(n,a,s),S(e,a,null),t=!0},p:A,i(n){t||(f(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){n&&k(a),B(e)}}}function ja(p){let a,e,t,n,s,l,c=Q(p[0].slice(p[3]*5,5*p[3]+5)),o=[];for(let i=0;i<c.length;i+=1)o[i]=Ca(wa(p,c,i));const g=i=>d(o[i],1,1,()=>{o[i]=null});return{c(){a=y("ul"),e=y("code"),t=Oa(p[1]),n=T();for(let i=0;i<o.length;i+=1)o[i].c();s=T(),this.h()},l(i){a=w(i,"UL",{class:!0});var h=M(a);e=w(h,"CODE",{class:!0});var u=M(e);t=Wa(u,p[1]),u.forEach(k),n=P(h);for(let $=0;$<o.length;$+=1)o[$].l(h);s=P(h),h.forEach(k),this.h()},h(){na(e,"class","svelte-1u1zcz5"),na(a,"class","svelte-1u1zcz5")},m(i,h){m(i,a,h),aa(a,e),aa(e,t),aa(a,n);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(a,null);aa(a,s),l=!0},p(i,h){if(h&1){c=Q(i[0].slice(i[3]*5,5*i[3]+5));let u;for(u=0;u<c.length;u+=1){const $=wa(i,c,u);o[u]?(o[u].p($,h),f(o[u],1)):(o[u]=Ca($),o[u].c(),f(o[u],1),o[u].m(a,s))}for(fa(),u=c.length;u<o.length;u+=1)g(u);ga()}},i(i){if(!l){for(let h=0;h<c.length;h+=1)f(o[h]);l=!0}},o(i){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)d(o[h]);l=!1},d(i){i&&k(a),_a(o,i)}}}function Ya(p){let a,e,t=Q(["top","bottom","left","right"]),n=[];for(let l=0;l<4;l+=1)n[l]=ja(ya(p,t,l));const s=l=>d(n[l],1,1,()=>{n[l]=null});return{c(){a=y("section");for(let l=0;l<4;l+=1)n[l].c();this.h()},l(l){a=w(l,"SECTION",{class:!0});var c=M(a);for(let o=0;o<4;o+=1)n[o].l(c);c.forEach(k),this.h()},h(){na(a,"class","svelte-1u1zcz5")},m(l,c){m(l,a,c);for(let o=0;o<4;o+=1)n[o]&&n[o].m(a,null);e=!0},p(l,[c]){if(c&1){t=Q(["top","bottom","left","right"]);let o;for(o=0;o<4;o+=1){const g=ya(l,t,o);n[o]?(n[o].p(g,c),f(n[o],1)):(n[o]=ja(g),n[o].c(),f(n[o],1),n[o].m(a,null))}for(fa(),o=4;o<4;o+=1)s(o);ga()}},i(l){if(!e){for(let c=0;c<4;c+=1)f(n[c]);e=!0}},o(l){n=n.filter(Boolean);for(let c=0;c<4;c+=1)d(n[c]);e=!1},d(l){l&&k(a),_a(n,l)}}}function Ga(p){return[Object.keys(Na).filter(e=>e.startsWith("interpolate"))]}class Xa extends ta{constructor(a){super(),ea(this,a,Ga,Ya,sa,{})}}function Za(p){let a,e,t,n,s,l,c,o,g,i,h;return a=new K({props:{wrapper_style:ma,style:"width: 10em; height: 1ex;"}}),s=new K({props:{label:"Viridis",wrapper_style:ma,style:"width: 3em; height: 2em;"}}),g=new K({props:{wrapper_style:ma}}),{c(){C(a.$$.fragment),e=T(),t=y("br"),n=T(),C(s.$$.fragment),l=T(),c=y("br"),o=T(),i=y("div"),C(g.$$.fragment),this.h()},l(u){j(a.$$.fragment,u),e=P(u),t=w(u,"BR",{}),n=P(u),j(s.$$.fragment,u),l=P(u),c=w(u,"BR",{}),o=P(u),i=w(u,"DIV",{style:!0});var $=M(i);j(g.$$.fragment,$),this.h()},h(){x(i,"display","contents"),x(i,"--cbar-width","8em"),x(i,"--cbar-height","2em")},m(u,$){S(a,u,$),m(u,e,$),m(u,t,$),m(u,n,$),S(s,u,$),m(u,l,$),m(u,c,$),m(u,o,$),m(u,i,$),S(g,i,null),h=!0},p:A,i(u){h||(f(a.$$.fragment,u),f(s.$$.fragment,u),f(g.$$.fragment,u),h=!0)},o(u){d(a.$$.fragment,u),d(s.$$.fragment,u),d(g.$$.fragment,u),h=!1},d(u){u&&(k(e),k(t),k(n),k(l),k(c),k(o)),B(a,u),B(s,u),u&&g&&k(i),B(g,u)}}}const ma="place-items: center;";class an extends ta{constructor(a){super(),ea(this,a,null,Za,sa,{})}}function nn(p){let a,e,t,n;function s(c){p[7](c)}let l={color_scale:p[2],range:p[4],tick_labels:5,tick_side:"bottom"};return p[3]!==void 0&&(l.nice_range=p[3]),a=new K({props:l}),ca.push(()=>ra(a,"nice_range",s)),{c(){e=y("div"),C(a.$$.fragment),this.h()},l(c){e=w(c,"DIV",{style:!0});var o=M(e);j(a.$$.fragment,o),this.h()},h(){x(e,"display","contents"),x(e,"--cbar-width","100%"),x(e,"--cbar-height","15pt")},m(c,o){m(c,e,o),S(a,e,null),n=!0},p(c,o){const g={};o&4&&(g.color_scale=c[2]),o&16&&(g.range=c[4]),!t&&o&8&&(t=!0,g.nice_range=c[3],ua(()=>t=!1)),a.$set(g)},i(c){n||(f(a.$$.fragment,c),n=!0)},o(c){d(a.$$.fragment,c),n=!1},d(c){c&&a&&k(e),B(a,c)}}}function sn(p){let a,e;return a=new Ja({props:{slot:"inset",style:"place-items: center; padding: 2em;",$$slots:{default:[nn]},$$scope:{ctx:p}}}),{c(){C(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,n){S(a,t,n),e=!0},p(t,n){const s={};n&540&&(s.$$scope={dirty:n,ctx:t}),a.$set(s)},i(t){e||(f(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function tn(p){let a,e,t,n,s,l,c,o,g,i;function h(_){p[5](_)}let u={minSelect:1};p[2]!==void 0&&(u.value=p[2]),e=new Ra({props:u}),ca.push(()=>ra(e,"value",h));function $(_){p[6](_)}let I={};p[0]!==void 0&&(I.key=p[0]),s=new Fa({props:I}),ca.push(()=>ra(s,"key",$));function F(_){p[8](_)}let z={heatmap_values:p[1],style:"margin: 2em auto 4em;",color_scale_range:p[3]??p[4],links:"name",lanth_act_tiles:!1,$$slots:{inset:[sn]},$$scope:{ctx:p}};return p[2]!==void 0&&(z.color_scale=p[2]),o=new Aa({props:z}),ca.push(()=>ra(o,"color_scale",F)),{c(){a=y("form"),C(e.$$.fragment),n=T(),C(s.$$.fragment),c=T(),C(o.$$.fragment),this.h()},l(_){a=w(_,"FORM",{class:!0});var v=M(a);j(e.$$.fragment,v),n=P(v),j(s.$$.fragment,v),v.forEach(k),c=P(_),j(o.$$.fragment,_),this.h()},h(){na(a,"class","svelte-1fw3r7a")},m(_,v){m(_,a,v),S(e,a,null),aa(a,n),S(s,a,null),m(_,c,v),S(o,_,v),i=!0},p(_,[v]){const H={};!t&&v&4&&(t=!0,H.value=_[2],ua(()=>t=!1)),e.$set(H);const V={};!l&&v&1&&(l=!0,V.key=_[0],ua(()=>l=!1)),s.$set(V);const E={};v&2&&(E.heatmap_values=_[1]),v&24&&(E.color_scale_range=_[3]??_[4]),v&540&&(E.$$scope={dirty:v,ctx:_}),!g&&v&4&&(g=!0,E.color_scale=_[2],ua(()=>g=!1)),o.$set(E)},i(_){i||(f(e.$$.fragment,_),f(s.$$.fragment,_),f(o.$$.fragment,_),i=!0)},o(_){d(e.$$.fragment,_),d(s.$$.fragment,_),d(o.$$.fragment,_),i=!1},d(_){_&&(k(a),k(c)),B(e),B(s),B(o,_)}}}function en(p,a,e){let t,n,s="Viridis",l,c=n;function o(u){s=u,e(2,s)}function g(u){l=u,e(0,l)}function i(u){c=u,e(3,c)}function h(u){s=u,e(2,s)}return p.$$.update=()=>{p.$$.dirty&1&&e(1,t=l?qa.map(u=>u[l]):[]),p.$$.dirty&2&&e(4,n=[Math.min(...t),Math.max(...t)])},[l,t,s,c,n,o,g,i,h]}class pn extends ta{constructor(a){super(),ea(this,a,en,tn,sa,{})}}const ln=p=>({}),Sa=p=>({slot:"example"}),on=p=>({}),Ba=p=>({slot:"code"}),cn=p=>({}),Ta=p=>({slot:"example"}),un=p=>({}),Pa=p=>({slot:"code"}),rn=p=>({}),Ma=p=>({slot:"example"}),kn=p=>({}),Ia=p=>({slot:"code"}),mn=p=>({}),Va=p=>({slot:"example"}),_n=p=>({}),za=p=>({slot:"code"});function fn(p){let a,e;return a=new Ua({}),{c(){C(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,n){S(a,t,n),e=!0},i(t){e||(f(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function gn(p){let a;const e=p[0].default,t=O(e,p,p[1],Va),n=t||fn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,mn):q(s[1]),Va)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function dn(p){let a,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ColorBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>

  <span class="token keyword">const</span> bars <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Viridis</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">top</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Magma</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">center</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1631</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Cividis</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bottom</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">99.9812</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border: 0.1px dashed white;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript">bars </span><span class="token keyword">as</span> <span class="token language-javascript"><span class="token punctuation">[</span>color_scale<span class="token punctuation">,</span> tick_side<span class="token punctuation">,</span> tick_labels<span class="token punctuation">,</span> range<span class="token punctuation">,</span> width<span class="token punctuation">]</span><span class="token punctuation">}</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span>
      <span class="token attr-name">label="</span><span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span><span class="token attr-name">&lt;br</span><span class="token punctuation">></span><span class="token attr-name">&amp;bull;</span> <span class="token attr-name">tick</span> <span class="token attr-name">side=</span><span class="token language-javascript"><span class="token punctuation">{</span>tick_side<span class="token punctuation">}</span></span><span class="token attr-name">&lt;br</span><span class="token punctuation">></span><span class="token attr-name">&amp;bull;</span> <span class="token attr-name">range=</span><span class="token language-javascript"><span class="token punctuation">{</span>range<span class="token punctuation">}</span></span><span class="token attr-name">"</span>
      <span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span>
      <span class="token language-javascript"><span class="token punctuation">{</span>tick_side<span class="token punctuation">}</span></span>
      <span class="token language-javascript"><span class="token punctuation">{</span>tick_labels<span class="token punctuation">}</span></span>
      <span class="token language-javascript"><span class="token punctuation">{</span>range<span class="token punctuation">}</span></span>
      <span class="token attr-name">label_style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>white-space: nowrap; padding-right: 1em;<span class="token punctuation">"</span></span>
      <span class="token attr-name">--cbar-width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>
      <span class="token attr-name">--cbar-padding</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2em<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>`,t;return{c(){a=new ia(!1),t=D(),this.h()},l(n){a=ka(n,!1),t=D(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),m(n,t,s)},p:A,d(n){n&&(k(t),a.d())}}}function hn(p){let a;const e=p[0].default,t=O(e,p,p[1],za),n=t||dn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,_n):q(s[1]),za)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function bn(p){let a,e;return a=new Xa({}),{c(){C(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,n){S(a,t,n),e=!0},i(t){e||(f(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function $n(p){let a;const e=p[0].default,t=O(e,p,p[1],Ma),n=t||bn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,rn):q(s[1]),Ma)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function vn(p){let a,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ColorBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> d3sc <span class="token keyword">from</span> <span class="token string">'d3-scale-chromatic'</span>

  <span class="token keyword">const</span> names <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>d3sc<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">interpolate</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">top</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bottom</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">left</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">right</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> </span><span class="token keyword">as</span> <span class="token language-javascript">label_side<span class="token punctuation">,</span> idx<span class="token punctuation">}</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>label_side<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>
      <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript">names<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>idx <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token operator">*</span> idx <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span> </span><span class="token keyword">as</span> <span class="token language-javascript">name<span class="token punctuation">}</span></span></span>
        <span class="token language-javascript"><span class="token punctuation">{</span>@<span class="token keyword">const</span> color_scale <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">interpolate</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span>
            <span class="token attr-name">label=</span><span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span>
            <span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span>
            <span class="token language-javascript"><span class="token punctuation">{</span>label_side<span class="token punctuation">}</span></span>
            <span class="token attr-name">label_style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>min-width: 5em;<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>`,t;return{c(){a=new ia(!1),t=D(),this.h()},l(n){a=ka(n,!1),t=D(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),m(n,t,s)},p:A,d(n){n&&(k(t),a.d())}}}function yn(p){let a;const e=p[0].default,t=O(e,p,p[1],Ia),n=t||vn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,kn):q(s[1]),Ia)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function wn(p){let a,e;return a=new an({}),{c(){C(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,n){S(a,t,n),e=!0},i(t){e||(f(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function Cn(p){let a;const e=p[0].default,t=O(e,p,p[1],Ta),n=t||wn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,cn):q(s[1]),Ta)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function jn(p){let a,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ColorBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>

  <span class="token keyword">const</span> wrapper_style <span class="token operator">=</span> <span class="token string">'place-items: center;'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token language-javascript"><span class="token punctuation">{</span>wrapper_style<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 10em; height: 1ex;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Viridis<span class="token punctuation">"</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>wrapper_style<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 3em; height: 2em;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token language-javascript"><span class="token punctuation">{</span>wrapper_style<span class="token punctuation">}</span></span> <span class="token attr-name">--cbar-width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8em<span class="token punctuation">"</span></span> <span class="token attr-name">--cbar-height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2em<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>`,t;return{c(){a=new ia(!1),t=D(),this.h()},l(n){a=ka(n,!1),t=D(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),m(n,t,s)},p:A,d(n){n&&(k(t),a.d())}}}function Sn(p){let a;const e=p[0].default,t=O(e,p,p[1],Pa),n=t||jn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,un):q(s[1]),Pa)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function Bn(p){let a,e;return a=new pn({}),{c(){C(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,n){S(a,t,n),e=!0},i(t){e||(f(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){B(a,t)}}}function Tn(p){let a;const e=p[0].default,t=O(e,p,p[1],Sa),n=t||Bn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,ln):q(s[1]),Sa)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}function Pn(p){let a,e=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>
    ColorBar<span class="token punctuation">,</span>
    ColorScaleSelect<span class="token punctuation">,</span>
    element_data<span class="token punctuation">,</span>
    PeriodicTable<span class="token punctuation">,</span>
    PropertySelect<span class="token punctuation">,</span>
    TableInset<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>

  <span class="token keyword">let</span> color_scale <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Viridis</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">let</span> heatmap_key
  <span class="token literal-property property">$</span><span class="token operator">:</span> heatmap_values <span class="token operator">=</span> heatmap_key
    <span class="token operator">?</span> element_data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> el<span class="token punctuation">[</span>heatmap_key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> heat_range <span class="token operator">=</span> <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>heatmap_values<span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>heatmap_values<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> cs_range <span class="token operator">=</span> heat_range
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorScaleSelect</span> <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span> <span class="token attr-name">minSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PropertySelect</span> <span class="token attr-name"><span class="token namespace">bind:</span>key=</span><span class="token language-javascript"><span class="token punctuation">{</span>heatmap_key<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PeriodicTable</span>
  <span class="token language-javascript"><span class="token punctuation">{</span>heatmap_values<span class="token punctuation">}</span></span>
  <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>margin: 2em auto 4em;<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">bind:</span>color_scale</span>
  <span class="token attr-name">color_scale_range=</span><span class="token language-javascript"><span class="token punctuation">{</span>cs_range <span class="token operator">??</span> heat_range<span class="token punctuation">}</span></span>
  <span class="token attr-name">links</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span>
  <span class="token attr-name">lanth_act_tiles=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableInset</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inset<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>place-items: center; padding: 2em;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span>
      <span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span>
      <span class="token attr-name">range=</span><span class="token language-javascript"><span class="token punctuation">{</span>heat_range<span class="token punctuation">}</span></span>
      <span class="token attr-name"><span class="token namespace">bind:</span>nice_range=</span><span class="token language-javascript"><span class="token punctuation">{</span>cs_range<span class="token punctuation">}</span></span>
      <span class="token attr-name">tick_labels=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">tick_side</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>
      <span class="token attr-name">--cbar-width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>
      <span class="token attr-name">--cbar-height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>15pt<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableInset</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PeriodicTable</span><span class="token punctuation">></span></span>`,t;return{c(){a=new ia(!1),t=D(),this.h()},l(n){a=ka(n,!1),t=D(),this.h()},h(){a.a=t},m(n,s){a.m(e,n,s),m(n,t,s)},p:A,d(n){n&&(k(t),a.d())}}}function Mn(p){let a;const e=p[0].default,t=O(e,p,p[1],Ba),n=t||Pn();return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),a=!0},p(s,l){t&&t.p&&(!a||l&2)&&W(t,e,s,s[1],a?R(e,s[1],l,on):q(s[1]),Ba)},i(s){a||(f(n,s),a=!0)},o(s){d(n,s),a=!1},d(s){n&&n.d(s)}}}var Ea,xa,Ha,La;function In(p){let a,e="<code>ColorBar.svelte</code>",t,n,s="Here’s a <code>ColorBar</code> with tick labels:",l,c,o,g,i,h="<code>ColorBar</code> supports <code>label_side = [&#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;right&#39;]</code>",u,$,I,F,z,_="You can make fat and skinny bars:",v,H,V,E,N,da="<code>PeriodicTable.svelte</code> heatmap example with <code>ColorBar</code> inside <code>TableInset</code>",pa,J,L,la;return o=new oa({props:{src:String.raw(Ea||(Ea=X([`<script>
import { ColorBar } from '$lib'
const bars = [
[\`Viridis\`, \`top\`, [0, 0.25, 0.5, 0.75, 1]],
[\`Magma\`, \`center\`, [], [100, 1631]],
[\`Cividis\`, \`bottom\`, [], [-99.9812, -10]],
]
<\/script>
<div style="border: 0.1px dashed white;">
{#each bars as [color_scale, tick_side, tick_labels, range, width]}
<ColorBar
label="{color_scale}<br>&bull; tick side={tick_side}<br>&bull; range={range}"
{color_scale}
{tick_side}
{tick_labels}
{range}
label_style="white-space: nowrap; padding-right: 1em;"
--cbar-width="100%"
--cbar-padding="2em"
/>
{/each}
</div>`],[`<script>
import { ColorBar } from '$lib'
const bars = [
[\\\`Viridis\\\`, \\\`top\\\`, [0, 0.25, 0.5, 0.75, 1]],
[\\\`Magma\\\`, \\\`center\\\`, [], [100, 1631]],
[\\\`Cividis\\\`, \\\`bottom\\\`, [], [-99.9812, -10]],
]
<\/script>
<div style="border: 0.1px dashed white;">
{#each bars as [color_scale, tick_side, tick_labels, range, width]}
<ColorBar
label="{color_scale}<br>&bull; tick side={tick_side}<br>&bull; range={range}"
{color_scale}
{tick_side}
{tick_labels}
{range}
label_style="white-space: nowrap; padding-right: 1em;"
--cbar-width="100%"
--cbar-padding="2em"
/>
{/each}
</div>`]))),meta:{Wrapper:"svelte-zoo/CodeExample.svelte",filename:"/src/routes/(demos)/color-bar/+page.md",pkg:"elementari",repo:"https://github.com/elmtru/elementaru",hideStyle:!0,example:!0,stackblitz:!0},$$slots:{code:[hn],example:[gn]},$$scope:{ctx:p}}}),I=new oa({props:{src:String.raw(xa||(xa=X([`<script>
import { ColorBar } from '$lib'
import * as d3sc from 'd3-scale-chromatic'
const names = Object.keys(d3sc).filter((key) => key.startsWith(\`interpolate\`))
<\/script>
<section>
{#each [\`top\`, \`bottom\`, \`left\`, \`right\`] as label_side, idx}
<ul>
<code>{label_side}</code>
{#each names.slice(idx * 5, 5 * idx + 5) as name}
{@const color_scale = name.replace(\`interpolate\`, \`\`)}
<li>
<ColorBar
label={color_scale}
{color_scale}
{label_side}
label_style="min-width: 5em;"
/>
</li>
{/each}
</ul>
{/each}
</section>`],[`<script>
import { ColorBar } from '$lib'
import * as d3sc from 'd3-scale-chromatic'
const names = Object.keys(d3sc).filter((key) => key.startsWith(\\\`interpolate\\\`))
<\/script>
<section>
{#each [\\\`top\\\`, \\\`bottom\\\`, \\\`left\\\`, \\\`right\\\`] as label_side, idx}
<ul>
<code>{label_side}</code>
{#each names.slice(idx * 5, 5 * idx + 5) as name}
{@const color_scale = name.replace(\\\`interpolate\\\`, \\\`\\\`)}
<li>
<ColorBar
label={color_scale}
{color_scale}
{label_side}
label_style="min-width: 5em;"
/>
</li>
{/each}
</ul>
{/each}
</section>`]))),meta:{Wrapper:"svelte-zoo/CodeExample.svelte",filename:"/src/routes/(demos)/color-bar/+page.md",pkg:"elementari",repo:"https://github.com/elmtru/elementaru",hideStyle:!0,example:!0,stackblitz:!0},$$slots:{code:[yn],example:[$n]},$$scope:{ctx:p}}}),V=new oa({props:{src:String.raw(Ha||(Ha=X([`<script>
import { ColorBar } from '$lib'
const wrapper_style = 'place-items: center;'
<\/script>
<ColorBar {wrapper_style} style="width: 10em; height: 1ex;" />
<br />
<ColorBar label="Viridis" {wrapper_style} style="width: 3em; height: 2em;" />
<br />
<ColorBar {wrapper_style} --cbar-width="8em" --cbar-height="2em" />`]))),meta:{Wrapper:"svelte-zoo/CodeExample.svelte",filename:"/src/routes/(demos)/color-bar/+page.md",pkg:"elementari",repo:"https://github.com/elmtru/elementaru",hideStyle:!0,example:!0,stackblitz:!0},$$slots:{code:[Sn],example:[Cn]},$$scope:{ctx:p}}}),L=new oa({props:{src:String.raw(La||(La=X([`<script>
import {
ColorBar,
ColorScaleSelect,
element_data,
PeriodicTable,
PropertySelect,
TableInset,
} from '$lib'
let color_scale = \`Viridis\`
let heatmap_key
$: heatmap_values = heatmap_key
? element_data.map((el) => el[heatmap_key])
: []
$: heat_range = [Math.min(...heatmap_values), Math.max(...heatmap_values)]
let cs_range = heat_range
<\/script>
<form>
<ColorScaleSelect bind:value={color_scale} minSelect={1} />
<PropertySelect bind:key={heatmap_key} />
</form>
<PeriodicTable
{heatmap_values}
style="margin: 2em auto 4em;"
bind:color_scale
color_scale_range={cs_range ?? heat_range}
links="name"
lanth_act_tiles={false}
>
<TableInset slot="inset" style="place-items: center; padding: 2em;">
<ColorBar
{color_scale}
range={heat_range}
bind:nice_range={cs_range}
tick_labels={5}
tick_side="bottom"
--cbar-width="100%"
--cbar-height="15pt"
/>
</TableInset>
</PeriodicTable>`],[`<script>
import {
ColorBar,
ColorScaleSelect,
element_data,
PeriodicTable,
PropertySelect,
TableInset,
} from '$lib'
let color_scale = \\\`Viridis\\\`
let heatmap_key
$: heatmap_values = heatmap_key
? element_data.map((el) => el[heatmap_key])
: []
$: heat_range = [Math.min(...heatmap_values), Math.max(...heatmap_values)]
let cs_range = heat_range
<\/script>
<form>
<ColorScaleSelect bind:value={color_scale} minSelect={1} />
<PropertySelect bind:key={heatmap_key} />
</form>
<PeriodicTable
{heatmap_values}
style="margin: 2em auto 4em;"
bind:color_scale
color_scale_range={cs_range ?? heat_range}
links="name"
lanth_act_tiles={false}
>
<TableInset slot="inset" style="place-items: center; padding: 2em;">
<ColorBar
{color_scale}
range={heat_range}
bind:nice_range={cs_range}
tick_labels={5}
tick_side="bottom"
--cbar-width="100%"
--cbar-height="15pt"
/>
</TableInset>
</PeriodicTable>`]))),meta:{Wrapper:"svelte-zoo/CodeExample.svelte",filename:"/src/routes/(demos)/color-bar/+page.md",pkg:"elementari",repo:"https://github.com/elmtru/elementaru",hideStyle:!0,example:!0,stackblitz:!0,code_above:!0},$$slots:{code:[Mn],example:[Tn]},$$scope:{ctx:p}}}),{c(){a=y("p"),a.innerHTML=e,t=T(),n=y("p"),n.innerHTML=s,l=T(),c=y("div"),C(o.$$.fragment),g=T(),i=y("p"),i.innerHTML=h,u=T(),$=y("div"),C(I.$$.fragment),F=T(),z=y("p"),z.textContent=_,v=T(),H=y("div"),C(V.$$.fragment),E=T(),N=y("p"),N.innerHTML=da,pa=T(),J=y("div"),C(L.$$.fragment)},l(r){a=w(r,"P",{"data-svelte-h":!0}),Z(a)!=="svelte-1lubuts"&&(a.innerHTML=e),t=P(r),n=w(r,"P",{"data-svelte-h":!0}),Z(n)!=="svelte-1kqeevu"&&(n.innerHTML=s),l=P(r),c=w(r,"DIV",{});var b=M(c);j(o.$$.fragment,b),b.forEach(k),g=P(r),i=w(r,"P",{"data-svelte-h":!0}),Z(i)!=="svelte-1dl7v3e"&&(i.innerHTML=h),u=P(r),$=w(r,"DIV",{});var U=M($);j(I.$$.fragment,U),U.forEach(k),F=P(r),z=w(r,"P",{"data-svelte-h":!0}),Z(z)!=="svelte-qjibpt"&&(z.textContent=_),v=P(r),H=w(r,"DIV",{});var Y=M(H);j(V.$$.fragment,Y),Y.forEach(k),E=P(r),N=w(r,"P",{"data-svelte-h":!0}),Z(N)!=="svelte-tgr1oa"&&(N.innerHTML=da),pa=P(r),J=w(r,"DIV",{});var G=M(J);j(L.$$.fragment,G),G.forEach(k)},m(r,b){m(r,a,b),m(r,t,b),m(r,n,b),m(r,l,b),m(r,c,b),S(o,c,null),m(r,g,b),m(r,i,b),m(r,u,b),m(r,$,b),S(I,$,null),m(r,F,b),m(r,z,b),m(r,v,b),m(r,H,b),S(V,H,null),m(r,E,b),m(r,N,b),m(r,pa,b),m(r,J,b),S(L,J,null),la=!0},p(r,[b]){const U={};b&2&&(U.$$scope={dirty:b,ctx:r}),o.$set(U);const Y={};b&2&&(Y.$$scope={dirty:b,ctx:r}),I.$set(Y);const G={};b&2&&(G.$$scope={dirty:b,ctx:r}),V.$set(G);const ha={};b&2&&(ha.$$scope={dirty:b,ctx:r}),L.$set(ha)},i(r){la||(f(o.$$.fragment,r),f(I.$$.fragment,r),f(V.$$.fragment,r),f(L.$$.fragment,r),la=!0)},o(r){d(o.$$.fragment,r),d(I.$$.fragment,r),d(V.$$.fragment,r),d(L.$$.fragment,r),la=!1},d(r){r&&(k(a),k(t),k(n),k(l),k(c),k(g),k(i),k(u),k($),k(F),k(z),k(v),k(H),k(E),k(N),k(pa),k(J)),B(o),B(I),B(V),B(L)}}}function Vn(p,a,e){let{$$slots:t={},$$scope:n}=a;return p.$$set=s=>{"$$scope"in s&&e(1,n=s.$$scope)},[t,n]}class zn extends ta{constructor(a){super(),ea(this,a,Vn,In,sa,{})}}const An=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"}));export{zn as P,An as _};
