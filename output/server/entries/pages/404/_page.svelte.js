import { c as create_ssr_component, g as subscribe } from "../../../chunks/ssr.js";
import { g as goto } from "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  if ($page.url.pathname.match(/^\/mp-\d+$/)) {
    goto($page.url.pathname);
  }
  $$unsubscribe_page();
  return ``;
});
export {
  Page as default
};
