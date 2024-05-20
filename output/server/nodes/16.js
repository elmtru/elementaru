import * as universal from '../entries/pages/api/_page.ts.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/api/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/api/+page.ts";
export const imports = ["_app/immutable/nodes/16.GpwXROpb.js","_app/immutable/chunks/api.Dpw5L1iu.js","_app/immutable/chunks/_page.Cm3LwGAr.js","_app/immutable/chunks/scheduler.DSZzDcX6.js","_app/immutable/chunks/each.CNH9y-bx.js","_app/immutable/chunks/index.Ck97c3H1.js","_app/immutable/chunks/Tooltip.svelte_svelte_type_style_lang.BzaACov9.js","_app/immutable/chunks/index.PMJqI94-.js","_app/immutable/chunks/entry.BzDjQvFf.js"];
export const stylesheets = ["_app/immutable/assets/_page.DZchlXTD.css","_app/immutable/assets/Tooltip.DLh_n2OJ.css"];
export const fonts = [];
