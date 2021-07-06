import Vue from 'vue';
import VueRouter from 'vue-router';
import { languages, defaultLocale } from '@/plugins/i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:language',
    component: () => import(/* webpackChunkName: "main" */ '../App'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
      },
      {
        path: 'detail/:id',
        name: 'ProductDetails',
        component: () => import(/* webpackChunkName: "details" */ '../views/Details'),
      },
      {
        name: 'fourOFour',
        path: '*',
        component: () => import(/* webpackChunkName: "fourOFour" */ '../views/FourOFour'),
      },
    ],
  },
  {
    path: '/',
    redirect: `/${defaultLocale}/`,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { name, params } = to;
  const { language = '' } = params;

  if (languages.includes(language)) {
    next();
  } else if (name) {
    next({ path: `/${defaultLocale}${to.path}`, params: { language: defaultLocale } });
  } else {
    next({ name: 'fourOFour', params: { language: defaultLocale } });
  }
});

export default router;
