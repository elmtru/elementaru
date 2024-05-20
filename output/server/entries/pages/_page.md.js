import { c as create_ssr_component, g as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/index3.js";
import { s as structures } from "../../chunks/index4.js";
import Page$1 from "./(demos)/periodic-table/_page.svelte.js";
import { $ as $format } from "../../chunks/ru.js";
import { S as Structure } from "../../chunks/Structure.js";
const css = {
  code: "h1.svelte-4m6kdz{text-align:center;font-size:clamp(20pt, 5.5vw, 42pt)}h2.svelte-4m6kdz{text-align:center}p.svelte-4m6kdz{max-width:40em;margin:2em auto 3em;text-align:center}",
  map: `{"version":3,"file":"+page.md","sources":["+page.md"],"sourcesContent":["<script>\\n\\n  import { Structure } from '$lib'\\n  import { structures } from '$site'\\n  import TableDemo from './(demos)/periodic-table/+page.svelte'\\n  import { _ } from 'svelte-i18n';\\n\\n  let mp_id = \`mp-756175\`\\n  $: structure = structures.find((struct) => struct.id === mp_id)\\n  const pTable = \`Periodic Table\`\\n<\/script>\\n<style>\\n  h1 {\\n    text-align: center;\\n    font-size: clamp(20pt, 5.5vw, 42pt);\\n  }\\n  h2 {\\n    text-align: center;\\n  }\\n  p {\\n    max-width: 40em;\\n    margin: 2em auto 3em;\\n    text-align: center;\\n  }\\n</style>\\n\\n\\n<h1>Elementari</h1>\\n<p>  <code>elementari</code> - это набор инструментов для создания интерактивных веб-интерфейсов для материаловедения: периодических таблиц, трехмерных моделей молекул и кристаллических структур, моделей атомов Бора; доступны также тепловые карты и диаграммы рассеяния.\\nВ навигационной панели есть несколько примеров.</p>\\n<p>  Интерактивная периодическая таблица работает при различных размерах экрана: автоматически регулируются размер шрифта и показываемые данные в зависимости от доступного пространства.</p>\\n<h2>{$_(pTable)}</h2>\\n<TableDemo />\\n<h2>Structure Viewer</h2>\\n<p>Средство просмотра 3d-структур использует <a\\n  href=\\"https://threlte.xyz\\"\\n  rel=\\"nofollow\\"\\n><code>threlte</code></a> (<a href=\\"https://threejs.org\\" rel=\\"nofollow\\">THREE.js</a> для Svelte). Оно компилируется Svelte для высокой производительности (даже при просмотре структур с 100+ атомов) и разделяется на компоненты <code>Bond</code>, <code>Lattice</code>, <code>Scene</code> и <code>Site</code> для расширяемости.\\nВы можете добавить различные обработчики нажатия, перетаскивания и касания для большей интерактивности. Также можно добавлять всплывающие подсказки в дочерние компоненты. Здесь показана структура из <a\\n  href=\\"https://materialsproject.org/materials/{mp_id}\\"\\n  rel=\\"nofollow\\"\\n>{mp_id}</a> из <a href=\\"https://materialsproject.org\\" rel=\\"nofollow\\">Materials Project</a>.</p>\\n<Structure {structure} auto_rotate={0.5} />\\n\\n"],"names":[],"mappings":"AAYE,gBAAG,CACD,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CACpC,CACA,gBAAG,CACD,UAAU,CAAE,MACd,CACA,eAAE,CACA,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CACpB,UAAU,CAAE,MACd"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let structure;
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let mp_id = `mp-756175`;
  const pTable = `Periodic Table`;
  $$result.css.add(css);
  structure = structures.find((struct) => struct.id === mp_id);
  $$unsubscribe__();
  return `<h1 class="svelte-4m6kdz" data-svelte-h="svelte-1smirna">Elementari</h1> <p class="svelte-4m6kdz" data-svelte-h="svelte-1cur3cs"><code>elementari</code> - это набор инструментов для создания интерактивных веб-интерфейсов для материаловедения: периодических таблиц, трехмерных моделей молекул и кристаллических структур, моделей атомов Бора; доступны также тепловые карты и диаграммы рассеяния.
В навигационной панели есть несколько примеров.</p> <p class="svelte-4m6kdz" data-svelte-h="svelte-t1g8h4">Интерактивная периодическая таблица работает при различных размерах экрана: автоматически регулируются размер шрифта и показываемые данные в зависимости от доступного пространства.</p> <h2 class="svelte-4m6kdz">${escape($_(pTable))}</h2> ${validate_component(Page$1, "TableDemo").$$render($$result, {}, {}, {})} <h2 class="svelte-4m6kdz" data-svelte-h="svelte-j1mahn">Structure Viewer</h2> <p class="svelte-4m6kdz">Средство просмотра 3d-структур использует <a href="https://threlte.xyz" rel="nofollow" data-svelte-h="svelte-15oj9qn"><code>threlte</code></a> (<a href="https://threejs.org" rel="nofollow" data-svelte-h="svelte-kl7b2d">THREE.js</a> для Svelte). Оно компилируется Svelte для высокой производительности (даже при просмотре структур с 100+ атомов) и разделяется на компоненты <code data-svelte-h="svelte-l9o085">Bond</code>, <code data-svelte-h="svelte-so384g">Lattice</code>, <code data-svelte-h="svelte-1d0w5s2">Scene</code> и <code data-svelte-h="svelte-hsw0lz">Site</code> для расширяемости.
Вы можете добавить различные обработчики нажатия, перетаскивания и касания для большей интерактивности. Также можно добавлять всплывающие подсказки в дочерние компоненты. Здесь показана структура из <a href="${"https://materialsproject.org/materials/" + escape(mp_id, true)}" rel="nofollow">${escape(mp_id)}</a> из <a href="https://materialsproject.org" rel="nofollow" data-svelte-h="svelte-1ecv77x">Materials Project</a>.</p> ${validate_component(Structure, "Structure").$$render($$result, {
    structure,
    auto_rotate: 0.5
  }, {}, {})}`;
});
export {
  Page as default
};
