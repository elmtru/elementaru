var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
import { c as create_ssr_component, b as add_attribute, e as escape, h as each, o as compute_slots, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import "../../../../chunks/index3.js";
import { s as structures } from "../../../../chunks/index4.js";
import { M as MultiSelect } from "../../../../chunks/MultiSelect.js";
import { S as StructureCard } from "../../../../chunks/StructureCard.js";
import { S as Structure } from "../../../../chunks/Structure.js";
import "../../../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import "../../../../chunks/client.js";
import { i as is_void } from "../../../../chunks/names.js";
import hljs from "highlight.js";
const css$2 = {
  code: "button.svelte-4wsn8.svelte-4wsn8{float:right}ol.svelte-4wsn8.svelte-4wsn8{padding:0}ol.svelte-4wsn8>li.svelte-4wsn8{margin:1ex 0}",
  map: '{"version":3,"file":"FileDetails.svelte","sources":["FileDetails.svelte"],"sourcesContent":["<script>import hljs from \'highlight.js\';\\nimport \'highlight.js/styles/vs2015.css\';\\nexport let files = [];\\nexport let toggle_all_btn_title = `Toggle all`;\\nexport let default_lang = `typescript`;\\nexport let as = `ol`;\\nexport let style = null;\\nfunction toggle_all() {\\n    const any_open = files.some((file) => file.node?.open);\\n    for (const file of files) {\\n        if (!file.node)\\n            continue;\\n        file.node.open = !any_open;\\n    }\\n    files = [...files]; // trigger reactivity\\n}\\n<\/script>\\n\\n{#if files?.length > 1}\\n  <button on:click={toggle_all} title={toggle_all_btn_title}>\\n    {files.some((file) => file.node?.open) ? `Close` : `Open`} all\\n  </button>\\n{/if}\\n\\n<svelte:element this={as} {style}>\\n  {#each files as file, idx (file.title)}\\n    {@const { title, content, language = default_lang } = file ?? {}}\\n    <li>\\n      <details bind:this={file.node}>\\n        {#if title || $$slots.title}\\n          <summary>\\n            <slot name=\\"title\\" {idx} {...file}>\\n              <code>{title.split(`/`).at(-1)}</code>\\n            </slot>\\n          </summary>\\n        {/if}\\n\\n        <pre><code>{@html hljs.highlight(content, { language }).value}</code></pre>\\n      </details>\\n    </li>\\n  {/each}\\n</svelte:element>\\n\\n<style>\\n  button {\\n    float: right;\\n  }\\n  ol {\\n    padding: 0;\\n  }\\n  ol > li {\\n    margin: 1ex 0;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4CE,gCAAO,CACL,KAAK,CAAE,KACT,CACA,4BAAG,CACD,OAAO,CAAE,CACX,CACA,eAAE,CAAG,eAAG,CACN,MAAM,CAAE,GAAG,CAAC,CACd"}'
};
const FileDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { files = [] } = $$props;
  let { toggle_all_btn_title = `Toggle all` } = $$props;
  let { default_lang = `typescript` } = $$props;
  let { as = `ol` } = $$props;
  let { style = null } = $$props;
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.toggle_all_btn_title === void 0 && $$bindings.toggle_all_btn_title && toggle_all_btn_title !== void 0)
    $$bindings.toggle_all_btn_title(toggle_all_btn_title);
  if ($$props.default_lang === void 0 && $$bindings.default_lang && default_lang !== void 0)
    $$bindings.default_lang(default_lang);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  return `${files?.length > 1 ? `<button${add_attribute("title", toggle_all_btn_title, 0)} class="svelte-4wsn8">${escape(files.some((file) => file.node?.open) ? `Close` : `Open`)} all</button>` : ``} ${((tag) => {
    return tag ? `<${as}${add_attribute("style", style, 0)} class="svelte-4wsn8">${is_void(tag) ? "" : `${each(files, (file, idx) => {
      let { title, content, language = default_lang } = file ?? {};
      return ` <li class="svelte-4wsn8"><details${add_attribute("this", file.node, 0)}>${title || $$slots.title ? `<summary>${slots.title ? slots.title({ idx, ...file }) : ` <code>${escape(title.split(`/`).at(-1))}</code> `} </summary>` : ``} <pre><code><!-- HTML_TAG_START -->${hljs.highlight(content, { language }).value}<!-- HTML_TAG_END --></code></pre></details> </li>`;
    })} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
const css$1 = {
  code: "form.svelte-1iyeisu.svelte-1iyeisu{display:flex;gap:1em;position:relative;align-items:center}details.svelte-1iyeisu>pre.svelte-1iyeisu{position:absolute;top:2em;left:0;background:black;width:calc(100cqw - 2em);z-index:2}p.svelte-1iyeisu.svelte-1iyeisu{text-align:center}p.svelte-1iyeisu>span.svelte-1iyeisu{color:orange}",
  map: `{"version":3,"file":"+page.md___mdsvexample___0.svelte","sources":["+page.md___mdsvexample___0.svelte"],"sourcesContent":["<script>\\nimport { Structure, StructureCard } from '$lib'\\nimport { structures } from '$site'\\nimport Select from 'svelte-multiselect'\\nlet mp_id = \`mp-756175\`\\nlet width\\nlet height\\n$: href = \`https://materialsproject.org/materials/\${mp_id}\`\\n$: structure = structures.find((struct) => struct.id === mp_id) || {}\\n<\/script>\\n<form>\\n<label for=\\"select\\">Select a structure:</label>\\n<Select\\nid=\\"select\\"\\noptions={structures.map((struct) => struct.id)}\\nselected={[mp_id]}\\nbind:value={mp_id}\\nmaxSelect={1}\\nminSelect={1}\\n/>\\n<details>\\n<summary>JSON for structure {mp_id}</summary>\\n<pre>\\n<code>\\n{JSON.stringify(structure, null, 2)}\\n</code>\\n</pre>\\n</details>\\n</form>\\n<h3 align='center'><a {href}>{mp_id}</a></h3>\\n<StructureCard {structure} />\\n<p>canvas width=<span>{width}</span>, height=<span>{height}</span></p>\\n<Structure {structure} bind:width bind:height />\\n<style>\\nform {\\ndisplay: flex;\\ngap: 1em;\\nposition: relative;\\nalign-items: center;\\n}\\ndetails > pre {\\nposition: absolute;\\ntop: 2em;\\nleft: 0;\\nbackground: black;\\nwidth: calc(100cqw - 2em);\\nz-index: 2;\\n}\\np {\\ntext-align: center;\\n}\\np > span {\\ncolor: orange;\\n}\\n</style>"],"names":[],"mappings":"AAkCA,kCAAK,CACL,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MACb,CACA,sBAAO,CAAG,kBAAI,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,OAAO,CAAE,CACT,CACA,+BAAE,CACF,UAAU,CAAE,MACZ,CACA,gBAAC,CAAG,mBAAK,CACT,KAAK,CAAE,MACP"}`
};
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let href;
  let structure;
  let mp_id = `mp-756175`;
  let width;
  let height;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    href = `https://materialsproject.org/materials/${mp_id}`;
    structure = structures.find((struct) => struct.id === mp_id) || {};
    $$rendered = `<form class="svelte-1iyeisu"><label for="select" data-svelte-h="svelte-15gv7dq">Select a structure:</label> ${validate_component(MultiSelect, "Select").$$render(
      $$result,
      {
        id: "select",
        options: structures.map((struct) => struct.id),
        selected: [mp_id],
        maxSelect: 1,
        minSelect: 1,
        value: mp_id
      },
      {
        value: ($$value) => {
          mp_id = $$value;
          $$settled = false;
        }
      },
      {}
    )} <details class="svelte-1iyeisu"><summary>JSON for structure ${escape(mp_id)}</summary> <pre class="svelte-1iyeisu"><code>
${escape(JSON.stringify(structure, null, 2))}
</code>
</pre></details></form> <h3 align="center"><a${add_attribute("href", href, 0)}>${escape(mp_id)}</a></h3> ${validate_component(StructureCard, "StructureCard").$$render($$result, { structure }, {}, {})} <p class="svelte-1iyeisu">canvas width=<span class="svelte-1iyeisu">${escape(width)}</span>, height=<span class="svelte-1iyeisu">${escape(height)}</span></p> ${validate_component(Structure, "Structure").$$render(
      $$result,
      { structure, width, height },
      {
        width: ($$value) => {
          width = $$value;
          $$settled = false;
        },
        height: ($$value) => {
          height = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "ul.svelte-r86zd8{display:grid;grid-template-columns:repeat(auto-fill, minmax(500px, 1fr));gap:1em;list-style:none;padding:0;text-align:center;width:90vw;margin:0 calc(50cqw - 45vw)}",
  map: `{"version":3,"file":"+page.md___mdsvexample___1.svelte","sources":["+page.md___mdsvexample___1.svelte"],"sourcesContent":["<script>\\nimport { Structure } from '$lib'\\nimport { structures } from '$site'\\n<\/script>\\n<ul>\\n{#each structures.filter(({sites}) => sites.length < 80) as structure}\\n{@const { id } = structure}\\n{@const href = \`https://materialsproject.org/materials/\${id}\`}\\n<li>\\n<h2><a {href}>{id}</a></h2>\\n<Structure {structure} />\\n</li>\\n{/each}\\n</ul>\\n<style>\\nul {\\ndisplay: grid;\\ngrid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\\ngap: 1em;\\nlist-style: none;\\npadding: 0;\\ntext-align: center;\\nwidth: 90vw;\\nmargin: 0 calc(50cqw - 45vw);\\n}\\n</style>"],"names":[],"mappings":"AAeA,gBAAG,CACH,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAC3B"}`
};
const Page_md___mdsvexample___1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<ul class="svelte-r86zd8">${each(structures.filter(({ sites }) => sites.length < 80), (structure) => {
    let { id } = structure, href = `https://materialsproject.org/materials/${id}`;
    return `  <li><h2><a${add_attribute("href", href, 0)}>${escape(id)}</a></h2> ${validate_component(Structure, "Structure").$$render($$result, { structure }, {}, {})} </li>`;
  })} </ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const files = Object.entries(/* @__PURE__ */ Object.assign({})).map(([path, content]) => {
    return {
      title: path,
      content
    };
  });
  return `<h2 data-svelte-h="svelte-14d67au">Select Structure from Dropdown</h2> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template(["<script>\nimport { Structure, StructureCard } from '$lib'\nimport { structures } from '$site'\nimport Select from 'svelte-multiselect'\nlet mp_id = `mp-756175`\nlet width\nlet height\n$: href = `https://materialsproject.org/materials/${mp_id}`\n$: structure = structures.find((struct) => struct.id === mp_id) || {}\n<\/script>\n<form>\n<label for=\"select\">Select a structure:</label>\n<Select\nid=\"select\"\noptions={structures.map((struct) => struct.id)}\nselected={[mp_id]}\nbind:value={mp_id}\nmaxSelect={1}\nminSelect={1}\n/>\n<details>\n<summary>JSON for structure {mp_id}</summary>\n<pre>\n<code>\n{JSON.stringify(structure, null, 2)}\n</code>\n</pre>\n</details>\n</form>\n<h3 align='center'><a {href}>{mp_id}</a></h3>\n<StructureCard {structure} />\n<p>canvas width=<span>{width}</span>, height=<span>{height}</span></p>\n<Structure {structure} bind:width bind:height />"], ["<script>\nimport { Structure, StructureCard } from '$lib'\nimport { structures } from '$site'\nimport Select from 'svelte-multiselect'\nlet mp_id = \\`mp-756175\\`\nlet width\nlet height\n$: href = \\`https://materialsproject.org/materials/\\$\\{mp_id}\\`\n$: structure = structures.find((struct) => struct.id === mp_id) || {}\n<\/script>\n<form>\n<label for=\"select\">Select a structure:</label>\n<Select\nid=\"select\"\noptions={structures.map((struct) => struct.id)}\nselected={[mp_id]}\nbind:value={mp_id}\nmaxSelect={1}\nminSelect={1}\n/>\n<details>\n<summary>JSON for structure {mp_id}</summary>\n<pre>\n<code>\n{JSON.stringify(structure, null, 2)}\n</code>\n</pre>\n</details>\n</form>\n<h3 align='center'><a {href}>{mp_id}</a></h3>\n<StructureCard {structure} />\n<p>canvas width=<span>{width}</span>, height=<span>{height}</span></p>\n<Structure {structure} bind:width bind:height />"]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/structure/+page.md",
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
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Structure<span class="token punctuation">,</span> StructureCard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> structures <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$site'</span>
  <span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">'svelte-multiselect'</span>

  <span class="token keyword">let</span> mp_id <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mp-756175</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">let</span> width
  <span class="token keyword">let</span> height
  <span class="token literal-property property">$</span><span class="token operator">:</span> href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://materialsproject.org/materials/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mp_id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> structure <span class="token operator">=</span> structures<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">struct</span><span class="token punctuation">)</span> <span class="token operator">=></span> struct<span class="token punctuation">.</span>id <span class="token operator">===</span> mp_id<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Select a structure:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span>
    <span class="token attr-name">options=</span><span class="token language-javascript"><span class="token punctuation">{</span>structures<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">struct</span><span class="token punctuation">)</span> <span class="token operator">=></span> struct<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">selected=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">[</span>mp_id<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">{</span>mp_id<span class="token punctuation">}</span></span>
    <span class="token attr-name">maxSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">minSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>JSON for structure <span class="token language-javascript"><span class="token punctuation">{</span>mp_id<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>structure<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>center<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token language-javascript"><span class="token punctuation">{</span>href<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>mp_id<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StructureCard</span> <span class="token language-javascript"><span class="token punctuation">{</span>structure<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>canvas width=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>width<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>, height=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>height<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Structure</span> <span class="token language-javascript"><span class="token punctuation">{</span>structure<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>width</span> <span class="token attr-name"><span class="token namespace">bind:</span>height</span> <span class="token punctuation">/></span></span><!-- HTML_TAG_END -->`}`;
    },
    example: () => {
      return `${slots.default ? slots.default({
        slot: "example"
      }) : `${validate_component(Page_md___mdsvexample___0, "Mdsvexample___0").$$render($$result, {}, {}, {})}`}`;
    }
  })}</div> ${validate_component(FileDetails, "FileDetails").$$render($$result, {
    files
  }, {}, {})} <h2 data-svelte-h="svelte-w4n0sc">Structures in a grid</h2> <p data-svelte-h="svelte-ydj5q3">Just to show off you can load several without the page getting too slow.</p> <div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_b || (_b = __template(["<script>\nimport { Structure } from '$lib'\nimport { structures } from '$site'\n<\/script>\n<ul>\n{#each structures.filter(({sites}) => sites.length < 80) as structure}\n{@const { id } = structure}\n{@const href = `https://materialsproject.org/materials/${id}`}\n<li>\n<h2><a {href}>{id}</a></h2>\n<Structure {structure} />\n</li>\n{/each}\n</ul>"], ["<script>\nimport { Structure } from '$lib'\nimport { structures } from '$site'\n<\/script>\n<ul>\n{#each structures.filter(({sites}) => sites.length < 80) as structure}\n{@const { id } = structure}\n{@const href = \\`https://materialsproject.org/materials/\\$\\{id}\\`}\n<li>\n<h2><a {href}>{id}</a></h2>\n<Structure {structure} />\n</li>\n{/each}\n</ul>"]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/structure/+page.md",
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
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Structure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> structures <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$site'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">#each</span> <span class="token language-javascript">structures<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>sites<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> sites<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">80</span><span class="token punctuation">)</span> </span><span class="token keyword">as</span> <span class="token language-javascript">structure<span class="token punctuation">}</span></span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span>@<span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> structure<span class="token punctuation">}</span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span>@<span class="token keyword">const</span> href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://materialsproject.org/materials/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token language-javascript"><span class="token punctuation">{</span>href<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Structure</span> <span class="token language-javascript"><span class="token punctuation">{</span>structure<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token each"><span class="token punctuation">{</span><span class="token keyword">/each</span><span class="token punctuation">}</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><!-- HTML_TAG_END -->`}`;
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
