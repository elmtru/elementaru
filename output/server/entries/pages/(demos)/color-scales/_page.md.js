var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { c as create_ssr_component, b as add_attribute, e as escape, n as null_to_empty, h as each, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import { p as pretty_num } from "../../../../chunks/index3.js";
import "../../../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import "../../../../chunks/client.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { extent } from "d3-array";
import { a as ColorScaleSelect, C as ColorBar } from "../../../../chunks/ColorScaleSelect.js";
import { P as PeriodicTable } from "../../../../chunks/PeriodicTable.js";
import { T as TableInset } from "../../../../chunks/TableInset.js";
const css$1 = {
  code: "div.svelte-z2iha1.svelte-z2iha1{max-width:max-content;overflow:hidden;height:fit-content;display:var(--zoo-radio-btn-display, inline-flex);border-radius:var(--zoo-radio-btn-border-radius, 0.5em)}input.svelte-z2iha1.svelte-z2iha1{display:none}span.svelte-z2iha1.svelte-z2iha1{cursor:pointer;display:inline-block;color:var(--zoo-radio-btn-color, white);padding:var(--zoo-radio-btn-padding, 2pt 5pt);background:var(--zoo-radio-btn-bg, black);transition:var(--zoo-radio-btn-transition, background 0.3s, transform 0.3s)}label.svelte-z2iha1:not(.active) span.svelte-z2iha1:hover{background:var(--zoo-radio-btn-hover-bg, cornflowerblue);color:var(--zoo-radio-btn-hover-color, white)}label.active.svelte-z2iha1 span.svelte-z2iha1{box-shadow:var(--zoo-radio-btn-checked-shadow, inset 0 0 1em -3pt black);background:var(--zoo-radio-btn-checked-bg, darkcyan)}",
  map: '{"version":3,"file":"RadioButtons.svelte","sources":["RadioButtons.svelte"],"sourcesContent":["<script>export let options;\\nexport let selected = null;\\nexport { class_name as class };\\nexport let style = null;\\nexport let id = null;\\nexport let name = null;\\nexport let disabled = false;\\nexport let required = false;\\nexport let aria_label = null;\\n// get the label key from an option object or the option itself if it\'s a string or number\\nconst get_label = (op) => {\\n    if (op instanceof Object) {\\n        if (op.label === undefined) {\\n            console.error(`RadioButton option ${JSON.stringify(op)} is an object but has no label key`);\\n        }\\n        return op.label;\\n    }\\n    return op;\\n};\\nlet class_name = `zoo-radio-btn`;\\n<\/script>\\n\\n<div {id} {style} class={class_name}>\\n  {#each options as option}\\n    {@const label = get_label(option)}\\n    {@const active = selected && get_label(option) === get_label(selected)}\\n    <label class:active aria-label={aria_label}>\\n      <input\\n        type=\\"radio\\"\\n        value={option}\\n        {name}\\n        {disabled}\\n        {required}\\n        bind:group={selected}\\n        on:change\\n        on:input\\n        on:click\\n      />\\n      <slot name=\\"option\\" {option} {selected} {active}>\\n        <slot {option} {selected} {active}><span>{label}</span></slot>\\n      </slot>\\n    </label>\\n  {/each}\\n</div>\\n\\n<style>\\n  div {\\n    max-width: max-content;\\n    overflow: hidden;\\n    height: fit-content;\\n    display: var(--zoo-radio-btn-display, inline-flex);\\n    border-radius: var(--zoo-radio-btn-border-radius, 0.5em);\\n  }\\n  input {\\n    display: none;\\n  }\\n  span {\\n    cursor: pointer;\\n    display: inline-block;\\n    color: var(--zoo-radio-btn-color, white);\\n    padding: var(--zoo-radio-btn-padding, 2pt 5pt);\\n    background: var(--zoo-radio-btn-bg, black);\\n    transition: var(--zoo-radio-btn-transition, background 0.3s, transform 0.3s);\\n  }\\n  label:not(.active) span:hover {\\n    background: var(--zoo-radio-btn-hover-bg, cornflowerblue);\\n    color: var(--zoo-radio-btn-hover-color, white);\\n  }\\n  label.active span {\\n    box-shadow: var(--zoo-radio-btn-checked-shadow, inset 0 0 1em -3pt black);\\n    background: var(--zoo-radio-btn-checked-bg, darkcyan);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8CE,+BAAI,CACF,SAAS,CAAE,WAAW,CACtB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,WAAW,CACnB,OAAO,CAAE,IAAI,uBAAuB,CAAC,YAAY,CAAC,CAClD,aAAa,CAAE,IAAI,6BAA6B,CAAC,MAAM,CACzD,CACA,iCAAM,CACJ,OAAO,CAAE,IACX,CACA,gCAAK,CACH,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,qBAAqB,CAAC,MAAM,CAAC,CACxC,OAAO,CAAE,IAAI,uBAAuB,CAAC,QAAQ,CAAC,CAC9C,UAAU,CAAE,IAAI,kBAAkB,CAAC,MAAM,CAAC,CAC1C,UAAU,CAAE,IAAI,0BAA0B,CAAC,gCAAgC,CAC7E,CACA,mBAAK,KAAK,OAAO,CAAC,CAAC,kBAAI,MAAO,CAC5B,UAAU,CAAE,IAAI,wBAAwB,CAAC,eAAe,CAAC,CACzD,KAAK,CAAE,IAAI,2BAA2B,CAAC,MAAM,CAC/C,CACA,KAAK,qBAAO,CAAC,kBAAK,CAChB,UAAU,CAAE,IAAI,8BAA8B,CAAC,yBAAyB,CAAC,CACzE,UAAU,CAAE,IAAI,0BAA0B,CAAC,SAAS,CACtD"}'
};
const RadioButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { selected = null } = $$props;
  let { style = null } = $$props;
  let { id = null } = $$props;
  let { name = null } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { aria_label = null } = $$props;
  const get_label = (op) => {
    if (op instanceof Object) {
      if (op.label === void 0) {
        console.error(`RadioButton option ${JSON.stringify(op)} is an object but has no label key`);
      }
      return op.label;
    }
    return op;
  };
  let { class: class_name = `zoo-radio-btn` } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.aria_label === void 0 && $$bindings.aria_label && aria_label !== void 0)
    $$bindings.aria_label(aria_label);
  if ($$props.class === void 0 && $$bindings.class && class_name !== void 0)
    $$bindings.class(class_name);
  $$result.css.add(css$1);
  return `<div${add_attribute("id", id, 0)}${add_attribute("style", style, 0)} class="${escape(null_to_empty(class_name), true) + " svelte-z2iha1"}">${each(options, (option) => {
    let label = get_label(option), active = selected && get_label(option) === get_label(selected);
    return `  <label${add_attribute("aria-label", aria_label, 0)} class="${["svelte-z2iha1", active ? "active" : ""].join(" ").trim()}"><input type="radio"${add_attribute("value", option, 0)}${add_attribute("name", name, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""} class="svelte-z2iha1"${option === selected ? add_attribute("checked", true, 1) : ""}> ${slots.option ? slots.option({ option, selected, active }) : ` ${slots.default ? slots.default({ option, selected, active }) : `<span class="svelte-z2iha1">${escape(label)}</span>`} `} </label>`;
  })} </div>`;
});
const H$1 = 82636;
const He$1 = 8;
const Li$1 = 69333;
const Be$1 = 3366;
const B$1 = 24248;
const C$1 = 32248;
const N$1 = 38538;
const O$1 = 724049;
const F$1 = 65409;
const Ne$1 = 1;
const Na$1 = 20821;
const Mg$1 = 86892;
const Al$1 = 26590;
const Si$1 = 30823;
const P$1 = 47920;
const S$1 = 52522;
const Cl$1 = 26918;
const Ar$1 = 2;
const K$1 = 16128;
const Ca$1 = 17057;
const Sc$1 = 4764;
const Ti$1 = 17258;
const V$1 = 21610;
const Cr$1 = 13864;
const Mn$1 = 34924;
const Fe$1 = 37902;
const Co$1 = 29578;
const Ni$1 = 24372;
const Cu$1 = 22192;
const Zn$1 = 13420;
const Ga$1 = 12952;
const Ge$1 = 14222;
const As$1 = 8940;
const Se$1 = 24770;
const Br$1 = 12188;
const Kr$1 = 26;
const Rb$1 = 9081;
const Sr$1 = 16148;
const Y$1 = 8746;
const Zr$1 = 8172;
const Nb$1 = 10857;
const Mo$1 = 13153;
const Tc$1 = 1120;
const Ru$1 = 4996;
const Rh$1 = 6302;
const Pd$1 = 7187;
const Ag$1 = 8221;
const Cd$1 = 6702;
const In$1 = 8710;
const Sn$1 = 12518;
const Sb$1 = 12092;
const Te$1 = 13469;
const I$1 = 11826;
const Xe$1 = 303;
const Cs$1 = 7269;
const Ba$1 = 18062;
const La$1 = 12551;
const Ce$1 = 5929;
const Pr$1 = 6124;
const Nd$1 = 6901;
const Pm$1 = 822;
const Sm$1 = 5890;
const Eu$1 = 3689;
const Gd$1 = 2761;
const Tb$1 = 4536;
const Dy$1 = 4588;
const Ho$1 = 4489;
const Er$1 = 4712;
const Tm$1 = 3370;
const Yb$1 = 4394;
const Lu$1 = 3063;
const Hf$1 = 4412;
const Ta$1 = 6010;
const W$1 = 9346;
const Re$1 = 3006;
const Os$1 = 2186;
const Ir$1 = 4080;
const Pt$1 = 5186;
const Au$1 = 5087;
const Hg$1 = 5448;
const Tl$1 = 5527;
const Pb$1 = 6823;
const Bi$1 = 11712;
const Po$1 = 0;
const At$1 = 0;
const Rn$1 = 0;
const Fr$1 = 0;
const Ra$1 = 0;
const Ac$1 = 496;
const Th$1 = 1935;
const Pa$1 = 374;
const U$1 = 4535;
const Np$1 = 577;
const Pu$1 = 740;
const Am$1 = 0;
const Cm$1 = 0;
const Bk$1 = 0;
const Cf$1 = 0;
const Es$1 = 0;
const Fm$1 = 0;
const Md$1 = 0;
const No$1 = 0;
const Lr$1 = 0;
const Rf$1 = 0;
const Db$1 = 0;
const Sg$1 = 0;
const Bh$1 = 0;
const Hs$1 = 0;
const Mt$1 = 0;
const Ds$1 = 0;
const Rg$1 = 0;
const Cn$1 = 0;
const Nh$1 = 0;
const Fl$1 = 0;
const Mc$1 = 0;
const Lv$1 = 0;
const Ts$1 = 0;
const Og$1 = 0;
const mp_elem_counts = {
  H: H$1,
  He: He$1,
  Li: Li$1,
  Be: Be$1,
  B: B$1,
  C: C$1,
  N: N$1,
  O: O$1,
  F: F$1,
  Ne: Ne$1,
  Na: Na$1,
  Mg: Mg$1,
  Al: Al$1,
  Si: Si$1,
  P: P$1,
  S: S$1,
  Cl: Cl$1,
  Ar: Ar$1,
  K: K$1,
  Ca: Ca$1,
  Sc: Sc$1,
  Ti: Ti$1,
  V: V$1,
  Cr: Cr$1,
  Mn: Mn$1,
  Fe: Fe$1,
  Co: Co$1,
  Ni: Ni$1,
  Cu: Cu$1,
  Zn: Zn$1,
  Ga: Ga$1,
  Ge: Ge$1,
  As: As$1,
  Se: Se$1,
  Br: Br$1,
  Kr: Kr$1,
  Rb: Rb$1,
  Sr: Sr$1,
  Y: Y$1,
  Zr: Zr$1,
  Nb: Nb$1,
  Mo: Mo$1,
  Tc: Tc$1,
  Ru: Ru$1,
  Rh: Rh$1,
  Pd: Pd$1,
  Ag: Ag$1,
  Cd: Cd$1,
  In: In$1,
  Sn: Sn$1,
  Sb: Sb$1,
  Te: Te$1,
  I: I$1,
  Xe: Xe$1,
  Cs: Cs$1,
  Ba: Ba$1,
  La: La$1,
  Ce: Ce$1,
  Pr: Pr$1,
  Nd: Nd$1,
  Pm: Pm$1,
  Sm: Sm$1,
  Eu: Eu$1,
  Gd: Gd$1,
  Tb: Tb$1,
  Dy: Dy$1,
  Ho: Ho$1,
  Er: Er$1,
  Tm: Tm$1,
  Yb: Yb$1,
  Lu: Lu$1,
  Hf: Hf$1,
  Ta: Ta$1,
  W: W$1,
  Re: Re$1,
  Os: Os$1,
  Ir: Ir$1,
  Pt: Pt$1,
  Au: Au$1,
  Hg: Hg$1,
  Tl: Tl$1,
  Pb: Pb$1,
  Bi: Bi$1,
  Po: Po$1,
  At: At$1,
  Rn: Rn$1,
  Fr: Fr$1,
  Ra: Ra$1,
  Ac: Ac$1,
  Th: Th$1,
  Pa: Pa$1,
  U: U$1,
  Np: Np$1,
  Pu: Pu$1,
  Am: Am$1,
  Cm: Cm$1,
  Bk: Bk$1,
  Cf: Cf$1,
  Es: Es$1,
  Fm: Fm$1,
  Md: Md$1,
  No: No$1,
  Lr: Lr$1,
  Rf: Rf$1,
  Db: Db$1,
  Sg: Sg$1,
  Bh: Bh$1,
  Hs: Hs$1,
  Mt: Mt$1,
  Ds: Ds$1,
  Rg: Rg$1,
  Cn: Cn$1,
  Nh: Nh$1,
  Fl: Fl$1,
  Mc: Mc$1,
  Lv: Lv$1,
  Ts: Ts$1,
  Og: Og$1
};
const H = 23584;
const He = 0;
const Li = 14313;
const Be = 1989;
const B = 21858;
const C = 13678;
const N = 27918;
const O = 150013;
const F = 57810;
const Ne = 0;
const Na = 13573;
const Mg = 25502;
const Al = 55485;
const Si = 47749;
const P = 25924;
const S = 43214;
const Cl = 26071;
const Ar = 0;
const K = 17952;
const Ca = 21697;
const Sc = 18533;
const Ti = 15680;
const V = 12107;
const Cr = 15394;
const Mn = 33133;
const Fe = 44576;
const Co = 38020;
const Ni = 47391;
const Cu = 43476;
const Zn = 32173;
const Ga = 45347;
const Ge = 49788;
const As = 27578;
const Se = 42190;
const Br = 22704;
const Kr = 0;
const Rb = 16884;
const Sr = 22328;
const Y = 19544;
const Zr = 18331;
const Nb = 13125;
const Mo = 3942;
const Tc = 1636;
const Ru = 26488;
const Rh = 38467;
const Pd = 37770;
const Ag = 15880;
const Cd = 18170;
const In = 44110;
const Sn = 43997;
const Sb = 20297;
const Te = 27842;
const I = 16387;
const Xe = 2;
const Cs = 14702;
const Ba = 21181;
const La = 18720;
const Ce = 16002;
const Pr = 17375;
const Nd = 17224;
const Pm = 1462;
const Sm = 17223;
const Eu = 10483;
const Gd = 9462;
const Tb = 19230;
const Dy = 18638;
const Ho = 17874;
const Er = 17707;
const Tm = 18983;
const Yb = 19848;
const Lu = 12650;
const Hf = 15081;
const Ta = 11155;
const W = 3761;
const Re = 4180;
const Os = 13551;
const Ir = 27121;
const Pt = 38649;
const Au = 28489;
const Hg = 10508;
const Tl = 16972;
const Pb = 20005;
const Bi = 12823;
const Po = 0;
const At = 0;
const Rn = 0;
const Fr = 0;
const Ra = 0;
const Ac = 1863;
const Th = 17945;
const Pa = 4051;
const U = 14301;
const Np = 10177;
const Pu = 13117;
const Am = 0;
const Cm = 0;
const Bk = 0;
const Cf = 0;
const Es = 0;
const Fm = 0;
const Md = 0;
const No = 0;
const Lr = 0;
const Rf = 0;
const Db = 0;
const Sg = 0;
const Bh = 0;
const Hs = 0;
const Mt = 0;
const Ds = 0;
const Rg = 0;
const Cn = 0;
const Nh = 0;
const Fl = 0;
const Mc = 0;
const Lv = 0;
const Ts = 0;
const Og = 0;
const wbm_elem_counts = {
  H,
  He,
  Li,
  Be,
  B,
  C,
  N,
  O,
  F,
  Ne,
  Na,
  Mg,
  Al,
  Si,
  P,
  S,
  Cl,
  Ar,
  K,
  Ca,
  Sc,
  Ti,
  V,
  Cr,
  Mn,
  Fe,
  Co,
  Ni,
  Cu,
  Zn,
  Ga,
  Ge,
  As,
  Se,
  Br,
  Kr,
  Rb,
  Sr,
  Y,
  Zr,
  Nb,
  Mo,
  Tc,
  Ru,
  Rh,
  Pd,
  Ag,
  Cd,
  In,
  Sn,
  Sb,
  Te,
  I,
  Xe,
  Cs,
  Ba,
  La,
  Ce,
  Pr,
  Nd,
  Pm,
  Sm,
  Eu,
  Gd,
  Tb,
  Dy,
  Ho,
  Er,
  Tm,
  Yb,
  Lu,
  Hf,
  Ta,
  W,
  Re,
  Os,
  Ir,
  Pt,
  Au,
  Hg,
  Tl,
  Pb,
  Bi,
  Po,
  At,
  Rn,
  Fr,
  Ra,
  Ac,
  Th,
  Pa,
  U,
  Np,
  Pu,
  Am,
  Cm,
  Bk,
  Cf,
  Es,
  Fm,
  Md,
  No,
  Lr,
  Rf,
  Db,
  Sg,
  Bh,
  Hs,
  Mt,
  Ds,
  Rg,
  Cn,
  Nh,
  Fl,
  Mc,
  Lv,
  Ts,
  Og
};
const css = {
  code: "section.svelte-yhv1yx{display:flex;flex-direction:column;gap:1ex;position:absolute;left:40%;transform:translate(-50%, -15%);z-index:1}strong.svelte-yhv1yx{text-align:center;display:block;margin:auto;place-self:center}",
  map: `{"version":3,"file":"+page.md___mdsvexample___0.svelte","sources":["+page.md___mdsvexample___0.svelte"],"sourcesContent":["<script>\\nimport { PeriodicTable, TableInset, ColorBar, ColorScaleSelect } from '$lib'\\nimport { pretty_num } from '$lib/labels'\\nimport Multiselect from 'svelte-multiselect'\\nimport { RadioButtons, Toggle } from 'svelte-zoo'\\nimport mp_elem_counts from './mp-element-counts.json'\\nimport wbm_elem_counts from './wbm-element-counts.json'\\nimport { extent } from 'd3-array'\\nlet log = true // log color scale\\nlet data = \`MP\`\\nlet color_scale = 'Viridis'\\n$: heatmap_values = Object.values(data == \`WBM\` ? wbm_elem_counts : mp_elem_counts)\\n$: total = heatmap_values.reduce((a, b) => a + b, 0)\\n<\/script>\\n<h2>{data == 'MP' ? 'Materials Project' : 'WBM'} Element Heatmap</h2>\\n<section>\\n<span>Data set &ensp; <RadioButtons options={[\`MP\`, \`WBM\`]} bind:selected={data} /></span>\\n<span>Log color scale <Toggle bind:checked={log} /></span>\\n<ColorScaleSelect bind:value={color_scale} selected={[color_scale]} />\\n</section>\\n<PeriodicTable {heatmap_values} {log} {color_scale}>\\n<TableInset slot=\\"inset\\" style=\\"grid-row: 3;\\" let:active_element>\\n{#if active_element?.name}\\n<strong>\\n{active_element?.name}: {pretty_num(mp_elem_counts[active_element?.symbol])}\\n<!-- compute percent of total -->\\n{#if mp_elem_counts[active_element?.symbol] > 0}\\n({pretty_num((mp_elem_counts[active_element?.symbol] / total) * 100)}%)\\n{/if}\\n</strong>\\n{/if}\\n</TableInset>\\n</PeriodicTable>\\n<ColorBar range={extent(heatmap_values)} {color_scale} tick_labels={5} style=\\"width: 100%; margin: 2em 1em;\\" />\\n<style>\\nsection {\\ndisplay: flex;\\nflex-direction: column;\\ngap: 1ex;\\nposition: absolute;\\nleft: 40%;\\ntransform: translate(-50%, -15%);\\nz-index: 1;\\n}\\nstrong {\\ntext-align: center;\\ndisplay: block;\\nmargin: auto;\\nplace-self: center;\\n}\\n</style>"],"names":[],"mappings":"AAmCA,qBAAQ,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,OAAO,CAAE,CACT,CACA,oBAAO,CACP,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MACZ"}`
};
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heatmap_values;
  let total;
  let log = true;
  let data = `MP`;
  let color_scale = "Viridis";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    heatmap_values = Object.values(data == `WBM` ? wbm_elem_counts : mp_elem_counts);
    total = heatmap_values.reduce((a, b) => a + b, 0);
    $$rendered = `<h2>${escape(data == "MP" ? "Materials Project" : "WBM")} Element Heatmap</h2> <section class="svelte-yhv1yx"><span>Data set   ${validate_component(RadioButtons, "RadioButtons").$$render(
      $$result,
      { options: [`MP`, `WBM`], selected: data },
      {
        selected: ($$value) => {
          data = $$value;
          $$settled = false;
        }
      },
      {}
    )}</span> <span>Log color scale ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { checked: log },
      {
        checked: ($$value) => {
          log = $$value;
          $$settled = false;
        }
      },
      {}
    )}</span> ${validate_component(ColorScaleSelect, "ColorScaleSelect").$$render(
      $$result,
      {
        selected: [color_scale],
        value: color_scale
      },
      {
        value: ($$value) => {
          color_scale = $$value;
          $$settled = false;
        }
      },
      {}
    )}</section> ${validate_component(PeriodicTable, "PeriodicTable").$$render($$result, { heatmap_values, log, color_scale }, {}, {
      inset: ({ active_element }) => {
        return `${validate_component(TableInset, "TableInset").$$render($$result, { slot: "inset", style: "grid-row: 3;" }, {}, {
          default: () => {
            return `${active_element?.name ? `<strong class="svelte-yhv1yx">${escape(active_element?.name)}: ${escape(pretty_num(mp_elem_counts[active_element?.symbol]))}  ${mp_elem_counts[active_element?.symbol] > 0 ? `(${escape(pretty_num(mp_elem_counts[active_element?.symbol] / total * 100))}%)` : ``}</strong>` : ``}`;
          }
        })}`;
      }
    })} ${validate_component(ColorBar, "ColorBar").$$render(
      $$result,
      {
        range: extent(heatmap_values),
        color_scale,
        tick_labels: 5,
        style: "width: 100%; margin: 2em 1em;"
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template(["<script>\nimport { PeriodicTable, TableInset, ColorBar, ColorScaleSelect } from '$lib'\nimport { pretty_num } from '$lib/labels'\nimport Multiselect from 'svelte-multiselect'\nimport { RadioButtons, Toggle } from 'svelte-zoo'\nimport mp_elem_counts from './mp-element-counts.json'\nimport wbm_elem_counts from './wbm-element-counts.json'\nimport { extent } from 'd3-array'\nlet log = true // log color scale\nlet data = `MP`\nlet color_scale = 'Viridis'\n$: heatmap_values = Object.values(data == `WBM` ? wbm_elem_counts : mp_elem_counts)\n$: total = heatmap_values.reduce((a, b) => a + b, 0)\n<\/script>\n<h2>{data == 'MP' ? 'Materials Project' : 'WBM'} Element Heatmap</h2>\n<section>\n<span>Data set &ensp; <RadioButtons options={[`MP`, `WBM`]} bind:selected={data} /></span>\n<span>Log color scale <Toggle bind:checked={log} /></span>\n<ColorScaleSelect bind:value={color_scale} selected={[color_scale]} />\n</section>\n<PeriodicTable {heatmap_values} {log} {color_scale}>\n<TableInset slot=\"inset\" style=\"grid-row: 3;\" let:active_element>\n{#if active_element?.name}\n<strong>\n{active_element?.name}: {pretty_num(mp_elem_counts[active_element?.symbol])}\n<!-- compute percent of total -->\n{#if mp_elem_counts[active_element?.symbol] > 0}\n({pretty_num((mp_elem_counts[active_element?.symbol] / total) * 100)}%)\n{/if}\n</strong>\n{/if}\n</TableInset>\n</PeriodicTable>\n<ColorBar range={extent(heatmap_values)} {color_scale} tick_labels={5} style=\"width: 100%; margin: 2em 1em;\" />"], ["<script>\nimport { PeriodicTable, TableInset, ColorBar, ColorScaleSelect } from '$lib'\nimport { pretty_num } from '$lib/labels'\nimport Multiselect from 'svelte-multiselect'\nimport { RadioButtons, Toggle } from 'svelte-zoo'\nimport mp_elem_counts from './mp-element-counts.json'\nimport wbm_elem_counts from './wbm-element-counts.json'\nimport { extent } from 'd3-array'\nlet log = true // log color scale\nlet data = \\`MP\\`\nlet color_scale = 'Viridis'\n$: heatmap_values = Object.values(data == \\`WBM\\` ? wbm_elem_counts : mp_elem_counts)\n$: total = heatmap_values.reduce((a, b) => a + b, 0)\n<\/script>\n<h2>{data == 'MP' ? 'Materials Project' : 'WBM'} Element Heatmap</h2>\n<section>\n<span>Data set &ensp; <RadioButtons options={[\\`MP\\`, \\`WBM\\`]} bind:selected={data} /></span>\n<span>Log color scale <Toggle bind:checked={log} /></span>\n<ColorScaleSelect bind:value={color_scale} selected={[color_scale]} />\n</section>\n<PeriodicTable {heatmap_values} {log} {color_scale}>\n<TableInset slot=\"inset\" style=\"grid-row: 3;\" let:active_element>\n{#if active_element?.name}\n<strong>\n{active_element?.name}: {pretty_num(mp_elem_counts[active_element?.symbol])}\n<!-- compute percent of total -->\n{#if mp_elem_counts[active_element?.symbol] > 0}\n({pretty_num((mp_elem_counts[active_element?.symbol] / total) * 100)}%)\n{/if}\n</strong>\n{/if}\n</TableInset>\n</PeriodicTable>\n<ColorBar range={extent(heatmap_values)} {color_scale} tick_labels={5} style=\"width: 100%; margin: 2em 1em;\" />"]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/color-scales/+page.md",
      "pkg": "elementari",
      "repo": "https://github.com/elmtru/elementaru",
      "hideStyle": true,
      "example": true,
      "stackblitz": true
    }
  }, {}, {
    code: () => {
      return `${slots.default ? slots.default({
        slot: "code"
      }) : `<!-- HTML_TAG_START --><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> PeriodicTable<span class="token punctuation">,</span> TableInset<span class="token punctuation">,</span> ColorBar<span class="token punctuation">,</span> ColorScaleSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> pretty_num <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib/labels'</span>
  <span class="token keyword">import</span> Multiselect <span class="token keyword">from</span> <span class="token string">'svelte-multiselect'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> RadioButtons<span class="token punctuation">,</span> Toggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'svelte-zoo'</span>
  <span class="token keyword">import</span> mp_elem_counts <span class="token keyword">from</span> <span class="token string">'./mp-element-counts.json'</span>
  <span class="token keyword">import</span> wbm_elem_counts <span class="token keyword">from</span> <span class="token string">'./wbm-element-counts.json'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> extent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'d3-array'</span>

  <span class="token keyword">let</span> log <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// log color scale</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">MP</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">let</span> color_scale <span class="token operator">=</span> <span class="token string">'Viridis'</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> heatmap_values <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>data <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">WBM</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span> wbm_elem_counts <span class="token operator">:</span> mp_elem_counts<span class="token punctuation">)</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> total <span class="token operator">=</span> heatmap_values<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>data <span class="token operator">==</span> <span class="token string">'MP'</span> <span class="token operator">?</span> <span class="token string">'Materials Project'</span> <span class="token operator">:</span> <span class="token string">'WBM'</span><span class="token punctuation">}</span></span> Element Heatmap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Data set <span class="token entity named-entity" title="&ensp;">&amp;ensp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RadioButtons</span> <span class="token attr-name">options=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">MP</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">WBM</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>selected=</span><span class="token language-javascript"><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Log color scale <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toggle</span> <span class="token attr-name"><span class="token namespace">bind:</span>checked=</span><span class="token language-javascript"><span class="token punctuation">{</span>log<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorScaleSelect</span> <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span> <span class="token attr-name">selected=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">[</span>color_scale<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PeriodicTable</span> <span class="token language-javascript"><span class="token punctuation">{</span>heatmap_values<span class="token punctuation">}</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>log<span class="token punctuation">}</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableInset</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inset<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid-row: 3;<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">let:</span>active_element</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span>#<span class="token keyword">if</span> active_element<span class="token operator">?.</span>name<span class="token punctuation">}</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>
        <span class="token language-javascript"><span class="token punctuation">{</span>active_element<span class="token operator">?.</span>name<span class="token punctuation">}</span></span>: <span class="token language-javascript"><span class="token punctuation">{</span><span class="token function">pretty_num</span><span class="token punctuation">(</span>mp_elem_counts<span class="token punctuation">[</span>active_element<span class="token operator">?.</span>symbol<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token comment">&lt;!-- compute percent of total --></span>
        <span class="token language-javascript"><span class="token punctuation">{</span>#<span class="token keyword">if</span> mp_elem_counts<span class="token punctuation">[</span>active_element<span class="token operator">?.</span>symbol<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">}</span></span>
          (<span class="token language-javascript"><span class="token punctuation">{</span><span class="token function">pretty_num</span><span class="token punctuation">(</span><span class="token punctuation">(</span>mp_elem_counts<span class="token punctuation">[</span>active_element<span class="token operator">?.</span>symbol<span class="token punctuation">]</span> <span class="token operator">/</span> total<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>%)
        <span class="token language-javascript"><span class="token punctuation">{</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">}</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">}</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableInset</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PeriodicTable</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token attr-name">range=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token function">extent</span><span class="token punctuation">(</span>heatmap_values<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>color_scale<span class="token punctuation">}</span></span> <span class="token attr-name">tick_labels=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 100%; margin: 2em 1em;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___0, "Mdsvexample___0").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div>`;
});
export {
  Page as default
};
