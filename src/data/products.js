export default {
  titles: [
    'Nunc sodales dignissim nibh at lacinia',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Pellentesque condimentum est vel diam lobortis',
    'Vel fermentum massa molestie. Proin tempus metus a pretium mattis',
    'Nulla venenatis vestibulum sit amet sit amet leo',
    'Praesent eu ex suscipit, posuere purus nec',
    'Pellentesque id orci nibh',
    'Aliquam non magna nec elit commodo vestibulum',
    'Pellentesque quis mi nec turpis euismod',
    'Quis aliquet purus nulla id ligula',
    'Nulla ut viverra ante, in posuere eros',
    'Curabitur eget gravida turpis',
    'Sed tristique commodo tortor a aliquam',
    'Nunc ut nisl dictum augue congue',
    'Curabitur iaculis condimentum ipsum,',
    'Etiam ac tellus sed arcu mollis gravida ac placerat lorem',
    'Integer tempus magna nisi',
    'Praesent placerat venenatis ex',
    'Maecenas tristique nibh et diam blandit tempor',
    'commodo mauris nec mauris interdum',
    'Maecenas tristique nibh et diam blandit tempor.',
    'Maecenas viverra urna eget tempus tempus',
    ' Vivamus vitae lacus blandit',
  ],
  image: 'https://picsum.photos/310/200',
  product() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Number((Math.random() * 100000).toFixed(0)),
          title: this.getRandomTitle(),
          image: this.image,
          ratingAmount: this.getRandomRatingAmount(),
          averageRating: this.getRandomRating(),
          stock: this.productHasStock() ? this.getRandomRatingAmount() : 0,
          price: {
            value: this.getRandomPrice(),
            currency: 'TRY',
          },
          ...this.hasSpecialPrice() && {
            specialPrice: {
              value: 43,
              currency: 'TRY',
            },
          },
        });
      }, 431);
    });
  },
  getRandomTitle() {
    const index = Math.floor(Math.random() * this.titles.length);

    return this.titles[index];
  },
  getRandomRating() {
    return Math.floor(Math.random() * 4) + 1;
  },
  productHasStock() {
    return Math.random() < 0.8;
  },
  getRandomRatingAmount() {
    return Math.floor(Math.random() * 352);
  },
  getRandomPrice() {
    return Math.floor(Math.random() * 965);
  },
  hasSpecialPrice() {
    return Math.random() < 0.3;
  },
  async productList(size = 10) {
    const productList = new Array(size).fill(null).map(() => this.product());

    return Promise.all(productList);
  },
};
