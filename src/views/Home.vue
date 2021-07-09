<script>
import { mapActions, mapGetters } from 'vuex';
import VProductCard from '@/components/VProductCard';

export default {
  name: 'Home',
  components: { VProductCard },
  data() {
    return {
      isProductsLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      products: 'products',
      page: 'page',
    }),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isPaginationVisible() {
      return !this.isMobile;
    },
    isProductListVisibleOnProductFetch() {
      return this.isMobile || (!this.isMobile && !this.isProductsLoading);
    },
  },
  async created() {
    await this.fetchProductList();
  },
  methods: {
    ...mapActions({
      fetchProductListAction: 'fetchProductList',
    }),
    getStockLabel(product) {
      return !product.stock && this.$t('out.of.stock');
    },
    getPageFromQuery() {
      const { page = 1 } = this.$route.query;

      return page;
    },
    async fetchProductList(options = {}) {
      const { initial = true, page = this.getPageFromQuery() } = options;

      this.isProductsLoading = true;

      await this.fetchProductListAction({
        size: this.isMobile ? 5 : 8,
        initial,
        page,
      });

      this.isProductsLoading = false;
    },
    async changePage(newPage, initial = true) {
      await this.$router.push({
        ...this.$route,
        query: {
          page: newPage,
        },
      });

      await this.fetchProductList({ initial });

      this.scrollTopIfUserHasDesktopDevice();
    },
    scrollTopIfUserHasDesktopDevice() {
      if (!this.isMobile) {
        this.$nextTick(() => {
          window.scrollTo(0, 0);
        });
      }
    },
    async fetchMoreProduct() {
      if (this.isMobile && this.page < 3 && this.products.length) {
        const newPage = Number(this.page) + 1;

        await this.changePage(newPage, false);
      }
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

    <div
      v-infinite-scroll="fetchMoreProduct"
      infinite-scroll-disabled="busy"
      infinite-scroll-throttle-delay="1000"
    >
      <v-row v-if="isProductListVisibleOnProductFetch">
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
    </div>

    <v-row v-if="isProductsLoading" justify="center">
      <v-col cols="auto">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>

    <v-row v-if="isPaginationVisible" justify="center">
      <v-col cols="auto">
        <v-pagination
          :value="Number(page)"
          :length="3"
          @input="changePage"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container >
</template>

<style lang="scss">
.home-page {
  max-width: 1280px;
}
</style>
