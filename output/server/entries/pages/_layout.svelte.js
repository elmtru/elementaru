import { c as create_ssr_component, a as compute_rest_props, b as add_attribute, v as validate_component, e as escape, d as add_styles, f as merge_ssr_styles, n as null_to_empty, g as subscribe, h as each, i as set_store_value } from "../../chunks/ssr.js";
import { g as goto } from "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { s as show_icons, e as element_data } from "../../chunks/index3.js";
import { r as repository } from "../../chunks/package.js";
import "../../chunks/index4.js";
import { w as writable } from "../../chunks/index2.js";
import "../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import { C as CopyButton_1 } from "../../chunks/Icon.js";
import { M as MultiSelect } from "../../chunks/MultiSelect.js";
import { I as Icon_1 } from "../../chunks/Icon2.js";
import { T as Toggle } from "../../chunks/Toggle.js";
const css$4 = {
  code: ".svelte-fo0sp7:where(dialog){position:fixed;top:30%;border:none;padding:0;background-color:transparent;display:flex;color:white;z-index:10;font-size:2.4ex}dialog.svelte-fo0sp7 div.multiselect{--sms-bg:var(--sms-options-bg);--sms-width:min(20em, 90vw);--sms-max-width:none;--sms-placeholder-color:lightgray;--sms-options-margin:1px 0;--sms-options-border-radius:0 0 1ex 1ex}",
  map: '{"version":3,"file":"CmdPalette.svelte","sources":["CmdPalette.svelte"],"sourcesContent":["<script>import { tick } from \'svelte\';\\nimport { fade } from \'svelte/transition\';\\nimport Select from \'./MultiSelect.svelte\';\\nexport let actions;\\nexport let triggers = [`k`];\\nexport let close_keys = [`Escape`];\\nexport let fade_duration = 200; // in ms\\nexport let style = ``; // for dialog\\n// for span in option slot, has no effect when passing a slot\\nexport let span_style = ``;\\nexport let open = false;\\nexport let dialog = null;\\nexport let input = null;\\nexport let placeholder = `Filter actions...`;\\nasync function toggle(event) {\\n    if (triggers.includes(event.key) && event.metaKey && !open) {\\n        // open on cmd+trigger\\n        open = true;\\n        await tick(); // wait for dialog to open and input to be mounted\\n        input?.focus();\\n    }\\n    else if (close_keys.includes(event.key) && open) {\\n        open = false;\\n    }\\n}\\nfunction close_if_outside(event) {\\n    if (open && !dialog?.contains(event.target)) {\\n        open = false;\\n    }\\n}\\nfunction trigger_action_and_close(event) {\\n    event.detail.option.action(event.detail.option.label);\\n    open = false;\\n}\\n<\/script>\\n\\n<svelte:window on:keydown={toggle} on:click={close_if_outside} />\\n\\n{#if open}\\n  <dialog open bind:this={dialog} transition:fade={{ duration: fade_duration }} {style}>\\n    <Select\\n      options={actions}\\n      bind:input\\n      {placeholder}\\n      on:add={trigger_action_and_close}\\n      on:keydown={toggle}\\n      {...$$restProps}\\n      let:option\\n    >\\n      <!-- wait for https://github.com/sveltejs/svelte/pull/8304 -->\\n      <slot>\\n        <span style={span_style}>{option.label}</span>\\n      </slot>\\n    </Select>\\n  </dialog>\\n{/if}\\n\\n<style>\\n  :where(dialog) {\\n    position: fixed;\\n    top: 30%;\\n    border: none;\\n    padding: 0;\\n    background-color: transparent;\\n    display: flex;\\n    color: white;\\n    z-index: 10;\\n    font-size: 2.4ex;\\n  }\\n  dialog :global(div.multiselect) {\\n    --sms-bg: var(--sms-options-bg);\\n    --sms-width: min(20em, 90vw);\\n    --sms-max-width: none;\\n    --sms-placeholder-color: lightgray;\\n    --sms-options-margin: 1px 0;\\n    --sms-options-border-radius: 0 0 1ex 1ex;\\n  }\\n</style>\\n"],"names":[],"mappings":"cA0DE,OAAO,MAAM,CAAE,CACb,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,KACb,CACA,oBAAM,CAAS,eAAiB,CAC9B,QAAQ,CAAE,qBAAqB,CAC/B,WAAW,CAAE,eAAe,CAC5B,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,SAAS,CAClC,oBAAoB,CAAE,KAAK,CAC3B,2BAA2B,CAAE,WAC/B"}'
};
const CmdPalette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "actions",
    "triggers",
    "close_keys",
    "fade_duration",
    "style",
    "span_style",
    "open",
    "dialog",
    "input",
    "placeholder"
  ]);
  let { actions } = $$props;
  let { triggers = [`k`] } = $$props;
  let { close_keys = [`Escape`] } = $$props;
  let { fade_duration = 200 } = $$props;
  let { style = `` } = $$props;
  let { span_style = `` } = $$props;
  let { open = false } = $$props;
  let { dialog = null } = $$props;
  let { input = null } = $$props;
  let { placeholder = `Filter actions...` } = $$props;
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0)
    $$bindings.actions(actions);
  if ($$props.triggers === void 0 && $$bindings.triggers && triggers !== void 0)
    $$bindings.triggers(triggers);
  if ($$props.close_keys === void 0 && $$bindings.close_keys && close_keys !== void 0)
    $$bindings.close_keys(close_keys);
  if ($$props.fade_duration === void 0 && $$bindings.fade_duration && fade_duration !== void 0)
    $$bindings.fade_duration(fade_duration);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.span_style === void 0 && $$bindings.span_style && span_style !== void 0)
    $$bindings.span_style(span_style);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${open ? `<dialog open${add_attribute("style", style, 0)} class="svelte-fo0sp7"${add_attribute("this", dialog, 0)}>${validate_component(MultiSelect, "Select").$$render(
      $$result,
      Object.assign({}, { options: actions }, { placeholder }, $$restProps, { input }),
      {
        input: ($$value) => {
          input = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ option }) => {
          return ` ${slots.default ? slots.default({}) : ` <span${add_attribute("style", span_style, 0)} class="svelte-fo0sp7">${escape(option.label)}</span> `}`;
        }
      }
    )}</dialog>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const css$3 = {
  code: "a.svelte-itlc21.svelte-itlc21{position:fixed;z-index:1;fill:var(--zoo-github-corner-bg, black);color:var(--zoo-github-corner-color, white);width:var(--zoo-github-corner-size, 70px)}a.top-right.svelte-itlc21.svelte-itlc21{top:0;right:0}a.top-left.svelte-itlc21.svelte-itlc21{top:0;left:0;transform:rotate(-90deg)}a.bottom-left.svelte-itlc21.svelte-itlc21{bottom:0;left:0;transform:rotate(180deg)}a.bottom-right.svelte-itlc21.svelte-itlc21{bottom:0;right:0;transform:rotate(90deg)}a.svelte-itlc21:hover .octo-arm.svelte-itlc21{animation:svelte-itlc21-octocat-wave 0.5s ease-in-out}@keyframes svelte-itlc21-octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",
  map: '{"version":3,"file":"GitHubCorner.svelte","sources":["GitHubCorner.svelte"],"sourcesContent":["<script>// Display an animated Octocat in a corner of the screen to link to the GitHub repo.\\n// adapted from https://github.com/tholman/github-corners\\nexport let href;\\nexport let title = `View code on GitHub`;\\nexport let aria_label = title;\\nexport let target = `_self`;\\nexport let color = null;\\nexport let fill = null;\\n// bottomLeft/Right look bad, shouldn\'t normally be used\\nexport let corner = `top-right`;\\nexport let style = ``;\\n<\/script>\\n\\n<a\\n  {href}\\n  {target}\\n  {title}\\n  aria-label={aria_label}\\n  {style}\\n  class={corner}\\n  style:color\\n  style:fill\\n>\\n  <svg viewBox=\\"0 0 250 250\\" aria-hidden=\\"true\\">\\n    <path d=\\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\\" />\\n    <path\\n      d=\\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\\"\\n      fill=\\"currentColor\\"\\n      style=\\"transform-origin: 130px 106px;\\"\\n      class=\\"octo-arm\\"\\n    />\\n    <path\\n      d=\\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\\"\\n      fill=\\"currentColor\\"\\n      class=\\"octo-body\\"\\n    />\\n  </svg>\\n</a>\\n\\n<style>\\n  a {\\n    position: fixed;\\n    z-index: 1;\\n    fill: var(--zoo-github-corner-bg, black);\\n    color: var(--zoo-github-corner-color, white);\\n    width: var(--zoo-github-corner-size, 70px);\\n  }\\n  a.top-right {\\n    top: 0;\\n    right: 0;\\n  }\\n  a.top-left {\\n    top: 0;\\n    left: 0;\\n    transform: rotate(-90deg);\\n  }\\n  a.bottom-left {\\n    bottom: 0;\\n    left: 0;\\n    transform: rotate(180deg);\\n  }\\n  a.bottom-right {\\n    bottom: 0;\\n    right: 0;\\n    transform: rotate(90deg);\\n  }\\n  a:hover .octo-arm {\\n    animation: octocat-wave 0.5s ease-in-out;\\n  }\\n  @keyframes octocat-wave {\\n    0%,\\n    100% {\\n      transform: rotate(0);\\n    }\\n    20%,\\n    60% {\\n      transform: rotate(-25deg);\\n    }\\n    40%,\\n    80% {\\n      transform: rotate(10deg);\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwCE,6BAAE,CACA,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,CAAC,CACV,IAAI,CAAE,IAAI,sBAAsB,CAAC,MAAM,CAAC,CACxC,KAAK,CAAE,IAAI,yBAAyB,CAAC,MAAM,CAAC,CAC5C,KAAK,CAAE,IAAI,wBAAwB,CAAC,KAAK,CAC3C,CACA,CAAC,sCAAW,CACV,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CACT,CACA,CAAC,qCAAU,CACT,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,OAAO,MAAM,CAC1B,CACA,CAAC,wCAAa,CACZ,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,OAAO,MAAM,CAC1B,CACA,CAAC,yCAAc,CACb,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,SAAS,CAAE,OAAO,KAAK,CACzB,CACA,eAAC,MAAM,CAAC,uBAAU,CAChB,SAAS,CAAE,0BAAY,CAAC,IAAI,CAAC,WAC/B,CACA,WAAW,0BAAa,CACtB,EAAE,CACF,IAAK,CACH,SAAS,CAAE,OAAO,CAAC,CACrB,CACA,GAAG,CACH,GAAI,CACF,SAAS,CAAE,OAAO,MAAM,CAC1B,CACA,GAAG,CACH,GAAI,CACF,SAAS,CAAE,OAAO,KAAK,CACzB,CACF"}'
};
const GitHubCorner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { title = `View code on GitHub` } = $$props;
  let { aria_label = title } = $$props;
  let { target = `_self` } = $$props;
  let { color = null } = $$props;
  let { fill = null } = $$props;
  let { corner = `top-right` } = $$props;
  let { style = `` } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.aria_label === void 0 && $$bindings.aria_label && aria_label !== void 0)
    $$bindings.aria_label(aria_label);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.corner === void 0 && $$bindings.corner && corner !== void 0)
    $$bindings.corner(corner);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$3);
  return `<a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", aria_label, 0)}${add_styles(merge_ssr_styles(escape(style, true), { color, fill }))} class="${escape(null_to_empty(corner), true) + " svelte-itlc21"}"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm svelte-itlc21"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg> </a>`;
});
const demos = writable([]);
const css$2 = {
  code: "nav.svelte-rxbv9p.svelte-rxbv9p{display:flex;gap:1em calc(2pt + 1cqw);place-content:center;margin:1em auto 2em;padding:1em;max-width:45em;flex-wrap:wrap}nav.svelte-rxbv9p>a.svelte-rxbv9p{padding:0 4pt;background-color:rgba(255, 255, 255, 0.1);border-radius:3pt;transition:0.2s}nav.svelte-rxbv9p>a[aria-current='page'].svelte-rxbv9p{color:mediumseagreen}",
  map: `{"version":3,"file":"DemoNav.svelte","sources":["DemoNav.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\nimport { demos } from './stores';\\nexport let routes = $demos;\\nexport let labels = {};\\n$: is_current = (path) => {\\n    if ($page.url.pathname.startsWith(path))\\n        return \`page\`;\\n    return undefined;\\n};\\n<\/script>\\n\\n<nav>\\n  {#each routes as href (href)}\\n    <a {href} aria-current={is_current(href)}>{labels[href] ?? href}</a>\\n  {/each}\\n</nav>\\n\\n<style>\\n  nav {\\n    display: flex;\\n    gap: 1em calc(2pt + 1cqw);\\n    place-content: center;\\n    margin: 1em auto 2em;\\n    padding: 1em;\\n    max-width: 45em;\\n    flex-wrap: wrap;\\n  }\\n  nav > a {\\n    padding: 0 4pt;\\n    background-color: rgba(255, 255, 255, 0.1);\\n    border-radius: 3pt;\\n    transition: 0.2s;\\n  }\\n  nav > a[aria-current='page'] {\\n    color: mediumseagreen;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkBE,+BAAI,CACF,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CAAC,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CACpB,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IACb,CACA,iBAAG,CAAG,eAAE,CACN,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IACd,CACA,iBAAG,CAAG,CAAC,CAAC,YAAY,CAAC,MAAM,eAAE,CAC3B,KAAK,CAAE,cACT"}`
};
const DemoNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let is_current;
  let $page, $$unsubscribe_page;
  let $demos, $$unsubscribe_demos;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_demos = subscribe(demos, (value) => $demos = value);
  let { routes = $demos } = $$props;
  let { labels = {} } = $$props;
  if ($$props.routes === void 0 && $$bindings.routes && routes !== void 0)
    $$bindings.routes(routes);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  $$result.css.add(css$2);
  is_current = (path) => {
    if ($page.url.pathname.startsWith(path))
      return `page`;
    return void 0;
  };
  $$unsubscribe_page();
  $$unsubscribe_demos();
  return `<nav class="svelte-rxbv9p">${each(routes, (href) => {
    return `<a${add_attribute("href", href, 0)}${add_attribute("aria-current", is_current(href), 0)} class="svelte-rxbv9p">${escape(labels[href] ?? href)}</a>`;
  })} </nav>`;
});
const css$1 = {
  code: "footer.svelte-2aesdo{margin:6em 0 2em;text-align:center}p.toggle-icons.svelte-2aesdo{display:flex;place-content:center;place-items:center;gap:3pt;position:relative;z-index:-1}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Icon from '$lib/Icon.svelte';\\nimport { show_icons } from '$lib/stores';\\nimport { repository } from '$root/package.json';\\nimport { Toggle } from 'svelte-zoo';\\n<\/script>\\n\\n<footer>\\n  <a href=\\"{repository}/blob/main/license\\">\\n    <Icon icon=\\"octicon:law\\" />License\\n  </a>\\n  <strong>&ensp;&bull;&ensp;</strong>\\n  <a href=\\"/acknowledgements\\">\\n    <Icon icon=\\"fa6-solid:hands-clapping\\" />Acknowledgements\\n  </a>\\n  <strong>&ensp;&bull;&ensp;</strong>\\n  <a href=\\"/changelog\\">\\n    <Icon icon=\\"octicon:history\\" />Changelog\\n  </a>\\n  <strong>&ensp;&bull;&ensp;</strong>\\n  <a href=\\"/contributing\\">\\n    <Icon icon=\\"octicon:repo-forked\\" />Contributing\\n  </a>\\n  <p class=\\"toggle-icons\\">\\n    <Toggle bind:checked={$show_icons} style=\\"transform: scale(0.8);\\" />Icons\\n  </p>\\n  <small>\\n    Built with Svelte by\\n    <a href=\\"https://github.com/janosh\\">Janosh</a>\\n    &copy; 2022\\n  </small>\\n</footer>\\n\\n<style>\\n  footer {\\n    margin: 6em 0 2em;\\n    text-align: center;\\n  }\\n  p.toggle-icons {\\n    display: flex;\\n    place-content: center;\\n    place-items: center;\\n    gap: 3pt;\\n    position: relative;\\n    z-index: -1;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiCE,oBAAO,CACL,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CACjB,UAAU,CAAE,MACd,CACA,CAAC,2BAAc,CACb,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EACX"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_icons, $$unsubscribe_show_icons;
  $$unsubscribe_show_icons = subscribe(show_icons, (value) => $show_icons = value);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<footer class="svelte-2aesdo"><a href="${escape(repository, true) + "/blob/main/license"}">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "octicon:law" }, {}, {})}License</a> <strong data-svelte-h="svelte-fjy2ao"> • </strong> <a href="/acknowledgements">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "fa6-solid:hands-clapping" }, {}, {})}Acknowledgements</a> <strong data-svelte-h="svelte-fjy2ao"> • </strong> <a href="/changelog">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "octicon:history" }, {}, {})}Changelog</a> <strong data-svelte-h="svelte-fjy2ao"> • </strong> <a href="/contributing">${validate_component(Icon_1, "Icon").$$render($$result, { icon: "octicon:repo-forked" }, {}, {})}Contributing</a> <p class="toggle-icons svelte-2aesdo">${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        style: "transform: scale(0.8);",
        checked: $show_icons
      },
      {
        checked: ($$value) => {
          $show_icons = $$value;
          $$settled = false;
        }
      },
      {}
    )}Icons</p> <small data-svelte-h="svelte-qa94m9">Built with Svelte by
    <a href="https://github.com/janosh">Janosh</a>
    © 2022</small> </footer>`;
  } while (!$$settled);
  $$unsubscribe_show_icons();
  return $$rendered;
});
const css = {
  code: "a[href='.'].svelte-yoqlmc{font-size:13pt;position:absolute;top:2em;left:2em;background-color:rgba(255, 255, 255, 0.1);padding:1pt 5pt;border-radius:3pt;transition:0.2s;z-index:1}a[href='.'].svelte-yoqlmc:hover{background-color:rgba(255, 255, 255, 0.2)}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { goto } from \'$app/navigation\';\\nimport { page } from \'$app/stores\';\\nimport { element_data } from \'$lib\';\\nimport { repository } from \'$root/package.json\';\\nimport { DemoNav, Footer } from \'$site\';\\nimport { demos } from \'$site/stores\';\\nimport { CmdPalette } from \'svelte-multiselect\';\\nimport { CopyButton, GitHubCorner } from \'svelte-zoo\';\\nimport \'../app.css\';\\nconst routes = Object.keys(import.meta.glob(`./**/+page.{svx,svelte,md}`)).map((filename) => {\\n    const parts = filename.split(`/`).filter((part) => !part.startsWith(`(`)); // remove hidden route segments\\n    return { route: `/${parts.slice(1, -1).join(`/`)}`, filename };\\n});\\nlet mp_id = `/mp-1234`;\\nif (routes.length < 3) {\\n    console.error(`Too few demo routes found: ${routes.length}`);\\n}\\n$demos = [\\n    ...routes\\n        .filter(({ filename }) => filename.includes(`/(demos)/`))\\n        .map(({ route }) => route),\\n    mp_id,\\n];\\nconst actions = routes\\n    .map(({ route }) => route)\\n    .concat(element_data.map(({ name }) => `/${name.toLowerCase()}`))\\n    .map((name) => {\\n    return { label: name, action: () => goto(name) };\\n});\\n<\/script>\\n\\n<CmdPalette {actions} placeholder=\\"Go to...\\" />\\n<GitHubCorner href={repository} />\\n<CopyButton global />\\n\\n<DemoNav labels={{ [mp_id]: `/mp-details-pages` }} />\\n\\n{#if !$page.error && $page.url.pathname !== `/`}\\n  <a href=\\".\\" aria-label=\\"Back to index page\\">&laquo; home</a>\\n{/if}\\n\\n<slot />\\n\\n<Footer />\\n\\n<style>\\n  a[href=\'.\'] {\\n    font-size: 13pt;\\n    position: absolute;\\n    top: 2em;\\n    left: 2em;\\n    background-color: rgba(255, 255, 255, 0.1);\\n    padding: 1pt 5pt;\\n    border-radius: 3pt;\\n    transition: 0.2s;\\n    z-index: 1;\\n  }\\n  a[href=\'.\']:hover {\\n    background-color: rgba(255, 255, 255, 0.2);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8CE,CAAC,CAAC,IAAI,CAAC,GAAG,eAAE,CACV,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CACX,CACA,CAAC,CAAC,IAAI,CAAC,GAAG,eAAC,MAAO,CAChB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $demos, $$unsubscribe_demos;
  let $page, $$unsubscribe_page;
  $$unsubscribe_demos = subscribe(demos, (value) => $demos = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const routes = Object.keys(/* @__PURE__ */ Object.assign({ "./(demos)/bohr-atoms/+page.svelte": () => import("./(demos)/bohr-atoms/_page.svelte.js"), "./(demos)/color-bar/+page.md": () => import("./(demos)/color-bar/_page.md.js"), "./(demos)/color-scales/+page.md": () => import("./(demos)/color-scales/_page.md.js"), "./(demos)/element-color-schemes/+page.md": () => import("./(demos)/element-color-schemes/_page.md.js"), "./(demos)/element-tile/+page.md": () => import("./(demos)/element-tile/_page.md.js"), "./(demos)/molecule/+page.md": () => import("./(demos)/molecule/_page.md.js"), "./(demos)/nucleus/+page.md": () => import("./(demos)/nucleus/_page.md.js"), "./(demos)/periodic-table/+page.svelte": () => import("./(demos)/periodic-table/_page.svelte.js"), "./(demos)/structure/+page.md": () => import("./(demos)/structure/_page.md.js"), "./+page.md": () => import("./_page.md.js"), "./404/+page.svelte": () => import("./404/_page.svelte.js"), "./[slug]/+page.svelte": () => import("./_slug_/_page.svelte.js"), "./acknowledgements/+page.md": () => import("./acknowledgements/_page.md.js"), "./api/+page.svelte": () => import("./api/_page.svelte.js"), "./changelog/+page.svelte": () => import("./changelog/_page.svelte.js"), "./contributing/+page.svelte": () => import("./contributing/_page.svelte.js"), "./mp-[slug]/+page.svelte": () => import("./mp-_slug_/_page.svelte.js") })).map((filename) => {
    const parts = filename.split(`/`).filter((part) => !part.startsWith(`(`));
    return {
      route: `/${parts.slice(1, -1).join(`/`)}`,
      filename
    };
  });
  let mp_id = `/mp-1234`;
  if (routes.length < 3) {
    console.error(`Too few demo routes found: ${routes.length}`);
  }
  set_store_value(
    demos,
    $demos = [
      ...routes.filter(({ filename }) => filename.includes(`/(demos)/`)).map(({ route }) => route),
      mp_id
    ],
    $demos
  );
  const actions = routes.map(({ route }) => route).concat(element_data.map(({ name }) => `/${name.toLowerCase()}`)).map((name) => {
    return { label: name, action: () => goto() };
  });
  $$result.css.add(css);
  $$unsubscribe_demos();
  $$unsubscribe_page();
  return `${validate_component(CmdPalette, "CmdPalette").$$render($$result, { actions, placeholder: "Go to..." }, {}, {})} ${validate_component(GitHubCorner, "GitHubCorner").$$render($$result, { href: repository }, {}, {})} ${validate_component(CopyButton_1, "CopyButton").$$render($$result, { global: true }, {}, {})} ${validate_component(DemoNav, "DemoNav").$$render($$result, { labels: { [mp_id]: `/mp-details-pages` } }, {}, {})} ${!$page.error && $page.url.pathname !== `/` ? `<a href="." aria-label="Back to index page" class="svelte-yoqlmc" data-svelte-h="svelte-18ycaxw">« home</a>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
