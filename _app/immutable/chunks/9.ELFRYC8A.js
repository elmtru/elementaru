var Z=Object.freeze,gn=Object.defineProperty;var nn=(t,n)=>Z(gn(t,"raw",{value:Z(n||t.slice())}));import{s as pn,J as _n,e as d,a as J,N as g,b as $,d as S,V as dn,f as N,O as _,g as r,h as C,i as w,j as u,K as $n,P as G,c as on,u as ln,k as cn,m as un,H as vn,n as an,A as bn,t as hn}from"./scheduler.DSZzDcX6.js";import{S as rn,i as kn,f as Sn,b as R,d as T,m as q,t as E,a as O,e as I}from"./index.Ck97c3H1.js";import{C as yn}from"./CodeLinks.Dgr_X-x7.js";import"./index.CdZlA5Fd.js";import{m as mn}from"./index.Bb0SbFKS.js";import{M as jn}from"./MultiSelect.BoA4L_L7.js";import{S as wn}from"./Structure.CGTpUcf8.js";function En(t){let n,p,e="Select a molecule:",s,a,l,V,i,y,B,z,F,k,K,v,U,x=JSON.stringify(t[1],null,2)+"",M,W,Y,P,b,A,H,m,h;function fn(o){t[2](o)}let Q={id:"select",options:mn.map(On),selected:[t[0]],maxSelect:1,minSelect:1};return t[0]!==void 0&&(Q.value=t[0]),a=new jn({props:Q}),_n.push(()=>Sn(a,"value",fn)),m=new wn({props:{structure:t[1],bonding_strategy:"max_dist",bonding_options:{max_bond_dist:2}}}),{c(){n=d("form"),p=d("label"),p.textContent=e,s=J(),R(a.$$.fragment),V=J(),i=d("details"),y=d("summary"),B=g("JSON for molecule "),z=g(t[0]),F=J(),k=d("pre"),K=g(""),v=d("code"),U=g(`
`),M=g(x),W=g(`
`),Y=g(`
`),P=J(),b=d("h3"),A=g(t[0]),H=J(),R(m.$$.fragment),this.h()},l(o){n=$(o,"FORM",{class:!0});var c=S(n);p=$(c,"LABEL",{for:!0,"data-svelte-h":!0}),dn(p)!=="svelte-d91jqn"&&(p.textContent=e),s=N(c),T(a.$$.fragment,c),V=N(c),i=$(c,"DETAILS",{class:!0});var f=S(i);y=$(f,"SUMMARY",{});var j=S(y);B=_(j,"JSON for molecule "),z=_(j,t[0]),j.forEach(r),F=N(f),k=$(f,"PRE",{class:!0});var D=S(k);K=_(D,""),v=$(D,"CODE",{});var L=S(v);U=_(L,`
`),M=_(L,x),W=_(L,`
`),L.forEach(r),Y=_(D,`
`),D.forEach(r),f.forEach(r),c.forEach(r),P=N(o),b=$(o,"H3",{align:!0});var X=S(b);A=_(X,t[0]),X.forEach(r),H=N(o),T(m.$$.fragment,o),this.h()},h(){C(p,"for","select"),C(k,"class","svelte-f6t5kv"),C(i,"class","svelte-f6t5kv"),C(n,"class","svelte-f6t5kv"),C(b,"align","center")},m(o,c){w(o,n,c),u(n,p),u(n,s),q(a,n,null),u(n,V),u(n,i),u(i,y),u(y,B),u(y,z),u(i,F),u(i,k),u(k,K),u(k,v),u(v,U),u(v,M),u(v,W),u(k,Y),w(o,P,c),w(o,b,c),u(b,A),w(o,H,c),q(m,o,c),h=!0},p(o,[c]){const f={};c&1&&(f.selected=[o[0]]),!l&&c&1&&(l=!0,f.value=o[0],$n(()=>l=!1)),a.$set(f),(!h||c&1)&&G(z,o[0]),(!h||c&2)&&x!==(x=JSON.stringify(o[1],null,2)+"")&&G(M,x),(!h||c&1)&&G(A,o[0]);const j={};c&2&&(j.structure=o[1]),m.$set(j)},i(o){h||(E(a.$$.fragment,o),E(m.$$.fragment,o),h=!0)},o(o){O(a.$$.fragment,o),O(m.$$.fragment,o),h=!1},d(o){o&&(r(n),r(P),r(b),r(H)),I(a),I(m,o)}}}const On=t=>t.name;function xn(t,n,p){let e,s="benzene";function a(l){s=l,p(0,s)}return t.$$.update=()=>{t.$$.dirty&1&&p(1,e=mn.find(l=>l.name===s)||{})},[s,e,a]}class Jn extends rn{constructor(n){super(),kn(this,n,xn,En,pn,{})}}const Nn=t=>({}),sn=t=>({slot:"example"}),Cn=t=>({}),tn=t=>({slot:"code"});function zn(t){let n,p;return n=new Jn({}),{c(){R(n.$$.fragment)},l(e){T(n.$$.fragment,e)},m(e,s){q(n,e,s),p=!0},i(e){p||(E(n.$$.fragment,e),p=!0)},o(e){O(n.$$.fragment,e),p=!1},d(e){I(n,e)}}}function Mn(t){let n;const p=t[0].default,e=on(p,t,t[1],sn),s=e||zn();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){e&&e.p&&(!n||l&2)&&ln(e,p,a,a[1],n?un(p,a[1],l,Nn):cn(a[1]),sn)},i(a){n||(E(s,a),n=!0)},o(a){O(s,a),n=!1},d(a){s&&s.d(a)}}}function Pn(t){let n,p=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Structure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> molecules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$site'</span>
  <span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">'svelte-multiselect'</span>

  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">benzene</span><span class="token template-punctuation string">\`</span></span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> molecule <span class="token operator">=</span> molecules<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">struct</span><span class="token punctuation">)</span> <span class="token operator">=></span> struct<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Select a molecule:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span>
    <span class="token attr-name">options=</span><span class="token language-javascript"><span class="token punctuation">{</span>molecules<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mol</span><span class="token punctuation">)</span> <span class="token operator">=></span> mol<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">selected=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>
    <span class="token attr-name">maxSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">minSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>JSON for molecule <span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>molecule<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>center<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Structure</span> <span class="token attr-name">structure=</span><span class="token language-javascript"><span class="token punctuation">{</span>molecule<span class="token punctuation">}</span></span> <span class="token attr-name">bonding_strategy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>max_dist<span class="token punctuation">"</span></span> <span class="token attr-name">bonding_options=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">max_bond_dist</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>`,e;return{c(){n=new vn(!1),e=an(),this.h()},l(s){n=bn(s,!1),e=an(),this.h()},h(){n.a=e},m(s,a){n.m(p,s,a),w(s,e,a)},p:hn,d(s){s&&(r(e),n.d())}}}function An(t){let n;const p=t[0].default,e=on(p,t,t[1],tn),s=e||Pn();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){e&&e.p&&(!n||l&2)&&ln(e,p,a,a[1],n?un(p,a[1],l,Cn):cn(a[1]),tn)},i(a){n||(E(s,a),n=!0)},o(a){O(s,a),n=!1},d(a){s&&s.d(a)}}}var en;function Hn(t){let n,p,e;return p=new yn({props:{src:String.raw(en||(en=nn([`<script>
