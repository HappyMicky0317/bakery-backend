function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: 'Vanilla Cake',
    description:
      'Round vanilla cake with vanilla frosting. 2 layers. Price is for 8inch cake.',
    photo: {
      id: '6020362e88532b4ba0494552',
      _meta: {
        public_id: 'bakery-keystone/6020362e88532b4ba0494552',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612723757/bakery/6020362d88532b4ba0494552.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612723757/bakery/6020362d88532b4ba0494552.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 6400,
    __v: 0,
  },
  {
    name: 'Orange Bundt Cake',
    description:
      'Orange bundt cake with vanilla glaze. Price is for 8inch cake',
    photo: {
      id: '602036ec88532b4ba0494555',
      _meta: {
        public_id: 'bakery-keystone/602036ec88532b4ba0494555',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612723948/bakery/602036ec88532b4ba0494555.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612723948/bakery/602036ec88532b4ba0494555.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 3000,
    __v: 0,
  },
  {
    name: 'Rainbow Birthday Cake ',
    description:
      'Rainbow frosting on a rainbow colored 7 layers cake. Price is for 8inch cake.',
    photo: {
      id: '6020374788532b4ba0494558',
      _meta: {
        public_id: 'bakery-keystone/6020374788532b4ba0494558',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724038/bakery/6020374588532b4ba0494558.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724038/bakery/6020374588532b4ba0494558.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 6500,
    __v: 0,
  },
  {
    name: 'Classic Birthday Cake',
    description: '3 layers cake. Vanilla frosting. Price is for 8inch cake',
    photo: {
      id: '6020378c88532b4ba049455b',
      _meta: {
        public_id: 'bakery-keystone/6020378c88532b4ba049455b',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724108/bakery/6020378b88532b4ba049455b.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724108/bakery/6020378b88532b4ba049455b.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 5000,
    __v: 0,
  },
  {
    name: 'Cotton Candy Cake',
    description:
      '3 layers cake. Pink frostin and pink glaze. Price is for 8inch cake.',
    photo: {
      id: '602037bf88532b4ba049455e',
      _meta: {
        public_id: '6602037bf88532b4ba049455e',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724158/bakery/602037bd88532b4ba049455e.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724158/bakery/602037bd88532b4ba049455e.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 5500,
    __v: 0,
  },
  {
    name: 'Fruit Topping Cake',
    description:
      'Vanilla frosting on a vanilla falvored cake. Fresh fruit on top. Price is for 8inch cake',
    photo: {
      id: '602037fc88532b4ba0494561',
      _meta: {
        public_id: '602037fc88532b4ba0494561',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724220/bakery/602037fc88532b4ba0494561.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724220/bakery/602037fc88532b4ba0494561.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 6600,
    __v: 0,
  },
  {
    name: 'Unicorn Cake',
    description:
      'Cream cheese frosting on a vanilla cake. Candy and marshmallow topping. Price is for 8inch cake',
    photo: {
      id: '6020385288532b4ba0494564',
      _meta: {
        public_id: 'bakery-keystone/6020385288532b4ba0494564',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724306/bakery/6020385188532b4ba0494564.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724306/bakery/6020385188532b4ba0494564.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 4500,
    __v: 0,
  },
  {
    name: 'Vanilla Round Cake',
    description: 'Vanilla round cake with vanilla frosting',
    photo: {
      id: '6020388788532b4ba0494567',
      _meta: {
        public_id: 'bakery-keystone/6020388788532b4ba0494567',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724358/bakery/6020388688532b4ba0494567.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724358/bakery/6020388688532b4ba0494567.jpg',
        original_filename: 'file',
      },
    },
    status: 'AVAILABLE',
    price: 4500,
    __v: 0,
  },
  {
    name: 'Chocolate Round Cake',
    description:
      'Chocolate three layer round cake with chocolate frosting. Price is for 8inch cake.',
    photo: {
      id: '602038bd88532b4ba049456a',
      _meta: {
        public_id: '602038bd88532b4ba049456a',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724413/bakery/602038bc88532b4ba049456a.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724413/bakery/602038bc88532b4ba049456a.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 4500,
    __v: 0,
  },
  {
    name: 'Princess Themed Cupcakes',
    description:
      'Princess theme cupcakes with cream cheese frosting. Price is for 12 cupcakes.',
    photo: {
      id: '6020391f88532b4ba049456d',
      _meta: {
        public_id: 'bakery-keystone/6020391f88532b4ba049456d',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724511/bakery/6020391e88532b4ba049456d.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724511/bakery/6020391e88532b4ba049456d.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 2000,
    __v: 0,
  },
  {
    name: 'Christmas Cookies',
    description:
      'Vanilla cookies shaped and decorated with Christmas motives. Prices is for a dozen.',
    photo: {
      id: '602039e488532b4ba0494570',
      _meta: {
        public_id: 'bakery-keystone/602039e488532b4ba0494570',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724708/bakery/602039e388532b4ba0494570.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724708/bakery/602039e388532b4ba0494570.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 2000,
    __v: 0,
  },
  {
    name: 'Baby Shower Cake',
    description:
      'Animal themed cake. Choices of chocolate or vanilla with fruit filling. Price is for 8inch cake. ',
    photo: {
      id: '60203a5c88532b4ba0494573',
      _meta: {
        public_id: 'bakery-keystone/60203a5c88532b4ba0494573',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        type: 'upload',
        placeholder: false,
        url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724827/bakery/60203a5a88532b4ba0494573.jpg',
        secure_url:
          'https://res.cloudinary.com/midnightbakery/image/upload/v1612724827/bakery/60203a5a88532b4ba0494573.jpg',
        original_filename: 'file',
      },
    },
    status: 'DRAFT',
    price: 3000,
    __v: 0,
  },
];
