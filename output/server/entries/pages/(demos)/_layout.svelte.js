import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import { n as name } from "../../../chunks/package.js";
import { a as addMessages, r as ru, i as init } from "../../../chunks/ru.js";
const css = {
  code: "h1.svelte-xk9zps{text-align:center;display:flex;place-content:center;place-items:center}main.svelte-xk9zps h2{text-align:center}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { name } from '$root/package.json';\\nimport { addMessages, init } from 'svelte-i18n';\\nimport ru from './../../site/ru.json';\\naddMessages('ru', ru);\\ninit({\\n    fallbackLocale: 'ru',\\n    initialLocale: 'ru',\\n});\\n<\/script>\\n\\n<h1>\\n  <img src=\\"favicon.svg\\" alt={name} height=\\"50\\" width=\\"50\\" />&ensp;Examples\\n</h1>\\n\\n<main>\\n  <slot />\\n</main>\\n\\n<style>\\n  h1 {\\n    text-align: center;\\n    display: flex;\\n    place-content: center;\\n    place-items: center;\\n  }\\n  main :global(h2) {\\n    text-align: center;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAmBE,gBAAG,CACD,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACf,CACA,kBAAI,CAAS,EAAI,CACf,UAAU,CAAE,MACd"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  addMessages("ru", ru);
  init({
    fallbackLocale: "ru",
    initialLocale: "ru"
  });
  $$result.css.add(css);
  return `<h1 class="svelte-xk9zps" data-svelte-h="svelte-12f10h9"><img src="favicon.svg"${add_attribute("alt", name, 0)} height="50" width="50"> Examples</h1> <main class="svelte-xk9zps">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
