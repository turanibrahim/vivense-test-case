<script>
import { mapActions, mapGetters } from 'vuex';
import VProductCard from '@/components/VProductCard';

export default {
  name: 'Home',
  components: { VProductCard },
  computed: {
    ...mapGetters({
      products: 'products',
      page: 'page',
    }),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  async created() {
    await this.fetchProductList({
      size: this.isMobile ? 5 : 8,
      initial: true,
      page: this.getPageFromQuery(),
    });
  },
  methods: {
    ...mapActions({
      fetchProductList: 'fetchProductList',
    }),
    getStockLabel(product) {
      return !product.stock && this.$t('out.of.stock');
    },
    getPageFromQuery() {
      const { page = 1 } = this.$route.query;

      return page;
    },
  },
};
</script>

<template>
  <v-container class="home-page py-10">
    <v-row>
      <v-col cols="auto">
        <h1 class="display-2">{{ $t('products') }}</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="product in products" :key="product.id" sm="6" md="4" lg="3">
        <v-product-card
         :price="product.price"
         :special-price="product.specialPrice"
         :title="product.title"
         :image="product.image"
         :rating-amount="product.ratingAmount"
         :average-rating="product.averageRating"
         :badge-label="getStockLabel(product)"
         badge-color="error"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.home-page {
  max-width: 1280px;
}
</style>
