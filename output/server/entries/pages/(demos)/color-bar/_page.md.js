var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d;
import { c as create_ssr_component, h as each, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import { e as element_data } from "../../../../chunks/index3.js";
import { C as ColorBar, a as ColorScaleSelect } from "../../../../chunks/ColorScaleSelect.js";
import * as d3sc from "d3-scale-chromatic";
import { P as PropertySelect } from "../../../../chunks/PropertySelect.js";
import { P as PeriodicTable } from "../../../../chunks/PeriodicTable.js";
import { T as TableInset } from "../../../../chunks/TableInset.js";
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const bars = [
    [`Viridis`, `top`, [0, 0.25, 0.5, 0.75, 1]],
    [`Magma`, `center`, [], [100, 1631]],
    [`Cividis`, `bottom`, [], [-99.9812, -10]]
  ];
  return `<div style="border: 0.1px dashed white;">${each(bars, ([color_scale, tick_side, tick_labels, range, width]) => {
    return `<div style="display: contents; --cbar-width:100%; --cbar-padding:2em;">${validate_component(ColorBar, "ColorBar").$$render(
      $$result,
      {
        label: color_scale + "<br>• tick side=" + tick_side + "<br>• range=" + range,
        color_scale,
        tick_side,
        tick_labels,
        range,
        label_style: "white-space: nowrap; padding-right: 1em;"
      },
      {},
      {}
    )}</div>`;
  })}</div>`;
});
const css$1 = {
  code: "section.svelte-1u1zcz5.svelte-1u1zcz5.svelte-1u1zcz5{display:flex;overflow:scroll;gap:2em}section.svelte-1u1zcz5>ul.svelte-1u1zcz5.svelte-1u1zcz5{list-style:none;padding:0}section.svelte-1u1zcz5>ul.svelte-1u1zcz5>li.svelte-1u1zcz5{padding:1ex}section.svelte-1u1zcz5>ul.svelte-1u1zcz5>code.svelte-1u1zcz5{font-size:16pt}",
  map: '{"version":3,"file":"+page.md___mdsvexample___1.svelte","sources":["+page.md___mdsvexample___1.svelte"],"sourcesContent":["<script>\\nimport { ColorBar } from \'$lib\'\\nimport * as d3sc from \'d3-scale-chromatic\'\\nconst names = Object.keys(d3sc).filter((key) => key.startsWith(`interpolate`))\\n<\/script>\\n<section>\\n{#each [`top`, `bottom`, `left`, `right`] as label_side, idx}\\n<ul>\\n<code>{label_side}</code>\\n{#each names.slice(idx * 5, 5 * idx + 5) as name}\\n{@const color_scale = name.replace(`interpolate`, ``)}\\n<li>\\n<ColorBar\\nlabel={color_scale}\\n{color_scale}\\n{label_side}\\nlabel_style=\\"min-width: 5em;\\"\\n/>\\n</li>\\n{/each}\\n</ul>\\n{/each}\\n</section>\\n<style>\\nsection {\\ndisplay: flex;\\noverflow: scroll;\\ngap: 2em;\\n}\\nsection > ul {\\nlist-style: none;\\npadding: 0;\\n}\\nsection > ul > li {\\npadding: 1ex;\\n}\\nsection > ul > code {\\nfont-size: 16pt;\\n}\\n</style>"],"names":[],"mappings":"AAwBA,oDAAQ,CACR,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,GACL,CACA,sBAAO,CAAG,gCAAG,CACb,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CACT,CACA,sBAAO,CAAG,iBAAE,CAAG,iBAAG,CAClB,OAAO,CAAE,GACT,CACA,sBAAO,CAAG,iBAAE,CAAG,mBAAK,CACpB,SAAS,CAAE,IACX"}'
};
const Page_md___mdsvexample___1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const names = Object.keys(d3sc).filter((key) => key.startsWith(`interpolate`));
  $$result.css.add(css$1);
  return `<section class="svelte-1u1zcz5">${each([`top`, `bottom`, `left`, `right`], (label_side, idx) => {
    return `<ul class="svelte-1u1zcz5"><code class="svelte-1u1zcz5">${escape(label_side)}</code> ${each(names.slice(idx * 5, 5 * idx + 5), (name) => {
      let color_scale = name.replace(`interpolate`, ``);
      return ` <li class="svelte-1u1zcz5">${validate_component(ColorBar, "ColorBar").$$render(
        $$result,
        {
          label: color_scale,
          color_scale,
          label_side,
          label_style: "min-width: 5em;"
        },
        {},
        {}
      )} </li>`;
    })} </ul>`;
  })} </section>`;
});
const wrapper_style = "place-items: center;";
const Page_md___mdsvexample___2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ColorBar, "ColorBar").$$render(
    $$result,
    {
      wrapper_style,
      style: "width: 10em; height: 1ex;"
    },
    {},
    {}
  )} <br> ${validate_component(ColorBar, "ColorBar").$$render(
    $$result,
    {
      label: "Viridis",
      wrapper_style,
      style: "width: 3em; height: 2em;"
    },
    {},
    {}
  )} <br> <div style="display: contents; --cbar-width:8em; --cbar-height:2em;">${validate_component(ColorBar, "ColorBar").$$render($$result, { wrapper_style }, {}, {})}</div>`;
});
const css = {
  code: "form.svelte-1fw3r7a{display:flex;place-items:center;place-content:center;gap:1em;margin:2em auto}",
  map: '{"version":3,"file":"+page.md___mdsvexample___3.svelte","sources":["+page.md___mdsvexample___3.svelte"],"sourcesContent":["<script>\\nimport {\\nColorBar,\\nColorScaleSelect,\\nelement_data,\\nPeriodicTable,\\nPropertySelect,\\nTableInset,\\n} from \'$lib\'\\nlet color_scale = `Viridis`\\nlet heatmap_key\\n$: heatmap_values = heatmap_key\\n? element_data.map((el) => el[heatmap_key])\\n: []\\n$: heat_range = [Math.min(...heatmap_values), Math.max(...heatmap_values)]\\nlet cs_range = heat_range\\n<\/script>\\n<form>\\n<ColorScaleSelect bind:value={color_scale} minSelect={1} />\\n<PropertySelect bind:key={heatmap_key} />\\n</form>\\n<PeriodicTable\\n{heatmap_values}\\nstyle=\\"margin: 2em auto 4em;\\"\\nbind:color_scale\\ncolor_scale_range={cs_range ?? heat_range}\\nlinks=\\"name\\"\\nlanth_act_tiles={false}\\n>\\n<TableInset slot=\\"inset\\" style=\\"place-items: center; padding: 2em;\\">\\n<ColorBar\\n{color_scale}\\nrange={heat_range}\\nbind:nice_range={cs_range}\\ntick_labels={5}\\ntick_side=\\"bottom\\"\\n--cbar-width=\\"100%\\"\\n--cbar-height=\\"15pt\\"\\n/>\\n</TableInset>\\n</PeriodicTable>\\n<style>\\nform {\\ndisplay: flex;\\nplace-items: center;\\nplace-content: center;\\ngap: 1em;\\nmargin: 2em auto;\\n}\\n</style>"],"names":[],"mappings":"AA0CA,mBAAK,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,GAAG,CAAC,IACZ"}'
};
const Page_md___mdsvexample___3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heatmap_values;
  let heat_range;
  let color_scale = `Viridis`;
  let heatmap_key;
  let cs_range = heat_range;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    heatmap_values = heatmap_key ? element_data.map((el) => el[heatmap_key]) : [];
    heat_range = [Math.min(...heatmap_values), Math.max(...heatmap_values)];
    $$rendered = `<form class="svelte-1fw3r7a">${validate_component(ColorScaleSelect, "ColorScaleSelect").$$render(
      $$result,
      { minSelect: 1, value: color_scale },
      {
        value: ($$value) => {
          color_scale = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PropertySelect, "PropertySelect").$$render(
      $$result,
      { key: heatmap_key },
      {
        key: ($$value) => {
          heatmap_key = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form> ${validate_component(PeriodicTable, "PeriodicTable").$$render(
      $$result,
      {
        heatmap_values,
        style: "margin: 2em auto 4em;",
        color_scale_range: cs_range ?? heat_range,
        links: "name",
        lanth_act_tiles: false,
        color_scale
      },
      {
        color_scale: ($$value) => {
          color_scale = $$value;
          $$settled = false;
        }
      },
      {
        inset: () => {
          return `${validate_component(TableInset, "TableInset").$$render(
            $$result,
            {
              slot: "inset",
              style: "place-items: center; padding: 2em;"
            },
            {},
            {
              default: () => {
                return `<div style="display: contents; --cbar-width:100%; --cbar-height:15pt;">${validate_component(ColorBar, "ColorBar").$$render(
                  $$result,
                  {
                    color_scale,
                    range: heat_range,
                    tick_labels: 5,
                    tick_side: "bottom",
                    nice_range: cs_range
                  },
                  {
                    nice_range: ($$value) => {
                      cs_range = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}</div>`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1lubuts"><code>ColorBar.svelte</code></p> <p data-svelte-h="svelte-1kqeevu">Here’s a <code>ColorBar</code> with tick labels:</p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template(['<script>\nimport { ColorBar } from \'$lib\'\nconst bars = [\n[`Viridis`, `top`, [0, 0.25, 0.5, 0.75, 1]],\n[`Magma`, `center`, [], [100, 1631]],\n[`Cividis`, `bottom`, [], [-99.9812, -10]],\n]\n<\/script>\n<div style="border: 0.1px dashed white;">\n{#each bars as [color_scale, tick_side, tick_labels, range, width]}\n<ColorBar\nlabel="{color_scale}<br>&bull; tick side={tick_side}<br>&bull; range={range}"\n{color_scale}\n{tick_side}\n{tick_labels}\n{range}\nlabel_style="white-space: nowrap; padding-right: 1em;"\n--cbar-width="100%"\n--cbar-padding="2em"\n/>\n{/each}\n</div>'], ['<script>\nimport { ColorBar } from \'$lib\'\nconst bars = [\n[\\`Viridis\\`, \\`top\\`, [0, 0.25, 0.5, 0.75, 1]],\n[\\`Magma\\`, \\`center\\`, [], [100, 1631]],\n[\\`Cividis\\`, \\`bottom\\`, [], [-99.9812, -10]],\n]\n<\/script>\n<div style="border: 0.1px dashed white;">\n{#each bars as [color_scale, tick_side, tick_labels, range, width]}\n<ColorBar\nlabel="{color_scale}<br>&bull; tick side={tick_side}<br>&bull; range={range}"\n{color_scale}\n{tick_side}\n{tick_labels}\n{range}\nlabel_style="white-space: nowrap; padding-right: 1em;"\n--cbar-width="100%"\n--cbar-padding="2em"\n/>\n{/each}\n</div>']))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/color-bar/+page.md",
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___0, "Mdsvexample___0").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div> <p data-svelte-h="svelte-1dl7v3e"><code>ColorBar</code> supports <code>label_side = [&#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;right&#39;]</code></p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_b || (_b = __template(["<script>\nimport { ColorBar } from '$lib'\nimport * as d3sc from 'd3-scale-chromatic'\nconst names = Object.keys(d3sc).filter((key) => key.startsWith(`interpolate`))\n<\/script>\n<section>\n{#each [`top`, `bottom`, `left`, `right`] as label_side, idx}\n<ul>\n<code>{label_side}</code>\n{#each names.slice(idx * 5, 5 * idx + 5) as name}\n{@const color_scale = name.replace(`interpolate`, ``)}\n<li>\n<ColorBar\nlabel={color_scale}\n{color_scale}\n{label_side}\nlabel_style=\"min-width: 5em;\"\n/>\n</li>\n{/each}\n</ul>\n{/each}\n</section>"], ["<script>\nimport { ColorBar } from '$lib'\nimport * as d3sc from 'd3-scale-chromatic'\nconst names = Object.keys(d3sc).filter((key) => key.startsWith(\\`interpolate\\`))\n<\/script>\n<section>\n{#each [\\`top\\`, \\`bottom\\`, \\`left\\`, \\`right\\`] as label_side, idx}\n<ul>\n<code>{label_side}</code>\n{#each names.slice(idx * 5, 5 * idx + 5) as name}\n{@const color_scale = name.replace(\\`interpolate\\`, \\`\\`)}\n<li>\n<ColorBar\nlabel={color_scale}\n{color_scale}\n{label_side}\nlabel_style=\"min-width: 5em;\"\n/>\n</li>\n{/each}\n</ul>\n{/each}\n</section>"]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/color-bar/+page.md",
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___1, "Mdsvexample___1").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div> <p data-svelte-h="svelte-qjibpt">You can make fat and skinny bars:</p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_c || (_c = __template([`<script>
import { ColorBar } from '$lib'
const wrapper_style = 'place-items: center;'
<\/script>
<ColorBar {wrapper_style} style="width: 10em; height: 1ex;" />
<br />
<ColorBar label="Viridis" {wrapper_style} style="width: 3em; height: 2em;" />
<br />
<ColorBar {wrapper_style} --cbar-width="8em" --cbar-height="2em" />`]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/color-bar/+page.md",
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
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ColorBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>

  <span class="token keyword">const</span> wrapper_style <span class="token operator">=</span> <span class="token string">'place-items: center;'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token language-javascript"><span class="token punctuation">{</span>wrapper_style<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 10em; height: 1ex;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Viridis<span class="token punctuation">"</span></span> <span class="token language-javascript"><span class="token punctuation">{</span>wrapper_style<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 3em; height: 2em;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBar</span> <span class="token language-javascript"><span class="token punctuation">{</span>wrapper_style<span class="token punctuation">}</span></span> <span class="token attr-name">--cbar-width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8em<span class="token punctuation">"</span></span> <span class="token attr-name">--cbar-height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2em<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___2, "Mdsvexample___2").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div> <p data-svelte-h="svelte-tgr1oa"><code>PeriodicTable.svelte</code> heatmap example with <code>ColorBar</code> inside <code>TableInset</code></p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_d || (_d = __template(['<script>\nimport {\nColorBar,\nColorScaleSelect,\nelement_data,\nPeriodicTable,\nPropertySelect,\nTableInset,\n} from \'$lib\'\nlet color_scale = `Viridis`\nlet heatmap_key\n$: heatmap_values = heatmap_key\n? element_data.map((el) => el[heatmap_key])\n: []\n$: heat_range = [Math.min(...heatmap_values), Math.max(...heatmap_values)]\nlet cs_range = heat_range\n<\/script>\n<form>\n<ColorScaleSelect bind:value={color_scale} minSelect={1} />\n<PropertySelect bind:key={heatmap_key} />\n</form>\n<PeriodicTable\n{heatmap_values}\nstyle="margin: 2em auto 4em;"\nbind:color_scale\ncolor_scale_range={cs_range ?? heat_range}\nlinks="name"\nlanth_act_tiles={false}\n>\n<TableInset slot="inset" style="place-items: center; padding: 2em;">\n<ColorBar\n{color_scale}\nrange={heat_range}\nbind:nice_range={cs_range}\ntick_labels={5}\ntick_side="bottom"\n--cbar-width="100%"\n--cbar-height="15pt"\n/>\n</TableInset>\n</PeriodicTable>'], ['<script>\nimport {\nColorBar,\nColorScaleSelect,\nelement_data,\nPeriodicTable,\nPropertySelect,\nTableInset,\n} from \'$lib\'\nlet color_scale = \\`Viridis\\`\nlet heatmap_key\n$: heatmap_values = heatmap_key\n? element_data.map((el) => el[heatmap_key])\n: []\n$: heat_range = [Math.min(...heatmap_values), Math.max(...heatmap_values)]\nlet cs_range = heat_range\n<\/script>\n<form>\n<ColorScaleSelect bind:value={color_scale} minSelect={1} />\n<PropertySelect bind:key={heatmap_key} />\n</form>\n<PeriodicTable\n{heatmap_values}\nstyle="margin: 2em auto 4em;"\nbind:color_scale\ncolor_scale_range={cs_range ?? heat_range}\nlinks="name"\nlanth_act_tiles={false}\n>\n<TableInset slot="inset" style="place-items: center; padding: 2em;">\n<ColorBar\n{color_scale}\nrange={heat_range}\nbind:nice_range={cs_range}\ntick_labels={5}\ntick_side="bottom"\n--cbar-width="100%"\n--cbar-height="15pt"\n/>\n</TableInset>\n</PeriodicTable>']))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/color-bar/+page.md",
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PeriodicTable</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___3, "Mdsvexample___3").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div>`;
});
export {
  Page as default
};
