import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
import { i as is_void } from "./names.js";
import "./index3.js";
const css = {
  code: "aside.svelte-12o8wbg,div.svelte-12o8wbg{display:grid;box-sizing:border-box;grid-row:1 / span 3;grid-column:3 / span 10;container-type:inline-size}",
  map: '{"version":3,"file":"TableInset.svelte","sources":["TableInset.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let style = null;\\nexport let tag = `aside`; // styles below don\'t apply if tag is not aside or div\\n<\/script>\\n\\n<svelte:element this={tag} {style}>\\n  <slot />\\n</svelte:element>\\n\\n<style>\\n  aside,\\n  div {\\n    display: grid;\\n    box-sizing: border-box;\\n    grid-row: 1 / span 3;\\n    grid-column: 3 / span 10;\\n    container-type: inline-size;\\n  }\\n</style>\\n"],"names":[],"mappings":"AASE,oBAAK,CACL,kBAAI,CACF,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACpB,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,EAAE,CACxB,cAAc,CAAE,WAClB"}'
};
const TableInset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  let { tag = `aside` } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  $$result.css.add(css);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("style", style, 0)} class="svelte-12o8wbg">${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``} `}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
export {
  TableInset as T
};
