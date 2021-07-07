<script>
import { money } from '@/utils/stringUtils';

export default {
  name: 'ProductCardPrice',
  props: {
    price: {
      type: Object,
      default: () => ({}),
    },
    specialPrice: {
      type: Object,
      default: null,
    },
  },
  computed: {
    priceLabel() {
      return money(this.price);
    },
    specialPriceLabel() {
      return this.specialPrice ? money(this.specialPrice) : this.priceLabel;
    },
  },
};
</script>

<template>
  <div class="product-card__price">
    <slot name="price" >
      <v-row class="py-3 px-4" no-gutters align="end">
        <span class="text-h5 pr-2">{{ specialPriceLabel }}</span>
        <span v-if="specialPrice" class="h6 text-decoration-line-through error--text">
          {{ priceLabel }}
        </span>
      </v-row>
    </slot>
  </div>
</template>
