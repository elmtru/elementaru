import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/14.Dlxzk6bO.js","_app/immutable/chunks/14.BcKuoI0q.js","_app/immutable/chunks/scheduler.DSZzDcX6.js","_app/immutable/chunks/index.Ck97c3H1.js","_app/immutable/chunks/each.CNH9y-bx.js","_app/immutable/chunks/stores.CBE7YWkj.js","_app/immutable/chunks/entry.BzDjQvFf.js","_app/immutable/chunks/index.PMJqI94-.js","_app/immutable/chunks/index.CdZlA5Fd.js","_app/immutable/chunks/Tooltip.svelte_svelte_type_style_lang.BzaACov9.js","_app/immutable/chunks/functions.24RWfqtF.js","_app/immutable/chunks/ru.V9lQHOSW.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/ScatterPoint.CxkpdP-P.js","_app/immutable/chunks/PeriodicTable.CduioAQd.js","_app/immutable/chunks/ElementTile.CsfOooHI.js","_app/immutable/chunks/Icon.DBxoRC3v.js","_app/immutable/chunks/Icon.CPtRHuiI.js","_app/immutable/chunks/ColorScaleSelect.DvFGpSFx.js","_app/immutable/chunks/MultiSelect.BoA4L_L7.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/index.D4uN2bNE.js","_app/immutable/chunks/extent.Ccx1MofX.js","_app/immutable/chunks/PropertySelect.CL-q9OhT.js","_app/immutable/chunks/BohrAtom.BzF-h5h8.js"];
export const stylesheets = ["_app/immutable/assets/14.DTbOd0ig.css","_app/immutable/assets/index.9H_8XShO.css","_app/immutable/assets/Tooltip.DLh_n2OJ.css"];
export const fonts = [];
