var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { c as create_ssr_component, e as escape, b as add_attribute, j as spread, k as escape_attribute_value, l as escape_object, h as each, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import { e as element_data } from "../../../../chunks/index3.js";
const css$1 = {
  code: "text.svelte-scy55d{font-size:11pt}text.symbol.svelte-scy55d{font-size:15pt}",
  map: '{"version":3,"file":"Nucleus.svelte","sources":["Nucleus.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let protons;\\nexport let neutrons;\\nexport let radius = 4;\\nexport let size = 100;\\nexport let proton_color = `cornflowerblue`;\\nexport let neutron_color = `orange`;\\nexport let stroke = ``;\\nexport let proton_label = ` P`;\\nexport let neutron_label = ` N`;\\nexport let text_color = `white`;\\nexport let symbol = ``;\\n$: radius = size / 2;\\n$: proton_frac = protons / (protons + neutrons);\\n$: neutron_frac = 1 - proton_frac;\\n$: proton_circ = Math.PI * radius * proton_frac;\\n$: dash_array = `0 ${Math.PI * radius - proton_circ} ${proton_circ}`;\\n$: text = { \'dominant-baseline\': `middle`, \'text-anchor\': `middle`, fill: text_color };\\n<\/script>\\n\\n<svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 {size} {size}\\">\\n  <circle r={radius} cx={radius} cy={radius} fill={neutron_color} {stroke}>\\n    <title>Neutrons: {neutrons}</title>\\n  </circle>\\n\\n  <circle\\n    r={radius / 2}\\n    cx={radius}\\n    cy={radius}\\n    fill={neutron_color}\\n    stroke={proton_color}\\n    stroke-width={radius}\\n    stroke-dasharray={dash_array}\\n  >\\n    <title>Protons: {protons}</title>\\n  </circle>\\n\\n  <text\\n    x={radius + (radius / 2) * Math.cos(Math.PI * -proton_frac)}\\n    y={radius + (radius / 2) * Math.sin(Math.PI * -proton_frac)}\\n    {...text}\\n  >\\n    {protons}\\n    {proton_label}\\n  </text>\\n\\n  <text\\n    x={radius + (radius / 2) * Math.cos(Math.PI * neutron_frac)}\\n    y={radius + (radius / 2) * Math.sin(Math.PI * neutron_frac)}\\n    {...text}\\n  >\\n    {neutrons}\\n    {neutron_label}\\n  </text>\\n\\n  {#if symbol}\\n    <text class=\\"symbol\\" x={radius} y={radius} {...text}>\\n      {symbol}\\n    </text>\\n  {/if}\\n</svg>\\n\\n<style>\\n  text {\\n    font-size: 11pt;\\n  }\\n  text.symbol {\\n    font-size: 15pt;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8DE,kBAAK,CACH,SAAS,CAAE,IACb,CACA,IAAI,qBAAQ,CACV,SAAS,CAAE,IACb"}'
};
const Nucleus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let proton_frac;
  let neutron_frac;
  let proton_circ;
  let dash_array;
  let text;
  let { protons } = $$props;
  let { neutrons } = $$props;
  let { radius = 4 } = $$props;
  let { size = 100 } = $$props;
  let { proton_color = `cornflowerblue` } = $$props;
  let { neutron_color = `orange` } = $$props;
  let { stroke = `` } = $$props;
  let { proton_label = ` P` } = $$props;
  let { neutron_label = ` N` } = $$props;
  let { text_color = `white` } = $$props;
  let { symbol = `` } = $$props;
  if ($$props.protons === void 0 && $$bindings.protons && protons !== void 0)
    $$bindings.protons(protons);
  if ($$props.neutrons === void 0 && $$bindings.neutrons && neutrons !== void 0)
    $$bindings.neutrons(neutrons);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.proton_color === void 0 && $$bindings.proton_color && proton_color !== void 0)
    $$bindings.proton_color(proton_color);
  if ($$props.neutron_color === void 0 && $$bindings.neutron_color && neutron_color !== void 0)
    $$bindings.neutron_color(neutron_color);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.proton_label === void 0 && $$bindings.proton_label && proton_label !== void 0)
    $$bindings.proton_label(proton_label);
  if ($$props.neutron_label === void 0 && $$bindings.neutron_label && neutron_label !== void 0)
    $$bindings.neutron_label(neutron_label);
  if ($$props.text_color === void 0 && $$bindings.text_color && text_color !== void 0)
    $$bindings.text_color(text_color);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0)
    $$bindings.symbol(symbol);
  $$result.css.add(css$1);
  radius = size / 2;
  proton_frac = protons / (protons + neutrons);
  neutron_frac = 1 - proton_frac;
  proton_circ = Math.PI * radius * proton_frac;
  dash_array = `0 ${Math.PI * radius - proton_circ} ${proton_circ}`;
  text = {
    "dominant-baseline": `middle`,
    "text-anchor": `middle`,
    fill: text_color
  };
  return `<svg width="100%" height="100%" viewBox="${"0 0 " + escape(size, true) + " " + escape(size, true)}"><circle${add_attribute("r", radius, 0)}${add_attribute("cx", radius, 0)}${add_attribute("cy", radius, 0)}${add_attribute("fill", neutron_color, 0)}${add_attribute("stroke", stroke, 0)}><title>Neutrons: ${escape(neutrons)}</title></circle><circle${add_attribute("r", radius / 2, 0)}${add_attribute("cx", radius, 0)}${add_attribute("cy", radius, 0)}${add_attribute("fill", neutron_color, 0)}${add_attribute("stroke", proton_color, 0)}${add_attribute("stroke-width", radius, 0)}${add_attribute("stroke-dasharray", dash_array, 0)}><title>Protons: ${escape(protons)}</title></circle><text${spread(
    [
      {
        x: escape_attribute_value(radius + radius / 2 * Math.cos(Math.PI * -proton_frac))
      },
      {
        y: escape_attribute_value(radius + radius / 2 * Math.sin(Math.PI * -proton_frac))
      },
      escape_object(text)
    ],
    { classes: "svelte-scy55d" }
  )}>${escape(protons)}${escape(proton_label)}</text><text${spread(
    [
      {
        x: escape_attribute_value(radius + radius / 2 * Math.cos(Math.PI * neutron_frac))
      },
      {
        y: escape_attribute_value(radius + radius / 2 * Math.sin(Math.PI * neutron_frac))
      },
      escape_object(text)
    ],
    { classes: "svelte-scy55d" }
  )}>${escape(neutrons)}${escape(neutron_label)}</text>${symbol ? `<text${spread(
    [
      { class: "symbol" },
      { x: escape_attribute_value(radius) },
      { y: escape_attribute_value(radius) },
      escape_object(text)
    ],
    { classes: "svelte-scy55d" }
  )}>${escape(symbol)}</text>` : ``}</svg>`;
});
const css = {
  code: "ul.svelte-4ywq1l.svelte-4ywq1l.svelte-4ywq1l{list-style:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(100px, 1fr));gap:2em;margin:2em 0;padding:0}ul.svelte-4ywq1l>li.svelte-4ywq1l.svelte-4ywq1l{position:relative}ul.svelte-4ywq1l>li.svelte-4ywq1l>a.svelte-4ywq1l{position:absolute;top:-1em;color:var(--color-text)}",
  map: `{"version":3,"file":"+page.md___mdsvexample___0.svelte","sources":["+page.md___mdsvexample___0.svelte"],"sourcesContent":["<script>\\nimport { element_data, Nucleus } from '$lib'\\n<\/script>\\n<ul>\\n{#each element_data as { protons, neutrons, symbol, name }}\\n<li>\\n<a href=\\"/{name.toLowerCase()}\\">{symbol}</a>\\n<Nucleus {protons} {neutrons} />\\n</li>\\n{/each}\\n</ul>\\n<style>\\nul {\\nlist-style: none;\\ndisplay: grid;\\ngrid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\\ngap: 2em;\\nmargin: 2em 0;\\npadding: 0;\\n}\\nul > li {\\nposition: relative;\\n}\\nul > li > a {\\nposition: absolute;\\ntop: -1em;\\ncolor: var(--color-text);\\n}\\n</style>"],"names":[],"mappings":"AAYA,4CAAG,CACH,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,OAAO,CAAE,CACT,CACA,gBAAE,CAAG,8BAAG,CACR,QAAQ,CAAE,QACV,CACA,gBAAE,CAAG,gBAAE,CAAG,eAAE,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,YAAY,CACvB"}`
};
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ul class="svelte-4ywq1l">${each(element_data, ({ protons, neutrons, symbol, name }) => {
    return `<li class="svelte-4ywq1l"><a href="${"/" + escape(name.toLowerCase(), true)}" class="svelte-4ywq1l">${escape(symbol)}</a> ${validate_component(Nucleus, "Nucleus").$$render($$result, { protons, neutrons }, {}, {})} </li>`;
  })} </ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-9ropij"><code>Nucleus.svelte</code></p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template([`<script>
import { element_data, Nucleus } from '$lib'
<\/script>
<ul>
{#each element_data as { protons, neutrons, symbol, name }}
<li>
<a href="/{name.toLowerCase()}">{symbol}</a>
<Nucleus {protons} {neutrons} />
</li>
{/each}
</ul>`]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/nucleus/+page.md",
      "pkg": "elementari",
      "repo": "https://github.com/elmtru/elementaru",
      "hideStyle": true,
      "example": true,
      "stackblitz": true,
      "code_above": true
    }
  }, {}, {
    code: () => {
      return `${slots.default ? slots.default({
        slot: "code"
      }) : `<!-- HTML_TAG_START --><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> element_data<span class="token punctuation">,</span> Nucleus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript">element_data </span><span class="token keyword">as</span> <span class="token language-javascript"><span class="token punctuation">{</span> protons<span class="token punctuation">,</span> neutrons<span class="token punctuation">,</span> symbol<span class="token punctuation">,</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href="</span>/<span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>symbol<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nucleus</span> <span class="token language-javascript"><span class="token punctuation">{</span>protons<span class="token punctuation">}</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>neutrons<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
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
