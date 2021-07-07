<script>
export default {
  name: 'ProductCardContent',
  props: {
    title: {
      type: String,
      default: '',
    },
    averageRating: {
      type: Number,
      default: 0,
      validator: (v) => (v <= 5 && v >= 0),
    },
    ratingAmount: {
      type: [Number, String],
      default: '0',
    },
  },
};
</script>

<template>
  <v-row class="pt-3 px-4" no-gutters>
    <v-col cols="12">
      <slot name="title">
        <h3 class="subtitle-1">{{ title }}</h3>
      </slot>
    </v-col>

    <v-col cols="12">
      <slot name="rating">
        <v-row no-gutters>
          <v-col cols="auto">
            <v-rating
              color="warning"
              readonly
              length="5"
              :value="averageRating"
              x-small
              dense
            ></v-rating>
          </v-col>

          <v-col cols="auto">
            <span class="caption grey--text">({{ ratingAmount }})</span>
          </v-col>
        </v-row>
      </slot>
    </v-col>
  </v-row>
</template>
