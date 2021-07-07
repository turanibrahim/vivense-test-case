<script>
export default {
  name: 'ProductCardImage',
  props: {
    image: {
      type: String,
      default: '',
    },
    badgeColor: {
      type: String,
      default: 'primary',
    },
    badgeLabel: {
      type: [String, Boolean],
      default: '',
    },
  },
};
</script>

<template>
  <v-row class="product-card__image" no-gutters>
    <v-col class="product-card__image" cols="12">
      <v-img
        height="200px"
        contain
        :src="image"
        @click="$emit('click')"
      />

      <div class="product-card__add-to-favorite">
        <slot name="add-to-favorite">
          <v-btn icon class="my-3 mx-5">
            <v-icon>mdi mdi-heart-outline</v-icon>
          </v-btn>
        </slot>
      </div>

      <div v-if="badgeLabel" class="product-card__badge">
        <slot name="badge">
          <v-chip
            class="my-3"
            :color="badgeColor"
            label
            text-color="white"
          >
            {{ badgeLabel }}
          </v-chip>
        </slot>
      </div>

      <div class="product-card__add-to-cart">
        <slot name="add-to-cart">
          <v-btn
            class="ma-5"
            color="accent"
            fab
            @click="$emit('click:add-to-cart')"
          >
            <v-icon>mdi mdi-cart</v-icon>
          </v-btn>
        </slot>
      </div>
    </v-col>
  </v-row>
</template>
