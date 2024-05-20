import { c as create_ssr_component, q as onDestroy, j as spread, l as escape_object, p as createEventDispatcher, g as subscribe, v as validate_component } from "./ssr.js";
import { s as show_icons } from "./index3.js";
import { c as checkIconState, g as generateIcon } from "./functions.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Icon_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_icons, $$unsubscribe_show_icons;
  $$unsubscribe_show_icons = subscribe(show_icons, (value) => $show_icons = value);
  $$unsubscribe_show_icons();
  return `${$show_icons ? `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { inline: true }, $$props, { style: "padding: 0 5pt 0 0;" }), {}, {})}` : ``}`;
});
export {
  Icon_1 as I
};
