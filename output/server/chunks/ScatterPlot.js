import { c as create_ssr_component, g as subscribe, b as add_attribute, e as escape, v as validate_component, p as createEventDispatcher } from "./ssr.js";
import { $ as $format } from "./ru.js";
import { g as active_element, e as element_data, p as pretty_num } from "./index3.js";
import { bisector, extent } from "d3-array";
import { scaleLinear } from "d3-scale";
import * as d3sc from "d3-scale-chromatic";
import "d3-interpolate-path";
const css$2 = {
  code: "h2.svelte-1e3zk1h.svelte-1e3zk1h{font-size:min(7vw, 3em);white-space:nowrap;text-align:center;margin:0 0 1em}h2.svelte-1e3zk1h>small.svelte-1e3zk1h{margin-left:min(1vw, 10pt);font-weight:100;opacity:0.7}",
  map: `{"version":3,"file":"ElementHeading.svelte","sources":["ElementHeading.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _ } from 'svelte-i18n';\\nexport let element;\\nexport let style = \`\`;\\n<\/script>\\n\\n<h2 {style}>\\n  {element.number} - {$_('element.name.' + element.name)} <small>{$_('category.' + element.category)}</small>\\n</h2>\\n\\n<style>\\n  h2 {\\n    font-size: min(7vw, 3em);\\n    white-space: nowrap;\\n    text-align: center;\\n    margin: 0 0 1em;\\n  }\\n  h2 > small {\\n    margin-left: min(1vw, 10pt);\\n    font-weight: 100;\\n    opacity: 0.7;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAUE,gCAAG,CACD,SAAS,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CACxB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GACd,CACA,iBAAE,CAAG,oBAAM,CACT,WAAW,CAAE,IAAI,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,GACX"}`
};
const ElementHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { element } = $$props;
  let { style = `` } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  $$unsubscribe__();
  return `<h2${add_attribute("style", style, 0)} class="svelte-1e3zk1h">${escape(element.number)} - ${escape($_("element.name." + element.name))} <small class="svelte-1e3zk1h">${escape($_("category." + element.category))}</small> </h2>`;
});
const css$1 = {
  code: "div.svelte-1ddy78a{background-color:rgba(0, 0, 0, 0.7);padding:1pt 3pt;width:max-content;box-sizing:border-box;border-radius:3pt;font-size:min(2.3cqw, 12pt)}",
  map: '{"version":3,"file":"ElementScatter.svelte","sources":["ElementScatter.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { ScatterPlot, element_data, pretty_num } from \'$lib\';\\nimport { active_element } from \'$lib/stores\';\\nimport { _ } from \'svelte-i18n\';\\n// either array of length 118 (one heat value for each element) or\\n// object with element symbol as key and heat value as value\\nexport let y;\\nexport let x_label = $_(`Atomic Number`);\\nexport let y_label = ``;\\nexport let y_unit = ``;\\nexport let tooltip_point = null;\\nexport let hovered = false;\\n// update tooltip on hover element tile\\n$: if ($active_element?.number && !hovered) {\\n    tooltip_point = {\\n        x: $active_element.number,\\n        y: y[$active_element.number - 1],\\n    };\\n}\\n<\/script>\\n\\n<ScatterPlot\\n  {y}\\n  x={[...Array(y.length + 1).keys()].slice(1)}\\n  bind:tooltip_point\\n  bind:hovered\\n  {x_label}\\n  on:change\\n  {...$$props}\\n>\\n  <div slot=\\"tooltip\\" let:x let:y>\\n    {#if $active_element}\\n      <strong>{x} - {element_data[x - 1]?.name}</strong>\\n      <br />{y_label} = {pretty_num(y)}\\n      {y_unit ?? ``}\\n    {/if}\\n  </div>\\n</ScatterPlot>\\n\\n<style>\\n  div {\\n    background-color: rgba(0, 0, 0, 0.7);\\n    padding: 1pt 3pt;\\n    width: max-content;\\n    box-sizing: border-box;\\n    border-radius: 3pt;\\n    font-size: min(2.3cqw, 12pt);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuCE,kBAAI,CACF,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,MAAM,CAAC,CAAC,IAAI,CAC7B"}'
};
const ElementScatter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $active_element, $$unsubscribe_active_element;
  let $_, $$unsubscribe__;
  $$unsubscribe_active_element = subscribe(active_element, (value) => $active_element = value);
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { y } = $$props;
  let { x_label = $_(`Atomic Number`) } = $$props;
  let { y_label = `` } = $$props;
  let { y_unit = `` } = $$props;
  let { tooltip_point = null } = $$props;
  let { hovered = false } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.x_label === void 0 && $$bindings.x_label && x_label !== void 0)
    $$bindings.x_label(x_label);
  if ($$props.y_label === void 0 && $$bindings.y_label && y_label !== void 0)
    $$bindings.y_label(y_label);
  if ($$props.y_unit === void 0 && $$bindings.y_unit && y_unit !== void 0)
    $$bindings.y_unit(y_unit);
  if ($$props.tooltip_point === void 0 && $$bindings.tooltip_point && tooltip_point !== void 0)
    $$bindings.tooltip_point(tooltip_point);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($active_element?.number && !hovered) {
        tooltip_point = {
          x: $active_element.number,
          y: y[$active_element.number - 1]
        };
      }
    }
    $$rendered = `${validate_component(ScatterPlot, "ScatterPlot").$$render(
      $$result,
      Object.assign(
        {},
        { y },
        {
          x: [...Array(y.length + 1).keys()].slice(1)
        },
        { x_label },
        $$props,
        { tooltip_point },
        { hovered }
      ),
      {
        tooltip_point: ($$value) => {
          tooltip_point = $$value;
          $$settled = false;
        },
        hovered: ($$value) => {
          hovered = $$value;
          $$settled = false;
        }
      },
      {
        tooltip: ({ y: y2, x }) => {
          return `<div slot="tooltip" class="svelte-1ddy78a">${$active_element ? `<strong>${escape(x)} - ${escape(element_data[x - 1]?.name)}</strong> <br>${escape(y_label)} = ${escape(pretty_num(y2))} ${escape(y_unit ?? ``)}` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_active_element();
  $$unsubscribe__();
  return $$rendered;
});
const css = {
  code: "div.scatter.svelte-10hha9v.svelte-10hha9v{width:100%;height:100%;display:flex;min-height:var(--svt-min-height, 100px);container-type:inline-size;z-index:1}svg.svelte-10hha9v.svelte-10hha9v{width:100%;fill:white;font-weight:lighter;overflow:visible;z-index:1;font-size:min(2.3cqw, 12pt)}line.svelte-10hha9v.svelte-10hha9v{stroke:gray;stroke-dasharray:4;stroke-width:0.4}g.x-axis.svelte-10hha9v text.svelte-10hha9v{text-anchor:middle;dominant-baseline:top}g.y-axis.svelte-10hha9v text.svelte-10hha9v{dominant-baseline:central}foreignObject.svelte-10hha9v.svelte-10hha9v{overflow:visible}text.label.svelte-10hha9v.svelte-10hha9v{text-anchor:middle}",
  map: '{"version":3,"file":"ScatterPlot.svelte","sources":["ScatterPlot.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Line, ScatterPoint } from \'$lib\';\\nimport { bisector, extent } from \'d3-array\';\\nimport { scaleLinear } from \'d3-scale\';\\nimport * as d3sc from \'d3-scale-chromatic\';\\nimport { createEventDispatcher } from \'svelte\';\\nexport let style = ``;\\nexport let x_lim = [null, null];\\nexport let y_lim = [null, null];\\nexport let pad_top = 5;\\nexport let pad_bottom = 30;\\nexport let pad_left = 50;\\nexport let pad_right = 20;\\nexport let x_label = ``;\\nexport let x_label_yshift = 0;\\nexport let x = [];\\nexport let color_scale = null;\\nexport let y = [];\\nexport let y_label = ``;\\nexport let y_unit = ``;\\nexport let tooltip_point = null;\\nexport let hovered = false;\\nexport let markers = `line+points`;\\nconst dispatcher = createEventDispatcher();\\nconst axis_label_offset = { x: 15, y: 20 }; // pixels\\nlet width;\\nlet height;\\n$: data = x.map((x, idx) => ({ x, y: y[idx] }));\\n// determine x/y-range from data but default to x/y-lim if defined\\n$: x_range = extent(data, ({ x }) => x).map((x, idx) => x_lim[idx] ?? x);\\n$: y_range = extent(data, ({ y }) => y).map((y, idx) => y_lim[idx] ?? y);\\n$: x_scale = scaleLinear()\\n    .domain(x_range)\\n    .range([pad_left, width - pad_right]);\\n$: y_scale = scaleLinear()\\n    .domain(y_range)\\n    .range([height - pad_bottom, pad_top]);\\n$: c_scale =\\n    typeof color_scale == `string` ? d3sc[`interpolate${color_scale}`] : color_scale;\\nlet scaled_data;\\n// make sure to apply color_scale to normalized y values (mapped to [0, 1])\\n$: y_unit_scale = scaleLinear().domain(y_range).range([0, 1]);\\n$: scaled_data = data\\n    ?.filter(({ x, y }) => !(isNaN(x) || isNaN(y) || x === null || y === null))\\n    .map(({ x, y }) => [x_scale(x), y_scale(y), c_scale?.(y_unit_scale(y))]);\\nconst bisect = bisector(({ x }) => x).right;\\nfunction on_mouse_move(event) {\\n    hovered = true;\\n    // returns point to right of our current mouse position\\n    let idx = bisect(data, x_scale.invert(event.offsetX));\\n    if (idx < data.length) {\\n        tooltip_point = data[idx]; // update point\\n        dispatcher(`change`, tooltip_point);\\n    }\\n}\\n<\/script>\\n\\n<div class=\\"scatter\\" bind:clientWidth={width} bind:clientHeight={height} {style}>\\n  {#if width && height}\\n    <svg\\n      on:mousemove={on_mouse_move}\\n      on:mouseleave={() => (hovered = false)}\\n      on:mouseleave\\n      role=\\"img\\"\\n    >\\n      {#if markers.includes(`line`)}\\n        <Line points={scaled_data} origin={[x_scale(x_range[0]), y_scale(y_range[0])]} />\\n      {/if}\\n\\n      {#if markers.includes(`points`)}\\n        {#each scaled_data as [x, y, fill]}\\n          <ScatterPoint {x} {y} {fill} />\\n        {/each}\\n      {/if}\\n\\n      <!-- x axis -->\\n      <g class=\\"x-axis\\">\\n        {#each x_scale.ticks() as tick}\\n          <g class=\\"tick\\" transform=\\"translate({x_scale(tick)}, {height})\\">\\n            <line y1={-height + pad_top} y2={-pad_bottom} />\\n            <text y={-pad_bottom + axis_label_offset.x}>{tick}</text>\\n          </g>\\n        {/each}\\n        <text x={width / 2} y={height + 5 - x_label_yshift} class=\\"label x\\">\\n          {x_label ?? ``}\\n        </text>\\n      </g>\\n\\n      <!-- y axis -->\\n      <g class=\\"y-axis\\">\\n        {#each y_scale.ticks(5) as tick, idx}\\n          <g class=\\"tick\\" transform=\\"translate(0, {y_scale(tick)})\\">\\n            <line x1={pad_left} x2={width - pad_right} />\\n            <text x={pad_left - axis_label_offset.y}>\\n              {tick}\\n              {#if y_unit && idx === y_scale.ticks(5).length - 1}\\n                &zwnj;&ensp;{y_unit}\\n              {/if}\\n            </text>\\n          </g>\\n        {/each}\\n        <text x={-height / 2} y={13} transform=\\"rotate(-90)\\" class=\\"label y\\">\\n          {y_label ?? ``}\\n        </text>\\n      </g>\\n\\n      {#if tooltip_point}\\n        {@const { x, y } = tooltip_point}\\n        {@const [cx, cy] = [x_scale(x), y_scale(y)]}\\n        <circle {cx} {cy} r=\\"5\\" fill=\\"orange\\" />\\n        <!-- {#if hovered} -->\\n        <foreignObject x={cx + 5} y={cy}>\\n          <slot name=\\"tooltip\\" {x} {y}>\\n            ({x}, {y})\\n          </slot>\\n        </foreignObject>\\n        <!-- {/if} -->\\n      {/if}\\n    </svg>\\n  {/if}\\n</div>\\n\\n<style>\\n  div.scatter {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    min-height: var(--svt-min-height, 100px);\\n    container-type: inline-size;\\n    z-index: 1; /* ensure tooltip renders above ElementTiles */\\n  }\\n  svg {\\n    width: 100%;\\n    fill: white;\\n    font-weight: lighter;\\n    overflow: visible;\\n    z-index: 1;\\n    font-size: min(2.3cqw, 12pt);\\n  }\\n  line {\\n    stroke: gray;\\n    stroke-dasharray: 4;\\n    stroke-width: 0.4;\\n  }\\n  g.x-axis text {\\n    text-anchor: middle;\\n    dominant-baseline: top;\\n  }\\n  g.y-axis text {\\n    dominant-baseline: central;\\n  }\\n  foreignObject {\\n    overflow: visible;\\n  }\\n  text.label {\\n    text-anchor: middle;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0HE,GAAG,sCAAS,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,gBAAgB,CAAC,MAAM,CAAC,CACxC,cAAc,CAAE,WAAW,CAC3B,OAAO,CAAE,CACX,CACA,iCAAI,CACF,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,KAAK,CACX,WAAW,CAAE,OAAO,CACpB,QAAQ,CAAE,OAAO,CACjB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,IAAI,MAAM,CAAC,CAAC,IAAI,CAC7B,CACA,kCAAK,CACH,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,CAAC,CACnB,YAAY,CAAE,GAChB,CACA,CAAC,sBAAO,CAAC,mBAAK,CACZ,WAAW,CAAE,MAAM,CACnB,iBAAiB,CAAE,GACrB,CACA,CAAC,sBAAO,CAAC,mBAAK,CACZ,iBAAiB,CAAE,OACrB,CACA,2CAAc,CACZ,QAAQ,CAAE,OACZ,CACA,IAAI,oCAAO,CACT,WAAW,CAAE,MACf"}'
};
const ScatterPlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let x_range;
  let y_range;
  let x_scale;
  let y_scale;
  let c_scale;
  let y_unit_scale;
  let { style = `` } = $$props;
  let { x_lim = [null, null] } = $$props;
  let { y_lim = [null, null] } = $$props;
  let { pad_top = 5 } = $$props;
  let { pad_bottom = 30 } = $$props;
  let { pad_left = 50 } = $$props;
  let { pad_right = 20 } = $$props;
  let { x_label = `` } = $$props;
  let { x_label_yshift = 0 } = $$props;
  let { x = [] } = $$props;
  let { color_scale = null } = $$props;
  let { y = [] } = $$props;
  let { y_label = `` } = $$props;
  let { y_unit = `` } = $$props;
  let { tooltip_point = null } = $$props;
  let { hovered = false } = $$props;
  let { markers = `line+points` } = $$props;
  createEventDispatcher();
  let width;
  let height;
  bisector(({ x: x2 }) => x2).right;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.x_lim === void 0 && $$bindings.x_lim && x_lim !== void 0)
    $$bindings.x_lim(x_lim);
  if ($$props.y_lim === void 0 && $$bindings.y_lim && y_lim !== void 0)
    $$bindings.y_lim(y_lim);
  if ($$props.pad_top === void 0 && $$bindings.pad_top && pad_top !== void 0)
    $$bindings.pad_top(pad_top);
  if ($$props.pad_bottom === void 0 && $$bindings.pad_bottom && pad_bottom !== void 0)
    $$bindings.pad_bottom(pad_bottom);
  if ($$props.pad_left === void 0 && $$bindings.pad_left && pad_left !== void 0)
    $$bindings.pad_left(pad_left);
  if ($$props.pad_right === void 0 && $$bindings.pad_right && pad_right !== void 0)
    $$bindings.pad_right(pad_right);
  if ($$props.x_label === void 0 && $$bindings.x_label && x_label !== void 0)
    $$bindings.x_label(x_label);
  if ($$props.x_label_yshift === void 0 && $$bindings.x_label_yshift && x_label_yshift !== void 0)
    $$bindings.x_label_yshift(x_label_yshift);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.color_scale === void 0 && $$bindings.color_scale && color_scale !== void 0)
    $$bindings.color_scale(color_scale);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.y_label === void 0 && $$bindings.y_label && y_label !== void 0)
    $$bindings.y_label(y_label);
  if ($$props.y_unit === void 0 && $$bindings.y_unit && y_unit !== void 0)
    $$bindings.y_unit(y_unit);
  if ($$props.tooltip_point === void 0 && $$bindings.tooltip_point && tooltip_point !== void 0)
    $$bindings.tooltip_point(tooltip_point);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.markers === void 0 && $$bindings.markers && markers !== void 0)
    $$bindings.markers(markers);
  $$result.css.add(css);
  data = x.map((x2, idx) => ({ x: x2, y: y[idx] }));
  x_range = extent(data, ({ x: x2 }) => x2).map((x2, idx) => x_lim[idx] ?? x2);
  y_range = extent(data, ({ y: y2 }) => y2).map((y2, idx) => y_lim[idx] ?? y2);
  x_scale = scaleLinear().domain(x_range).range([pad_left, width - pad_right]);
  y_scale = scaleLinear().domain(y_range).range([height - pad_bottom, pad_top]);
  c_scale = typeof color_scale == `string` ? d3sc[`interpolate${color_scale}`] : color_scale;
  y_unit_scale = scaleLinear().domain(y_range).range([0, 1]);
  data?.filter(({ x: x2, y: y2 }) => !(isNaN(x2) || isNaN(y2) || x2 === null || y2 === null)).map(({ x: x2, y: y2 }) => [x_scale(x2), y_scale(y2), c_scale?.(y_unit_scale(y2))]);
  return `<div class="scatter svelte-10hha9v"${add_attribute("style", style, 0)}>${``} </div>`;
});
export {
  ElementHeading as E,
  ElementScatter as a
};
