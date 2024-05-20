import { t as set_current_component, u as run_all, w as current_component, s as setContext, q as onDestroy, x as get_store_value, c as create_ssr_component, g as subscribe, b as add_attribute, v as validate_component, y as getContext, z as get_current_component, a as compute_rest_props, h as each, d as add_styles, f as merge_ssr_styles, e as escape, o as compute_slots, i as set_store_value } from "./ssr.js";
import { g as globals } from "./globals.js";
import { P as PerspectiveCamera, S as Scene, R as REVISION, C as ColorManagement, q as PCFSoftShadowMap, W as WebGLRenderer, r as sRGBEncoding, L as LinearEncoding, t as SceneGraphObject, A as ACESFilmicToneMapping, u as useThrelte, v as createRawEventDispatcher, G as Group, w as Raycaster, x as updateStyles, T, y as compileStyles, z as defaultCalculatePosition, B as isObjectBehindCamera, D as isObjectVisible, E as objectZIndex, F as objectScale, H as Ray, I as Plane, M as MathUtils, J as EventDispatcher, V as Vector3, K as MOUSE, N as TOUCH, Q as Quaternion, O as Spherical, U as Vector2, X as useParent, Y as Matrix4, Z as DynamicDrawUsage, _ as InstancedMesh, $ as PositionMesh, a0 as Euler, a1 as scale, a2 as add, a3 as BoxGeometry, a4 as element_colors, e as element_data, k as choose_bw_for_contrast, a5 as euclidean_dist, a6 as atomic_radii, p as pretty_num, b as element_color_schemes, a7 as get_elem_amounts, a8 as get_pbc_image_sites } from "./index3.js";
import { d as derived, w as writable, r as readable } from "./index2.js";
import mitt from "mitt";
import "./Tooltip.svelte_svelte_type_style_lang.js";
import "./client.js";
import { i as is_void } from "./names.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
class DAG {
  allVertices = {};
  /** Nodes that are fully unlinked */
  isolatedVertices = {};
  connectedVertices = {};
  sortedConnectedValues = [];
  needsSort = false;
  emitter = mitt();
  emit = this.emitter.emit.bind(this.emitter);
  on = this.emitter.on.bind(this.emitter);
  off = this.emitter.off.bind(this.emitter);
  get sortedVertices() {
    return this.mapNodes((value) => value);
  }
  moveToIsolated(key) {
    const vertex = this.connectedVertices[key];
    if (!vertex)
      return;
    this.isolatedVertices[key] = vertex;
    delete this.connectedVertices[key];
  }
  moveToConnected(key) {
    const vertex = this.isolatedVertices[key];
    if (!vertex)
      return;
    this.connectedVertices[key] = vertex;
    delete this.isolatedVertices[key];
  }
  getKey = (v) => {
    if (typeof v === "object") {
      return v.key;
    }
    return v;
  };
  add(key, value, options) {
    if (this.allVertices[key] && this.allVertices[key].value !== void 0) {
      throw new Error(`A node with the key ${key.toString()} already exists`);
    }
    let vertex = this.allVertices[key];
    if (!vertex) {
      vertex = {
        value,
        previous: /* @__PURE__ */ new Set(),
        next: /* @__PURE__ */ new Set()
      };
      this.allVertices[key] = vertex;
    } else if (vertex.value === void 0) {
      vertex.value = value;
    }
    const hasEdges = vertex.next.size > 0 || vertex.previous.size > 0;
    if (!options?.after && !options?.before && !hasEdges) {
      this.isolatedVertices[key] = vertex;
      this.emit("node:added", {
        key,
        type: "isolated",
        value
      });
      return;
    } else {
      this.connectedVertices[key] = vertex;
    }
    if (options?.after) {
      const afterArr = Array.isArray(options.after) ? options.after : [options.after];
      afterArr.forEach((after) => {
        vertex.previous.add(this.getKey(after));
      });
      afterArr.forEach((after) => {
        const afterKey = this.getKey(after);
        const linkedAfter = this.allVertices[afterKey];
        if (!linkedAfter) {
          this.allVertices[afterKey] = {
            value: void 0,
            previous: /* @__PURE__ */ new Set(),
            next: /* @__PURE__ */ new Set([key])
          };
          this.connectedVertices[afterKey] = this.allVertices[afterKey];
        } else {
          linkedAfter.next.add(key);
          this.moveToConnected(afterKey);
        }
      });
    }
    if (options?.before) {
      const beforeArr = Array.isArray(options.before) ? options.before : [options.before];
      beforeArr.forEach((before) => {
        vertex.next.add(this.getKey(before));
      });
      beforeArr.forEach((before) => {
        const beforeKey = this.getKey(before);
        const linkedBefore = this.allVertices[beforeKey];
        if (!linkedBefore) {
          this.allVertices[beforeKey] = {
            value: void 0,
            previous: /* @__PURE__ */ new Set([key]),
            next: /* @__PURE__ */ new Set()
          };
          this.connectedVertices[beforeKey] = this.allVertices[beforeKey];
        } else {
          linkedBefore.previous.add(key);
          this.moveToConnected(beforeKey);
        }
      });
    }
    this.emit("node:added", {
      key,
      type: "connected",
      value
    });
    this.needsSort = true;
  }
  remove(key) {
    const removeKey = this.getKey(key);
    const unlinkedVertex = this.isolatedVertices[removeKey];
    if (unlinkedVertex) {
      delete this.isolatedVertices[removeKey];
      delete this.allVertices[removeKey];
      this.emit("node:removed", {
        key: removeKey,
        type: "isolated"
      });
      return;
    }
    const linkedVertex = this.connectedVertices[removeKey];
    if (!linkedVertex) {
      return;
    }
    linkedVertex.next.forEach((nextKey) => {
      const nextVertex = this.connectedVertices[nextKey];
      if (nextVertex) {
        nextVertex.previous.delete(removeKey);
        if (nextVertex.previous.size === 0 && nextVertex.next.size === 0) {
          this.moveToIsolated(nextKey);
        }
      }
    });
    linkedVertex.previous.forEach((prevKey) => {
      const prevVertex = this.connectedVertices[prevKey];
      if (prevVertex) {
        prevVertex.next.delete(removeKey);
        if (prevVertex.previous.size === 0 && prevVertex.next.size === 0) {
          this.moveToIsolated(prevKey);
        }
      }
    });
    delete this.connectedVertices[removeKey];
    delete this.allVertices[removeKey];
    this.emit("node:removed", {
      key: removeKey,
      type: "connected"
    });
    this.needsSort = true;
  }
  mapNodes(callback) {
    if (this.needsSort) {
      this.sort();
    }
    const result = [];
    this.forEachNode((value, index) => {
      result.push(callback(value, index));
    });
    return result;
  }
  forEachNode(callback) {
    if (this.needsSort) {
      this.sort();
    }
    let index = 0;
    for (; index < this.sortedConnectedValues.length; index++) {
      callback(this.sortedConnectedValues[index], index);
    }
    Reflect.ownKeys(this.isolatedVertices).forEach((key) => {
      const vertex = this.isolatedVertices[key];
      if (vertex.value !== void 0)
        callback(vertex.value, index++);
    });
  }
  getValueByKey(key) {
    return this.allVertices[key]?.value;
  }
  getKeyByValue(value) {
    return Reflect.ownKeys(this.connectedVertices).find((key) => this.connectedVertices[key].value === value) ?? Reflect.ownKeys(this.isolatedVertices).find((key) => this.isolatedVertices[key].value === value);
  }
  sort() {
    const inDegree = /* @__PURE__ */ new Map();
    const zeroInDegreeQueue = [];
    const result = [];
    const connectedVertexKeysWithValues = Reflect.ownKeys(this.connectedVertices).filter((key) => {
      const vertex = this.connectedVertices[key];
      return vertex.value !== void 0;
    });
    connectedVertexKeysWithValues.forEach((vertex) => {
      inDegree.set(vertex, 0);
    });
    connectedVertexKeysWithValues.forEach((vertexKey) => {
      const vertex = this.connectedVertices[vertexKey];
      vertex.next.forEach((next) => {
        const nextVertex = this.connectedVertices[next];
        if (!nextVertex)
          return;
        inDegree.set(next, (inDegree.get(next) || 0) + 1);
      });
    });
    inDegree.forEach((degree, value) => {
      if (degree === 0) {
        zeroInDegreeQueue.push(value);
      }
    });
    while (zeroInDegreeQueue.length > 0) {
      const vertexKey = zeroInDegreeQueue.shift();
      result.push(vertexKey);
      const v = connectedVertexKeysWithValues.find((key) => key === vertexKey);
      if (v) {
        this.connectedVertices[v]?.next.forEach((adjVertex) => {
          const adjVertexInDegree = (inDegree.get(adjVertex) || 0) - 1;
          inDegree.set(adjVertex, adjVertexInDegree);
          if (adjVertexInDegree === 0) {
            zeroInDegreeQueue.push(adjVertex);
          }
        });
      }
    }
    if (result.length !== connectedVertexKeysWithValues.length) {
      throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");
    }
    const filterUndefined = (value) => value !== void 0;
    this.sortedConnectedValues = result.map((key) => this.connectedVertices[key].value).filter(filterUndefined);
    this.needsSort = false;
  }
  clear() {
    this.allVertices = {};
    this.isolatedVertices = {};
    this.connectedVertices = {};
    this.sortedConnectedValues = [];
    this.needsSort = false;
  }
  static isKey(value) {
    return typeof value === "string" || typeof value === "symbol";
  }
  static isValue(value) {
    return typeof value === "object" && "key" in value;
  }
}
class Task {
  key;
  stage;
  callback;
  runTask = true;
  stop() {
    this.runTask = false;
  }
  start() {
    this.runTask = true;
  }
  constructor(stage, key, callback) {
    this.stage = stage;
    this.key = key;
    this.callback = callback;
  }
  run(delta) {
    if (!this.runTask)
      return;
    this.callback(delta);
  }
}
class Stage extends DAG {
  key;
  scheduler;
  get tasks() {
    return this.sortedVertices;
  }
  callback = (_, r) => r();
  constructor(scheduler, key, callback) {
    super();
    this.scheduler = scheduler;
    this.key = key;
    if (callback)
      this.callback = callback.bind(this);
  }
  createTask(key, callback, options) {
    const task = new Task(this, key, callback);
    this.add(key, task, options);
    return task;
  }
  getTask(key) {
    return this.getValueByKey(key);
  }
  removeTask = this.remove.bind(this);
  run(delta) {
    this.callback(delta, (deltaOverride) => {
      this.forEachNode((task) => {
        task.run(deltaOverride ?? delta);
      });
    });
  }
  runWithTiming(delta) {
    const taskTimings = {};
    this.callback(delta, (deltaOverride) => {
      this.forEachNode((task) => {
        const start = performance.now();
        task.run(deltaOverride ?? delta);
        const duration = performance.now() - start;
        taskTimings[task.key] = duration;
      });
    });
    return taskTimings;
  }
  getSchedule() {
    return this.mapNodes((l) => l.key.toString());
  }
}
class Scheduler extends DAG {
  lastTime = performance.now();
  clampDeltaTo = 0.1;
  get stages() {
    return this.sortedVertices;
  }
  constructor(options) {
    super();
    if (options?.clampDeltaTo)
      this.clampDeltaTo = options.clampDeltaTo;
    this.run = this.run.bind(this);
  }
  createStage(key, options) {
    const stage = new Stage(this, key, options?.callback);
    this.add(key, stage, {
      after: options?.after,
      before: options?.before
    });
    return stage;
  }
  getStage(key) {
    return this.getValueByKey(key);
  }
  removeStage = this.remove.bind(this);
  /**
   * Runs all the stages in the scheduler.
   *
   * @param time The time in milliseconds since the start of the program.
   */
  run(time) {
    const delta = time - this.lastTime;
    this.forEachNode((stage) => {
      stage.run(Math.min(delta / 1e3, this.clampDeltaTo));
    });
    this.lastTime = time;
  }
  runWithTiming(time) {
    const delta = time - this.lastTime;
    const stageTimings = {};
    const start = performance.now();
    this.forEachNode((stage) => {
      const start2 = performance.now();
      const taskTimings = stage.runWithTiming(Math.min(delta / 1e3, this.clampDeltaTo));
      const duration = performance.now() - start2;
      stageTimings[stage.key.toString()] = {
        duration,
        tasks: taskTimings
      };
    });
    return {
      total: performance.now() - start,
      stages: stageTimings
    };
  }
  getSchedule(include = {
    tasks: true
  }) {
    return {
      stages: this.mapNodes((stage) => {
        if (stage === void 0)
          throw new Error("Stage not found");
        return {
          key: stage.key.toString(),
          ...{ tasks: include.tasks ? stage.getSchedule() : void 0 }
        };
      })
    };
  }
  dispose() {
    this.clear();
  }
}
const useLegacyFrameCompatibilityContextKey = Symbol("use-legacy-frame-compatibility-context");
const injectLegacyFrameCompatibilityContext = () => {
  const ctx = {
    useFrameOrders: [],
    useRenderOrders: []
  };
  setContext(useLegacyFrameCompatibilityContextKey, ctx);
  return ctx;
};
const watch = (stores, callback) => {
  const d = derived(stores, (values) => {
    return values;
  });
  let cleanupFn;
  const unsubscribe = d.subscribe(async (values) => {
    if (cleanupFn)
      cleanupFn();
    const fn = await callback(values);
    if (fn)
      cleanupFn = fn;
  });
  onDestroy(() => {
    unsubscribe();
    if (cleanupFn)
      cleanupFn();
  });
};
function memoize(stores, transform) {
  const obj = {
    current: void 0
  };
  watch(stores, (v) => {
    obj.current = transform ? transform(v) : v;
  });
  return obj;
}
const currentWritable = (value) => {
  const store = writable(value);
  const extendedWritable = {
    set: (value2) => {
      extendedWritable.current = value2;
      store.set(value2);
    },
    subscribe: store.subscribe,
    update: (fn) => {
      const newValue = fn(extendedWritable.current);
      extendedWritable.current = newValue;
      store.set(newValue);
    },
    current: value
  };
  return extendedWritable;
};
const browser = typeof window !== "undefined";
const useParentSize = () => {
  const parentSize = currentWritable({ width: 0, height: 0 });
  if (!browser) {
    return {
      parentSize,
      parentSizeAction: () => {
      }
    };
  }
  const mutationOptions = { childList: true, subtree: false, attributes: false };
  let el;
  const observeParent = (parent) => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();
    resizeObserver.observe(parent);
    mutationObserver.observe(parent, mutationOptions);
  };
  const resizeObserver = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect;
    if (width === parentSize.current.width && height === parentSize.current.height)
      return;
    parentSize.set({ width, height });
  });
  const mutationObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.removedNodes) {
        if (el === node && el.parentElement) {
          observeParent(el.parentElement);
          return;
        }
      }
    }
  });
  const parentSizeAction = (node) => {
    el = node;
    const parent = el.parentElement;
    if (!parent)
      return;
    parentSize.set({
      width: parent.clientWidth,
      height: parent.clientHeight
    });
    observeParent(parent);
  };
  onDestroy(() => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();
  });
  return {
    parentSize,
    parentSizeAction
  };
};
const createCache = () => {
  setContext("threlte-cache", []);
};
const getThrelteUserData = (object) => {
  return object.userData;
};
const createDefaultCamera = () => {
  const defaultCamera = new PerspectiveCamera(75, 0, 0.1, 1e3);
  getThrelteUserData(defaultCamera).threlteDefaultCamera = true;
  defaultCamera.position.z = 5;
  defaultCamera.lookAt(0, 0, 0);
  return defaultCamera;
};
const setDefaultCameraAspectOnSizeChange = (ctx) => {
  watch(ctx.size, (size) => {
    if (getThrelteUserData(get_store_value(ctx.camera)).threlteDefaultCamera) {
      ctx.camera.update((c) => {
        const cam = c;
        cam.aspect = size.width / size.height;
        cam.updateProjectionMatrix();
        ctx.invalidate();
        return cam;
      });
    }
  });
};
const createContexts = (options) => {
  const internalCtx = {
    frameInvalidated: true,
    advance: false,
    autoInvalidations: /* @__PURE__ */ new Set(),
    resetFrameInvalidation: () => {
      internalCtx.frameInvalidated = false;
      internalCtx.advance = false;
    },
    dispose: async (force = false) => {
      await tick();
      if (!internalCtx.shouldDispose && !force)
        return;
      internalCtx.disposableObjects.forEach((mounted, object) => {
        if (mounted === 0 || force) {
          object?.dispose?.();
          internalCtx.disposableObjects.delete(object);
        }
      });
      internalCtx.shouldDispose = false;
    },
    collectDisposableObjects: (object, objects) => {
      const disposables = objects ?? [];
      if (!object)
        return disposables;
      if (object?.dispose && typeof object.dispose === "function" && object.type !== "Scene") {
        disposables.push(object);
      }
      Object.entries(object).forEach(([propKey, propValue]) => {
        if (propKey === "parent" || propKey === "children" || typeof propValue !== "object")
          return;
        const value = propValue;
        if (value?.dispose) {
          internalCtx.collectDisposableObjects(value, disposables);
        }
      });
      return disposables;
    },
    addDisposableObjects: (objects) => {
      objects.forEach((obj) => {
        const currentValue = internalCtx.disposableObjects.get(obj);
        if (currentValue) {
          internalCtx.disposableObjects.set(obj, currentValue + 1);
        } else {
          internalCtx.disposableObjects.set(obj, 1);
        }
      });
    },
    removeDisposableObjects: (objects) => {
      if (objects.length === 0)
        return;
      objects.forEach((obj) => {
        const currentValue = internalCtx.disposableObjects.get(obj);
        if (currentValue && currentValue > 0) {
          internalCtx.disposableObjects.set(obj, currentValue - 1);
        }
      });
      internalCtx.shouldDispose = true;
    },
    disposableObjects: /* @__PURE__ */ new Map(),
    shouldDispose: false
  };
  const ctx = {
    size: derived([options.userSize, options.parentSize], ([uSize, pSize]) => {
      return uSize ? uSize : pSize;
    }),
    camera: currentWritable(createDefaultCamera()),
    scene: new Scene(),
    renderer: void 0,
    invalidate: () => {
      internalCtx.frameInvalidated = true;
    },
    advance: () => {
      internalCtx.advance = true;
    },
    colorSpace: currentWritable(options.colorSpace),
    toneMapping: currentWritable(options.toneMapping),
    dpr: currentWritable(options.dpr),
    useLegacyLights: currentWritable(options.useLegacyLights),
    shadows: currentWritable(options.shadows),
    colorManagementEnabled: currentWritable(options.colorManagementEnabled),
    renderMode: currentWritable(options.renderMode),
    autoRender: currentWritable(options.autoRender),
    scheduler: void 0,
    mainStage: void 0,
    renderStage: void 0,
    autoRenderTask: void 0,
    shouldRender: () => {
      const shouldRender = ctx.renderMode.current === "always" || ctx.renderMode.current === "on-demand" && (internalCtx.frameInvalidated || internalCtx.autoInvalidations.size > 0) || ctx.renderMode.current === "manual" && internalCtx.advance;
      return shouldRender;
    }
  };
  const userCtx = currentWritable({});
  setContext("threlte", ctx);
  setContext("threlte-internal-context", internalCtx);
  setContext("threlte-user-context", userCtx);
  const getCtx = () => ctx;
  const getInternalCtx = () => internalCtx;
  return {
    ctx,
    internalCtx,
    getCtx,
    getInternalCtx
  };
};
const normalizedRevision = REVISION.replace("dev", "");
const revision = Number.parseInt(normalizedRevision);
const colorSpaceToEncoding = {
  srgb: sRGBEncoding,
  "srgb-linear": LinearEncoding,
  "": LinearEncoding
};
const rendererHasOutputColorSpaceProperty = (renderer) => {
  return renderer.outputColorSpace !== void 0;
};
const useRenderer = (ctx) => {
  const renderer = writable(void 0);
  const createRenderer = (canvas, rendererParameters) => {
    ctx.renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      canvas,
      antialias: true,
      alpha: true,
      ...rendererParameters
    });
    renderer.set(ctx.renderer);
  };
  watch([ctx.colorManagementEnabled], ([colorManagementEnabled]) => {
    if (revision >= 150) {
      ColorManagement.enabled = colorManagementEnabled;
    } else {
      ColorManagement.legacyMode = !colorManagementEnabled;
    }
  });
  watch([renderer, ctx.colorSpace], ([renderer2, colorSpace]) => {
    if (!renderer2)
      return;
    if (rendererHasOutputColorSpaceProperty(renderer2)) {
      renderer2.outputColorSpace = colorSpace;
    } else {
      const encoding = colorSpaceToEncoding[colorSpace];
      if (!encoding) {
        console.warn("No encoding found for colorSpace", colorSpace);
      } else {
        renderer2.outputEncoding = encoding;
      }
    }
  });
  watch([renderer, ctx.dpr], ([renderer2, dpr]) => {
    renderer2?.setPixelRatio(dpr);
  });
  watch([renderer, ctx.size], ([renderer2, size]) => {
    if (renderer2?.xr?.isPresenting)
      return;
    renderer2?.setSize(size.width, size.height);
  });
  watch([renderer, ctx.shadows], ([renderer2, shadows]) => {
    if (!renderer2)
      return;
    renderer2.shadowMap.enabled = !!shadows;
    if (shadows && shadows !== true) {
      renderer2.shadowMap.type = shadows;
    } else if (shadows === true) {
      renderer2.shadowMap.type = PCFSoftShadowMap;
    }
  });
  watch([renderer, ctx.toneMapping], ([renderer2, toneMapping]) => {
    if (!renderer2)
      return;
    renderer2.toneMapping = toneMapping;
  });
  watch([renderer, ctx.useLegacyLights], ([renderer2, useLegacyLights]) => {
    if (!renderer2)
      return;
    if (revision >= 150 && useLegacyLights) {
      renderer2.useLegacyLights = useLegacyLights;
    } else if (revision < 150) {
      renderer2.physicallyCorrectLights = !useLegacyLights;
    }
  });
  return {
    createRenderer
  };
};
const css$4 = {
  code: "canvas.svelte-o3oskp{display:block}",
  map: `{"version":3,"file":"Canvas.svelte","sources":["Canvas.svelte"],"sourcesContent":["<script>import { onDestroy, onMount } from 'svelte';\\nimport { writable } from 'svelte/store';\\nimport { ACESFilmicToneMapping, PCFSoftShadowMap } from 'three';\\nimport { Scheduler } from './frame-scheduling';\\nimport { injectLegacyFrameCompatibilityContext } from './hooks/legacy/utils';\\nimport { useParentSize } from './hooks/useParentSize';\\nimport SceneGraphObject from './internal/SceneGraphObject.svelte';\\nimport { browser } from './lib/browser';\\nimport { createCache } from './lib/cache';\\nimport { createContexts } from './lib/contexts';\\nimport { setDefaultCameraAspectOnSizeChange } from './lib/defaultCamera';\\nimport { revision } from './lib/revision';\\nimport { watch } from './lib/storeUtils';\\nimport { useRenderer } from './lib/useRenderer';\\n/**\\n * Colors supplied to three.js — from color pickers, textures, 3D models, and other sources —\\n * each have an associated color space. Those not already in the Linear-sRGB working color\\n * space must be converted, and textures be given the correct texture.colorSpace assignment.\\n *\\n * Set to true for certain conversions (for hexadecimal and CSS colors in sRGB) to be made automatically.\\n *\\n * This property is not reactive and must be enabled before initializing colors.\\n *\\n * @default true\\n */\\nexport let colorManagementEnabled = true;\\n/**\\n * @default 'srgb'\\n */\\nexport let colorSpace = 'srgb';\\n/**\\n * @default window.devicePixelRatio\\n */\\nexport let dpr = browser ? window.devicePixelRatio : 1;\\n/**\\n * @default 'on-demand'\\n */\\nexport let renderMode = 'on-demand';\\n/**\\n * Parameters sent to the WebGLRenderer when created.\\n *\\n * This property can only be set when creating a \`<Canvas>\` and is not reactive.\\n */\\nexport let rendererParameters = undefined;\\n/**\\n * @default PCFSoftShadowMap\\n */\\nexport let shadows = PCFSoftShadowMap;\\nexport let size = undefined;\\n/**\\n * @default ACESFilmicToneMapping\\n */\\nexport let toneMapping = ACESFilmicToneMapping;\\n/**\\n * This property is not reactive and must be set at initialization.\\n *\\n * @default false if greater than or equal to r155, true if less than 155\\n * @see https://github.com/mrdoob/three.js/pull/26392\\n */\\nexport let useLegacyLights = revision >= 155 ? false : true;\\n/**\\n * By default, Threlte will automatically render the scene. To implement\\n * custom render pipelines, set this to \`false\`.\\n *\\n * @default true\\n */\\nexport let autoRender = true;\\nlet canvas;\\nlet initialized = writable(false);\\n// user size as a store\\nconst userSize = writable(size);\\n$: userSize.set(size);\\n// in case the user didn't define a fixed size, use the parent elements size\\nconst { parentSize, parentSizeAction } = useParentSize();\\n// TODO: Remove in Threlte 7\\nconst { useRenderOrders } = injectLegacyFrameCompatibilityContext();\\n// creating and setting the contexts\\nconst contexts = createContexts({\\n    colorManagementEnabled,\\n    colorSpace,\\n    dpr,\\n    renderMode,\\n    parentSize,\\n    autoRender,\\n    shadows,\\n    toneMapping,\\n    useLegacyLights,\\n    userSize\\n});\\n$: contexts.ctx.colorSpace.set(colorSpace);\\n$: contexts.ctx.dpr.set(dpr);\\n$: contexts.ctx.renderMode.set(renderMode);\\n$: contexts.ctx.autoRender.set(autoRender);\\n$: contexts.ctx.shadows.set(shadows);\\n$: contexts.ctx.toneMapping.set(toneMapping);\\nconst scheduler = new Scheduler();\\ncontexts.getCtx().mainStage = scheduler.createStage(Symbol('threlte-main-stage'));\\ncontexts.getCtx().renderStage = scheduler.createStage(Symbol('threlte-render-stage'), {\\n    after: contexts.ctx.mainStage,\\n    callback(_, runTasks) {\\n        if (contexts.ctx.shouldRender())\\n            runTasks();\\n    }\\n});\\ncontexts.getCtx().autoRenderTask = contexts.ctx.renderStage.createTask(Symbol('threlte-auto-render-task'), (_) => {\\n    // we're in here when autoRender is true In Threlte 7 we still have to\\n    // check for the existence of \`useRender\` instances\\n    if (useRenderOrders.length > 0)\\n        return;\\n    // if there are no useRender instances, we can render the scene\\n    contexts.ctx.renderer.render(ctx.scene, ctx.camera.current);\\n});\\nwatch([initialized, contexts.ctx.autoRender], ([initialized, autoRender]) => {\\n    if (initialized && autoRender) {\\n        contexts.getCtx().autoRenderTask.start();\\n    }\\n    else {\\n        contexts.getCtx().autoRenderTask.stop();\\n    }\\n    return () => {\\n        contexts.getCtx().autoRenderTask.stop();\\n    };\\n});\\n// set the scheduler on the context\\ncontexts.getCtx().scheduler = scheduler;\\n// create cache context for caching assets\\ncreateCache();\\n// context bindings\\nexport const ctx = contexts.ctx;\\nsetDefaultCameraAspectOnSizeChange(ctx);\\n// the hook useRenderer is managing the renderer.\\nconst { createRenderer } = useRenderer(ctx);\\nonMount(() => {\\n    createRenderer(canvas, rendererParameters);\\n    contexts.getCtx().renderer.setAnimationLoop((time) => {\\n        contexts.getInternalCtx().dispose();\\n        scheduler.run(time);\\n        contexts.getInternalCtx().resetFrameInvalidation();\\n    });\\n    initialized.set(true);\\n});\\nonDestroy(() => {\\n    contexts.internalCtx.dispose(true);\\n    contexts.ctx.scheduler.dispose();\\n    // Renderer is marked as optional because it is never defined in SSR\\n    contexts.ctx.renderer?.dispose();\\n});\\n<\/script>\\n\\n<canvas\\n  use:parentSizeAction\\n  bind:this={canvas}\\n>\\n  {#if $initialized}\\n    <SceneGraphObject object={contexts.ctx.scene}>\\n      <slot />\\n    </SceneGraphObject>\\n  {/if}\\n</canvas>\\n\\n<style>\\n  canvas {\\n    display: block;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiKE,oBAAO,CACL,OAAO,CAAE,KACX"}`
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $initialized, $$unsubscribe_initialized;
  let { colorManagementEnabled = true } = $$props;
  let { colorSpace = "srgb" } = $$props;
  let { dpr = browser ? window.devicePixelRatio : 1 } = $$props;
  let { renderMode = "on-demand" } = $$props;
  let { rendererParameters = void 0 } = $$props;
  let { shadows = PCFSoftShadowMap } = $$props;
  let { size = void 0 } = $$props;
  let { toneMapping = ACESFilmicToneMapping } = $$props;
  let { useLegacyLights = revision >= 155 ? false : true } = $$props;
  let { autoRender = true } = $$props;
  let canvas;
  let initialized = writable(false);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  const userSize = writable(size);
  const { parentSize, parentSizeAction } = useParentSize();
  const { useRenderOrders } = injectLegacyFrameCompatibilityContext();
  const contexts = createContexts({
    colorManagementEnabled,
    colorSpace,
    dpr,
    renderMode,
    parentSize,
    autoRender,
    shadows,
    toneMapping,
    useLegacyLights,
    userSize
  });
  const scheduler = new Scheduler();
  contexts.getCtx().mainStage = scheduler.createStage(Symbol("threlte-main-stage"));
  contexts.getCtx().renderStage = scheduler.createStage(Symbol("threlte-render-stage"), {
    after: contexts.ctx.mainStage,
    callback(_, runTasks) {
      if (contexts.ctx.shouldRender())
        runTasks();
    }
  });
  contexts.getCtx().autoRenderTask = contexts.ctx.renderStage.createTask(Symbol("threlte-auto-render-task"), (_) => {
    if (useRenderOrders.length > 0)
      return;
    contexts.ctx.renderer.render(ctx.scene, ctx.camera.current);
  });
  watch([initialized, contexts.ctx.autoRender], ([initialized2, autoRender2]) => {
    if (initialized2 && autoRender2) {
      contexts.getCtx().autoRenderTask.start();
    } else {
      contexts.getCtx().autoRenderTask.stop();
    }
    return () => {
      contexts.getCtx().autoRenderTask.stop();
    };
  });
  contexts.getCtx().scheduler = scheduler;
  createCache();
  const ctx = contexts.ctx;
  setDefaultCameraAspectOnSizeChange(ctx);
  useRenderer(ctx);
  onDestroy(() => {
    contexts.internalCtx.dispose(true);
    contexts.ctx.scheduler.dispose();
    contexts.ctx.renderer?.dispose();
  });
  if ($$props.colorManagementEnabled === void 0 && $$bindings.colorManagementEnabled && colorManagementEnabled !== void 0)
    $$bindings.colorManagementEnabled(colorManagementEnabled);
  if ($$props.colorSpace === void 0 && $$bindings.colorSpace && colorSpace !== void 0)
    $$bindings.colorSpace(colorSpace);
  if ($$props.dpr === void 0 && $$bindings.dpr && dpr !== void 0)
    $$bindings.dpr(dpr);
  if ($$props.renderMode === void 0 && $$bindings.renderMode && renderMode !== void 0)
    $$bindings.renderMode(renderMode);
  if ($$props.rendererParameters === void 0 && $$bindings.rendererParameters && rendererParameters !== void 0)
    $$bindings.rendererParameters(rendererParameters);
  if ($$props.shadows === void 0 && $$bindings.shadows && shadows !== void 0)
    $$bindings.shadows(shadows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toneMapping === void 0 && $$bindings.toneMapping && toneMapping !== void 0)
    $$bindings.toneMapping(toneMapping);
  if ($$props.useLegacyLights === void 0 && $$bindings.useLegacyLights && useLegacyLights !== void 0)
    $$bindings.useLegacyLights(useLegacyLights);
  if ($$props.autoRender === void 0 && $$bindings.autoRender && autoRender !== void 0)
    $$bindings.autoRender(autoRender);
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  $$result.css.add(css$4);
  {
    userSize.set(size);
  }
  {
    contexts.ctx.colorSpace.set(colorSpace);
  }
  {
    contexts.ctx.dpr.set(dpr);
  }
  {
    contexts.ctx.renderMode.set(renderMode);
  }
  {
    contexts.ctx.autoRender.set(autoRender);
  }
  {
    contexts.ctx.shadows.set(shadows);
  }
  {
    contexts.ctx.toneMapping.set(toneMapping);
  }
  $$unsubscribe_initialized();
  return `<canvas class="svelte-o3oskp"${add_attribute("this", canvas, 0)}>${$initialized ? `${validate_component(SceneGraphObject, "SceneGraphObject").$$render($$result, { object: contexts.ctx.scene }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``} </canvas>`;
});
function injectPlugin(nameOrNamedPlugin, maybePlugin) {
  const contextName = "threlte-plugin-context";
  if (Array.isArray(nameOrNamedPlugin)) {
    const [name, plugin] = nameOrNamedPlugin;
    setContext(contextName, {
      ...getContext(contextName),
      [name]: plugin
    });
  } else {
    const name = nameOrNamedPlugin;
    const plugin = maybePlugin;
    if (!plugin)
      return;
    setContext(contextName, {
      ...getContext(contextName),
      [name]: plugin
    });
  }
}
function useTask(keyOrFn, fnOrOptions, options) {
  if (!browser) {
    return {
      task: void 0,
      start: () => void 0,
      stop: () => void 0,
      started: readable(false)
    };
  }
  let key;
  let fn;
  let opts;
  if (DAG.isKey(keyOrFn)) {
    key = keyOrFn;
    fn = fnOrOptions;
    opts = options;
  } else {
    key = Symbol("useTask");
    fn = keyOrFn;
    opts = fnOrOptions;
  }
  const ctx = useThrelte();
  let stage = ctx.mainStage;
  if (opts) {
    if (opts.stage) {
      if (DAG.isValue(opts.stage)) {
        stage = opts.stage;
      } else {
        const maybeStage = ctx.scheduler.getStage(opts.stage);
        if (!maybeStage) {
          throw new Error(`No stage found with key ${opts.stage.toString()}`);
        }
        stage = maybeStage;
      }
    } else if (opts.after) {
      if (Array.isArray(opts.after)) {
        for (let index = 0; index < opts.after.length; index++) {
          const element = opts.after[index];
          if (DAG.isValue(element)) {
            stage = element.stage;
            break;
          }
        }
      } else if (DAG.isValue(opts.after)) {
        stage = opts.after.stage;
      }
    } else if (opts.before) {
      if (Array.isArray(opts.before)) {
        for (let index = 0; index < opts.before.length; index++) {
          const element = opts.before[index];
          if (DAG.isValue(element)) {
            stage = element.stage;
            break;
          }
        }
      } else if (DAG.isValue(opts.before)) {
        stage = opts.before.stage;
      }
    }
  }
  const { autoInvalidations } = getContext("threlte-internal-context");
  const started = writable(false);
  const task = stage.createTask(key, fn, opts);
  const start = () => {
    started.set(true);
    if (opts?.autoInvalidate ?? true) {
      autoInvalidations.add(fn);
    }
    task.start();
  };
  const stop = () => {
    started.set(true);
    if (opts?.autoInvalidate ?? true) {
      autoInvalidations.delete(fn);
    }
    task.stop();
  };
  if (opts?.autoStart ?? true) {
    start();
  } else {
    stop();
  }
  onDestroy(() => {
    if (!stage)
      return;
    stage.removeTask(key);
  });
  return {
    task,
    start,
    stop,
    started: {
      subscribe: started.subscribe
    }
  };
}
function useThrelteUserContext(namespace, value, options) {
  const userCtxStore = getContext("threlte-user-context");
  if (!userCtxStore) {
    throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");
  }
  if (!namespace) {
    return {
      subscribe: userCtxStore.subscribe
    };
  }
  if (namespace && !value) {
    return derived(userCtxStore, (ctx) => ctx[namespace]);
  }
  userCtxStore.update((ctx) => {
    if (namespace in ctx) {
      if (!options || options.existing === "skip")
        return ctx;
      if (options.existing === "merge") {
        Object.assign(ctx[namespace], value);
        return ctx;
      }
    }
    ctx[namespace] = value;
    return ctx;
  });
  return userCtxStore.current[namespace];
}
const forwardEventHandlers = () => {
  const component = get_current_component();
  const dispatchingComponent = writable(void 0);
  watch(dispatchingComponent, (dispatchingComponent2) => {
    if (!dispatchingComponent2)
      return;
    Object.entries(component.$$.callbacks).forEach((callback) => {
      const [key, value] = callback;
      if (key in dispatchingComponent2.$$.callbacks && Array.isArray(dispatchingComponent2.$$.callbacks[key])) {
        dispatchingComponent2.$$.callbacks[key].push(...value);
      } else {
        dispatchingComponent2.$$.callbacks[key] = value;
      }
    });
  });
  return dispatchingComponent;
};
const useHasEventListeners = () => {
  const component = get_current_component();
  const hasEventListeners = (type) => {
    const callbacks = component.$$.callbacks;
    return type in callbacks && callbacks[type].length > 0;
  };
  return {
    hasEventListeners
  };
};
const HTML = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "transform",
    "calculatePosition",
    "eps",
    "occlude",
    "zIndexRange",
    "sprite",
    "pointerEvents",
    "center",
    "fullscreen",
    "distanceFactor",
    "as",
    "portal",
    "ref",
    "visible"
  ]);
  let $size, $$unsubscribe_size;
  let $camera, $$unsubscribe_camera;
  let $heightHalf, $$unsubscribe_heightHalf;
  let $widthHalf, $$unsubscribe_widthHalf;
  let $component, $$unsubscribe_component;
  let $transformElStyles, $$unsubscribe_transformElStyles;
  let $transformOuterRefStyles, $$unsubscribe_transformOuterRefStyles;
  let $transformInnerRefStyles, $$unsubscribe_transformInnerRefStyles;
  let $noTransformElStyles, $$unsubscribe_noTransformElStyles;
  let $noTransformDivStyles, $$unsubscribe_noTransformDivStyles;
  let { transform = false } = $$props;
  let { calculatePosition = defaultCalculatePosition } = $$props;
  let { eps = 1e-3 } = $$props;
  let { occlude = false } = $$props;
  let { zIndexRange = [16777271, 0] } = $$props;
  let { sprite = false } = $$props;
  let { pointerEvents = "auto" } = $$props;
  let { center = false } = $$props;
  let { fullscreen = false } = $$props;
  let { distanceFactor = void 0 } = $$props;
  let { as = "div" } = $$props;
  let { portal = void 0 } = $$props;
  const dispatch = createRawEventDispatcher();
  let { ref = new Group() } = $$props;
  const { renderer, camera, scene, size } = useThrelte();
  $$unsubscribe_camera = subscribe(camera, (value) => $camera = value);
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  const isViableCamera = (c) => {
    return c.isPerspectiveCamera || c.isOrthographicCamera;
  };
  const getCamera = () => {
    if (!isViableCamera($camera)) {
      throw new Error("Only PerspectiveCamera or OrthographicCamera supported for component <HTML>");
    }
    return $camera;
  };
  const raycaster = new Raycaster();
  let oldPosition = [0, 0];
  let oldZoom = 0;
  let { visible = true } = $$props;
  let el = document.createElement(as);
  let transformOuterRef;
  let transformInnerRef;
  const { hasEventListeners } = useHasEventListeners();
  let raytraceTarget = typeof occlude === "boolean" && occlude === true ? [scene] : Array.isArray(occlude) ? occlude : void 0;
  const widthHalf = derived(size, (size2) => size2.width / 2);
  $$unsubscribe_widthHalf = subscribe(widthHalf, (value) => $widthHalf = value);
  const heightHalf = derived(size, (size2) => size2.height / 2);
  $$unsubscribe_heightHalf = subscribe(heightHalf, (value) => $heightHalf = value);
  let styles = {
    common: { el: writable({}) },
    transform: {
      el: writable({
        position: "absolute",
        top: "0",
        left: "0",
        pointerEvents: "none",
        overflow: "hidden",
        display: "block",
        width: `${$size.width}px`,
        height: `${$size.height}px`
      }),
      outerRef: writable({
        position: "absolute",
        top: "0",
        left: "0",
        width: `${$size.width}px`,
        height: `${$size.height}px`,
        transformStyle: "preserve-3d",
        pointerEvents: "none"
      }),
      innerRef: writable({ position: "absolute", pointerEvents })
    },
    noTransform: {
      el: writable({}),
      div: writable({
        position: "absolute",
        transform: center ? "translate3d(-50%,-50%,0)" : "none",
        top: fullscreen ? `${-$heightHalf}px` : void 0,
        left: fullscreen ? `${-$widthHalf}px` : void 0,
        width: fullscreen ? `${$size.width}px` : void 0,
        height: fullscreen ? `${$size.height}px` : void 0
      })
    }
  };
  const transformElStyles = derived([styles.transform.el, styles.common.el], ([vA, vB]) => {
    return { ...vA, ...vB };
  });
  $$unsubscribe_transformElStyles = subscribe(transformElStyles, (value) => $transformElStyles = value);
  const transformOuterRefStyles = derived(styles.transform.outerRef, (v) => v);
  $$unsubscribe_transformOuterRefStyles = subscribe(transformOuterRefStyles, (value) => $transformOuterRefStyles = value);
  const transformInnerRefStyles = derived(styles.transform.innerRef, (v) => v);
  $$unsubscribe_transformInnerRefStyles = subscribe(transformInnerRefStyles, (value) => $transformInnerRefStyles = value);
  const noTransformElStyles = derived(styles.noTransform.el, (v) => v);
  $$unsubscribe_noTransformElStyles = subscribe(noTransformElStyles, (value) => $noTransformElStyles = value);
  const noTransformDivStyles = derived(styles.noTransform.div, (v) => v);
  $$unsubscribe_noTransformDivStyles = subscribe(noTransformDivStyles, (value) => $noTransformDivStyles = value);
  const getAncestorVisibility = () => {
    let ancestorsAreVisible = true;
    let parent = ref.parent;
    traverse:
      while (parent) {
        if ("visible" in parent && !parent.visible) {
          ancestorsAreVisible = false;
          break traverse;
        }
        parent = parent.parent;
      }
    return ancestorsAreVisible;
  };
  let showEl = getAncestorVisibility();
  useTask(async () => {
    showEl = getAncestorVisibility();
    const camera2 = getCamera();
    camera2.updateMatrixWorld();
    ref.updateWorldMatrix(true, false);
    const vec = transform ? oldPosition : calculatePosition(ref, camera2, $size);
    if (transform || Math.abs(oldZoom - camera2.zoom) > eps || Math.abs(oldPosition[0] - vec[0]) > eps || Math.abs(oldPosition[1] - vec[1]) > eps) {
      const isBehindCamera = isObjectBehindCamera(ref, camera2);
      const previouslyVisible = visible;
      if (raytraceTarget) {
        const isvisible = isObjectVisible(ref, camera2, raycaster, raytraceTarget);
        visible = isvisible && !isBehindCamera;
      } else {
        visible = !isBehindCamera;
      }
      if (previouslyVisible !== visible) {
        if (hasEventListeners("visibilitychange"))
          dispatch("visibilitychange", visible);
        else {
          updateStyles(styles.common.el, { display: visible ? "block" : "none" });
        }
      }
      updateStyles(styles.common.el, {
        zIndex: `${objectZIndex(ref, camera2, zIndexRange)}`
      });
      if (transform) {
        const fov = camera2.projectionMatrix.elements[5] * $heightHalf;
        const { isOrthographicCamera, top, left, bottom, right } = camera2;
        let matrix = ref.matrixWorld;
        if (sprite) {
          matrix = camera2.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(ref.scale);
          matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
          matrix.elements[15] = 1;
        }
        updateStyles(styles.transform.el, {
          perspective: isOrthographicCamera ? "" : `${fov}px`
        });
      } else {
        const scale2 = distanceFactor === void 0 ? 1 : objectScale(ref, camera2) * distanceFactor;
        updateStyles(styles.noTransform.el, {
          transform: `translate3d(${vec[0]}px, ${vec[1]}px, 0) scale(${scale2})`
        });
      }
      oldPosition = vec;
      oldZoom = camera2.zoom;
    }
  });
  const component = forwardEventHandlers();
  $$unsubscribe_component = subscribe(component, (value) => $component = value);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.calculatePosition === void 0 && $$bindings.calculatePosition && calculatePosition !== void 0)
    $$bindings.calculatePosition(calculatePosition);
  if ($$props.eps === void 0 && $$bindings.eps && eps !== void 0)
    $$bindings.eps(eps);
  if ($$props.occlude === void 0 && $$bindings.occlude && occlude !== void 0)
    $$bindings.occlude(occlude);
  if ($$props.zIndexRange === void 0 && $$bindings.zIndexRange && zIndexRange !== void 0)
    $$bindings.zIndexRange(zIndexRange);
  if ($$props.sprite === void 0 && $$bindings.sprite && sprite !== void 0)
    $$bindings.sprite(sprite);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.distanceFactor === void 0 && $$bindings.distanceFactor && distanceFactor !== void 0)
    $$bindings.distanceFactor(distanceFactor);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    raytraceTarget = typeof occlude === "boolean" && occlude === true ? [scene] : Array.isArray(occlude) ? occlude : void 0;
    {
      updateStyles(styles.transform.el, {
        width: `${$size.width}px`,
        height: `${$size.height}px`
      });
    }
    {
      updateStyles(styles.transform.outerRef, {
        width: `${$size.width}px`,
        height: `${$size.height}px`
      });
    }
    {
      updateStyles(styles.transform.innerRef, { pointerEvents });
    }
    {
      updateStyles(styles.noTransform.div, { pointerEvents });
    }
    {
      updateStyles(styles.noTransform.div, {
        transform: center ? "translate3d(-50%, -50%, 0)" : "none"
      });
    }
    {
      updateStyles(styles.noTransform.div, {
        top: fullscreen ? `${-$heightHalf}px` : void 0,
        left: fullscreen ? `${-$widthHalf}px` : void 0,
        width: fullscreen ? `${$size.width}px` : void 0,
        height: fullscreen ? `${$size.height}px` : void 0
      });
    }
    $$rendered = `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: ref }, $$restProps, { this: $component }),
      {
        this: ($$value) => {
          $component = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ ref: ref2 }) => {
          return `${slots.threlte ? slots.threlte({ ref: ref2 }) : ``}`;
        }
      }
    )} ${transform ? `${((tag) => {
      return tag ? `<${as}${add_attribute("style", compileStyles($transformElStyles), 0)}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `<div${add_attribute("style", compileStyles($transformOuterRefStyles), 0)}${add_attribute("this", transformOuterRef, 0)}><div${add_attribute("style", compileStyles($transformInnerRefStyles), 0)}${add_attribute("this", transformInnerRef, 0)}>${showEl ? `${slots.default ? slots.default({}) : ``}` : ``}</div></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(as)}` : `${((tag) => {
      return tag ? `<${as}${add_attribute("style", compileStyles($noTransformElStyles), 0)}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `<div${add_attribute("style", compileStyles($noTransformDivStyles), 0)}>${showEl ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(as)}`}`;
  } while (!$$settled);
  $$unsubscribe_size();
  $$unsubscribe_camera();
  $$unsubscribe_heightHalf();
  $$unsubscribe_widthHalf();
  $$unsubscribe_component();
  $$unsubscribe_transformElStyles();
  $$unsubscribe_transformOuterRefStyles();
  $$unsubscribe_transformInnerRefStyles();
  $$unsubscribe_noTransformElStyles();
  $$unsubscribe_noTransformDivStyles();
  return $$rendered;
});
const useControlsContext = () => {
  return useThrelteUserContext("threlte-controls", {
    orbitControls: writable(void 0),
    trackballControls: writable(void 0)
  });
};
const _changeEvent = { type: "change" };
const _startEvent = { type: "start" };
const _endEvent = { type: "end" };
const _ray = new Ray();
const _plane = new Plane();
const TILT_LIMIT = Math.cos(70 * MathUtils.DEG2RAD);
let OrbitControls$1 = class OrbitControls extends EventDispatcher {
  constructor(object, domElement) {
    super();
    this.object = object;
    this.domElement = domElement;
    this.domElement.style.touchAction = "none";
    this.enabled = true;
    this.target = new Vector3();
    this.cursor = new Vector3();
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.minZoom = 0;
    this.maxZoom = Infinity;
    this.minTargetRadius = 0;
    this.maxTargetRadius = Infinity;
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -Infinity;
    this.maxAzimuthAngle = Infinity;
    this.enableDamping = false;
    this.dampingFactor = 0.05;
    this.enableZoom = true;
    this.zoomSpeed = 1;
    this.enableRotate = true;
    this.rotateSpeed = 1;
    this.enablePan = true;
    this.panSpeed = 1;
    this.screenSpacePanning = true;
    this.keyPanSpeed = 7;
    this.zoomToCursor = false;
    this.autoRotate = false;
    this.autoRotateSpeed = 2;
    this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" };
    this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };
    this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this._domElementKeyEvents = null;
    this.getPolarAngle = function() {
      return spherical.phi;
    };
    this.getAzimuthalAngle = function() {
      return spherical.theta;
    };
    this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    };
    this.listenToKeyEvents = function(domElement2) {
      domElement2.addEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = domElement2;
    };
    this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = null;
    };
    this.saveState = function() {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };
    this.reset = function() {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(_changeEvent);
      scope.update();
      state = STATE.NONE;
    };
    this.update = function() {
      const offset = new Vector3();
      const quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0));
      const quatInverse = quat.clone().invert();
      const lastPosition = new Vector3();
      const lastQuaternion = new Quaternion();
      const lastTargetPosition = new Vector3();
      const twoPI = 2 * Math.PI;
      return function update2(deltaTime = null) {
        const position = scope.object.position;
        offset.copy(position).sub(scope.target);
        offset.applyQuaternion(quat);
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle(deltaTime));
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }
        let min = scope.minAzimuthAngle;
        let max = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI)
            min += twoPI;
          else if (min > Math.PI)
            min -= twoPI;
          if (max < -Math.PI)
            max += twoPI;
          else if (max > Math.PI)
            max -= twoPI;
          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        }
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        scope.target.sub(scope.cursor);
        scope.target.clampLength(scope.minTargetRadius, scope.maxTargetRadius);
        scope.target.add(scope.cursor);
        if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
          spherical.radius = clampDistance(spherical.radius);
        } else {
          spherical.radius = clampDistance(spherical.radius * scale2);
        }
        offset.setFromSpherical(spherical);
        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        let zoomChanged = false;
        if (scope.zoomToCursor && performCursorZoom) {
          let newRadius = null;
          if (scope.object.isPerspectiveCamera) {
            const prevRadius = offset.length();
            newRadius = clampDistance(prevRadius * scale2);
            const radiusDelta = prevRadius - newRadius;
            scope.object.position.addScaledVector(dollyDirection, radiusDelta);
            scope.object.updateMatrixWorld();
          } else if (scope.object.isOrthographicCamera) {
            const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
            mouseBefore.unproject(scope.object);
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale2));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
            const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
            mouseAfter.unproject(scope.object);
            scope.object.position.sub(mouseAfter).add(mouseBefore);
            scope.object.updateMatrixWorld();
            newRadius = offset.length();
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
            scope.zoomToCursor = false;
          }
          if (newRadius !== null) {
            if (this.screenSpacePanning) {
              scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
            } else {
              _ray.origin.copy(scope.object.position);
              _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
              if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                object.lookAt(scope.target);
              } else {
                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                _ray.intersectPlane(_plane, scope.target);
              }
            }
          }
        } else if (scope.object.isOrthographicCamera) {
          scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale2));
          scope.object.updateProjectionMatrix();
          zoomChanged = true;
        }
        scale2 = 1;
        performCursorZoom = false;
        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
          scope.dispatchEvent(_changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          lastTargetPosition.copy(scope.target);
          return true;
        }
        return false;
      };
    }();
    this.dispose = function() {
      scope.domElement.removeEventListener("contextmenu", onContextMenu);
      scope.domElement.removeEventListener("pointerdown", onPointerDown);
      scope.domElement.removeEventListener("pointercancel", onPointerUp);
      scope.domElement.removeEventListener("wheel", onMouseWheel);
      scope.domElement.removeEventListener("pointermove", onPointerMove);
      scope.domElement.removeEventListener("pointerup", onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
        scope._domElementKeyEvents = null;
      }
    };
    const scope = this;
    const STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let state = STATE.NONE;
    const EPS = 1e-6;
    const spherical = new Spherical();
    const sphericalDelta = new Spherical();
    let scale2 = 1;
    const panOffset = new Vector3();
    const rotateStart = new Vector2();
    const rotateEnd = new Vector2();
    const rotateDelta = new Vector2();
    const panStart = new Vector2();
    const panEnd = new Vector2();
    const panDelta = new Vector2();
    const dollyStart = new Vector2();
    const dollyEnd = new Vector2();
    const dollyDelta = new Vector2();
    const dollyDirection = new Vector3();
    const mouse = new Vector2();
    let performCursorZoom = false;
    const pointers = [];
    const pointerPositions = {};
    let controlActive = false;
    function getAutoRotationAngle(deltaTime) {
      if (deltaTime !== null) {
        return 2 * Math.PI / 60 * scope.autoRotateSpeed * deltaTime;
      } else {
        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
      }
    }
    function getZoomScale(delta) {
      const normalizedDelta = Math.abs(delta * 0.01);
      return Math.pow(0.95, scope.zoomSpeed * normalizedDelta);
    }
    function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    }
    function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    }
    const panLeft = function() {
      const v = new Vector3();
      return function panLeft2(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();
    const panUp = function() {
      const v = new Vector3();
      return function panUp2(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }();
    const pan = function() {
      const offset = new Vector3();
      return function pan2(deltaX, deltaY) {
        const element = scope.domElement;
        if (scope.object.isPerspectiveCamera) {
          const position = scope.object.position;
          offset.copy(position).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (scope.object.isOrthographicCamera) {
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
          scope.enablePan = false;
        }
      };
    }();
    function dollyOut(dollyScale) {
      if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) {
        scale2 /= dollyScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function dollyIn(dollyScale) {
      if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) {
        scale2 *= dollyScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function updateZoomParameters(x, y) {
      if (!scope.zoomToCursor) {
        return;
      }
      performCursorZoom = true;
      const rect = scope.domElement.getBoundingClientRect();
      const dx = x - rect.left;
      const dy = y - rect.top;
      const w = rect.width;
      const h = rect.height;
      mouse.x = dx / w * 2 - 1;
      mouse.y = -(dy / h) * 2 + 1;
      dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
    }
    function clampDistance(dist) {
      return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      updateZoomParameters(event.clientX, event.clientX);
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale(dollyDelta.y));
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale(dollyDelta.y));
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      updateZoomParameters(event.clientX, event.clientY);
      if (event.deltaY < 0) {
        dollyIn(getZoomScale(event.deltaY));
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale(event.deltaY));
      }
      scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(0, scope.keyPanSpeed);
          }
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(0, -scope.keyPanSpeed);
          }
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(scope.keyPanSpeed, 0);
          }
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
          } else {
            pan(-scope.keyPanSpeed, 0);
          }
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate(event) {
      if (pointers.length === 1) {
        rotateStart.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan(event) {
      if (pointers.length === 1) {
        panStart.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly(event) {
      const position = getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan(event) {
      if (scope.enableZoom)
        handleTouchStartDolly(event);
      if (scope.enablePan)
        handleTouchStartPan(event);
    }
    function handleTouchStartDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchStartDolly(event);
      if (scope.enableRotate)
        handleTouchStartRotate(event);
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length === 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      const position = getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
      const centerX = (event.pageX + position.x) * 0.5;
      const centerY = (event.pageY + position.y) * 0.5;
      updateZoomParameters(centerX, centerY);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enablePan)
        handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enableRotate)
        handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      if (scope.enabled === false)
        return;
      if (pointers.length === 0) {
        scope.domElement.setPointerCapture(event.pointerId);
        scope.domElement.addEventListener("pointermove", onPointerMove);
        scope.domElement.addEventListener("pointerup", onPointerUp);
      }
      addPointer(event);
      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      removePointer(event);
      if (pointers.length === 0) {
        scope.domElement.releasePointerCapture(event.pointerId);
        scope.domElement.removeEventListener("pointermove", onPointerMove);
        scope.domElement.removeEventListener("pointerup", onPointerUp);
      }
      scope.dispatchEvent(_endEvent);
      state = STATE.NONE;
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }
    function onMouseMove(event) {
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE)
        return;
      event.preventDefault();
      scope.dispatchEvent(_startEvent);
      handleMouseWheel(customWheelEvent(event));
      scope.dispatchEvent(_endEvent);
    }
    function customWheelEvent(event) {
      const mode = event.deltaMode;
      const newEvent = {
        clientX: event.clientX,
        clientY: event.clientY,
        deltaY: event.deltaY
      };
      switch (mode) {
        case 1:
          newEvent.deltaY *= 16;
          break;
        case 2:
          newEvent.deltaY *= 100;
          break;
      }
      if (event.ctrlKey && !controlActive) {
        newEvent.deltaY *= 10;
      }
      return newEvent;
    }
    function interceptControlDown(event) {
      if (event.key === "Control") {
        controlActive = true;
        document.addEventListener("keyup", interceptControlUp, { passive: true, capture: true });
      }
    }
    function interceptControlUp(event) {
      if (event.key === "Control") {
        controlActive = false;
        document.removeEventListener("keyup", interceptControlUp, { passive: true, capture: true });
      }
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false)
        return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case TOUCH.ROTATE:
              if (scope.enableRotate === false)
                return;
              handleTouchStartRotate(event);
              state = STATE.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (scope.enablePan === false)
                return;
              handleTouchStartPan(event);
              state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false)
                return;
              handleTouchStartDollyPan(event);
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false)
                return;
              handleTouchStartDollyRotate(event);
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false)
            return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false)
            return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false)
            return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false)
            return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false)
        return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event.pointerId);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i = 0; i < pointers.length; i++) {
        if (pointers[i] == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      let position = pointerPositions[event.pointerId];
      if (position === void 0) {
        position = new Vector2();
        pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      const pointerId = event.pointerId === pointers[0] ? pointers[1] : pointers[0];
      return pointerPositions[pointerId];
    }
    scope.domElement.addEventListener("contextmenu", onContextMenu);
    scope.domElement.addEventListener("pointerdown", onPointerDown);
    scope.domElement.addEventListener("pointercancel", onPointerUp);
    scope.domElement.addEventListener("wheel", onMouseWheel, { passive: false });
    document.addEventListener("keydown", interceptControlDown, { passive: true, capture: true });
    this.update();
  }
};
const OrbitControls2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ref"]);
  let $parent, $$unsubscribe_parent;
  let $component, $$unsubscribe_component;
  const parent = useParent();
  $$unsubscribe_parent = subscribe(parent, (value) => $parent = value);
  const isCamera = (p) => {
    return p.isCamera;
  };
  const { renderer, invalidate } = useThrelte();
  if (!isCamera($parent)) {
    throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");
  }
  const ref = new OrbitControls$1($parent, renderer.domElement);
  const { start, stop } = useTask(ref.update, { autoStart: false, autoInvalidate: false });
  const component = forwardEventHandlers();
  $$unsubscribe_component = subscribe(component, (value) => $component = value);
  const { orbitControls } = useControlsContext();
  orbitControls.set(ref);
  onDestroy(() => orbitControls.set(void 0));
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($$restProps.autoRotate || $$restProps.enableDamping)
          start();
        else
          stop();
      }
    }
    $$rendered = `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: ref }, $$restProps, { this: $component }),
      {
        this: ($$value) => {
          $component = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ ref: ref2 }) => {
          return `${slots.default ? slots.default({ ref: ref2 }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_parent();
  $$unsubscribe_component();
  return $$rendered;
});
const getContextId = (instancedMeshId) => `threlte-instanced-mesh-${instancedMeshId}`;
const createApi = (instancedMesh, instancedMeshId) => {
  const api = {
    instancedMesh: currentWritable(instancedMesh),
    addInstance(instance) {
      api.instances.update((arr) => {
        arr.push(instance);
        return arr;
      });
    },
    removeInstance(instance) {
      api.instances.update((arr) => {
        const index = arr.indexOf(instance);
        if (index > -1)
          arr.splice(index, 1);
        return arr;
      });
    },
    instances: currentWritable([])
  };
  setContext(getContextId(instancedMeshId), api);
  return api;
};
const useApi = (instancedMeshId) => {
  const context = getContext(getContextId(instancedMeshId));
  if (!context)
    throw new Error(`No <InstancedMesh> component found for id ${instancedMeshId}`);
  return context;
};
const Api = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $instances, $$unsubscribe_instances;
  let { instancedMesh } = $$props;
  let { id } = $$props;
  let { limit } = $$props;
  let { range } = $$props;
  let { update: update2 } = $$props;
  const { instances } = createApi(instancedMesh, id);
  $$unsubscribe_instances = subscribe(instances, (value) => $instances = value);
  const tempMatrix = new Matrix4();
  const matrices = new Float32Array(limit * 16);
  for (let i = 0; i < limit; i++)
    tempMatrix.identity().toArray(matrices, i * 16);
  const colors = new Float32Array(limit * 3).fill(1);
  const parentMatrix = new Matrix4();
  const instanceMatrix = new Matrix4();
  const translation = new Vector3();
  const rotation = new Quaternion();
  const scale2 = new Vector3();
  let initialUpdateDone = false;
  useTask(() => {
    instancedMesh.updateMatrix();
    if (update2 || !initialUpdateDone) {
      instancedMesh.updateMatrixWorld();
      parentMatrix.copy(instancedMesh.matrixWorld).invert();
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }
      instancedMesh.instanceMatrix.needsUpdate = true;
      for (let i = 0; i < instances.current.length; i++) {
        const instance = instances.current[i];
        instance.matrixWorld.decompose(translation, rotation, scale2);
        instanceMatrix.compose(translation, rotation, scale2).premultiply(parentMatrix);
        instanceMatrix.toArray(matrices, i * 16);
        instance.color.toArray(colors, i * 3);
      }
      initialUpdateDone = true;
    }
  });
  if ($$props.instancedMesh === void 0 && $$bindings.instancedMesh && instancedMesh !== void 0)
    $$bindings.instancedMesh(instancedMesh);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.update === void 0 && $$bindings.update && update2 !== void 0)
    $$bindings.update(update2);
  {
    {
      const updateRange = Math.min(limit, range !== void 0 ? range : limit, $instances.length);
      instancedMesh.count = updateRange;
      if (revision >= 159) {
        instancedMesh.instanceMatrix.clearUpdateRanges();
        instancedMesh.instanceMatrix.addUpdateRange(0, updateRange * 16);
      } else {
        instancedMesh.instanceMatrix.updateRange.count = updateRange * 16;
      }
      if (instancedMesh.instanceColor) {
        if (revision >= 159) {
          instancedMesh.instanceColor.clearUpdateRanges();
          instancedMesh.instanceColor.addUpdateRange(0, updateRange * 3);
        } else {
          instancedMesh.instanceColor.updateRange.count = updateRange * 3;
        }
      }
    }
  }
  $$unsubscribe_instances();
  return `${validate_component(T.InstancedBufferAttribute, "T.InstancedBufferAttribute").$$render(
    $$result,
    {
      attach: "instanceMatrix",
      count: matrices.length / 16,
      array: matrices,
      itemSize: 16,
      usage: DynamicDrawUsage
    },
    {},
    {}
  )} ${validate_component(T.InstancedBufferAttribute, "T.InstancedBufferAttribute").$$render(
    $$result,
    {
      attach: "instanceColor",
      count: colors.length / 3,
      array: colors,
      itemSize: 3,
      usage: DynamicDrawUsage
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``}`;
});
const InstancedMesh_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "limit", "range", "update", "ref"]);
  let $dispatchingComponent, $$unsubscribe_dispatchingComponent;
  let { id = "default" } = $$props;
  let { limit = 1e3 } = $$props;
  let { range = 1e3 } = $$props;
  let { update: update2 = true } = $$props;
  const ref = new InstancedMesh(null, null, 0);
  const dispatchingComponent = forwardEventHandlers();
  $$unsubscribe_dispatchingComponent = subscribe(dispatchingComponent, (value) => $dispatchingComponent = value);
  const args = [null, null, 0];
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.update === void 0 && $$bindings.update && update2 !== void 0)
    $$bindings.update(update2);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: ref }, { raycast: () => null }, { matrixAutoUpdate: false }, { args }, $$restProps, { bind: $dispatchingComponent }),
      {
        bind: ($$value) => {
          $dispatchingComponent = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Api, "Api").$$render(
            $$result,
            {
              instancedMesh: ref,
              id,
              limit,
              range,
              update: update2
            },
            {},
            {
              default: () => {
                return `${slots.default ? slots.default({ ref }) : ``}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_dispatchingComponent();
  return $$rendered;
});
const Instance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id", "ref"]);
  let $dispatchingComponent, $$unsubscribe_dispatchingComponent;
  let { id = "default" } = $$props;
  const { addInstance, removeInstance, instancedMesh, instances } = useApi(id);
  const ref = new PositionMesh(instancedMesh, instances);
  addInstance(ref);
  onDestroy(() => {
    removeInstance(ref);
  });
  const dispatchingComponent = forwardEventHandlers();
  $$unsubscribe_dispatchingComponent = subscribe(dispatchingComponent, (value) => $dispatchingComponent = value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: ref }, $$restProps, { this: $dispatchingComponent }),
      {
        this: ($$value) => {
          $dispatchingComponent = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ref }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_dispatchingComponent();
  return $$rendered;
});
const getDefaultComputeFunction = (state) => {
  const camera = memoize(useThrelte().camera);
  let width = 0;
  let height = 0;
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
    }
  });
  watch(state.target, (target) => {
    if (target)
      resizeObserver.observe(target);
    return () => {
      if (target)
        resizeObserver.unobserve(target);
    };
  });
  return (event, state2) => {
    state2.pointer.update((pointer) => {
      pointer.set(event.offsetX / width * 2 - 1, -(event.offsetY / height) * 2 + 1);
      return pointer;
    });
    state2.raycaster.setFromCamera(state2.pointer.current, camera.current);
  };
};
const useInteractivity = () => {
  const state = getContext("threlte-interactivity-context");
  const eventDispatcher = createRawEventDispatcher();
  const addInteractiveObject = (object) => {
    if (!state) {
      console.warn("No interactivity context found. Did you forget to implement interactivity()?");
      return;
    }
    object.userData._threlte_interactivity_dispatcher = eventDispatcher;
    if (state.interactiveObjects.some((obj) => obj.uuid === object.uuid))
      return;
    state.interactiveObjects.push(object);
  };
  const removeInteractiveObject = (object) => {
    if (!state) {
      console.warn("No interactivity context found. Did you forget to implement interactivity()?");
      return;
    }
    state.interactiveObjects = state.interactiveObjects.filter((obj) => obj.uuid !== object.uuid);
    delete object.userData._threlte_interactivity_dispatcher;
  };
  return {
    ...state,
    addInteractiveObject,
    removeInteractiveObject
  };
};
const useComponentHasEventHandlers = (eventNames) => {
  get_current_component();
  const hasEventHandlers = writable(false);
  return {
    hasEventHandlers
  };
};
const injectInteractivityPlugin = () => {
  injectPlugin("interactivity", ({ ref }) => {
    if (!ref.isObject3D)
      return;
    const { addInteractiveObject, removeInteractiveObject } = useInteractivity();
    const refStore = writable(ref);
    const { hasEventHandlers } = useComponentHasEventHandlers();
    watch([hasEventHandlers, refStore], ([hasEventHandlers2, ref2]) => {
      if (!hasEventHandlers2)
        return;
      addInteractiveObject(ref2);
      return () => removeInteractiveObject(ref2);
    });
    return {
      onRefChange(ref2) {
        refStore.set(ref2);
      }
    };
  });
};
const getRawEventDispatcher = (object) => {
  return object.userData._threlte_interactivity_dispatcher;
};
function getIntersectionId(event) {
  return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
const DOM_EVENTS = [
  ["click", false],
  ["contextmenu", false],
  ["dblclick", false],
  ["wheel", false],
  ["pointerdown", true],
  ["pointerup", true],
  ["pointerleave", true],
  ["pointerenter", true],
  ["pointermove", true],
  ["pointercancel", true]
];
const setupInteractivity = (state) => {
  function calculateDistance(event) {
    const dx = event.offsetX - state.initialClick[0];
    const dy = event.offsetY - state.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  function cancelPointer(intersections) {
    for (const hoveredObj of state.hovered.values()) {
      if (!intersections.length || !intersections.find((hit) => {
        return hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId;
      })) {
        const eventObject = hoveredObj.eventObject;
        state.hovered.delete(getIntersectionId(hoveredObj));
        const eventDispatcher = getRawEventDispatcher(eventObject);
        if (eventDispatcher) {
          const data = { ...hoveredObj, intersections };
          eventDispatcher("pointerout", data);
          eventDispatcher("pointerleave", data);
        }
      }
    }
  }
  const enabled = memoize(state.enabled);
  const getHits = () => {
    const duplicates = /* @__PURE__ */ new Set();
    const intersections = [];
    let hits = state.interactiveObjects.flatMap((obj) => enabled.current ? state.raycaster.intersectObject(obj, true) : []).sort((a, b) => a.distance - b.distance).filter((item) => {
      const id = getIntersectionId(item);
      if (duplicates.has(id))
        return false;
      duplicates.add(id);
      return true;
    });
    if (state.filter)
      hits = state.filter(hits, state);
    for (const hit of hits) {
      let eventObject = hit.object;
      while (eventObject) {
        if (getRawEventDispatcher(eventObject))
          intersections.push({ ...hit, eventObject });
        eventObject = eventObject.parent;
      }
    }
    return intersections;
  };
  function pointerMissed(event, objects) {
    for (const object of objects) {
      const eventDispatcher = getRawEventDispatcher(object);
      if (!eventDispatcher)
        continue;
      eventDispatcher("pointermissed", event);
    }
  }
  const getEventHandler = (name) => {
    if (name === "pointerleave" || name === "pointercancel") {
      return () => {
        state.pointerOverTarget.set(false);
        cancelPointer([]);
      };
    }
    if (name === "pointerenter") {
      return () => {
        state.pointerOverTarget.set(true);
      };
    }
    return (event) => {
      const isPointerMove = name === "pointermove";
      const isClickEvent = name === "click" || name === "contextmenu" || name === "dblclick";
      state.compute(event, state);
      const hits = getHits();
      const delta = isClickEvent ? calculateDistance(event) : 0;
      if (name === "pointerdown") {
        state.initialClick = [event.offsetX, event.offsetY];
        state.initialHits = hits.map((hit) => hit.eventObject);
      }
      if (isClickEvent && !hits.length) {
        if (delta <= 2) {
          pointerMissed(event, state.interactiveObjects);
        }
      }
      if (isPointerMove)
        cancelPointer(hits);
      let stopped = false;
      dispatchEvents:
        for (const hit of hits) {
          const intersectionEvent = {
            stopped,
            ...hit,
            intersections: hits,
            stopPropagation() {
              stopped = true;
              intersectionEvent.stopped = true;
              if (state.hovered.size && Array.from(state.hovered.values()).find((i) => i.eventObject === hit.eventObject)) {
                const higher = hits.slice(0, hits.indexOf(hit));
                cancelPointer([...higher, hit]);
              }
            },
            camera: state.raycaster.camera,
            delta,
            nativeEvent: event,
            pointer: state.pointer.current,
            ray: state.raycaster.ray
          };
          const eventDispatcher = getRawEventDispatcher(hit.eventObject);
          if (!eventDispatcher)
            return;
          if (isPointerMove) {
            if (eventDispatcher.hasEventListener("pointerover") || eventDispatcher.hasEventListener("pointerenter") || eventDispatcher.hasEventListener("pointerout") || eventDispatcher.hasEventListener("pointerleave")) {
              const id = getIntersectionId(intersectionEvent);
              const hoveredItem = state.hovered.get(id);
              if (!hoveredItem) {
                state.hovered.set(id, intersectionEvent);
                eventDispatcher("pointerover", intersectionEvent);
                eventDispatcher("pointerenter", intersectionEvent);
              } else if (hoveredItem.stopped) {
                intersectionEvent.stopPropagation();
              }
            }
            eventDispatcher("pointermove", intersectionEvent);
          } else {
            const hasEventListener = eventDispatcher.hasEventListener(name);
            if (hasEventListener) {
              if (!isClickEvent || state.initialHits.includes(hit.eventObject)) {
                pointerMissed(event, state.interactiveObjects.filter((object) => !state.initialHits.includes(object)));
                eventDispatcher(name, intersectionEvent);
              }
            } else {
              if (isClickEvent && state.initialHits.includes(hit.eventObject)) {
                pointerMissed(event, state.interactiveObjects.filter((object) => !state.initialHits.includes(object)));
              }
            }
          }
          if (stopped)
            break dispatchEvents;
        }
    };
  };
  const disconnect = (target) => {
    DOM_EVENTS.forEach(([eventName]) => {
      target.removeEventListener(eventName, getEventHandler(eventName));
    });
  };
  const connect = (target) => {
    DOM_EVENTS.forEach(([eventName, passive]) => {
      target.addEventListener(eventName, getEventHandler(eventName), { passive });
    });
  };
  watch(state.target, (target) => {
    if (target)
      connect(target);
    return () => {
      if (target)
        disconnect(target);
    };
  });
};
const interactivity = (options) => {
  const state = {
    enabled: currentWritable(options?.enabled ?? true),
    pointer: currentWritable(new Vector2()),
    pointerOverTarget: currentWritable(false),
    lastEvent: void 0,
    raycaster: new Raycaster(),
    initialClick: [0, 0],
    initialHits: [],
    hovered: /* @__PURE__ */ new Map(),
    interactiveObjects: [],
    target: currentWritable(options?.target ?? useThrelte().renderer.domElement),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    compute: () => {
    },
    filter: options?.filter
  };
  state.compute = options?.compute ?? getDefaultComputeFunction(state);
  setContext("threlte-interactivity-context", state);
  injectInteractivityPlugin();
  setupInteractivity(state);
  return state;
};
const Bond = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { from = [0, 0, 0] } = $$props;
  let { to } = $$props;
  let { offset = 0 } = $$props;
  let { radius = 0.1 } = $$props;
  let { color = `white` } = $$props;
  const from_vec = new Vector3(...from);
  const to_vec = new Vector3(...to);
  const { position, rotation, height } = calc_bond(from_vec, to_vec, offset, radius);
  function calc_bond(from_vec2, to_vec2, offset2, radius2) {
    const delta_vec = to_vec2.clone().sub(from_vec2);
    const height2 = delta_vec.length();
    let position2;
    if (offset2 === 0) {
      position2 = from_vec2.clone().add(delta_vec.multiplyScalar(0.5)).toArray();
    } else {
      const offset_vec = new Vector3().crossVectors(delta_vec, new Vector3(1, 0, 0)).normalize();
      position2 = from_vec2.clone().add(delta_vec.multiplyScalar(0.5)).add(offset_vec.multiplyScalar(offset2 * radius2 * 2)).toArray();
    }
    const quaternion = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), delta_vec.normalize());
    const rotation2 = new Euler().setFromQuaternion(quaternion).toArray();
    return { height: height2, position: position2, rotation: rotation2 };
  }
  if ($$props.from === void 0 && $$bindings.from && from !== void 0)
    $$bindings.from(from);
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(Instance, "Instance").$$render(
    $$result,
    {
      position,
      rotation,
      scale: [1, height, 1],
      color
    },
    {},
    {}
  )}`;
});
const Lattice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lattice_center;
  let { matrix } = $$props;
  let { show_cell = `wireframe` } = $$props;
  let { cell_color = `white` } = $$props;
  let { cell_line_width = 1 } = $$props;
  let { cell_opacity = 1 } = $$props;
  let { show_vectors = true } = $$props;
  let { vector_colors = [`red`, `green`, `blue`] } = $$props;
  let { vector_origin = [-1, -1, -1] } = $$props;
  if ($$props.matrix === void 0 && $$bindings.matrix && matrix !== void 0)
    $$bindings.matrix(matrix);
  if ($$props.show_cell === void 0 && $$bindings.show_cell && show_cell !== void 0)
    $$bindings.show_cell(show_cell);
  if ($$props.cell_color === void 0 && $$bindings.cell_color && cell_color !== void 0)
    $$bindings.cell_color(cell_color);
  if ($$props.cell_line_width === void 0 && $$bindings.cell_line_width && cell_line_width !== void 0)
    $$bindings.cell_line_width(cell_line_width);
  if ($$props.cell_opacity === void 0 && $$bindings.cell_opacity && cell_opacity !== void 0)
    $$bindings.cell_opacity(cell_opacity);
  if ($$props.show_vectors === void 0 && $$bindings.show_vectors && show_vectors !== void 0)
    $$bindings.show_vectors(show_vectors);
  if ($$props.vector_colors === void 0 && $$bindings.vector_colors && vector_colors !== void 0)
    $$bindings.vector_colors(vector_colors);
  if ($$props.vector_origin === void 0 && $$bindings.vector_origin && vector_origin !== void 0)
    $$bindings.vector_origin(vector_origin);
  lattice_center = scale(add(...matrix), 0.5);
  return `${show_cell ? (() => {
    let shear_matrix = new Matrix4().makeBasis(...matrix.map((vec) => new Vector3(...vec, 0))), geometry = new BoxGeometry(1, 1, 1).applyMatrix4(shear_matrix);
    return `  ${validate_component(T.Mesh, "T.Mesh").$$render($$result, { geometry, position: lattice_center }, {}, {
      default: () => {
        return `${validate_component(T.MeshBasicMaterial, "T.MeshBasicMaterial").$$render(
          $$result,
          {
            color: cell_color,
            opacity: cell_opacity,
            transparent: cell_opacity !== void 0,
            wireframe: show_cell === `wireframe`,
            line_width: cell_line_width
          },
          {},
          {}
        )}`;
      }
    })}`;
  })() : ``} ${show_vectors ? `${validate_component(T.Group, "T.Group").$$render($$result, { position: vector_origin }, {}, {
    default: () => {
      return ` ${validate_component(InstancedMesh_1, "InstancedMesh").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(T.CylinderGeometry, "T.CylinderGeometry").$$render($$result, { args: [0.1, 0.1, 1, 16] }, {}, {})} ${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render($$result, {}, {}, {})} ${each(matrix, (vec, idx) => {
            return `${validate_component(Bond, "Bond").$$render(
              $$result,
              {
                to: scale(vec, 0.5),
                color: vector_colors[idx]
              },
              {},
              {}
            )}`;
          })}`;
        }
      })}  ${validate_component(InstancedMesh_1, "InstancedMesh").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render($$result, {}, {}, {})}  ${validate_component(T.ConeGeometry, "T.ConeGeometry").$$render($$result, { args: [0.25, 0.12, 32] }, {}, {})} ${each(matrix, (vec, idx) => {
            return `${validate_component(Bond, "Bond").$$render($$result, { to: vec, color: vector_colors[idx] }, {}, {})}`;
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
const css$3 = {
  code: "span.svelte-tz3i9m.svelte-tz3i9m{position:relative}span.svelte-tz3i9m>div.svelte-tz3i9m{visibility:hidden;opacity:0;cursor:default;position:absolute;top:100%;padding:5pt 1ex;border-radius:1ex;left:50%;transform:translate(-50%, 1ex);z-index:1;box-shadow:0 0 1ex -3pt black;width:fit-content;box-sizing:border-box;transition:var(--zoo-tooltip-transition, 0.2s);background:var(--zoo-tooltip-bg, rgba(0, 0, 0, 0.3));color:var(--zoo-tooltip-color, white);border:var(--zoo-tooltip-border)}span.svelte-tz3i9m>div.svelte-tz3i9m::before{content:'';position:absolute;left:50%;bottom:100%;transform:translate(-50%);border:1ex solid;border-color:transparent transparent var(--zoo-tooltip-bg, gray) transparent;box-sizing:border-box}span.svelte-tz3i9m:hover>div.svelte-tz3i9m{visibility:visible;opacity:1;transform:translate(-50%, 2ex)}span.svelte-tz3i9m>div.svelte-tz3i9m::after{content:'';position:absolute;width:100%;bottom:100%;height:1ex}",
  map: `{"version":3,"file":"Tooltip.svelte","sources":["Tooltip.svelte"],"sourcesContent":["<script>export let text = null;\\nexport let max_width = \`14em\`;\\nexport let min_width = \`max-content\`;\\nexport let bg = null;\\n// set e.g. to cursor='help' to inform the user the tooltip refers to the hovered element\\nexport let cursor = null;\\nexport let style = null;\\nexport let tip_style = null;\\n$: if (text && $$slots.tip) {\\n    console.error(\`svelte-zoo tooltip: both text prop and slot='tip' were passed, only one is allowed\`);\\n}\\n<\/script>\\n\\n{#if $$slots.tip || text}\\n  <span style:cursor {style}>\\n    <slot />\\n    <slot name=\\"trigger\\" />\\n    <div\\n      style:min-width={min_width}\\n      style:max-width={max_width}\\n      style:background={bg}\\n      style={tip_style}\\n    >\\n      <slot name=\\"tip\\">{text}</slot>\\n    </div>\\n  </span>\\n{:else}\\n  <!-- if no tip was passed, don't wrap the trigger in an unnecessary span -->\\n  <slot />\\n  <slot name=\\"trigger\\" />\\n{/if}\\n\\n<style>\\n  span {\\n    position: relative;\\n  }\\n  span > div {\\n    visibility: hidden;\\n    opacity: 0;\\n    cursor: default;\\n    position: absolute;\\n    top: 100%;\\n    padding: 5pt 1ex;\\n    border-radius: 1ex;\\n    left: 50%;\\n    transform: translate(-50%, 1ex);\\n    z-index: 1;\\n    box-shadow: 0 0 1ex -3pt black;\\n    width: fit-content;\\n    box-sizing: border-box;\\n    transition: var(--zoo-tooltip-transition, 0.2s);\\n    background: var(--zoo-tooltip-bg, rgba(0, 0, 0, 0.3));\\n    color: var(--zoo-tooltip-color, white);\\n    border: var(--zoo-tooltip-border);\\n  }\\n  span > div::before {\\n    content: '';\\n    position: absolute;\\n    left: 50%;\\n    bottom: 100%;\\n    transform: translate(-50%);\\n    border: 1ex solid;\\n    border-color: transparent transparent var(--zoo-tooltip-bg, gray) transparent;\\n    box-sizing: border-box;\\n  }\\n  span:hover > div {\\n    visibility: visible;\\n    opacity: 1;\\n    transform: translate(-50%, 2ex);\\n  }\\n  /* needed to increase the div hover area beyond its top edge across its entire width */\\n  span > div::after {\\n    content: '';\\n    position: absolute;\\n    width: 100%;\\n    bottom: 100%;\\n    height: 1ex;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiCE,gCAAK,CACH,QAAQ,CAAE,QACZ,CACA,kBAAI,CAAG,iBAAI,CACT,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,OAAO,CACf,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,GAAG,CAClB,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,GAAG,CAAC,CAC/B,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAC9B,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,IAAI,wBAAwB,CAAC,KAAK,CAAC,CAC/C,UAAU,CAAE,IAAI,gBAAgB,CAAC,mBAAmB,CAAC,CACrD,KAAK,CAAE,IAAI,mBAAmB,CAAC,MAAM,CAAC,CACtC,MAAM,CAAE,IAAI,oBAAoB,CAClC,CACA,kBAAI,CAAG,iBAAG,QAAS,CACjB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,UAAU,IAAI,CAAC,CAC1B,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,YAAY,CAAE,WAAW,CAAC,WAAW,CAAC,IAAI,gBAAgB,CAAC,KAAK,CAAC,CAAC,WAAW,CAC7E,UAAU,CAAE,UACd,CACA,kBAAI,MAAM,CAAG,iBAAI,CACf,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,GAAG,CAChC,CAEA,kBAAI,CAAG,iBAAG,OAAQ,CAChB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GACV"}`
};
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { text = null } = $$props;
  let { max_width = `14em` } = $$props;
  let { min_width = `max-content` } = $$props;
  let { bg = null } = $$props;
  let { cursor = null } = $$props;
  let { style = null } = $$props;
  let { tip_style = null } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.max_width === void 0 && $$bindings.max_width && max_width !== void 0)
    $$bindings.max_width(max_width);
  if ($$props.min_width === void 0 && $$bindings.min_width && min_width !== void 0)
    $$bindings.min_width(min_width);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.tip_style === void 0 && $$bindings.tip_style && tip_style !== void 0)
    $$bindings.tip_style(tip_style);
  $$result.css.add(css$3);
  {
    if (text && $$slots.tip) {
      console.error(`svelte-zoo tooltip: both text prop and slot='tip' were passed, only one is allowed`);
    }
  }
  return `${$$slots.tip || text ? `<span${add_styles(merge_ssr_styles(escape(style, true), { cursor }))} class="svelte-tz3i9m">${slots.default ? slots.default({}) : ``} ${slots.trigger ? slots.trigger({}) : ``} <div${add_styles(merge_ssr_styles(escape(tip_style, true), {
    "min-width": min_width,
    "max-width": max_width,
    "background": bg
  }))} class="svelte-tz3i9m">${slots.tip ? slots.tip({}) : `${escape(text)}`}</div></span>` : ` ${slots.default ? slots.default({}) : ``} ${slots.trigger ? slots.trigger({}) : ``}`}`;
});
const css$2 = {
  code: "div.svelte-5q6gcr.svelte-5q6gcr{display:flex;position:absolute;bottom:var(--struct-legend-bottom, 8pt);right:var(--struct-legend-right, 8pt);gap:var(--struct-legend-gap, 8pt);font-size:var(--struct-legend-font-size, 14pt)}div.svelte-5q6gcr label.svelte-5q6gcr{padding:var(--struct-legend-label-padding, 1pt 4pt);border-radius:var(--struct-legend-label-border-radius, 3pt)}div.svelte-5q6gcr label input[type='color'].svelte-5q6gcr{z-index:1;opacity:0;position:absolute;width:100%;height:100%;top:0;left:0;cursor:pointer}dialog[role='tooltip'].svelte-5q6gcr.svelte-5q6gcr{position:fixed;top:var(--struct-tooltip-top, 50%);left:var(--struct-tooltip-left, 50%);transform:translate(-50%, -50%);margin:0;padding:var(--struct-tooltip-padding, 4pt 1em);background:var(--struct-tooltip-bg, rgba(0, 0, 0, 0.8));color:var(--struct-tooltip-color, white);border-radius:var(--struct-tooltip-border-radius, 5px);transition:all 0.3s;overflow:visible}dialog[role='tooltip'].svelte-5q6gcr.svelte-5q6gcr::before{content:'?';position:absolute;top:0;left:0;display:flex;place-content:center;place-items:center;transform:var(--struct-tooltip-before-transform, translate(-50%, -50%));box-sizing:border-box;font-size:var(--struct-tooltip-before-font-size, 20pt);color:var(--struct-tooltip-before-color, white);background:var(--struct-tooltip-before-bg, rgba(0, 0, 0, 0.8));border-radius:var(--struct-tooltip-before-border-radius, 50%);width:var(--struct-tooltip-before-width, 1em);height:var(--struct-tooltip-before-height, 1em);border:var(--struct-tooltip-before-border, 1px solid white)}dialog[role='tooltip'].svelte-5q6gcr.svelte-5q6gcr::backdrop{background:var(--struct-tooltip-backdrop-background, rgba(0, 0, 0, 0.2))}dialog[role='tooltip'].svelte-5q6gcr p.svelte-5q6gcr{margin:var(--struct-tooltip-p-margin, 0)}",
  map: `{"version":3,"file":"StructureLegend.svelte","sources":["StructureLegend.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { choose_bw_for_contrast, element_data } from '$lib';\\nimport { default_element_colors } from '$lib/colors';\\nimport { element_colors } from '$lib/stores';\\nimport { Tooltip } from 'svelte-zoo';\\nexport let elements;\\nexport let elem_color_picker_title = \`Double click to reset color\`;\\nexport let labels = [];\\nexport let tips_modal = undefined;\\nexport let style = null;\\nexport let dialog_style = null;\\n<\/script>\\n\\n<div {style}>\\n  {#each Object.entries(elements) as [elem, amt], idx}\\n    <Tooltip\\n      text={element_data.find((el) => el.symbol == elem)?.name}\\n      --zoo-tooltip-bg=\\"rgba(255, 255, 255, 0.3)\\"\\n      tip_style=\\"font-size: initial; padding: 0 5pt;\\"\\n    >\\n      <label\\n        bind:this={labels[idx]}\\n        style=\\"background-color: {$element_colors[elem]}\\"\\n        on:dblclick|preventDefault={() => {\\n          $element_colors[elem] = default_element_colors[elem]\\n        }}\\n        style:color={choose_bw_for_contrast(labels[idx])}\\n      >\\n        {elem}{amt}\\n        <input\\n          type=\\"color\\"\\n          bind:value={$element_colors[elem]}\\n          title={elem_color_picker_title}\\n        />\\n      </label>\\n    </Tooltip>\\n  {/each}\\n</div>\\n\\n<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n<dialog\\n  bind:this={tips_modal}\\n  on:click={tips_modal?.close}\\n  on:keydown={tips_modal?.close}\\n  role=\\"tooltip\\"\\n  style={dialog_style}\\n>\\n  <slot name=\\"tips-modal\\">\\n    <p>Drop a JSON file onto the canvas to load a new structure.</p>\\n    <p>\\n      Click on an atom to make it active. Then hover another atom to get its distance to\\n      the active atom.\\n    </p>\\n    <p>\\n      Hold <kbd>shift</kbd> or <kbd>cmd</kbd> or <kbd>ctrl</kbd> and drag to pan the scene.\\n    </p>\\n  </slot>\\n</dialog>\\n\\n<style>\\n  div {\\n    display: flex;\\n    position: absolute;\\n    bottom: var(--struct-legend-bottom, 8pt);\\n    right: var(--struct-legend-right, 8pt);\\n    gap: var(--struct-legend-gap, 8pt);\\n    font-size: var(--struct-legend-font-size, 14pt);\\n  }\\n\\n  div label {\\n    padding: var(--struct-legend-label-padding, 1pt 4pt);\\n    border-radius: var(--struct-legend-label-border-radius, 3pt);\\n  }\\n\\n  div label input[type='color'] {\\n    z-index: 1;\\n    opacity: 0;\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    cursor: pointer;\\n  }\\n\\n  dialog[role='tooltip'] {\\n    position: fixed;\\n    top: var(--struct-tooltip-top, 50%);\\n    left: var(--struct-tooltip-left, 50%);\\n    transform: translate(-50%, -50%);\\n    margin: 0;\\n    padding: var(--struct-tooltip-padding, 4pt 1em);\\n    background: var(--struct-tooltip-bg, rgba(0, 0, 0, 0.8));\\n    color: var(--struct-tooltip-color, white);\\n    border-radius: var(--struct-tooltip-border-radius, 5px);\\n    transition: all 0.3s;\\n    overflow: visible;\\n  }\\n\\n  /* info icon in top left corner */\\n  dialog[role='tooltip']::before {\\n    content: '?';\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    display: flex;\\n    place-content: center;\\n    place-items: center;\\n    transform: var(--struct-tooltip-before-transform, translate(-50%, -50%));\\n    box-sizing: border-box;\\n    font-size: var(--struct-tooltip-before-font-size, 20pt);\\n    color: var(--struct-tooltip-before-color, white);\\n    background: var(--struct-tooltip-before-bg, rgba(0, 0, 0, 0.8));\\n    border-radius: var(--struct-tooltip-before-border-radius, 50%);\\n    width: var(--struct-tooltip-before-width, 1em);\\n    height: var(--struct-tooltip-before-height, 1em);\\n    border: var(--struct-tooltip-before-border, 1px solid white);\\n  }\\n\\n  dialog[role='tooltip']::backdrop {\\n    background: var(--struct-tooltip-backdrop-background, rgba(0, 0, 0, 0.2));\\n  }\\n\\n  dialog[role='tooltip'] p {\\n    margin: var(--struct-tooltip-p-margin, 0);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2DE,+BAAI,CACF,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,sBAAsB,CAAC,IAAI,CAAC,CACxC,KAAK,CAAE,IAAI,qBAAqB,CAAC,IAAI,CAAC,CACtC,GAAG,CAAE,IAAI,mBAAmB,CAAC,IAAI,CAAC,CAClC,SAAS,CAAE,IAAI,yBAAyB,CAAC,KAAK,CAChD,CAEA,iBAAG,CAAC,mBAAM,CACR,OAAO,CAAE,IAAI,6BAA6B,CAAC,QAAQ,CAAC,CACpD,aAAa,CAAE,IAAI,mCAAmC,CAAC,IAAI,CAC7D,CAEA,iBAAG,CAAC,KAAK,CAAC,KAAK,CAAC,IAAI,CAAC,OAAO,eAAE,CAC5B,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,OACV,CAEA,MAAM,CAAC,IAAI,CAAC,SAAS,6BAAE,CACrB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,IAAI,oBAAoB,CAAC,IAAI,CAAC,CACnC,IAAI,CAAE,IAAI,qBAAqB,CAAC,IAAI,CAAC,CACrC,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,wBAAwB,CAAC,QAAQ,CAAC,CAC/C,UAAU,CAAE,IAAI,mBAAmB,CAAC,mBAAmB,CAAC,CACxD,KAAK,CAAE,IAAI,sBAAsB,CAAC,MAAM,CAAC,CACzC,aAAa,CAAE,IAAI,8BAA8B,CAAC,IAAI,CAAC,CACvD,UAAU,CAAE,GAAG,CAAC,IAAI,CACpB,QAAQ,CAAE,OACZ,CAGA,MAAM,CAAC,IAAI,CAAC,SAAS,6BAAC,QAAS,CAC7B,OAAO,CAAE,GAAG,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,iCAAiC,CAAC,sBAAsB,CAAC,CACxE,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,IAAI,iCAAiC,CAAC,KAAK,CAAC,CACvD,KAAK,CAAE,IAAI,6BAA6B,CAAC,MAAM,CAAC,CAChD,UAAU,CAAE,IAAI,0BAA0B,CAAC,mBAAmB,CAAC,CAC/D,aAAa,CAAE,IAAI,qCAAqC,CAAC,IAAI,CAAC,CAC9D,KAAK,CAAE,IAAI,6BAA6B,CAAC,IAAI,CAAC,CAC9C,MAAM,CAAE,IAAI,8BAA8B,CAAC,IAAI,CAAC,CAChD,MAAM,CAAE,IAAI,8BAA8B,CAAC,gBAAgB,CAC7D,CAEA,MAAM,CAAC,IAAI,CAAC,SAAS,6BAAC,UAAW,CAC/B,UAAU,CAAE,IAAI,oCAAoC,CAAC,mBAAmB,CAC1E,CAEA,MAAM,CAAC,IAAI,CAAC,SAAS,eAAC,CAAC,eAAE,CACvB,MAAM,CAAE,IAAI,yBAAyB,CAAC,EAAE,CAC1C"}`
};
const StructureLegend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $element_colors, $$unsubscribe_element_colors;
  $$unsubscribe_element_colors = subscribe(element_colors, (value) => $element_colors = value);
  let { elements } = $$props;
  let { elem_color_picker_title = `Double click to reset color` } = $$props;
  let { labels = [] } = $$props;
  let { tips_modal = void 0 } = $$props;
  let { style = null } = $$props;
  let { dialog_style = null } = $$props;
  if ($$props.elements === void 0 && $$bindings.elements && elements !== void 0)
    $$bindings.elements(elements);
  if ($$props.elem_color_picker_title === void 0 && $$bindings.elem_color_picker_title && elem_color_picker_title !== void 0)
    $$bindings.elem_color_picker_title(elem_color_picker_title);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0)
    $$bindings.labels(labels);
  if ($$props.tips_modal === void 0 && $$bindings.tips_modal && tips_modal !== void 0)
    $$bindings.tips_modal(tips_modal);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.dialog_style === void 0 && $$bindings.dialog_style && dialog_style !== void 0)
    $$bindings.dialog_style(dialog_style);
  $$result.css.add(css$2);
  $$unsubscribe_element_colors();
  return `<div${add_attribute("style", style, 0)} class="svelte-5q6gcr">${each(Object.entries(elements), ([elem2, amt], idx) => {
    return `<div style="display: contents; --zoo-tooltip-bg:rgba(255, 255, 255, 0.3);">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        text: element_data.find((el) => el.symbol == elem2)?.name,
        tip_style: "font-size: initial; padding: 0 5pt;"
      },
      {},
      {
        default: () => {
          return `<label${add_styles(merge_ssr_styles("background-color: " + escape($element_colors[elem2], true), {
            "color": choose_bw_for_contrast(labels[idx])
          }))} class="svelte-5q6gcr"${add_attribute("this", labels[idx], 0)}>${escape(elem2)}${escape(amt)} <input type="color"${add_attribute("title", elem_color_picker_title, 0)} class="svelte-5q6gcr"${add_attribute("value", $element_colors[elem2], 0)}></label> `;
        }
      }
    )}</div>`;
  })}</div>  <dialog role="tooltip"${add_attribute("style", dialog_style, 0)} class="svelte-5q6gcr"${add_attribute("this", tips_modal, 0)}>${slots["tips-modal"] ? slots["tips-modal"]({}) : ` <p class="svelte-5q6gcr" data-svelte-h="svelte-q5xbhi">Drop a JSON file onto the canvas to load a new structure.</p> <p class="svelte-5q6gcr" data-svelte-h="svelte-1i18ykt">Click on an atom to make it active. Then hover another atom to get its distance to
      the active atom.</p> <p class="svelte-5q6gcr" data-svelte-h="svelte-4yi1h9">Hold <kbd>shift</kbd> or <kbd>cmd</kbd> or <kbd>ctrl</kbd> and drag to pan the scene.</p> `} </dialog>`;
});
function max_dist(structure, { max_bond_dist = 3, min_bond_dist = 0.4 } = {}) {
  const bonds = [];
  const bond_set = /* @__PURE__ */ new Set();
  for (let idx = 0; idx < structure.sites.length; idx++) {
    const { xyz } = structure.sites[idx];
    for (let idx_2 = idx + 1; idx_2 < structure.sites.length; idx_2++) {
      const { xyz: xyz_2 } = structure.sites[idx_2];
      const dist = euclidean_dist(xyz, xyz_2);
      if (dist < max_bond_dist && dist > min_bond_dist) {
        const bond_key = [xyz, xyz_2].sort().toString();
        if (!bond_set.has(bond_key)) {
          bond_set.add(bond_key);
          bonds.push([xyz, xyz_2, idx, idx_2, dist]);
        }
      }
    }
  }
  return bonds;
}
function nearest_neighbor(structure, { scaling_factor = 1.2, min_bond_dist = 0.1 } = {}) {
  const num_sites = structure.sites.length;
  const bonds = [];
  const bond_set = /* @__PURE__ */ new Set();
  for (let i = 0; i < num_sites; i++) {
    const { xyz: xyz1 } = structure.sites[i];
    let min_dist = Infinity;
    for (let j = i + 1; j < num_sites; j++) {
      const { xyz: xyz2 } = structure.sites[j];
      const dist = euclidean_dist(xyz1, xyz2);
      if (dist > min_bond_dist && dist < min_dist) {
        min_dist = dist;
      }
    }
    for (let j = i + 1; j < num_sites; j++) {
      const { xyz: xyz2 } = structure.sites[j];
      const dist = euclidean_dist(xyz1, xyz2);
      if (dist <= min_dist * scaling_factor) {
        const bond_key = [xyz1, xyz2].sort().toString();
        if (!bond_set.has(bond_key)) {
          bond_set.add(bond_key);
          bonds.push([xyz1, xyz2, i, j, dist]);
        }
      }
    }
  }
  return bonds;
}
const bonding_strategies = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  max_dist,
  nearest_neighbor
}, Symbol.toStringTag, { value: "Module" }));
const css$1 = {
  code: "div.tooltip.svelte-gslzlw{width:max-content;box-sizing:border-box;pointer-events:none;border-radius:var(--struct-tooltip-border-radius, 5pt);background:var(--struct-tooltip-bg, rgba(0, 0, 0, 0.5));padding:var(--struct-tooltip-padding, 1pt 5pt)}",
  map: '{"version":3,"file":"StructureScene.svelte","sources":["StructureScene.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Bond, Lattice, add, atomic_radii, euclidean_dist, pretty_num, scale, } from \'$lib\';\\nimport { element_colors } from \'$lib/stores\';\\nimport { T } from \'@threlte/core\';\\nimport { HTML, Instance, InstancedMesh, OrbitControls, interactivity, } from \'@threlte/extras\';\\nimport * as bonding_strategies from \'./bonding\';\\n// output of pymatgen.core.Structure.as_dict()\\nexport let structure = undefined;\\n// scale factor for atomic radii\\nexport let atom_radius = 0.5;\\n// whether to use the same radius for all atoms. if not, the radius will be\\n// determined by the atomic radius of the element\\nexport let same_size_atoms = true;\\n// initial camera position from which to render the scene\\nexport let camera_position = [10, 0, 0];\\n// rotation damping factor (how quickly the rotation comes to rest after mouse release)\\nexport let rotation_damping = 0.1;\\n// zoom level of the camera\\nexport let max_zoom = undefined;\\nexport let min_zoom = undefined;\\n// zoom speed. set to 0 to disable zooming.\\nexport let zoom_speed = 0.3;\\n// pan speed. set to 0 to disable panning.\\nexport let pan_speed = 1;\\n// TODO whether to make the canvas fill the whole screen\\n// export let fullscreen: boolean = false\\n// whether to show the structure\'s lattice cell as a wireframe\\nexport let show_atoms = true;\\nexport let show_bonds = true;\\nexport let hovered_idx = null;\\nexport let active_idx = null;\\nexport let hovered_site = null;\\nexport let active_site = null;\\nexport let precision = `.3~f`;\\nexport let auto_rotate = 0;\\nexport let bond_radius = undefined;\\nexport let bond_opacity = 0.5;\\nexport let bond_color = `white`;\\nexport let bonding_strategy = `nearest_neighbor`;\\nexport let bonding_options = {};\\nexport let active_hovered_dist = {\\n    color: `green`,\\n    width: 0.1,\\n    opacity: 0.5,\\n};\\n// field of view of the camera. 50 is THREE.js default\\nexport let fov = 50;\\nexport let ambient_light = 1.2;\\nexport let directional_light = 2;\\n$: hovered_site = structure?.sites?.[hovered_idx ?? -1] ?? null;\\n$: active_site = structure?.sites?.[active_idx ?? -1] ?? null;\\ninteractivity();\\nlet bond_pairs;\\n$: if (structure?.sites && show_bonds) {\\n    bond_pairs = bonding_strategies[bonding_strategy](structure, bonding_options);\\n}\\n// make bond thickness reactive to atom_radius unless bond_radius is set\\n$: bond_thickness = bond_radius ?? 0.1 * atom_radius;\\n<\/script>\\n\\n<T.PerspectiveCamera makeDefault position={camera_position} {fov}>\\n  <!-- fix the ugly target -->\\n  <OrbitControls\\n    enableZoom={zoom_speed > 0}\\n    zoomSpeed={zoom_speed}\\n    enablePan={pan_speed > 0}\\n    panSpeed={pan_speed}\\n    target={structure?.lattice\\n      ? scale(add(...(structure?.lattice?.matrix ?? [])), 0.5)\\n      : [0, 0, 0]}\\n    maxZoom={max_zoom}\\n    minZoom={min_zoom}\\n    autoRotate={Boolean(auto_rotate)}\\n    autoRotateSpeed={auto_rotate}\\n    enableDamping={Boolean(rotation_damping)}\\n    dampingFactor={rotation_damping}\\n  />\\n</T.PerspectiveCamera>\\n\\n<T.DirectionalLight position={[3, 10, 10]} intensity={directional_light} />\\n<T.AmbientLight intensity={ambient_light} />\\n\\n{#if show_atoms && structure?.sites}\\n  <InstancedMesh>\\n    <T.MeshStandardMaterial />\\n    <T.SphereGeometry args={[1, 20, 20]} />\\n    {#each structure.sites as site, idx}\\n      {@const { species, xyz } = site}\\n      {@const elem = species[0].element}\\n      {@const radius = (same_size_atoms ? 1 : atomic_radii[elem]) * atom_radius}\\n      <Instance\\n        position={xyz}\\n        color={$element_colors[species[0].element]}\\n        on:pointerenter={() => {\\n          hovered_idx = idx\\n        }}\\n        on:pointerleave={() => {\\n          hovered_idx = null\\n        }}\\n        on:click={() => {\\n          if (active_idx == idx) active_idx = null\\n          else active_idx = idx\\n        }}\\n        scale={radius}\\n      />\\n\\n      {#if $$slots[`atom-label`]}\\n        <HTML center position={xyz}>\\n          <slot name=\\"atom-label\\" {elem} {xyz} {species} />\\n        </HTML>\\n      {/if}\\n    {/each}\\n  </InstancedMesh>\\n{/if}\\n\\n{#if show_bonds}\\n  <InstancedMesh>\\n    <T.CylinderGeometry args={[bond_thickness, bond_thickness, 1, 16]} />\\n    <T.MeshStandardMaterial opacity={bond_opacity} color={bond_color} />\\n    {#key bond_pairs}\\n      {#each bond_pairs ?? [] as [from, to]}\\n        <Bond {from} {to} radius={1} />\\n      {/each}\\n    {/key}\\n  </InstancedMesh>\\n{/if}\\n\\n<!-- highlight active and hovered sites -->\\n{#each [{ site: hovered_site, opacity: 0.2 }, { site: active_site, opacity: 0.3 }] as { site, opacity }}\\n  {#if site}\\n    {@const { xyz, species } = site}\\n    {@const elem = species[0].element}\\n    {@const radius = 1.1 * (same_size_atoms ? 1 : atomic_radii[elem]) * atom_radius}\\n    <T.Mesh position={xyz}>\\n      <T.SphereGeometry args={[radius, 20, 20]} />\\n      <T.MeshStandardMaterial color=\\"white\\" transparent {opacity} />\\n    </T.Mesh>\\n  {/if}\\n{/each}\\n\\n<!-- cylinder between active and hovered site to indicate measured distance -->\\n{#if active_site && hovered_site && active_hovered_dist}\\n  {@const { color, width, opacity } = active_hovered_dist}\\n  <InstancedMesh>\\n    <T.CylinderGeometry args={[width, width, 1, 16]} />\\n    <T.MeshStandardMaterial {opacity} {color} />\\n    <Bond from={active_site.xyz} to={hovered_site.xyz} radius={1} />\\n  </InstancedMesh>\\n{/if}\\n\\n<!-- hovered site tooltip -->\\n{#if hovered_site}\\n  <HTML position={hovered_site.xyz} pointerEvents=\\"none\\">\\n    <div class=\\"tooltip\\">\\n      {#each hovered_site.species ?? [] as { element, occu, oxidation_state }}\\n        {@const oxi_state =\\n          oxidation_state &&\\n          Math.abs(oxidation_state) + (oxidation_state > 0 ? `+` : `-`)}\\n        <strong>{element}{oxi_state ?? ``}</strong>\\n        {occu == 1 ? `` : `(occu=${occu})`}\\n      {/each}\\n      ({hovered_site.xyz.map((num) => pretty_num(num, precision)).join(`, `)})\\n      <!-- distance from hovered to active site -->\\n      <!-- TODO this doesn\'t handle periodic boundaries yet, so is currently grossly misleading -->\\n      {#if active_site && active_site != hovered_site && active_hovered_dist}\\n        {@const distance = euclidean_dist(hovered_site.xyz, active_site.xyz)}\\n        <br />\\n        dist={pretty_num(distance)} Å (no PBC yet)\\n      {/if}\\n    </div>\\n  </HTML>\\n{/if}\\n\\n{#if structure?.lattice}\\n  <Lattice matrix={structure?.lattice?.matrix} {...$$restProps} />\\n{/if}\\n\\n<style>\\n  div.tooltip {\\n    width: max-content;\\n    box-sizing: border-box;\\n    pointer-events: none;\\n    border-radius: var(--struct-tooltip-border-radius, 5pt);\\n    background: var(--struct-tooltip-bg, rgba(0, 0, 0, 0.5));\\n    padding: var(--struct-tooltip-padding, 1pt 5pt);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiLE,GAAG,sBAAS,CACV,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,UAAU,CACtB,cAAc,CAAE,IAAI,CACpB,aAAa,CAAE,IAAI,8BAA8B,CAAC,IAAI,CAAC,CACvD,UAAU,CAAE,IAAI,mBAAmB,CAAC,mBAAmB,CAAC,CACxD,OAAO,CAAE,IAAI,wBAAwB,CAAC,QAAQ,CAChD"}'
};
const StructureScene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bond_thickness;
  let $$restProps = compute_rest_props($$props, [
    "structure",
    "atom_radius",
    "same_size_atoms",
    "camera_position",
    "rotation_damping",
    "max_zoom",
    "min_zoom",
    "zoom_speed",
    "pan_speed",
    "show_atoms",
    "show_bonds",
    "hovered_idx",
    "active_idx",
    "hovered_site",
    "active_site",
    "precision",
    "auto_rotate",
    "bond_radius",
    "bond_opacity",
    "bond_color",
    "bonding_strategy",
    "bonding_options",
    "active_hovered_dist",
    "fov",
    "ambient_light",
    "directional_light"
  ]);
  let $$slots = compute_slots(slots);
  let $element_colors, $$unsubscribe_element_colors;
  $$unsubscribe_element_colors = subscribe(element_colors, (value) => $element_colors = value);
  let { structure = void 0 } = $$props;
  let { atom_radius = 0.5 } = $$props;
  let { same_size_atoms = true } = $$props;
  let { camera_position = [10, 0, 0] } = $$props;
  let { rotation_damping = 0.1 } = $$props;
  let { max_zoom = void 0 } = $$props;
  let { min_zoom = void 0 } = $$props;
  let { zoom_speed = 0.3 } = $$props;
  let { pan_speed = 1 } = $$props;
  let { show_atoms = true } = $$props;
  let { show_bonds = true } = $$props;
  let { hovered_idx = null } = $$props;
  let { active_idx = null } = $$props;
  let { hovered_site = null } = $$props;
  let { active_site = null } = $$props;
  let { precision = `.3~f` } = $$props;
  let { auto_rotate = 0 } = $$props;
  let { bond_radius = void 0 } = $$props;
  let { bond_opacity = 0.5 } = $$props;
  let { bond_color = `white` } = $$props;
  let { bonding_strategy = `nearest_neighbor` } = $$props;
  let { bonding_options = {} } = $$props;
  let { active_hovered_dist = { color: `green`, width: 0.1, opacity: 0.5 } } = $$props;
  let { fov = 50 } = $$props;
  let { ambient_light = 1.2 } = $$props;
  let { directional_light = 2 } = $$props;
  interactivity();
  let bond_pairs;
  if ($$props.structure === void 0 && $$bindings.structure && structure !== void 0)
    $$bindings.structure(structure);
  if ($$props.atom_radius === void 0 && $$bindings.atom_radius && atom_radius !== void 0)
    $$bindings.atom_radius(atom_radius);
  if ($$props.same_size_atoms === void 0 && $$bindings.same_size_atoms && same_size_atoms !== void 0)
    $$bindings.same_size_atoms(same_size_atoms);
  if ($$props.camera_position === void 0 && $$bindings.camera_position && camera_position !== void 0)
    $$bindings.camera_position(camera_position);
  if ($$props.rotation_damping === void 0 && $$bindings.rotation_damping && rotation_damping !== void 0)
    $$bindings.rotation_damping(rotation_damping);
  if ($$props.max_zoom === void 0 && $$bindings.max_zoom && max_zoom !== void 0)
    $$bindings.max_zoom(max_zoom);
  if ($$props.min_zoom === void 0 && $$bindings.min_zoom && min_zoom !== void 0)
    $$bindings.min_zoom(min_zoom);
  if ($$props.zoom_speed === void 0 && $$bindings.zoom_speed && zoom_speed !== void 0)
    $$bindings.zoom_speed(zoom_speed);
  if ($$props.pan_speed === void 0 && $$bindings.pan_speed && pan_speed !== void 0)
    $$bindings.pan_speed(pan_speed);
  if ($$props.show_atoms === void 0 && $$bindings.show_atoms && show_atoms !== void 0)
    $$bindings.show_atoms(show_atoms);
  if ($$props.show_bonds === void 0 && $$bindings.show_bonds && show_bonds !== void 0)
    $$bindings.show_bonds(show_bonds);
  if ($$props.hovered_idx === void 0 && $$bindings.hovered_idx && hovered_idx !== void 0)
    $$bindings.hovered_idx(hovered_idx);
  if ($$props.active_idx === void 0 && $$bindings.active_idx && active_idx !== void 0)
    $$bindings.active_idx(active_idx);
  if ($$props.hovered_site === void 0 && $$bindings.hovered_site && hovered_site !== void 0)
    $$bindings.hovered_site(hovered_site);
  if ($$props.active_site === void 0 && $$bindings.active_site && active_site !== void 0)
    $$bindings.active_site(active_site);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.auto_rotate === void 0 && $$bindings.auto_rotate && auto_rotate !== void 0)
    $$bindings.auto_rotate(auto_rotate);
  if ($$props.bond_radius === void 0 && $$bindings.bond_radius && bond_radius !== void 0)
    $$bindings.bond_radius(bond_radius);
  if ($$props.bond_opacity === void 0 && $$bindings.bond_opacity && bond_opacity !== void 0)
    $$bindings.bond_opacity(bond_opacity);
  if ($$props.bond_color === void 0 && $$bindings.bond_color && bond_color !== void 0)
    $$bindings.bond_color(bond_color);
  if ($$props.bonding_strategy === void 0 && $$bindings.bonding_strategy && bonding_strategy !== void 0)
    $$bindings.bonding_strategy(bonding_strategy);
  if ($$props.bonding_options === void 0 && $$bindings.bonding_options && bonding_options !== void 0)
    $$bindings.bonding_options(bonding_options);
  if ($$props.active_hovered_dist === void 0 && $$bindings.active_hovered_dist && active_hovered_dist !== void 0)
    $$bindings.active_hovered_dist(active_hovered_dist);
  if ($$props.fov === void 0 && $$bindings.fov && fov !== void 0)
    $$bindings.fov(fov);
  if ($$props.ambient_light === void 0 && $$bindings.ambient_light && ambient_light !== void 0)
    $$bindings.ambient_light(ambient_light);
  if ($$props.directional_light === void 0 && $$bindings.directional_light && directional_light !== void 0)
    $$bindings.directional_light(directional_light);
  $$result.css.add(css$1);
  hovered_site = structure?.sites?.[hovered_idx ?? -1] ?? null;
  active_site = structure?.sites?.[active_idx ?? -1] ?? null;
  {
    if (structure?.sites && show_bonds) {
      bond_pairs = bonding_strategies[bonding_strategy](structure, bonding_options);
    }
  }
  bond_thickness = bond_radius ?? 0.1 * atom_radius;
  $$unsubscribe_element_colors();
  return `${validate_component(T.PerspectiveCamera, "T.PerspectiveCamera").$$render(
    $$result,
    {
      makeDefault: true,
      position: camera_position,
      fov
    },
    {},
    {
      default: () => {
        return ` ${validate_component(OrbitControls2, "OrbitControls").$$render(
          $$result,
          {
            enableZoom: zoom_speed > 0,
            zoomSpeed: zoom_speed,
            enablePan: pan_speed > 0,
            panSpeed: pan_speed,
            target: structure?.lattice ? scale(add(...structure?.lattice?.matrix ?? []), 0.5) : [0, 0, 0],
            maxZoom: max_zoom,
            minZoom: min_zoom,
            autoRotate: Boolean(auto_rotate),
            autoRotateSpeed: auto_rotate,
            enableDamping: Boolean(rotation_damping),
            dampingFactor: rotation_damping
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(T.DirectionalLight, "T.DirectionalLight").$$render(
    $$result,
    {
      position: [3, 10, 10],
      intensity: directional_light
    },
    {},
    {}
  )} ${validate_component(T.AmbientLight, "T.AmbientLight").$$render($$result, { intensity: ambient_light }, {}, {})} ${show_atoms && structure?.sites ? `${validate_component(InstancedMesh_1, "InstancedMesh").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render($$result, {}, {}, {})} ${validate_component(T.SphereGeometry, "T.SphereGeometry").$$render($$result, { args: [1, 20, 20] }, {}, {})} ${each(structure.sites, (site, idx) => {
        let { species, xyz } = site, elem2 = species[0].element, radius = (same_size_atoms ? 1 : atomic_radii[elem2]) * atom_radius;
        return `   ${validate_component(Instance, "Instance").$$render(
          $$result,
          {
            position: xyz,
            color: $element_colors[species[0].element],
            scale: radius
          },
          {},
          {}
        )} ${$$slots[`atom-label`] ? `${validate_component(HTML, "HTML").$$render($$result, { center: true, position: xyz }, {}, {
          default: () => {
            return `${slots["atom-label"] ? slots["atom-label"]({ elem: elem2, xyz, species }) : ``} `;
          }
        })}` : ``}`;
      })}`;
    }
  })}` : ``} ${show_bonds ? `${validate_component(InstancedMesh_1, "InstancedMesh").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(T.CylinderGeometry, "T.CylinderGeometry").$$render(
        $$result,
        {
          args: [bond_thickness, bond_thickness, 1, 16]
        },
        {},
        {}
      )} ${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render($$result, { opacity: bond_opacity, color: bond_color }, {}, {})} ${each(bond_pairs ?? [], ([from, to]) => {
        return `${validate_component(Bond, "Bond").$$render($$result, { from, to, radius: 1 }, {}, {})}`;
      })}`;
    }
  })}` : ``}  ${each([{ site: hovered_site, opacity: 0.2 }, { site: active_site, opacity: 0.3 }], ({ site, opacity }) => {
    return `${site ? (() => {
      let { xyz, species } = site, elem2 = species[0].element, radius = 1.1 * (same_size_atoms ? 1 : atomic_radii[elem2]) * atom_radius;
      return `   ${validate_component(T.Mesh, "T.Mesh").$$render($$result, { position: xyz }, {}, {
        default: () => {
          return `${validate_component(T.SphereGeometry, "T.SphereGeometry").$$render($$result, { args: [radius, 20, 20] }, {}, {})} ${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render(
            $$result,
            {
              color: "white",
              transparent: true,
              opacity
            },
            {},
            {}
          )} `;
        }
      })}`;
    })() : ``}`;
  })}  ${active_site && hovered_site && active_hovered_dist ? (() => {
    let { color, width, opacity } = active_hovered_dist;
    return ` ${validate_component(InstancedMesh_1, "InstancedMesh").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(T.CylinderGeometry, "T.CylinderGeometry").$$render($$result, { args: [width, width, 1, 16] }, {}, {})} ${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render($$result, { opacity, color }, {}, {})} ${validate_component(Bond, "Bond").$$render(
          $$result,
          {
            from: active_site.xyz,
            to: hovered_site.xyz,
            radius: 1
          },
          {},
          {}
        )}`;
      }
    })}`;
  })() : ``}  ${hovered_site ? `${validate_component(HTML, "HTML").$$render(
    $$result,
    {
      position: hovered_site.xyz,
      pointerEvents: "none"
    },
    {},
    {
      default: () => {
        return `<div class="tooltip svelte-gslzlw">${each(hovered_site.species ?? [], ({ element, occu, oxidation_state }) => {
          let oxi_state = oxidation_state && Math.abs(oxidation_state) + (oxidation_state > 0 ? `+` : `-`);
          return ` <strong>${escape(element)}${escape(oxi_state ?? ``)}</strong> ${escape(occu == 1 ? `` : `(occu=${occu})`)}`;
        })}
      (${escape(hovered_site.xyz.map((num) => pretty_num(num, precision)).join(`, `))})
        ${active_site && active_site != hovered_site && active_hovered_dist ? (() => {
          let distance = euclidean_dist(hovered_site.xyz, active_site.xyz);
          return ` <br>
        dist=${escape(pretty_num(distance))} Å (no PBC yet)`;
        })() : ``}</div>`;
      }
    }
  )}` : ``} ${structure?.lattice ? `${validate_component(Lattice, "Lattice").$$render($$result, Object.assign({}, { matrix: structure?.lattice?.matrix }, $$restProps), {}, {})}` : ``}`;
});
const { Object: Object_1 } = globals;
const css = {
  code: ".structure.svelte-1mmac5t.svelte-1mmac5t{position:relative;container-type:size;height:var(--struct-height, 500px);width:var(--struct-width);max-width:var(--struct-max-width);min-width:var(--struct-min-width);border-radius:var(--struct-border-radius, 3pt);background:var(--struct-bg, rgba(0, 0, 255, 0.1));--struct-controls-transition-duration:0.3s;overflow:var(--struct-overflow, hidden);color:var(--struct-text-color)}.structure.svelte-1mmac5t:fullscreen canvas{height:100vh !important;width:100vw !important}.structure.dragover.svelte-1mmac5t.svelte-1mmac5t{background:var(--struct-dragover-bg, rgba(0, 0, 0, 0.7))}div.bottom-left.svelte-1mmac5t.svelte-1mmac5t{position:absolute;bottom:0;left:0;font-size:var(--struct-bottom-left-font-size, 1.2em);padding:var(--struct-bottom-left-padding, 1pt 5pt)}section.svelte-1mmac5t.svelte-1mmac5t{position:absolute;display:flex;justify-content:end;top:var(--struct-buttons-top, 1ex);right:var(--struct-buttons-right, 1ex);gap:var(--struct-buttons-gap, 1ex)}dialog.controls.svelte-1mmac5t.svelte-1mmac5t{position:absolute;left:unset;background:transparent;border:none;display:grid;visibility:hidden;opacity:0;gap:var(--struct-controls-gap, 4pt);text-align:var(--struct-controls-text-align, left);transition:visibility var(--struct-controls-transition-duration),\n      opacity var(--struct-controls-transition-duration);box-sizing:border-box;top:var(--struct-controls-top, 30pt);right:var(--struct-controls-right, 6pt);background:var(--struct-controls-bg, rgba(10, 10, 10, 0.8));padding:var(--struct-controls-padding, 6pt 9pt);border-radius:var(--struct-controls-border-radius, 3pt);width:var(--struct-controls-width, 20em);max-width:var(--struct-controls-max-width, 90cqw);color:var(--struct-controls-text-color);overflow:auto;max-height:var(--struct-controls-max-height, calc(100cqh - 3em))}dialog.controls.svelte-1mmac5t hr.svelte-1mmac5t{border:none;background:var(--struct-controls-hr-bg, gray);margin:var(--struct-controls-hr-margin, 0);height:var(--struct-controls-hr-height, 0.5px)}dialog.controls.svelte-1mmac5t label.svelte-1mmac5t{display:flex;align-items:center;gap:var(--struct-controls-label-gap, 2pt)}dialog.controls.svelte-1mmac5t input[type='range'].svelte-1mmac5t{margin-left:auto}dialog.controls.svelte-1mmac5t input[type='number'].svelte-1mmac5t{box-sizing:border-box;text-align:center;border-radius:var(--struct-controls-input-num-border-radius, 3pt);width:var(--struct-controls-input-num-width, 2em);border:var(--struct-controls-input-num-border, none);background:var(--struct-controls-input-num-bg, rgba(255, 255, 255, 0.15))}input.svelte-1mmac5t.svelte-1mmac5t::-webkit-inner-spin-button{display:none}dialog.controls[open].svelte-1mmac5t.svelte-1mmac5t{visibility:visible;opacity:1;z-index:var(--struct-controls-z-index-open, 100)}dialog.controls.svelte-1mmac5t button.svelte-1mmac5t{width:max-content;background:var(--struct-controls-btn-bg, rgba(255, 255, 255, 0.4))}select.svelte-1mmac5t.svelte-1mmac5t{margin:var(--struct-controls-select-margin, 0 0 0 5pt);color:var(--struct-controls-select-color, white);background-color:var(--struct-controls-select-bg, rgba(255, 255, 255, 0.1))}p.warn.svelte-1mmac5t.svelte-1mmac5t{text-align:center}.atom-label.svelte-1mmac5t.svelte-1mmac5t{background:var(--struct-atom-label-bg, rgba(0, 0, 0, 0.1));border-radius:var(--struct-atom-label-border-radius, 3pt);padding:var(--struct-atom-label-padding, 0 3px)}input[type='color'].svelte-1mmac5t.svelte-1mmac5t{width:var(--struct-input-color-width, 40px);height:var(--struct-input-color-height, 16px);margin:var(--struct-input-color-margin, 0 0 0 5pt);border:var(--struct-input-color-border, 1px solid rgba(255, 255, 255, 0.05));box-sizing:border-box}",
  map: '{"version":3,"file":"Structure.svelte","sources":["Structure.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { browser } from \'$app/environment\';\\nimport { alphabetical_formula, get_elem_amounts, get_pbc_image_sites } from \'$lib\';\\nimport { download } from \'$lib/api\';\\nimport { element_color_schemes } from \'$lib/colors\';\\nimport { element_colors } from \'$lib/stores\';\\nimport { Canvas } from \'@threlte/core\';\\nimport { Tooltip } from \'svelte-zoo\';\\nimport StructureLegend from \'./StructureLegend.svelte\';\\nimport StructureScene from \'./StructureScene.svelte\';\\n// output of pymatgen.core.Structure.as_dict()\\nexport let structure = undefined;\\n// scale factor for atomic radii\\nexport let atom_radius = 0.5;\\n// whether to use the same radius for all atoms. if not, the radius will be\\n// determined by the atomic radius of the element\\nexport let same_size_atoms = true;\\n// initial camera position from which to render the scene\\nexport let camera_position = [10, 5, 2 * (structure?.lattice?.c ?? 5)];\\n// auto rotate speed. set to 0 to disable auto rotation.\\nexport let auto_rotate = 0;\\n// rotation damping factor (how quickly the rotation comes to rest after mouse release)\\nexport let rotation_damping = 0.1;\\n// zoom speed. set to 0 to disable zooming.\\nexport let zoom_speed = 0.3;\\n// pan speed. set to 0 to disable panning.\\nexport let pan_speed = 1;\\n// whether to show the controls panel\\nexport let controls_open = false;\\n// canvas background color\\nexport let background_color = `#0000ff`; // must be hex code for <input type=\'color\'>\\n// only show the buttons when hovering over the canvas on desktop screens\\n// mobile screens don\'t have hover, so by default the buttons are always\\n// shown on a canvas of width below 500px\\nexport let reveal_buttons = 500;\\nexport let fullscreen = false;\\n// whether to show the structure\'s lattice cell as a wireframe\\nexport let show_atoms = true;\\nexport let show_bonds = true;\\nexport let bond_radius = undefined;\\nexport let show_cell = `wireframe`;\\nexport let cell_opacity = show_cell == `surface` ? 0.2 : 0.4;\\nexport let cell_line_width = 1;\\nexport let wrapper = undefined;\\n// the control panel DOM element\\nexport let controls = undefined;\\n// the button to toggle the control panel\\nexport let toggle_controls_btn = undefined;\\n// whether to show the lattice vectors\\nexport let show_vectors = true;\\n// bindable width of the canvas\\nexport let width = 0;\\n// bindable height of the canvas\\nexport let height = 0;\\n// export let reset_text: string = `Reset view`\\nexport let color_scheme = `Vesta`;\\nexport let hovered = false;\\nexport let dragover = false;\\nexport let allow_file_drop = true;\\nexport let tips_modal = undefined;\\nexport let enable_tips = true;\\nexport let save_json_btn_text = `⬇ Save as JSON`;\\nexport let save_png_btn_text = `✎ Save as PNG`;\\n// boolean or map from element symbols to labels\\n// use slot=\'atom-label\' to include HTML and event handlers\\nexport let show_site_labels = (structure?.sites?.length ?? 0) < 20;\\nexport let atom_labels_style = null;\\nexport let bonding_strategy = `nearest_neighbor`;\\nexport let bond_color_mode = `single`;\\nexport let bond_color = `#ffffff`; // must be hex code for <input type=\'color\'>\\nexport let style = null;\\nexport let show_image_atoms = true;\\nexport let directional_light = 2;\\nexport let ambient_light = 1.2;\\nexport let show_full_controls = false;\\n// interactivity()\\n$: $element_colors = element_color_schemes[color_scheme];\\nfunction on_keydown(event) {\\n    if (event.key === `Escape`) {\\n        controls_open = false;\\n    }\\n}\\nconst on_window_click = (node, cb) => (event) => {\\n    if (!node || !event.target)\\n        return; // ignore invalid input\\n    // ignore clicks inside any of the nodes\\n    if (node && node.some((n) => n?.contains(event.target)))\\n        return;\\n    cb(); // invoke callback\\n};\\n$: visible_buttons =\\n    reveal_buttons == true ||\\n        (typeof reveal_buttons == `number` && reveal_buttons < width);\\nfunction download_json() {\\n    if (!structure)\\n        alert(`No structure to download`);\\n    const data = JSON.stringify(structure, null, 2);\\n    const filename = structure?.id\\n        ? `${structure?.id} (${alphabetical_formula(structure)}).json`\\n        : `${alphabetical_formula(structure)}.json`;\\n    download(data, filename, `application/json`);\\n}\\nfunction on_file_drop(event) {\\n    // TODO support dragging CIF/XYZ files\\n    dragover = false;\\n    if (!allow_file_drop)\\n        return;\\n    const file = event.dataTransfer?.items[0].getAsFile();\\n    const reader = new FileReader();\\n    reader.onloadend = (event) => {\\n        try {\\n            structure = JSON.parse(event.target.result);\\n        }\\n        catch (error) {\\n            console.error(`Invalid JSON file`, error);\\n        }\\n    };\\n    reader.readAsText(file);\\n}\\nfunction download_png() {\\n    const canvas = wrapper?.querySelector(`canvas`);\\n    canvas?.toBlob((blob) => {\\n        download(blob, `scene.png`, `image/png`);\\n    });\\n}\\nexport function toggle_fullscreen() {\\n    if (!document.fullscreenElement && wrapper) {\\n        wrapper.requestFullscreen().catch(console.error);\\n    }\\n    else {\\n        document.exitFullscreen();\\n    }\\n}\\n// set --struct-bg to background_color\\n$: if (browser) {\\n    document.documentElement.style.setProperty(`--struct-bg`, `${background_color}20`);\\n    // react to changes in the \'fullscreen\' property\\n    if (fullscreen && !document.fullscreenElement && wrapper) {\\n        wrapper.requestFullscreen().catch(console.error);\\n    }\\n    else if (!fullscreen && document.fullscreenElement) {\\n        document.exitFullscreen();\\n    }\\n}\\n<\/script>\\n\\n<svelte:window\\n  on:keydown={on_keydown}\\n  on:click={on_window_click([controls, toggle_controls_btn], () => {\\n    if (controls_open) controls_open = false\\n  })}\\n/>\\n\\n{#if structure?.sites}\\n  <div\\n    class=\\"structure\\"\\n    class:dragover\\n    {style}\\n    role=\\"region\\"\\n    bind:this={wrapper}\\n    bind:clientWidth={width}\\n    bind:clientHeight={height}\\n    on:mouseenter={() => (hovered = true)}\\n    on:mouseleave={() => (hovered = false)}\\n    on:drop|preventDefault={on_file_drop}\\n    on:dragover|preventDefault={() => allow_file_drop && (dragover = true)}\\n    on:dragleave|preventDefault={() => allow_file_drop && (dragover = false)}\\n  >\\n    <section class:visible={visible_buttons}>\\n      <!-- TODO show only when camera was moved -->\\n      <!-- <button\\n        class=\\"reset-camera\\"\\n        on:click={() => {\\n          // TODO implement reset view and controls\\n        }}>{reset_text}</button\\n      > -->\\n      {#if enable_tips}\\n        <button class=\\"info-icon\\" on:click={() => tips_modal?.showModal()}>\\n          <slot name=\\"tips-icon\\">&#9432;</slot>\\n        </button>\\n      {/if}\\n      <button\\n        on:click={toggle_fullscreen}\\n        class=\\"fullscreen-toggle\\"\\n        title=\\"Toggle fullscreen\\"\\n      >\\n        <slot name=\\"fullscreen-toggle\\">⛶</slot>\\n      </button>\\n\\n      <button\\n        on:click={() => (controls_open = !controls_open)}\\n        bind:this={toggle_controls_btn}\\n        class=\\"controls-toggle\\"\\n      >\\n        <slot name=\\"controls-toggle\\" {controls_open}>\\n          {controls_open ? `Close` : `Controls`}\\n        </slot>\\n      </button>\\n    </section>\\n\\n    <StructureLegend elements={get_elem_amounts(structure)} bind:tips_modal />\\n\\n    <dialog class=\\"controls\\" bind:this={controls} open={controls_open}>\\n      <div style=\\"display: flex; align-items: center; gap: 4pt; flex-wrap: wrap;\\">\\n        Show <label>\\n          <input type=\\"checkbox\\" bind:checked={show_atoms} />\\n          atoms\\n        </label>\\n        <label>\\n          <input type=\\"checkbox\\" bind:checked={show_bonds} />\\n          bonds\\n        </label>\\n        <label>\\n          <input type=\\"checkbox\\" bind:checked={show_vectors} />\\n          lattice vectors\\n        </label>\\n        <label>\\n          <input type=\\"checkbox\\" bind:checked={show_image_atoms} />\\n          image atoms\\n        </label>\\n        <!-- add a toggle that\'s to show or hide the full currently visible set of controls. it should be off by default in which case only the controls the user is most likely to need are shown -->\\n        <label>\\n          <input type=\\"checkbox\\" bind:checked={show_full_controls} />\\n          full controls\\n        </label>\\n        <label>\\n          <input type=\\"checkbox\\" bind:checked={show_site_labels} />\\n          site labels\\n        </label>\\n        <label>\\n          <select bind:value={show_cell}>\\n            <option value=\\"surface\\">surface</option>\\n            <option value=\\"wireframe\\">wireframe</option>\\n            <option value={null}>none</option>\\n          </select>\\n          unit cell as\\n        </label>\\n      </div>\\n\\n      <hr />\\n\\n      <label>\\n        Atom radius\\n        <small> (Å)</small>\\n        <input type=\\"number\\" min=\\"0.1\\" max={1} step={0.05} bind:value={atom_radius} />\\n        <input type=\\"range\\" min=\\"0.1\\" max={1} step={0.05} bind:value={atom_radius} />\\n      </label>\\n      <label>\\n        <input type=\\"checkbox\\" bind:checked={same_size_atoms} />\\n        <span>\\n          Scale sites according to atomic radii\\n          <small> (if false, all atoms have same size)</small>\\n        </span>\\n      </label>\\n\\n      {#if show_full_controls && show_cell}\\n        <hr />\\n        <label>\\n          Unit cell opacity\\n          <input type=\\"number\\" min={0} max={1} step={0.05} bind:value={cell_opacity} />\\n          <input type=\\"range\\" min={0} max={1} step={0.05} bind:value={cell_opacity} />\\n        </label>\\n      {/if}\\n\\n      {#if show_bonds}\\n        <hr />\\n        <label>\\n          Bonding strategy\\n          <select bind:value={bonding_strategy}>\\n            <option value=\\"max_dist\\">Max Distance</option>\\n            <option value=\\"nearest_neighbor\\">Nearest Neighbor</option>\\n          </select>\\n        </label>\\n\\n        <label>\\n          Bond color mode\\n          <select bind:value={bond_color_mode}>\\n            <option value=\\"single\\">Single</option>\\n            <option value=\\"split-midpoint\\">Split Midpoint</option>\\n            <option value=\\"gradient\\" disabled>Gradient (TODO)</option>\\n          </select>\\n        </label>\\n\\n        {#if bond_color_mode === `single`}\\n          <label>\\n            Bond color\\n            <input type=\\"color\\" bind:value={bond_color} />\\n          </label>\\n        {/if}\\n        <label>\\n          Bond radius\\n          <input\\n            type=\\"number\\"\\n            min={0.001}\\n            max={0.1}\\n            step={0.001}\\n            bind:value={bond_radius}\\n          />\\n          <input\\n            type=\\"range\\"\\n            min=\\"0.001\\"\\n            max=\\"0.1\\"\\n            step={0.001}\\n            bind:value={bond_radius}\\n          />\\n        </label>\\n      {/if}\\n\\n      <label>\\n        Background color\\n        <input type=\\"color\\" bind:value={background_color} />\\n      </label>\\n\\n      <hr />\\n\\n      {#if show_full_controls}\\n        <label>\\n          Auto rotate speed\\n          <input type=\\"number\\" min={0} max={2} step={0.01} bind:value={auto_rotate} />\\n          <input type=\\"range\\" min={0} max={2} step={0.01} bind:value={auto_rotate} />\\n        </label>\\n        <label>\\n          Zoom speed\\n          <input type=\\"number\\" min={0} max={2} step={0.01} bind:value={zoom_speed} />\\n          <input type=\\"range\\" min={0} max={2} step={0.01} bind:value={zoom_speed} />\\n        </label>\\n        <label>\\n          <Tooltip text=\\"pan by clicking and dragging while holding cmd, ctrl or shift\\">\\n            Pan speed\\n          </Tooltip>\\n          <input type=\\"number\\" min={0} max={2} step={0.01} bind:value={pan_speed} />\\n          <input type=\\"range\\" min={0} max={2} step={0.01} bind:value={pan_speed} />\\n        </label>\\n        <!-- directional light intensity -->\\n        <label>\\n          <Tooltip text=\\"intensity of the directional light\\">Directional light</Tooltip>\\n          <input\\n            type=\\"number\\"\\n            min={0}\\n            max={4}\\n            step={0.01}\\n            bind:value={directional_light}\\n          />\\n          <input\\n            type=\\"range\\"\\n            min={0}\\n            max={4}\\n            step={0.01}\\n            bind:value={directional_light}\\n          />\\n        </label>\\n        <!-- ambient light intensity -->\\n        <label>\\n          <Tooltip text=\\"intensity of the ambient light\\">Ambient light</Tooltip>\\n          <input type=\\"number\\" min={0} max={2} step={0.01} bind:value={ambient_light} />\\n          <input type=\\"range\\" min={0} max={2} step={0.01} bind:value={ambient_light} />\\n        </label>\\n        <!-- rotation damping -->\\n        <label>\\n          <Tooltip text=\\"damping factor for rotation\\">Rotation damping</Tooltip>\\n          <input\\n            type=\\"number\\"\\n            min={0}\\n            max={0.3}\\n            step={0.01}\\n            bind:value={rotation_damping}\\n          />\\n          <input\\n            type=\\"range\\"\\n            min={0}\\n            max={0.3}\\n            step={0.01}\\n            bind:value={rotation_damping}\\n          />\\n        </label>\\n      {/if}\\n\\n      <!-- color scheme -->\\n      <label>\\n        Color scheme\\n        <select bind:value={color_scheme}>\\n          {#each Object.keys(element_color_schemes) as key}\\n            <option value={key}>{key}</option>\\n          {/each}\\n        </select>\\n      </label>\\n      <span style=\\"display: flex; gap: 4pt; margin: 3pt 0 0;\\">\\n        <button type=\\"button\\" on:click={download_json} title={save_json_btn_text}>\\n          {save_json_btn_text}\\n        </button>\\n        <button type=\\"button\\" on:click={download_png} title={save_png_btn_text}>\\n          {save_png_btn_text}\\n        </button>\\n      </span>\\n    </dialog>\\n\\n    <Canvas rendererParameters={{ preserveDrawingBuffer: true }}>\\n      <StructureScene\\n        structure={show_image_atoms ? get_pbc_image_sites(structure) : structure}\\n        {show_atoms}\\n        {show_bonds}\\n        {show_cell}\\n        {show_vectors}\\n        {...$$restProps}\\n        {cell_opacity}\\n        {cell_line_width}\\n        {bond_radius}\\n        {camera_position}\\n        {auto_rotate}\\n        {pan_speed}\\n        {zoom_speed}\\n        {bond_color_mode}\\n        {bond_color}\\n        bind:atom_radius\\n        bind:same_size_atoms\\n        {bonding_strategy}\\n        {rotation_damping}\\n        {directional_light}\\n        {ambient_light}\\n      >\\n        <slot slot=\\"atom-label\\" name=\\"atom-label\\" let:elem>\\n          <!-- let:elem needed to fix false positive eslint no-undef -->\\n          {#if show_site_labels}\\n            <span class=\\"atom-label\\" style={atom_labels_style}>\\n              {show_site_labels === true ? elem : show_site_labels[elem]}\\n            </span>\\n          {/if}\\n        </slot>\\n      </StructureScene>\\n    </Canvas>\\n\\n    <div class=\\"bottom-left\\">\\n      <slot name=\\"bottom-left\\" {structure} />\\n    </div>\\n  </div>\\n{:else if structure}\\n  <p class=\\"warn\\">No sites found in structure</p>\\n{:else}\\n  <p class=\\"warn\\">No structure provided</p>\\n{/if}\\n\\n<style>\\n  .structure {\\n    position: relative;\\n    container-type: size;\\n    height: var(--struct-height, 500px);\\n    width: var(--struct-width);\\n    max-width: var(--struct-max-width);\\n    min-width: var(--struct-min-width);\\n    border-radius: var(--struct-border-radius, 3pt);\\n    background: var(--struct-bg, rgba(0, 0, 255, 0.1));\\n    --struct-controls-transition-duration: 0.3s;\\n    overflow: var(--struct-overflow, hidden);\\n    color: var(--struct-text-color);\\n  }\\n  .structure:fullscreen :global(canvas) {\\n    height: 100vh !important;\\n    width: 100vw !important;\\n  }\\n  .structure.dragover {\\n    background: var(--struct-dragover-bg, rgba(0, 0, 0, 0.7));\\n  }\\n  div.bottom-left {\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    font-size: var(--struct-bottom-left-font-size, 1.2em);\\n    padding: var(--struct-bottom-left-padding, 1pt 5pt);\\n  }\\n\\n  section {\\n    position: absolute;\\n    display: flex;\\n    justify-content: end;\\n    top: var(--struct-buttons-top, 1ex);\\n    right: var(--struct-buttons-right, 1ex);\\n    gap: var(--struct-buttons-gap, 1ex);\\n  }\\n\\n  dialog.controls {\\n    position: absolute;\\n    left: unset;\\n    background: transparent;\\n    border: none;\\n    display: grid;\\n    visibility: hidden;\\n    opacity: 0;\\n    gap: var(--struct-controls-gap, 4pt);\\n    text-align: var(--struct-controls-text-align, left);\\n    transition:\\n      visibility var(--struct-controls-transition-duration),\\n      opacity var(--struct-controls-transition-duration);\\n    box-sizing: border-box;\\n    top: var(--struct-controls-top, 30pt);\\n    right: var(--struct-controls-right, 6pt);\\n    background: var(--struct-controls-bg, rgba(10, 10, 10, 0.8));\\n    padding: var(--struct-controls-padding, 6pt 9pt);\\n    border-radius: var(--struct-controls-border-radius, 3pt);\\n    width: var(--struct-controls-width, 20em);\\n    max-width: var(--struct-controls-max-width, 90cqw);\\n    color: var(--struct-controls-text-color);\\n    overflow: auto;\\n    max-height: var(--struct-controls-max-height, calc(100cqh - 3em));\\n  }\\n  dialog.controls hr {\\n    border: none;\\n    background: var(--struct-controls-hr-bg, gray);\\n    margin: var(--struct-controls-hr-margin, 0);\\n    height: var(--struct-controls-hr-height, 0.5px);\\n  }\\n  dialog.controls label {\\n    display: flex;\\n    align-items: center;\\n    gap: var(--struct-controls-label-gap, 2pt);\\n  }\\n  dialog.controls input[type=\'range\'] {\\n    margin-left: auto;\\n  }\\n  dialog.controls input[type=\'number\'] {\\n    box-sizing: border-box;\\n    text-align: center;\\n    border-radius: var(--struct-controls-input-num-border-radius, 3pt);\\n    width: var(--struct-controls-input-num-width, 2em);\\n    border: var(--struct-controls-input-num-border, none);\\n    background: var(--struct-controls-input-num-bg, rgba(255, 255, 255, 0.15));\\n  }\\n  input::-webkit-inner-spin-button {\\n    display: none;\\n  }\\n\\n  dialog.controls[open] {\\n    visibility: visible;\\n    opacity: 1;\\n    z-index: var(--struct-controls-z-index-open, 100);\\n  }\\n  dialog.controls button {\\n    width: max-content;\\n    background: var(--struct-controls-btn-bg, rgba(255, 255, 255, 0.4));\\n  }\\n  select {\\n    margin: var(--struct-controls-select-margin, 0 0 0 5pt);\\n    color: var(--struct-controls-select-color, white);\\n    background-color: var(--struct-controls-select-bg, rgba(255, 255, 255, 0.1));\\n  }\\n\\n  p.warn {\\n    text-align: center;\\n  }\\n  .atom-label {\\n    background: var(--struct-atom-label-bg, rgba(0, 0, 0, 0.1));\\n    border-radius: var(--struct-atom-label-border-radius, 3pt);\\n    padding: var(--struct-atom-label-padding, 0 3px);\\n  }\\n  input[type=\'color\'] {\\n    width: var(--struct-input-color-width, 40px);\\n    height: var(--struct-input-color-height, 16px);\\n    margin: var(--struct-input-color-margin, 0 0 0 5pt);\\n    border: var(--struct-input-color-border, 1px solid rgba(255, 255, 255, 0.05));\\n    box-sizing: border-box;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAybE,wCAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,IAAI,CACpB,MAAM,CAAE,IAAI,eAAe,CAAC,MAAM,CAAC,CACnC,KAAK,CAAE,IAAI,cAAc,CAAC,CAC1B,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,SAAS,CAAE,IAAI,kBAAkB,CAAC,CAClC,aAAa,CAAE,IAAI,sBAAsB,CAAC,IAAI,CAAC,CAC/C,UAAU,CAAE,IAAI,WAAW,CAAC,qBAAqB,CAAC,CAClD,qCAAqC,CAAE,IAAI,CAC3C,QAAQ,CAAE,IAAI,iBAAiB,CAAC,OAAO,CAAC,CACxC,KAAK,CAAE,IAAI,mBAAmB,CAChC,CACA,yBAAU,WAAW,CAAS,MAAQ,CACpC,MAAM,CAAE,KAAK,CAAC,UAAU,CACxB,KAAK,CAAE,KAAK,CAAC,UACf,CACA,UAAU,uCAAU,CAClB,UAAU,CAAE,IAAI,oBAAoB,CAAC,mBAAmB,CAC1D,CACA,GAAG,0CAAa,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,IAAI,8BAA8B,CAAC,MAAM,CAAC,CACrD,OAAO,CAAE,IAAI,4BAA4B,CAAC,QAAQ,CACpD,CAEA,qCAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,GAAG,CACpB,GAAG,CAAE,IAAI,oBAAoB,CAAC,IAAI,CAAC,CACnC,KAAK,CAAE,IAAI,sBAAsB,CAAC,IAAI,CAAC,CACvC,GAAG,CAAE,IAAI,oBAAoB,CAAC,IAAI,CACpC,CAEA,MAAM,uCAAU,CACd,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,KAAK,CACX,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,IAAI,qBAAqB,CAAC,IAAI,CAAC,CACpC,UAAU,CAAE,IAAI,4BAA4B,CAAC,KAAK,CAAC,CACnD,UAAU,CACR,UAAU,CAAC,IAAI,qCAAqC,CAAC,CAAC;AAC5D,MAAM,OAAO,CAAC,IAAI,qCAAqC,CAAC,CACpD,UAAU,CAAE,UAAU,CACtB,GAAG,CAAE,IAAI,qBAAqB,CAAC,KAAK,CAAC,CACrC,KAAK,CAAE,IAAI,uBAAuB,CAAC,IAAI,CAAC,CACxC,UAAU,CAAE,IAAI,oBAAoB,CAAC,sBAAsB,CAAC,CAC5D,OAAO,CAAE,IAAI,yBAAyB,CAAC,QAAQ,CAAC,CAChD,aAAa,CAAE,IAAI,+BAA+B,CAAC,IAAI,CAAC,CACxD,KAAK,CAAE,IAAI,uBAAuB,CAAC,KAAK,CAAC,CACzC,SAAS,CAAE,IAAI,2BAA2B,CAAC,MAAM,CAAC,CAClD,KAAK,CAAE,IAAI,4BAA4B,CAAC,CACxC,QAAQ,CAAE,IAAI,CACd,UAAU,CAAE,IAAI,4BAA4B,CAAC,mBAAmB,CAClE,CACA,MAAM,wBAAS,CAAC,iBAAG,CACjB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,uBAAuB,CAAC,KAAK,CAAC,CAC9C,MAAM,CAAE,IAAI,2BAA2B,CAAC,EAAE,CAAC,CAC3C,MAAM,CAAE,IAAI,2BAA2B,CAAC,MAAM,CAChD,CACA,MAAM,wBAAS,CAAC,oBAAM,CACpB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,2BAA2B,CAAC,IAAI,CAC3C,CACA,MAAM,wBAAS,CAAC,KAAK,CAAC,IAAI,CAAC,OAAO,gBAAE,CAClC,WAAW,CAAE,IACf,CACA,MAAM,wBAAS,CAAC,KAAK,CAAC,IAAI,CAAC,QAAQ,gBAAE,CACnC,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IAAI,yCAAyC,CAAC,IAAI,CAAC,CAClE,KAAK,CAAE,IAAI,iCAAiC,CAAC,IAAI,CAAC,CAClD,MAAM,CAAE,IAAI,kCAAkC,CAAC,KAAK,CAAC,CACrD,UAAU,CAAE,IAAI,8BAA8B,CAAC,0BAA0B,CAC3E,CACA,mCAAK,2BAA4B,CAC/B,OAAO,CAAE,IACX,CAEA,MAAM,SAAS,CAAC,IAAI,+BAAE,CACpB,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,8BAA8B,CAAC,IAAI,CAClD,CACA,MAAM,wBAAS,CAAC,qBAAO,CACrB,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,IAAI,wBAAwB,CAAC,yBAAyB,CACpE,CACA,oCAAO,CACL,MAAM,CAAE,IAAI,+BAA+B,CAAC,UAAU,CAAC,CACvD,KAAK,CAAE,IAAI,8BAA8B,CAAC,MAAM,CAAC,CACjD,gBAAgB,CAAE,IAAI,2BAA2B,CAAC,yBAAyB,CAC7E,CAEA,CAAC,mCAAM,CACL,UAAU,CAAE,MACd,CACA,yCAAY,CACV,UAAU,CAAE,IAAI,sBAAsB,CAAC,mBAAmB,CAAC,CAC3D,aAAa,CAAE,IAAI,iCAAiC,CAAC,IAAI,CAAC,CAC1D,OAAO,CAAE,IAAI,2BAA2B,CAAC,MAAM,CACjD,CACA,KAAK,CAAC,IAAI,CAAC,OAAO,+BAAE,CAClB,KAAK,CAAE,IAAI,0BAA0B,CAAC,KAAK,CAAC,CAC5C,MAAM,CAAE,IAAI,2BAA2B,CAAC,KAAK,CAAC,CAC9C,MAAM,CAAE,IAAI,2BAA2B,CAAC,UAAU,CAAC,CACnD,MAAM,CAAE,IAAI,2BAA2B,CAAC,oCAAoC,CAAC,CAC7E,UAAU,CAAE,UACd"}'
};
const Structure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible_buttons;
  let $$restProps = compute_rest_props($$props, [
    "structure",
    "atom_radius",
    "same_size_atoms",
    "camera_position",
    "auto_rotate",
    "rotation_damping",
    "zoom_speed",
    "pan_speed",
    "controls_open",
    "background_color",
    "reveal_buttons",
    "fullscreen",
    "show_atoms",
    "show_bonds",
    "bond_radius",
    "show_cell",
    "cell_opacity",
    "cell_line_width",
    "wrapper",
    "controls",
    "toggle_controls_btn",
    "show_vectors",
    "width",
    "height",
    "color_scheme",
    "hovered",
    "dragover",
    "allow_file_drop",
    "tips_modal",
    "enable_tips",
    "save_json_btn_text",
    "save_png_btn_text",
    "show_site_labels",
    "atom_labels_style",
    "bonding_strategy",
    "bond_color_mode",
    "bond_color",
    "style",
    "show_image_atoms",
    "directional_light",
    "ambient_light",
    "show_full_controls",
    "toggle_fullscreen"
  ]);
  let $element_colors, $$unsubscribe_element_colors;
  $$unsubscribe_element_colors = subscribe(element_colors, (value) => $element_colors = value);
  let { structure = void 0 } = $$props;
  let { atom_radius = 0.5 } = $$props;
  let { same_size_atoms = true } = $$props;
  let { camera_position = [10, 5, 2 * (structure?.lattice?.c ?? 5)] } = $$props;
  let { auto_rotate = 0 } = $$props;
  let { rotation_damping = 0.1 } = $$props;
  let { zoom_speed = 0.3 } = $$props;
  let { pan_speed = 1 } = $$props;
  let { controls_open = false } = $$props;
  let { background_color = `#0000ff` } = $$props;
  let { reveal_buttons = 500 } = $$props;
  let { fullscreen = false } = $$props;
  let { show_atoms = true } = $$props;
  let { show_bonds = true } = $$props;
  let { bond_radius = void 0 } = $$props;
  let { show_cell = `wireframe` } = $$props;
  let { cell_opacity = show_cell == `surface` ? 0.2 : 0.4 } = $$props;
  let { cell_line_width = 1 } = $$props;
  let { wrapper = void 0 } = $$props;
  let { controls = void 0 } = $$props;
  let { toggle_controls_btn = void 0 } = $$props;
  let { show_vectors = true } = $$props;
  let { width = 0 } = $$props;
  let { height = 0 } = $$props;
  let { color_scheme = `Vesta` } = $$props;
  let { hovered = false } = $$props;
  let { dragover = false } = $$props;
  let { allow_file_drop = true } = $$props;
  let { tips_modal = void 0 } = $$props;
  let { enable_tips = true } = $$props;
  let { save_json_btn_text = `⬇ Save as JSON` } = $$props;
  let { save_png_btn_text = `✎ Save as PNG` } = $$props;
  let { show_site_labels = (structure?.sites?.length ?? 0) < 20 } = $$props;
  let { atom_labels_style = null } = $$props;
  let { bonding_strategy = `nearest_neighbor` } = $$props;
  let { bond_color_mode = `single` } = $$props;
  let { bond_color = `#ffffff` } = $$props;
  let { style = null } = $$props;
  let { show_image_atoms = true } = $$props;
  let { directional_light = 2 } = $$props;
  let { ambient_light = 1.2 } = $$props;
  let { show_full_controls = false } = $$props;
  function toggle_fullscreen() {
    if (!document.fullscreenElement && wrapper) {
      wrapper.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen();
    }
  }
  if ($$props.structure === void 0 && $$bindings.structure && structure !== void 0)
    $$bindings.structure(structure);
  if ($$props.atom_radius === void 0 && $$bindings.atom_radius && atom_radius !== void 0)
    $$bindings.atom_radius(atom_radius);
  if ($$props.same_size_atoms === void 0 && $$bindings.same_size_atoms && same_size_atoms !== void 0)
    $$bindings.same_size_atoms(same_size_atoms);
  if ($$props.camera_position === void 0 && $$bindings.camera_position && camera_position !== void 0)
    $$bindings.camera_position(camera_position);
  if ($$props.auto_rotate === void 0 && $$bindings.auto_rotate && auto_rotate !== void 0)
    $$bindings.auto_rotate(auto_rotate);
  if ($$props.rotation_damping === void 0 && $$bindings.rotation_damping && rotation_damping !== void 0)
    $$bindings.rotation_damping(rotation_damping);
  if ($$props.zoom_speed === void 0 && $$bindings.zoom_speed && zoom_speed !== void 0)
    $$bindings.zoom_speed(zoom_speed);
  if ($$props.pan_speed === void 0 && $$bindings.pan_speed && pan_speed !== void 0)
    $$bindings.pan_speed(pan_speed);
  if ($$props.controls_open === void 0 && $$bindings.controls_open && controls_open !== void 0)
    $$bindings.controls_open(controls_open);
  if ($$props.background_color === void 0 && $$bindings.background_color && background_color !== void 0)
    $$bindings.background_color(background_color);
  if ($$props.reveal_buttons === void 0 && $$bindings.reveal_buttons && reveal_buttons !== void 0)
    $$bindings.reveal_buttons(reveal_buttons);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.show_atoms === void 0 && $$bindings.show_atoms && show_atoms !== void 0)
    $$bindings.show_atoms(show_atoms);
  if ($$props.show_bonds === void 0 && $$bindings.show_bonds && show_bonds !== void 0)
    $$bindings.show_bonds(show_bonds);
  if ($$props.bond_radius === void 0 && $$bindings.bond_radius && bond_radius !== void 0)
    $$bindings.bond_radius(bond_radius);
  if ($$props.show_cell === void 0 && $$bindings.show_cell && show_cell !== void 0)
    $$bindings.show_cell(show_cell);
  if ($$props.cell_opacity === void 0 && $$bindings.cell_opacity && cell_opacity !== void 0)
    $$bindings.cell_opacity(cell_opacity);
  if ($$props.cell_line_width === void 0 && $$bindings.cell_line_width && cell_line_width !== void 0)
    $$bindings.cell_line_width(cell_line_width);
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0)
    $$bindings.wrapper(wrapper);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.toggle_controls_btn === void 0 && $$bindings.toggle_controls_btn && toggle_controls_btn !== void 0)
    $$bindings.toggle_controls_btn(toggle_controls_btn);
  if ($$props.show_vectors === void 0 && $$bindings.show_vectors && show_vectors !== void 0)
    $$bindings.show_vectors(show_vectors);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color_scheme === void 0 && $$bindings.color_scheme && color_scheme !== void 0)
    $$bindings.color_scheme(color_scheme);
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered !== void 0)
    $$bindings.hovered(hovered);
  if ($$props.dragover === void 0 && $$bindings.dragover && dragover !== void 0)
    $$bindings.dragover(dragover);
  if ($$props.allow_file_drop === void 0 && $$bindings.allow_file_drop && allow_file_drop !== void 0)
    $$bindings.allow_file_drop(allow_file_drop);
  if ($$props.tips_modal === void 0 && $$bindings.tips_modal && tips_modal !== void 0)
    $$bindings.tips_modal(tips_modal);
  if ($$props.enable_tips === void 0 && $$bindings.enable_tips && enable_tips !== void 0)
    $$bindings.enable_tips(enable_tips);
  if ($$props.save_json_btn_text === void 0 && $$bindings.save_json_btn_text && save_json_btn_text !== void 0)
    $$bindings.save_json_btn_text(save_json_btn_text);
  if ($$props.save_png_btn_text === void 0 && $$bindings.save_png_btn_text && save_png_btn_text !== void 0)
    $$bindings.save_png_btn_text(save_png_btn_text);
  if ($$props.show_site_labels === void 0 && $$bindings.show_site_labels && show_site_labels !== void 0)
    $$bindings.show_site_labels(show_site_labels);
  if ($$props.atom_labels_style === void 0 && $$bindings.atom_labels_style && atom_labels_style !== void 0)
    $$bindings.atom_labels_style(atom_labels_style);
  if ($$props.bonding_strategy === void 0 && $$bindings.bonding_strategy && bonding_strategy !== void 0)
    $$bindings.bonding_strategy(bonding_strategy);
  if ($$props.bond_color_mode === void 0 && $$bindings.bond_color_mode && bond_color_mode !== void 0)
    $$bindings.bond_color_mode(bond_color_mode);
  if ($$props.bond_color === void 0 && $$bindings.bond_color && bond_color !== void 0)
    $$bindings.bond_color(bond_color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.show_image_atoms === void 0 && $$bindings.show_image_atoms && show_image_atoms !== void 0)
    $$bindings.show_image_atoms(show_image_atoms);
  if ($$props.directional_light === void 0 && $$bindings.directional_light && directional_light !== void 0)
    $$bindings.directional_light(directional_light);
  if ($$props.ambient_light === void 0 && $$bindings.ambient_light && ambient_light !== void 0)
    $$bindings.ambient_light(ambient_light);
  if ($$props.show_full_controls === void 0 && $$bindings.show_full_controls && show_full_controls !== void 0)
    $$bindings.show_full_controls(show_full_controls);
  if ($$props.toggle_fullscreen === void 0 && $$bindings.toggle_fullscreen && toggle_fullscreen !== void 0)
    $$bindings.toggle_fullscreen(toggle_fullscreen);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    set_store_value(element_colors, $element_colors = element_color_schemes[color_scheme], $element_colors);
    visible_buttons = reveal_buttons == true || typeof reveal_buttons == `number` && reveal_buttons < width;
    $$rendered = ` ${structure?.sites ? `<div class="${["structure svelte-1mmac5t", dragover ? "dragover" : ""].join(" ").trim()}"${add_attribute("style", style, 0)} role="region"${add_attribute("this", wrapper, 0)}><section class="${["svelte-1mmac5t", visible_buttons ? "visible" : ""].join(" ").trim()}">  ${enable_tips ? `<button class="info-icon">${slots["tips-icon"] ? slots["tips-icon"]({}) : `ⓘ`}</button>` : ``} <button class="fullscreen-toggle" title="Toggle fullscreen">${slots["fullscreen-toggle"] ? slots["fullscreen-toggle"]({}) : `⛶`}</button> <button class="controls-toggle"${add_attribute("this", toggle_controls_btn, 0)}>${slots["controls-toggle"] ? slots["controls-toggle"]({ controls_open }) : ` ${escape(controls_open ? `Close` : `Controls`)} `}</button></section> ${validate_component(StructureLegend, "StructureLegend").$$render(
      $$result,
      {
        elements: get_elem_amounts(structure),
        tips_modal
      },
      {
        tips_modal: ($$value) => {
          tips_modal = $$value;
          $$settled = false;
        }
      },
      {}
    )} <dialog class="controls svelte-1mmac5t" ${controls_open ? "open" : ""}${add_attribute("this", controls, 0)}><div style="display: flex; align-items: center; gap: 4pt; flex-wrap: wrap;">Show <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", show_atoms, 1)}>
          atoms</label> <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", show_bonds, 1)}>
          bonds</label> <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", show_vectors, 1)}>
          lattice vectors</label> <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", show_image_atoms, 1)}>
          image atoms</label>  <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", show_full_controls, 1)}>
          full controls</label> <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", show_site_labels, 1)}>
          site labels</label> <label class="svelte-1mmac5t"><select class="svelte-1mmac5t"><option value="surface" data-svelte-h="svelte-2irg8s">surface</option><option value="wireframe" data-svelte-h="svelte-mavpry">wireframe</option><option${add_attribute("value", null, 0)} data-svelte-h="svelte-1jd81zj">none</option></select>
          unit cell as</label></div> <hr class="svelte-1mmac5t"> <label class="svelte-1mmac5t">Atom radius
        <small data-svelte-h="svelte-jhuz4e">(Å)</small> <input type="number" min="0.1"${add_attribute("max", 1, 0)}${add_attribute("step", 0.05, 0)} class="svelte-1mmac5t"${add_attribute("value", atom_radius, 0)}> <input type="range" min="0.1"${add_attribute("max", 1, 0)}${add_attribute("step", 0.05, 0)} class="svelte-1mmac5t"${add_attribute("value", atom_radius, 0)}></label> <label class="svelte-1mmac5t"><input type="checkbox" class="svelte-1mmac5t"${add_attribute("checked", same_size_atoms, 1)}> <span data-svelte-h="svelte-1qgldh7">Scale sites according to atomic radii
          <small>(if false, all atoms have same size)</small></span></label> ${show_full_controls && show_cell ? `<hr class="svelte-1mmac5t"> <label class="svelte-1mmac5t">Unit cell opacity
          <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 1, 0)}${add_attribute("step", 0.05, 0)} class="svelte-1mmac5t"${add_attribute("value", cell_opacity, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 1, 0)}${add_attribute("step", 0.05, 0)} class="svelte-1mmac5t"${add_attribute("value", cell_opacity, 0)}></label>` : ``} ${show_bonds ? `<hr class="svelte-1mmac5t"> <label class="svelte-1mmac5t">Bonding strategy
          <select class="svelte-1mmac5t"><option value="max_dist" data-svelte-h="svelte-1py7gbk">Max Distance</option><option value="nearest_neighbor" data-svelte-h="svelte-1u00ljx">Nearest Neighbor</option></select></label> <label class="svelte-1mmac5t">Bond color mode
          <select class="svelte-1mmac5t"><option value="single" data-svelte-h="svelte-mm641a">Single</option><option value="split-midpoint" data-svelte-h="svelte-8dv12f">Split Midpoint</option><option value="gradient" disabled data-svelte-h="svelte-1f2hktf">Gradient (TODO)</option></select></label> ${bond_color_mode === `single` ? `<label class="svelte-1mmac5t">Bond color
            <input type="color" class="svelte-1mmac5t"${add_attribute("value", bond_color, 0)}></label>` : ``} <label class="svelte-1mmac5t">Bond radius
          <input type="number"${add_attribute("min", 1e-3, 0)}${add_attribute("max", 0.1, 0)}${add_attribute("step", 1e-3, 0)} class="svelte-1mmac5t"${add_attribute("value", bond_radius, 0)}> <input type="range" min="0.001" max="0.1"${add_attribute("step", 1e-3, 0)} class="svelte-1mmac5t"${add_attribute("value", bond_radius, 0)}></label>` : ``} <label class="svelte-1mmac5t">Background color
        <input type="color" class="svelte-1mmac5t"${add_attribute("value", background_color, 0)}></label> <hr class="svelte-1mmac5t"> ${show_full_controls ? `<label class="svelte-1mmac5t">Auto rotate speed
          <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", auto_rotate, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", auto_rotate, 0)}></label> <label class="svelte-1mmac5t">Zoom speed
          <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", zoom_speed, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", zoom_speed, 0)}></label> <label class="svelte-1mmac5t">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        text: "pan by clicking and dragging while holding cmd, ctrl or shift"
      },
      {},
      {
        default: () => {
          return `Pan speed`;
        }
      }
    )} <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", pan_speed, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", pan_speed, 0)}></label>  <label class="svelte-1mmac5t">${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        text: "intensity of the directional light"
      },
      {},
      {
        default: () => {
          return `Directional light`;
        }
      }
    )} <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 4, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", directional_light, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 4, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", directional_light, 0)}></label>  <label class="svelte-1mmac5t">${validate_component(Tooltip, "Tooltip").$$render($$result, { text: "intensity of the ambient light" }, {}, {
      default: () => {
        return `Ambient light`;
      }
    })} <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", ambient_light, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 2, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", ambient_light, 0)}></label>  <label class="svelte-1mmac5t">${validate_component(Tooltip, "Tooltip").$$render($$result, { text: "damping factor for rotation" }, {}, {
      default: () => {
        return `Rotation damping`;
      }
    })} <input type="number"${add_attribute("min", 0, 0)}${add_attribute("max", 0.3, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", rotation_damping, 0)}> <input type="range"${add_attribute("min", 0, 0)}${add_attribute("max", 0.3, 0)}${add_attribute("step", 0.01, 0)} class="svelte-1mmac5t"${add_attribute("value", rotation_damping, 0)}></label>` : ``}  <label class="svelte-1mmac5t">Color scheme
        <select class="svelte-1mmac5t">${each(Object.keys(element_color_schemes), (key) => {
      return `<option${add_attribute("value", key, 0)}>${escape(key)}</option>`;
    })}</select></label> <span style="display: flex; gap: 4pt; margin: 3pt 0 0;"><button type="button"${add_attribute("title", save_json_btn_text, 0)} class="svelte-1mmac5t">${escape(save_json_btn_text)}</button> <button type="button"${add_attribute("title", save_png_btn_text, 0)} class="svelte-1mmac5t">${escape(save_png_btn_text)}</button></span></dialog> ${validate_component(Canvas, "Canvas").$$render(
      $$result,
      {
        rendererParameters: { preserveDrawingBuffer: true }
      },
      {},
      {
        default: () => {
          return `${validate_component(StructureScene, "StructureScene").$$render(
            $$result,
            Object_1.assign(
              {},
              {
                structure: show_image_atoms ? get_pbc_image_sites(structure) : structure
              },
              { show_atoms },
              { show_bonds },
              { show_cell },
              { show_vectors },
              $$restProps,
              { cell_opacity },
              { cell_line_width },
              { bond_radius },
              { camera_position },
              { auto_rotate },
              { pan_speed },
              { zoom_speed },
              { bond_color_mode },
              { bond_color },
              { bonding_strategy },
              { rotation_damping },
              { directional_light },
              { ambient_light },
              { atom_radius },
              { same_size_atoms }
            ),
            {
              atom_radius: ($$value) => {
                atom_radius = $$value;
                $$settled = false;
              },
              same_size_atoms: ($$value) => {
                same_size_atoms = $$value;
                $$settled = false;
              }
            },
            {
              "atom-label": () => {
                return `${slots["atom-label"] ? slots["atom-label"]({ slot: "atom-label" }) : `  ${show_site_labels ? `<span class="atom-label svelte-1mmac5t"${add_attribute("style", atom_labels_style, 0)}>${escape(show_site_labels === true ? elem : show_site_labels[elem])}</span>` : ``} `}`;
              }
            }
          )}`;
        }
      }
    )} <div class="bottom-left svelte-1mmac5t">${slots["bottom-left"] ? slots["bottom-left"]({ structure }) : ``}</div></div>` : `${structure ? `<p class="warn svelte-1mmac5t" data-svelte-h="svelte-1ifjfxo">No sites found in structure</p>` : `<p class="warn svelte-1mmac5t" data-svelte-h="svelte-3go39a">No structure provided</p>`}`}`;
  } while (!$$settled);
  $$unsubscribe_element_colors();
  return $$rendered;
});
export {
  Structure as S
};
