import { c as create_ssr_component, d as add_styles, f as merge_ssr_styles, e as escape, b as add_attribute, h as each, a as compute_rest_props, v as validate_component } from "./ssr.js";
import { g as globals } from "./globals.js";
import { p as pretty_num } from "./index3.js";
import * as d3sc from "d3-scale-chromatic";
import { M as MultiSelect } from "./MultiSelect.js";
import * as d3 from "d3-scale";
import "./ru.js";
import "d3-interpolate-path";
const css = {
  code: "div.colorbar.svelte-wfky5z.svelte-wfky5z.svelte-wfky5z{display:flex;box-sizing:border-box;place-items:center;gap:var(--cbar-gap, 5pt);margin:var(--cbar-margin);padding:var(--cbar-padding);width:var(--cbar-width);font-size:var(--cbar-font-size, 10pt)}div.colorbar.svelte-wfky5z>div.svelte-wfky5z.svelte-wfky5z{position:relative;height:var(--cbar-height, 14px);width:var(--cbar-width, 140px);border-radius:var(--cbar-border-radius, 2pt)}div.colorbar.svelte-wfky5z>div.svelte-wfky5z>span.svelte-wfky5z{position:absolute;transform:translate(-50%);font-weight:var(--cbar-tick-label-font-weight, lighter);font-size:var(--cbar-tick-label-font-size, --cbar-font-size);color:var(--cbar-tick-label-color);background:var(--cbar-tick-label-bg)}",
  map: '{"version":3,"file":"ColorBar.svelte","sources":["ColorBar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { pretty_num } from \'$lib\';\\nimport * as d3 from \'d3-scale\';\\nimport * as d3sc from \'d3-scale-chromatic\';\\nexport let label = null;\\nexport let color_scale = `Viridis`;\\nexport let label_side = `left`;\\nexport let style = null;\\nexport let label_style = null;\\nexport let wrapper_style = null;\\nexport let tick_labels = 0;\\nexport let range = [0, 1];\\nexport let tick_side = `bottom`;\\n// TODO vertical not fully implemented yet\\nexport let orientation = `horizontal`;\\n// snap ticks to pretty, more readable values\\nexport let snap_ticks = true;\\n// at how many equidistant points to sample the color scale\\nexport let steps = 50;\\n// the new range of the color bar resulting from snapping ticks\\n// https://github.com/d3/d3-scale/issues/86\\nexport let nice_range = range;\\n$: if (tick_labels?.length == 0 ||\\n    typeof tick_labels == `number` ||\\n    range?.length > 0) {\\n    const n_ticks = Array.isArray(tick_labels) ? 5 : tick_labels;\\n    if (snap_ticks) {\\n        const scale = d3.scaleLinear().domain(range).nice(n_ticks);\\n        tick_labels = scale.ticks(n_ticks);\\n        nice_range = scale.domain();\\n    }\\n    else {\\n        tick_labels = [...Array(n_ticks).keys()].map((idx) => {\\n            const x = idx / (n_ticks - 1);\\n            return range[0] + x * (range[1] - range[0]);\\n        });\\n    }\\n}\\nconst valid_color_scale_keys = Object.keys(d3sc)\\n    .map((key) => key.split(`interpolate`)[1])\\n    .filter(Boolean)\\n    .join(`, `);\\n$: if (typeof color_scale == `string`) {\\n    if (`interpolate${color_scale}` in d3sc) {\\n        color_scale = d3sc[`interpolate${color_scale}`];\\n    }\\n    else {\\n        console.error(`Color scale \'${color_scale}\' not found, supported color scale names are ${valid_color_scale_keys}. Falling back on \'Viridis\'.`);\\n        color_scale = d3sc.interpolateViridis;\\n    }\\n}\\n$: grad_dir = { horizontal: `to right`, vertical: `to bottom` }[orientation];\\n$: ramped = [...Array(steps).keys()].map((_, idx) => color_scale?.(idx / steps));\\n$: flex_dir = {\\n    left: `row`,\\n    right: `row-reverse`,\\n    top: `column`,\\n    bottom: `column-reverse`,\\n}[label_side];\\n$: tick_pos = {\\n    bottom: `top: 100%`,\\n    top: `bottom: 100%`,\\n    center: `top: 50%; transform: translateY(-50%)`,\\n}[tick_side];\\n<\/script>\\n\\n<div style:flex-direction={flex_dir} style={wrapper_style} class=\\"colorbar\\">\\n  <!-- don\'t pass unsanitized user input into label! -->\\n  {#if label}<span style={label_style}>{@html label}</span>{/if}\\n  <div style:background=\\"linear-gradient({grad_dir}, {ramped})\\" {style}>\\n    {#each tick_labels || [] as tick_label, idx}\\n      <span style=\\"left: calc(100% * {idx} / {tick_labels?.length - 1}); {tick_pos}\\">\\n        {pretty_num(tick_label)}\\n      </span>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  div.colorbar {\\n    display: flex;\\n    box-sizing: border-box;\\n    place-items: center;\\n    gap: var(--cbar-gap, 5pt);\\n    margin: var(--cbar-margin);\\n    padding: var(--cbar-padding);\\n    width: var(--cbar-width);\\n    font-size: var(--cbar-font-size, 10pt);\\n  }\\n  div.colorbar > div {\\n    position: relative;\\n    height: var(--cbar-height, 14px);\\n    width: var(--cbar-width, 140px);\\n    border-radius: var(--cbar-border-radius, 2pt);\\n  }\\n  div.colorbar > div > span {\\n    position: absolute;\\n    transform: translate(-50%);\\n    font-weight: var(--cbar-tick-label-font-weight, lighter);\\n    font-size: var(--cbar-tick-label-font-size, --cbar-font-size);\\n    color: var(--cbar-tick-label-color);\\n    background: var(--cbar-tick-label-bg);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8EE,GAAG,mDAAU,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,UAAU,CAAC,IAAI,CAAC,CACzB,MAAM,CAAE,IAAI,aAAa,CAAC,CAC1B,OAAO,CAAE,IAAI,cAAc,CAAC,CAC5B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,gBAAgB,CAAC,KAAK,CACvC,CACA,GAAG,uBAAS,CAAG,+BAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAChC,KAAK,CAAE,IAAI,YAAY,CAAC,MAAM,CAAC,CAC/B,aAAa,CAAE,IAAI,oBAAoB,CAAC,IAAI,CAC9C,CACA,GAAG,uBAAS,CAAG,iBAAG,CAAG,kBAAK,CACxB,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,UAAU,IAAI,CAAC,CAC1B,WAAW,CAAE,IAAI,6BAA6B,CAAC,QAAQ,CAAC,CACxD,SAAS,CAAE,IAAI,2BAA2B,CAAC,iBAAiB,CAAC,CAC7D,KAAK,CAAE,IAAI,uBAAuB,CAAC,CACnC,UAAU,CAAE,IAAI,oBAAoB,CACtC"}'
};
const ColorBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let grad_dir;
  let ramped;
  let flex_dir;
  let tick_pos;
  let { label = null } = $$props;
  let { color_scale = `Viridis` } = $$props;
  let { label_side = `left` } = $$props;
  let { style = null } = $$props;
  let { label_style = null } = $$props;
  let { wrapper_style = null } = $$props;
  let { tick_labels = 0 } = $$props;
  let { range = [0, 1] } = $$props;
  let { tick_side = `bottom` } = $$props;
  let { orientation = `horizontal` } = $$props;
  let { snap_ticks = true } = $$props;
  let { steps = 50 } = $$props;
  let { nice_range = range } = $$props;
  const valid_color_scale_keys = Object.keys(d3sc).map((key) => key.split(`interpolate`)[1]).filter(Boolean).join(`, `);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.color_scale === void 0 && $$bindings.color_scale && color_scale !== void 0)
    $$bindings.color_scale(color_scale);
  if ($$props.label_side === void 0 && $$bindings.label_side && label_side !== void 0)
    $$bindings.label_side(label_side);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label_style === void 0 && $$bindings.label_style && label_style !== void 0)
    $$bindings.label_style(label_style);
  if ($$props.wrapper_style === void 0 && $$bindings.wrapper_style && wrapper_style !== void 0)
    $$bindings.wrapper_style(wrapper_style);
  if ($$props.tick_labels === void 0 && $$bindings.tick_labels && tick_labels !== void 0)
    $$bindings.tick_labels(tick_labels);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.tick_side === void 0 && $$bindings.tick_side && tick_side !== void 0)
    $$bindings.tick_side(tick_side);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.snap_ticks === void 0 && $$bindings.snap_ticks && snap_ticks !== void 0)
    $$bindings.snap_ticks(snap_ticks);
  if ($$props.steps === void 0 && $$bindings.steps && steps !== void 0)
    $$bindings.steps(steps);
  if ($$props.nice_range === void 0 && $$bindings.nice_range && nice_range !== void 0)
    $$bindings.nice_range(nice_range);
  $$result.css.add(css);
  {
    if (tick_labels?.length == 0 || typeof tick_labels == `number` || range?.length > 0) {
      const n_ticks = Array.isArray(tick_labels) ? 5 : tick_labels;
      if (snap_ticks) {
        const scale = d3.scaleLinear().domain(range).nice(n_ticks);
        tick_labels = scale.ticks(n_ticks);
        nice_range = scale.domain();
      } else {
        tick_labels = [...Array(n_ticks).keys()].map((idx) => {
          const x = idx / (n_ticks - 1);
          return range[0] + x * (range[1] - range[0]);
        });
      }
    }
  }
  {
    if (typeof color_scale == `string`) {
      if (`interpolate${color_scale}` in d3sc) {
        color_scale = d3sc[`interpolate${color_scale}`];
      } else {
        console.error(`Color scale '${color_scale}' not found, supported color scale names are ${valid_color_scale_keys}. Falling back on 'Viridis'.`);
        color_scale = d3sc.interpolateViridis;
      }
    }
  }
  grad_dir = {
    horizontal: `to right`,
    vertical: `to bottom`
  }[orientation];
  ramped = [...Array(steps).keys()].map((_, idx) => color_scale?.(idx / steps));
  flex_dir = {
    left: `row`,
    right: `row-reverse`,
    top: `column`,
    bottom: `column-reverse`
  }[label_side];
  tick_pos = {
    bottom: `top: 100%`,
    top: `bottom: 100%`,
    center: `top: 50%; transform: translateY(-50%)`
  }[tick_side];
  return `<div${add_styles(merge_ssr_styles(escape(wrapper_style, true), { "flex-direction": flex_dir }))} class="colorbar svelte-wfky5z"> ${label ? `<span${add_attribute("style", label_style, 0)}><!-- HTML_TAG_START -->${label}<!-- HTML_TAG_END --></span>` : ``} <div${add_styles(merge_ssr_styles(escape(style, true), {
    "background": `linear-gradient(${grad_dir}, ${ramped})`
  }))} class="svelte-wfky5z">${each(tick_labels || [], (tick_label, idx) => {
    return `<span style="${"left: calc(100% * " + escape(idx, true) + " / " + escape(tick_labels?.length - 1, true) + "); " + escape(tick_pos, true)}" class="svelte-wfky5z">${escape(pretty_num(tick_label))} </span>`;
  })}</div> </div>`;
});
const { Object: Object_1 } = globals;
const ColorScaleSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "selected", "minSelect", "placeholder", "cbar_props"]);
  let { value = null } = $$props;
  let { selected = [`Viridis`] } = $$props;
  let { minSelect = 0 } = $$props;
  let { placeholder = `Select a color scale` } = $$props;
  let { cbar_props = {} } = $$props;
  const options = Object.keys(d3sc).filter((key) => key.startsWith(`interpolate`)).map((key) => key.replace(`interpolate`, ``));
  const wrapper_style = `justify-content: space-between;`;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.minSelect === void 0 && $$bindings.minSelect && minSelect !== void 0)
    $$bindings.minSelect(minSelect);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.cbar_props === void 0 && $$bindings.cbar_props && cbar_props !== void 0)
    $$bindings.cbar_props(cbar_props);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MultiSelect, "Select").$$render(
      $$result,
      Object_1.assign({}, { options }, { maxSelect: 1 }, { minSelect }, { placeholder }, $$restProps, { value }, { selected }),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ option }) => {
          return `${validate_component(ColorBar, "ColorBar").$$render($$result, Object_1.assign({}, { label: option }, { color_scale: option }, cbar_props, { wrapper_style }), {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  ColorBar as C,
  ColorScaleSelect as a
};
