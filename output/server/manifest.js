export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["2023-02-13-details-page.webp","2023-02-13-heatmap.webp","2023-02-13-landing-page.webp","elements/1-hydrogen.avif","elements/10-neon.avif","elements/100-fermium.avif","elements/101-mendelevium.avif","elements/102-nobelium.avif","elements/103-lawrencium.avif","elements/104-rutherfordium.avif","elements/105-dubnium.avif","elements/106-seaborgium.avif","elements/107-bohrium.avif","elements/108-hassium.avif","elements/109-meitnerium.avif","elements/11-sodium.avif","elements/110-darmstadtium.avif","elements/111-roentgenium.avif","elements/12-magnesium.avif","elements/13-aluminium.avif","elements/14-silicon.avif","elements/15-phosphorus.avif","elements/16-sulfur.avif","elements/17-chlorine.avif","elements/18-argon.avif","elements/19-potassium.avif","elements/2-helium.avif","elements/20-calcium.avif","elements/21-scandium.avif","elements/22-titanium.avif","elements/23-vanadium.avif","elements/24-chromium.avif","elements/25-manganese.avif","elements/26-iron.avif","elements/27-cobalt.avif","elements/28-nickel.avif","elements/29-copper.avif","elements/3-lithium.avif","elements/30-zinc.avif","elements/31-gallium.avif","elements/32-germanium.avif","elements/33-arsenic.avif","elements/34-selenium.avif","elements/35-bromine.avif","elements/36-krypton.avif","elements/37-rubidium.avif","elements/38-strontium.avif","elements/39-yttrium.avif","elements/4-beryllium.avif","elements/40-zirconium.avif","elements/41-niobium.avif","elements/42-molybdenum.avif","elements/43-technetium.avif","elements/44-ruthenium.avif","elements/45-rhodium.avif","elements/46-palladium.avif","elements/47-silver.avif","elements/48-cadmium.avif","elements/49-indium.avif","elements/5-boron.avif","elements/50-tin.avif","elements/51-antimony.avif","elements/52-tellurium.avif","elements/53-iodine.avif","elements/54-xenon.avif","elements/55-cesium.avif","elements/56-barium.avif","elements/57-lanthanum.avif","elements/58-cerium.avif","elements/59-praseodymium.avif","elements/6-carbon.avif","elements/60-neodymium.avif","elements/61-promethium.avif","elements/62-samarium.avif","elements/63-europium.avif","elements/64-gadolinium.avif","elements/65-terbium.avif","elements/66-dysprosium.avif","elements/67-holmium.avif","elements/68-erbium.avif","elements/69-thulium.avif","elements/7-nitrogen.avif","elements/70-ytterbium.avif","elements/71-lutetium.avif","elements/72-hafnium.avif","elements/73-tantalum.avif","elements/74-tungsten.avif","elements/75-rhenium.avif","elements/76-osmium.avif","elements/77-iridium.avif","elements/78-platinum.avif","elements/79-gold.avif","elements/8-oxygen.avif","elements/80-mercury.avif","elements/81-thallium.avif","elements/82-lead.avif","elements/83-bismuth.avif","elements/84-polonium.avif","elements/85-astatine.avif","elements/86-radon.avif","elements/87-francium.avif","elements/88-radium.avif","elements/89-actinium.avif","elements/9-fluorine.avif","elements/90-thorium.avif","elements/91-protactinium.avif","elements/92-uranium.avif","elements/93-neptunium.avif","elements/94-plutonium.avif","elements/95-americium.avif","elements/96-curium.avif","elements/97-berkelium.avif","elements/98-californium.avif","elements/99-einsteinium.avif","favicon.svg","img-sources.json","prism-vsc-dark-plus.css"]),
	mimeTypes: {".webp":"image/webp",".avif":"image/avif",".svg":"image/svg+xml",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Ckx40uVl.js","app":"_app/immutable/entry/app.DXqW3aqt.js","imports":["_app/immutable/entry/start.Ckx40uVl.js","_app/immutable/chunks/entry.BzDjQvFf.js","_app/immutable/chunks/scheduler.DSZzDcX6.js","_app/immutable/chunks/index.PMJqI94-.js","_app/immutable/entry/app.DXqW3aqt.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DSZzDcX6.js","_app/immutable/chunks/index.Ck97c3H1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/19.js'))
		],
		routes: [
			{
				id: "/mp-[slug]",
				pattern: /^\/mp-([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
