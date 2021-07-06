const getLocaleFromPath = () => window
  .location.pathname.replace(/^\/([^/]+).*/i, '$1');

const isLocaleValid = (locales, locale) => locales.includes(locale);

export {
  getLocaleFromPath,
  isLocaleValid,
};
