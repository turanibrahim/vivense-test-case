import Vue from 'vue';
import VueI18n from 'vue-i18n';
import tr from '../translations/tr-TR';
import en from '../translations/en-US';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  messages: { tr, en },
});
