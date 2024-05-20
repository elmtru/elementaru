import { c as create_ssr_component, g as subscribe, b as add_attribute, v as validate_component, e as escape, d as add_styles, h as each } from "../../../../chunks/ssr.js";
import { p as pretty_num, c as category_colors, d as active_category, f as default_category_colors, g as active_element, l as last_element, e as element_data, h as property_labels } from "../../../../chunks/index3.js";
import { $ as $format } from "../../../../chunks/ru.js";
import { P as PropertySelect } from "../../../../chunks/PropertySelect.js";
import { I as Icon_1 } from "../../../../chunks/Icon2.js";
import { P as PeriodicTable } from "../../../../chunks/PeriodicTable.js";
import { T as TableInset } from "../../../../chunks/TableInset.js";
import { a as ColorScaleSelect } from "../../../../chunks/ColorScaleSelect.js";
import { E as ElementHeading, a as ElementScatter } from "../../../../chunks/ScatterPlot.js";
import "d3-interpolate-path";
import { B as BohrAtom } from "../../../../chunks/BohrAtom.js";
const css$2 = {
  code: "div.svelte-1s2arnr.svelte-1s2arnr.svelte-1s2arnr.svelte-1s2arnr{display:grid;grid-template:auto auto / repeat(4, 1fr);place-items:center;text-align:center;container-type:inline-size}div.svelte-1s2arnr>section.svelte-1s2arnr>strong.svelte-1s2arnr.svelte-1s2arnr{display:block;margin-top:1ex;font-size:3.5cqw}div.svelte-1s2arnr>section.svelte-1s2arnr>p.svelte-1s2arnr.svelte-1s2arnr{margin:0;font-weight:lighter;font-size:3cqw}div.svelte-1s2arnr>section.svelte-1s2arnr>p.svelte-1s2arnr>abbr.svelte-1s2arnr{font-size:2cqw;text-decoration:none}h3.svelte-1s2arnr.svelte-1s2arnr.svelte-1s2arnr.svelte-1s2arnr{font-size:clamp(9pt, 3vw, 20pt);white-space:nowrap;align-self:center}",
  map: `{"version":3,"file":"ElementStats.svelte","sources":["ElementStats.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { ElementHeading, Icon, pretty_num } from '$lib';\\nimport { _ } from 'svelte-i18n';\\nexport let element;\\nexport let style = \`\`;\\nconst icon_phase_map = {\\n    Solid: \`mdi:cube-outline\`,\\n    Liquid: \`mdi:water-outline\`,\\n    Gas: \`mdi:gas-cylinder\`,\\n};\\n<\/script>\\n\\n{#if element}\\n  <div {style}>\\n    <ElementHeading\\n      {element}\\n      style=\\"font-size: min(3vw, 3em); grid-column: 1/-1; margin: auto 0 0;\\"\\n    />\\n\\n    <section>\\n      <p>\\n        {$_('units.atomicMass.name')}\\n        <abbr title={$_('units.atomicMass.tip')}>({$_('units.atomicMass.unit')})</abbr>\\n      </p>\\n      <strong>\\n        <Icon icon=\\"mdi:weight\\" />\\n        {pretty_num(element.atomic_mass)}\\n      </strong>\\n    </section>\\n    <section>\\n      <p>\\n        {$_('units.density.name')}\\n        <abbr title={$_('units.density.tip')}>({$_('units.density.unit')})</abbr>\\n      </p>\\n      <strong>\\n        <Icon icon=\\"ion:scale-outline\\" />\\n        {pretty_num(element.density)}\\n      </strong>\\n    </section>\\n    <section>\\n      <p>{$_('phase.title')}</p>\\n      <strong>\\n        <Icon icon={icon_phase_map[element.phase]} />\\n        {$_('phase.' + element.phase)}</strong\\n      >\\n    </section>\\n    <section>\\n      <p>{$_('year.title')}</p>\\n      <strong>\\n        <Icon icon=\\"material-symbols:event-available\\" />\\n        {Number.isInteger(element.year) ? element.year : $_(\`year.\${element.year}\`)}\\n      </strong>\\n    </section>\\n  </div>\\n{:else}\\n  <h3 style=\\"text-align: center;\\">Try hovering an element!</h3>\\n{/if}\\n\\n<style>\\n  div {\\n    display: grid;\\n    grid-template: auto auto / repeat(4, 1fr);\\n    place-items: center;\\n    text-align: center;\\n    container-type: inline-size;\\n  }\\n  div > section > strong {\\n    display: block;\\n    margin-top: 1ex;\\n    font-size: 3.5cqw;\\n  }\\n  div > section > p {\\n    margin: 0;\\n    font-weight: lighter;\\n    font-size: 3cqw;\\n  }\\n  div > section > p > abbr {\\n    font-size: 2cqw;\\n    text-decoration: none;\\n  }\\n  h3 {\\n    font-size: clamp(9pt, 3vw, 20pt);\\n    white-space: nowrap;\\n    align-self: center;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0DE,+DAAI,CACF,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACzC,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,WAClB,CACA,kBAAG,CAAG,sBAAO,CAAG,oCAAO,CACrB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,MACb,CACA,kBAAG,CAAG,sBAAO,CAAG,+BAAE,CAChB,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,IACb,CACA,kBAAG,CAAG,sBAAO,CAAG,gBAAC,CAAG,mBAAK,CACvB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,IACnB,CACA,8DAAG,CACD,SAAS,CAAE,MAAM,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MACd"}`
};
const ElementStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { element } = $$props;
  let { style = `` } = $$props;
  const icon_phase_map = {
    Solid: `mdi:cube-outline`,
    Liquid: `mdi:water-outline`,
    Gas: `mdi:gas-cylinder`
  };
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  $$unsubscribe__();
  return `${element ? `<div${add_attribute("style", style, 0)} class="svelte-1s2arnr">${validate_component(ElementHeading, "ElementHeading").$$render(
    $$result,
    {
      element,
      style: "font-size: min(3vw, 3em); grid-column: 1/-1; margin: auto 0 0;"
    },
    {},
    {}
  )} <section class="svelte-1s2arnr"><p class="svelte-1s2arnr">${escape($_("units.atomicMass.name"))} <abbr${add_attribute("title", $_("units.atomicMass.tip"), 0)} class="svelte-1s2arnr">(${escape($_("units.atomicMass.unit"))})</abbr></p> <strong class="svelte-1s2arnr">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "mdi:weight" }, {}, {})} ${escape(pretty_num(element.atomic_mass))}</strong></section> <section class="svelte-1s2arnr"><p class="svelte-1s2arnr">${escape($_("units.density.name"))} <abbr${add_attribute("title", $_("units.density.tip"), 0)} class="svelte-1s2arnr">(${escape($_("units.density.unit"))})</abbr></p> <strong class="svelte-1s2arnr">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "ion:scale-outline" }, {}, {})} ${escape(pretty_num(element.density))}</strong></section> <section class="svelte-1s2arnr"><p class="svelte-1s2arnr">${escape($_("phase.title"))}</p> <strong class="svelte-1s2arnr">${validate_component(Icon_1, "Icon").$$render($$result, { icon: icon_phase_map[element.phase] }, {}, {})} ${escape($_("phase." + element.phase))}</strong></section> <section class="svelte-1s2arnr"><p class="svelte-1s2arnr">${escape($_("year.title"))}</p> <strong class="svelte-1s2arnr">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "material-symbols:event-available" }, {}, {})} ${escape(Number.isInteger(element.year) ? element.year : $_(`year.${element.year}`))}</strong></section></div>` : `<h3 style="text-align: center;" class="svelte-1s2arnr" data-svelte-h="svelte-cxsl0y">Try hovering an element!</h3>`}`;
});
const css$1 = {
  code: "div.grid.svelte-rdjzdx.svelte-rdjzdx.svelte-rdjzdx{display:grid;grid-template-columns:repeat(auto-fill, minmax(12em, 1fr));place-content:center;gap:var(--grid-gap, 7pt);max-width:var(--grid-max-width, 70em);margin:2em auto;justify-self:center}div.grid.svelte-rdjzdx>label.svelte-rdjzdx.svelte-rdjzdx{padding:var(--label-padding, 1pt 6pt);display:flex;align-items:center;gap:var(--label-gap, 4pt);border-radius:3pt;text-transform:capitalize;font-weight:lighter;cursor:pointer}div.grid.svelte-rdjzdx>label.svelte-rdjzdx.svelte-rdjzdx:hover{background-color:rgba(255, 255, 255, 0.1)}div.grid.svelte-rdjzdx>label.svelte-rdjzdx>input.svelte-rdjzdx{height:var(--input-color-height, 3em);width:var(--input-color-width, 3em);min-height:var(--input-color-min-height, var(--input-color-height, 3em));min-width:var(--input-color-min-width, var(--input-color-width, 3em));border:none;background-color:transparent;cursor:pointer;aspect-ratio:1}h2.svelte-rdjzdx.svelte-rdjzdx.svelte-rdjzdx{text-align:center}h2.svelte-rdjzdx>button.svelte-rdjzdx.svelte-rdjzdx{background:none;font-size:1.2em}label.svelte-rdjzdx.svelte-rdjzdx.svelte-rdjzdx{max-width:16em}label.svelte-rdjzdx>button.svelte-rdjzdx.svelte-rdjzdx{background:none;color:var(--text-color);opacity:0;transition:0.3s;border-radius:2pt;margin-left:auto}label.svelte-rdjzdx:hover>button.svelte-rdjzdx.svelte-rdjzdx{opacity:0.8}label.svelte-rdjzdx>button.svelte-rdjzdx.svelte-rdjzdx:hover{background-color:rgba(255, 255, 255, 0.2)}",
  map: '{"version":3,"file":"ColorCustomizer.svelte","sources":["ColorCustomizer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { default_category_colors } from \'$lib/colors\';\\nimport { active_category, category_colors } from \'$lib/stores\';\\nimport { fade } from \'svelte/transition\';\\nimport { Icon } from \'..\';\\nexport let open = false;\\nexport let collapsible = true;\\n$: if (typeof document !== `undefined`) {\\n    for (const [key, val] of Object.entries($category_colors)) {\\n        document.documentElement.style.setProperty(`--${key}-bg-color`, val);\\n    }\\n}\\n<\/script>\\n\\n<slot name=\\"title\\">\\n  <h2 transition:fade>\\n    <button\\n      on:click={() => (open = !open)}\\n      on:keyup={(e) => [`Enter`, ` `].includes(e.key) && (open = !open)}\\n      title={!open && collapsible ? `Click to open color picker` : null}\\n      style:cursor={collapsible ? `pointer` : `default`}\\n    >\\n      <Icon icon=\\"ion:color-palette\\" />\\n      Customize Colors\\n    </button>\\n  </h2>\\n</slot>\\n<div class=\\"grid\\" transition:fade>\\n  {#if open || !collapsible}\\n    {#each Object.keys($category_colors) as category}\\n      <label\\n        for=\\"{category}-color\\"\\n        transition:fade={{ duration: 200 }}\\n        on:mouseenter={() => ($active_category = category)}\\n        on:focus={() => ($active_category = category)}\\n        on:mouseleave={() => ($active_category = null)}\\n        on:blur={() => ($active_category = null)}\\n      >\\n        <input\\n          type=\\"color\\"\\n          id=\\"{category}-color\\"\\n          bind:value={$category_colors[category]}\\n        />\\n        {category.replaceAll(`-`, ` `)}\\n        {#if $category_colors[category] !== default_category_colors[category]}\\n          <button\\n            on:click|preventDefault={() =>\\n              ($category_colors[category] = default_category_colors[category])}\\n          >\\n            reset\\n          </button>\\n        {/if}\\n      </label>\\n    {/each}\\n  {/if}\\n</div>\\n\\n<style>\\n  div.grid {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));\\n    place-content: center;\\n    gap: var(--grid-gap, 7pt);\\n    max-width: var(--grid-max-width, 70em);\\n    margin: 2em auto;\\n    justify-self: center;\\n  }\\n  div.grid > label {\\n    padding: var(--label-padding, 1pt 6pt);\\n    display: flex;\\n    align-items: center;\\n    gap: var(--label-gap, 4pt);\\n    border-radius: 3pt;\\n    text-transform: capitalize;\\n    font-weight: lighter;\\n    cursor: pointer;\\n  }\\n  div.grid > label:hover {\\n    background-color: rgba(255, 255, 255, 0.1);\\n  }\\n  div.grid > label > input {\\n    height: var(--input-color-height, 3em);\\n    width: var(--input-color-width, 3em);\\n    min-height: var(--input-color-min-height, var(--input-color-height, 3em));\\n    min-width: var(--input-color-min-width, var(--input-color-width, 3em));\\n    border: none;\\n    background-color: transparent;\\n    cursor: pointer;\\n    aspect-ratio: 1;\\n  }\\n  h2 {\\n    text-align: center;\\n  }\\n  h2 > button {\\n    background: none;\\n    font-size: 1.2em;\\n  }\\n  label {\\n    max-width: 16em;\\n  }\\n  label > button {\\n    background: none;\\n    color: var(--text-color);\\n    opacity: 0;\\n    transition: 0.3s;\\n    border-radius: 2pt;\\n    margin-left: auto;\\n  }\\n  label:hover > button {\\n    opacity: 0.8;\\n  }\\n  label > button:hover {\\n    background-color: rgba(255, 255, 255, 0.2);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyDE,GAAG,+CAAM,CACP,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,aAAa,CAAE,MAAM,CACrB,GAAG,CAAE,IAAI,UAAU,CAAC,IAAI,CAAC,CACzB,SAAS,CAAE,IAAI,gBAAgB,CAAC,KAAK,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,YAAY,CAAE,MAChB,CACA,GAAG,mBAAK,CAAG,iCAAM,CACf,OAAO,CAAE,IAAI,eAAe,CAAC,QAAQ,CAAC,CACtC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,WAAW,CAAC,IAAI,CAAC,CAC1B,aAAa,CAAE,GAAG,CAClB,cAAc,CAAE,UAAU,CAC1B,WAAW,CAAE,OAAO,CACpB,MAAM,CAAE,OACV,CACA,GAAG,mBAAK,CAAG,iCAAK,MAAO,CACrB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CACA,GAAG,mBAAK,CAAG,mBAAK,CAAG,mBAAM,CACvB,MAAM,CAAE,IAAI,oBAAoB,CAAC,IAAI,CAAC,CACtC,KAAK,CAAE,IAAI,mBAAmB,CAAC,IAAI,CAAC,CACpC,UAAU,CAAE,IAAI,wBAAwB,CAAC,+BAA+B,CAAC,CACzE,SAAS,CAAE,IAAI,uBAAuB,CAAC,8BAA8B,CAAC,CACtE,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,OAAO,CACf,YAAY,CAAE,CAChB,CACA,4CAAG,CACD,UAAU,CAAE,MACd,CACA,gBAAE,CAAG,kCAAO,CACV,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,KACb,CACA,+CAAM,CACJ,SAAS,CAAE,IACb,CACA,mBAAK,CAAG,kCAAO,CACb,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,IACf,CACA,mBAAK,MAAM,CAAG,kCAAO,CACnB,OAAO,CAAE,GACX,CACA,mBAAK,CAAG,kCAAM,MAAO,CACnB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}'
};
const ColorCustomizer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $category_colors, $$unsubscribe_category_colors;
  let $$unsubscribe_active_category;
  $$unsubscribe_category_colors = subscribe(category_colors, (value) => $category_colors = value);
  $$unsubscribe_active_category = subscribe(active_category, (value) => value);
  let { open = false } = $$props;
  let { collapsible = true } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.collapsible === void 0 && $$bindings.collapsible && collapsible !== void 0)
    $$bindings.collapsible(collapsible);
  $$result.css.add(css$1);
  {
    if (typeof document !== `undefined`) {
      for (const [key, val] of Object.entries($category_colors)) {
        document.documentElement.style.setProperty(`--${key}-bg-color`, val);
      }
    }
  }
  $$unsubscribe_category_colors();
  $$unsubscribe_active_category();
  return `${slots.title ? slots.title({}) : ` <h2 class="svelte-rdjzdx"><button${add_attribute(
    "title",
    !open && collapsible ? `Click to open color picker` : null,
    0
  )} class="svelte-rdjzdx"${add_styles({
    "cursor": collapsible ? `pointer` : `default`
  })}>${validate_component(Icon_1, "Icon").$$render($$result, { icon: "ion:color-palette" }, {}, {})}
      Customize Colors</button></h2> `} <div class="grid svelte-rdjzdx">${open || !collapsible ? `${each(Object.keys($category_colors), (category) => {
    return `<label for="${escape(category, true) + "-color"}" class="svelte-rdjzdx"><input type="color" id="${escape(category, true) + "-color"}" class="svelte-rdjzdx"${add_attribute("value", $category_colors[category], 0)}> ${escape(category.replaceAll(`-`, ` `))} ${$category_colors[category] !== default_category_colors[category] ? `<button class="svelte-rdjzdx" data-svelte-h="svelte-mvjkys">reset
          </button>` : ``} </label>`;
  })}` : ``} </div>`;
});
const css = {
  code: "form.svelte-12zdm56{display:flex;place-content:center;gap:1em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { BohrAtom, ColorCustomizer, ColorScaleSelect, ElementScatter, ElementStats, PeriodicTable, PropertySelect, TableInset, element_data, } from '$lib';\\nimport { property_labels } from '$lib/labels';\\nimport { active_category, active_element, last_element } from '$lib/stores';\\nimport { _ } from 'svelte-i18n';\\nlet window_width;\\nlet color_scale;\\nlet heatmap_key = null;\\n$: heatmap_values = heatmap_key ? element_data.map((el) => el[heatmap_key]) : [];\\n$: [y_label, y_unit] = property_labels[heatmap_key] ?? [];\\nexport const snapshot = {\\n    capture: () => ({ color_scale }),\\n    restore: (values) => ({ color_scale } = values),\\n};\\n<\/script>\\n\\n<svelte:window bind:innerWidth={window_width} />\\n\\n<form>\\n  <PropertySelect empty id=\\"heatmap-select\\" bind:key={heatmap_key} />\\n  {#if heatmap_key}\\n    <ColorScaleSelect\\n      bind:value={color_scale}\\n      minSelect={1}\\n      cbar_props={{ range: [Math.min(...heatmap_values), Math.max(...heatmap_values)] }}\\n    />\\n  {/if}\\n</form>\\n\\n<PeriodicTable\\n  tile_props={{ show_name: window_width > 1000 }}\\n  {heatmap_values}\\n  style=\\"margin: 4em auto; max-width: min(85vw, 1400px);\\"\\n  bind:color_scale\\n  bind:active_element={$active_element}\\n  bind:active_category={$active_category}\\n  links=\\"name\\"\\n>\\n  {#if $last_element && window_width > 1100}\\n    {@const { shells, name, symbol } = $last_element}\\n    <a href=\\"bohr-atoms\\" style=\\"position: absolute; top: -240px; transform: scale(0.8)\\">\\n      <BohrAtom {shells} name={\`\${$_('bohrModel.pre')}\${$_(\`element.name.\${name}\`)}\${$_('bohrModel.post')}\`} {symbol} style=\\"width: 250px\\" />\\n    </a>\\n  {/if}\\n  <!-- set max-height to ensure ScatterPlot is never taller than 3 PeriodicTable\\n  rows so it doesn't stretch the table. assumes PeriodicTable has 18 rows -->\\n  <TableInset slot=\\"inset\\">\\n    {#if heatmap_key}\\n      <ElementScatter\\n        y_lim={[0, null]}\\n        y={element_data.map((el) => el[heatmap_key])}\\n        y_label={$_(y_label)}\\n        y_unit={y_unit ? $_(\`unitsByName.\${y_unit}\`) : y_unit}\\n        on:change={(e) => ($active_element = element_data[e.detail.x - 1])}\\n        x_label_yshift={42}\\n        {color_scale}\\n        style=\\"max-height: calc(100cqw / 10 * 3);\\"\\n      />\\n    {:else}\\n      <ElementStats element={$last_element} />\\n    {/if}\\n  </TableInset>\\n</PeriodicTable>\\n\\n{#if !heatmap_key}\\n  <ColorCustomizer collapsible={false} />\\n{/if}\\n\\n<style>\\n  form {\\n    display: flex;\\n    place-content: center;\\n    gap: 1em;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoEE,mBAAK,CACH,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,GAAG,CAAE,GACP"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heatmap_values;
  let y_label;
  let y_unit;
  let $active_element, $$unsubscribe_active_element;
  let $active_category, $$unsubscribe_active_category;
  let $_, $$unsubscribe__;
  let $last_element, $$unsubscribe_last_element;
  $$unsubscribe_active_element = subscribe(active_element, (value) => $active_element = value);
  $$unsubscribe_active_category = subscribe(active_category, (value) => $active_category = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$unsubscribe_last_element = subscribe(last_element, (value) => $last_element = value);
  let window_width;
  let color_scale;
  let heatmap_key = null;
  const snapshot = {
    capture: () => ({ color_scale }),
    restore: (values) => ({ color_scale } = values)
  };
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    heatmap_values = heatmap_key ? element_data.map((el) => el[heatmap_key]) : [];
    [y_label, y_unit] = property_labels[heatmap_key] ?? [];
    $$rendered = ` <form class="svelte-12zdm56">${validate_component(PropertySelect, "PropertySelect").$$render(
      $$result,
      {
        empty: true,
        id: "heatmap-select",
        key: heatmap_key
      },
      {
        key: ($$value) => {
          heatmap_key = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${heatmap_key ? `${validate_component(ColorScaleSelect, "ColorScaleSelect").$$render(
      $$result,
      {
        minSelect: 1,
        cbar_props: {
          range: [Math.min(...heatmap_values), Math.max(...heatmap_values)]
        },
        value: color_scale
      },
      {
        value: ($$value) => {
          color_scale = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</form> ${validate_component(PeriodicTable, "PeriodicTable").$$render(
      $$result,
      {
        tile_props: { show_name: window_width > 1e3 },
        heatmap_values,
        style: "margin: 4em auto; max-width: min(85vw, 1400px);",
        links: "name",
        color_scale,
        active_element: $active_element,
        active_category: $active_category
      },
      {
        color_scale: ($$value) => {
          color_scale = $$value;
          $$settled = false;
        },
        active_element: ($$value) => {
          $active_element = $$value;
          $$settled = false;
        },
        active_category: ($$value) => {
          $active_category = $$value;
          $$settled = false;
        }
      },
      {
        inset: () => {
          return `${validate_component(TableInset, "TableInset").$$render($$result, { slot: "inset" }, {}, {
            default: () => {
              return `${heatmap_key ? `${validate_component(ElementScatter, "ElementScatter").$$render(
                $$result,
                {
                  y_lim: [0, null],
                  y: element_data.map((el) => el[heatmap_key]),
                  y_label: $_(y_label),
                  y_unit: y_unit ? $_(`unitsByName.${y_unit}`) : y_unit,
                  x_label_yshift: 42,
                  color_scale,
                  style: "max-height: calc(100cqw / 10 * 3);"
                },
                {},
                {}
              )}` : `${validate_component(ElementStats, "ElementStats").$$render($$result, { element: $last_element }, {}, {})}`}`;
            }
          })}`;
        },
        default: () => {
          return `${$last_element && window_width > 1100 ? (() => {
            let { shells, name, symbol } = $last_element;
            return ` <a href="bohr-atoms" style="position: absolute; top: -240px; transform: scale(0.8)">${validate_component(BohrAtom, "BohrAtom").$$render(
              $$result,
              {
                shells,
                name: `${$_("bohrModel.pre")}${$_(`element.name.${name}`)}${$_("bohrModel.post")}`,
                symbol,
                style: "width: 250px"
              },
              {},
              {}
            )}</a>`;
          })() : ``} `;
        }
      }
    )} ${!heatmap_key ? `${validate_component(ColorCustomizer, "ColorCustomizer").$$render($$result, { collapsible: false }, {}, {})}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_active_element();
  $$unsubscribe_active_category();
  $$unsubscribe__();
  $$unsubscribe_last_element();
  return $$rendered;
});
export {
  Page as default
};
