import { c as create_ssr_component, a as compute_rest_props, v as validate_component, h as each, e as escape, b as add_attribute, g as subscribe } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { p as page } from "../../../chunks/stores.js";
import { p as pretty_num, m as superscript_digits } from "../../../chunks/index3.js";
import { S as Structure } from "../../../chunks/Structure.js";
import { I as InfoCard, S as StructureCard } from "../../../chunks/StructureCard.js";
const SymmetryCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let $$restProps = compute_rest_props($$props, ["title", "material"]);
  let { title = `Symmetry` } = $$props;
  let { material } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.material === void 0 && $$bindings.material && material !== void 0)
    $$bindings.material(material);
  data = [
    {
      title: `Crystal System`,
      value: `${material.symmetry?.crystal_system}`
    },
    {
      title: `International Number`,
      value: material.symmetry?.number
    },
    {
      title: `Point Group`,
      value: `${material.symmetry?.point_group}`
    },
    {
      title: `Symbol`,
      value: `${material.symmetry?.symbol}`
    }
  ];
  return `${validate_component(InfoCard, "InfoCard").$$render($$result, Object.assign({}, { data }, $$restProps, { title }), {}, {})}`;
});
const css$1 = {
  code: ".warning.svelte-11ezupt.svelte-11ezupt{color:var(--warning-color, darkred)}p.svelte-11ezupt.svelte-11ezupt{display:flex;flex-wrap:wrap;gap:1ex 1em;font-size:smaller}p.svelte-11ezupt a.svelte-11ezupt{background-color:rgba(255, 255, 255, 0.1);padding:0 3pt;border-radius:3pt}",
  map: '{"version":3,"file":"MaterialCard.svelte","sources":["MaterialCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { InfoCard, pretty_num, superscript_digits } from \'$lib\';\\nimport SymmetryCard from \'./SymmetryCard.svelte\';\\nexport let material;\\n$: data = [\\n    {\\n        title: `Band Gap`,\\n        value: material.band_gap,\\n        unit: `eV`,\\n        tooltip: material.vbm && material.cbm ? `VBM: ${material.vbm}, CBM: ${material.cbm}` : ``,\\n    },\\n    {\\n        title: `Space Group`,\\n        value: `${material.symmetry?.number}`,\\n        unit: `(${material.symmetry?.symbol})`,\\n        condition: material.symmetry?.number,\\n    },\\n    {\\n        title: `E<sub>above hull</sub>`,\\n        value: 1000 * (material?.energy_above_hull ?? 0),\\n        unit: `meV/atom`,\\n        condition: `energy_above_hull` in material,\\n    },\\n    {\\n        title: `Predicted stable`,\\n        value: material?.energy_above_hull ?? 0 > 0 ? `❌ No` : `✅ Yes`,\\n        condition: `energy_above_hull` in material,\\n    },\\n    {\\n        title: `Formation Energy`,\\n        value: material.formation_energy_per_atom,\\n        unit: `eV/atom`,\\n    },\\n    {\\n        title: `Experimentally Observed`,\\n        value: material.theoretical ? `❌ No` : `✅ Yes`,\\n    },\\n    { title: `Total Energy`, value: material.energy_per_atom, unit: `eV/atom` },\\n    {\\n        title: `Uncorrected Energy`,\\n        value: material.uncorrected_energy_per_atom,\\n        unit: `eV/atom`,\\n        condition: material.uncorrected_energy_per_atom != material.energy_per_atom,\\n    },\\n    {\\n        title: `Last updated`,\\n        value: material.last_updated?.$date.split(`T`)[0],\\n    },\\n    {\\n        title: `Origins`,\\n        value: material.origins,\\n        condition: material.origins?.length,\\n    },\\n    {\\n        title: `Voigt bulk modulus`,\\n        value: material.k_voigt,\\n        unit: `GPa`,\\n    },\\n    {\\n        title: `Voig shear modulus`,\\n        value: material.g_voigt,\\n        unit: `GPa`,\\n    },\\n    { title: `Refractive index`, value: material.n },\\n    {\\n        title: `Is magnetic`,\\n        value: `${material.is_magnetic ? `yes` : `no`} ${material.is_magnetic\\n            ? `(${pretty_num(material.total_magnetization)} µB/f.u.)`\\n            : ``}`,\\n        tooltip: `µB: Bohr magneton, f.u.: formula unit`,\\n    },\\n    { title: `Ordering`, value: { NM: `non-magnetic` }[material.ordering] },\\n    {\\n        title: `Possible oxidation states`,\\n        value: superscript_digits(material.possible_species?.join(` `) ?? ``),\\n        condition: material.possible_species?.length,\\n    },\\n];\\n<\/script>\\n\\n<InfoCard {data} {...$$restProps} title=\\"Material\\" />\\n\\n<SymmetryCard {material} />\\n\\n<slot name=\\"after-symmetry\\" />\\n\\n<details>\\n  <summary>Related material IDs</summary>\\n  {#if material.task_ids?.length}\\n    <p>\\n      Task IDs: {#each material.task_ids as id}\\n        <a href=\\"https://materialsproject.org/tasks/{id}\\">{id}</a>\\n      {/each}\\n    </p>\\n  {/if}\\n  {#if material.database_IDs?.icsd?.length}\\n    <p>\\n      ICSD IDs: {#each material.database_IDs.icsd as id}\\n        {@const href = `https://ccdc.cam.ac.uk/structures/Search?Ccdcid=${id}&DatabaseToSearch=ICSD`}\\n        <a {href}>{id}</a>\\n      {/each}\\n    </p>\\n  {/if}\\n</details>\\n\\n<p class=\\"warning\\">\\n  {material.warnings}\\n</p>\\n\\n<style>\\n  .warning {\\n    color: var(--warning-color, darkred);\\n  }\\n  p {\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 1ex 1em;\\n    font-size: smaller;\\n  }\\n  p a {\\n    background-color: rgba(255, 255, 255, 0.1);\\n    padding: 0 3pt;\\n    border-radius: 3pt;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6GE,sCAAS,CACP,KAAK,CAAE,IAAI,eAAe,CAAC,QAAQ,CACrC,CACA,+BAAE,CACA,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GAAG,CAAC,GAAG,CACZ,SAAS,CAAE,OACb,CACA,gBAAC,CAAC,gBAAE,CACF,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,aAAa,CAAE,GACjB"}'
};
const MaterialCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  let $$restProps = compute_rest_props($$props, ["material"]);
  let { material } = $$props;
  if ($$props.material === void 0 && $$bindings.material && material !== void 0)
    $$bindings.material(material);
  $$result.css.add(css$1);
  data = [
    {
      title: `Band Gap`,
      value: material.band_gap,
      unit: `eV`,
      tooltip: material.vbm && material.cbm ? `VBM: ${material.vbm}, CBM: ${material.cbm}` : ``
    },
    {
      title: `Space Group`,
      value: `${material.symmetry?.number}`,
      unit: `(${material.symmetry?.symbol})`,
      condition: material.symmetry?.number
    },
    {
      title: `E<sub>above hull</sub>`,
      value: 1e3 * (material?.energy_above_hull ?? 0),
      unit: `meV/atom`,
      condition: `energy_above_hull` in material
    },
    {
      title: `Predicted stable`,
      value: material?.energy_above_hull ?? 0 > 0 ? `❌ No` : `✅ Yes`,
      condition: `energy_above_hull` in material
    },
    {
      title: `Formation Energy`,
      value: material.formation_energy_per_atom,
      unit: `eV/atom`
    },
    {
      title: `Experimentally Observed`,
      value: material.theoretical ? `❌ No` : `✅ Yes`
    },
    {
      title: `Total Energy`,
      value: material.energy_per_atom,
      unit: `eV/atom`
    },
    {
      title: `Uncorrected Energy`,
      value: material.uncorrected_energy_per_atom,
      unit: `eV/atom`,
      condition: material.uncorrected_energy_per_atom != material.energy_per_atom
    },
    {
      title: `Last updated`,
      value: material.last_updated?.$date.split(`T`)[0]
    },
    {
      title: `Origins`,
      value: material.origins,
      condition: material.origins?.length
    },
    {
      title: `Voigt bulk modulus`,
      value: material.k_voigt,
      unit: `GPa`
    },
    {
      title: `Voig shear modulus`,
      value: material.g_voigt,
      unit: `GPa`
    },
    {
      title: `Refractive index`,
      value: material.n
    },
    {
      title: `Is magnetic`,
      value: `${material.is_magnetic ? `yes` : `no`} ${material.is_magnetic ? `(${pretty_num(material.total_magnetization)} µB/f.u.)` : ``}`,
      tooltip: `µB: Bohr magneton, f.u.: formula unit`
    },
    {
      title: `Ordering`,
      value: { NM: `non-magnetic` }[material.ordering]
    },
    {
      title: `Possible oxidation states`,
      value: superscript_digits(material.possible_species?.join(` `) ?? ``),
      condition: material.possible_species?.length
    }
  ];
  return `${validate_component(InfoCard, "InfoCard").$$render($$result, Object.assign({}, { data }, $$restProps, { title: "Material" }), {}, {})} ${validate_component(SymmetryCard, "SymmetryCard").$$render($$result, { material }, {}, {})} ${slots["after-symmetry"] ? slots["after-symmetry"]({}) : ``} <details><summary data-svelte-h="svelte-l0tqk2">Related material IDs</summary> ${material.task_ids?.length ? `<p class="svelte-11ezupt">Task IDs: ${each(material.task_ids, (id) => {
    return `<a href="${"https://materialsproject.org/tasks/" + escape(id, true)}" class="svelte-11ezupt">${escape(id)}</a>`;
  })}</p>` : ``} ${material.database_IDs?.icsd?.length ? `<p class="svelte-11ezupt">ICSD IDs: ${each(material.database_IDs.icsd, (id) => {
    let href = `https://ccdc.cam.ac.uk/structures/Search?Ccdcid=${id}&DatabaseToSearch=ICSD`;
    return ` <a${add_attribute("href", href, 0)} class="svelte-11ezupt">${escape(id)}</a>`;
  })}</p>` : ``}</details> <p class="warning svelte-11ezupt">${escape(material.warnings)} </p>`;
});
const css = {
  code: ".download.svelte-1noq6aq.svelte-1noq6aq{position:relative}.download.svelte-1noq6aq div.svelte-1noq6aq{display:none;position:absolute;top:100%;left:0;opacity:0;transition:opacity 0.3s ease-in-out}.download.svelte-1noq6aq div.svelte-1noq6aq::before{content:'';position:absolute;top:-6pt;left:0;width:100%;height:100%}.download.svelte-1noq6aq:hover div.svelte-1noq6aq{display:grid;gap:3pt;opacity:1;background-color:rgba(255, 255, 255, 0.12);margin:4pt 0 0;padding:3pt;border-radius:3pt}.download.svelte-1noq6aq button.svelte-1noq6aq{z-index:1}.similar-structures.svelte-1noq6aq.svelte-1noq6aq{display:flex;justify-content:space-around;flex-wrap:wrap;gap:1em}ol.svelte-1noq6aq.svelte-1noq6aq{list-style:none;text-align:center}ol.svelte-1noq6aq li span.svelte-1noq6aq{font-weight:lighter;margin-left:1em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { goto } from \'$app/navigation\';\\nimport { page } from \'$app/stores\';\\nimport { MaterialCard, Structure, StructureCard, pretty_num } from \'$lib\';\\nimport { download, fetch_zipped, mp_build_bucket } from \'$lib/api\';\\nexport let data;\\nlet input_value = `mp-${$page.params.slug}`;\\n$: mp_id = input_value.trim().toLowerCase();\\n$: href = `https://materialsproject.org/materials/${mp_id}`;\\n$: aws_url = `${mp_build_bucket}/summary/${mp_id}.json.gz`;\\n<\/script>\\n\\n<main>\\n  <center style=\\"margin: 1em 0;\\">\\n    <h1>\\n      Materials Explorer - {data.summary.formula_pretty}\\n      <span style=\\"font-weight: lighter;\\">(<a {href}>{mp_id}</a>)</span>\\n    </h1>\\n\\n    <input\\n      placeholder=\\"Enter MP material ID\\"\\n      bind:value={input_value}\\n      on:keydown={async (event) => {\\n        if (event.key === `Enter`) {\\n          goto(`/${mp_id}`)\\n          data.summary = await fetch_zipped(aws_url)\\n        }\\n      }}\\n    />\\n    <button\\n      on:click={async () => {\\n        goto(`/${mp_id}`)\\n        data.summary = await fetch_zipped(aws_url)\\n      }}\\n    >\\n      Fetch material\\n    </button>\\n    <span class=\\"download\\">\\n      <button>Save material summary</button>\\n      <div>\\n        <button\\n          on:click={() => {\\n            if (!data.summary) return alert(`No data to download`)\\n            download(\\n              JSON.stringify(data.summary, null, 2),\\n              `${mp_id}.json`,\\n              `application/json`\\n            )\\n          }}>JSON</button\\n        >\\n        <button\\n          on:click={async () => {\\n            const blob = await fetch_zipped(aws_url, { unzip: false })\\n            if (!blob) return\\n            download(blob, `${mp_id}.json.gz`, `application/gzip`)\\n          }}>Zipped JSON</button\\n        >\\n      </div>\\n    </span>\\n  </center>\\n  <Structure structure={data.summary.structure} />\\n\\n  <MaterialCard material={data.summary}>\\n    <StructureCard structure={data.summary.structure} slot=\\"after-symmetry\\" />\\n  </MaterialCard>\\n\\n  <h3>\\n    Crystal description\\n    <small>\\n      (generated by <a href=\\"https://github.com/hackingmaterials/robocrystallographer\\"\\n        >Robocrystallographer\\n      </a>)\\n    </small>\\n  </h3>\\n  <p>{data.robocrys.description}</p>\\n\\n  <h2>Similar structures</h2>\\n  <ol class=\\"similar-structures\\">\\n    {#each data?.similarity?.sim?.slice(0, 6) ?? [] as { task_id, dissimilarity, formula }}\\n      <li>\\n        <strong>\\n          <a href=\\"https://materialsproject.org/tasks/{task_id}\\">{task_id}</a>\\n        </strong><span>{formula}</span>\\n        <br />\\n        <small>dissimilarity: {pretty_num(dissimilarity)}</small>\\n      </li>\\n    {:else}\\n      <li>No similar structures found</li>\\n    {/each}\\n  </ol>\\n</main>\\n\\n<style>\\n  .download {\\n    position: relative;\\n  }\\n  .download div {\\n    display: none;\\n    position: absolute;\\n    top: 100%;\\n    left: 0;\\n    opacity: 0;\\n    transition: opacity 0.3s ease-in-out;\\n  }\\n  .download div::before {\\n    /* increase top hover area */\\n    content: \'\';\\n    position: absolute;\\n    top: -6pt;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n  }\\n  .download:hover div {\\n    display: grid;\\n    gap: 3pt;\\n    opacity: 1;\\n    background-color: rgba(255, 255, 255, 0.12);\\n    margin: 4pt 0 0;\\n    padding: 3pt;\\n    border-radius: 3pt;\\n  }\\n  .download button {\\n    z-index: 1;\\n  }\\n  .similar-structures {\\n    display: flex;\\n    justify-content: space-around;\\n    flex-wrap: wrap;\\n    gap: 1em;\\n  }\\n  ol {\\n    list-style: none;\\n    text-align: center;\\n  }\\n  ol li span {\\n    font-weight: lighter;\\n    margin-left: 1em;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4FE,uCAAU,CACR,QAAQ,CAAE,QACZ,CACA,wBAAS,CAAC,kBAAI,CACZ,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,WAC3B,CACA,wBAAS,CAAC,kBAAG,QAAS,CAEpB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,wBAAS,MAAM,CAAC,kBAAI,CAClB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,CAAC,CACf,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,GACjB,CACA,wBAAS,CAAC,qBAAO,CACf,OAAO,CAAE,CACX,CACA,iDAAoB,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GACP,CACA,gCAAG,CACD,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MACd,CACA,iBAAE,CAAC,EAAE,CAAC,mBAAK,CACT,WAAW,CAAE,OAAO,CACpB,WAAW,CAAE,GACf"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mp_id;
  let href;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let input_value = `mp-${$page.params.slug}`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  mp_id = input_value.trim().toLowerCase();
  href = `https://materialsproject.org/materials/${mp_id}`;
  $$unsubscribe_page();
  return `<main><center style="margin: 1em 0;"><h1>Materials Explorer - ${escape(data.summary.formula_pretty)} <span style="font-weight: lighter;">(<a${add_attribute("href", href, 0)}>${escape(mp_id)}</a>)</span></h1> <input placeholder="Enter MP material ID"${add_attribute("value", input_value, 0)}> <button data-svelte-h="svelte-1wfo1dn">Fetch material</button> <span class="download svelte-1noq6aq"><button class="svelte-1noq6aq" data-svelte-h="svelte-1s8bzic">Save material summary</button> <div class="svelte-1noq6aq"><button class="svelte-1noq6aq" data-svelte-h="svelte-92cwn2">JSON</button> <button class="svelte-1noq6aq" data-svelte-h="svelte-16z089s">Zipped JSON</button></div></span></center> ${validate_component(Structure, "Structure").$$render($$result, { structure: data.summary.structure }, {}, {})} ${validate_component(MaterialCard, "MaterialCard").$$render($$result, { material: data.summary }, {}, {
    "after-symmetry": () => {
      return `${validate_component(StructureCard, "StructureCard").$$render(
        $$result,
        {
          structure: data.summary.structure,
          slot: "after-symmetry"
        },
        {},
        {}
      )}`;
    }
  })} <h3 data-svelte-h="svelte-1h0ekqb">Crystal description
    <small>(generated by <a href="https://github.com/hackingmaterials/robocrystallographer">Robocrystallographer
      </a>)</small></h3> <p>${escape(data.robocrys.description)}</p> <h2 data-svelte-h="svelte-1ea1rjf">Similar structures</h2> <ol class="similar-structures svelte-1noq6aq">${(data?.similarity?.sim?.slice(0, 6) ?? []).length ? each(data?.similarity?.sim?.slice(0, 6) ?? [], ({ task_id, dissimilarity, formula }) => {
    return `<li><strong><a href="${"https://materialsproject.org/tasks/" + escape(task_id, true)}">${escape(task_id)}</a> </strong><span class="svelte-1noq6aq">${escape(formula)}</span> <br> <small>dissimilarity: ${escape(pretty_num(dissimilarity))}</small> </li>`;
  }) : `<li data-svelte-h="svelte-8hsbra">No similar structures found</li>`}</ol> </main>`;
});
export {
  Page as default
};