import { Structure } from '$lib'
import { molecules } from '$site'
import Select from 'svelte-multiselect'
let name = \`benzene\`
$: molecule = molecules.find((struct) => struct.name === name) || {}
<\/script>
<form>
<label for="select">Select a molecule:</label>
<Select
id="select"
options={molecules.map((mol) => mol.name)}
selected={[name]}
bind:value={name}
maxSelect={1}
minSelect={1}
/>
<details>
<summary>JSON for molecule {name}</summary>
<pre>
<code>
{JSON.stringify(molecule, null, 2)}
</code>
</pre>
</details>
</form>
<h3 align='center'>{name}</h3>
<Structure structure={molecule} bonding_strategy="max_dist" bonding_options={{max_bond_dist: 2}} />`],[`<script>
import { Structure } from '$lib'
import { molecules } from '$site'
import Select from 'svelte-multiselect'
let name = \\\`benzene\\\`
$: molecule = molecules.find((struct) => struct.name === name) || {}
<\/script>
<form>
<label for="select">Select a molecule:</label>
<Select
id="select"
options={molecules.map((mol) => mol.name)}
selected={[name]}
bind:value={name}
maxSelect={1}
minSelect={1}
/>
<details>
<summary>JSON for molecule {name}</summary>
<pre>
<code>
{JSON.stringify(molecule, null, 2)}
</code>
</pre>
</details>
</form>
<h3 align='center'>{name}</h3>
<Structure structure={molecule} bonding_strategy="max_dist" bonding_options={{max_bond_dist: 2}} />`]))),meta:{Wrapper:"svelte-zoo/CodeExample.svelte",filename:"/src/routes/(demos)/molecule/+page.md",pkg:"elementari",repo:"https://github.com/elmtru/elementaru",hideStyle:!0,example:!0,stackblitz:!0},$$slots:{code:[An],example:[Mn]},$$scope:{ctx:t}}}),{c(){n=d("div"),R(p.$$.fragment)},l(s){n=$(s,"DIV",{});var a=S(n);T(p.$$.fragment,a),a.forEach(r)},m(s,a){w(s,n,a),q(p,n,null),e=!0},p(s,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:s}),p.$set(l)},i(s){e||(E(p.$$.fragment,s),e=!0)},o(s){O(p.$$.fragment,s),e=!1},d(s){s&&r(n),I(p)}}}function Dn(t,n,p){let{$$slots:e={},$$scope:s}=n;return t.$$set=a=>{"$$scope"in a&&p(1,s=a.$$scope)},[e,s]}class Ln extends rn{constructor(n){super(),kn(this,n,Dn,Hn,pn,{})}}const Un=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"}));export{Ln as P,Un as _};
