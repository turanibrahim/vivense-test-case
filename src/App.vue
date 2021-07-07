<template>
  <v-app>
    <v-layout-header />

    <v-main>
      <router-view/>
    </v-main>

    <v-layout-footer />
  </v-app>
</template>

<script>
import VLayoutFooter from '@/components/Layout/VLayoutFooter';
import VLayoutHeader from '@/components/Layout/VLayoutHeader';

export default {
  name: 'App',
  components: { VLayoutFooter, VLayoutHeader },
  data: () => ({
    //
  }),
};
</script>
