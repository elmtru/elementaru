import { c as create_ssr_component, b as add_attribute, e as escape, g as subscribe, i as set_store_value, v as validate_component, h as each } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { i as heatmap_key, g as active_element, h as property_labels, p as pretty_num, e as element_data } from "../../../chunks/index3.js";
import "../../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import "../../../chunks/client.js";
import { i as is_void } from "../../../chunks/names.js";
import { $ as $format } from "../../../chunks/ru.js";
import { E as ElementHeading, a as ElementScatter } from "../../../chunks/ScatterPlot.js";
import { P as PropertySelect } from "../../../chunks/PropertySelect.js";
import { a as ColorScaleSelect } from "../../../chunks/ColorScaleSelect.js";
import { E as ElementPhoto, P as PeriodicTable } from "../../../chunks/PeriodicTable.js";
import { I as Icon_1 } from "../../../chunks/Icon2.js";
import { B as BohrAtom } from "../../../chunks/BohrAtom.js";
import { E as ElementTile } from "../../../chunks/ElementTile.js";
const css$1 = {
  code: ".prev-next.svelte-tpizwz.svelte-tpizwz{display:flex;list-style:none;place-content:space-between;gap:var(--zoo-pr-gap, 2em);padding:var(--zoo-pr-padding, 0);margin:var(--zoo-pr-margin, 3em auto)}.prev-next.svelte-tpizwz a.svelte-tpizwz{color:var(--zoo-pr-color);background:var(--zoo-pr-link-bg);padding:var(--zoo-pr-link-padding);border-radius:var(--zoo-pr-link-border-radius)}.prev-next.svelte-tpizwz span.svelte-tpizwz{display:block;margin:var(--zoo-pr-label-margin, 0 auto 1ex)}.prev-next.svelte-tpizwz>div.svelte-tpizwz:nth-child(2){text-align:right}",
  map: '{"version":3,"file":"PrevNext.svelte","sources":["PrevNext.svelte"],"sourcesContent":["<script>import { goto } from \'$app/navigation\';\\nexport let items = [];\\nexport let node = `nav`;\\nexport let current = ``;\\nexport let style = null;\\nexport let on_keyup = ({ prev, next, }) => ({ ArrowLeft: prev[0], ArrowRight: next[0], Escape: `/` });\\nexport let goto_options = {\\n    replaceState: true,\\n    noScroll: true,\\n};\\nexport let titles = {\\n    prev: `&larr; Previous`,\\n    next: `Next &rarr;`,\\n};\\n$: arr = (items ?? []).map((itm) => typeof itm == `string` ? [itm, itm] : itm);\\n$: if (arr.length < 2)\\n    console.error(`PrevNext received ${arr.length} items`);\\n$: idx = arr.findIndex(([key]) => key == current);\\n$: if (idx < 0) {\\n    const valid = arr.map(([key]) => key);\\n    console.error(`PrevNext received invalid current=${current}, expected one of ${valid}`);\\n}\\n$: prev = arr[idx - 1] ?? arr[arr.length - 1];\\n$: next = arr[idx + 1] ?? arr[0];\\nfunction handle_keyup(event) {\\n    const to = on_keyup({ prev, next })[event.key];\\n    if (to)\\n        goto(to, goto_options);\\n}\\n<\/script>\\n\\n<svelte:window on:keyup={handle_keyup} />\\n{#if arr.length > 2}\\n  <svelte:element this={node} {style} class=\\"prev-next\\">\\n    {#if prev?.length >= 2}\\n      <slot name=\\"prev\\" item={prev[1]}>\\n        <slot kind=\\"prev\\" item={prev[1]}>\\n          <div>\\n            {#if titles.prev}<span>{@html titles.prev}</span>{/if}\\n            <a href={prev[0]}>{prev[0]}</a>\\n          </div>\\n        </slot>\\n      </slot>\\n    {/if}\\n    <slot name=\\"between\\" />\\n    {#if next?.length >= 2}\\n      <slot name=\\"next\\" item={next[1]}>\\n        <slot kind=\\"next\\" item={next[1]}>\\n          <div>\\n            {#if titles.next}<span>{@html titles.next}</span>{/if}\\n            <a href={next[0]}>{next[0]}</a>\\n          </div>\\n        </slot>\\n      </slot>\\n    {/if}\\n  </svelte:element>\\n{/if}\\n\\n<style>\\n  .prev-next {\\n    display: flex;\\n    list-style: none;\\n    place-content: space-between;\\n    gap: var(--zoo-pr-gap, 2em);\\n    padding: var(--zoo-pr-padding, 0);\\n    margin: var(--zoo-pr-margin, 3em auto);\\n  }\\n  .prev-next a {\\n    color: var(--zoo-pr-color);\\n    background: var(--zoo-pr-link-bg);\\n    padding: var(--zoo-pr-link-padding);\\n    border-radius: var(--zoo-pr-link-border-radius);\\n  }\\n  .prev-next span {\\n    display: block;\\n    margin: var(--zoo-pr-label-margin, 0 auto 1ex);\\n  }\\n  .prev-next > div:nth-child(2) {\\n    text-align: right;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2DE,sCAAW,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,aAAa,CAC5B,GAAG,CAAE,IAAI,YAAY,CAAC,IAAI,CAAC,CAC3B,OAAO,CAAE,IAAI,gBAAgB,CAAC,EAAE,CAAC,CACjC,MAAM,CAAE,IAAI,eAAe,CAAC,SAAS,CACvC,CACA,wBAAU,CAAC,eAAE,CACX,KAAK,CAAE,IAAI,cAAc,CAAC,CAC1B,UAAU,CAAE,IAAI,gBAAgB,CAAC,CACjC,OAAO,CAAE,IAAI,qBAAqB,CAAC,CACnC,aAAa,CAAE,IAAI,2BAA2B,CAChD,CACA,wBAAU,CAAC,kBAAK,CACd,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,qBAAqB,CAAC,WAAW,CAC/C,CACA,wBAAU,CAAG,iBAAG,WAAW,CAAC,CAAE,CAC5B,UAAU,CAAE,KACd"}'
};
const PrevNext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let arr;
  let idx;
  let prev;
  let next;
  let { items = [] } = $$props;
  let { node = `nav` } = $$props;
  let { current = `` } = $$props;
  let { style = null } = $$props;
  let { on_keyup = ({ prev: prev2, next: next2 }) => ({
    ArrowLeft: prev2[0],
    ArrowRight: next2[0],
    Escape: `/`
  }) } = $$props;
  let { goto_options = { replaceState: true, noScroll: true } } = $$props;
  let { titles = {
    prev: `&larr; Previous`,
    next: `Next &rarr;`
  } } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.on_keyup === void 0 && $$bindings.on_keyup && on_keyup !== void 0)
    $$bindings.on_keyup(on_keyup);
  if ($$props.goto_options === void 0 && $$bindings.goto_options && goto_options !== void 0)
    $$bindings.goto_options(goto_options);
  if ($$props.titles === void 0 && $$bindings.titles && titles !== void 0)
    $$bindings.titles(titles);
  $$result.css.add(css$1);
  arr = (items ?? []).map((itm) => typeof itm == `string` ? [itm, itm] : itm);
  {
    if (arr.length < 2)
      console.error(`PrevNext received ${arr.length} items`);
  }
  idx = arr.findIndex(([key]) => key == current);
  {
    if (idx < 0) {
      const valid = arr.map(([key]) => key);
      console.error(`PrevNext received invalid current=${current}, expected one of ${valid}`);
    }
  }
  prev = arr[idx - 1] ?? arr[arr.length - 1];
  next = arr[idx + 1] ?? arr[0];
  return ` ${arr.length > 2 ? `${((tag) => {
    return tag ? `<${node}${add_attribute("style", style, 0)} class="prev-next svelte-tpizwz">${is_void(tag) ? "" : `${prev?.length >= 2 ? `${slots.prev ? slots.prev({ item: prev[1] }) : ` ${slots.default ? slots.default({ kind: "prev", item: prev[1] }) : ` <div class="svelte-tpizwz">${titles.prev ? `<span class="svelte-tpizwz"><!-- HTML_TAG_START -->${titles.prev}<!-- HTML_TAG_END --></span>` : ``} <a${add_attribute("href", prev[0], 0)} class="svelte-tpizwz">${escape(prev[0])}</a></div> `} `}` : ``} ${slots.between ? slots.between({}) : ``} ${next?.length >= 2 ? `${slots.next ? slots.next({ item: next[1] }) : ` ${slots.default ? slots.default({ kind: "next", item: next[1] }) : ` <div class="svelte-tpizwz">${titles.next ? `<span class="svelte-tpizwz"><!-- HTML_TAG_START -->${titles.next}<!-- HTML_TAG_END --></span>` : ``} <a${add_attribute("href", next[0], 0)} class="svelte-tpizwz">${escape(next[0])}</a></div> `} `}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(node)}` : ``}`;
});
const css = {
  code: "main.svelte-1vh0fr7.svelte-1vh0fr7{margin:auto;max-width:75em}section.viz.svelte-1vh0fr7.svelte-1vh0fr7{margin:2em auto;display:grid;gap:2em;place-items:center}@media(min-width: 700px){section.viz.svelte-1vh0fr7.svelte-1vh0fr7{grid-template-columns:1fr 2fr}}section.flex-wrap.svelte-1vh0fr7.svelte-1vh0fr7{margin:3em auto;display:flex;flex-wrap:wrap;gap:2em;place-items:center;place-content:center space-around}p.svelte-1vh0fr7.svelte-1vh0fr7{text-align:center;max-width:40em;margin:3em auto;font-weight:200}section.properties.svelte-1vh0fr7.svelte-1vh0fr7{display:grid;grid-gap:3em;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));background-color:rgba(0, 30, 100, 0.4);margin:3em 0;padding:2em 1em;border-radius:4pt}section.properties.svelte-1vh0fr7 div.svelte-1vh0fr7{text-align:center;display:grid;place-content:center}section.properties.svelte-1vh0fr7 strong.svelte-1vh0fr7{font-size:14pt}section.properties.svelte-1vh0fr7 small.svelte-1vh0fr7{display:block;font-size:12pt;font-weight:lighter;opacity:0.8;margin-top:1ex}table.svelte-1vh0fr7.svelte-1vh0fr7{border-collapse:collapse;text-align:center;font-size:clamp(9pt, 1.5vw, 12pt)}table.svelte-1vh0fr7 thead th.svelte-1vh0fr7,table.svelte-1vh0fr7 td.svelte-1vh0fr7{padding:4pt 1ex}table.svelte-1vh0fr7 tr.svelte-1vh0fr7:nth-child(even){background-color:rgba(255, 255, 255, 0.1)}table.svelte-1vh0fr7 tr.svelte-1vh0fr7:hover{background-color:rgba(150, 150, 255, 0.2)}form.svelte-1vh0fr7.svelte-1vh0fr7{display:flex;place-content:center;gap:1em}",
  map: "{\"version\":3,\"file\":\"+page.svelte\",\"sources\":[\"+page.svelte\"],\"sourcesContent\":[\"<script lang=\\\"ts\\\">import { page } from '$app/stores';\\nimport { BohrAtom, ColorScaleSelect, ElementHeading, ElementPhoto, ElementScatter, ElementTile, Icon, PeriodicTable, PropertySelect, element_data, } from '$lib';\\nimport { pretty_num, property_labels } from '$lib/labels';\\nimport { active_element, heatmap_key } from '$lib/stores';\\nimport { PrevNext } from 'svelte-zoo';\\nimport { _ } from 'svelte-i18n';\\nexport let data;\\n$: ({ element } = data);\\n$: $active_element = element;\\n$: key_vals = Object.keys(property_labels)\\n    .filter((key) => element[key])\\n    .map((key) => {\\n    const [label, unit] = property_labels[key];\\n    let value = element[key];\\n    if (typeof value === `number`) {\\n        value = pretty_num(value);\\n    }\\n    if (Array.isArray(value))\\n        value = value.join(`, `);\\n    if (unit) {\\n        value = `${value} &thinsp;${$_('unitsByName.' + unit)}`;\\n    }\\n    return [label, value];\\n});\\n// set atomic radius as default heatmap_key\\n$: if (!$heatmap_key)\\n    $heatmap_key = `atomic_radius`;\\n$: head_title = $_('element.name.' + element.name) + ' | ' + $_('Periodic Table');\\nlet orbiting = true;\\nlet window_width;\\nlet active_shell = null;\\nconst icon_property_map = {\\n    'Atomic Mass': `mdi:weight`,\\n    'Atomic Number': `mdi:periodic-table`,\\n    'Atomic Radius': `mdi:atom`,\\n    'Atomic Volume': `mdi:cube-outline`,\\n    'Boiling Point': `mdi:gas-cylinder`,\\n    'Covalent Radius': `mdi:atom`,\\n    'Electron Affinity': `mdi:electron-framework`,\\n    'Electron Valency': `mdi:atom-variant`,\\n    'First Ionization Energy': `simple-line-icons:energy`,\\n    'Ionization Energies': `mdi:flash`,\\n    'Melting Point': `mdi:water-outline`,\\n    'Number of Shells': `ic:baseline-wifi-tethering`,\\n    'Specific Heat': `mdi:fire`,\\n    Density: `ion:scale-outline`,\\n    Electronegativity: `mdi:electron-framework`,\\n};\\n$: scatter_plot_values = element_data.map((el) => $heatmap_key ? el[$heatmap_key] : null);\\n$: [y_label, y_unit] = $heatmap_key ? property_labels[$heatmap_key] ?? [] : [];\\nlet color_scale = `Viridis`;\\nexport const snapshot = {\\n    capture: () => ({ color_scale }),\\n    restore: (values) => ({ color_scale } = values),\\n};\\n<\/script>\\n\\n<svelte:window bind:innerWidth={window_width} />\\n\\n<svelte:head>\\n  <title>{head_title}</title>\\n  <meta property=\\\"og:title\\\" content={head_title} />\\n</svelte:head>\\n\\n<main>\\n  <ElementHeading {element} />\\n\\n  {#if (element?.discoverer && !element.discoverer.startsWith(`unknown`)) || element?.year}\\n    <p class=\\\"discovery\\\">\\n      {$_('discoveredBy.preAll')}\\n      {#if element?.discoverer && !element.discoverer.startsWith(`unknown`)}\\n      {$_('discoveredBy.preName')} <strong>{$_(`discoveredBy.names.${element.discoverer}`)}</strong>\\n      {/if}\\n      {#if typeof element?.year}\\n      <br>\\n      {$_('discoveredBy.preYear')} <strong>{Number.isInteger(element.year) ? element.year : $_(`year.${element.year}`)}</strong>\\n      {/if}\\n    </p>\\n  {/if}\\n\\n  <form>\\n    <PropertySelect minSelect={1} />\\n    <ColorScaleSelect bind:value={color_scale} selected={[color_scale]} minSelect={1} />\\n  </form>\\n  <section class=\\\"viz\\\">\\n    <ElementPhoto\\n      element={$active_element}\\n      missing_msg={window_width < 900 ? `` : `No image for`}\\n    />\\n\\n    <!-- on:mouseleave makes ElementScatter always show current element unless user actively hovers another element -->\\n    <ElementScatter\\n      y={scatter_plot_values}\\n      y_label={$_(y_label)}\\n      y_unit={y_unit ? $_(`unitsByName.${y_unit}`) : y_unit}\\n      {color_scale}\\n      y_lim={[0, null]}\\n      on:mouseleave={() => ($active_element = element)}\\n      style=\\\"min-height: min(50vmin, 400px);\\\"\\n    />\\n  </section>\\n\\n  <p class=\\\"summary\\\">{@html $_(`summary.${element.name}`)}</p>\\n\\n  <section class=\\\"flex-wrap\\\">\\n    <PeriodicTable\\n      tile_props={{ show_name: false, show_number: false }}\\n      show_photo={false}\\n      disabled={true}\\n      style=\\\"width: 100%;  max-width: 350px;\\\"\\n      links=\\\"name\\\"\\n      active_element={$active_element}\\n    />\\n\\n    <table>\\n      <thead>\\n        <th><Icon icon=\\\"ic:outline-circle\\\" />{$_('Shell')}</th>\\n        <th><Icon icon=\\\"mdi:atom-variant\\\" />{$_('Electrons')}</th>\\n        <th><Icon icon=\\\"mdi:rotate-orbit\\\" />{$_('Orbitals')}</th>\\n      </thead>\\n\\n      {#each element.shells as shell_occu, shell_idx}\\n        {@const shell_orbitals = element.electron_configuration\\n          .split(` `)\\n          .filter((orbital) => orbital.startsWith(`${shell_idx + 1}`))\\n          .map((orbital) => `${orbital.substring(2)} ${$_(\\\"preposition.in\\\")} ${orbital.substring(0, 2)}`)}\\n        <tr\\n          on:mouseenter={() => (active_shell = shell_idx + 1)}\\n          on:mouseleave={() => (active_shell = null)}\\n        >\\n          <td>{shell_idx + 1}</td>\\n          <td>{shell_occu}</td>\\n          <td>{shell_orbitals.join($_('joinSymbol.orbital'))}</td>\\n        </tr>\\n      {/each}\\n    </table>\\n\\n    <BohrAtom\\n      symbol={element.symbol}\\n      shells={element.shells}\\n      name={element.name}\\n      adapt_size={true}\\n      orbital_period={orbiting ? 3 : 0}\\n      highlight_shell={active_shell}\\n      on:click={() => (orbiting = !orbiting)}\\n      style=\\\"max-width: 300px;\\\"\\n    />\\n  </section>\\n\\n  <section class=\\\"properties\\\">\\n    {#each key_vals as [label, value], idx}\\n      <!-- skip last item if index is uneven to avoid single dangling item on last row -->\\n      {#if idx % 2 === 1 || idx < key_vals.length - 1}\\n        <div>\\n          <strong>\\n            <Icon icon={icon_property_map[label]} />\\n            {@html value}\\n          </strong>\\n          <small>{$_(label)}</small>\\n        </div>\\n      {/if}\\n    {/each}\\n  </section>\\n\\n  <PrevNext\\n    items={element_data.map((elem) => [elem.name.toLowerCase(), elem])}\\n    current={$page.url.pathname.slice(1)}\\n    let:item\\n    let:kind\\n  >\\n    <a href={item.name.toLowerCase()} style=\\\"display: flex; flex-direction: column;\\\">\\n      <h3>\\n        {@html kind == `next` ? `${$_('Next')} &rarr;` : `&larr; ${$_('Previous')}`}\\n      </h3>\\n      <ElementPhoto element={item} style=\\\"width: 200px; border-radius: 4pt;\\\" />\\n      <ElementTile\\n        element={item}\\n        style=\\\"width: 70px; position: absolute; bottom: 0;\\\"\\n        --elem-tile-hover-border=\\\"1px solid transparent\\\"\\n      />\\n    </a>\\n  </PrevNext>\\n</main>\\n\\n<style>\\n  main {\\n    margin: auto;\\n    max-width: 75em;\\n  }\\n  section.viz {\\n    margin: 2em auto;\\n    display: grid;\\n    gap: 2em;\\n    place-items: center;\\n  }\\n  @media (min-width: 700px) {\\n    section.viz {\\n      grid-template-columns: 1fr 2fr;\\n    }\\n  }\\n  section.flex-wrap {\\n    margin: 3em auto;\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 2em;\\n    place-items: center;\\n    place-content: center space-around;\\n  }\\n  p {\\n    text-align: center;\\n    max-width: 40em;\\n    margin: 3em auto;\\n    font-weight: 200;\\n  }\\n  section.properties {\\n    display: grid;\\n    grid-gap: 3em;\\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\\n    background-color: rgba(0, 30, 100, 0.4);\\n    margin: 3em 0;\\n    padding: 2em 1em;\\n    border-radius: 4pt;\\n  }\\n  section.properties div {\\n    text-align: center;\\n    display: grid;\\n    place-content: center;\\n  }\\n  section.properties strong {\\n    font-size: 14pt;\\n  }\\n  section.properties small {\\n    display: block;\\n    font-size: 12pt;\\n    font-weight: lighter;\\n    opacity: 0.8;\\n    margin-top: 1ex;\\n  }\\n  table {\\n    border-collapse: collapse;\\n    text-align: center;\\n    font-size: clamp(9pt, 1.5vw, 12pt);\\n  }\\n  table thead th,\\n  table td {\\n    padding: 4pt 1ex;\\n  }\\n  table tr:nth-child(even) {\\n    background-color: rgba(255, 255, 255, 0.1);\\n  }\\n  table tr:hover {\\n    background-color: rgba(150, 150, 255, 0.2);\\n  }\\n  form {\\n    display: flex;\\n    place-content: center;\\n    gap: 1em;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAyLE,kCAAK,CACH,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IACb,CACA,OAAO,kCAAK,CACV,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,OAAO,kCAAK,CACV,qBAAqB,CAAE,GAAG,CAAC,GAC7B,CACF,CACA,OAAO,wCAAW,CAChB,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CAAC,YACxB,CACA,+BAAE,CACA,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,WAAW,CAAE,GACf,CACA,OAAO,yCAAY,CACjB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,GAAG,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACvC,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,GACjB,CACA,OAAO,0BAAW,CAAC,kBAAI,CACrB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MACjB,CACA,OAAO,0BAAW,CAAC,qBAAO,CACxB,SAAS,CAAE,IACb,CACA,OAAO,0BAAW,CAAC,oBAAM,CACvB,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CACpB,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,GACd,CACA,mCAAM,CACJ,eAAe,CAAE,QAAQ,CACzB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MAAM,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CACnC,CACA,oBAAK,CAAC,KAAK,CAAC,iBAAE,CACd,oBAAK,CAAC,iBAAG,CACP,OAAO,CAAE,GAAG,CAAC,GACf,CACA,oBAAK,CAAC,iBAAE,WAAW,IAAI,CAAE,CACvB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CACA,oBAAK,CAAC,iBAAE,MAAO,CACb,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CACA,kCAAK,CACH,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,GAAG,CAAE,GACP\"}"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  let key_vals;
  let head_title;
  let scatter_plot_values;
  let y_label;
  let y_unit;
  let $heatmap_key, $$unsubscribe_heatmap_key;
  let $_, $$unsubscribe__;
  let $active_element, $$unsubscribe_active_element;
  let $page, $$unsubscribe_page;
  $$unsubscribe_heatmap_key = subscribe(heatmap_key, (value) => $heatmap_key = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_active_element = subscribe(active_element, (value) => $active_element = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let active_shell = null;
  const icon_property_map = {
    "Atomic Mass": `mdi:weight`,
    "Atomic Number": `mdi:periodic-table`,
    "Atomic Radius": `mdi:atom`,
    "Atomic Volume": `mdi:cube-outline`,
    "Boiling Point": `mdi:gas-cylinder`,
    "Covalent Radius": `mdi:atom`,
    "Electron Affinity": `mdi:electron-framework`,
    "Electron Valency": `mdi:atom-variant`,
    "First Ionization Energy": `simple-line-icons:energy`,
    "Ionization Energies": `mdi:flash`,
    "Melting Point": `mdi:water-outline`,
    "Number of Shells": `ic:baseline-wifi-tethering`,
    "Specific Heat": `mdi:fire`,
    Density: `ion:scale-outline`,
    Electronegativity: `mdi:electron-framework`
  };
  let color_scale = `Viridis`;
  const snapshot = {
    capture: () => ({ color_scale }),
    restore: (values) => ({ color_scale } = values)
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    ({ element } = data);
    set_store_value(active_element, $active_element = element, $active_element);
    key_vals = Object.keys(property_labels).filter((key) => element[key]).map((key) => {
      const [label, unit] = property_labels[key];
      let value = element[key];
      if (typeof value === `number`) {
        value = pretty_num(value);
      }
      if (Array.isArray(value))
        value = value.join(`, `);
      if (unit) {
        value = `${value} &thinsp;${$_("unitsByName." + unit)}`;
      }
      return [label, value];
    });
    {
      if (!$heatmap_key)
        set_store_value(heatmap_key, $heatmap_key = `atomic_radius`, $heatmap_key);
    }
    head_title = $_("element.name." + element.name) + " | " + $_("Periodic Table");
    scatter_plot_values = element_data.map((el) => $heatmap_key ? el[$heatmap_key] : null);
    [y_label, y_unit] = $heatmap_key ? property_labels[$heatmap_key] ?? [] : [];
    $$rendered = ` ${$$result.head += `<!-- HEAD_svelte-qne1fr_START -->${$$result.title = `<title>${escape(head_title)}</title>`, ""}<meta property="og:title"${add_attribute("content", head_title, 0)}><!-- HEAD_svelte-qne1fr_END -->`, ""} <main class="svelte-1vh0fr7">${validate_component(ElementHeading, "ElementHeading").$$render($$result, { element }, {}, {})} ${element?.discoverer && !element.discoverer.startsWith(`unknown`) || element?.year ? `<p class="discovery svelte-1vh0fr7">${escape($_("discoveredBy.preAll"))} ${element?.discoverer && !element.discoverer.startsWith(`unknown`) ? `${escape($_("discoveredBy.preName"))} <strong>${escape($_(`discoveredBy.names.${element.discoverer}`))}</strong>` : ``} ${typeof element?.year ? `<br> ${escape($_("discoveredBy.preYear"))} <strong>${escape(Number.isInteger(element.year) ? element.year : $_(`year.${element.year}`))}</strong>` : ``}</p>` : ``} <form class="svelte-1vh0fr7">${validate_component(PropertySelect, "PropertySelect").$$render($$result, { minSelect: 1 }, {}, {})} ${validate_component(ColorScaleSelect, "ColorScaleSelect").$$render(
      $$result,
      {
        selected: [color_scale],
        minSelect: 1,
        value: color_scale
      },
      {
        value: ($$value) => {
          color_scale = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form> <section class="viz svelte-1vh0fr7">${validate_component(ElementPhoto, "ElementPhoto").$$render(
      $$result,
      {
        element: $active_element,
        missing_msg: `No image for`
      },
      {},
      {}
    )}  ${validate_component(ElementScatter, "ElementScatter").$$render(
      $$result,
      {
        y: scatter_plot_values,
        y_label: $_(y_label),
        y_unit: y_unit ? $_(`unitsByName.${y_unit}`) : y_unit,
        color_scale,
        y_lim: [0, null],
        style: "min-height: min(50vmin, 400px);"
      },
      {},
      {}
    )}</section> <p class="summary svelte-1vh0fr7"><!-- HTML_TAG_START -->${$_(`summary.${element.name}`)}<!-- HTML_TAG_END --></p> <section class="flex-wrap svelte-1vh0fr7">${validate_component(PeriodicTable, "PeriodicTable").$$render(
      $$result,
      {
        tile_props: { show_name: false, show_number: false },
        show_photo: false,
        disabled: true,
        style: "width: 100%;  max-width: 350px;",
        links: "name",
        active_element: $active_element
      },
      {},
      {}
    )} <table class="svelte-1vh0fr7"><thead><th class="svelte-1vh0fr7">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "ic:outline-circle" }, {}, {})}${escape($_("Shell"))}</th> <th class="svelte-1vh0fr7">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "mdi:atom-variant" }, {}, {})}${escape($_("Electrons"))}</th> <th class="svelte-1vh0fr7">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "mdi:rotate-orbit" }, {}, {})}${escape($_("Orbitals"))}</th></thead> ${each(element.shells, (shell_occu, shell_idx) => {
      let shell_orbitals = element.electron_configuration.split(` `).filter((orbital) => orbital.startsWith(`${shell_idx + 1}`)).map((orbital) => `${orbital.substring(2)} ${$_("preposition.in")} ${orbital.substring(0, 2)}`);
      return ` <tr class="svelte-1vh0fr7"><td class="svelte-1vh0fr7">${escape(shell_idx + 1)}</td> <td class="svelte-1vh0fr7">${escape(shell_occu)}</td> <td class="svelte-1vh0fr7">${escape(shell_orbitals.join($_("joinSymbol.orbital")))}</td> </tr>`;
    })}</table> ${validate_component(BohrAtom, "BohrAtom").$$render(
      $$result,
      {
        symbol: element.symbol,
        shells: element.shells,
        name: element.name,
        adapt_size: true,
        orbital_period: 3,
        highlight_shell: active_shell,
        style: "max-width: 300px;"
      },
      {},
      {}
    )}</section> <section class="properties svelte-1vh0fr7">${each(key_vals, ([label, value], idx) => {
      return ` ${idx % 2 === 1 || idx < key_vals.length - 1 ? `<div class="svelte-1vh0fr7"><strong class="svelte-1vh0fr7">${validate_component(Icon_1, "Icon").$$render($$result, { icon: icon_property_map[label] }, {}, {})} <!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></strong> <small class="svelte-1vh0fr7">${escape($_(label))}</small> </div>` : ``}`;
    })}</section> ${validate_component(PrevNext, "PrevNext").$$render(
      $$result,
      {
        items: element_data.map((elem) => [elem.name.toLowerCase(), elem]),
        current: $page.url.pathname.slice(1)
      },
      {},
      {
        default: ({ item, kind }) => {
          return `<a${add_attribute("href", item.name.toLowerCase(), 0)} style="display: flex; flex-direction: column;"><h3><!-- HTML_TAG_START -->${kind == `next` ? `${$_("Next")} &rarr;` : `&larr; ${$_("Previous")}`}<!-- HTML_TAG_END --></h3> ${validate_component(ElementPhoto, "ElementPhoto").$$render(
            $$result,
            {
              element: item,
              style: "width: 200px; border-radius: 4pt;"
            },
            {},
            {}
          )} <div style="display: contents; --elem-tile-hover-border:1px solid transparent;">${validate_component(ElementTile, "ElementTile").$$render(
            $$result,
            {
              element: item,
              style: "width: 70px; position: absolute; bottom: 0;"
            },
            {},
            {}
          )}</div></a>`;
        }
      }
    )} </main>`;
  } while (!$$settled);
  $$unsubscribe_heatmap_key();
  $$unsubscribe__();
  $$unsubscribe_active_element();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
