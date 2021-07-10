<script>
export default {
  name: 'VProductSlider',
  props: {
    images: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      productSlider: null,
      productThumbSlider: null,
    };
  },
  computed: {
    productSliderOptions() {
      return {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
      };
    },
    productThumbsSliderOptions() {
      return {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      const vm = this;
      this.productSlider = this.$refs.productSlider.$swiper;
      this.productThumbSlider = this.$refs.productThumbSlider.$swiper;

      this.productSlider.on('slideChange', () => {
        vm.getCenterThumbSlide();
      });
    });
  },
  methods: {
    handleClickSlide(e) {
      this.productSlider.slideTo(e);
    },
    getNextSlide() {
      this.productSlider.slideNext();
      this.getCenterThumbSlide();
    },
    getPreviousSlide() {
      this.productSlider.slidePrev();
      this.getCenterThumbSlide();
    },
    getCenterThumbSlide() {
      const index = this.productSlider.snapIndex;

      this.productThumbSlider.slideTo(index);
    },
  },
};
</script>

<template>
  <div class="v-product-slider">
    <swiper
      class="swiper v-product-slider__main"
      :options="productSliderOptions"
      ref="productSlider"
    >
      <template v-for="(image, index) in images">
        <swiper-slide
          :key="index"
          :style="{ backgroundImage: `url(${image})`}"
        ></swiper-slide>
      </template>

      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
        @click="getNextSlide"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
        @click="getPreviousSlide"
      ></div>
    </swiper>

    <swiper
      class="swiper v-product-slider__thumbs"
      :options="productThumbsSliderOptions"
      ref="productThumbSlider"
      @click-slide="handleClickSlide"
    >
      <template v-for="(image, index) in images">
        <swiper-slide
          :key="index"
          :style="{ backgroundImage: `url(${image})`}"
        />
      </template>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import "ProductSlider";
</style>
