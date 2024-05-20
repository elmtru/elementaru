import { w as writable } from "./index2.js";
function persisted_store(name, initial, type = `localStorage`) {
  function set_storage_val(name2, val, type2) {
    if (typeof window !== `undefined`) {
      window[type2][name2] = JSON.stringify(val);
    }
  }
  if (typeof window !== `undefined`) {
    if (window[type][name]) {
      initial = JSON.parse(window[type][name]);
    } else {
      set_storage_val(name, initial, type);
    }
  }
  const { set, update, ...store } = writable(initial);
  return {
    ...store,
    set: (val) => {
      set_storage_val(name, val, type);
      set(val);
    },
    update: (fn) => {
      update((val) => {
        const new_val = fn(val);
        set_storage_val(name, new_val, type);
        return new_val;
      });
    }
  };
}
const session_store = (name, initial) => persisted_store(name, initial, `sessionStorage`);
function url_param_store(name, initial) {
  function set_url_param(name2, val) {
    const url = new URL(location.toString());
    if (val)
      url.searchParams.set(name2, encodeURIComponent(val));
    else
      url.searchParams.delete(name2);
    history.replaceState({}, ``, url);
  }
  if (typeof location !== `undefined`) {
    const val = new URL(location.toString()).searchParams.get(name);
    if (val)
      initial = decodeURIComponent(val);
    else
      set_url_param(name, initial);
  }
  const { set, update, ...store } = writable(initial);
  return {
    ...store,
    set: (val) => {
      set_url_param(name, val);
      set(val);
    },
    update: (fn) => {
      update((val) => {
        const new_val = fn(val);
        set_url_param(name, new_val);
        return new_val;
      });
    }
  };
}
export {
  session_store as s,
  url_param_store as u
};
