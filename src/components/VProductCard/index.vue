<script>
import ProductCardImage from '@/components/VProductCard/ProductCardImage';
import ProductCardContent from '@/components/VProductCard/ProductCardContent';
import ProductCardPrice from '@/components/VProductCard/ProductCardPrice';

export default {
  name: 'VProductCard',
  components: { ProductCardPrice, ProductCardContent, ProductCardImage },
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
    title: {
      type: String,
      required: true,
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
    price: {
      type: Object,
      required: true,
    },
    specialPrice: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    elevation() {
      return this.isHovered ? '5' : '0';
    },
  },
};
</script>

<template>
  <v-sheet
    class="product-card fill-height"
    rounded
    :elevation="elevation"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <product-card-image
      :image="image"
      :badge-color="badgeColor"
      :badge-label="badgeLabel"
      @click="$emit('click')"
      @click:add-to-cart="$emit('click:add-to-cart')"
    >
      <template #add-to-favorite>
        <slot name="add-to-favorite" />
      </template>

      <template #add-to-cart>
        <slot name="add-to-cart" />
      </template>

      <template #badge>
        <slot name="badge" />
      </template>
    </product-card-image>

    <div class="product-card__content">
      <product-card-content
        :average-rating="averageRating"
        :rating-amount="ratingAmount"
        :title="title"
      >
        <template #title>
          <slot name="title" />
        </template>

        <template #rating>
          <slot name="rating" />
        </template>
      </product-card-content>
    </div>

    <div class="product-card__actions">
      <product-card-price
        :price="price"
        :special-price="specialPrice"

      >
        <template #price>
          <slot name="price" />
        </template>
      </product-card-price>
    </div>
  </v-sheet>
</template>

<style lang="scss">
@import "ProductCard";
</style>
