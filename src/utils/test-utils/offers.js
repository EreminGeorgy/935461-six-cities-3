const shortid = require(`shortid`);

const offers = [
  {
    id: shortid.generate(),
    imagesSrc: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`
    ],
    previewSrc: `img/apartment-01.jpg`,
    title: `_`,
    price: 0,
    raiting: 0,
    type: `Apartment`,
    isPremium: true,
    bedrooms: 3,
    guests: 2,
    householdItems: new Set([
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
    ]),
    host: {
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    location: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    imagesSrc: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`
    ],
    previewSrc: `img/apartment-02.jpg`,
    title: `Wood and stone place`,
    price: 90,
    raiting: 8.35,
    type: `Private room`,
    isPremium: false,
    bedrooms: 3,
    guests: 2,
    householdItems: new Set([
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
    ]),
    host: {
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    location: [52.369553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    imagesSrc: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`
    ],
    previewSrc: `img/apartment-03.jpg`,
    title: `Canal View Prinsengracht`,
    price: 80,
    raiting: 8.2,
    type: `1`,
    isPremium: true,
    bedrooms: 3,
    guests: 2,
    householdItems: new Set([
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
    ]),
    host: {
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    location: [52.3909553943508, 4.929309666406198]
  },
  {
    id: shortid.generate(),
    imagesSrc: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/room.jpg`
    ],
    previewSrc: `img/room.jpg`,
    title: `Nice, cozy, warm big bed apartment`,
    price: 50,
    raiting: 3,
    type: `Apartment`,
    isPremium: false,
    bedrooms: 3,
    guests: 2,
    householdItems: new Set([
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
    ]),
    host: {
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    location: [52.3809553943508, 4.939309666406198]
  },
];

const offer = {
  id: shortid.generate(),
  previewSrc: `img/apartment-01.jpg`,
  imagesSrc: [
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-03.jpg`,
    `img/apartment-02.jpg`,
    `img/room.jpg`
  ],
  title: `title`,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  ],
  price: 0,
  raiting: 10,
  type: `Apartment`,
  isPremium: true,
  bedrooms: 3,
  guests: 2,
  householdItems: new Set([
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
  ]),
  host: {
    name: `Angelina`,
    isPro: true,
    avatarUrl: `img/avatar-angelina.jpg`,
  }
};

export {offer, offers};
