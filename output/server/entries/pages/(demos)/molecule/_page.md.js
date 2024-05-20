var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { C as CodeExample } from "../../../../chunks/CodeLinks.js";
import "../../../../chunks/index3.js";
import { m as molecules } from "../../../../chunks/index4.js";
import { M as MultiSelect } from "../../../../chunks/MultiSelect.js";
import { S as Structure } from "../../../../chunks/Structure.js";
const css = {
  code: "form.svelte-f6t5kv.svelte-f6t5kv{display:flex;gap:1em;position:relative;align-items:center}details.svelte-f6t5kv>pre.svelte-f6t5kv{position:absolute;top:2em;left:0;background:black;width:calc(100cqw - 2em);z-index:2}",
  map: `{"version":3,"file":"+page.md___mdsvexample___0.svelte","sources":["+page.md___mdsvexample___0.svelte"],"sourcesContent":["<script>\\nimport { Structure } from '$lib'\\nimport { molecules } from '$site'\\nimport Select from 'svelte-multiselect'\\nlet name = \`benzene\`\\n$: molecule = molecules.find((struct) => struct.name === name) || {}\\n<\/script>\\n<form>\\n<label for=\\"select\\">Select a molecule:</label>\\n<Select\\nid=\\"select\\"\\noptions={molecules.map((mol) => mol.name)}\\nselected={[name]}\\nbind:value={name}\\nmaxSelect={1}\\nminSelect={1}\\n/>\\n<details>\\n<summary>JSON for molecule {name}</summary>\\n<pre>\\n<code>\\n{JSON.stringify(molecule, null, 2)}\\n</code>\\n</pre>\\n</details>\\n</form>\\n<h3 align='center'>{name}</h3>\\n<Structure structure={molecule} bonding_strategy=\\"max_dist\\" bonding_options={{max_bond_dist: 2}} />\\n<style>\\nform {\\ndisplay: flex;\\ngap: 1em;\\nposition: relative;\\nalign-items: center;\\n}\\ndetails > pre {\\nposition: absolute;\\ntop: 2em;\\nleft: 0;\\nbackground: black;\\nwidth: calc(100cqw - 2em);\\nz-index: 2;\\n}\\n</style>"],"names":[],"mappings":"AA6BA,gCAAK,CACL,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,MACb,CACA,qBAAO,CAAG,iBAAI,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,OAAO,CAAE,CACT"}`
};
const Page_md___mdsvexample___0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let molecule;
  let name = `benzene`;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    molecule = molecules.find((struct) => struct.name === name) || {};
    $$rendered = `<form class="svelte-f6t5kv"><label for="select" data-svelte-h="svelte-d91jqn">Select a molecule:</label> ${validate_component(MultiSelect, "Select").$$render(
      $$result,
      {
        id: "select",
        options: molecules.map((mol) => mol.name),
        selected: [name],
        maxSelect: 1,
        minSelect: 1,
        value: name
      },
      {
        value: ($$value) => {
          name = $$value;
          $$settled = false;
        }
      },
      {}
    )} <details class="svelte-f6t5kv"><summary>JSON for molecule ${escape(name)}</summary> <pre class="svelte-f6t5kv"><code>
${escape(JSON.stringify(molecule, null, 2))}
</code>
</pre></details></form> <h3 align="center">${escape(name)}</h3> ${validate_component(Structure, "Structure").$$render(
      $$result,
      {
        structure: molecule,
        bonding_strategy: "max_dist",
        bonding_options: { max_bond_dist: 2 }
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(CodeExample, "Example").$$render($$result, {
    src: String.raw(_a || (_a = __template([`<script>
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
<Structure structure={molecule} bonding_strategy="max_dist" bonding_options={{max_bond_dist: 2}} />`], [`<script>
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
<Structure structure={molecule} bonding_strategy="max_dist" bonding_options={{max_bond_dist: 2}} />`]))),
    meta: {
      "Wrapper": "svelte-zoo/CodeExample.svelte",
      "filename": "/src/routes/(demos)/molecule/+page.md",
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Structure</span> <span class="token attr-name">structure=</span><span class="token language-javascript"><span class="token punctuation">{</span>molecule<span class="token punctuation">}</span></span> <span class="token attr-name">bonding_strategy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>max_dist<span class="token punctuation">"</span></span> <span class="token attr-name">bonding_options=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">max_bond_dist</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><!-- HTML_TAG_END -->`}`;
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
