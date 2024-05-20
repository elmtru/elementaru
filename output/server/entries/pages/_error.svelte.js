import { c as create_ssr_component, g as subscribe, e as escape, b as add_attribute } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { h as homepage, n as name } from "../../chunks/package.js";
import "../../chunks/functions.js";
const css = {
  code: "div.svelte-qfxluk.svelte-qfxluk{font-size:1.2em;max-width:45em;padding:5em 3em 1em;margin:auto;text-align:center}p.svelte-qfxluk img.svelte-qfxluk{vertical-align:middle;margin:0 1pt 0 3pt}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\nimport { homepage, name } from '$root/package.json';\\nimport Icon from '@iconify/svelte';\\nlet online;\\n<\/script>\\n\\n<svelte:head>\\n  <title>Error {$page.status} &bull; {name}</title>\\n</svelte:head>\\n\\n<svelte:window bind:online />\\n\\n<div>\\n  <h1>Error {String($page.status).replace(\`0\`, \`😵\`)}: {$page.error?.message}</h1>\\n  {#if $page.status >= 500}\\n    <p>\\n      If page reloading doesn't help, please raise an issue on\\n      <a href=\\"{homepage}/issues\\" target=\\"_blank\\" rel=\\"noreferrer\\">GitHub</a>. Thanks! 🙏\\n    </p>\\n  {/if}\\n  {#if online === false}\\n    Looks like you're offline. If you think your connection is fine, check the\\n    <a href=\\"https://githubstatus.com\\">GitHub status page</a>\\n    as this site is hosted by &thinsp;<Icon icon=\\"octicon:mark-github\\" inline />&thinsp;\\n    GitHub Pages.\\n  {/if}\\n\\n  <p>\\n    Back to <a href=\\".\\">\\n      <img src=\\"favicon.svg\\" alt={name} height=\\"30\\" />\\n      landing page\\n    </a>.\\n  </p>\\n</div>\\n\\n<style>\\n  div {\\n    font-size: 1.2em;\\n    max-width: 45em;\\n    padding: 5em 3em 1em;\\n    margin: auto;\\n    text-align: center;\\n  }\\n  p img {\\n    vertical-align: middle;\\n    margin: 0 1pt 0 3pt;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoCE,+BAAI,CACF,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CACpB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MACd,CACA,eAAC,CAAC,iBAAI,CACJ,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,GAClB"}`
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-6jh731_START -->${$$result.title = `<title>Error ${escape($page.status)} • ${escape(name)}</title>`, ""}<!-- HEAD_svelte-6jh731_END -->`, ""}  <div class="svelte-qfxluk"><h1>Error ${escape(String($page.status).replace(`0`, `😵`))}: ${escape($page.error?.message)}</h1> ${$page.status >= 500 ? `<p data-svelte-h="svelte-y7xpw9">If page reloading doesn&#39;t help, please raise an issue on
      <a href="${escape(homepage, true) + "/issues"}" target="_blank" rel="noreferrer">GitHub</a>. Thanks! 🙏</p>` : ``} ${``} <p class="svelte-qfxluk" data-svelte-h="svelte-x7zu24">Back to <a href="."><img src="favicon.svg"${add_attribute("alt", name, 0)} height="30" class="svelte-qfxluk">
      landing page
    </a>.</p> </div>`;
});
export {
  Error as default
};
