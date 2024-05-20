import { c as create_ssr_component, b as add_attribute, e as escape, j as spread, l as escape_object, h as each, d as add_styles, k as escape_attribute_value } from "./ssr.js";
import "./index3.js";
const css = {
  code: "svg.svelte-1ntzqmz{overflow:visible;width:100%}g.shell.svelte-1ntzqmz{animation:svelte-1ntzqmz-spin-right linear infinite}text.svelte-1ntzqmz{text-anchor:middle;dominant-baseline:central}@keyframes svelte-1ntzqmz-spin-right{100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"BohrAtom.svelte","sources":["BohrAtom.svelte"],"sourcesContent":["<script lang=\\"ts\\">// https://svelte.dev/repl/17d71b590f554b5a9eba6e04023dd41c\\nexport let symbol = ``; // usually H, He, etc. but can be anything\\nexport let name = ``; // usually Hydrogen, Helium, etc. but can be anything\\nexport let shells; // e.g. [2, 8, 6] for sulfur\\nexport let adapt_size = false;\\nexport let shell_width = 20; // TODO SVG is fixed so increasing this will make large atoms overflow\\nexport let size = adapt_size ? (shells.length + 1) * 2 * shell_width + 50 : 270;\\nexport let base_fill = `white`;\\nexport let orbital_period = 3; // time for inner-most electron orbit in seconds, 0 for no motion\\n// set properties like size, fill, stroke, stroke-width, for nucleus and electrons here\\nexport let nucleus_props = {};\\nexport let shell_props = {};\\nexport let electron_props = {};\\nexport let highlight_shell = null;\\nexport let style = ``;\\n// if function, it\'ll be called with electron index and should return a string\\nexport let number_electrons = false;\\nexport let electron_label_props = {};\\n// Bohr atom electron orbital period is given by\\n// T = (n^3 h^3) / (4pi^2 m K e^4 Z^2) = 1.52 * 10^-16 * n^3 / Z^2 s\\n// with n the shell number, Z the atomic number, m the mass of the electron\\n$: _nucleus_props = {\\n    r: 20,\\n    fill: `white`,\\n    \'fill-opacity\': `0.3`,\\n    ...nucleus_props,\\n};\\n$: _shell_props = {\\n    stroke: `white`,\\n    \'stroke-width\': 1,\\n    fill: `none`,\\n    ...shell_props,\\n};\\n$: _electron_props = {\\n    r: 3,\\n    stroke: `white`,\\n    \'stroke-width\': 1,\\n    fill: `blue`,\\n    ...electron_props,\\n};\\n<\/script>\\n\\n<svg\\n  fill={base_fill}\\n  viewBox=\\"-{size / 2}, -{size / 2}, {size}, {size}\\"\\n  on:click\\n  on:keyup\\n  role=\\"presentation\\"\\n  {style}\\n>\\n  <!-- nucleus -->\\n  <circle class=\\"nucleus\\" {..._nucleus_props}>\\n    {#if name}\\n      <title>{name}</title>\\n    {/if}\\n  </circle>\\n  {#if symbol}\\n    <text>{symbol}</text>\\n  {/if}\\n\\n  <!-- electron orbitals -->\\n  {#each shells as electrons, shell_idx}\\n    {@const n = shell_idx + 1}\\n    {@const shell_radius = _nucleus_props.r + n * shell_width}\\n    {@const active = n === highlight_shell}\\n    <g class=\\"shell\\" style:animation-duration=\\"{orbital_period * n ** 1.5}s\\">\\n      <circle\\n        r={shell_radius}\\n        {..._shell_props}\\n        style:stroke-width={active ? 2 : 1}\\n        style:stroke={active ? `yellow` : `white`}\\n      />\\n\\n      <!-- electrons -->\\n      {#each Array(electrons) as _, elec_idx}\\n        {@const elec_x = Math.cos((2 * Math.PI * elec_idx) / electrons) * shell_radius}\\n        {@const elec_y = Math.sin((2 * Math.PI * elec_idx) / electrons) * shell_radius}\\n        <circle class=\\"electron\\" cx={elec_x} cy={elec_y} {..._electron_props}>\\n          <title>Electron {elec_idx + 1}</title>\\n        </circle>\\n        {#if number_electrons}\\n          <text\\n            x={elec_x}\\n            y={elec_y}\\n            {...electron_label_props}\\n            transform=\\"rotate({(elec_idx * 360) / electrons} {elec_x} {elec_y})\\"\\n          >\\n            {#if typeof number_electrons === `function`}\\n              {number_electrons(elec_idx)}\\n            {:else if number_electrons === `hierarchical`}\\n              {shell_idx + 1}.{elec_idx + 1}\\n              <!-- {:else if [`sequential`, true].includes(number_electrons)} -->\\n            {:else}\\n              {@const nth_electron =\\n                shells.slice(0, shell_idx).reduce((a, b) => a + b, 0) + elec_idx + 1}\\n              {nth_electron}\\n            {/if}\\n          </text>\\n        {/if}\\n      {/each}\\n    </g>\\n  {/each}\\n</svg>\\n\\n<style>\\n  svg {\\n    overflow: visible;\\n    width: 100%;\\n  }\\n  g.shell {\\n    animation: spin-right linear infinite;\\n  }\\n  text {\\n    text-anchor: middle;\\n    dominant-baseline: central;\\n  }\\n  @keyframes spin-right {\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyGE,kBAAI,CACF,QAAQ,CAAE,OAAO,CACjB,KAAK,CAAE,IACT,CACA,CAAC,qBAAO,CACN,SAAS,CAAE,yBAAU,CAAC,MAAM,CAAC,QAC/B,CACA,mBAAK,CACH,WAAW,CAAE,MAAM,CACnB,iBAAiB,CAAE,OACrB,CACA,WAAW,yBAAW,CACpB,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}'
};
const BohrAtom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _nucleus_props;
  let _shell_props;
  let _electron_props;
  let { symbol = `` } = $$props;
  let { name = `` } = $$props;
  let { shells } = $$props;
  let { adapt_size = false } = $$props;
  let { shell_width = 20 } = $$props;
  let { size = adapt_size ? (shells.length + 1) * 2 * shell_width + 50 : 270 } = $$props;
  let { base_fill = `white` } = $$props;
  let { orbital_period = 3 } = $$props;
  let { nucleus_props = {} } = $$props;
  let { shell_props = {} } = $$props;
  let { electron_props = {} } = $$props;
  let { highlight_shell = null } = $$props;
  let { style = `` } = $$props;
  let { number_electrons = false } = $$props;
  let { electron_label_props = {} } = $$props;
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0)
    $$bindings.symbol(symbol);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.shells === void 0 && $$bindings.shells && shells !== void 0)
    $$bindings.shells(shells);
  if ($$props.adapt_size === void 0 && $$bindings.adapt_size && adapt_size !== void 0)
    $$bindings.adapt_size(adapt_size);
  if ($$props.shell_width === void 0 && $$bindings.shell_width && shell_width !== void 0)
    $$bindings.shell_width(shell_width);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.base_fill === void 0 && $$bindings.base_fill && base_fill !== void 0)
    $$bindings.base_fill(base_fill);
  if ($$props.orbital_period === void 0 && $$bindings.orbital_period && orbital_period !== void 0)
    $$bindings.orbital_period(orbital_period);
  if ($$props.nucleus_props === void 0 && $$bindings.nucleus_props && nucleus_props !== void 0)
    $$bindings.nucleus_props(nucleus_props);
  if ($$props.shell_props === void 0 && $$bindings.shell_props && shell_props !== void 0)
    $$bindings.shell_props(shell_props);
  if ($$props.electron_props === void 0 && $$bindings.electron_props && electron_props !== void 0)
    $$bindings.electron_props(electron_props);
  if ($$props.highlight_shell === void 0 && $$bindings.highlight_shell && highlight_shell !== void 0)
    $$bindings.highlight_shell(highlight_shell);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.number_electrons === void 0 && $$bindings.number_electrons && number_electrons !== void 0)
    $$bindings.number_electrons(number_electrons);
  if ($$props.electron_label_props === void 0 && $$bindings.electron_label_props && electron_label_props !== void 0)
    $$bindings.electron_label_props(electron_label_props);
  $$result.css.add(css);
  _nucleus_props = {
    r: 20,
    fill: `white`,
    "fill-opacity": `0.3`,
    ...nucleus_props
  };
  _shell_props = {
    stroke: `white`,
    "stroke-width": 1,
    fill: `none`,
    ...shell_props
  };
  _electron_props = {
    r: 3,
    stroke: `white`,
    "stroke-width": 1,
    fill: `blue`,
    ...electron_props
  };
  return `<svg${add_attribute("fill", base_fill, 0)} viewBox="${"-" + escape(size / 2, true) + ", -" + escape(size / 2, true) + ", " + escape(size, true) + ", " + escape(size, true)}" role="presentation"${add_attribute("style", style, 0)} class="svelte-1ntzqmz"><circle${spread([{ class: "nucleus" }, escape_object(_nucleus_props)], {})}>${name ? `<title>${escape(name)}</title>` : ``}</circle>${symbol ? `<text class="svelte-1ntzqmz">${escape(symbol)}</text>` : ``}${each(shells, (electrons, shell_idx) => {
    let n = shell_idx + 1, shell_radius = _nucleus_props.r + n * shell_width, active = n === highlight_shell;
    return `   <g class="shell svelte-1ntzqmz"${add_styles({
      "animation-duration": `${orbital_period * n ** 1.5}s`
    })}><circle${spread([{ r: escape_attribute_value(shell_radius) }, escape_object(_shell_props)], {
      styles: {
        "stroke-width": active ? 2 : 1,
        "stroke": active ? `yellow` : `white`
      }
    })}></circle>${each(Array(electrons), (_, elec_idx) => {
      let elec_x = Math.cos(2 * Math.PI * elec_idx / electrons) * shell_radius, elec_y = Math.sin(2 * Math.PI * elec_idx / electrons) * shell_radius;
      return `  <circle${spread(
        [
          { class: "electron" },
          { cx: escape_attribute_value(elec_x) },
          { cy: escape_attribute_value(elec_y) },
          escape_object(_electron_props)
        ],
        {}
      )}><title>Electron ${escape(elec_idx + 1)}</title></circle> ${number_electrons ? `<text${spread(
        [
          { x: escape_attribute_value(elec_x) },
          { y: escape_attribute_value(elec_y) },
          escape_object(electron_label_props),
          {
            transform: "rotate(" + escape(elec_idx * 360 / electrons, true) + " " + escape(elec_x, true) + " " + escape(elec_y, true) + ")"
          }
        ],
        { classes: "svelte-1ntzqmz" }
      )}>${typeof number_electrons === `function` ? `${escape(number_electrons(elec_idx))}` : `${number_electrons === `hierarchical` ? `${escape(shell_idx + 1)}.${escape(elec_idx + 1)} ` : (() => {
        let nth_electron = shells.slice(0, shell_idx).reduce((a, b) => a + b, 0) + elec_idx + 1;
        return ` ${escape(nth_electron)}`;
      })()}`}</text>` : ``}`;
    })}</g>`;
  })}</svg>`;
});
export {
  BohrAtom as B
};
