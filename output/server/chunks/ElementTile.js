import { c as create_ssr_component, g as subscribe, p as createEventDispatcher, b as add_attribute, e as escape, d as add_styles, f as merge_ssr_styles } from "./ssr.js";
import { i as is_void } from "./names.js";
import { l as last_element, k as choose_bw_for_contrast, p as pretty_num } from "./index3.js";
import { $ as $format } from "./ru.js";
const css = {
  code: ".element-tile.svelte-10imx6a.svelte-10imx6a{position:relative;transition:background-color 0.4s;aspect-ratio:1;display:flex;place-items:center;place-content:center;border-radius:var(--elem-tile-border-radius, 1pt);width:100%;box-sizing:border-box;color:var(--elem-tile-text-color, white);border:1px solid transparent;container-type:inline-size}.element-tile.svelte-10imx6a span.svelte-10imx6a{line-height:1em}.element-tile.active.svelte-10imx6a.svelte-10imx6a,.element-tile.svelte-10imx6a.svelte-10imx6a:hover{border:var(--elem-tile-hover-border, 1px solid)}.last-active.svelte-10imx6a.svelte-10imx6a{border:1px dotted}.number.svelte-10imx6a.svelte-10imx6a{font-size:22cqw;position:absolute;top:6cqw;font-weight:lighter;left:6cqw}.symbol.svelte-10imx6a.svelte-10imx6a{font-size:40cqw}span.name.svelte-10imx6a.svelte-10imx6a,span.value.svelte-10imx6a.svelte-10imx6a{position:absolute;bottom:8cqw}span.value.svelte-10imx6a.svelte-10imx6a{font-size:18cqw}span.name.svelte-10imx6a.svelte-10imx6a{font-size:12cqw}",
  map: '{"version":3,"file":"ElementTile.svelte","sources":["ElementTile.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { choose_bw_for_contrast, pretty_num } from \'$lib\';\\nimport { last_element } from \'$lib/stores\';\\nimport { createEventDispatcher } from \'svelte\';\\nimport { _ } from \'svelte-i18n\';\\nexport let element;\\nexport let bg_color = null;\\nexport let show_symbol = true;\\nexport let show_number = true;\\nexport let show_name = true;\\nexport let value = undefined;\\nexport let style = ``;\\nexport let symbol_style = ``;\\nexport let active = false;\\nexport let href = null;\\n// at what background color lightness text color switches from black to white\\nexport let text_color_threshold = 0.7;\\nexport let text_color = null;\\nexport let precision = undefined;\\nexport let node = null;\\nexport let label = null;\\n$: category = element.category.replaceAll(` `, `-`);\\n// background color defaults to category color (initialized in colors.ts, user editable in ColorCustomizer.ts)\\nconst dispatch = createEventDispatcher();\\nfunction payload_event(dom_event) {\\n    dispatch(dom_event.type, { element, dom_event, active });\\n}\\n$: if (text_color_threshold != null && node) {\\n    text_color = choose_bw_for_contrast(node, bg_color, text_color_threshold);\\n}\\n<\/script>\\n\\n<svelte:element\\n  this={href ? `a` : `div`}\\n  bind:this={node}\\n  {href}\\n  data-sveltekit-noscroll\\n  class=\\"element-tile {category}\\"\\n  class:active\\n  class:last-active={$last_element === element}\\n  style:background-color={bg_color ?? `var(--${category}-bg-color)`}\\n  style:color={text_color}\\n  {style}\\n  on:mouseenter={payload_event}\\n  on:mouseleave={payload_event}\\n  on:click={payload_event}\\n  on:keyup={payload_event}\\n  on:keydown={payload_event}\\n  role=\\"link\\"\\n  tabindex=\\"0\\"\\n>\\n  {#if show_number}\\n    <span class=\\"number\\">\\n      {element.number}\\n    </span>\\n  {/if}\\n  {#if show_symbol}\\n    <span class=\\"symbol\\" style={symbol_style}>\\n      {element.symbol}\\n    </span>\\n  {/if}\\n  {#if value}\\n    <span class=\\"value\\">\\n      {pretty_num(value, precision)}\\n    </span>\\n  {:else if show_name}\\n    <span class=\\"name\\">\\n      {$_(\'element.name.\' + (label ?? element.name))}\\n    </span>\\n  {/if}\\n</svelte:element>\\n\\n<style>\\n  .element-tile {\\n    position: relative;\\n    transition: background-color 0.4s;\\n    aspect-ratio: 1;\\n    display: flex;\\n    place-items: center;\\n    place-content: center;\\n    border-radius: var(--elem-tile-border-radius, 1pt);\\n    width: 100%;\\n    box-sizing: border-box;\\n    color: var(--elem-tile-text-color, white);\\n    /* add persistent invisible border so content doesn\'t move on hover */\\n    border: 1px solid transparent;\\n    container-type: inline-size;\\n  }\\n  .element-tile span {\\n    line-height: 1em;\\n  }\\n  .element-tile.active,\\n  .element-tile:hover {\\n    border: var(--elem-tile-hover-border, 1px solid);\\n  }\\n  .last-active {\\n    border: 1px dotted;\\n  }\\n  .number {\\n    font-size: 22cqw;\\n    position: absolute;\\n    top: 6cqw;\\n    font-weight: lighter;\\n    left: 6cqw;\\n  }\\n  .symbol {\\n    font-size: 40cqw;\\n  }\\n  span.name,\\n  span.value {\\n    position: absolute;\\n    bottom: 8cqw;\\n  }\\n  span.value {\\n    font-size: 18cqw;\\n  }\\n  span.name {\\n    font-size: 12cqw;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwEE,2CAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CACjC,YAAY,CAAE,CAAC,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,IAAI,yBAAyB,CAAC,IAAI,CAAC,CAClD,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,IAAI,sBAAsB,CAAC,MAAM,CAAC,CAEzC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,cAAc,CAAE,WAClB,CACA,4BAAa,CAAC,mBAAK,CACjB,WAAW,CAAE,GACf,CACA,aAAa,qCAAO,CACpB,2CAAa,MAAO,CAClB,MAAM,CAAE,IAAI,wBAAwB,CAAC,UAAU,CACjD,CACA,0CAAa,CACX,MAAM,CAAE,GAAG,CAAC,MACd,CACA,qCAAQ,CACN,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,OAAO,CACpB,IAAI,CAAE,IACR,CACA,qCAAQ,CACN,SAAS,CAAE,KACb,CACA,IAAI,mCAAK,CACT,IAAI,oCAAO,CACT,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IACV,CACA,IAAI,oCAAO,CACT,SAAS,CAAE,KACb,CACA,IAAI,mCAAM,CACR,SAAS,CAAE,KACb"}'
};
const ElementTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let category;
  let $last_element, $$unsubscribe_last_element;
  let $_, $$unsubscribe__;
  $$unsubscribe_last_element = subscribe(last_element, (value2) => $last_element = value2);
  $$unsubscribe__ = subscribe($format, (value2) => $_ = value2);
  let { element } = $$props;
  let { bg_color = null } = $$props;
  let { show_symbol = true } = $$props;
  let { show_number = true } = $$props;
  let { show_name = true } = $$props;
  let { value = void 0 } = $$props;
  let { style = `` } = $$props;
  let { symbol_style = `` } = $$props;
  let { active = false } = $$props;
  let { href = null } = $$props;
  let { text_color_threshold = 0.7 } = $$props;
  let { text_color = null } = $$props;
  let { precision = void 0 } = $$props;
  let { node = null } = $$props;
  let { label = null } = $$props;
  createEventDispatcher();
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.bg_color === void 0 && $$bindings.bg_color && bg_color !== void 0)
    $$bindings.bg_color(bg_color);
  if ($$props.show_symbol === void 0 && $$bindings.show_symbol && show_symbol !== void 0)
    $$bindings.show_symbol(show_symbol);
  if ($$props.show_number === void 0 && $$bindings.show_number && show_number !== void 0)
    $$bindings.show_number(show_number);
  if ($$props.show_name === void 0 && $$bindings.show_name && show_name !== void 0)
    $$bindings.show_name(show_name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.symbol_style === void 0 && $$bindings.symbol_style && symbol_style !== void 0)
    $$bindings.symbol_style(symbol_style);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text_color_threshold === void 0 && $$bindings.text_color_threshold && text_color_threshold !== void 0)
    $$bindings.text_color_threshold(text_color_threshold);
  if ($$props.text_color === void 0 && $$bindings.text_color && text_color !== void 0)
    $$bindings.text_color(text_color);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  category = element.category.replaceAll(` `, `-`);
  {
    if (text_color_threshold != null && node) {
      text_color = choose_bw_for_contrast(node, bg_color, text_color_threshold);
    }
  }
  $$unsubscribe_last_element();
  $$unsubscribe__();
  return `${((tag) => {
    return tag ? `<${href ? `a` : `div`}${add_attribute("href", href, 0)} data-sveltekit-noscroll class="${[
      "element-tile " + escape(category, true) + " svelte-10imx6a",
      (active ? "active" : "") + " " + ($last_element === element ? "last-active" : "")
    ].join(" ").trim()}"${add_styles(merge_ssr_styles(escape(style, true), {
      "background-color": bg_color ?? `var(--${category}-bg-color)`,
      "color": text_color
    }))} role="link" tabindex="0"${add_attribute("this", node, 0)}>${is_void(tag) ? "" : `${show_number ? `<span class="number svelte-10imx6a">${escape(element.number)}</span>` : ``} ${show_symbol ? `<span class="symbol svelte-10imx6a"${add_attribute("style", symbol_style, 0)}>${escape(element.symbol)}</span>` : ``} ${value ? `<span class="value svelte-10imx6a">${escape(pretty_num(value, precision))}</span>` : `${show_name ? `<span class="name svelte-10imx6a">${escape($_("element.name." + (label ?? element.name)))}</span>` : ``}`} `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? `a` : `div`)}`;
});
export {
  ElementTile as E
};
