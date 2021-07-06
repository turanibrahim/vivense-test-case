<script>
import fourOFourIcon from '@/components/svg/FourOFour';

export default {
  name: 'FourOFour',
  components: {
    fourOFourIcon,
  },
};
</script>

<template>
  <v-container class="four-o-four-page">
    <v-row justify="center">
      <v-col cols="4">
        <four-o-four-icon class="svg"/>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="display-4"> {{ $t('fourOFour.error.title') }} </h1>
        <p class="subtitle-1"> {{ $t('fourOFour.error.description') }} </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.svg {
  height: 100%;
  width: 100%;
}
</style>
