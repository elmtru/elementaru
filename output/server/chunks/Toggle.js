import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
import "./Tooltip.svelte_svelte_type_style_lang.js";
const css = {
  code: "label.svelte-1t6bfja.svelte-1t6bfja{display:inline-flex;align-items:center;width:max-content;vertical-align:middle}span.svelte-1t6bfja.svelte-1t6bfja{height:1.5em;width:2.7em;padding:0.1em;box-sizing:border-box;border:1px solid lightgray;border-radius:0.75em;transition:0.3s}input.svelte-1t6bfja:checked+span.svelte-1t6bfja{background:black}input.svelte-1t6bfja.svelte-1t6bfja{position:absolute;opacity:0;width:1em}input.svelte-1t6bfja+span.svelte-1t6bfja::after{content:'';display:block;height:1.2em;width:1.2em;border-radius:50%;background:gray;transition:0.3s}input.svelte-1t6bfja:checked+span.svelte-1t6bfja::after{background:green;transform:translate(100%)}input.svelte-1t6bfja:focus+span.svelte-1t6bfja{border:1px solid cornflowerblue}",
  map: '{"version":3,"file":"Toggle.svelte","sources":["Toggle.svelte"],"sourcesContent":["<script>export let checked = false; // whether the toggle is on or off\\nexport let required = false;\\nexport let style = ``;\\nexport let id = ``;\\n// normally input type=checkbox toggles on space bar, this handler also responds to enter\\nfunction handleKeydown(event) {\\n    if (event.key === `Enter`) {\\n        checked = !checked;\\n        event.preventDefault();\\n    }\\n}\\n<\/script>\\n\\n<label {style}>\\n  <slot />\\n  <input type=\\"checkbox\\" bind:checked {id} {required} on:keydown={handleKeydown} />\\n  <span />\\n</label>\\n\\n<style>\\n  label {\\n    display: inline-flex;\\n    align-items: center;\\n    width: max-content;\\n    vertical-align: middle;\\n  }\\n  span {\\n    height: 1.5em;\\n    width: 2.7em;\\n    padding: 0.1em;\\n    box-sizing: border-box;\\n    border: 1px solid lightgray;\\n    border-radius: 0.75em;\\n    transition: 0.3s;\\n  }\\n  input:checked + span {\\n    background: black;\\n  }\\n  input {\\n    position: absolute;\\n    opacity: 0;\\n    width: 1em;\\n  }\\n  input + span::after {\\n    content: \'\';\\n    display: block;\\n    height: 1.2em;\\n    width: 1.2em;\\n    border-radius: 50%;\\n    background: gray;\\n    transition: 0.3s;\\n  }\\n  input:checked + span::after {\\n    background: green;\\n    transform: translate(100%);\\n  }\\n  input:focus + span {\\n    border: 1px solid cornflowerblue;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoBE,mCAAM,CACJ,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,WAAW,CAClB,cAAc,CAAE,MAClB,CACA,kCAAK,CACH,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,CAC3B,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,IACd,CACA,oBAAK,QAAQ,CAAG,mBAAK,CACnB,UAAU,CAAE,KACd,CACA,mCAAM,CACJ,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,GACT,CACA,oBAAK,CAAG,mBAAI,OAAQ,CAClB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IACd,CACA,oBAAK,QAAQ,CAAG,mBAAI,OAAQ,CAC1B,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,UAAU,IAAI,CAC3B,CACA,oBAAK,MAAM,CAAG,mBAAK,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,cACpB"}'
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  let { required = false } = $$props;
  let { style = `` } = $$props;
  let { id = `` } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<label${add_attribute("style", style, 0)} class="svelte-1t6bfja">${slots.default ? slots.default({}) : ``} <input type="checkbox"${add_attribute("id", id, 0)} ${required ? "required" : ""} class="svelte-1t6bfja"${add_attribute("checked", checked, 1)}> <span class="svelte-1t6bfja"></span> </label>`;
});
export {
  Toggle as T
};
