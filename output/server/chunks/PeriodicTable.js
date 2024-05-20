import { g as globals } from "./globals.js";
import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, d as add_styles, h as each } from "./ssr.js";
import "./client.js";
import { a as elem_symbols, e as element_data } from "./index3.js";
import * as d3sc from "d3-scale-chromatic";
import { E as ElementTile } from "./ElementTile.js";
import "./ru.js";
import { I as Icon_1 } from "./Icon2.js";
const css$1 = {
  code: "img.svelte-16azrly.svelte-16azrly{width:100%;object-fit:cover;margin:0;border-radius:4pt}div.svelte-16azrly.svelte-16azrly{aspect-ratio:1;text-align:center;display:flex;padding:3pt;box-sizing:border-box;place-items:center;background-image:linear-gradient(\n      to top left,\n      rgba(0, 100, 0, 0.5),\n      rgba(0, 0, 100, 0.3)\n    );color:var(--text-color);border-radius:4pt;width:100%;container-type:inline-size}div.svelte-16azrly>span.svelte-16azrly{font-size:15cqw}",
  map: '{"version":3,"file":"ElementPhoto.svelte","sources":["ElementPhoto.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Icon } from \'$lib\';\\nexport let element;\\n// style applies to both img and missing_msg div\\nexport let style = null;\\nexport let missing_msg = `No image for `;\\n$: ({ name, number } = element ?? {});\\n$: file = `elements/${number}-${name?.toLowerCase()}.avif`;\\nlet hidden = false;\\n$: file, (hidden = false); // reset hidden to false when src changes\\n<\/script>\\n\\n{#if name && number}\\n  <img\\n    src=\\"https://github.com/janosh/elementari/raw/main/static/{file}\\"\\n    alt={name}\\n    on:error={() => (hidden = true)}\\n    {style}\\n    {hidden}\\n  />\\n  {#if hidden && missing_msg}\\n    <div {style}>\\n      <span>\\n        <Icon icon=\\"ic:outline-image-not-supported\\" />{missing_msg}\\n        {name}\\n      </span>\\n    </div>\\n  {/if}\\n{/if}\\n\\n<style>\\n  img {\\n    width: 100%;\\n    object-fit: cover;\\n    margin: 0;\\n    border-radius: 4pt;\\n  }\\n  div {\\n    aspect-ratio: 1;\\n    text-align: center;\\n    display: flex;\\n    padding: 3pt;\\n    box-sizing: border-box;\\n    place-items: center;\\n    background-image: linear-gradient(\\n      to top left,\\n      rgba(0, 100, 0, 0.5),\\n      rgba(0, 0, 100, 0.3)\\n    );\\n    color: var(--text-color);\\n    border-radius: 4pt;\\n    width: 100%;\\n    container-type: inline-size;\\n  }\\n  div > span {\\n    font-size: 15cqw;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8BE,iCAAI,CACF,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,GACjB,CACA,iCAAI,CACF,YAAY,CAAE,CAAC,CACf,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE;AACtB,MAAM,EAAE,CAAC,GAAG,CAAC,IAAI,CAAC;AAClB,MAAM,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC;AAC3B,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC;AAC1B,KAAK,CACD,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,WAClB,CACA,kBAAG,CAAG,mBAAK,CACT,SAAS,CAAE,KACb"}'
};
const ElementPhoto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let number;
  let file;
  let { element } = $$props;
  let { style = null } = $$props;
  let { missing_msg = `No image for ` } = $$props;
  let hidden = false;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.missing_msg === void 0 && $$bindings.missing_msg && missing_msg !== void 0)
    $$bindings.missing_msg(missing_msg);
  $$result.css.add(css$1);
  ({ name, number } = element ?? {});
  file = `elements/${number}-${name?.toLowerCase()}.avif`;
  {
    hidden = false;
  }
  return `${name && number ? `<img src="${"https://github.com/janosh/elementari/raw/main/static/" + escape(file, true)}"${add_attribute("alt", name, 0)}${add_attribute("style", style, 0)} ${hidden ? "hidden" : ""} class="svelte-16azrly"> ${hidden && missing_msg ? `<div${add_attribute("style", style, 0)} class="svelte-16azrly"><span class="svelte-16azrly">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "ic:outline-image-not-supported" }, {}, {})}${escape(missing_msg)} ${escape(name)}</span></div>` : ``}` : ``}`;
});
const { Object: Object_1 } = globals;
const css = {
  code: ".periodic-table-container.svelte-txkh5z{container-type:inline-size}div.periodic-table.svelte-txkh5z{display:grid;grid-template-columns:repeat(18, 1fr);position:relative;container-type:inline-size}div.spacer.svelte-txkh5z{grid-row:8}",
  map: '{"version":3,"file":"PeriodicTable.svelte","sources":["PeriodicTable.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { goto } from \'$app/navigation\';\\nimport { ElementPhoto, ElementTile, elem_symbols } from \'$lib\';\\nimport element_data from \'$lib/element/data\';\\nimport * as d3sc from \'d3-scale-chromatic\';\\nexport let tile_props = {};\\nexport let show_photo = true;\\nexport let style = ``;\\nexport let disabled = false; // disable hover and click events from updating active_element\\n// either array of length 118 (one heat value for each element) or object with\\n// element symbol as key and heat value as value\\nexport let heatmap_values = [];\\n// links is either string with element property (name, symbol, number, ...) to use as link,\\n// or object with mapping element symbols to link\\nexport let links = null;\\nexport let log = false;\\nexport let color_scale = `Viridis`;\\nexport let active_element = null;\\nexport let active_category = null;\\nexport let gap = `0.3cqw`; // gap between element tiles, default is 0.3% of container width\\nexport let inner_transition_metal_offset = 0.5;\\nconst default_lanth_act_tiles = [\\n    {\\n        name: `Lanthanides`,\\n        symbol: `La-Lu`,\\n        number: `57-71`,\\n        category: `lanthanide`,\\n    },\\n    {\\n        name: `Actinides`,\\n        symbol: `Ac-Lr`,\\n        number: `89-103`,\\n        category: `actinide`,\\n    },\\n];\\n// show lanthanides and actinides as tiles\\nexport let lanth_act_tiles = tile_props?.show_symbol == false ? [] : default_lanth_act_tiles;\\nexport let lanth_act_style = ``;\\nexport let color_scale_range = [null, null];\\nexport let color_overrides = {};\\nexport let labels = {};\\nlet heat_values = [];\\n$: if (Array.isArray(heatmap_values)) {\\n    if (heatmap_values.length > 118) {\\n        console.error(`heatmap_values is an array of numbers, length should be 118 or less, one for ` +\\n            `each element possibly omitting elements at the end, got ${heatmap_values.length}`);\\n    }\\n    else\\n        heat_values = heatmap_values;\\n}\\nelse if (typeof heatmap_values == `object`) {\\n    const bad_keys = Object.keys(heatmap_values).filter((key) => !elem_symbols.includes(key));\\n    if (bad_keys.length > 0) {\\n        console.error(`heatmap_values is an object, keys should be element symbols, got ${bad_keys}`);\\n    }\\n    else\\n        heat_values = elem_symbols.map((symbol) => heatmap_values[symbol]);\\n}\\n$: set_active_element = (element) => () => {\\n    if (disabled)\\n        return;\\n    active_element = element;\\n};\\nlet window_width;\\nfunction handle_key(event) {\\n    if (disabled || !active_element)\\n        return;\\n    if (event.key == `Enter`)\\n        return goto(active_element.name.toLowerCase());\\n    if (![`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`].includes(event.key))\\n        return;\\n    event.preventDefault(); // prevent scrolling the page\\n    event.stopPropagation();\\n    // change the active element in the periodic table with arrow keys\\n    // TODO doesn\'t allow navigating to lanthanides and actinides yet\\n    const { column, row } = active_element;\\n    active_element =\\n        element_data.find((elem) => {\\n            return {\\n                ArrowUp: elem.column == column && elem.row == row - 1,\\n                ArrowDown: elem.column == column && elem.row == row + 1,\\n                ArrowLeft: elem.column == column - 1 && elem.row == row,\\n                ArrowRight: elem.column == column + 1 && elem.row == row,\\n            }[event.key];\\n        }) ?? active_element;\\n}\\n$: c_scale =\\n    typeof color_scale == `string` ? d3sc[`interpolate${color_scale}`] : color_scale;\\n$: cs_min = color_scale_range[0] ?? Math.min(...heat_values);\\n$: cs_max = color_scale_range[1] ?? Math.max(...heat_values);\\n$: bg_color = (value) => {\\n    if (!heat_values?.length || !c_scale)\\n        return null;\\n    if (!value || (log && value <= 0))\\n        return `transparent`;\\n    // map value to [0, 1] range\\n    if (log)\\n        value = Math.log(value - cs_min + 1) / Math.log(cs_max - cs_min + 1);\\n    else\\n        value = (value - cs_min) / (cs_max - cs_min);\\n    return c_scale(value);\\n};\\n<\/script>\\n\\n<svelte:window bind:innerWidth={window_width} on:keydown={handle_key} />\\n\\n<div class=\\"periodic-table-container\\" {style}>\\n  <div class=\\"periodic-table\\" style:gap>\\n    <slot name=\\"inset\\" {active_element} />\\n    {#each element_data as element, idx}\\n      {@const { column, row, category, name, symbol } = element}\\n      {@const value = heat_values[idx]}\\n      {@const active =\\n        active_category === category.replaceAll(` `, `-`) ||\\n        active_element?.name === name}\\n      <ElementTile\\n        {element}\\n        href={links\\n          ? typeof links == `string`\\n            ? `${element[links]}`.toLowerCase()\\n            : links[symbol]\\n          : null}\\n        style=\\"grid-column: {column}; grid-row: {row};\\"\\n        {value}\\n        bg_color={color_overrides[symbol] ?? bg_color(value)}\\n        {active}\\n        label={labels[symbol]}\\n        {...tile_props}\\n        on:mouseenter={set_active_element(element)}\\n        on:mouseleave={set_active_element(null)}\\n        on:focus={set_active_element(element)}\\n        on:blur={set_active_element(null)}\\n        on:click\\n        on:mouseenter\\n        on:mouseleave\\n      />\\n    {/each}\\n    <!-- show tile for lanthanides and actinides with text La-Lu and Ac-Lr respectively -->\\n    {#each lanth_act_tiles || [] as element, idx}\\n      <ElementTile\\n        {element}\\n        style=\\"opacity: 0.8; grid-column: 3; grid-row: {6 + idx}; {lanth_act_style};\\"\\n        on:mouseenter={() => (active_category = element.category)}\\n        on:mouseleave={() => (active_category = null)}\\n        symbol_style=\\"font-size: 30cqw;\\"\\n      />\\n    {/each}\\n    {#if inner_transition_metal_offset}\\n      <!-- provide vertical offset for lanthanides + actinides -->\\n      <div class=\\"spacer\\" style:aspect-ratio={1 / inner_transition_metal_offset} />\\n    {/if}\\n\\n    <slot name=\\"bottom-left-inset\\" {active_element}>\\n      {#if show_photo}\\n        <ElementPhoto element={active_element} style=\\"grid-area: 9/1/span 2/span 2;\\" />\\n      {/if}\\n    </slot>\\n    <slot />\\n  </div>\\n</div>\\n\\n<style>\\n  .periodic-table-container {\\n    /* needed for gap: 0.3cqw; to work */\\n    container-type: inline-size;\\n  }\\n  div.periodic-table {\\n    display: grid;\\n    grid-template-columns: repeat(18, 1fr);\\n    position: relative;\\n    container-type: inline-size;\\n  }\\n  div.spacer {\\n    grid-row: 8;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiKE,uCAA0B,CAExB,cAAc,CAAE,WAClB,CACA,GAAG,6BAAgB,CACjB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,EAAE,CAAC,CAAC,GAAG,CAAC,CACtC,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,WAClB,CACA,GAAG,qBAAQ,CACT,QAAQ,CAAE,CACZ"}'
};
const PeriodicTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let c_scale;
  let cs_min;
  let cs_max;
  let bg_color;
  let { tile_props = {} } = $$props;
  let { show_photo = true } = $$props;
  let { style = `` } = $$props;
  let { disabled = false } = $$props;
  let { heatmap_values = [] } = $$props;
  let { links = null } = $$props;
  let { log = false } = $$props;
  let { color_scale = `Viridis` } = $$props;
  let { active_element = null } = $$props;
  let { active_category = null } = $$props;
  let { gap = `0.3cqw` } = $$props;
  let { inner_transition_metal_offset = 0.5 } = $$props;
  const default_lanth_act_tiles = [
    {
      name: `Lanthanides`,
      symbol: `La-Lu`,
      number: `57-71`,
      category: `lanthanide`
    },
    {
      name: `Actinides`,
      symbol: `Ac-Lr`,
      number: `89-103`,
      category: `actinide`
    }
  ];
  let { lanth_act_tiles = tile_props?.show_symbol == false ? [] : default_lanth_act_tiles } = $$props;
  let { lanth_act_style = `` } = $$props;
  let { color_scale_range = [null, null] } = $$props;
  let { color_overrides = {} } = $$props;
  let { labels = {} } = $$props;
  let heat_values = [];
  if ($$props.tile_props === void 0 && $$bindings.tile_props && tile_props !== void 0)
    $$bindings.tile_props(tile_props);
  if ($$props.show_photo === void 0 && $$bindings.show_photo && show_photo !== void 0)
    $$bindings.show_photo(show_photo);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.heatmap_values === void 0 && $$bindings.heatmap_values && heatmap_values !== void 0)
    $$bindings.heatmap_values(heatmap_values);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.log === void 0 && $$bindings.log && log !== void 0)
    $$bindings.log(log);
  if ($$props.color_scale === void 0 && $$bindings.color_scale && color_scale !== void 0)
    $$bindings.color_scale(color_scale);
  if ($$props.active_element === void 0 && $$bindings.active_element && active_element !== void 0)
    $$bindings.active_element(active_element);
  if ($$props.active_category === void 0 && $$bindings.active_category && active_category !== void 0)
    $$bindings.active_category(active_category);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.inner_transition_metal_offset === void 0 && $$bindings.inner_transition_metal_offset && inner_transition_metal_offset !== void 0)
    $$bindings.inner_transition_metal_offset(inner_transition_metal_offset);
  if ($$props.lanth_act_tiles === void 0 && $$bindings.lanth_act_tiles && lanth_act_tiles !== void 0)
    $$bindings.lanth_act_tiles(lanth_act_tiles);
  if ($$props.lanth_act_style === void 0 && $$bindings.lanth_act_style && lanth_act_style !== void 0)
    $$bindings.lanth_act_style(lanth_act_style);
  if ($$props.color_scale_range === void 0 && $$bindings.color_scale_range && color_scale_range !== void 0)
    $$bindings.color_scale_range(color_scale_range);
  if ($$props.color_overrides === void 0 && $$bindings.color_overrides && color_overrides !== void 0)
    $$bindings.color_overrides(color_overrides);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  $$result.css.add(css);
  {
    if (Array.isArray(heatmap_values)) {
      if (heatmap_values.length > 118) {
        console.error(`heatmap_values is an array of numbers, length should be 118 or less, one for each element possibly omitting elements at the end, got ${heatmap_values.length}`);
      } else
        heat_values = heatmap_values;
    } else if (typeof heatmap_values == `object`) {
      const bad_keys = Object.keys(heatmap_values).filter((key) => !elem_symbols.includes(key));
      if (bad_keys.length > 0) {
        console.error(`heatmap_values is an object, keys should be element symbols, got ${bad_keys}`);
      } else
        heat_values = elem_symbols.map((symbol) => heatmap_values[symbol]);
    }
  }
  c_scale = typeof color_scale == `string` ? d3sc[`interpolate${color_scale}`] : color_scale;
  cs_min = color_scale_range[0] ?? Math.min(...heat_values);
  cs_max = color_scale_range[1] ?? Math.max(...heat_values);
  bg_color = (value) => {
    if (!heat_values?.length || !c_scale)
      return null;
    if (!value || log && value <= 0)
      return `transparent`;
    if (log)
      value = Math.log(value - cs_min + 1) / Math.log(cs_max - cs_min + 1);
    else
      value = (value - cs_min) / (cs_max - cs_min);
    return c_scale(value);
  };
  return ` <div class="periodic-table-container svelte-txkh5z"${add_attribute("style", style, 0)}><div class="periodic-table svelte-txkh5z"${add_styles({ gap })}>${slots.inset ? slots.inset({ active_element }) : ``} ${each(element_data, (element, idx) => {
    let { column, row, category, name, symbol } = element, value = heat_values[idx], active = active_category === category.replaceAll(` `, `-`) || active_element?.name === name;
    return `   ${validate_component(ElementTile, "ElementTile").$$render(
      $$result,
      Object_1.assign(
        {},
        { element },
        {
          href: links ? typeof links == `string` ? `${element[links]}`.toLowerCase() : links[symbol] : null
        },
        {
          style: "grid-column: " + column + "; grid-row: " + row + ";"
        },
        { value },
        {
          bg_color: color_overrides[symbol] ?? bg_color(value)
        },
        { active },
        { label: labels[symbol] },
        tile_props
      ),
      {},
      {}
    )}`;
  })}  ${each(lanth_act_tiles || [], (element, idx) => {
    return `${validate_component(ElementTile, "ElementTile").$$render(
      $$result,
      {
        element,
        style: "opacity: 0.8; grid-column: 3; grid-row: " + (6 + idx) + "; " + lanth_act_style + ";",
        symbol_style: "font-size: 30cqw;"
      },
      {},
      {}
    )}`;
  })} ${inner_transition_metal_offset ? ` <div class="spacer svelte-txkh5z"${add_styles({
    "aspect-ratio": 1 / inner_transition_metal_offset
  })}></div>` : ``} ${slots["bottom-left-inset"] ? slots["bottom-left-inset"]({ active_element }) : ` ${show_photo ? `${validate_component(ElementPhoto, "ElementPhoto").$$render(
    $$result,
    {
      element: active_element,
      style: "grid-area: 9/1/span 2/span 2;"
    },
    {},
    {}
  )}` : ``} `} ${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  ElementPhoto as E,
  PeriodicTable as P
};
