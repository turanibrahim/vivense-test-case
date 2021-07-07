<script>
import VProductCard from '@/components/VProductCard';

export default {
  name: 'Home',
  components: { VProductCard },
  data() {
    return {
      products: [
        {
          id: 0,
          title: 'Nunc sodales dignissim nibh at lacinia',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 2,
          title: 'Pellentesque condimentum est vel diam lobortis',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: 0,
          price: { value: this.getRandomPrice(), currency: 'TRY' },
          specialPrice: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 3,
          title: 'Vel fermentum massa molestie. Proin tempus metus a pretium mattis',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 4,
          title: 'Nulla venenatis vestibulum sit amet sit amet leo',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 5,
          title: 'Praesent eu ex suscipit, posuere purus nec',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
          specialPrice: { value: 8, currency: 'TRY' },
        },
        {
          id: 6,
          title: 'Pellentesque id orci nibh',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 7,
          title: 'Aliquam non magna nec elit commodo vestibulum',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: 12,
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 8,
          title: 'Pellentesque quis mi nec turpis euismod',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 9,
          title: 'Quis aliquet purus nulla id ligula',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: 0,
          price: { value: this.getRandomPrice(), currency: 'TRY' },
          specialPrice: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 10,
          title: 'Nulla ut viverra ante, in posuere eros',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 11,
          title: 'Curabitur eget gravida turpis',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 12,
          title: 'Sed tristique commodo tortor a aliquam',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 13,
          title: 'Nunc ut nisl dictum augue congue',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
          specialPrice: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 14,
          title: 'Curabitur iaculis condimentum ipsum,',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
          specialPrice: { value: 43, currency: 'TRY' },
        },
        {
          id: 15,
          title: 'Etiam ac tellus sed arcu mollis gravida ac placerat lorem',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: 0,
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
        {
          id: 16,
          title: 'Integer tempus magna nisi',
          image: 'https://picsum.photos/300/200',
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.getRandomRatingAmount(),
          price: { value: this.getRandomPrice(), currency: 'TRY' },
        },
      ],
    };
  },
  methods: {
    getStockLabel(product) {
      return !product.stock && 'Out of Stock';
    },
    getRandomRating() {
      return (Math.random() * 10) % 5;
    },
    getRandomRatingAmount() {
      return ((Math.random() * 10000) % 250).toFixed(0);
    },
    getRandomPrice() {
      return Math.random() * 100;
    },
  },
};
</script>

<template>
  <v-container class="home-page py-10">
    <v-row>
      <v-col cols="auto">
        <h1 class="display-2">Products</h1>
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
