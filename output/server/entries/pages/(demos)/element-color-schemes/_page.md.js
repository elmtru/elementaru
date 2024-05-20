var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { c as create_ssr_component, h as each, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import { a as elem_symbols, b as element_color_schemes } from "../../../../chunks/index3.js";
import { P as PeriodicTable } from "../../../../chunks/PeriodicTable.js";
const css = {
  code: "h3.svelte-1yk3l7p{text-align:center;margin:2em 0 -2em -20cqw;font-size:5cqw}",
  map: `{"version":3,"file":"+page.md___mdsvexample___0.svelte","sources":["+page.md___mdsvexample___0.svelte"],"sourcesContent":["<script>\\nimport { PeriodicTable } from '$lib'\\nimport { element_color_schemes } from '$lib/colors'\\nimport { elem_symbols } from '$lib/labels'\\n<\/script>\\n{#each Object.entries(element_color_schemes) as [id, scheme]}\\n{@const color_overrides = Object.fromEntries(elem_symbols.map(((key) => [key, scheme[key] ?? 'transparent'])))}\\n<h3 {id}>{id}</h3>\\n<PeriodicTable {color_overrides} labels={scheme} />\\n{/each}\\n<style>\\nh3 {\\ntext-align: center;\\nmargin: 2em 0 -2em -20cqw;\\nfont-size: 5cqw;\\n}\\n</style>"],"names":[],"mappings":"AAWA,iBAAG,CACH,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,MAAM,CACzB,SAAS,CAAE,IACX"}`
};
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${each(Object.entries(element_color_schemes), ([id, scheme]) => {
    let color_overrides = Object.fromEntries(elem_symbols.map((key) => [key, scheme[key] ?? "transparent"]));
    return ` <h3${add_attribute("id", id, 0)} class="svelte-1yk3l7p">${escape(id)}</h3> ${validate_component(PeriodicTable, "PeriodicTable").$$render($$result, { color_overrides, labels: scheme }, {}, {})}`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-ub2x4z">Element Color Schemes</h2> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template(["<script>\nimport { PeriodicTable } from '$lib'\nimport { element_color_schemes } from '$lib/colors'\nimport { elem_symbols } from '$lib/labels'\n<\/script>\n{#each Object.entries(element_color_schemes) as [id, scheme]}\n{@const color_overrides = Object.fromEntries(elem_symbols.map(((key) => [key, scheme[key] ?? 'transparent'])))}\n<h3 {id}>{id}</h3>\n<PeriodicTable {color_overrides} labels={scheme} />\n{/each}"]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/element-color-schemes/+page.md",
      "pkg": "elementari",
      "repo": "https://github.com/elmtru/elementaru",
      "hideStyle": true,
      "example": true
    }
  }, {}, {
    code: () => {
      return `${slots.default ? slots.default({
        slot: "code"
      }) : `<!-- HTML_TAG_START --><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> PeriodicTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> element_color_schemes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib/colors'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> elem_symbols <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib/labels'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript">Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>element_color_schemes<span class="token punctuation">)</span> </span><span class="token keyword">as</span> <span class="token language-javascript"><span class="token punctuation">[</span>id<span class="token punctuation">,</span> scheme<span class="token punctuation">]</span><span class="token punctuation">}</span></span></span>
  <span class="token language-javascript"><span class="token punctuation">{</span>@<span class="token keyword">const</span> color_overrides <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>elem_symbols<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> scheme<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string">'transparent'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token language-javascript"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PeriodicTable</span> <span class="token language-javascript"><span class="token punctuation">{</span>color_overrides<span class="token punctuation">}</span></span> <span class="token attr-name">labels=</span><span class="token language-javascript"><span class="token punctuation">{</span>scheme<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span><!-- HTML_TAG_END -->`}`;
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
