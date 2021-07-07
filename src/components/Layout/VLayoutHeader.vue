<script>
export default {
  name: 'VLayoutHeader',
  methods: {
    redirectHome() {
      this.$router.push({ name: 'Home' });
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

    <v-btn text @click="redirectHome">
      <h1 class="display-1">
        {{ $t('website.title') }}
      </h1>
    </v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>

</style>
