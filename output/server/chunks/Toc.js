import { c as create_ssr_component, j as spread, l as escape_object, p as createEventDispatcher, b as add_attribute, v as validate_component, e as escape, h as each, d as add_styles } from "./ssr.js";
import { i as is_void } from "./names.js";
const MenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg${spread([escape_object($$props), { viewBox: "0 0 20 20" }, { fill: "currentColor" }], {})}><path d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"></path></svg>`;
});
const css = {
  code: ".svelte-1bzt6aj:where(aside.toc){box-sizing:border-box;height:max-content;overflow-wrap:break-word;font-size:var(--toc-font-size);min-width:var(--toc-min-width);width:var(--toc-width);z-index:var(--toc-z-index, 1)}.svelte-1bzt6aj:where(aside.toc > nav){overflow:var(--toc-overflow, auto);overscroll-behavior:contain;max-height:var(--toc-max-height, 90vh);padding:var(--toc-padding, 1em 1em 0)}.svelte-1bzt6aj:where(aside.toc > nav > ol){list-style:var(--toc-ol-list-style, none);padding:var(--toc-ol-padding, 0);margin:var(--toc-ol-margin)}.svelte-1bzt6aj:where(.toc-title){padding:var(--toc-title-padding);margin:var(--toc-title-margin)}.svelte-1bzt6aj:where(aside.toc > nav > ol > li){cursor:pointer;color:var(--toc-li-color);border:var(--toc-li-border);border-radius:var(--toc-li-border-radius);margin:var(--toc-li-margin);padding:var(--toc-li-padding, 2pt 4pt)}.svelte-1bzt6aj:where(aside.toc > nav > ol > li:hover){color:var(--toc-li-hover-color, cornflowerblue);background:var(--toc-li-hover-bg)}.svelte-1bzt6aj:where(aside.toc > nav > ol > li.active){background:var(--toc-active-bg, cornflowerblue);color:var(--toc-active-color, white);font-weight:var(--toc-active-font-weight);border:var(--toc-active-border);border-width:var(--toc-active-border-width);border-radius:var(--toc-active-border-radius, 2pt)}.svelte-1bzt6aj:where(aside.toc > button){border:none;bottom:0;cursor:pointer;font-size:2em;line-height:0;position:absolute;right:0;z-index:2;padding:var(--toc-mobile-btn-padding, 2pt 3pt);border-radius:var(--toc-mobile-btn-border-radius, 4pt);background:var(--toc-mobile-btn-bg, rgba(255, 255, 255, 0.2));color:var(--toc-mobile-btn-color, black)}.svelte-1bzt6aj:where(aside.toc > nav){position:relative}.svelte-1bzt6aj:where(aside.toc > nav > .toc-title){margin-top:0}.svelte-1bzt6aj:where(aside.toc.mobile){position:fixed;bottom:var(--toc-mobile-bottom, 1em);right:var(--toc-mobile-right, 1em)}.svelte-1bzt6aj:where(aside.toc.mobile > nav){border-radius:3pt;right:0;z-index:-1;box-sizing:border-box;background:var(--toc-mobile-bg, white);width:var(--toc-mobile-width, 18em);box-shadow:var(--toc-mobile-shadow);border:var(--toc-mobile-border)}.svelte-1bzt6aj:where(aside.toc.desktop){margin:var(--toc-desktop-aside-margin)}.svelte-1bzt6aj:where(aside.toc.desktop){position:sticky;background:var(--toc-desktop-bg);margin:var(--toc-desktop-nav-margin);max-width:var(--toc-desktop-max-width);top:var(--toc-desktop-sticky-top, 2em)}",
  map: '{"version":3,"file":"Toc.svelte","sources":["Toc.svelte"],"sourcesContent":["<script>import { createEventDispatcher, onMount } from \'svelte\';\\nimport { blur } from \'svelte/transition\';\\nimport { MenuIcon } from \'.\';\\nexport let activeHeading = null;\\nexport let activeHeadingScrollOffset = 100;\\nexport let activeTocLi = null;\\nexport let aside = undefined;\\nexport let breakpoint = 1000; // in pixels (smaller window width is considered mobile, larger is desktop)\\nexport let desktop = true;\\nexport let flashClickedHeadingsFor = 1500;\\nexport let getHeadingIds = (node) => node.id;\\nexport let getHeadingLevels = (node) => Number(node.nodeName[1]); // get the number from H1, H2, ...\\nexport let getHeadingTitles = (node) => node.textContent ?? ``;\\n// the result of document.querySelectorAll(headingSelector). can be useful for binding\\nexport let headings = [];\\nexport let headingSelector = `:is(h2, h3, h4):not(.toc-exclude)`;\\nexport let hide = false;\\nexport let autoHide = true;\\nexport let keepActiveTocItemInView = true; // requires scrollend event browser support\\nexport let minItems = 0;\\nexport let nav = undefined;\\nexport let open = false;\\nexport let openButtonLabel = `Open table of contents`;\\n// prettier-ignore\\nexport let reactToKeys = [`ArrowDown`, `ArrowUp`, ` `, `Enter`, `Escape`, `Tab`];\\nexport let pageBody = `body`;\\nexport let scrollBehavior = `smooth`;\\nexport let title = `On this page`;\\nexport let titleTag = `h2`;\\nexport let tocItems = [];\\nexport let warnOnEmpty = true;\\nexport let blurParams = { duration: 200 };\\nlet window_width;\\n// dispatch open event when open changes\\nconst dispatch = createEventDispatcher();\\n$: dispatch(`open`, { open });\\n$: levels = headings.map(getHeadingLevels);\\n$: minLevel = Math.min(...levels);\\n$: desktop = window_width > breakpoint;\\nfunction close(event) {\\n    if (!aside?.contains(event.target))\\n        open = false;\\n}\\n// (re-)query headings on mount and on route changes\\nfunction requery_headings() {\\n    if (typeof document === `undefined`)\\n        return; // for SSR\\n    headings = [...document.querySelectorAll(headingSelector)];\\n    set_active_heading();\\n    if (headings.length === 0) {\\n        if (warnOnEmpty) {\\n            console.warn(`svelte-toc found no headings for headingSelector=\'${headingSelector}\'. ${autoHide ? `Hiding` : `Showing empty`} table of contents.`);\\n        }\\n        if (autoHide)\\n            hide = true;\\n    }\\n    else if (hide && autoHide) {\\n        hide = false;\\n    }\\n}\\nrequery_headings();\\nonMount(() => {\\n    if (typeof pageBody === `string`) {\\n        pageBody = document.querySelector(pageBody);\\n        if (!pageBody) {\\n            throw new Error(`Could not find page body element: ${pageBody}`);\\n        }\\n    }\\n    const mutation_observer = new MutationObserver(requery_headings);\\n    mutation_observer.observe(pageBody, { childList: true, subtree: true });\\n    return () => mutation_observer.disconnect();\\n});\\nfunction set_active_heading() {\\n    let idx = headings.length;\\n    while (idx--) {\\n        const { top } = headings[idx].getBoundingClientRect();\\n        // loop through headings from last to first until we find one that the viewport already\\n        // scrolled past. if none is found, set make first heading active\\n        if (top < activeHeadingScrollOffset || idx === 0) {\\n            activeHeading = headings[idx];\\n            activeTocLi = tocItems[idx];\\n            return; // exit while loop if updated active heading\\n        }\\n    }\\n}\\n// click and key handler for ToC items that scrolls to the heading\\nconst li_click_key_handler = (node) => (event) => {\\n    if (event instanceof KeyboardEvent && ![`Enter`, ` `].includes(event.key))\\n        return;\\n    open = false;\\n    node.scrollIntoView?.({ behavior: scrollBehavior, block: `start` });\\n    const id = getHeadingIds && getHeadingIds(node);\\n    if (id)\\n        history.replaceState({}, ``, `#${id}`);\\n    if (flashClickedHeadingsFor) {\\n        node.classList.add(`toc-clicked`);\\n        setTimeout(() => node.classList.remove(`toc-clicked`), flashClickedHeadingsFor);\\n    }\\n};\\nfunction scroll_to_active_toc_item(behavior = `smooth`) {\\n    if (keepActiveTocItemInView && activeTocLi && nav) {\\n        // scroll the active ToC item into the middle of the ToC container\\n        const top = activeTocLi?.offsetTop - nav.offsetHeight / 2;\\n        nav?.scrollTo?.({ top, behavior });\\n    }\\n}\\n// ensure active ToC is in view when ToC opens on mobile\\n$: if (open && nav) {\\n    set_active_heading();\\n    scroll_to_active_toc_item(`instant`);\\n}\\n// enable keyboard navigation\\nfunction on_keydown(event) {\\n    if (!reactToKeys || !reactToKeys.includes(event.key))\\n        return;\\n    // `:hover`.at(-1) returns the most deeply nested hovered element\\n    const hovered = [...document.querySelectorAll(`:hover`)].at(-1);\\n    const toc_is_hovered = hovered && nav?.contains(hovered);\\n    if (\\n    // return early if ToC does not have focus\\n    (event.key === `Tab` && !nav?.contains(document.activeElement)) ||\\n        // ignore keyboard events when ToC is closed on mobile or when ToC is not currently hovered on desktop\\n        (!desktop && !open) ||\\n        (desktop && !toc_is_hovered))\\n        return;\\n    event.preventDefault();\\n    if (event.key === `Escape` && open)\\n        open = false;\\n    else if (event.key === `Tab` && !aside?.contains(document.activeElement))\\n        open = false;\\n    else if (activeTocLi) {\\n        if (event.key === `ArrowDown`) {\\n            const next = activeTocLi.nextElementSibling;\\n            if (next)\\n                activeTocLi = next;\\n        }\\n        if (event.key === `ArrowUp`) {\\n            const prev = activeTocLi.previousElementSibling;\\n            if (prev)\\n                activeTocLi = prev;\\n        }\\n        // update active heading\\n        activeHeading = headings[tocItems.indexOf(activeTocLi)];\\n    }\\n    if (activeTocLi && [` `, `Enter`].includes(event.key)) {\\n        activeHeading?.scrollIntoView({ behavior: `instant`, block: `start` });\\n    }\\n}\\n<\/script>\\n\\n<svelte:window\\n  bind:innerWidth={window_width}\\n  on:scroll={set_active_heading}\\n  on:click={close}\\n  on:scrollend={() => {\\n    // wait for scroll end since Chrome doesn\'t support multiple simultaneous scrolls,\\n    // smooth or otherwise (https://stackoverflow.com/a/63563437)\\n    scroll_to_active_toc_item()\\n  }}\\n  on:resize={() => {\\n    desktop = window_width > breakpoint\\n    set_active_heading()\\n  }}\\n  on:keydown={on_keydown}\\n/>\\n\\n<aside\\n  class=\\"toc\\"\\n  class:desktop\\n  class:hidden={hide}\\n  class:mobile={!desktop}\\n  bind:this={aside}\\n  hidden={hide}\\n  aria-hidden={hide}\\n>\\n  {#if !open && !desktop && headings.length >= minItems}\\n    <button\\n      on:click|preventDefault|stopPropagation={() => (open = true)}\\n      aria-label={openButtonLabel}\\n    >\\n      <slot name=\\"open-toc-icon\\">\\n        <MenuIcon width=\\"1em\\" />\\n      </slot>\\n    </button>\\n  {/if}\\n  {#if open || (desktop && headings.length >= minItems)}\\n    <nav transition:blur={blurParams} bind:this={nav}>\\n      {#if title}\\n        <slot name=\\"title\\">\\n          <svelte:element this={titleTag} class=\\"toc-title toc-exclude\\">\\n            {title}\\n          </svelte:element>\\n        </slot>\\n      {/if}\\n      <ol>\\n        {#each headings as heading, idx}\\n          <li\\n            style:margin=\\"0 0 0 {levels[idx] - minLevel}em\\"\\n            style:font-size=\\"{2 - 0.2 * (levels[idx] - minLevel)}ex\\"\\n            class:active={activeTocLi === tocItems[idx]}\\n            on:click={li_click_key_handler(heading)}\\n            on:keyup={li_click_key_handler(heading)}\\n            bind:this={tocItems[idx]}\\n            role=\\"menuitem\\"\\n          >\\n            <slot name=\\"toc-item\\" {heading} {idx}>\\n              {getHeadingTitles(heading)}\\n            </slot>\\n          </li>\\n        {/each}\\n      </ol>\\n    </nav>\\n  {/if}\\n</aside>\\n\\n<style>\\n  :where(aside.toc) {\\n    box-sizing: border-box;\\n    height: max-content;\\n    overflow-wrap: break-word;\\n    font-size: var(--toc-font-size);\\n    min-width: var(--toc-min-width);\\n    width: var(--toc-width);\\n    z-index: var(--toc-z-index, 1);\\n  }\\n  :where(aside.toc > nav) {\\n    overflow: var(--toc-overflow, auto);\\n    overscroll-behavior: contain;\\n    max-height: var(--toc-max-height, 90vh);\\n    padding: var(--toc-padding, 1em 1em 0);\\n  }\\n  :where(aside.toc > nav > ol) {\\n    list-style: var(--toc-ol-list-style, none);\\n    padding: var(--toc-ol-padding, 0);\\n    margin: var(--toc-ol-margin);\\n  }\\n  :where(.toc-title) {\\n    padding: var(--toc-title-padding);\\n    margin: var(--toc-title-margin);\\n  }\\n  :where(aside.toc > nav > ol > li) {\\n    cursor: pointer;\\n    color: var(--toc-li-color);\\n    border: var(--toc-li-border);\\n    border-radius: var(--toc-li-border-radius);\\n    margin: var(--toc-li-margin);\\n    padding: var(--toc-li-padding, 2pt 4pt);\\n  }\\n  :where(aside.toc > nav > ol > li:hover) {\\n    color: var(--toc-li-hover-color, cornflowerblue);\\n    background: var(--toc-li-hover-bg);\\n  }\\n  :where(aside.toc > nav > ol > li.active) {\\n    background: var(--toc-active-bg, cornflowerblue);\\n    color: var(--toc-active-color, white);\\n    font-weight: var(--toc-active-font-weight);\\n    border: var(--toc-active-border);\\n    border-width: var(--toc-active-border-width);\\n    border-radius: var(--toc-active-border-radius, 2pt);\\n  }\\n  :where(aside.toc > button) {\\n    border: none;\\n    bottom: 0;\\n    cursor: pointer;\\n    font-size: 2em;\\n    line-height: 0;\\n    position: absolute;\\n    right: 0;\\n    z-index: 2;\\n    padding: var(--toc-mobile-btn-padding, 2pt 3pt);\\n    border-radius: var(--toc-mobile-btn-border-radius, 4pt);\\n    background: var(--toc-mobile-btn-bg, rgba(255, 255, 255, 0.2));\\n    color: var(--toc-mobile-btn-color, black);\\n  }\\n  :where(aside.toc > nav) {\\n    position: relative;\\n  }\\n  :where(aside.toc > nav > .toc-title) {\\n    margin-top: 0;\\n  }\\n\\n  :where(aside.toc.mobile) {\\n    position: fixed;\\n    bottom: var(--toc-mobile-bottom, 1em);\\n    right: var(--toc-mobile-right, 1em);\\n  }\\n  :where(aside.toc.mobile > nav) {\\n    border-radius: 3pt;\\n    right: 0;\\n    z-index: -1;\\n    box-sizing: border-box;\\n    background: var(--toc-mobile-bg, white);\\n    width: var(--toc-mobile-width, 18em);\\n    box-shadow: var(--toc-mobile-shadow);\\n    border: var(--toc-mobile-border);\\n  }\\n\\n  :where(aside.toc.desktop) {\\n    margin: var(--toc-desktop-aside-margin);\\n  }\\n  :where(aside.toc.desktop) {\\n    position: sticky;\\n    background: var(--toc-desktop-bg);\\n    margin: var(--toc-desktop-nav-margin);\\n    max-width: var(--toc-desktop-max-width);\\n    top: var(--toc-desktop-sticky-top, 2em);\\n  }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const Toc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let levels;
  let minLevel;
  let { activeHeading = null } = $$props;
  let { activeHeadingScrollOffset = 100 } = $$props;
  let { activeTocLi = null } = $$props;
  let { aside = void 0 } = $$props;
  let { breakpoint = 1e3 } = $$props;
  let { desktop = true } = $$props;
  let { flashClickedHeadingsFor = 1500 } = $$props;
  let { getHeadingIds = (node) => node.id } = $$props;
  let { getHeadingLevels = (node) => Number(node.nodeName[1]) } = $$props;
  let { getHeadingTitles = (node) => node.textContent ?? `` } = $$props;
  let { headings = [] } = $$props;
  let { headingSelector = `:is(h2, h3, h4):not(.toc-exclude)` } = $$props;
  let { hide = false } = $$props;
  let { autoHide = true } = $$props;
  let { keepActiveTocItemInView = true } = $$props;
  let { minItems = 0 } = $$props;
  let { nav = void 0 } = $$props;
  let { open = false } = $$props;
  let { openButtonLabel = `Open table of contents` } = $$props;
  let { reactToKeys = [`ArrowDown`, `ArrowUp`, ` `, `Enter`, `Escape`, `Tab`] } = $$props;
  let { pageBody = `body` } = $$props;
  let { scrollBehavior = `smooth` } = $$props;
  let { title = `On this page` } = $$props;
  let { titleTag = `h2` } = $$props;
  let { tocItems = [] } = $$props;
  let { warnOnEmpty = true } = $$props;
  let { blurParams = { duration: 200 } } = $$props;
  let window_width;
  const dispatch = createEventDispatcher();
  function requery_headings() {
    if (typeof document === `undefined`)
      return;
    headings = [...document.querySelectorAll(headingSelector)];
    set_active_heading();
    if (headings.length === 0) {
      if (warnOnEmpty) {
        console.warn(`svelte-toc found no headings for headingSelector='${headingSelector}'. ${autoHide ? `Hiding` : `Showing empty`} table of contents.`);
      }
      if (autoHide)
        hide = true;
    } else if (hide && autoHide) {
      hide = false;
    }
  }
  requery_headings();
  function set_active_heading() {
    let idx = headings.length;
    while (idx--) {
      const { top } = headings[idx].getBoundingClientRect();
      if (top < activeHeadingScrollOffset || idx === 0) {
        activeHeading = headings[idx];
        activeTocLi = tocItems[idx];
        return;
      }
    }
  }
  function scroll_to_active_toc_item(behavior = `smooth`) {
    if (keepActiveTocItemInView && activeTocLi && nav) {
      const top = activeTocLi?.offsetTop - nav.offsetHeight / 2;
      nav?.scrollTo?.({ top, behavior });
    }
  }
  if ($$props.activeHeading === void 0 && $$bindings.activeHeading && activeHeading !== void 0)
    $$bindings.activeHeading(activeHeading);
  if ($$props.activeHeadingScrollOffset === void 0 && $$bindings.activeHeadingScrollOffset && activeHeadingScrollOffset !== void 0)
    $$bindings.activeHeadingScrollOffset(activeHeadingScrollOffset);
  if ($$props.activeTocLi === void 0 && $$bindings.activeTocLi && activeTocLi !== void 0)
    $$bindings.activeTocLi(activeTocLi);
  if ($$props.aside === void 0 && $$bindings.aside && aside !== void 0)
    $$bindings.aside(aside);
  if ($$props.breakpoint === void 0 && $$bindings.breakpoint && breakpoint !== void 0)
    $$bindings.breakpoint(breakpoint);
  if ($$props.desktop === void 0 && $$bindings.desktop && desktop !== void 0)
    $$bindings.desktop(desktop);
  if ($$props.flashClickedHeadingsFor === void 0 && $$bindings.flashClickedHeadingsFor && flashClickedHeadingsFor !== void 0)
    $$bindings.flashClickedHeadingsFor(flashClickedHeadingsFor);
  if ($$props.getHeadingIds === void 0 && $$bindings.getHeadingIds && getHeadingIds !== void 0)
    $$bindings.getHeadingIds(getHeadingIds);
  if ($$props.getHeadingLevels === void 0 && $$bindings.getHeadingLevels && getHeadingLevels !== void 0)
    $$bindings.getHeadingLevels(getHeadingLevels);
  if ($$props.getHeadingTitles === void 0 && $$bindings.getHeadingTitles && getHeadingTitles !== void 0)
    $$bindings.getHeadingTitles(getHeadingTitles);
  if ($$props.headings === void 0 && $$bindings.headings && headings !== void 0)
    $$bindings.headings(headings);
  if ($$props.headingSelector === void 0 && $$bindings.headingSelector && headingSelector !== void 0)
    $$bindings.headingSelector(headingSelector);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.autoHide === void 0 && $$bindings.autoHide && autoHide !== void 0)
    $$bindings.autoHide(autoHide);
  if ($$props.keepActiveTocItemInView === void 0 && $$bindings.keepActiveTocItemInView && keepActiveTocItemInView !== void 0)
    $$bindings.keepActiveTocItemInView(keepActiveTocItemInView);
  if ($$props.minItems === void 0 && $$bindings.minItems && minItems !== void 0)
    $$bindings.minItems(minItems);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.openButtonLabel === void 0 && $$bindings.openButtonLabel && openButtonLabel !== void 0)
    $$bindings.openButtonLabel(openButtonLabel);
  if ($$props.reactToKeys === void 0 && $$bindings.reactToKeys && reactToKeys !== void 0)
    $$bindings.reactToKeys(reactToKeys);
  if ($$props.pageBody === void 0 && $$bindings.pageBody && pageBody !== void 0)
    $$bindings.pageBody(pageBody);
  if ($$props.scrollBehavior === void 0 && $$bindings.scrollBehavior && scrollBehavior !== void 0)
    $$bindings.scrollBehavior(scrollBehavior);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTag === void 0 && $$bindings.titleTag && titleTag !== void 0)
    $$bindings.titleTag(titleTag);
  if ($$props.tocItems === void 0 && $$bindings.tocItems && tocItems !== void 0)
    $$bindings.tocItems(tocItems);
  if ($$props.warnOnEmpty === void 0 && $$bindings.warnOnEmpty && warnOnEmpty !== void 0)
    $$bindings.warnOnEmpty(warnOnEmpty);
  if ($$props.blurParams === void 0 && $$bindings.blurParams && blurParams !== void 0)
    $$bindings.blurParams(blurParams);
  $$result.css.add(css);
  {
    dispatch(`open`, { open });
  }
  levels = headings.map(getHeadingLevels);
  minLevel = Math.min(...levels);
  desktop = window_width > breakpoint;
  {
    if (open && nav) {
      set_active_heading();
      scroll_to_active_toc_item(`instant`);
    }
  }
  return ` <aside class="${[
    "toc svelte-1bzt6aj",
    (desktop ? "desktop" : "") + " " + (hide ? "hidden" : "") + " " + (!desktop ? "mobile" : "")
  ].join(" ").trim()}" ${hide ? "hidden" : ""}${add_attribute("aria-hidden", hide, 0)}${add_attribute("this", aside, 0)}>${!open && !desktop && headings.length >= minItems ? `<button${add_attribute("aria-label", openButtonLabel, 0)} class="svelte-1bzt6aj">${slots["open-toc-icon"] ? slots["open-toc-icon"]({}) : ` ${validate_component(MenuIcon, "MenuIcon").$$render($$result, { width: "1em" }, {}, {})} `}</button>` : ``} ${open || desktop && headings.length >= minItems ? `<nav class="svelte-1bzt6aj"${add_attribute("this", nav, 0)}>${title ? `${slots.title ? slots.title({}) : ` ${((tag) => {
    return tag ? `<${titleTag} class="toc-title toc-exclude svelte-1bzt6aj">${is_void(tag) ? "" : `${escape(title)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(titleTag)} `}` : ``} <ol class="svelte-1bzt6aj">${each(headings, (heading, idx) => {
    return `<li role="menuitem" class="${["svelte-1bzt6aj", activeTocLi === tocItems[idx] ? "active" : ""].join(" ").trim()}"${add_styles({
      "margin": `0 0 0 ${levels[idx] - minLevel}em`,
      "font-size": `${2 - 0.2 * (levels[idx] - minLevel)}ex`
    })}${add_attribute("this", tocItems[idx], 0)}>${slots["toc-item"] ? slots["toc-item"]({ heading, idx }) : ` ${escape(getHeadingTitles(heading))} `} </li>`;
  })}</ol></nav>` : ``} </aside>`;
});
export {
  Toc as T
};
