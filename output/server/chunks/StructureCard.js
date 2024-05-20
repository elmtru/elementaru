import { c as create_ssr_component, b as add_attribute, h as each, e as escape, o as compute_slots, a as compute_rest_props, v as validate_component } from "./ssr.js";
import { p as pretty_num, n as alphabetical_formula, o as density } from "./index3.js";
import { i as is_void } from "./names.js";
const css = {
  code: ".info-card.svelte-18jpu7z.svelte-18jpu7z{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));box-sizing:border-box;border-radius:var(--ic-radius, 3pt);padding:var(--ic-padding, 10pt 12pt);margin:var(--ic-margin, 1em 0);gap:var(--ic-gap, 10pt 5%);background-color:var(--ic-bg, rgba(255, 255, 255, 0.1));font-size:var(--ic-font-size);width:var(--ic-width)}h2.svelte-18jpu7z.svelte-18jpu7z{grid-column:1 / -1;margin:0;border-bottom:1px solid var(--ic-title-border-color, rgba(255, 255, 255, 0.3))}div.svelte-18jpu7z.svelte-18jpu7z{display:flex;justify-content:space-between;align-items:center;white-space:nowrap;gap:var(--ic-value-gap)}div.svelte-18jpu7z>span.title.svelte-18jpu7z{text-overflow:ellipsis;overflow:hidden}strong.svelte-18jpu7z.svelte-18jpu7z{font-weight:600;margin:var(--ic-value-margin);background-color:var(--ic-value-bg, rgba(255, 255, 255, 0.1));padding:var(--ic-value-padding, 0 4pt);border-radius:var(--ic-value-radius, 3pt)}strong.svelte-18jpu7z small.svelte-18jpu7z{font-weight:normal}",
  map: '{"version":3,"file":"InfoCard.svelte","sources":["InfoCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { pretty_num } from \'$lib\';\\nexport let data = [];\\nexport let title = ``;\\nexport let fallback = ``;\\nexport let fmt = `.2f`;\\nexport let as = `section`;\\nexport let style = null;\\n// rename fmt as default_fmt internally\\n$: default_fmt = fmt;\\n<\/script>\\n\\n<svelte:element this={as} class=\\"info-card\\" {style}>\\n  {#if title || $$slots.title}\\n    <h2>\\n      <slot name=\\"title\\">\\n        {@html title}\\n      </slot>\\n    </h2>\\n  {/if}\\n  {#each data.filter((itm) => (!(`condition` in itm) || itm?.condition) && ![undefined, null].includes(itm.value)) as { title, value, unit, fmt = default_fmt, tooltip }}\\n    <div>\\n      <span class=\\"title\\" {title}>\\n        {@html title}\\n      </span>\\n      <strong title={tooltip ?? null}>\\n        {@html typeof value == `number` ? pretty_num(value, fmt) : value}\\n        {#if unit}\\n          <small>{unit}</small>\\n        {/if}\\n      </strong>\\n    </div>\\n  {:else}\\n    <slot name=\\"fallback\\">\\n      {fallback}\\n    </slot>\\n  {/each}\\n</svelte:element>\\n\\n<style>\\n  .info-card {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    box-sizing: border-box;\\n    border-radius: var(--ic-radius, 3pt);\\n    padding: var(--ic-padding, 10pt 12pt);\\n    margin: var(--ic-margin, 1em 0);\\n    gap: var(--ic-gap, 10pt 5%);\\n    background-color: var(--ic-bg, rgba(255, 255, 255, 0.1));\\n    font-size: var(--ic-font-size);\\n    width: var(--ic-width);\\n  }\\n  h2 {\\n    grid-column: 1 / -1;\\n    margin: 0;\\n    border-bottom: 1px solid var(--ic-title-border-color, rgba(255, 255, 255, 0.3));\\n  }\\n  div {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    white-space: nowrap;\\n    gap: var(--ic-value-gap);\\n  }\\n  div > span.title {\\n    text-overflow: ellipsis;\\n    overflow: hidden;\\n  }\\n  strong {\\n    font-weight: 600;\\n    margin: var(--ic-value-margin);\\n    background-color: var(--ic-value-bg, rgba(255, 255, 255, 0.1));\\n    padding: var(--ic-value-padding, 0 4pt);\\n    border-radius: var(--ic-value-radius, 3pt);\\n  }\\n  strong small {\\n    font-weight: normal;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuCE,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,UAAU,CAAE,UAAU,CACtB,aAAa,CAAE,IAAI,WAAW,CAAC,IAAI,CAAC,CACpC,OAAO,CAAE,IAAI,YAAY,CAAC,UAAU,CAAC,CACrC,MAAM,CAAE,IAAI,WAAW,CAAC,MAAM,CAAC,CAC/B,GAAG,CAAE,IAAI,QAAQ,CAAC,QAAQ,CAAC,CAC3B,gBAAgB,CAAE,IAAI,OAAO,CAAC,yBAAyB,CAAC,CACxD,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,KAAK,CAAE,IAAI,UAAU,CACvB,CACA,gCAAG,CACD,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,EAAE,CACnB,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,uBAAuB,CAAC,yBAAyB,CAChF,CACA,iCAAI,CACF,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,cAAc,CACzB,CACA,kBAAG,CAAG,IAAI,qBAAO,CACf,aAAa,CAAE,QAAQ,CACvB,QAAQ,CAAE,MACZ,CACA,oCAAO,CACL,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IAAI,iBAAiB,CAAC,CAC9B,gBAAgB,CAAE,IAAI,aAAa,CAAC,yBAAyB,CAAC,CAC9D,OAAO,CAAE,IAAI,kBAAkB,CAAC,MAAM,CAAC,CACvC,aAAa,CAAE,IAAI,iBAAiB,CAAC,IAAI,CAC3C,CACA,qBAAM,CAAC,oBAAM,CACX,WAAW,CAAE,MACf"}'
};
const InfoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let default_fmt;
  let $$slots = compute_slots(slots);
  let { data = [] } = $$props;
  let { title = `` } = $$props;
  let { fallback = `` } = $$props;
  let { fmt = `.2f` } = $$props;
  let { as = `section` } = $$props;
  let { style = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.fmt === void 0 && $$bindings.fmt && fmt !== void 0)
    $$bindings.fmt(fmt);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  default_fmt = fmt;
  return `${((tag) => {
    return tag ? `<${as} class="info-card svelte-18jpu7z"${add_attribute("style", style, 0)}>${is_void(tag) ? "" : `${title || $$slots.title ? `<h2 class="svelte-18jpu7z">${slots.title ? slots.title({}) : ` <!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --> `}</h2>` : ``} ${data.filter((itm) => (!(`condition` in itm) || itm?.condition) && ![void 0, null].includes(itm.value)).length ? each(data.filter((itm) => (!(`condition` in itm) || itm?.condition) && ![void 0, null].includes(itm.value)), ({ title: title2, value, unit, fmt: fmt2 = default_fmt, tooltip }) => {
      return `<div class="svelte-18jpu7z"><span class="title svelte-18jpu7z"${add_attribute("title", title2, 0)}><!-- HTML_TAG_START -->${title2}<!-- HTML_TAG_END --></span> <strong${add_attribute("title", tooltip ?? null, 0)} class="svelte-18jpu7z"><!-- HTML_TAG_START -->${typeof value == `number` ? pretty_num(value, fmt2) : value}<!-- HTML_TAG_END --> ${unit ? `<small class="svelte-18jpu7z">${escape(unit)}</small>` : ``}</strong> </div>`;
    }) : `${slots.fallback ? slots.fallback({}) : ` ${escape(fallback)} `}`} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
const StructureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let volume;
  let a;
  let b;
  let c;
  let alpha;
  let beta;
  let gamma;
  let $$restProps = compute_rest_props($$props, ["structure", "title"]);
  let { structure } = $$props;
  let { title = `Structure` } = $$props;
  if ($$props.structure === void 0 && $$bindings.structure && structure !== void 0)
    $$bindings.structure(structure);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  ({ volume, a, b, c, alpha, beta, gamma } = structure?.lattice ?? {});
  return `${validate_component(InfoCard, "InfoCard").$$render(
    $$result,
    Object.assign(
      {},
      {
        data: [
          {
            title: `Formula`,
            value: alphabetical_formula(structure)
          },
          {
            title: `Number of atoms`,
            value: structure?.sites?.length,
            fmt: `.0f`
          },
          {
            title: `Volume`,
            value: volume,
            unit: `Å³`
          },
          {
            title: `Density`,
            value: density(structure),
            unit: `g/cm³`
          },
          {
            title: `Lattice lengths a, b, c`,
            value: [a, b, c].map(pretty_num).join(`, `),
            unit: `Å`
          },
          {
            title: `Lattice angles α, β, γ`,
            value: [alpha, beta, gamma].map(pretty_num).join(`°, `) + `°`
          }
        ]
        // { title: 'Charge', value: structure?.charge },
      },
      $$restProps,
      { title }
    ),
    {},
    {}
  )}`;
});
export {
  InfoCard as I,
  StructureCard as S
};
