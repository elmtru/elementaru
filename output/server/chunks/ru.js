import { d as derived, w as writable } from "./index2.js";
import deepmerge from "deepmerge";
import { IntlMessageFormat } from "intl-messageformat";
function delve(obj, fullKey) {
  if (fullKey == null)
    return void 0;
  if (fullKey in obj) {
    return obj[fullKey];
  }
  const keys = fullKey.split(".");
  let result = obj;
  for (let p = 0; p < keys.length; p++) {
    if (typeof result === "object") {
      if (p > 0) {
        const partialKey = keys.slice(p, keys.length).join(".");
        if (partialKey in result) {
          result = result[partialKey];
          break;
        }
      }
      result = result[keys[p]];
    } else {
      result = void 0;
    }
  }
  return result;
}
const lookupCache = {};
const addToCache = (path, locale, message) => {
  if (!message)
    return message;
  if (!(locale in lookupCache))
    lookupCache[locale] = {};
  if (!(path in lookupCache[locale]))
    lookupCache[locale][path] = message;
  return message;
};
const lookup = (path, refLocale) => {
  if (refLocale == null)
    return void 0;
  if (refLocale in lookupCache && path in lookupCache[refLocale]) {
    return lookupCache[refLocale][path];
  }
  const locales = getPossibleLocales(refLocale);
  for (let i = 0; i < locales.length; i++) {
    const locale = locales[i];
    const message = getMessageFromDictionary(locale, path);
    if (message) {
      return addToCache(path, refLocale, message);
    }
  }
  return void 0;
};
let dictionary;
const $dictionary = writable({});
function getLocaleDictionary(locale) {
  return dictionary[locale] || null;
}
function hasLocaleDictionary(locale) {
  return locale in dictionary;
}
function getMessageFromDictionary(locale, id) {
  if (!hasLocaleDictionary(locale)) {
    return null;
  }
  const localeDictionary = getLocaleDictionary(locale);
  const match = delve(localeDictionary, id);
  return match;
}
function getClosestAvailableLocale(refLocale) {
  if (refLocale == null)
    return void 0;
  const relatedLocales = getPossibleLocales(refLocale);
  for (let i = 0; i < relatedLocales.length; i++) {
    const locale = relatedLocales[i];
    if (hasLocaleDictionary(locale)) {
      return locale;
    }
  }
  return void 0;
}
function addMessages(locale, ...partials) {
  delete lookupCache[locale];
  $dictionary.update((d) => {
    d[locale] = deepmerge.all([d[locale] || {}, ...partials]);
    return d;
  });
}
derived(
  [$dictionary],
  ([dictionary2]) => Object.keys(dictionary2)
);
$dictionary.subscribe((newDictionary) => dictionary = newDictionary);
const queue = {};
function removeLoaderFromQueue(locale, loader) {
  queue[locale].delete(loader);
  if (queue[locale].size === 0) {
    delete queue[locale];
  }
}
function getLocaleQueue(locale) {
  return queue[locale];
}
function getLocalesQueues(locale) {
  return getPossibleLocales(locale).map((localeItem) => {
    const localeQueue = getLocaleQueue(localeItem);
    return [localeItem, localeQueue ? [...localeQueue] : []];
  }).filter(([, localeQueue]) => localeQueue.length > 0);
}
function hasLocaleQueue(locale) {
  if (locale == null)
    return false;
  return getPossibleLocales(locale).some(
    (localeQueue) => {
      var _a;
      return (_a = getLocaleQueue(localeQueue)) == null ? void 0 : _a.size;
    }
  );
}
function loadLocaleQueue(locale, localeQueue) {
  const allLoadersPromise = Promise.all(
    localeQueue.map((loader) => {
      removeLoaderFromQueue(locale, loader);
      return loader().then((partial) => partial.default || partial);
    })
  );
  return allLoadersPromise.then((partials) => addMessages(locale, ...partials));
}
const activeFlushes = {};
function flush(locale) {
  if (!hasLocaleQueue(locale)) {
    if (locale in activeFlushes) {
      return activeFlushes[locale];
    }
    return Promise.resolve();
  }
  const queues = getLocalesQueues(locale);
  activeFlushes[locale] = Promise.all(
    queues.map(
      ([localeName, localeQueue]) => loadLocaleQueue(localeName, localeQueue)
    )
  ).then(() => {
    if (hasLocaleQueue(locale)) {
      return flush(locale);
    }
    delete activeFlushes[locale];
  });
  return activeFlushes[locale];
}
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultFormats = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function defaultMissingKeyHandler({ locale, id }) {
  console.warn(
    `[svelte-i18n] The message "${id}" was not found in "${getPossibleLocales(
      locale
    ).join('", "')}".${hasLocaleQueue(getCurrentLocale()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const defaultOptions = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: defaultFormats,
  warnOnMissingMessages: true,
  handleMissingMessage: void 0,
  ignoreTag: true
};
const options = defaultOptions;
function getOptions() {
  return options;
}
function init(opts) {
  const _a = opts, { formats } = _a, rest = __objRest$1(_a, ["formats"]);
  let initialLocale = opts.fallbackLocale;
  if (opts.initialLocale) {
    try {
      if (IntlMessageFormat.resolveLocale(opts.initialLocale)) {
        initialLocale = opts.initialLocale;
      }
    } catch (e) {
      console.warn(
        `[svelte-i18n] The initial locale "${opts.initialLocale}" is not a valid locale.`
      );
    }
  }
  if (rest.warnOnMissingMessages) {
    delete rest.warnOnMissingMessages;
    if (rest.handleMissingMessage == null) {
      rest.handleMissingMessage = defaultMissingKeyHandler;
    } else {
      console.warn(
        '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
      );
    }
  }
  Object.assign(options, rest, { initialLocale });
  if (formats) {
    if ("number" in formats) {
      Object.assign(options.formats.number, formats.number);
    }
    if ("date" in formats) {
      Object.assign(options.formats.date, formats.date);
    }
    if ("time" in formats) {
      Object.assign(options.formats.time, formats.time);
    }
  }
  return $locale.set(initialLocale);
}
const $isLoading = writable(false);
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
let current;
const internalLocale = writable(null);
function getSubLocales(refLocale) {
  return refLocale.split("-").map((_, i, arr) => arr.slice(0, i + 1).join("-")).reverse();
}
function getPossibleLocales(refLocale, fallbackLocale = getOptions().fallbackLocale) {
  const locales = getSubLocales(refLocale);
  if (fallbackLocale) {
    return [.../* @__PURE__ */ new Set([...locales, ...getSubLocales(fallbackLocale)])];
  }
  return locales;
}
function getCurrentLocale() {
  return current != null ? current : void 0;
}
internalLocale.subscribe((newLocale) => {
  current = newLocale != null ? newLocale : void 0;
  if (typeof window !== "undefined" && newLocale != null) {
    document.documentElement.setAttribute("lang", newLocale);
  }
});
const set = (newLocale) => {
  if (newLocale && getClosestAvailableLocale(newLocale) && hasLocaleQueue(newLocale)) {
    const { loadingDelay } = getOptions();
    let loadingTimer;
    if (typeof window !== "undefined" && getCurrentLocale() != null && loadingDelay) {
      loadingTimer = window.setTimeout(
        () => $isLoading.set(true),
        loadingDelay
      );
    } else {
      $isLoading.set(true);
    }
    return flush(newLocale).then(() => {
      internalLocale.set(newLocale);
    }).finally(() => {
      clearTimeout(loadingTimer);
      $isLoading.set(false);
    });
  }
  return internalLocale.set(newLocale);
};
const $locale = __spreadProps(__spreadValues$1({}, internalLocale), {
  set
});
const monadicMemoize = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  const memoizedFn = (arg) => {
    const cacheKey = JSON.stringify(arg);
    if (cacheKey in cache) {
      return cache[cacheKey];
    }
    return cache[cacheKey] = fn(arg);
  };
  return memoizedFn;
};
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const getIntlFormatterOptions = (type, name) => {
  const { formats } = getOptions();
  if (type in formats && name in formats[type]) {
    return formats[type][name];
  }
  throw new Error(`[svelte-i18n] Unknown "${name}" ${type} format.`);
};
const createNumberFormatter = monadicMemoize(
  (_a) => {
    var _b = _a, { locale, format } = _b, options2 = __objRest(_b, ["locale", "format"]);
    if (locale == null) {
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    }
    if (format) {
      options2 = getIntlFormatterOptions("number", format);
    }
    return new Intl.NumberFormat(locale, options2);
  }
);
const createDateFormatter = monadicMemoize(
  (_c) => {
    var _d = _c, { locale, format } = _d, options2 = __objRest(_d, ["locale", "format"]);
    if (locale == null) {
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    }
    if (format) {
      options2 = getIntlFormatterOptions("date", format);
    } else if (Object.keys(options2).length === 0) {
      options2 = getIntlFormatterOptions("date", "short");
    }
    return new Intl.DateTimeFormat(locale, options2);
  }
);
const createTimeFormatter = monadicMemoize(
  (_e) => {
    var _f = _e, { locale, format } = _f, options2 = __objRest(_f, ["locale", "format"]);
    if (locale == null) {
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    }
    if (format) {
      options2 = getIntlFormatterOptions("time", format);
    } else if (Object.keys(options2).length === 0) {
      options2 = getIntlFormatterOptions("time", "short");
    }
    return new Intl.DateTimeFormat(locale, options2);
  }
);
const getNumberFormatter = (_g = {}) => {
  var _h = _g, {
    locale = getCurrentLocale()
  } = _h, args = __objRest(_h, [
    "locale"
  ]);
  return createNumberFormatter(__spreadValues({ locale }, args));
};
const getDateFormatter = (_i = {}) => {
  var _j = _i, {
    locale = getCurrentLocale()
  } = _j, args = __objRest(_j, [
    "locale"
  ]);
  return createDateFormatter(__spreadValues({ locale }, args));
};
const getTimeFormatter = (_k = {}) => {
  var _l = _k, {
    locale = getCurrentLocale()
  } = _l, args = __objRest(_l, [
    "locale"
  ]);
  return createTimeFormatter(__spreadValues({ locale }, args));
};
const getMessageFormatter = monadicMemoize(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (message, locale = getCurrentLocale()) => new IntlMessageFormat(message, locale, getOptions().formats, {
    ignoreTag: getOptions().ignoreTag
  })
);
const formatMessage = (id, options2 = {}) => {
  var _a, _b, _c, _d;
  let messageObj = options2;
  if (typeof id === "object") {
    messageObj = id;
    id = messageObj.id;
  }
  const {
    values,
    locale = getCurrentLocale(),
    default: defaultValue
  } = messageObj;
  if (locale == null) {
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  }
  let message = lookup(id, locale);
  if (!message) {
    message = (_d = (_c = (_b = (_a = getOptions()).handleMissingMessage) == null ? void 0 : _b.call(_a, { locale, id, defaultValue })) != null ? _c : defaultValue) != null ? _d : id;
  } else if (typeof message !== "string") {
    console.warn(
      `[svelte-i18n] Message with id "${id}" must be of type "string", found: "${typeof message}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    );
    return message;
  }
  if (!values) {
    return message;
  }
  let result = message;
  try {
    result = getMessageFormatter(message, locale).format(values);
  } catch (e) {
    if (e instanceof Error) {
      console.warn(
        `[svelte-i18n] Message "${id}" has syntax error:`,
        e.message
      );
    }
  }
  return result;
};
const formatTime = (t, options2) => {
  return getTimeFormatter(options2).format(t);
};
const formatDate = (d, options2) => {
  return getDateFormatter(options2).format(d);
};
const formatNumber = (n, options2) => {
  return getNumberFormatter(options2).format(n);
};
const getJSON = (id, locale = getCurrentLocale()) => {
  return lookup(id, locale);
};
const $format = derived([$locale, $dictionary], () => formatMessage);
derived([$locale], () => formatTime);
derived([$locale], () => formatDate);
derived([$locale], () => formatNumber);
derived([$locale, $dictionary], () => getJSON);
const Next = "Следующий элемент";
const Previous = "Предыдущий элемент";
const Shell = "Обол.";
const Electrons = "e⁻";
const Orbitals = "e⁻ в орбиталях";
const Density = "Плотность";
const Electronegativity = "Электроотрицательность";
const bohrModel = {
  pre: "Модель Бора (",
  post: ")"
};
const joinSymbol = {
  orbital: ", "
};
const preposition = {
  "in": "в"
};
const electron = {
  orbitalPeriod: "Период (с)"
};
const category = {
  "diatomic nonmetal": "двухатомный неметалл",
  "noble gas": "благородный газ",
  "alkali metal": "щелочной металл",
  "alkaline earth metal": "щёлочноземельный металл",
  metalloid: "полуметалл",
  "polyatomic nonmetal": "многоатомный неметалл",
  "post-transition metal": "постпереходный металл",
  "transition metal": "переходный металл",
  lanthanide: "лантаноид",
  actinide: "актиноид"
};
const phase = {
  title: "Агрегатное состояние",
  Gas: "Газообр.",
  Liquid: "Жидкое",
  Solid: "Твердое"
};
const year = {
  title: "Год открытия",
  unknown: "неизвестен",
  "~5000 BC": "~5000 год до н.э.",
  "~9000 BC": "~9000 год до н.э.",
  "~3000 BC": "~3000 год до н.э.",
  "~3500 BC": "~3500 год до н.э.",
  "~1600 BC": "~1600 год до н.э.",
  "265 BC": "265 год до н.э."
};
const unitsByName = {
  "Å": "Å",
  u: "а. е. м.",
  "g/cm³": "г/см³",
  K: "К",
  eV: "эВ",
  "J/(g K)": "Дж/(г*К)"
};
const units = {
  atomicMass: {
    name: "Атомная масса",
    unit: "а. е. м.",
    tip: "атомная единица массы"
  },
  density: {
    name: "Плотность",
    unit: "г/см³",
    tip: "грамм на кубический сантиметр"
  }
};
const discoveredBy = {
  preAll: " ",
  preName: "Элемент открыл:",
  preYear: "Год открытия:",
  names: {
    "Henry Cavendish": "Генри Кавендиш",
    "Pierre Janssen": "Пьер Жансен",
    "Johan August Arfwedson": "Юхан Август Арфведсон",
    "Louis Vauquelin": "Луи Воклен",
    "Joseph Gay-Lussac": "Жозеф Гей-Люссак",
    "Ancient Egypt": "неизвестно, открыт в Древнем Египте",
    "Daniel Rutherford": "Даниель Резерфорд",
    "Carl Scheele": "Карл Вильгельм Шееле",
    "André-Marie Ampère": "Андре-Мари Ампер",
    "Morris Travers": "Морис Траверс",
    "Humphry Davy": "Гемфри Дэви",
    "Joseph Black": "Жозеф Блэк",
    "Hans Christian Ørsted": "Ханс Кристиан Эрстед",
    "Jöns Jacob Berzelius": "Йёнс Якоб Берцелиус",
    "Hennig Brand": "Хенниг Бранд",
    "Ancient china": "неизвестно, открыт в Древнем Китае",
    "Carl Wilhelm Scheele": "Карл Вильгельм Шееле",
    "Lord Rayleigh": "Лорд Рэйли",
    "Lars Fredrik Nilson": "Ларс Фредрик Нильсон",
    "William Gregor": "Уильям Грегор",
    "Andrés Manuel del Río": "Андрес Мануэль дель Рио",
    "Louis Nicolas Vauquelin": "Луи Николя Воклен",
    "Torbern Olof Bergman": "Торберн Улаф Бергман",
    "5000 BC": "неизвестно",
    "Georg Brandt": "Георг Брандт",
    "Axel Fredrik Cronstedt": "Аксель Фредрик Кронстедт",
    "Middle East": "Ближний Восток",
    India: "неизвестно, открыт в Индии",
    "Lecoq de Boisbaudran": "Лекок де Буабодран",
    "Clemens Winkler": "Клеменс Винклер",
    "Bronze Age": "Альберт Великий",
    "Jöns Berzelius": "Йёнс Якоб Берцелиус",
    "Antoine Balard": "Антуан Балар",
    "William Ramsay": "Уильям Рамзай",
    "Robert Bunsen": "Роберт Бунзен",
    "William Cruickshank": "Уильям Крюйкшенк",
    "Johan Gadolin": "Юхан Гадолин",
    "Martin Klaproth": "Мартин Клапрот",
    "Charles Hatchett": "Карл Хатчетт",
    "Emilio Segrè": "Эмилио Сегре",
    "Karl Ernst Claus": "Карл-Эрнст Клаус",
    "William Wollaston": "Уильям Волластон",
    "before 5000 BC": "неизвестно",
    "Karl Hermann": "Карл Герман",
    "Ferdinand Reich": "Фердинанд Райх",
    "before 3500 BC": "неизвестно",
    "before 3000 BC": "неизвестно",
    "Franz von Reichenstein": "Франц фон Райхенштайн",
    "Bernard Courtois": "Бернар Куртуа",
    "Carl Gustaf Mosander": "Карл Густав Мосандер",
    "Carl Auer von Welsbach": "Карл Ауэр фон Вельсбах",
    "Chien Shiung Wu": "Ву Цзяньсюн",
    "Eugène-Anatole Demarçay": "Эжен-Анатоль Демарсей",
    "Jean de Marignac": "Жан де Мариньяк",
    "Marc Delafontaine": "Марк Делафонтен",
    "Per Teodor Cleve": "Пер Теодор Клеве",
    "Georges Urbain": "Жорж Урбэн",
    "Dirk Coster": "Дирк Костер",
    "Anders Gustaf Ekeberg": "Андерс Густав Экеберг",
    "Masataka Ogawa": "Масатака Огава",
    "Smithson Tennant": "Смитсон Теннант",
    "Antonio de Ulloa": "Антонио де Ульоа",
    "unknown, before 2000 BCE": "неизвестно",
    "William Crookes": "Уильям Крукс",
    "Claude François Geoffroy": "Клод Франсуа Жоффруа",
    "Pierre Curie": "Пьер Кюри",
    "Dale R. Corson": "Дейл Р. Корсон",
    "Friedrich Ernst Dorn": "Фридрих Эрнст Дорн",
    "Marguerite Perey": "Маргарита Перей",
    "Friedrich Oskar Giesel": "Фридрих Оскар Гизель",
    "Jöns Jakob Berzelius": "Йёнс Якоб Берцелиус",
    "Edwin McMillan": "Эдвин Макмиллан",
    "Glenn Seaborg": "Гленн Сиборг",
    "Lawrence Berkeley Laboratory": "Национальная лаборатория им. Лоуренса в Беркли",
    "Joint Institute for Nuclear Research": "Объединённый институт ядерных исследований",
    "Gesellschaft für Schwerionenforschung": "Центр по изучению тяжёлых ионов имени Гельмгольца",
    RIKEN: "RIKEN"
  }
};
const element = {
  name: {
    Lanthanides: "Лантаноиды",
    Actinides: "Актиноиды",
    Hydrogen: "Водород",
    Helium: "Гелий",
    Lithium: "Литий",
    Beryllium: "Бериллий",
    Boron: "Бор",
    Carbon: "Углерод",
    Nitrogen: "Азот",
    Oxygen: "Кислород",
    Fluorine: "Фтор",
    Neon: "Неон",
    Sodium: "Натрий",
    Magnesium: "Магний",
    Aluminium: "Алюминий",
    Silicon: "Кремний",
    Phosphorus: "Фосфор",
    Sulfur: "Сера",
    Chlorine: "Хлор",
    Argon: "Аргон",
    Potassium: "Калий",
    Calcium: "Кальций",
    Scandium: "Скандий",
    Titanium: "Титан",
    Vanadium: "Ванадий",
    Chromium: "Хром",
    Manganese: "Марганец",
    Iron: "Железо",
    Cobalt: "Кобальт",
    Nickel: "Никель",
    Copper: "Медь",
    Zinc: "Цинк",
    Gallium: "Галлий",
    Germanium: "Германий",
    Arsenic: "Мышьяк",
    Selenium: "Селен",
    Bromine: "Бром",
    Krypton: "Криптон",
    Rubidium: "Рубидий",
    Strontium: "Стронций",
    Yttrium: "Иттрий",
    Zirconium: "Цирконий",
    Niobium: "Ниобий",
    Molybdenum: "Молибден",
    Technetium: "Технеций",
    Ruthenium: "Рутений",
    Rhodium: "Родий",
    Palladium: "Палладий",
    Silver: "Серебро",
    Cadmium: "Кадмий",
    Indium: "Индий",
    Tin: "Олово",
    Antimony: "Сурьма",
    Tellurium: "Теллур",
    Iodine: "Иод",
    Xenon: "Ксенон",
    Cesium: "Цезий",
    Barium: "Барий",
    Lanthanum: "Лантан",
    Cerium: "Церий",
    Praseodymium: "Празеодим",
    Neodymium: "Неодим",
    Promethium: "Прометий",
    Samarium: "Самарий",
    Europium: "Европий",
    Gadolinium: "Гадолиний",
    Terbium: "Тербий",
    Dysprosium: "Диспрозий",
    Holmium: "Гольмий",
    Erbium: "Эрбий",
    Thulium: "Тулий",
    Ytterbium: "Иттербий",
    Lutetium: "Лютеций",
    Hafnium: "Гафний",
    Tantalum: "Тантал",
    Tungsten: "Вольфрам",
    Rhenium: "Рений",
    Osmium: "Осмий",
    Iridium: "Иридий",
    Platinum: "Платина",
    Gold: "Золото",
    Mercury: "Ртуть",
    Thallium: "Таллий",
    Lead: "Свинец",
    Bismuth: "Висмут",
    Polonium: "Полоний",
    Astatine: "Астат",
    Radon: "Радон",
    Francium: "Франций",
    Radium: "Радий",
    Actinium: "Актиний",
    Thorium: "Торий",
    Protactinium: "Протактиний",
    Uranium: "Уран",
    Neptunium: "Нептуний",
    Plutonium: "Плутоний",
    Americium: "Амерций",
    Curium: "Кюрий",
    Berkelium: "Берклий",
    Californium: "Калифорний",
    Einsteinium: "Эйнштейний",
    Fermium: "Фермий",
    Mendelevium: "Менделевий",
    Nobelium: "Нобелий",
    Lawrencium: "Лоуренсий",
    Rutherfordium: "Резерфордий",
    Dubnium: "Дубний",
    Seaborgium: "Сиборгий",
    Bohrium: "Борий",
    Hassium: "Хассий",
    Meitnerium: "Мейтнерий",
    Darmstadtium: "Дармштадтий",
    Roentgenium: "Рентгений",
    Copernicum: "Коперниций",
    Nihonium: "Нихоний",
    Flerovium: "Флеровий",
    Moscovium: "Московий",
    Livermorium: "Ливерморий",
    Tennessine: "Теннессин",
    Oganesson: "Оганесон"
  }
};
const summary = {
  Hydrogen: "Водород - химический элемент с символом H и атомным номером 1. С атомным весом 1,00794 а. е. м. водород является самым легким элементом в периодической таблице. Его одноатомная форма (H) является самым распространенным химическим веществом во Вселенной, составляя примерно 75 % всей барионной массы.",
  Helium: "Гелий - химический элемент с символом He и атомным номером 2. Это бесцветный, без запаха, без вкуса, нетоксичный, инертный, одноатомный газ, возглавляющий группу благородных газов в периодической таблице. Его температуры кипения и плавления самые низкие среди всех элементов.",
  Lithium: "Литий (от греч. λίθος (lithos) - «камень») - химический элемент с символом Li и атомным номером 3. Это мягкий серебристо-белый металл, принадлежащий к группе щелочных металлов. В стандартных условиях это самый легкий металл и наименее плотный твердый элемент.",
  Beryllium: "Бериллий - химический элемент с символом Be и атомным номером 4. Он образуется в результате звездного нуклеосинтеза и является относительно редким элементом во Вселенной. Это двухвалентный элемент, который встречается в природе только в сочетании с другими элементами в минералах.",
  Boron: "Бор - полуметалл с символом B и атомным номером 5. Он образуется исключительно внутри сверхновых или при расщеплении атомов космическими лучами, поэтому его мало как в Солнечной системе, так и в земной коре. На Земле его наиболее распространенные природные соединения - бораты.",
  Carbon: "Углерод - химический элемент с символом C и атомным номером 6. Является четырехвалентным неметаллом. Способность углерода образовывать полимерные цепочки порождает огромный класс соединений на основе углерода, называемых органическими, которых значительно больше, чем неорганических, и изучением которых занимается органическая химия.",
  Nitrogen: "Азот - химический элемент с символом N и атомным номером 7. Он является самым легким пниктогеном и при комнатной температуре представляет собой прозрачный двухатомный газ без запаха. Азот - распространенный элемент во Вселенной, его общее содержание в Млечном Пути и Солнечной системе оценивается примерно в седьмую часть.",
  Oxygen: "Кислород - химический элемент с символом O и атомным номером 8. Он входит в группу халькогенов в периодической таблице и является активным неметаллом и окислителем, который легко образует соединения (в частности, оксиды) с большинством элементов. По массе кислород является третьим по распространенности элементом во Вселенной после водорода и гелия.",
  Fluorine: "Фтор - химический элемент с символом F и атомным номером 9. Он является самым легким галогеном и при стандартных условиях существует как высокотоксичный бледно-желтый двухатомный газ. Будучи самым электроотрицательным элементом, он чрезвычайно активен: почти все другие элементы, включая некоторые благородные газы, образуют соединения с фтором.",
  Neon: "Неон - химический элемент с символом Ne и атомным номером 10. Он входит в группу 18 (благородные газы) периодической таблицы. При стандартных условиях неон - бесцветный, без запаха, инертный одноатомный газ, плотность которого составляет около двух третей плотности воздуха.",
  Sodium: "Натрий - химический элемент с символом Na и атомным номером 11. Это мягкий, серебристо-белый, активный металл. В Периодической таблице он находится в 1 группе (щелочные металлы). Как и другие элементы 1 группы, он имеет один электрон во внешней оболочке, который он легко отдает, становясь положительно заряженным ионом - катионом.",
  Magnesium: "Магний - химический элемент с символом Mg и атомным номером 12. Это блестящее серое твердое вещество, которое имеет близкое физическое сходство с другими пятью элементами из второй группы (щелочноземельные металлы) периодической таблицы: у каждого из них одинаковая электронная конфигурация валентной электронной оболочки, что приводит к схожей кристаллической структуре. Магний - девятый по распространенности элемент во Вселенной.",
  Aluminium: "Алюминий - химический элемент подгруппы бора с символом Al и атомным номером 13. Это серебристо-белый, мягкий, немагнитный, ковкий металл. Алюминий - третий по распространенности элемент (после кислорода и кремния) и самый распространенный металл в земной коре.",
  Silicon: "Кремний - химический элемент с символом Si и атомным номером 14. Это четырехвалентный полуметалл, более активный, чем германий - полуметалл, расположенный непосредственно под ним в таблице. В аморфной форме кремний — это коричневый порошок, в кристаллической — тёмно-серый, слегка блестящий полуметалл, являющийся вторым по распространённости химическим элементом в земной коре (после кислорода).",
  Phosphorus: "Фосфор - химический элемент с символом P и атомным номером 15. Как элемент фосфор существует в двух основных формах - белый фосфор и красный фосфор, но из-за своей высокой активности фосфор никогда не встречается на Земле в чистом виде. Вместо этого фосфорсодержащие минералы присутствуют в почти всегда максимально окисленном состоянии в виде неорганических фосфатных пород.",
  Sulfur: "Сера - химический элемент с символом S и атомным номером 16. Это распространенный многовалентный неметалл. При нормальных условиях атомы серы образуют циклические восьмиатомные молекулы с химической формулой S8.",
  Chlorine: "Хлор - химический элемент с символом Cl и атомным номером 17. Его относительная атомная масса составляет 35,5. Хлор входит в группу галогенов и является вторым по легкости галогеном после фтора.",
  Argon: "Аргон - химический элемент с символом Ar и атомным номером 18. Он входит в группу 18 периодической таблицы и является благородным газом. Аргон - третий по распространенности газ в атмосфере Земли, он составляет 0,934% ее объема.",
  Potassium: "Калий - химический элемент с символом K и атомным номером 19. В Периодической таблице калий - один из семи щелочных металлов: все они имеют один валентный электрон во внешней электронной оболочке, который они легко отдают, становясь ионом с положительным зарядом - катионом, и соединяются с анионами, образуя соли.",
  Calcium: "Кальций - химический элемент с символом Ca и атомным номером 20. Кальций - мягкий серый щелочноземельный металл, пятый по массе элемент в земной коре. Ион Ca2+ также является пятым по молярности и массе растворенным ионом в морской воде после натрия, хлорида, магния и сульфата.",
  Scandium: "Скандий - химический элемент с символом Sc и атомным номером 21. Серебристо-белый металлический элемент d-блока, иногда он исторически классифицируется как редкоземельный элемент, наряду с иттрием и лантаноидами. Он был открыт в 1879 году путем спектрального анализа минералов эвксенита и гадолинита из Скандинавии.",
  Titanium: "Титан - химический элемент с символом Ti и атомным номером 22. Это блестящий переходный металл серебристого цвета, обладающий низкой плотностью и высокой прочностью. Он обладает высокой устойчивостью к коррозии в морской воде, царской водке и хлоре.",
  Vanadium: "Ванадий - химический элемент с символом V и атомным номером 23. Это твердый, серебристо-серый и ковкий переходный металл. В природе элемент встречается только в соединениях, если его выделить искусственно, то на его поверхности образуется оксидная пленка.",
  Chromium: "Хром - химический элемент с символом Cr и атомным номером 24. Это серый, блестящий, твердый и хрупкий металл, который хорошо поддается полировке и имеет высокую температуру плавления.",
  Manganese: "Марганец - химический элемент с символом Mn и атомным номером 25. В природе он не встречается в чистом виде. Марганец встречается в соединениях с железом и в минералах. В промышленности используется для получения различных сплавов и нержавеющей стали.",
  Iron: "Железо - химический элемент с символом Fe (от лат. ferrum) и атомным номером 26. Это ковкий переходный металл серебристо-белого цвета с высокой химической реакционной способностью. По массе это самый распространенный элемент на Земле, из него состоит большая часть внешнего и внутреннего ядра Земли.",
  Cobalt: "Кобальт - химический элемент с символом Co и атомным номером 27. Как и никель, кобальт в земной коре встречается только в химических соединениях. Простое вещество, получаемое восстановительной плавкой, представляет собой твердый блестящий серебристо-серый металл.",
  Nickel: "Никель - химический элемент с символом Ni и атомным номером 28. Это серебристо-белый блестящий металл с легким золотистым оттенком. Никель относится к переходным металлам, он твердый и ковкий.",
  Copper: "Медь - химический элемент с символом Cu (от лат. cuprum) и атомным номером 29. Это мягкий, ковкий и пластичный металл с очень высокой тепло- и электропроводностью.",
  Zinc: "Цинк - химический элемент с символом Zn и атомным номером 30. Он является первым элементом 12-й группы периодической таблицы. В некоторых отношениях цинк химически схож с магнием: их ионы имеют схожий размер, а их степени окисления - +2.",
  Gallium: "Галлий - химический элемент с символом Ga и атомным номером 31. В природе галлий встречается не в чистом виде, а в виде соединений галлия(III), которые в незначительном количестве содержатся в цинковых рудах и в бокситах. Галлий - мягкий серебристый металл, он плавится при 29,76 °C.",
  Germanium: "Германий - химический элемент с символом Ge и атомным номером 32. Это блестящий, твердый, серовато-белый полуметалл из подгруппы углерода, химически схожий с другими элементами этой подгруппы - оловом и кремнием. Чистый германий является полупроводником и по внешнему виду похож на кремний.",
  Arsenic: "Мышьяк - химический элемент с символом As и атомным номером 33. Мышьяк встречается во многих минералах, обычно в сочетании с серой и металлами, а также в виде чистых кристаллов. Мышьяк является полуметаллом.",
  Selenium: "Селен - химический элемент с символом Se и атомным номером 34. Свойства этого неметалла схожими со свойствами соседних элементов серы и теллура. В природе он редко встречается в виде простого вещества.",
  Bromine: "Бром (от древнегреческого βρῶμος, brómos, что означает «зловоние») - химический элемент с символом Br и атомным номером 35. Является галогеном. Элемент был выделен независимо друг от друга двумя химиками, Карлом Якобом Лёвихом и Антуаном Жеромом Баларом, в 1825-1826 годах.",
  Krypton: "Криптон (от греч. κρυπτός (kryptos) - «скрытый») - химический элемент с символом Kr и атомным номером 36. Входит в 18 группу элементов (благородные газы). Бесцветный, без запаха и вкуса инертный газ, криптон встречается в атмосфере в незначительных количествах, выделяется путем фракционной перегонки сжиженного воздуха и часто используется вместе с другими редкими газами в люминесцентных лампах.",
  Rubidium: "Рубидий - химический элемент с символом Rb и атомным номером 37. Рубидий - мягкий, серебристо-белый металлический элемент из группы щелочных металлов с атомной массой 85,4678. В виде простого вещества рубидий обладает высокой реакционной способностью, а также обладает свойствами, схожими с другими щелочными металлами, например, очень быстро окисляется на воздухе.",
  Strontium: "Стронций - химический элемент с символом Sr и атомным номером 38. Щелочноземельный металл, стронций представляет собой мягкий серебристо-белый или желтоватый металлический элемент, обладающий высокой активностью. При контакте с воздухом металл желтеет.",
  Yttrium: "Иттрий - химический элемент с символом Y и атомным номером 39. Это серебристо-металлический переходный металл, химически схожий с лантаноидами, и его часто классифицируют как «редкоземельный элемент». Иттрий почти всегда встречается в сочетании с лантаноидами в редкоземельных минералах и никогда не встречается в природе в чистом виде.",
  Zirconium: "Цирконий - химический элемент с символом Zr и атомным номером 40. Название циркония происходит от минерала циркона, а само слово «циркон» происходит от персидского слова زرگون (zargun), означающего «золотой цвет».",
  Niobium: "Ниобий, ранее колумбий, - химический элемент с символом Nb (ранее Cb) и атомным номером 41. Это мягкий, серый, ковкий переходный металл, который часто встречается в минерале пирохлоре, основном промышленном источнике ниобия, и колумбите. Название происходит из греческой мифологии: он был назван в честь Ниобы, дочери Тантала, поскольку этот металл очень похож на тантал.",
  Molybdenum: "Молибден - химический элемент с символом Mo и атомным номером 42. Название происходит от латинского molybdaenum, от древнегреческого Μόλυβδος (molybdos), что означает «свинец», поскольку его руды путали со свинцовыми рудами. Минералы молибдена были известны на протяжении всей истории человечества, но сам элемент был открыт (в смысле выделения его как нового элемента из минеральных солей других металлов) в 1778 году Карлом Вильгельмом Шееле.",
  Technetium: "Технеций - химический элемент с символом Tc и атомным номером 43. Это элемент с самым низким атомным номером в периодической таблице, не имеющий стабильных изотопов: все его формы радиоактивны. Почти весь технеций производится с помощью синтеза, и лишь незначительные количества встречаются в природе.",
  Ruthenium: "Рутений - химический элемент с символом Ru и атомным номером 44. Это редкий переходный металл, входящий в платиновую группу периодической таблицы. Как и другие металлы платиновой группы, рутений не реагирует с большинством химических веществ.",
  Rhodium: "Родий - химический элемент с символом Rh и атомным номером 45. Это редкий, серебристо-белый, твердый и химически инертный переходный металл. Входит в состав платиновой группы.",
  Palladium: "Палладий - химический элемент с символом Pd и атомным номером 46. Это редкий и блестящий серебристо-белый металл, открытый в 1803 году Уильямом Хайдом Волластоном. Он назвал его в честь астероида Паллада, который сам был назван в честь эпитета греческой богини Афины.",
  Silver: "Серебро - химический элемент с символом Ag (греч. άργυρος (árguros), лат. argentum, оба от индоевропейского корня *h₂erǵ- - «серый» или «блестящий») и атомным номером 47. Серебро - мягкий, белый, блестящий переходный металл, обладает самой высокой электропроводностью, теплопроводностью и отражательной способностью среди всех металлов. Металл встречается в природе в чистом виде (самородное серебро), в виде сплавов с золотом и другими металлами, а также в минералах, таких как аргентит и кераргирит.",
  Cadmium: "Кадмий - химический элемент с символом Cd и атомным номером 48. Этот мягкий, голубовато-белый металл химически схож с двумя другими стабильными металлами 12-й группы - цинком и ртутью. Как и цинк, он почти всегда имеет степень окисления +2 в большинстве своих соединений и, как ртуть, имеет низкую температуру плавления по сравнению с переходными металлами.",
  Indium: "Индий - химический элемент с символом In и атомным номером 49. Это постпереходный металлический элемент, который редко встречается в земной коре. Металл очень мягкий, ковкий и легкоплавкий, с температурой плавления выше, чем у натрия, но ниже, чем у лития или олова.",
  Tin: "Олово - химический элемент с символом Sn (от лат. stannum) и атомным номером 50. Входит в 14-ю группу периодической таблицы. Олово имеет химическое сходство с соседними элементами 14 группы, германием и свинцом, и имеет два возможные степени окисления: +2 и чуть более стабильную +4.",
  Antimony: "Сурьма - химический элемент с символом Sb (от лат. stibium) и атомным номером 51. Полуметалл блестящего серого цвета, в природе встречается в основном в виде сульфидного минерала антимонита (Sb2S3). Соединения сурьмы были известны с древних времен и использовались в косметике; была известна и металлическая сурьма, но при открытии ее ошибочно определили как свинец.",
  Tellurium: "Теллур - химический элемент с символом Te и атомным номером 52. Это хрупкий, слаботоксичный, редкий серебристо-белый полуметалл. Теллур химически схож с селеном и серой.",
  Iodine: "Иод - химический элемент с символом I и атомным номером 53. Название происходит от греческого ἰοειδής (ioeidēs), что означает «фиолетовый» или «пурпурный», из-за цвета паров йода. Иод и его соединения используются в основном в питании и в промышленности при производстве уксусной кислоты и некоторых полимеров.",
  Xenon: "Ксенон - химический элемент с символом Xe и атомным номером 54. Это бесцветный, плотный инертный газ без запаха, который встречается в атмосфере Земли в незначительных количествах. Несмотря на то, что ксенон в целом неактивен, он может вступать в некоторые химические реакции, например, образовывать гексафторплатинат ксенона - первое синтезированное соединение благородного газа.",
  Cesium: "Цезий - химический элемент с символом Cs и атомным номером 55. Это мягкий, серебристо-золотистый щелочной металл с температурой плавления 28 °C, что делает его одним из пяти металлов, которые находятся в жидком состоянии при комнатной температуре или около нее. Цезий - щелочной металл, по физическим и химическим свойствам схожий с рубидием и калием.",
  Barium: "Барий - химический элемент с символом Ba и атомным номером 56. Это пятый элемент 2 группы, мягкий серебристый щелочноземельный металл. Из-за своей высокой активности барий никогда не встречается в природе в чистом виде.",
  Lanthanum: "Лантан - мягкий, ковкий, серебристо-белый металлический химический элемент с символом La и атомным номером 57. Он быстро тускнеет под воздействием воздуха и достаточно мягок, чтобы его можно было резать ножом. Он дал название семейству лантаноидов, 15 подобным элементам между лантаном и лютецием в периодической таблице. Его также иногда считают первым элементом переходных металлов 6 периода.",
  Cerium: "Церий - химический элемент с символом Ce и атомным номером 58. Это мягкий, серебристый, ковкий металл, который легко окисляется на воздухе. Церий был назван в честь карликовой планеты Цереры (названной в честь римской богини плодородия).",
  Praseodymium: "Празеодим - химический элемент с символом Pr и атомным номером 59. Празеодим - мягкий, серебристый, ковкий и пластичный металл из семейства лантаноидов. Он ценится за свои магнитные, электрические, химические и оптические свойства.",
  Neodymium: "Неодим - химический элемент с символом Nd и атомным номером 60. Это мягкий серебристый металл, который тускнеет на воздухе. Неодим был открыт в 1885 году австрийским химиком Карлом Ауэром фон Вельсбахом.",
  Promethium: "Прометий - химический элемент с символом Pm и атомным номером 61. Все его изотопы радиоактивны; он и технеций - единственные элементы, за которыми в периодической таблице следуют элементы со стабильными формами. Химически прометий - это лантаноид, который образует соли при соединении с другими элементами.",
  Samarium: "Самарий - химический элемент с символом Sm и атомным номером 62. Это умеренно твердый серебристый металл, который легко окисляется на воздухе. Являясь типичным представителем семейства лантаноидов, самарий обычно имеет степень окисления +3.",
  Europium: "Европий - химический элемент с символом Eu и атомным номером 63. Он был выделен в 1901 году. Это умеренно твердый серебристый металл, который легко окисляется на воздухе и в воде.",
  Gadolinium: "Гадолиний - химический элемент с символом Gd и атомным номером 64. Это серебристо-белый, ковкий и пластичный редкоземельный металл. В природе встречается только в виде соединений (солей).",
  Terbium: "Тербий - химический элемент с символом Tb и атомным номером 65. Это серебристо-белый редкоземельный металл, ковкий и достаточно мягкий, чтобы его можно было резать ножом. Тербий не встречается в природе в чистом виде, но содержится во многих минералах, включая церит, гадолинит, монацит, ксенотим и эвксенит.",
  Dysprosium: "Диспрозий - химический элемент с символом Dy и атомным номером 66. Это редкоземельный элемент с серебристым металлическим блеском. Диспрозий никогда не встречается в природе в чистом виде, хотя его можно обнаружить в различных минералах, например в ксенотиме.",
  Holmium: "Гольмий - химический элемент с символом Ho и атомным номером 67. Входящий в семейство лантаноидов, гольмий является редкоземельным элементом. Гольмий был открыт шведским химиком Пером Теодором Клеве. Независимо от него его также открыл Жак-Луи Соре вместе с Марком Делафонтеном.",
  Erbium: "Эрбий - химический элемент из семейства лантаноидов с символом Er и атомным номером 68. Эрбий, представляющий собой серебристо-белый твердый металл, на Земле всегда встречается в химических соединениях. Он является редкоземельным элементом, наряду ещё с тремя химическими элементами (тербий, иттербий, иттрий) получил название в честь села Иттербю в Швеции.",
  Thulium: "Тулий - химический элемент с символом Tm и атомным номером 69. Это тринадцатый элемент в семействе лантаноидов. Как и у других лантаноидов, наиболее распространенная степень окисления - +3, она наблюдается в его оксидах, галогенидах и других соединениях.",
  Ytterbium: "Иттербий - химический элемент с символом Yb и атомным номером 70. Он является четырнадцатым и предпоследним элементом в семействе лантаноидов, что обуславливает относительную стабильность его степени окисления +2. Однако, как и у других лантаноидов, его наиболее распространенная степень окисления - +3, наблюдаемая в его оксидах, галогенидах и других соединениях.",
  Lutetium: "Лютеций - химический элемент с символом Lu и атомным номером 71. Это серебристо-белый металл, который противостоит коррозии в сухом, но не во влажном воздухе. Он считается первым элементом переходных металлов 6 периода и последним элементом в семействе лантаноидов, а также традиционно причисляется к редкоземельным металлам.",
  Hafnium: "Гафний - химический элемент с символом Hf и атомным номером 72. Блестящий, серебристо-серый, четырехвалентный переходный металл, гафний химически похож на цирконий и встречается в циркониевых минералах. Его существование было предсказано Дмитрием Менделеевым в 1869 году, но идентифицирован он был только в 1923 году, став предпоследним открытым стабильным элементом (рений был идентифицирован двумя годами позже).",
  Tantalum: "Тантал - химический элемент с символом Ta и атомным номером 73. Его название происходит от имени Тантала из греческой мифологии. Тантал - редкий, твердый, сине-серый, блестящий переходный металл, он устойчив к коррозии.",
  Tungsten: "Вольфрам - это химический элемент с символом W и атомным номером 74. При нормальных условиях вольфрам — твёрдый, тяжёлый блестящий металл серебристо-серого цвета. Обладает немного более высокой плотностью, чем металлический уран. Вольфрам — самый тугоплавкий из металлов. Относится к переходным металлам.",
  Rhenium: "Рений - химический элемент с символом Re и атомным номером 75. Это серебристо-белый, тяжелый, переходный металл в 7-й группе периодической таблицы. Со средней концентрацией 1 часть на миллиард рений является одним из самых редких элементов в земной коре.",
  Osmium: "Осмий (от греч. osme (ὀσμή) - «запах») - химический элемент с символом Os и атомным номером 76. Это твердый, хрупкий, серебристо-белый с голубоватым отливом переходный металл из платиновой группы, который встречается в незначительных количествах в сплавах, в основном в платиновых рудах. Осмий - самый плотный из встречающихся в природе элементов, его плотность составляет 22,59 г/см^3.",
  Iridium: "Иридий - химический элемент с символом Ir и атомным номером 77. Очень твердый, хрупкий, серебристо-белый переходный металл платиновой группы, иридий обычно считается вторым по плотности элементом (после осмия) на основе измеренной плотности, хотя расчеты с использованием пространственных решеток элементов показывают, что иридий плотнее. Он также является самым коррозионностойким металлом, даже при температурах до 2000 °C. Только некоторые расплавленные соли и галогены вызывают коррозию твердого иридия, мелкодисперсная иридиевая пыль гораздо более реакционноспособна и может быть огнеопасной.",
  Platinum: "Платина - химический элемент с символом Pt и атомным номером 78. Это плотный, ковкий, неактивный, драгоценный, серо-белый переходный металл. Его название происходит от испанского «platina», что дословно переводится как «маленькое серебро».",
  Gold: "Золото - химический элемент с символом Au (от лат. aurum) и атомным номером 79. В чистом виде это яркий, желтый, плотный, мягкий, ковкий и пластичный металл. С химической точки зрения золото является переходным металлом и элементом 11-й группы.",
  Mercury: "Ртуть - химический элемент с символом Hg и атомным номером 80. Тяжелый, серебристый элемент d-блока, ртуть - единственный металл, который находится в жидком состоянии при стандартных условиях температуры и давления; единственный другой элемент, который находится в жидком состоянии при этих условиях, - бром, хотя такие металлы, как цезий, галлий и рубидий, плавятся чуть выше комнатной температуры.",
  Thallium: "Таллий - химический элемент с символом Tl и атомным номером 81. Этот мягкий серый постпереходный металл не встречается в природе в чистом виде. Он похож на олово, но при контакте с воздухом обесцвечивается.",
  Lead: "Свинец - химический элемент группы углерода с символом Pb (от лат. plumbum) и атомным номером 82. Свинец - мягкий, ковкий и тяжелый постпереходный металл. Металлический свинец имеет голубовато-белый цвет после свежего среза, но при контакте с воздухом он вскоре тускнеет до сероватого цвета.",
  Bismuth: "Висмут - химический элемент с символом Bi и атомным номером 83. Висмут - пятивалентный постпереходный металл, по химическим свойствам напоминающий мышьяк и сурьму. Встречается в природе как простое вещество, а руды, содержащие его сульфиды и оксиды, имеют важное значение для промышленности.",
  Polonium: "Полоний - химический элемент с символом Po и атомным номером 84, открытый в 1898 году Марией Кюри и Пьером Кюри. Редкий и высокорадиоактивный элемент, не имеющий стабильных изотопов, полоний химически схож с висмутом и теллуром и встречается в урановых рудах. Области применения полония немногочисленны.",
  Astatine: "Астат - очень редкий радиоактивный химический элемент с химическим символом At и атомным номером 85. Он встречается на Земле как продукт распада различных более тяжелых элементов. Все его изотопы короткоживущие; самый стабильный - астат-210, период полураспада которого составляет 8,1 часа.",
  Radon: "Радон - химический элемент с символом Rn и атомным номером 86. Это радиоактивный, бесцветный, без запаха и вкуса благородный газ, встречающийся в природе как продукт распада радия. Период полураспада его наиболее стабильного изотопа 222Rn составляет 3,8 дня.",
  Francium: "Франций - химический элемент с символом Fr и атомным номером 87. Раньше он был известен как эка-цезий и актиний К. Это второй наименее электроотрицательный элемент, уступающий только цезию. Франций - высокорадиоактивный металл, который распадается на астат, радий и радон.",
  Radium: "Радий - химический элемент с символом Ra и атомным номером 88. Он является шестым элементом во второй группе периодической таблицы, также известной как щелочноземельные металлы. Чистый радий почти бесцветен, но при контакте с воздухом он легко соединяется с азотом (а не с кислородом), образуя черный поверхностный слой нитрида радия (Ra3N2).",
  Actinium: "Актиний - радиоактивный химический элемент с символом Ac и атомным номером 89, который был открыт в 1899 году. Он стал первым выделенным радиоактивным элементом, который не существовал на Земли во время ее формирования. Полоний, радий и радон были замечены раньше актиния, но их выделили только в 1902 году.",
  Thorium: "Торий - химический элемент с символом Th и атомным номером 90. Торий - радиоактивный металл, актиноид, один из двух сильнорадиоактивных элементов, которые до сих пор встречаются в природе в больших количествах и которые существовали на Земле с момента ее формирования (второй - уран). Он был открыт в 1828 году норвежским минералогом-любителем Мортеном Тране Эсмарком и идентифицирован шведским химиком Йёнсом Якобом Берцелиусом, который назвал его в честь бога грома Тора.",
  Protactinium: "Протактиний - химический элемент с символом Pa и атомным номером 91. Это плотный серебристо-серый металл, который легко вступает в реакцию с кислородом, водяным паром и неорганическими кислотами. Он образует различные химические соединения, в которых протактиний обычно имеет степень окисления +5, но также он может иметь и степени +4, +3 или +2.",
  Uranium: "Уран - химический элемент с символом U и атомным номером 92. Это серебристо-белый металл в семействе актиноидов периодической таблицы. Атом урана имеет 92 протона и 92 электрона, из которых 6 - валентные электроны.",
  Neptunium: "Нептуний - химический элемент с символом Np и атомным номером 93. Нептуний - радиоактивный актиноид, металл серебристо-белого цвета, первый трансурановый элемент. Его расположение в периодической таблице сразу после урана, названного в честь планеты Уран, привело к тому, что он был назван в честь Нептуна, следующей планеты за Ураном.",
  Plutonium: "Плутоний - трансурановый радиоактивный химический элемент с символом Pu и атомным номером 94. Это металл-актиноид серебристо-серого цвета, который при контакте с воздухом образует тусклое покрытие. Элемент имеет семь аллотропных модификаций и принимает степени окисления от +2 до +7.",
  Americium: "Америций - радиоактивный трансурановый химический элемент с символом Am и атомным номером 95. Этот представитель семейства актиноидов находится в периодической таблице под лантаноидным элементом европием, и поэтому по аналогии был назван в честь Америки. Впервые америций был получен в 1944 году группой Гленна Т. Сиборга из Беркли, штат Калифорния, в металлургической лаборатории Чикагского университета.",
  Curium: "Кюрий - трансурановый радиоактивный химический элемент с символом Cm и атомным номером 96. Этот элемент семейства актиноидов был назван в честь Марии и Пьера Кюри - они были известны своими исследованиями в области радиоактивности. Впервые кюрий был намеренно получен и идентифицирован в июле 1944 года группой Гленна Т. Сиборга в Калифорнийском университете в Беркли.",
  Berkelium: "Берклий - трансурановый радиоактивный химический элемент с символом Bk и атомным номером 97. Он относится к семейству актиноидов и трансурановых элементов. Назван в честь города Беркли, штат Калифорния, где находится радиационная лаборатория Калифорнийского университета, в которой он был открыт в декабре 1949 года.",
  Californium: "Калифорний - радиоактивный металлический химический элемент с символом Cf и атомным номером 98. Впервые элемент был получен в 1950 году в Радиационной лаборатории Калифорнийского университета в Беркли путем бомбардировки кюрия альфа-частицами (ионами гелия-4). Он является актиноидом, шестым синтезированным трансурановым элементом и имеет вторую по величине атомную массу среди всех элементов, которые были получены в количествах, достаточно больших для наблюдения невооруженным глазом (после эйнштейния).",
  Einsteinium: "Эйнштейний - искусственный элемент с символом Es и атомным номером 99. Он является седьмым трансурановым элементом и актиноидом. Эйнштейний был обнаружен в составе обломков первой водородной бомбы в 1952 году и назван в честь Альберта Эйнштейна.",
  Fermium: "Фермий - искусственный элемент с символом Fm и атомным номером 100. Он входит в семейство актиноидов. Это самый тяжелый элемент, который может образоваться в результате нейтронной бомбардировки более легких элементов, и, следовательно, последний элемент, который может быть получен в макроскопических количествах, хотя чистый металлический фермий еще не был получен.",
  Mendelevium: "Менделевий - искусственный элемент с химическим символом Md (ранее - Mv) и атомным номером 101. Металлический радиоактивный трансурановый элемент в семействе актиноидов, он является первым элементом, который в настоящее время не может быть получен в макроскопических количествах путем нейтронной бомбардировки более легких элементов. Он является девятым трансурановым элементом.",
  Nobelium: "Нобелий - искусственный химический элемент с символом No и атомным номером 102. Назван в честь Альфреда Нобеля, изобретателя динамита и филантропа. Является радиоактивным металлом, десятым трансурановым элементом и предпоследним членом семейства актиноидов",
  Lawrencium: "Лоуренсий - искусственный химический элемент с химическим символом Lr (ранее Lw) и атомным номером 103. Он назван в честь Эрнеста Лоуренса, изобретателя циклотрона, прибора, с помощью которого были открыты многие искусственные радиоактивные элементы. Лоуренсий - радиоактивный металл, он является одиннадцатым трансурановым элементом, а также последним членом семейства актиноидов.",
  Rutherfordium: "Резерфордий - химический элемент с символом Rf и атомным номером 104, названный в честь физика Эрнеста Резерфорда. Это радиоактивный искусственный (элемент, который может быть создан в лаборатории, но не встречается в природе) элемент; самый стабильный из известных изотопов, 267Rf, имеет период полураспада около 1,3 часа. В периодической таблице элементов это элемент d-блока, является переходным металлом.",
  Dubnium: "Дубний - химический элемент с символом Db и атомным номером 105. Он назван в честь города Дубна в России, где он был впервые получен. Это искусственный и радиоактивный элемент; наиболее стабильный из известных изотопов, дубний-268, имеет период полураспада около 28 часов.",
  Seaborgium: "Сиборгий - искусственный элемент с символом Sg и атомным номером 106. Его наиболее стабильный изотоп 271Sg имеет период полураспада 1,9 минуты. Недавно открытый изотоп 269Sg имеет потенциально немного больший период полураспада.",
  Bohrium: "Борий - химический элемент с символом Bh и атомным номером 107. Он назван в честь датского физика Нильса Бора. Это искусственный и радиоактивный элемент; самый стабильный из известных изотопов, 270Bh, имеет период полураспада около 61 секунды.",
  Hassium: "Хассий - химический элемент с символом Hs и атомным номером 108, названный в честь немецкой земли Гессен. Это искусственный и радиоактивный элемент; самый стабильный из известных изотопов, 269Hs, имеет период полураспада около 9,7 секунды, хотя неподтвержденное метастабильное состояние, 277mHs, может иметь более длительный период полураспада - около 130 секунд. На сегодняшний день синтезировано более 100 атомов хассия.",
  Meitnerium: "Мейтнерий - химический элемент с символом Mt и атомным номером 109. Это чрезвычайно радиоактивный искусственный элемент. Наиболее стабильный из известных изотопов, мейтнерий-278, имеет период полураспада 7,6 секунды.",
  Darmstadtium: "Дармштадтий - химический элемент с символом Ds и атомным номером 110. Это чрезвычайно радиоактивный искусственный элемент. Наиболее стабильный из известных изотопов - дармштадтий-281 - имеет период полураспада около 10 секунд.",
  Roentgenium: "Рентгений - химический элемент с символом Rg и атомным номером 111. Это чрезвычайно радиоактивный искусственный элемент; самый стабильный из известных изотопов, рентгений-282, имеет период полураспада 2,1 минуты. Рентгений был впервые создан в 1994 году в Центре по изучению тяжёлых ионов имени Гельмгольца близ Дармштадта, Германия.",
  Copernicum: "Коперниций - химический элемент с символом Cn и атомным номером 112. Это чрезвычайно радиоактивный искусственный элемент, который может быть создан только в лаборатории. Наиболее стабильный из известных изотопов, коперниций-285, имеет период полураспада около 29 секунд, но возможно, что у этого изотопа есть ядерный изомер с более длительным периодом полураспада - 8,9 мин.",
  Nihonium: "Нихоний - химический элемент с атомным номером 113. Он имеет символ Nh. Это искусственный элемент, он чрезвычайно радиоактивен; его самый стабильный известный изотоп, нихоний-286, имеет период полураспада 20 секунд.",
  Flerovium: "Флеровий - сверхтяжелый искусственный химический элемент с символом Fl и атомным номером 114. Является чрезвычайно радиоактивным искусственным элементом. Назван в честь Лаборатории ядерных реакций имени Флерова Объединенного института ядерных исследований в Дубне, Россия, где элемент был открыт в 1998 году.",
  Moscovium: "Московий - это название искусственного сверхтяжелого элемента в периодической таблице, который имеет символ Mc и атомный номер 115. Это чрезвычайно радиоактивный элемент; его самый стабильный известный изотоп, московий-289, имеет период полураспада всего 220 миллисекунд. Он также известен как эка-висмут или просто элемент 115.",
  Livermorium: "Ливерморий - искусственный сверхтяжелый элемент с символом Lv и атомным номером 116. Это чрезвычайно радиоактивный элемент, который был создан в лаборатории и не наблюдался в природе. Элемент назван в честь Ливерморской национальной лаборатории имени Лоуренса в США, которая в 2000 году совместно с Объединенным институтом ядерных исследований в Дубне открыла ливерморий.",
  Tennessine: "Теннессин - сверхтяжелый искусственный химический элемент с атомным номером 117 и символом Ts. Также известный как эка-астат или элемент 117, он является вторым по тяжести и предпоследним элементом 7-го периода периодической таблицы. По состоянию на 2016 год наблюдалось пятнадцать атомов теннессина: шесть, когда он был впервые синтезирован в 2010 году, семь в 2012 году и два в 2014 году.",
  Oganesson: "Оганесон - это принятое в ИЮПАК название трансактинидного элемента с атомным номером 118 и символом элемента Og. Он также известен как эка-радон или элемент 118, а в периодической таблице элементов он относится к p-блоку и является последним элементом 7-го периода. В настоящее время оганесон является единственным искусственным членом 18 группы."
};
const ru = {
  "Select a heat map": "Выберите свойство",
  Next,
  Previous,
  "Periodic Table": "Периодическая таблица",
  Shell,
  Electrons,
  Orbitals,
  "Atomic Mass": "Атомная масса",
  "Atomic Radius": "Радиус атома",
  "Covalent Radius": "Ковалентный радиус",
  "Boiling Point": "Температура кипения",
  "Melting Point": "Температура плавления",
  Density,
  Electronegativity,
  "Electron Affinity": "Сродство к электрону",
  "First Ionization Energy": "Первая энергия ионизации",
  "Number of Shells": "Количество электронных оболочек",
  "Atomic Number": "Атомный номер",
  "Electron Shell Occupations": "Электронная конфигурация",
  "Electron Valency": "Валентность",
  "Specific Heat": "Удельная теплоёмкость",
  bohrModel,
  joinSymbol,
  preposition,
  electron,
  category,
  phase,
  year,
  unitsByName,
  units,
  discoveredBy,
  element,
  summary
};
export {
  $format as $,
  addMessages as a,
  init as i,
  ru as r
};
