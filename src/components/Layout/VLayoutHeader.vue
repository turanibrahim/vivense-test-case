<script>
export default {
  name: 'VLayoutHeader',
  computed: {
    locales() {
      return {
        tr: 'Türkçe',
        en: 'English',
      };
    },
    currentLocale() {
      return this.$i18n.locale;
    },
    otherLocaleKey() {
      return Object.keys(this.locales).find((key) => key !== this.currentLocale);
    },
    otherLocale() {
      return this.locales[this.otherLocaleKey];
    },
  },
  methods: {
    redirectHome() {
      this.$router.push({ name: 'Home' });
    },
    changeLocale() {
      this.$router.push({
        ...this.$route,
        params: {
          ...this.$route.params,
          language: this.otherLocaleKey,
        },
      });

      this.$i18n.locale = this.otherLocaleKey;
    },
  },
};
</script>

<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-icon class="mr-3" @click="redirectHome">
      mdi mdi-basket
    </v-icon>

    <v-btn text @click="redirectHome" class="hidden-md-and-down">
      <h1 class="display-1">
        {{ $t('website.title') }}
      </h1>
    </v-btn>

    <v-spacer />

    <v-btn text @click="changeLocale">
      <v-icon>mdi mdi-translate</v-icon>

      {{ otherLocale }}
    </v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>
