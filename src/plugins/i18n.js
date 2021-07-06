import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getLocaleFromPath, isLocaleValid } from '@/utils/stringUtils';
import tr from '@/translations/tr-TR';
import en from '@/translations/en-US';

Vue.use(VueI18n);

const messages = { tr, en };
export const languages = Object.keys(messages);
export const defaultLocale = 'en';
const localeFromPath = getLocaleFromPath();
const locale = isLocaleValid(languages, localeFromPath) ? localeFromPath : defaultLocale;

export default new VueI18n({
  locale,
  messages,
});
