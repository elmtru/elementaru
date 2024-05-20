import { r as noop, c as create_ssr_component, d as add_styles, f as merge_ssr_styles, e as escape, g as subscribe, j as spread, l as escape_object, p as createEventDispatcher, b as add_attribute, v as validate_component, h as each, n as null_to_empty } from "./ssr.js";
import "./index3.js";
import { w as writable } from "./index2.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const css$1 = {
  code: "div.svelte-66wdl1{display:inline-block;vertical-align:middle;margin:0 3pt;border-width:calc(1em / 5);border-style:solid;border-radius:50%;animation:var(--duration) infinite svelte-66wdl1-rotate}@keyframes svelte-66wdl1-rotate{100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"CircleSpinner.svelte","sources":["CircleSpinner.svelte"],"sourcesContent":["<script>export let color = `cornflowerblue`;\\nexport let duration = `1.5s`;\\nexport let size = `1em`;\\n<\/script>\\n\\n<div\\n  style=\\"--duration: {duration}\\"\\n  style:border-color=\\"{color} transparent {color}\\n  {color}\\"\\n  style:width={size}\\n  style:height={size}\\n/>\\n\\n<style>\\n  div {\\n    display: inline-block;\\n    vertical-align: middle;\\n    margin: 0 3pt;\\n    border-width: calc(1em / 5);\\n    border-style: solid;\\n    border-radius: 50%;\\n    animation: var(--duration) infinite rotate;\\n  }\\n  @keyframes rotate {\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAcE,iBAAI,CACF,OAAO,CAAE,YAAY,CACrB,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,CAAC,CAAC,GAAG,CACb,YAAY,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAC3B,YAAY,CAAE,KAAK,CACnB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,oBACtC,CACA,WAAW,oBAAO,CAChB,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}'
};
const CircleSpinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = `cornflowerblue` } = $$props;
  let { duration = `1.5s` } = $$props;
  let { size = `1em` } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$1);
  return `<div${add_styles(merge_ssr_styles("--duration: " + escape(duration, true), {
    "border-color": `${color} transparent ${color}
  ${color}`,
    "width": size,
    "height": size
  }))} class="svelte-66wdl1"></div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Wiggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { wiggle = false } = $$props;
  let { angle = 0 } = $$props;
  let { scale = 1 } = $$props;
  let { dx = 0 } = $$props;
  let { dy = 0 } = $$props;
  let { duration = 200 } = $$props;
  let { stiffness = 0.05 } = $$props;
  let { damping = 0.1 } = $$props;
  let rest_state = { angle: 0, scale: 1, dx: 0, dy: 0 };
  let store = spring(rest_state, { stiffness, damping });
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.wiggle === void 0 && $$bindings.wiggle && wiggle !== void 0)
    $$bindings.wiggle(wiggle);
  if ($$props.angle === void 0 && $$bindings.angle && angle !== void 0)
    $$bindings.angle(angle);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.dx === void 0 && $$bindings.dx && dx !== void 0)
    $$bindings.dx(dx);
  if ($$props.dy === void 0 && $$bindings.dy && dy !== void 0)
    $$bindings.dy(dy);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.stiffness === void 0 && $$bindings.stiffness && stiffness !== void 0)
    $$bindings.stiffness(stiffness);
  if ($$props.damping === void 0 && $$bindings.damping && damping !== void 0)
    $$bindings.damping(damping);
  {
    if (wiggle)
      setTimeout(() => wiggle = false, duration);
  }
  {
    store.set(wiggle ? { scale, angle, dx, dy } : rest_state);
  }
  $$unsubscribe_store();
  return `<span${add_styles({
    "transform": `rotate(${$store.angle}deg) scale(${$store.scale}) translate(${$store.dx}px,
  ${$store.dy}px)`
  })}>${slots.default ? slots.default({}) : ``}</span>`;
});
const ChevronExpand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([escape_object($$props), { fill: "currentColor" }, { viewBox: "0 0 16 16" }], {})}><path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"></path></svg>`;
});
const Cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([escape_object($$props), { viewBox: "0 0 24 24" }, { fill: "currentColor" }], {})}><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg> `;
});
const Disabled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread([escape_object($$props), { viewBox: "0 0 24 24" }, { fill: "currentColor" }], {})}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm-4.906-3.68L18.32 7.094A8 8 0 0 1 7.094 18.32ZM5.68 16.906A8 8 0 0 1 16.906 5.68L5.68 16.906Z"></path></svg>`;
});
const get_label = (opt) => {
  if (opt instanceof Object) {
    if (opt.label === void 0) {
      console.error(`MultiSelect option ${JSON.stringify(opt)} is an object but has no label key`);
    }
    return opt.label;
  }
  return `${opt}`;
};
function get_style(option, key = null) {
  let css_str = ``;
  if (![`selected`, `option`, null].includes(key)) {
    console.error(`MultiSelect: Invalid key=${key} for get_style`);
  }
  if (typeof option == `object` && option.style) {
    if (typeof option.style == `string`) {
      css_str = option.style;
    }
    if (typeof option.style == `object`) {
      if (key && key in option.style)
        return option.style[key] ?? ``;
      else {
        console.error(`Invalid style object for option=${JSON.stringify(option)}`);
      }
    }
  }
  if (css_str.trim() && !css_str.trim().endsWith(`;`))
    css_str += `;`;
  return css_str;
}
const css = {
  code: ".svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect){position:relative;align-items:center;display:flex;cursor:text;box-sizing:border-box;border:var(--sms-border, 1pt solid lightgray);border-radius:var(--sms-border-radius, 3pt);background:var(--sms-bg);width:var(--sms-width);max-width:var(--sms-max-width);padding:var(--sms-padding, 0 3pt);color:var(--sms-text-color);font-size:var(--sms-font-size, inherit);min-height:var(--sms-min-height, 22pt);margin:var(--sms-margin)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect.open){z-index:var(--sms-open-z-index, 4)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect:focus-within){border:var(--sms-focus-border, 1pt solid var(--sms-active-color, cornflowerblue))}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect.disabled){background:var(--sms-disabled-bg, lightgray);cursor:not-allowed}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.selected){display:flex;flex:1;padding:0;margin:0;flex-wrap:wrap}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.selected > li){align-items:center;border-radius:3pt;display:flex;margin:2pt;line-height:normal;transition:0.3s;white-space:nowrap;background:var(--sms-selected-bg, rgba(0, 0, 0, 0.15));padding:var(--sms-selected-li-padding, 1pt 5pt);color:var(--sms-selected-text-color, var(--sms-text-color))}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.selected > li[draggable='true']){cursor:grab}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.selected > li.active){background:var(--sms-li-active-bg, var(--sms-active-color, rgba(0, 0, 0, 0.15)))}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect button){border-radius:50%;display:flex;transition:0.2s;color:inherit;background:transparent;border:none;cursor:pointer;outline:none;padding:0;margin:0 0 0 3pt}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect button.remove-all){margin:0 3pt}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(ul.selected > li button:hover, button.remove-all:hover, button:focus){color:var(--sms-remove-btn-hover-color, lightskyblue);background:var(--sms-remove-btn-hover-bg, rgba(0, 0, 0, 0.2))}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect input){margin:auto 0;padding:0}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.selected > input){border:none;outline:none;background:none;flex:1;min-width:2em;color:var(--sms-text-color);font-size:inherit;cursor:inherit;border-radius:0}div.multiselect.svelte-1r2hsto>ul.selected.svelte-1r2hsto>input.svelte-1r2hsto::placeholder{padding-left:5pt;color:var(--sms-placeholder-color);opacity:var(--sms-placeholder-opacity)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > input.form-control){width:2em;position:absolute;background:transparent;border:none;outline:none;z-index:-1;opacity:0;pointer-events:none}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options){list-style:none;top:100%;left:0;width:100%;position:absolute;overflow:auto;transition:all 0.2s;box-sizing:border-box;background:var(--sms-options-bg, white);max-height:var(--sms-options-max-height, 50vh);overscroll-behavior:var(--sms-options-overscroll, none);box-shadow:var(--sms-options-shadow, 0 0 14pt -8pt black);border:var(--sms-options-border);border-width:var(--sms-options-border-width);border-radius:var(--sms-options-border-radius, 1ex);padding:var(--sms-options-padding);margin:var(--sms-options-margin, inherit)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options.hidden){visibility:hidden;opacity:0;transform:translateY(50px)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options > li){padding:3pt 2ex;cursor:pointer;scroll-margin:var(--sms-options-scroll-margin, 100px)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options .user-msg){display:block;padding:3pt 2ex}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options > li.selected){background:var(--sms-li-selected-bg);color:var(--sms-li-selected-color)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options > li.active){background:var(--sms-li-active-bg, var(--sms-active-color, rgba(0, 0, 0, 0.15)))}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(div.multiselect > ul.options > li.disabled){cursor:not-allowed;background:var(--sms-li-disabled-bg, #f5f5f6);color:var(--sms-li-disabled-text, #b8b8b8)}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto:where(span.max-select-msg){padding:0 3pt}.svelte-1r2hsto.svelte-1r2hsto.svelte-1r2hsto::highlight(sms-search-matches){color:mediumaquamarine}",
  map: '{"version":3,"file":"MultiSelect.svelte","sources":["MultiSelect.svelte"],"sourcesContent":["<script>import { createEventDispatcher, tick } from \'svelte\';\\nimport { flip } from \'svelte/animate\';\\nimport CircleSpinner from \'./CircleSpinner.svelte\';\\nimport Wiggle from \'./Wiggle.svelte\';\\nimport { CrossIcon, DisabledIcon, ExpandIcon } from \'./icons\';\\nimport { get_label, get_style } from \'./utils\';\\nexport let activeIndex = null;\\nexport let activeOption = null;\\nexport let createOptionMsg = `Create this option...`;\\nexport let allowUserOptions = false;\\nexport let allowEmpty = false; // added for https://github.com/janosh/svelte-multiselect/issues/192\\nexport let autocomplete = `off`;\\nexport let autoScroll = true;\\nexport let breakpoint = 800; // any screen with more horizontal pixels is considered desktop, below is mobile\\nexport let defaultDisabledTitle = `This option is disabled`;\\nexport let disabled = false;\\nexport let disabledInputTitle = `This input is disabled`;\\n// prettier-ignore\\nexport let duplicateOptionMsg = `This option is already selected`;\\nexport let duplicates = false; // whether to allow duplicate options\\n// takes two options and returns true if they are equal\\n// case-insensitive equality comparison after string coercion and looks only at the `label` key of object options by default\\nexport let key = (opt) => `${get_label(opt)}`.toLowerCase();\\nexport let filterFunc = (opt, searchText) => {\\n    if (!searchText)\\n        return true;\\n    return `${get_label(opt)}`.toLowerCase().includes(searchText.toLowerCase());\\n};\\nexport let closeDropdownOnSelect = `desktop`;\\nexport let form_input = null;\\nexport let highlightMatches = true;\\nexport let id = null;\\nexport let input = null;\\nexport let inputClass = ``;\\nexport let inputStyle = null;\\nexport let inputmode = null;\\nexport let invalid = false;\\nexport let liActiveOptionClass = ``;\\nexport let liActiveUserMsgClass = ``;\\nexport let liOptionClass = ``;\\nexport let liOptionStyle = null;\\nexport let liSelectedClass = ``;\\nexport let liSelectedStyle = null;\\nexport let liUserMsgClass = ``;\\nexport let loading = false;\\nexport let matchingOptions = [];\\nexport let maxOptions = undefined;\\nexport let maxSelect = null; // null means there is no upper limit for selected.length\\nexport let maxSelectMsg = (current, max) => (max > 1 ? `${current}/${max}` : ``);\\nexport let maxSelectMsgClass = ``;\\nexport let name = null;\\nexport let noMatchingOptionsMsg = `No matching options`;\\nexport let open = false;\\nexport let options;\\nexport let outerDiv = null;\\nexport let outerDivClass = ``;\\nexport let parseLabelsAsHtml = false; // should not be combined with allowUserOptions!\\nexport let pattern = null;\\nexport let placeholder = null;\\nexport let removeAllTitle = `Remove all`;\\nexport let removeBtnTitle = `Remove`;\\nexport let minSelect = null; // null means there is no lower limit for selected.length\\nexport let required = false;\\nexport let resetFilterOnAdd = true;\\nexport let searchText = ``;\\nexport let selected = options\\n    ?.filter((opt) => opt instanceof Object && opt?.preselected)\\n    .slice(0, maxSelect ?? undefined) ?? []; // don\'t allow more than maxSelect preselected options\\nexport let sortSelected = false;\\nexport let selectedOptionsDraggable = !sortSelected;\\nexport let style = null;\\nexport let ulOptionsClass = ``;\\nexport let ulSelectedClass = ``;\\nexport let ulSelectedStyle = null;\\nexport let ulOptionsStyle = null;\\nexport let value = null;\\nconst selected_to_value = (selected) => {\\n    value = maxSelect === 1 ? selected[0] ?? null : selected;\\n};\\nconst value_to_selected = (value) => {\\n    if (maxSelect === 1)\\n        selected = value ? [value] : [];\\n    else\\n        selected = value ?? [];\\n};\\n// if maxSelect=1, value is the single item in selected (or null if selected is empty)\\n// this solves both https://github.com/janosh/svelte-multiselect/issues/86 and\\n// https://github.com/janosh/svelte-multiselect/issues/136\\n$: selected_to_value(selected);\\n$: value_to_selected(value);\\nlet wiggle = false; // controls wiggle animation when user tries to exceed maxSelect\\nif (!(options?.length > 0)) {\\n    if (allowUserOptions || loading || disabled || allowEmpty) {\\n        options = []; // initializing as array avoids errors when component mounts\\n    }\\n    else {\\n        // error on empty options if user is not allowed to create custom options and loading is false\\n        // and component is not disabled and allowEmpty is false\\n        console.error(`MultiSelect received no options`);\\n    }\\n}\\nif (maxSelect !== null && maxSelect < 1) {\\n    console.error(`MultiSelect\'s maxSelect must be null or positive integer, got ${maxSelect}`);\\n}\\nif (!Array.isArray(selected)) {\\n    console.error(`MultiSelect\'s selected prop should always be an array, got ${selected}`);\\n}\\nif (maxSelect && typeof required === `number` && required > maxSelect) {\\n    console.error(`MultiSelect maxSelect=${maxSelect} < required=${required}, makes it impossible for users to submit a valid form`);\\n}\\nif (parseLabelsAsHtml && allowUserOptions) {\\n    console.warn(`Don\'t combine parseLabelsAsHtml and allowUserOptions. It\'s susceptible to XSS attacks!`);\\n}\\nif (sortSelected && selectedOptionsDraggable) {\\n    console.warn(`MultiSelect\'s sortSelected and selectedOptionsDraggable should not be combined as any ` +\\n        `user re-orderings of selected options will be undone by sortSelected on component re-renders.`);\\n}\\nif (allowUserOptions && !createOptionMsg && createOptionMsg !== null) {\\n    console.error(`MultiSelect has allowUserOptions=${allowUserOptions} but createOptionMsg=${createOptionMsg} is falsy. ` +\\n        `This prevents the \\"Add option\\" <span> from showing up, resulting in a confusing user experience.`);\\n}\\nif (maxOptions &&\\n    (typeof maxOptions != `number` || maxOptions < 0 || maxOptions % 1 != 0)) {\\n    console.error(`MultiSelect\'s maxOptions must be undefined or a positive integer, got ${maxOptions}`);\\n}\\nconst dispatch = createEventDispatcher();\\nlet option_msg_is_active = false; // controls active state of <li>{createOptionMsg}</li>\\nlet window_width;\\n// options matching the current search text\\n$: matchingOptions = options.filter((opt) => filterFunc(opt, searchText) &&\\n    // remove already selected options from dropdown list unless duplicate selections are allowed\\n    (!selected.map(key).includes(key(opt)) || duplicates));\\n// raise if matchingOptions[activeIndex] does not yield a value\\nif (activeIndex !== null && !matchingOptions[activeIndex]) {\\n    throw `Run time error, activeIndex=${activeIndex} is out of bounds, matchingOptions.length=${matchingOptions.length}`;\\n}\\n// update activeOption when activeIndex changes\\n$: activeOption = matchingOptions[activeIndex ?? -1] ?? null;\\n// add an option to selected list\\nfunction add(option, event) {\\n    if (maxSelect && maxSelect > 1 && selected.length >= maxSelect)\\n        wiggle = true;\\n    if (!isNaN(Number(option)) && typeof selected.map(get_label)[0] === `number`) {\\n        option = Number(option); // convert to number if possible\\n    }\\n    const is_duplicate = selected.map(key).includes(key(option));\\n    if ((maxSelect === null || maxSelect === 1 || selected.length < maxSelect) &&\\n        (duplicates || !is_duplicate)) {\\n        if (!options.includes(option) && // first check if we find option in the options list\\n            // this has the side-effect of not allowing to user to add the same\\n            // custom option twice in append mode\\n            [true, `append`].includes(allowUserOptions) &&\\n            searchText.length > 0) {\\n            // user entered text but no options match, so if allowUserOptions = true | \'append\', we create\\n            // a new option from the user-entered text\\n            if (typeof options[0] === `object`) {\\n                // if 1st option is an object, we create new option as object to keep type homogeneity\\n                option = { label: searchText };\\n            }\\n            else {\\n                if ([`number`, `undefined`].includes(typeof options[0]) &&\\n                    !isNaN(Number(searchText))) {\\n                    // create new option as number if it parses to a number and 1st option is also number or missing\\n                    option = Number(searchText);\\n                }\\n                else {\\n                    option = searchText; // else create custom option as string\\n                }\\n                dispatch(`create`, { option });\\n            }\\n            if (allowUserOptions === `append`)\\n                options = [...options, option];\\n        }\\n        if (resetFilterOnAdd)\\n            searchText = ``; // reset search string on selection\\n        if ([``, undefined, null].includes(option)) {\\n            console.error(`MultiSelect: encountered falsy option ${option}`);\\n            return;\\n        }\\n        if (maxSelect === 1) {\\n            // for maxSelect = 1 we always replace current option with new one\\n            selected = [option];\\n        }\\n        else {\\n            selected = [...selected, option];\\n            if (sortSelected === true) {\\n                selected = selected.sort((op1, op2) => {\\n                    const [label1, label2] = [get_label(op1), get_label(op2)];\\n                    // coerce to string if labels are numbers\\n                    return `${label1}`.localeCompare(`${label2}`);\\n                });\\n            }\\n            else if (typeof sortSelected === `function`) {\\n                selected = selected.sort(sortSelected);\\n            }\\n        }\\n        const reached_max_select = selected.length === maxSelect;\\n        const dropdown_should_close = closeDropdownOnSelect === true ||\\n            (closeDropdownOnSelect === `desktop` && window_width < breakpoint);\\n        if (reached_max_select || dropdown_should_close) {\\n            close_dropdown(event);\\n        }\\n        else if (!dropdown_should_close) {\\n            input?.focus();\\n        }\\n        dispatch(`add`, { option });\\n        dispatch(`change`, { option, type: `add` });\\n        invalid = false; // reset error status whenever new items are selected\\n        form_input?.setCustomValidity(``);\\n    }\\n}\\n// remove an option from selected list\\nfunction remove(to_remove) {\\n    if (selected.length === 0)\\n        return;\\n    const idx = selected.findIndex((opt) => key(opt) === key(to_remove));\\n    let [option] = selected.splice(idx, 1); // remove option from selected list\\n    if (option === undefined && allowUserOptions) {\\n        // if option with label could not be found but allowUserOptions is truthy,\\n        // assume it was created by user and create corresponding option object\\n        // on the fly for use as event payload\\n        const other_ops_type = typeof options[0];\\n        option = (other_ops_type ? { label: to_remove } : to_remove);\\n    }\\n    if (option === undefined) {\\n        return console.error(`Multiselect can\'t remove selected option ${JSON.stringify(to_remove)}, not found in selected list`);\\n    }\\n    selected = [...selected]; // trigger Svelte rerender\\n    invalid = false; // reset error status whenever items are removed\\n    form_input?.setCustomValidity(``);\\n    dispatch(`remove`, { option });\\n    dispatch(`change`, { option, type: `remove` });\\n}\\nfunction open_dropdown(event) {\\n    if (disabled)\\n        return;\\n    open = true;\\n    if (!(event instanceof FocusEvent)) {\\n        // avoid double-focussing input when event that opened dropdown was already input FocusEvent\\n        input?.focus();\\n    }\\n    dispatch(`open`, { event });\\n}\\nfunction close_dropdown(event) {\\n    open = false;\\n    input?.blur();\\n    activeIndex = null;\\n    dispatch(`close`, { event });\\n}\\n// handle all keyboard events this component receives\\nasync function handle_keydown(event) {\\n    // on escape or tab out of input: close options dropdown and reset search text\\n    if (event.key === `Escape` || event.key === `Tab`) {\\n        close_dropdown(event);\\n        searchText = ``;\\n    }\\n    // on enter key: toggle active option and reset search text\\n    else if (event.key === `Enter`) {\\n        event.preventDefault(); // prevent enter key from triggering form submission\\n        if (activeOption) {\\n            selected.includes(activeOption) ? remove(activeOption) : add(activeOption, event);\\n            searchText = ``;\\n        }\\n        else if (allowUserOptions && searchText.length > 0) {\\n            // user entered text but no options match, so if allowUserOptions is truthy, we create new option\\n            add(searchText, event);\\n        }\\n        // no active option and no search text means the options dropdown is closed\\n        // in which case enter means open it\\n        else\\n            open_dropdown(event);\\n    }\\n    // on up/down arrow keys: update active option\\n    else if ([`ArrowDown`, `ArrowUp`].includes(event.key)) {\\n        // if no option is active yet, but there are matching options, make first one active\\n        if (activeIndex === null && matchingOptions.length > 0) {\\n            activeIndex = 0;\\n            return;\\n        }\\n        else if (allowUserOptions && !matchingOptions.length && searchText.length > 0) {\\n            // if allowUserOptions is truthy and user entered text but no options match, we make\\n            // <li>{addUserMsg}</li> active on keydown (or toggle it if already active)\\n            option_msg_is_active = !option_msg_is_active;\\n            return;\\n        }\\n        else if (activeIndex === null) {\\n            // if no option is active and no options are matching, do nothing\\n            return;\\n        }\\n        event.preventDefault();\\n        // if none of the above special cases apply, we make next/prev option\\n        // active with wrap around at both ends\\n        const increment = event.key === `ArrowUp` ? -1 : 1;\\n        activeIndex = (activeIndex + increment) % matchingOptions.length;\\n        // in JS % behaves like remainder operator, not real modulo, so negative numbers stay negative\\n        // need to do manual wrap around at 0\\n        if (activeIndex < 0)\\n            activeIndex = matchingOptions.length - 1;\\n        if (autoScroll) {\\n            await tick();\\n            const li = document.querySelector(`ul.options > li.active`);\\n            if (li)\\n                li.scrollIntoViewIfNeeded?.();\\n        }\\n    }\\n    // on backspace key: remove last selected option\\n    else if (event.key === `Backspace` && selected.length > 0 && !searchText) {\\n        remove(selected.at(-1));\\n    }\\n    // make first matching option active on any keypress (if none of the above special cases match)\\n    else if (matchingOptions.length > 0) {\\n        activeIndex = 0;\\n    }\\n}\\nfunction remove_all() {\\n    dispatch(`removeAll`, { options: selected });\\n    dispatch(`change`, { options: selected, type: `removeAll` });\\n    selected = [];\\n    searchText = ``;\\n}\\n$: is_selected = (label) => selected.map(get_label).includes(label);\\nconst if_enter_or_space = (handler) => (event) => {\\n    if ([`Enter`, `Space`].includes(event.code)) {\\n        event.preventDefault();\\n        handler();\\n    }\\n};\\nfunction on_click_outside(event) {\\n    if (outerDiv && !outerDiv.contains(event.target)) {\\n        close_dropdown(event);\\n    }\\n}\\nlet drag_idx = null;\\n// event handlers enable dragging to reorder selected options\\nconst drop = (target_idx) => (event) => {\\n    if (!event.dataTransfer)\\n        return;\\n    event.dataTransfer.dropEffect = `move`;\\n    const start_idx = parseInt(event.dataTransfer.getData(`text/plain`));\\n    const new_selected = [...selected];\\n    if (start_idx < target_idx) {\\n        new_selected.splice(target_idx + 1, 0, new_selected[start_idx]);\\n        new_selected.splice(start_idx, 1);\\n    }\\n    else {\\n        new_selected.splice(target_idx, 0, new_selected[start_idx]);\\n        new_selected.splice(start_idx + 1, 1);\\n    }\\n    selected = new_selected;\\n    drag_idx = null;\\n};\\nconst dragstart = (idx) => (event) => {\\n    if (!event.dataTransfer)\\n        return;\\n    // only allow moving, not copying (also affects the cursor during drag)\\n    event.dataTransfer.effectAllowed = `move`;\\n    event.dataTransfer.dropEffect = `move`;\\n    event.dataTransfer.setData(`text/plain`, `${idx}`);\\n};\\nlet ul_options;\\n// highlight text matching user-entered search text in available options\\nfunction highlight_matching_options(event) {\\n    if (!highlightMatches || typeof CSS == `undefined` || !CSS.highlights)\\n        return; // abort if CSS highlight API not supported\\n    // clear previous ranges from HighlightRegistry\\n    CSS.highlights.clear();\\n    // get input\'s search query\\n    const query = event?.target?.value.trim().toLowerCase();\\n    if (!query)\\n        return;\\n    const tree_walker = document.createTreeWalker(ul_options, NodeFilter.SHOW_TEXT, {\\n        acceptNode: (node) => {\\n            // don\'t highlight text in the \\"no matching options\\" message\\n            if (node?.textContent === noMatchingOptionsMsg)\\n                return NodeFilter.FILTER_REJECT;\\n            return NodeFilter.FILTER_ACCEPT;\\n        },\\n    });\\n    const text_nodes = [];\\n    let current_node = tree_walker.nextNode();\\n    while (current_node) {\\n        text_nodes.push(current_node);\\n        current_node = tree_walker.nextNode();\\n    }\\n    // iterate over all text nodes and find matches\\n    const ranges = text_nodes.map((el) => {\\n        const text = el.textContent?.toLowerCase();\\n        const indices = [];\\n        let start_pos = 0;\\n        while (text && start_pos < text.length) {\\n            const index = text.indexOf(query, start_pos);\\n            if (index === -1)\\n                break;\\n            indices.push(index);\\n            start_pos = index + query.length;\\n        }\\n        // create range object for each str found in the text node\\n        return indices.map((index) => {\\n            const range = new Range();\\n            range.setStart(el, index);\\n            range.setEnd(el, index + query.length);\\n            return range;\\n        });\\n    });\\n    // create Highlight object from ranges and add to registry\\n    CSS.highlights.set(`sms-search-matches`, new Highlight(...ranges.flat()));\\n}\\n// reset form validation when required prop changes\\n// https://github.com/janosh/svelte-multiselect/issues/285\\n$: required, form_input?.setCustomValidity(``);\\n<\/script>\\n\\n<svelte:window\\n  on:click={on_click_outside}\\n  on:touchstart={on_click_outside}\\n  bind:innerWidth={window_width}\\n/>\\n\\n<div\\n  bind:this={outerDiv}\\n  class:disabled\\n  class:single={maxSelect === 1}\\n  class:open\\n  class:invalid\\n  class=\\"multiselect {outerDivClass}\\"\\n  on:mouseup|stopPropagation={open_dropdown}\\n  title={disabled ? disabledInputTitle : null}\\n  data-id={id}\\n  role=\\"searchbox\\"\\n  tabindex=\\"-1\\"\\n  {style}\\n>\\n  <!-- form control input invisible to the user, only purpose is to abort form submission if this component fails data validation -->\\n  <!-- bind:value={selected} prevents form submission if required prop is true and no options are selected -->\\n  <input\\n    {name}\\n    {required}\\n    value={selected.length >= Number(required) ? JSON.stringify(selected) : null}\\n    tabindex=\\"-1\\"\\n    aria-hidden=\\"true\\"\\n    aria-label=\\"ignore this, used only to prevent form submission if select is required but empty\\"\\n    class=\\"form-control\\"\\n    bind:this={form_input}\\n    on:invalid={() => {\\n      invalid = true\\n      let msg\\n      if (maxSelect && maxSelect > 1 && Number(required) > 1) {\\n        msg = `Please select between ${required} and ${maxSelect} options`\\n      } else if (Number(required) > 1) {\\n        msg = `Please select at least ${required} options`\\n      } else {\\n        msg = `Please select an option`\\n      }\\n      form_input?.setCustomValidity(msg)\\n    }}\\n  />\\n  <slot name=\\"expand-icon\\" {open}>\\n    <ExpandIcon width=\\"15px\\" style=\\"min-width: 1em; padding: 0 1pt; cursor: pointer;\\" />\\n  </slot>\\n  <ul\\n    class=\\"selected {ulSelectedClass}\\"\\n    aria-label=\\"selected options\\"\\n    style={ulSelectedStyle}\\n  >\\n    {#each selected as option, idx (duplicates ? [key(option), idx] : key(option))}\\n      <li\\n        class={liSelectedClass}\\n        role=\\"option\\"\\n        aria-selected=\\"true\\"\\n        animate:flip={{ duration: 100 }}\\n        draggable={selectedOptionsDraggable && !disabled && selected.length > 1}\\n        on:dragstart={dragstart(idx)}\\n        on:drop|preventDefault={drop(idx)}\\n        on:dragenter={() => (drag_idx = idx)}\\n        on:dragover|preventDefault\\n        class:active={drag_idx === idx}\\n        style=\\"{get_style(option, `selected`)} {liSelectedStyle}\\"\\n      >\\n        <!-- on:dragover|preventDefault needed for the drop to succeed https://stackoverflow.com/a/31085796 -->\\n        <slot name=\\"selected\\" {option} {idx}>\\n          <slot {option} {idx}>\\n            {#if parseLabelsAsHtml}\\n              {@html get_label(option)}\\n            {:else}\\n              {get_label(option)}\\n            {/if}\\n          </slot>\\n        </slot>\\n        {#if !disabled && (minSelect === null || selected.length > minSelect)}\\n          <button\\n            on:mouseup|stopPropagation={() => remove(option)}\\n            on:keydown={if_enter_or_space(() => remove(option))}\\n            type=\\"button\\"\\n            title=\\"{removeBtnTitle} {get_label(option)}\\"\\n            class=\\"remove\\"\\n          >\\n            <slot name=\\"remove-icon\\">\\n              <CrossIcon width=\\"15px\\" />\\n            </slot>\\n          </button>\\n        {/if}\\n      </li>\\n    {/each}\\n    <input\\n      class={inputClass}\\n      style={inputStyle}\\n      bind:this={input}\\n      bind:value={searchText}\\n      on:mouseup|self|stopPropagation={open_dropdown}\\n      on:keydown|stopPropagation={handle_keydown}\\n      on:focus\\n      on:focus={open_dropdown}\\n      on:input={highlight_matching_options}\\n      {id}\\n      {disabled}\\n      {autocomplete}\\n      {inputmode}\\n      {pattern}\\n      placeholder={selected.length == 0 ? placeholder : null}\\n      aria-invalid={invalid ? `true` : null}\\n      ondrop=\\"return false\\"\\n      on:blur\\n      on:change\\n      on:click\\n      on:keydown\\n      on:keyup\\n      on:mousedown\\n      on:mouseenter\\n      on:mouseleave\\n      on:touchcancel\\n      on:touchend\\n      on:touchmove\\n      on:touchstart\\n    />\\n    <!-- the above on:* lines forward potentially useful DOM events -->\\n    <slot\\n      name=\\"after-input\\"\\n      {selected}\\n      {disabled}\\n      {invalid}\\n      {id}\\n      {placeholder}\\n      {open}\\n      {required}\\n    />\\n  </ul>\\n  {#if loading}\\n    <slot name=\\"spinner\\">\\n      <CircleSpinner />\\n    </slot>\\n  {/if}\\n  {#if disabled}\\n    <slot name=\\"disabled-icon\\">\\n      <DisabledIcon width=\\"14pt\\" style=\\"margin: 0 2pt;\\" data-name=\\"disabled-icon\\" />\\n    </slot>\\n  {:else if selected.length > 0}\\n    {#if maxSelect && (maxSelect > 1 || maxSelectMsg)}\\n      <Wiggle bind:wiggle angle={20}>\\n        <span class=\\"max-select-msg {maxSelectMsgClass}\\">\\n          {maxSelectMsg?.(selected.length, maxSelect)}\\n        </span>\\n      </Wiggle>\\n    {/if}\\n    {#if maxSelect !== 1 && selected.length > 1}\\n      <button\\n        type=\\"button\\"\\n        class=\\"remove remove-all\\"\\n        title={removeAllTitle}\\n        on:mouseup|stopPropagation={remove_all}\\n        on:keydown={if_enter_or_space(remove_all)}\\n      >\\n        <slot name=\\"remove-icon\\">\\n          <CrossIcon width=\\"15px\\" />\\n        </slot>\\n      </button>\\n    {/if}\\n  {/if}\\n\\n  <!-- only render options dropdown if options or searchText is not empty (needed to avoid briefly flashing empty dropdown) -->\\n  {#if (searchText && noMatchingOptionsMsg) || options?.length > 0}\\n    <ul\\n      class:hidden={!open}\\n      class=\\"options {ulOptionsClass}\\"\\n      role=\\"listbox\\"\\n      aria-multiselectable={maxSelect === null || maxSelect > 1}\\n      aria-expanded={open}\\n      aria-disabled={disabled ? `true` : null}\\n      bind:this={ul_options}\\n      style={ulOptionsStyle}\\n    >\\n      {#each matchingOptions.slice(0, Math.max(0, maxOptions ?? 0) || Infinity) as option, idx}\\n        {@const {\\n          label,\\n          disabled = null,\\n          title = null,\\n          selectedTitle = null,\\n          disabledTitle = defaultDisabledTitle,\\n        } = option instanceof Object ? option : { label: option }}\\n        {@const active = activeIndex === idx}\\n        <li\\n          on:mousedown|stopPropagation\\n          on:mouseup|stopPropagation={(event) => {\\n            if (!disabled) add(option, event)\\n          }}\\n          title={disabled\\n            ? disabledTitle\\n            : (is_selected(label) && selectedTitle) || title}\\n          class:selected={is_selected(label)}\\n          class:active\\n          class:disabled\\n          class=\\"{liOptionClass} {active ? liActiveOptionClass : ``}\\"\\n          on:mouseover={() => {\\n            if (!disabled) activeIndex = idx\\n          }}\\n          on:focus={() => {\\n            if (!disabled) activeIndex = idx\\n          }}\\n          on:mouseout={() => (activeIndex = null)}\\n          on:blur={() => (activeIndex = null)}\\n          role=\\"option\\"\\n          aria-selected=\\"false\\"\\n          style=\\"{get_style(option, `option`)} {liOptionStyle}\\"\\n        >\\n          <slot name=\\"option\\" {option} {idx}>\\n            <slot {option} {idx}>\\n              {#if parseLabelsAsHtml}\\n                {@html get_label(option)}\\n              {:else}\\n                {get_label(option)}\\n              {/if}\\n            </slot>\\n          </slot>\\n        </li>\\n      {/each}\\n      {#if searchText}\\n        {@const text_input_is_duplicate = selected.map(get_label).includes(searchText)}\\n        {@const is_dupe = !duplicates && text_input_is_duplicate && `dupe`}\\n        {@const can_create = Boolean(allowUserOptions && createOptionMsg) && `create`}\\n        {@const no_match =\\n          Boolean(matchingOptions?.length == 0 && noMatchingOptionsMsg) && `no-match`}\\n        {@const msgType = is_dupe || can_create || no_match}\\n        {#if msgType}\\n          {@const msg = {\\n            dupe: duplicateOptionMsg,\\n            create: createOptionMsg,\\n            \'no-match\': noMatchingOptionsMsg,\\n          }[msgType]}\\n          <li\\n            on:mousedown|stopPropagation\\n            on:mouseup|stopPropagation={(event) => {\\n              if (allowUserOptions) add(searchText, event)\\n            }}\\n            title={createOptionMsg}\\n            class:active={option_msg_is_active}\\n            on:mouseover={() => (option_msg_is_active = true)}\\n            on:focus={() => (option_msg_is_active = true)}\\n            on:mouseout={() => (option_msg_is_active = false)}\\n            on:blur={() => (option_msg_is_active = false)}\\n            role=\\"option\\"\\n            aria-selected=\\"false\\"\\n            class=\\"user-msg {liUserMsgClass} {option_msg_is_active\\n              ? liActiveUserMsgClass\\n              : ``}\\"\\n            style:cursor={{\\n              dupe: `not-allowed`,\\n              create: `pointer`,\\n              \'no-match\': `default`,\\n            }[msgType]}\\n          >\\n            <slot name=\\"user-msg\\" {searchText} {msgType} {msg}>\\n              {msg}\\n            </slot>\\n          </li>\\n        {/if}\\n      {/if}\\n    </ul>\\n  {/if}\\n</div>\\n\\n<style>\\n  :where(div.multiselect) {\\n    position: relative;\\n    align-items: center;\\n    display: flex;\\n    cursor: text;\\n    box-sizing: border-box;\\n    border: var(--sms-border, 1pt solid lightgray);\\n    border-radius: var(--sms-border-radius, 3pt);\\n    background: var(--sms-bg);\\n    width: var(--sms-width);\\n    max-width: var(--sms-max-width);\\n    padding: var(--sms-padding, 0 3pt);\\n    color: var(--sms-text-color);\\n    font-size: var(--sms-font-size, inherit);\\n    min-height: var(--sms-min-height, 22pt);\\n    margin: var(--sms-margin);\\n  }\\n  :where(div.multiselect.open) {\\n    /* increase z-index when open to ensure the dropdown of one <MultiSelect />\\n    displays above that of another slightly below it on the page */\\n    z-index: var(--sms-open-z-index, 4);\\n  }\\n  :where(div.multiselect:focus-within) {\\n    border: var(--sms-focus-border, 1pt solid var(--sms-active-color, cornflowerblue));\\n  }\\n  :where(div.multiselect.disabled) {\\n    background: var(--sms-disabled-bg, lightgray);\\n    cursor: not-allowed;\\n  }\\n\\n  :where(div.multiselect > ul.selected) {\\n    display: flex;\\n    flex: 1;\\n    padding: 0;\\n    margin: 0;\\n    flex-wrap: wrap;\\n  }\\n  :where(div.multiselect > ul.selected > li) {\\n    align-items: center;\\n    border-radius: 3pt;\\n    display: flex;\\n    margin: 2pt;\\n    line-height: normal;\\n    transition: 0.3s;\\n    white-space: nowrap;\\n    background: var(--sms-selected-bg, rgba(0, 0, 0, 0.15));\\n    padding: var(--sms-selected-li-padding, 1pt 5pt);\\n    color: var(--sms-selected-text-color, var(--sms-text-color));\\n  }\\n  :where(div.multiselect > ul.selected > li[draggable=\'true\']) {\\n    cursor: grab;\\n  }\\n  :where(div.multiselect > ul.selected > li.active) {\\n    background: var(--sms-li-active-bg, var(--sms-active-color, rgba(0, 0, 0, 0.15)));\\n  }\\n  :where(div.multiselect button) {\\n    border-radius: 50%;\\n    display: flex;\\n    transition: 0.2s;\\n    color: inherit;\\n    background: transparent;\\n    border: none;\\n    cursor: pointer;\\n    outline: none;\\n    padding: 0;\\n    margin: 0 0 0 3pt; /* CSS reset */\\n  }\\n  :where(div.multiselect button.remove-all) {\\n    margin: 0 3pt;\\n  }\\n  :where(ul.selected > li button:hover, button.remove-all:hover, button:focus) {\\n    color: var(--sms-remove-btn-hover-color, lightskyblue);\\n    background: var(--sms-remove-btn-hover-bg, rgba(0, 0, 0, 0.2));\\n  }\\n\\n  :where(div.multiselect input) {\\n    margin: auto 0; /* CSS reset */\\n    padding: 0; /* CSS reset */\\n  }\\n  :where(div.multiselect > ul.selected > input) {\\n    border: none;\\n    outline: none;\\n    background: none;\\n    flex: 1; /* this + next line fix issue #12 https://git.io/JiDe3 */\\n    min-width: 2em;\\n    /* ensure input uses text color and not --sms-selected-text-color */\\n    color: var(--sms-text-color);\\n    font-size: inherit;\\n    cursor: inherit; /* needed for disabled state */\\n    border-radius: 0; /* reset ul.selected > li */\\n  }\\n  /* don\'t wrap ::placeholder rules in :where() as it seems to be overpowered by browser defaults i.t.o. specificity */\\n  div.multiselect > ul.selected > input::placeholder {\\n    padding-left: 5pt;\\n    color: var(--sms-placeholder-color);\\n    opacity: var(--sms-placeholder-opacity);\\n  }\\n  :where(div.multiselect > input.form-control) {\\n    width: 2em;\\n    position: absolute;\\n    background: transparent;\\n    border: none;\\n    outline: none;\\n    z-index: -1;\\n    opacity: 0;\\n    pointer-events: none;\\n  }\\n\\n  :where(div.multiselect > ul.options) {\\n    list-style: none;\\n    top: 100%;\\n    left: 0;\\n    width: 100%;\\n    position: absolute;\\n    overflow: auto;\\n    transition: all 0.2s;\\n    box-sizing: border-box;\\n    background: var(--sms-options-bg, white);\\n    max-height: var(--sms-options-max-height, 50vh);\\n    overscroll-behavior: var(--sms-options-overscroll, none);\\n    box-shadow: var(--sms-options-shadow, 0 0 14pt -8pt black);\\n    border: var(--sms-options-border);\\n    border-width: var(--sms-options-border-width);\\n    border-radius: var(--sms-options-border-radius, 1ex);\\n    padding: var(--sms-options-padding);\\n    margin: var(--sms-options-margin, inherit);\\n  }\\n  :where(div.multiselect > ul.options.hidden) {\\n    visibility: hidden;\\n    opacity: 0;\\n    transform: translateY(50px);\\n  }\\n  :where(div.multiselect > ul.options > li) {\\n    padding: 3pt 2ex;\\n    cursor: pointer;\\n    scroll-margin: var(--sms-options-scroll-margin, 100px);\\n  }\\n  :where(div.multiselect > ul.options .user-msg) {\\n    /* block needed so vertical padding applies to span */\\n    display: block;\\n    padding: 3pt 2ex;\\n  }\\n  :where(div.multiselect > ul.options > li.selected) {\\n    background: var(--sms-li-selected-bg);\\n    color: var(--sms-li-selected-color);\\n  }\\n  :where(div.multiselect > ul.options > li.active) {\\n    background: var(--sms-li-active-bg, var(--sms-active-color, rgba(0, 0, 0, 0.15)));\\n  }\\n  :where(div.multiselect > ul.options > li.disabled) {\\n    cursor: not-allowed;\\n    background: var(--sms-li-disabled-bg, #f5f5f6);\\n    color: var(--sms-li-disabled-text, #b8b8b8);\\n  }\\n\\n  :where(span.max-select-msg) {\\n    padding: 0 3pt;\\n  }\\n  ::highlight(sms-search-matches) {\\n    color: mediumaquamarine;\\n  }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let is_selected;
  let { activeIndex = null } = $$props;
  let { activeOption = null } = $$props;
  let { createOptionMsg = `Create this option...` } = $$props;
  let { allowUserOptions = false } = $$props;
  let { allowEmpty = false } = $$props;
  let { autocomplete = `off` } = $$props;
  let { autoScroll = true } = $$props;
  let { breakpoint = 800 } = $$props;
  let { defaultDisabledTitle = `This option is disabled` } = $$props;
  let { disabled = false } = $$props;
  let { disabledInputTitle = `This input is disabled` } = $$props;
  let { duplicateOptionMsg = `This option is already selected` } = $$props;
  let { duplicates = false } = $$props;
  let { key = (opt) => `${get_label(opt)}`.toLowerCase() } = $$props;
  let { filterFunc = (opt, searchText2) => {
    if (!searchText2)
      return true;
    return `${get_label(opt)}`.toLowerCase().includes(searchText2.toLowerCase());
  } } = $$props;
  let { closeDropdownOnSelect = `desktop` } = $$props;
  let { form_input = null } = $$props;
  let { highlightMatches = true } = $$props;
  let { id = null } = $$props;
  let { input = null } = $$props;
  let { inputClass = `` } = $$props;
  let { inputStyle = null } = $$props;
  let { inputmode = null } = $$props;
  let { invalid = false } = $$props;
  let { liActiveOptionClass = `` } = $$props;
  let { liActiveUserMsgClass = `` } = $$props;
  let { liOptionClass = `` } = $$props;
  let { liOptionStyle = null } = $$props;
  let { liSelectedClass = `` } = $$props;
  let { liSelectedStyle = null } = $$props;
  let { liUserMsgClass = `` } = $$props;
  let { loading = false } = $$props;
  let { matchingOptions = [] } = $$props;
  let { maxOptions = void 0 } = $$props;
  let { maxSelect = null } = $$props;
  let { maxSelectMsg = (current, max) => max > 1 ? `${current}/${max}` : `` } = $$props;
  let { maxSelectMsgClass = `` } = $$props;
  let { name = null } = $$props;
  let { noMatchingOptionsMsg = `No matching options` } = $$props;
  let { open = false } = $$props;
  let { options } = $$props;
  let { outerDiv = null } = $$props;
  let { outerDivClass = `` } = $$props;
  let { parseLabelsAsHtml = false } = $$props;
  let { pattern = null } = $$props;
  let { placeholder = null } = $$props;
  let { removeAllTitle = `Remove all` } = $$props;
  let { removeBtnTitle = `Remove` } = $$props;
  let { minSelect = null } = $$props;
  let { required = false } = $$props;
  let { resetFilterOnAdd = true } = $$props;
  let { searchText = `` } = $$props;
  let { selected = options?.filter((opt) => opt instanceof Object && opt?.preselected).slice(0, maxSelect ?? void 0) ?? [] } = $$props;
  let { sortSelected = false } = $$props;
  let { selectedOptionsDraggable = !sortSelected } = $$props;
  let { style = null } = $$props;
  let { ulOptionsClass = `` } = $$props;
  let { ulSelectedClass = `` } = $$props;
  let { ulSelectedStyle = null } = $$props;
  let { ulOptionsStyle = null } = $$props;
  let { value = null } = $$props;
  const selected_to_value = (selected2) => {
    value = maxSelect === 1 ? selected2[0] ?? null : selected2;
  };
  const value_to_selected = (value2) => {
    if (maxSelect === 1)
      selected = value2 ? [value2] : [];
    else
      selected = value2 ?? [];
  };
  let wiggle = false;
  if (!(options?.length > 0)) {
    if (allowUserOptions || loading || disabled || allowEmpty) {
      options = [];
    } else {
      console.error(`MultiSelect received no options`);
    }
  }
  if (maxSelect !== null && maxSelect < 1) {
    console.error(`MultiSelect's maxSelect must be null or positive integer, got ${maxSelect}`);
  }
  if (!Array.isArray(selected)) {
    console.error(`MultiSelect's selected prop should always be an array, got ${selected}`);
  }
  if (maxSelect && typeof required === `number` && required > maxSelect) {
    console.error(`MultiSelect maxSelect=${maxSelect} < required=${required}, makes it impossible for users to submit a valid form`);
  }
  if (parseLabelsAsHtml && allowUserOptions) {
    console.warn(`Don't combine parseLabelsAsHtml and allowUserOptions. It's susceptible to XSS attacks!`);
  }
  if (sortSelected && selectedOptionsDraggable) {
    console.warn(`MultiSelect's sortSelected and selectedOptionsDraggable should not be combined as any user re-orderings of selected options will be undone by sortSelected on component re-renders.`);
  }
  if (allowUserOptions && !createOptionMsg && createOptionMsg !== null) {
    console.error(`MultiSelect has allowUserOptions=${allowUserOptions} but createOptionMsg=${createOptionMsg} is falsy. This prevents the "Add option" <span> from showing up, resulting in a confusing user experience.`);
  }
  if (maxOptions && (typeof maxOptions != `number` || maxOptions < 0 || maxOptions % 1 != 0)) {
    console.error(`MultiSelect's maxOptions must be undefined or a positive integer, got ${maxOptions}`);
  }
  createEventDispatcher();
  if (activeIndex !== null && !matchingOptions[activeIndex]) {
    throw `Run time error, activeIndex=${activeIndex} is out of bounds, matchingOptions.length=${matchingOptions.length}`;
  }
  let drag_idx = null;
  let ul_options;
  if ($$props.activeIndex === void 0 && $$bindings.activeIndex && activeIndex !== void 0)
    $$bindings.activeIndex(activeIndex);
  if ($$props.activeOption === void 0 && $$bindings.activeOption && activeOption !== void 0)
    $$bindings.activeOption(activeOption);
  if ($$props.createOptionMsg === void 0 && $$bindings.createOptionMsg && createOptionMsg !== void 0)
    $$bindings.createOptionMsg(createOptionMsg);
  if ($$props.allowUserOptions === void 0 && $$bindings.allowUserOptions && allowUserOptions !== void 0)
    $$bindings.allowUserOptions(allowUserOptions);
  if ($$props.allowEmpty === void 0 && $$bindings.allowEmpty && allowEmpty !== void 0)
    $$bindings.allowEmpty(allowEmpty);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.autoScroll === void 0 && $$bindings.autoScroll && autoScroll !== void 0)
    $$bindings.autoScroll(autoScroll);
  if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0)
    $$bindings.breakpoint(breakpoint);
  if ($$props.defaultDisabledTitle === void 0 && $$bindings.defaultDisabledTitle && defaultDisabledTitle !== void 0)
    $$bindings.defaultDisabledTitle(defaultDisabledTitle);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.disabledInputTitle === void 0 && $$bindings.disabledInputTitle && disabledInputTitle !== void 0)
    $$bindings.disabledInputTitle(disabledInputTitle);
  if ($$props.duplicateOptionMsg === void 0 && $$bindings.duplicateOptionMsg && duplicateOptionMsg !== void 0)
    $$bindings.duplicateOptionMsg(duplicateOptionMsg);
  if ($$props.duplicates === void 0 && $$bindings.duplicates && duplicates !== void 0)
    $$bindings.duplicates(duplicates);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.filterFunc === void 0 && $$bindings.filterFunc && filterFunc !== void 0)
    $$bindings.filterFunc(filterFunc);
  if ($$props.closeDropdownOnSelect === void 0 && $$bindings.closeDropdownOnSelect && closeDropdownOnSelect !== void 0)
    $$bindings.closeDropdownOnSelect(closeDropdownOnSelect);
  if ($$props.form_input === void 0 && $$bindings.form_input && form_input !== void 0)
    $$bindings.form_input(form_input);
  if ($$props.highlightMatches === void 0 && $$bindings.highlightMatches && highlightMatches !== void 0)
    $$bindings.highlightMatches(highlightMatches);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.inputStyle === void 0 && $$bindings.inputStyle && inputStyle !== void 0)
    $$bindings.inputStyle(inputStyle);
  if ($$props.inputmode === void 0 && $$bindings.inputmode && inputmode !== void 0)
    $$bindings.inputmode(inputmode);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.liActiveOptionClass === void 0 && $$bindings.liActiveOptionClass && liActiveOptionClass !== void 0)
    $$bindings.liActiveOptionClass(liActiveOptionClass);
  if ($$props.liActiveUserMsgClass === void 0 && $$bindings.liActiveUserMsgClass && liActiveUserMsgClass !== void 0)
    $$bindings.liActiveUserMsgClass(liActiveUserMsgClass);
  if ($$props.liOptionClass === void 0 && $$bindings.liOptionClass && liOptionClass !== void 0)
    $$bindings.liOptionClass(liOptionClass);
  if ($$props.liOptionStyle === void 0 && $$bindings.liOptionStyle && liOptionStyle !== void 0)
    $$bindings.liOptionStyle(liOptionStyle);
  if ($$props.liSelectedClass === void 0 && $$bindings.liSelectedClass && liSelectedClass !== void 0)
    $$bindings.liSelectedClass(liSelectedClass);
  if ($$props.liSelectedStyle === void 0 && $$bindings.liSelectedStyle && liSelectedStyle !== void 0)
    $$bindings.liSelectedStyle(liSelectedStyle);
  if ($$props.liUserMsgClass === void 0 && $$bindings.liUserMsgClass && liUserMsgClass !== void 0)
    $$bindings.liUserMsgClass(liUserMsgClass);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.matchingOptions === void 0 && $$bindings.matchingOptions && matchingOptions !== void 0)
    $$bindings.matchingOptions(matchingOptions);
  if ($$props.maxOptions === void 0 && $$bindings.maxOptions && maxOptions !== void 0)
    $$bindings.maxOptions(maxOptions);
  if ($$props.maxSelect === void 0 && $$bindings.maxSelect && maxSelect !== void 0)
    $$bindings.maxSelect(maxSelect);
  if ($$props.maxSelectMsg === void 0 && $$bindings.maxSelectMsg && maxSelectMsg !== void 0)
    $$bindings.maxSelectMsg(maxSelectMsg);
  if ($$props.maxSelectMsgClass === void 0 && $$bindings.maxSelectMsgClass && maxSelectMsgClass !== void 0)
    $$bindings.maxSelectMsgClass(maxSelectMsgClass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.noMatchingOptionsMsg === void 0 && $$bindings.noMatchingOptionsMsg && noMatchingOptionsMsg !== void 0)
    $$bindings.noMatchingOptionsMsg(noMatchingOptionsMsg);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.outerDiv === void 0 && $$bindings.outerDiv && outerDiv !== void 0)
    $$bindings.outerDiv(outerDiv);
  if ($$props.outerDivClass === void 0 && $$bindings.outerDivClass && outerDivClass !== void 0)
    $$bindings.outerDivClass(outerDivClass);
  if ($$props.parseLabelsAsHtml === void 0 && $$bindings.parseLabelsAsHtml && parseLabelsAsHtml !== void 0)
    $$bindings.parseLabelsAsHtml(parseLabelsAsHtml);
  if ($$props.pattern === void 0 && $$bindings.pattern && pattern !== void 0)
    $$bindings.pattern(pattern);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.removeAllTitle === void 0 && $$bindings.removeAllTitle && removeAllTitle !== void 0)
    $$bindings.removeAllTitle(removeAllTitle);
  if ($$props.removeBtnTitle === void 0 && $$bindings.removeBtnTitle && removeBtnTitle !== void 0)
    $$bindings.removeBtnTitle(removeBtnTitle);
  if ($$props.minSelect === void 0 && $$bindings.minSelect && minSelect !== void 0)
    $$bindings.minSelect(minSelect);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.resetFilterOnAdd === void 0 && $$bindings.resetFilterOnAdd && resetFilterOnAdd !== void 0)
    $$bindings.resetFilterOnAdd(resetFilterOnAdd);
  if ($$props.searchText === void 0 && $$bindings.searchText && searchText !== void 0)
    $$bindings.searchText(searchText);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.sortSelected === void 0 && $$bindings.sortSelected && sortSelected !== void 0)
    $$bindings.sortSelected(sortSelected);
  if ($$props.selectedOptionsDraggable === void 0 && $$bindings.selectedOptionsDraggable && selectedOptionsDraggable !== void 0)
    $$bindings.selectedOptionsDraggable(selectedOptionsDraggable);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ulOptionsClass === void 0 && $$bindings.ulOptionsClass && ulOptionsClass !== void 0)
    $$bindings.ulOptionsClass(ulOptionsClass);
  if ($$props.ulSelectedClass === void 0 && $$bindings.ulSelectedClass && ulSelectedClass !== void 0)
    $$bindings.ulSelectedClass(ulSelectedClass);
  if ($$props.ulSelectedStyle === void 0 && $$bindings.ulSelectedStyle && ulSelectedStyle !== void 0)
    $$bindings.ulSelectedStyle(ulSelectedStyle);
  if ($$props.ulOptionsStyle === void 0 && $$bindings.ulOptionsStyle && ulOptionsStyle !== void 0)
    $$bindings.ulOptionsStyle(ulOptionsStyle);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      selected_to_value(selected);
    }
    {
      value_to_selected(value);
    }
    matchingOptions = options.filter((opt) => filterFunc(opt, searchText) && // remove already selected options from dropdown list unless duplicate selections are allowed
    (!selected.map(key).includes(key(opt)) || duplicates));
    activeOption = matchingOptions[activeIndex ?? -1] ?? null;
    is_selected = (label) => selected.map(get_label).includes(label);
    {
      form_input?.setCustomValidity(``);
    }
    $$rendered = ` <div class="${[
      "multiselect " + escape(outerDivClass, true) + " svelte-1r2hsto",
      (disabled ? "disabled" : "") + " " + (maxSelect === 1 ? "single" : "") + " " + (open ? "open" : "") + " " + (invalid ? "invalid" : "")
    ].join(" ").trim()}"${add_attribute("title", disabled ? disabledInputTitle : null, 0)}${add_attribute("data-id", id, 0)} role="searchbox" tabindex="-1"${add_attribute("style", style, 0)}${add_attribute("this", outerDiv, 0)}>  <input${add_attribute("name", name, 0)} ${required ? "required" : ""}${add_attribute(
      "value",
      selected.length >= Number(required) ? JSON.stringify(selected) : null,
      0
    )} tabindex="-1" aria-hidden="true" aria-label="ignore this, used only to prevent form submission if select is required but empty" class="form-control svelte-1r2hsto"${add_attribute("this", form_input, 0)}> ${slots["expand-icon"] ? slots["expand-icon"]({ open }) : ` ${validate_component(ChevronExpand, "ExpandIcon").$$render(
      $$result,
      {
        width: "15px",
        style: "min-width: 1em; padding: 0 1pt; cursor: pointer;"
      },
      {},
      {}
    )} `} <ul class="${"selected " + escape(ulSelectedClass, true) + " svelte-1r2hsto"}" aria-label="selected options"${add_attribute("style", ulSelectedStyle, 0)}>${each(selected, (option, idx) => {
      return `<li class="${[
        escape(null_to_empty(liSelectedClass), true) + " svelte-1r2hsto",
        drag_idx === idx ? "active" : ""
      ].join(" ").trim()}" role="option" aria-selected="true"${add_attribute("draggable", selectedOptionsDraggable && !disabled && selected.length > 1, 0)} style="${escape(get_style(option, `selected`), true) + " " + escape(liSelectedStyle, true)}"> ${slots.selected ? slots.selected({ option, idx }) : ` ${slots.default ? slots.default({ option, idx }) : ` ${parseLabelsAsHtml ? `<!-- HTML_TAG_START -->${get_label(option)}<!-- HTML_TAG_END -->` : `${escape(get_label(option))}`} `} `} ${!disabled && (minSelect === null || selected.length > minSelect) ? `<button type="button" title="${escape(removeBtnTitle, true) + " " + escape(get_label(option), true)}" class="remove svelte-1r2hsto">${slots["remove-icon"] ? slots["remove-icon"]({}) : ` ${validate_component(Cross, "CrossIcon").$$render($$result, { width: "15px" }, {}, {})} `} </button>` : ``} </li>`;
    })} <input class="${escape(null_to_empty(inputClass), true) + " svelte-1r2hsto"}"${add_attribute("style", inputStyle, 0)}${add_attribute("id", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("inputmode", inputmode, 0)}${add_attribute("pattern", pattern, 0)}${add_attribute("placeholder", selected.length == 0 ? placeholder : null, 0)}${add_attribute("aria-invalid", invalid ? `true` : null, 0)} ondrop="return false"${add_attribute("this", input, 0)}${add_attribute("value", searchText, 0)}>  ${slots["after-input"] ? slots["after-input"]({
      selected,
      disabled,
      invalid,
      id,
      placeholder,
      open,
      required
    }) : ``}</ul> ${loading ? `${slots.spinner ? slots.spinner({}) : ` ${validate_component(CircleSpinner, "CircleSpinner").$$render($$result, {}, {}, {})} `}` : ``} ${disabled ? `${slots["disabled-icon"] ? slots["disabled-icon"]({}) : ` ${validate_component(Disabled, "DisabledIcon").$$render(
      $$result,
      {
        width: "14pt",
        style: "margin: 0 2pt;",
        "data-name": "disabled-icon"
      },
      {},
      {}
    )} `}` : `${selected.length > 0 ? `${maxSelect && (maxSelect > 1 || maxSelectMsg) ? `${validate_component(Wiggle, "Wiggle").$$render(
      $$result,
      { angle: 20, wiggle },
      {
        wiggle: ($$value) => {
          wiggle = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span class="${"max-select-msg " + escape(maxSelectMsgClass, true) + " svelte-1r2hsto"}">${escape(maxSelectMsg?.(selected.length, maxSelect))}</span>`;
        }
      }
    )}` : ``} ${maxSelect !== 1 && selected.length > 1 ? `<button type="button" class="remove remove-all svelte-1r2hsto"${add_attribute("title", removeAllTitle, 0)}>${slots["remove-icon"] ? slots["remove-icon"]({}) : ` ${validate_component(Cross, "CrossIcon").$$render($$result, { width: "15px" }, {}, {})} `}</button>` : ``}` : ``}`}  ${searchText && noMatchingOptionsMsg || options?.length > 0 ? `<ul class="${[
      "options " + escape(ulOptionsClass, true) + " svelte-1r2hsto",
      !open ? "hidden" : ""
    ].join(" ").trim()}" role="listbox"${add_attribute("aria-multiselectable", maxSelect === null || maxSelect > 1, 0)}${add_attribute("aria-expanded", open, 0)}${add_attribute("aria-disabled", disabled ? `true` : null, 0)}${add_attribute("style", ulOptionsStyle, 0)}${add_attribute("this", ul_options, 0)}>${each(matchingOptions.slice(0, Math.max(0, maxOptions ?? 0) || Infinity), (option, idx) => {
      let { label, disabled: disabled2 = null, title = null, selectedTitle = null, disabledTitle = defaultDisabledTitle } = option instanceof Object ? option : { label: option }, active = activeIndex === idx;
      return `  <li${add_attribute(
        "title",
        disabled2 ? disabledTitle : is_selected(label) && selectedTitle || title,
        0
      )} class="${[
        escape(liOptionClass, true) + " " + escape(active ? liActiveOptionClass : ``, true) + " svelte-1r2hsto",
        (is_selected(label) ? "selected" : "") + " " + (active ? "active" : "") + " " + (disabled2 ? "disabled" : "")
      ].join(" ").trim()}" role="option" aria-selected="false" style="${escape(get_style(option, `option`), true) + " " + escape(liOptionStyle, true)}">${slots.option ? slots.option({ option, idx }) : ` ${slots.default ? slots.default({ option, idx }) : ` ${parseLabelsAsHtml ? `<!-- HTML_TAG_START -->${get_label(option)}<!-- HTML_TAG_END -->` : `${escape(get_label(option))}`} `} `} </li>`;
    })} ${searchText ? (() => {
      let text_input_is_duplicate = selected.map(get_label).includes(searchText), is_dupe = !duplicates && text_input_is_duplicate && `dupe`, can_create = Boolean(allowUserOptions && createOptionMsg) && `create`, no_match = Boolean(matchingOptions?.length == 0 && noMatchingOptionsMsg) && `no-match`, msgType = is_dupe || can_create || no_match;
      return `     ${msgType ? (() => {
        let msg = {
          dupe: duplicateOptionMsg,
          create: createOptionMsg,
          "no-match": noMatchingOptionsMsg
        }[msgType];
        return ` <li${add_attribute("title", createOptionMsg, 0)} role="option" aria-selected="false" class="${[
          "user-msg " + escape(liUserMsgClass, true) + " " + escape(``, true) + " svelte-1r2hsto",
          ""
        ].join(" ").trim()}"${add_styles({
          "cursor": {
            dupe: `not-allowed`,
            create: `pointer`,
            "no-match": `default`
          }[msgType]
        })}>${slots["user-msg"] ? slots["user-msg"]({ searchText, msgType, msg }) : ` ${escape(msg)} `}</li>`;
      })() : ``}`;
    })() : ``}</ul>` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  MultiSelect as M
};
