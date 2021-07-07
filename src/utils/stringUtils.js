const getLocaleFromPath = () => window
  .location.pathname.replace(/^\/([^/]+).*/i, '$1');

const isLocaleValid = (locales, locale) => locales.includes(locale);

/*
* Formats numbers as money, if the locale is missing browser default will be used.
* @param args default { locale: String, currency: String, amount: Number }
* */
const money = (options = {}) => {
  const { currency, value } = options;
  const locale = window.navigator.language;
  const defaultCurrency = 'TRY';
  const validCurrency = currency || defaultCurrency;

  return new Intl
    .NumberFormat(locale, { style: 'currency', currency: validCurrency }).format(value);
};

export {
  getLocaleFromPath,
  isLocaleValid,
  money,
};
