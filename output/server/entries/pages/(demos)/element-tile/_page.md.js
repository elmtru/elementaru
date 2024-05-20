var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
import { c as create_ssr_component, h as each, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import { e as element_data } from "../../../../chunks/index3.js";
import { E as ElementTile } from "../../../../chunks/ElementTile.js";
const css$1 = {
  code: "ol.svelte-1s8yyvp{display:flex;flex-wrap:wrap;gap:1em}",
  map: '{"version":3,"file":"+page.md___mdsvexample___0.svelte","sources":["+page.md___mdsvexample___0.svelte"],"sourcesContent":["<script>\\nimport { ElementTile, element_data } from \'$lib\'\\nconst rand_color = () => `hsl(${Math.random() * 360}, ${Math.random() * 50 + 50}%, ${Math.random() * 50 + 50}%)`\\n<\/script>\\n<ol>\\n{#each Array(27).fill(0).map(rand_color) as bg_color, idx}\\n<ElementTile {bg_color} element={element_data[idx]} style=\\"width: 4em; margin: 0;\\" />\\n{/each}\\n</ol>\\n<style>\\nol {\\ndisplay: flex;\\nflex-wrap: wrap;\\ngap: 1em;\\n}\\n</style>"],"names":[],"mappings":"AAUA,iBAAG,CACH,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GACL"}'
};
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const rand_color = () => `hsl(${Math.random() * 360}, ${Math.random() * 50 + 50}%, ${Math.random() * 50 + 50}%)`;
  $$result.css.add(css$1);
  return `<ol class="svelte-1s8yyvp">${each(Array(27).fill(0).map(rand_color), (bg_color, idx) => {
    return `${validate_component(ElementTile, "ElementTile").$$render(
      $$result,
      {
        bg_color,
        element: element_data[idx],
        style: "width: 4em; margin: 0;"
      },
      {},
      {}
    )}`;
  })} </ol>`;
});
const css = {
  code: "ol.svelte-1s8yyvp{display:flex;flex-wrap:wrap;gap:1em}",
  map: `{"version":3,"file":"+page.md___mdsvexample___1.svelte","sources":["+page.md___mdsvexample___1.svelte"],"sourcesContent":["<script>\\nimport { ElementTile, element_data } from '$lib'\\n<\/script>\\n<ol>\\n{#each ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'black', 'white'] as bg_color, idx}\\n<ElementTile {bg_color} element={element_data[idx]} value={Math.random()} style=\\"width: 4em; margin: 0;\\" active />\\n{/each}\\n</ol>\\n<style>\\nol {\\ndisplay: flex;\\nflex-wrap: wrap;\\ngap: 1em;\\n}\\n</style>"],"names":[],"mappings":"AASA,iBAAG,CACH,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GACL"}`
};
const Page_md___mdsvexample___1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ol class="svelte-1s8yyvp">${each(["red", "green", "blue", "yellow", "cyan", "magenta", "black", "white"], (bg_color, idx) => {
    return `${validate_component(ElementTile, "ElementTile").$$render(
      $$result,
      {
        bg_color,
        element: element_data[idx],
        value: Math.random(),
        style: "width: 4em; margin: 0;",
        active: true
      },
      {},
      {}
    )}`;
  })} </ol>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-107ondl"><code>ElementTile.svelte</code> automatically changes text color to ensure high contrast with its background. If its background is transparent, it traverses up the DOM tree to find the first element with non-transparent background color. This an, of course, go wrong e.g. if the tile is absolutely positioned outside its parent element. In that case, pass an explicit <code>text_color</code> prop and <code>text_color_threshold={null}</code> to <code>ElementTile</code> to override the automatic color selection.</p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template(["<script>\nimport { ElementTile, element_data } from '$lib'\nconst rand_color = () => `hsl(${Math.random() * 360}, ${Math.random() * 50 + 50}%, ${Math.random() * 50 + 50}%)`\n<\/script>\n<ol>\n{#each Array(27).fill(0).map(rand_color) as bg_color, idx}\n<ElementTile {bg_color} element={element_data[idx]} style=\"width: 4em; margin: 0;\" />\n{/each}\n</ol>"], ["<script>\nimport { ElementTile, element_data } from '$lib'\nconst rand_color = () => \\`hsl(\\$\\{Math.random() * 360}, \\$\\{Math.random() * 50 + 50}%, \\$\\{Math.random() * 50 + 50}%)\\`\n<\/script>\n<ol>\n{#each Array(27).fill(0).map(rand_color) as bg_color, idx}\n<ElementTile {bg_color} element={element_data[idx]} style=\"width: 4em; margin: 0;\" />\n{/each}\n</ol>"]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/element-tile/+page.md",
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
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElementTile<span class="token punctuation">,</span> element_data <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>

  <span class="token keyword">const</span> <span class="token function-variable function">rand_color</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hsl(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">360</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">50</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%)</span><span class="token template-punctuation string">\`</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>rand_color<span class="token punctuation">)</span> </span><span class="token keyword">as</span> <span class="token language-javascript">bg_color<span class="token punctuation">,</span> idx<span class="token punctuation">}</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElementTile</span> <span class="token language-javascript"><span class="token punctuation">{</span>bg_color<span class="token punctuation">}</span></span> <span class="token attr-name">element=</span><span class="token language-javascript"><span class="token punctuation">{</span>element_data<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 4em; margin: 0;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___0, "Mdsvexample___0").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div> <p data-svelte-h="svelte-1b9l93n">Displaying values instead of element names by passing the <code>value</code> prop.</p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_b || (_b = __template([`<script>
import { ElementTile, element_data } from '$lib'
<\/script>
<ol>
{#each ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta', 'black', 'white'] as bg_color, idx}
<ElementTile {bg_color} element={element_data[idx]} value={Math.random()} style="width: 4em; margin: 0;" active />
{/each}
</ol>`]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/element-tile/+page.md",
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
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElementTile<span class="token punctuation">,</span> element_data <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token punctuation">[</span><span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'green'</span><span class="token punctuation">,</span> <span class="token string">'blue'</span><span class="token punctuation">,</span> <span class="token string">'yellow'</span><span class="token punctuation">,</span> <span class="token string">'cyan'</span><span class="token punctuation">,</span> <span class="token string">'magenta'</span><span class="token punctuation">,</span> <span class="token string">'black'</span><span class="token punctuation">,</span> <span class="token string">'white'</span><span class="token punctuation">]</span> </span><span class="token keyword">as</span> <span class="token language-javascript">bg_color<span class="token punctuation">,</span> idx<span class="token punctuation">}</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElementTile</span> <span class="token language-javascript"><span class="token punctuation">{</span>bg_color<span class="token punctuation">}</span></span> <span class="token attr-name">element=</span><span class="token language-javascript"><span class="token punctuation">{</span>element_data<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">value=</span><span class="token language-javascript"><span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width: 4em; margin: 0;<span class="token punctuation">"</span></span> <span class="token attr-name">active</span> <span class="token punctuation">/></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___1, "Mdsvexample___1").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div>`;
});
export {
  Page as default
};
