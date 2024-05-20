import { r as redirect } from "../../chunks/index.js";
const prerender = true;
const load = ({ url }) => {
  if (url.pathname.endsWith(`.md`)) {
    throw redirect(307, url.pathname.replace(/\.md$/, ``));
  }
};
export {
  load,
  prerender
};
