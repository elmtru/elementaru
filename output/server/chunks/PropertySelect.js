import { c as create_ssr_component, g as subscribe, i as set_store_value, v as validate_component } from "./ssr.js";
import { i as heatmap_key, j as heatmap_labels } from "./index3.js";
import { $ as $format } from "./ru.js";
import { M as MultiSelect } from "./MultiSelect.js";
const PropertySelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $heatmap_key, $$unsubscribe_heatmap_key;
  let $_, $$unsubscribe__;
  $$unsubscribe_heatmap_key = subscribe(heatmap_key, (value2) => $heatmap_key = value2);
  $$unsubscribe__ = subscribe($format, (value2) => $_ = value2);
  let { value = null } = $$props;
  const options = Object.keys(heatmap_labels);
  let { empty = false } = $$props;
  let { selected = empty ? [] : [options[1]] } = $$props;
  let { minSelect = 0 } = $$props;
  let { id = null } = $$props;
  let { key = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.empty === void 0 && $$bindings.empty && empty !== void 0)
    $$bindings.empty(empty);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.minSelect === void 0 && $$bindings.minSelect && minSelect !== void 0)
    $$bindings.minSelect(minSelect);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(heatmap_key, $heatmap_key = key = heatmap_labels[value ?? ``] ?? null, $heatmap_key);
    $$rendered = `${validate_component(MultiSelect, "Select").$$render(
      $$result,
      {
        id,
        options,
        selected,
        maxSelect: 1,
        minSelect,
        placeholder: $_("Select a heat map"),
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_heatmap_key();
  $$unsubscribe__();
  return $$rendered;
});
export {
  PropertySelect as P
};
