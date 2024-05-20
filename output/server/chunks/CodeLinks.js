import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, j as spread, k as escape_attribute_value, l as escape_object } from "./ssr.js";
import "./Tooltip.svelte_svelte_type_style_lang.js";
import "./client.js";
import { I as Icon, C as CopyButton_1 } from "./Icon.js";
const css$1 = {
  code: "div.code-example.svelte-1nmfexz.svelte-1nmfexz{margin:var(--zoo-example-margin, 2em auto)}aside.svelte-1nmfexz.svelte-1nmfexz{position:absolute;display:flex;gap:5pt;top:var(--zoo-example-code-top, 1em);right:var(--zoo-example-code-right, 1em);bottom:var(--zoo-example-code-bottom);left:var(--zoo-example-code-left)}nav.svelte-1nmfexz.svelte-1nmfexz{display:flex;justify-content:end;margin-top:var(--zoo-example-nav-margin-top, 1em);gap:var(--zoo-example-nav-gap, 1ex)}pre.svelte-1nmfexz code.svelte-1nmfexz{background-color:transparent;display:inline-block}pre.svelte-1nmfexz.svelte-1nmfexz{position:relative;overflow-x:auto;visibility:hidden;opacity:0;max-height:0;transition:max-height, opacity, visibility;transition-duration:var(--zoo-example-code-transition-duration, 0.3s);border-radius:var(--zoo-example-code-border-radius, 4pt);background-color:var(--zoo-example-code-bg, rgba(255, 255, 255, 0.05));padding:var(--zoo-example-code-padding, 1em)}pre.open.svelte-1nmfexz.svelte-1nmfexz{visibility:visible;opacity:1;max-height:9999vh;margin:var(--zoo-example-code-margin, 1em 0 0 0)}div.code-example :is(button, a.btn){color:white;cursor:pointer;border:none;border-radius:3pt;padding:2pt 4pt;font-size:12pt;line-height:initial;transition:background-color 0.2s;background-color:var(--zoo-example-btn-bg, darkcyan)}div.code-example :is(button, a.btn):hover{background-color:var(--zoo-example-btn-bg-hover, teal)}",
  map: '{"version":3,"file":"CodeExample.svelte","sources":["CodeExample.svelte"],"sourcesContent":["<script>// see svelte.config.js where this component is passed to mdsvexamples\\nimport { CodeLinks, CopyButton, Icon } from \'./\';\\n// src+meta are passed in by mdsvexamples\\nexport let src = ``; // code fence content, sadly without indentation so we prefer node?.innerText below\\nexport let meta = {};\\nexport let open = !meta.collapsible;\\nlet node; // the <code> element\\n$: ({ id, collapsible, code_above, pkg } = meta);\\n$: if (pkg && node) {\\n    // replace $lib with package name in code\\n    node.innerHTML = node.innerHTML?.replaceAll(`$lib`, pkg);\\n}\\n<\/script>\\n\\n{#if collapsible}\\n  <nav>\\n    <slot name=\\"title\\" />\\n    <button on:click={() => (open = !open)}>\\n      <Icon icon={open ? `collapse` : `Expand`} />\\n      {open ? `Close` : `View code`}\\n    </button>\\n    <CodeLinks github={meta.github} stackblitz={meta.stackblitz} repo={meta.repo} />\\n  </nav>\\n{/if}\\n<!-- wrap in div with id for precise CSS selectors in playwright E2E tests -->\\n<div {id} class=\\"code-example\\">\\n  {#if !code_above}\\n    <slot name=\\"example\\" />\\n  {/if}\\n\\n  <pre class:open><code bind:this={node}><slot name=\\"code\\">{src}</slot></code><aside>\\n      <CopyButton content={node?.innerText ?? src} />\\n      {#if !collapsible}\\n        <CodeLinks github={meta.github} stackblitz={meta.stackblitz} repo={meta.repo} />\\n      {/if}\\n    </aside></pre>\\n  <slot name=\\"after-code\\" />\\n\\n  {#if code_above}\\n    <slot name=\\"example\\" />\\n  {/if}\\n</div>\\n\\n<style>\\n  div.code-example {\\n    margin: var(--zoo-example-margin, 2em auto);\\n  }\\n  aside {\\n    position: absolute;\\n    display: flex;\\n    gap: 5pt;\\n    top: var(--zoo-example-code-top, 1em);\\n    right: var(--zoo-example-code-right, 1em);\\n    bottom: var(--zoo-example-code-bottom);\\n    left: var(--zoo-example-code-left);\\n  }\\n  nav {\\n    display: flex;\\n    justify-content: end;\\n    margin-top: var(--zoo-example-nav-margin-top, 1em);\\n    gap: var(--zoo-example-nav-gap, 1ex);\\n  }\\n  pre code {\\n    background-color: transparent;\\n    display: inline-block;\\n  }\\n  pre {\\n    position: relative;\\n    overflow-x: auto;\\n    visibility: hidden;\\n    opacity: 0;\\n    max-height: 0;\\n    transition: max-height, opacity, visibility;\\n    transition-duration: var(--zoo-example-code-transition-duration, 0.3s);\\n    border-radius: var(--zoo-example-code-border-radius, 4pt);\\n    background-color: var(--zoo-example-code-bg, rgba(255, 255, 255, 0.05));\\n    padding: var(--zoo-example-code-padding, 1em);\\n  }\\n  pre.open {\\n    visibility: visible;\\n    opacity: 1;\\n    max-height: 9999vh;\\n    margin: var(--zoo-example-code-margin, 1em 0 0 0);\\n  }\\n\\n  :global(div.code-example :is(button, a.btn)) {\\n    color: white;\\n    cursor: pointer;\\n    border: none;\\n    border-radius: 3pt;\\n    padding: 2pt 4pt;\\n    font-size: 12pt;\\n    line-height: initial;\\n    transition: background-color 0.2s;\\n    background-color: var(--zoo-example-btn-bg, darkcyan);\\n  }\\n  :global(div.code-example :is(button, a.btn)):hover {\\n    background-color: var(--zoo-example-btn-bg-hover, teal);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4CE,GAAG,2CAAc,CACf,MAAM,CAAE,IAAI,oBAAoB,CAAC,SAAS,CAC5C,CACA,mCAAM,CACJ,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,GAAG,CAAE,IAAI,sBAAsB,CAAC,IAAI,CAAC,CACrC,KAAK,CAAE,IAAI,wBAAwB,CAAC,IAAI,CAAC,CACzC,MAAM,CAAE,IAAI,yBAAyB,CAAC,CACtC,IAAI,CAAE,IAAI,uBAAuB,CACnC,CACA,iCAAI,CACF,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,GAAG,CACpB,UAAU,CAAE,IAAI,4BAA4B,CAAC,IAAI,CAAC,CAClD,GAAG,CAAE,IAAI,qBAAqB,CAAC,IAAI,CACrC,CACA,kBAAG,CAAC,mBAAK,CACP,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,YACX,CACA,iCAAI,CACF,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,CAAC,CACb,UAAU,CAAE,UAAU,CAAC,CAAC,OAAO,CAAC,CAAC,UAAU,CAC3C,mBAAmB,CAAE,IAAI,sCAAsC,CAAC,KAAK,CAAC,CACtE,aAAa,CAAE,IAAI,gCAAgC,CAAC,IAAI,CAAC,CACzD,gBAAgB,CAAE,IAAI,qBAAqB,CAAC,0BAA0B,CAAC,CACvE,OAAO,CAAE,IAAI,0BAA0B,CAAC,IAAI,CAC9C,CACA,GAAG,mCAAM,CACP,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,yBAAyB,CAAC,UAAU,CAClD,CAEQ,mCAAqC,CAC3C,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CACpB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CACjC,gBAAgB,CAAE,IAAI,oBAAoB,CAAC,SAAS,CACtD,CACQ,mCAAoC,MAAO,CACjD,gBAAgB,CAAE,IAAI,0BAA0B,CAAC,KAAK,CACxD"}'
};
const CodeExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let collapsible;
  let code_above;
  let pkg;
  let { src = `` } = $$props;
  let { meta = {} } = $$props;
  let { open = !meta.collapsible } = $$props;
  let node;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  ({ id, collapsible, code_above, pkg } = meta);
  {
    if (pkg && node) {
      node.innerHTML = node.innerHTML?.replaceAll(`$lib`, pkg);
    }
  }
  return `${collapsible ? `<nav class="svelte-1nmfexz">${slots.title ? slots.title({}) : ``} <button>${validate_component(Icon, "Icon").$$render($$result, { icon: open ? `collapse` : `Expand` }, {}, {})} ${escape(open ? `Close` : `View code`)}</button> ${validate_component(CodeLinks, "CodeLinks").$$render(
    $$result,
    {
      github: meta.github,
      stackblitz: meta.stackblitz,
      repo: meta.repo
    },
    {},
    {}
  )}</nav>` : ``}  <div${add_attribute("id", id, 0)} class="code-example svelte-1nmfexz">${!code_above ? `${slots.example ? slots.example({}) : ``}` : ``} <pre class="${["svelte-1nmfexz", open ? "open" : ""].join(" ").trim()}"><code class="svelte-1nmfexz"${add_attribute("this", node, 0)}>${slots.code ? slots.code({}) : `${escape(src)}`}</code><aside class="svelte-1nmfexz">
      ${validate_component(CopyButton_1, "CopyButton").$$render($$result, { content: src }, {}, {})}
      ${!collapsible ? `${validate_component(CodeLinks, "CodeLinks").$$render(
    $$result,
    {
      github: meta.github,
      stackblitz: meta.stackblitz,
      repo: meta.repo
    },
    {},
    {}
  )}` : ``}
    </aside></pre> ${slots["after-code"] ? slots["after-code"]({}) : ``} ${code_above ? `${slots.example ? slots.example({}) : ``}` : ``} </div>`;
});
const css = {
  code: ".svelte-1uvasjp:where(a){display:inline-flex;gap:var(--zoo-codelinks-icon-gap, 4pt);margin:var(--zoo-codelinks-btn-margin);padding:var(--zoo-codelinks-btn-padding)}",
  map: '{"version":3,"file":"CodeLinks.svelte","sources":["CodeLinks.svelte"],"sourcesContent":["<script>import { Icon } from \'./\';\\nexport let repo = ``; // GitHub repo URL\\n// ref can be branch, tag, or SHA (master, v1.0.0, 73f70eb), defaults to `-` which\\n// points to HEAD of the repo\'s default branch\\nexport let repl = null;\\n// https://github.com/<user>/<repo>/blob/<branch>, e.g. https://github.com/sveltejs/kit/blob/master\\nexport let github = Boolean(repo);\\nexport let stackblitz = null;\\nexport let file = ``; // path to file in repo\\n// can be prefixed with git ref (branch, tag, or SHA) to point to specific revision (e.g. master, v1.0.0, 73f70eb), defaults to `-` which\\n// points to HEAD of the repo\'s default branch\\n// if left at default \'\', will link to repo itself, not any of its files\\n// related: https://github.com/sveltejs/kit/issues/8318\\nexport let btn_text = {};\\nexport let target = `_blank`;\\nexport let margin = null;\\nexport let padding = null;\\n$: repo_handle = repo?.split(`/`).slice(-2).join(`/`);\\nconst links = { target, rel: `noreferrer`, class: `btn` };\\n<\/script>\\n\\n{#if repl}\\n  <a href={repl} {...links} title=\\"Svelte REPL\\" style:padding style:margin>\\n    <Icon icon=\\"Svelte\\" />\\n    {#if btn_text?.repl}{btn_text.repl}{/if}\\n  </a>\\n{/if}\\n\\n{#if github && repo}\\n  {@const href = file ? `${repo}/blob/-/${github == true ? file : github}` : repo}\\n  <a {href} {...links} title=\\"GitHub\\" style:padding style:margin>\\n    <Icon icon=\\"GitHub\\" />\\n    {#if btn_text?.github}{btn_text.github}{/if}\\n  </a>\\n{/if}\\n\\n{#if stackblitz && repo_handle}\\n  <!-- file param defaults to path of file serving the current page if stackblitz=true -->\\n  {@const uri = encodeURIComponent(stackblitz == true ? file : stackblitz)}\\n  {@const stackblitz_url = `https://stackblitz.com/github/${repo_handle}`}\\n  <a\\n    href=\\"{stackblitz_url}?file={uri}\\"\\n    {...links}\\n    title=\\"StackBlitz\\"\\n    style:padding\\n    style:margin\\n  >\\n    <Icon icon=\\"StackBlitz\\" />\\n    {#if btn_text?.stackblitz}{btn_text.stackblitz}{/if}\\n  </a>\\n{/if}\\n\\n<style>\\n  :where(a) {\\n    display: inline-flex;\\n    gap: var(--zoo-codelinks-icon-gap, 4pt);\\n    margin: var(--zoo-codelinks-btn-margin);\\n    padding: var(--zoo-codelinks-btn-padding);\\n  }\\n</style>\\n"],"names":[],"mappings":"eAqDE,OAAO,CAAC,CAAE,CACR,OAAO,CAAE,WAAW,CACpB,GAAG,CAAE,IAAI,wBAAwB,CAAC,IAAI,CAAC,CACvC,MAAM,CAAE,IAAI,0BAA0B,CAAC,CACvC,OAAO,CAAE,IAAI,2BAA2B,CAC1C"}'
};
const CodeLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let repo_handle;
  let { repo = `` } = $$props;
  let { repl = null } = $$props;
  let { github = Boolean(repo) } = $$props;
  let { stackblitz = null } = $$props;
  let { file = `` } = $$props;
  let { btn_text = {} } = $$props;
  let { target = `_blank` } = $$props;
  let { margin = null } = $$props;
  let { padding = null } = $$props;
  const links = { target, rel: `noreferrer`, class: `btn` };
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0)
    $$bindings.repo(repo);
  if ($$props.repl === void 0 && $$bindings.repl && repl !== void 0)
    $$bindings.repl(repl);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.stackblitz === void 0 && $$bindings.stackblitz && stackblitz !== void 0)
    $$bindings.stackblitz(stackblitz);
  if ($$props.file === void 0 && $$bindings.file && file !== void 0)
    $$bindings.file(file);
  if ($$props.btn_text === void 0 && $$bindings.btn_text && btn_text !== void 0)
    $$bindings.btn_text(btn_text);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  $$result.css.add(css);
  repo_handle = repo?.split(`/`).slice(-2).join(`/`);
  return `${repl ? `<a${spread(
    [
      { href: escape_attribute_value(repl) },
      escape_object(links),
      { title: "Svelte REPL" }
    ],
    {
      classes: "svelte-1uvasjp",
      styles: { padding, margin }
    }
  )}>${validate_component(Icon, "Icon").$$render($$result, { icon: "Svelte" }, {}, {})} ${btn_text?.repl ? `${escape(btn_text.repl)}` : ``}</a>` : ``} ${github && repo ? (() => {
    let href = file ? `${repo}/blob/-/${github == true ? file : github}` : repo;
    return ` <a${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object(links),
        { title: "GitHub" }
      ],
      {
        classes: "svelte-1uvasjp",
        styles: { padding, margin }
      }
    )}>${validate_component(Icon, "Icon").$$render($$result, { icon: "GitHub" }, {}, {})} ${btn_text?.github ? `${escape(btn_text.github)}` : ``}</a>`;
  })() : ``} ${stackblitz && repo_handle ? (() => {
    let uri = encodeURIComponent(stackblitz == true ? file : stackblitz), stackblitz_url = `https://stackblitz.com/github/${repo_handle}`;
    return `   <a${spread(
      [
        {
          href: escape(stackblitz_url, true) + "?file=" + escape(uri, true)
        },
        escape_object(links),
        { title: "StackBlitz" }
      ],
      {
        classes: "svelte-1uvasjp",
        styles: { padding, margin }
      }
    )}>${validate_component(Icon, "Icon").$$render($$result, { icon: "StackBlitz" }, {}, {})} ${btn_text?.stackblitz ? `${escape(btn_text.stackblitz)}` : ``}</a>`;
  })() : ``}`;
});
export {
  CodeExample as C
};
