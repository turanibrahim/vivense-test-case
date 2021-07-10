<script>
import VProductSlider from '@/components/VProductSlider';
import { mapGetters } from 'vuex';
import { money } from '@/utils/stringUtils';

export default {
  name: 'ProductDetails',
  components: { VProductSlider },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters({
      getProductDetails: 'productDetails',
    }),
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    productImages() {
      return [
        'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1391&q=80',
        'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
        'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
      ];
    },
    productDetails() {
      const productId = this.$route.params.id;

      return this.getProductDetails(productId);
    },
    isProductValid() {
      return !!this.productDetails;
    },
    productHasSpecialPrice() {
      return this.productDetails.specialPrice;
    },
    defaultPriceLabel() {
      return money({ ...this.productDetails.price });
    },
    specialPriceLabel() {
      return money(this.productDetails.specialPrice);
    },
    priceLabel() {
      return this.productHasSpecialPrice ? this.specialPriceLabel : this.defaultPriceLabel;
    },
    justifyQuantityBasedOnDevice() {
      return this.isMobile ? 'center' : 'start';
    },
    isProductOutOfStock() {
      return !this.productDetails.stock;
    },
  },
  created() {
    if (!this.isProductValid) {
      this.$router.push({
        path: '/fourOFour',
        params: {
          language: this.$route.params.language,
        },
      });
    }
  },
  methods: {
    reduceQuantity() {
      if (Number(this.quantity) > 1) {
        this.quantity = Number(this.quantity) - 1;
      }
    },
    increaseQuantity() {
      this.quantity = Number(this.quantity) + 1;
    },
    handleQuantityChange(value) {
      if (value < 0) {
        this.quantity = 1;
      } else {
        this.quantity = value;
      }
    },
  },
};
</script>

<template>
  <v-container v-if="isProductValid" class="product-details my-10">
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-product-slider
          :images="productImages"
        />
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-row no-gutters>
          <v-col cols="auto">
            <h1 class="display-1">{{ productDetails.title }}</h1>
          </v-col>
        </v-row>

        <v-row class="my-5" no-gutters justify="space-between" align="center">
          <v-col cols="auto">
            <span class="pr-2 text-h6">{{ priceLabel }}</span>

            <span
              v-if="productHasSpecialPrice"
              class="text-subtitle-2 text-decoration-line-through error--text"
            >
              {{ defaultPriceLabel }}
            </span>
          </v-col>

          <v-col cols="auto">
            <v-row no-gutters align="center">
              <v-rating
                color="warning"
                readonly
                length="5"
                :value="productDetails.averageRating"
                x-small
                dense
              ></v-rating>

              <span class="ml-2 text-caption">({{ productDetails.ratingAmount }})</span>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <span class="text-h6">
              {{ $t('description') }}
            </span>

            <v-divider />
          </v-col>

          <v-col cols="12">
            <p>
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
              Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
              ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis
              commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
              augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
              diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
          </v-col>
        </v-row>

        <v-row align="center" :justify="justifyQuantityBasedOnDevice" no-wrap>
          <v-col cols="auto" class="grey lighten-3 pa-2 mr-2">
            <v-row no-gutters align="center">
              <v-col class="mr-2" cols="auto">
                <v-btn text icon @click="reduceQuantity">
                  <v-icon>mdi mdi-minus</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="auto">
                <v-text-field
                  class="product-details__quantity"
                  :value="quantity"
                  type="number"
                  solo
                  hide-details
                  @change="handleQuantityChange"
                />
              </v-col>

              <v-col class="ml-2" cols="auto">
                <v-btn text icon @click="increaseQuantity">
                  <v-icon>mdi mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="auto" sm="auto" md="auto">
            <v-btn x-large color="primary" :disabled="isProductOutOfStock">
              {{ $t('add.to.cart') }}
            </v-btn>
          </v-col>
        </v-row>

        <v-row v-if="isProductOutOfStock">
          <v-col cols="auto" class="px-0">
            <v-alert
              dense
              text
              type="error"
            > {{ $t('out.of.stock.message')}}</v-alert>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.product-details {
  max-width: 1280px;

  &__quantity {
    max-width: 64px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance:textfield;
    }
  }
}
</style>
