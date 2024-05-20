import{s as Pt,p as it,X as bt,q as te,c as se,a as C,e as g,N as A,f as E,b as v,d as T,V as W,g as p,O as B,h as I,i as R,j as m,u as re,k as ne,m as ie,P as X,M as Dt,Q as Vt,Y as Rt,l as vt,r as oe,o as ue,t as me}from"./scheduler.DSZzDcX6.js";import{S as Mt,i as wt,b as ot,d as ut,m as mt,t as et,a as at,e as ct}from"./index.Ck97c3H1.js";import{e as ft}from"./each.CNH9y-bx.js";import{g as Ut}from"./entry.BBvK4t0Z.js";import{p as ce}from"./stores.D_ZKyMHD.js";import{p as qt,e as fe}from"./index.DB-DdzQC.js";import{m as _e,f as Tt,d as Gt}from"./api.Dpw5L1iu.js";import{S as he}from"./Structure.CHN3Jiz8.js";import{g as ee,a as ae}from"./spread.CgU5AtxT.js";import{I as le,S as pe}from"./StructureCard.CP3iJRJ8.js";function de(n){let t,l;const a=[{data:n[1]},n[2],{title:n[0]}];let s={};for(let e=0;e<a.length;e+=1)s=it(s,a[e]);return t=new le({props:s}),{c(){ot(t.$$.fragment)},l(e){ut(t.$$.fragment,e)},m(e,o){mt(t,e,o),l=!0},p(e,[o]){const r=o&7?ee(a,[o&2&&{data:e[1]},o&4&&ae(e[2]),o&1&&{title:e[0]}]):{};t.$set(r)},i(e){l||(et(t.$$.fragment,e),l=!0)},o(e){at(t.$$.fragment,e),l=!1},d(e){ct(t,e)}}}function ge(n,t,l){let a;const s=["title","material"];let e=bt(t,s),{title:o="Symmetry"}=t,{material:r}=t;return n.$$set=i=>{t=it(it({},t),te(i)),l(2,e=bt(t,s)),"title"in i&&l(0,o=i.title),"material"in i&&l(3,r=i.material)},n.$$.update=()=>{var i,b,k,S;n.$$.dirty&8&&l(1,a=[{title:"Crystal System",value:`${(i=r.symmetry)==null?void 0:i.crystal_system}`},{title:"International Number",value:(b=r.symmetry)==null?void 0:b.number},{title:"Point Group",value:`${(k=r.symmetry)==null?void 0:k.point_group}`},{title:"Symbol",value:`${(S=r.symmetry)==null?void 0:S.symbol}`}])},[o,a,e,r]}class ve extends Mt{constructor(t){super(),wt(this,t,ge,de,Pt,{title:0,material:3})}}function Ht(n,t,l){const a=n.slice();a[5]=t[l];const s=`https://ccdc.cam.ac.uk/structures/Search?Ccdcid=${a[5]}&DatabaseToSearch=ICSD`;return a[6]=s,a}function Yt(n,t,l){const a=n.slice();return a[5]=t[l],a}const ye=n=>({}),Jt=n=>({});function Ft(n){let t,l,a=ft(n[0].task_ids),s=[];for(let e=0;e<a.length;e+=1)s[e]=Qt(Yt(n,a,e));return{c(){t=g("p"),l=A("Task IDs: ");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=v(e,"P",{class:!0});var o=T(t);l=B(o,"Task IDs: ");for(let r=0;r<s.length;r+=1)s[r].l(o);o.forEach(p),this.h()},h(){I(t,"class","svelte-11ezupt")},m(e,o){R(e,t,o),m(t,l);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,null)},p(e,o){if(o&1){a=ft(e[0].task_ids);let r;for(r=0;r<a.length;r+=1){const i=Yt(e,a,r);s[r]?s[r].p(i,o):(s[r]=Qt(i),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=a.length}},d(e){e&&p(t),Dt(s,e)}}}function Qt(n){let t,l=n[5]+"",a,s;return{c(){t=g("a"),a=A(l),this.h()},l(e){t=v(e,"A",{href:!0,class:!0});var o=T(t);a=B(o,l),o.forEach(p),this.h()},h(){I(t,"href",s="https://materialsproject.org/tasks/"+n[5]),I(t,"class","svelte-11ezupt")},m(e,o){R(e,t,o),m(t,a)},p(e,o){o&1&&l!==(l=e[5]+"")&&X(a,l),o&1&&s!==(s="https://materialsproject.org/tasks/"+e[5])&&I(t,"href",s)},d(e){e&&p(t)}}}function Xt(n){let t,l,a=ft(n[0].database_IDs.icsd),s=[];for(let e=0;e<a.length;e+=1)s[e]=Zt(Ht(n,a,e));return{c(){t=g("p"),l=A("ICSD IDs: ");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=v(e,"P",{class:!0});var o=T(t);l=B(o,"ICSD IDs: ");for(let r=0;r<s.length;r+=1)s[r].l(o);o.forEach(p),this.h()},h(){I(t,"class","svelte-11ezupt")},m(e,o){R(e,t,o),m(t,l);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,null)},p(e,o){if(o&1){a=ft(e[0].database_IDs.icsd);let r;for(r=0;r<a.length;r+=1){const i=Ht(e,a,r);s[r]?s[r].p(i,o):(s[r]=Zt(i),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=a.length}},d(e){e&&p(t),Dt(s,e)}}}function Zt(n){let t,l=n[5]+"",a,s;return{c(){t=g("a"),a=A(l),this.h()},l(e){t=v(e,"A",{href:!0,class:!0});var o=T(t);a=B(o,l),o.forEach(p),this.h()},h(){I(t,"href",s=n[6]),I(t,"class","svelte-11ezupt")},m(e,o){R(e,t,o),m(t,a)},p(e,o){o&1&&l!==(l=e[5]+"")&&X(a,l),o&1&&s!==(s=e[6])&&I(t,"href",s)},d(e){e&&p(t)}}}function be(n){var Y,L,O;let t,l,a,s,e,o,r,i="Related material IDs",b,k,S,N,q=n[0].warnings+"",f,P;const D=[{data:n[1]},n[2],{title:"Material"}];let U={};for(let u=0;u<D.length;u+=1)U=it(U,D[u]);t=new le({props:U}),a=new ve({props:{material:n[0]}});const G=n[4]["after-symmetry"],h=se(G,n,n[3],Jt);let c=((Y=n[0].task_ids)==null?void 0:Y.length)&&Ft(n),$=((O=(L=n[0].database_IDs)==null?void 0:L.icsd)==null?void 0:O.length)&&Xt(n);return{c(){ot(t.$$.fragment),l=C(),ot(a.$$.fragment),s=C(),h&&h.c(),e=C(),o=g("details"),r=g("summary"),r.textContent=i,b=C(),c&&c.c(),k=C(),$&&$.c(),S=C(),N=g("p"),f=A(q),this.h()},l(u){ut(t.$$.fragment,u),l=E(u),ut(a.$$.fragment,u),s=E(u),h&&h.l(u),e=E(u),o=v(u,"DETAILS",{});var d=T(o);r=v(d,"SUMMARY",{"data-svelte-h":!0}),W(r)!=="svelte-l0tqk2"&&(r.textContent=i),b=E(d),c&&c.l(d),k=E(d),$&&$.l(d),d.forEach(p),S=E(u),N=v(u,"P",{class:!0});var V=T(N);f=B(V,q),V.forEach(p),this.h()},h(){I(N,"class","warning svelte-11ezupt")},m(u,d){mt(t,u,d),R(u,l,d),mt(a,u,d),R(u,s,d),h&&h.m(u,d),R(u,e,d),R(u,o,d),m(o,r),m(o,b),c&&c.m(o,null),m(o,k),$&&$.m(o,null),R(u,S,d),R(u,N,d),m(N,f),P=!0},p(u,[d]){var lt,H,st;const V=d&6?ee(D,[d&2&&{data:u[1]},d&4&&ae(u[2]),D[2]]):{};t.$set(V);const _t={};d&1&&(_t.material=u[0]),a.$set(_t),h&&h.p&&(!P||d&8)&&re(h,G,u,u[3],P?ie(G,u[3],d,ye):ne(u[3]),Jt),(lt=u[0].task_ids)!=null&&lt.length?c?c.p(u,d):(c=Ft(u),c.c(),c.m(o,k)):c&&(c.d(1),c=null),(st=(H=u[0].database_IDs)==null?void 0:H.icsd)!=null&&st.length?$?$.p(u,d):($=Xt(u),$.c(),$.m(o,null)):$&&($.d(1),$=null),(!P||d&1)&&q!==(q=u[0].warnings+"")&&X(f,q)},i(u){P||(et(t.$$.fragment,u),et(a.$$.fragment,u),et(h,u),P=!0)},o(u){at(t.$$.fragment,u),at(a.$$.fragment,u),at(h,u),P=!1},d(u){u&&(p(l),p(s),p(e),p(o),p(S),p(N)),ct(t,u),ct(a,u),h&&h.d(u),c&&c.d(),$&&$.d()}}}function ke(n,t,l){let a;const s=["material"];let e=bt(t,s),{$$slots:o={},$$scope:r}=t,{material:i}=t;return n.$$set=b=>{t=it(it({},t),te(b)),l(2,e=bt(t,s)),"material"in b&&l(0,i=b.material),"$$scope"in b&&l(3,r=b.$$scope)},n.$$.update=()=>{var b,k,S,N,q,f,P;n.$$.dirty&1&&l(1,a=[{title:"Band Gap",value:i.band_gap,unit:"eV",tooltip:i.vbm&&i.cbm?`VBM: ${i.vbm}, CBM: ${i.cbm}`:""},{title:"Space Group",value:`${(b=i.symmetry)==null?void 0:b.number}`,unit:`(${(k=i.symmetry)==null?void 0:k.symbol})`,condition:(S=i.symmetry)==null?void 0:S.number},{title:"E<sub>above hull</sub>",value:1e3*((i==null?void 0:i.energy_above_hull)??0),unit:"meV/atom",condition:"energy_above_hull"in i},{title:"Predicted stable",value:(i==null?void 0:i.energy_above_hull)??!1?"❌ No":"✅ Yes",condition:"energy_above_hull"in i},{title:"Formation Energy",value:i.formation_energy_per_atom,unit:"eV/atom"},{title:"Experimentally Observed",value:i.theoretical?"❌ No":"✅ Yes"},{title:"Total Energy",value:i.energy_per_atom,unit:"eV/atom"},{title:"Uncorrected Energy",value:i.uncorrected_energy_per_atom,unit:"eV/atom",condition:i.uncorrected_energy_per_atom!=i.energy_per_atom},{title:"Last updated",value:(N=i.last_updated)==null?void 0:N.$date.split("T")[0]},{title:"Origins",value:i.origins,condition:(q=i.origins)==null?void 0:q.length},{title:"Voigt bulk modulus",value:i.k_voigt,unit:"GPa"},{title:"Voig shear modulus",value:i.g_voigt,unit:"GPa"},{title:"Refractive index",value:i.n},{title:"Is magnetic",value:`${i.is_magnetic?"yes":"no"} ${i.is_magnetic?`(${qt(i.total_magnetization)} µB/f.u.)`:""}`,tooltip:"µB: Bohr magneton, f.u.: formula unit"},{title:"Ordering",value:{NM:"non-magnetic"}[i.ordering]},{title:"Possible oxidation states",value:fe(((f=i.possible_species)==null?void 0:f.join(" "))??""),condition:(P=i.possible_species)==null?void 0:P.length}])},[i,a,e,r,o]}class $e extends Mt{constructor(t){super(),wt(this,t,ke,be,Pt,{material:0})}}function Kt(n,t,l){const a=n.slice();return a[11]=t[l].task_id,a[12]=t[l].dissimilarity,a[13]=t[l].formula,a}function Ce(n){let t,l;return t=new pe({props:{structure:n[0].summary.structure,slot:"after-symmetry"}}),{c(){ot(t.$$.fragment)},l(a){ut(t.$$.fragment,a)},m(a,s){mt(t,a,s),l=!0},p(a,s){const e={};s&1&&(e.structure=a[0].summary.structure),t.$set(e)},i(a){l||(et(t.$$.fragment,a),l=!0)},o(a){at(t.$$.fragment,a),l=!1},d(a){ct(t,a)}}}function Wt(n){let t,l="No similar structures found";return{c(){t=g("li"),t.textContent=l},l(a){t=v(a,"LI",{"data-svelte-h":!0}),W(t)!=="svelte-8hsbra"&&(t.textContent=l)},m(a,s){R(a,t,s)},p:me,d(a){a&&p(t)}}}function xt(n){let t,l,a,s=n[11]+"",e,o,r,i,b=n[13]+"",k,S,N,q,f,P,D=qt(n[12])+"",U,G;return{c(){t=g("li"),l=g("strong"),a=g("a"),e=A(s),r=C(),i=g("span"),k=A(b),S=C(),N=g("br"),q=C(),f=g("small"),P=A("dissimilarity: "),U=A(D),G=C(),this.h()},l(h){t=v(h,"LI",{});var c=T(t);l=v(c,"STRONG",{});var $=T(l);a=v($,"A",{href:!0});var Y=T(a);e=B(Y,s),Y.forEach(p),r=E($),$.forEach(p),i=v(c,"SPAN",{class:!0});var L=T(i);k=B(L,b),L.forEach(p),S=E(c),N=v(c,"BR",{}),q=E(c),f=v(c,"SMALL",{});var O=T(f);P=B(O,"dissimilarity: "),U=B(O,D),O.forEach(p),G=E(c),c.forEach(p),this.h()},h(){I(a,"href",o="https://materialsproject.org/tasks/"+n[11]),I(i,"class","svelte-1noq6aq")},m(h,c){R(h,t,c),m(t,l),m(l,a),m(a,e),m(l,r),m(t,i),m(i,k),m(t,S),m(t,N),m(t,q),m(t,f),m(f,P),m(f,U),m(t,G)},p(h,c){c&1&&s!==(s=h[11]+"")&&X(e,s),c&1&&o!==(o="https://materialsproject.org/tasks/"+h[11])&&I(a,"href",o),c&1&&b!==(b=h[13]+"")&&X(k,b),c&1&&D!==(D=qt(h[12])+"")&&X(U,D)},d(h){h&&p(t)}}}function Ee(n){var At,Bt,Lt;let t,l,a,s,e=n[0].summary.formula_pretty+"",o,r,i,b,k,S,N,q,f,P,D,U="Fetch material",G,h,c,$="Save material summary",Y,L,O,u="JSON",d,V,_t="Zipped JSON",lt,H,st,Z,kt,rt,jt=`Crystal description
    <small>(generated by <a href="https://github.com/hackingmaterials/robocrystallographer">Robocrystallographer
      </a>)</small>`,$t,ht,pt=n[0].robocrys.description+"",yt,Ct,nt,zt="Similar structures",Et,J,K,St,Ot;H=new he({props:{structure:n[0].summary.structure}}),Z=new $e({props:{material:n[0].summary,$$slots:{"after-symmetry":[Ce]},$$scope:{ctx:n}}});let F=ft(((Lt=(Bt=(At=n[0])==null?void 0:At.similarity)==null?void 0:Bt.sim)==null?void 0:Lt.slice(0,6))??[]),M=[];for(let _=0;_<F.length;_+=1)M[_]=xt(Kt(n,F,_));let w=null;return F.length||(w=Wt()),{c(){t=g("main"),l=g("center"),a=g("h1"),s=A("Materials Explorer - "),o=A(e),r=C(),i=g("span"),b=A("("),k=g("a"),S=A(n[2]),N=A(")"),q=C(),f=g("input"),P=C(),D=g("button"),D.textContent=U,G=C(),h=g("span"),c=g("button"),c.textContent=$,Y=C(),L=g("div"),O=g("button"),O.textContent=u,d=C(),V=g("button"),V.textContent=_t,lt=C(),ot(H.$$.fragment),st=C(),ot(Z.$$.fragment),kt=C(),rt=g("h3"),rt.innerHTML=jt,$t=C(),ht=g("p"),yt=A(pt),Ct=C(),nt=g("h2"),nt.textContent=zt,Et=C(),J=g("ol");for(let _=0;_<M.length;_+=1)M[_].c();w&&w.c(),this.h()},l(_){t=v(_,"MAIN",{});var y=T(t);l=v(y,"CENTER",{style:!0});var z=T(l);a=v(z,"H1",{});var Q=T(a);s=B(Q,"Materials Explorer - "),o=B(Q,e),r=E(Q),i=v(Q,"SPAN",{style:!0});var x=T(i);b=B(x,"("),k=v(x,"A",{href:!0});var dt=T(k);S=B(dt,n[2]),dt.forEach(p),N=B(x,")"),x.forEach(p),Q.forEach(p),q=E(z),f=v(z,"INPUT",{placeholder:!0}),P=E(z),D=v(z,"BUTTON",{"data-svelte-h":!0}),W(D)!=="svelte-1wfo1dn"&&(D.textContent=U),G=E(z),h=v(z,"SPAN",{class:!0});var tt=T(h);c=v(tt,"BUTTON",{class:!0,"data-svelte-h":!0}),W(c)!=="svelte-1s8bzic"&&(c.textContent=$),Y=E(tt),L=v(tt,"DIV",{class:!0});var j=T(L);O=v(j,"BUTTON",{class:!0,"data-svelte-h":!0}),W(O)!=="svelte-92cwn2"&&(O.textContent=u),d=E(j),V=v(j,"BUTTON",{class:!0,"data-svelte-h":!0}),W(V)!=="svelte-16z089s"&&(V.textContent=_t),j.forEach(p),tt.forEach(p),z.forEach(p),lt=E(y),ut(H.$$.fragment,y),st=E(y),ut(Z.$$.fragment,y),kt=E(y),rt=v(y,"H3",{"data-svelte-h":!0}),W(rt)!=="svelte-1h0ekqb"&&(rt.innerHTML=jt),$t=E(y),ht=v(y,"P",{});var gt=T(ht);yt=B(gt,pt),gt.forEach(p),Ct=E(y),nt=v(y,"H2",{"data-svelte-h":!0}),W(nt)!=="svelte-1ea1rjf"&&(nt.textContent=zt),Et=E(y),J=v(y,"OL",{class:!0});var It=T(J);for(let Nt=0;Nt<M.length;Nt+=1)M[Nt].l(It);w&&w.l(It),It.forEach(p),y.forEach(p),this.h()},h(){I(k,"href",n[4]),Vt(i,"font-weight","lighter"),I(f,"placeholder","Enter MP material ID"),I(c,"class","svelte-1noq6aq"),I(O,"class","svelte-1noq6aq"),I(V,"class","svelte-1noq6aq"),I(L,"class","svelte-1noq6aq"),I(h,"class","download svelte-1noq6aq"),Vt(l,"margin","1em 0"),I(J,"class","similar-structures svelte-1noq6aq")},m(_,y){R(_,t,y),m(t,l),m(l,a),m(a,s),m(a,o),m(a,r),m(a,i),m(i,b),m(i,k),m(k,S),m(i,N),m(l,q),m(l,f),Rt(f,n[1]),m(l,P),m(l,D),m(l,G),m(l,h),m(h,c),m(h,Y),m(h,L),m(L,O),m(L,d),m(L,V),m(t,lt),mt(H,t,null),m(t,st),mt(Z,t,null),m(t,kt),m(t,rt),m(t,$t),m(t,ht),m(ht,yt),m(t,Ct),m(t,nt),m(t,Et),m(t,J);for(let z=0;z<M.length;z+=1)M[z]&&M[z].m(J,null);w&&w.m(J,null),K=!0,St||(Ot=[vt(f,"input",n[5]),vt(f,"keydown",n[6]),vt(D,"click",n[7]),vt(O,"click",n[8]),vt(V,"click",n[9])],St=!0)},p(_,[y]){var x,dt,tt;(!K||y&1)&&e!==(e=_[0].summary.formula_pretty+"")&&X(o,e),(!K||y&4)&&X(S,_[2]),(!K||y&16)&&I(k,"href",_[4]),y&2&&f.value!==_[1]&&Rt(f,_[1]);const z={};y&1&&(z.structure=_[0].summary.structure),H.$set(z);const Q={};if(y&1&&(Q.material=_[0].summary),y&65537&&(Q.$$scope={dirty:y,ctx:_}),Z.$set(Q),(!K||y&1)&&pt!==(pt=_[0].robocrys.description+"")&&X(yt,pt),y&1){F=ft(((tt=(dt=(x=_[0])==null?void 0:x.similarity)==null?void 0:dt.sim)==null?void 0:tt.slice(0,6))??[]);let j;for(j=0;j<F.length;j+=1){const gt=Kt(_,F,j);M[j]?M[j].p(gt,y):(M[j]=xt(gt),M[j].c(),M[j].m(J,null))}for(;j<M.length;j+=1)M[j].d(1);M.length=F.length,!F.length&&w?w.p(_,y):F.length?w&&(w.d(1),w=null):(w=Wt(),w.c(),w.m(J,null))}},i(_){K||(et(H.$$.fragment,_),et(Z.$$.fragment,_),K=!0)},o(_){at(H.$$.fragment,_),at(Z.$$.fragment,_),K=!1},d(_){_&&p(t),ct(H),ct(Z),Dt(M,_),w&&w.d(),St=!1,oe(Ot)}}}function Se(n,t,l){let a,s,e,o;ue(n,ce,f=>l(10,o=f));let{data:r}=t,i=`mp-${o.params.slug}`;function b(){i=this.value,l(1,i)}const k=async f=>{f.key==="Enter"&&(Ut(`/${a}`),l(0,r.summary=await Tt(e),r))},S=async()=>{Ut(`/${a}`),l(0,r.summary=await Tt(e),r)},N=()=>{if(!r.summary)return alert("No data to download");Gt(JSON.stringify(r.summary,null,2),`${a}.json`,"application/json")},q=async()=>{const f=await Tt(e,{unzip:!1});f&&Gt(f,`${a}.json.gz`,"application/gzip")};return n.$$set=f=>{"data"in f&&l(0,r=f.data)},n.$$.update=()=>{n.$$.dirty&2&&l(2,a=i.trim().toLowerCase()),n.$$.dirty&4&&l(4,s=`https://materialsproject.org/materials/${a}`),n.$$.dirty&4&&l(3,e=`${_e}/summary/${a}.json.gz`)},[r,i,a,e,s,b,k,S,N,q]}class Oe extends Mt{constructor(t){super(),wt(this,t,Se,Ee,Pt,{data:0})}}export{Oe as default};
