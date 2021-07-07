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
      <v-col cols="12" md="4">
        <four-o-four-icon class="four-o-four-page__vector"/>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="display-4"> {{ $t('fourOFour.error.title') }} </h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <p class="subtitle-1"> {{ $t('fourOFour.error.description') }} </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.four-o-four-page {
  &__vector {
    width: 100%;
  }
}
</style>
