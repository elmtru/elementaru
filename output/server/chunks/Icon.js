import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape, j as spread, l as escape_object, m as missing_component } from "./ssr.js";
import { i as is_void } from "./names.js";
import "./client.js";
import "./Tooltip.svelte_svelte_type_style_lang.js";
const CopyButton_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = `` } = $$props;
  let { style = null } = $$props;
  let { state = `default` } = $$props;
  let { global_selector = null } = $$props;
  let { global = false } = $$props;
  let { skip_selector = `button` } = $$props;
  let { as = `button` } = $$props;
  const labels = {
    default: [`Copy`, `Copy`],
    success: [`Copied`, `Check`],
    error: [`Error`, `Alert`]
  };
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.global_selector === void 0 && $$bindings.global_selector && global_selector !== void 0)
    $$bindings.global_selector(global_selector);
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.skip_selector === void 0 && $$bindings.skip_selector && skip_selector !== void 0)
    $$bindings.skip_selector(skip_selector);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  return `${!(global || global_selector) ? `${((tag) => {
    return tag ? `<${as}${add_attribute("style", style, 0)} role="button"${add_attribute("tabindex", 0, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ` ${validate_component(Icon, "Icon").$$render($$result, { icon: labels[state][1] }, {}, {})} <span>${escape(labels[state][0])}</span> `}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}` : ``}`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "32" },
      { height: "32" },
      { viewBox: "0 0 16 16" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "24" },
      { height: "32" },
      { viewBox: "0 0 12 16" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="M12 5l-8 8l-4-4l1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>`;
});
const Collapse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "32" },
      { height: "32" },
      { viewBox: "0 0 24 24" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="M12 7.59L7.05 2.64L5.64 4.05L12 10.41l6.36-6.36l-1.41-1.41L12 7.59zM5.64 19.95l1.41 1.41L12 16.41l4.95 4.95l1.41-1.41L12 13.59l-6.36 6.36z"></path></svg>`;
});
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "32" },
      { height: "32" },
      { viewBox: "0 0 16 16" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>`;
});
const Cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread([{ viewBox: "0 0 24 24" }, { fill: "currentColor" }, escape_object($$props)], {})}><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>`;
});
const Disabled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread([escape_object($$props), { viewBox: "0 0 24 24" }, { fill: "currentColor" }], {})}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32ZM5.68 16.906A8 8 0 0 1 16.906 5.68L5.68 16.906Z"></path></svg>`;
});
const Expand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "32" },
      { height: "32" },
      { viewBox: "0 0 24 24" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="m12 19.24l-4.95-4.95l-1.41 1.42L12 22.07l6.36-6.36l-1.41-1.42L12 19.24zM5.64 8.29l1.41 1.42L12 4.76l4.95 4.95l1.41-1.42L12 1.93L5.64 8.29z"></path></svg>`;
});
const GitHub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread([escape_object($$props), { viewBox: "0 0 24 24" }, { fill: "currentColor" }], {})}><path d="M8.422 20.081c0 .896.01 1.753.016 2.285a.617.617 0 0 0 .422.58c2.078.686 4.317.718 6.414.091l.292-.087a.67.67 0 0 0 .478-.638c.005-.733.017-2.017.017-3.53c0-1.372-.477-2.25-1.031-2.707c3.399-.366 6.97-1.61 6.97-7.227c0-1.61-.592-2.91-1.566-3.934c.153-.366.688-1.866-.153-3.878c0 0-1.28-.403-4.201 1.5a14.76 14.76 0 0 0-3.82-.494c-1.298 0-2.597.165-3.819.494C5.52.65 4.24 1.036 4.24 1.036c-.84 2.012-.306 3.512-.153 3.878a5.565 5.565 0 0 0-1.566 3.934c0 5.598 3.552 6.86 6.951 7.227c-.439.366-.84 1.006-.973 1.957c-.879.384-3.075 1.006-4.45-1.207c-.286-.44-1.146-1.519-2.349-1.5c-1.28.018-.516.695.02.97c.648.347 1.393 1.646 1.565 2.067c.306.823 1.299 2.396 5.137 1.72Z"></path></svg>`;
});
const StackBlitz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "32" },
      { height: "32" },
      { viewBox: "0 0 24 24" },
      escape_object($$props),
      { fill: "currentColor" }
    ],
    {}
  )}><path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z"></path></svg>`;
});
const Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread(
    [
      { width: "32" },
      { height: "32" },
      { viewBox: "0 0 24 24" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767a4.109 4.109 0 0 1-.703-3.107a3.898 3.898 0 0 1 .134-.522l.105-.321l.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063l-.02.208a1.253 1.253 0 0 0 .226.83a1.337 1.337 0 0 0 1.435.533a1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778a1.242 1.242 0 0 0-.211-.937a1.338 1.338 0 0 0-1.435-.533a1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499a4.44 4.44 0 0 1-4.765-1.766a4.108 4.108 0 0 1-.702-3.108a3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499a4.44 4.44 0 0 1 4.765 1.767a4.109 4.109 0 0 1 .703 3.107a3.943 3.943 0 0 1-.134.522l-.105.321l-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063l.02-.207a1.255 1.255 0 0 0-.226-.831a1.337 1.337 0 0 0-1.435-.532a1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778a1.24 1.24 0 0 0 .211.937a1.338 1.338 0 0 0 1.435.533a1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498a4.44 4.44 0 0 1 4.765 1.766a4.108 4.108 0 0 1 .702 3.108a3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295a6.753 6.753 0 0 0 .666 4.336a6.43 6.43 0 0 0-.96 2.396a6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295a6.756 6.756 0 0 0-.665-4.336a6.429 6.429 0 0 0 .958-2.396a6.831 6.831 0 0 0-1.167-5.168Z"></path></svg>`;
});
const icons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alert,
  Check,
  Collapse,
  Copy,
  Cross,
  Disabled,
  Expand,
  GitHub,
  StackBlitz,
  Svelte
}, Symbol.toStringTag, { value: "Module" }));
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { style = `display: inline-block; vertical-align: middle;` } = $$props;
  let { width = `1em` } = $$props;
  let { height = width } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  {
    if (!(icon in icons)) {
      console.error(`Icon '${icon}' not found`);
    }
  }
  return `${validate_component(icons[icon] || missing_component, "svelte:component").$$render($$result, { style, width, height }, {}, {})}`;
});
export {
  CopyButton_1 as C,
  Icon as I
};
