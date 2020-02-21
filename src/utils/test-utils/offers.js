const shortid = require(`shortid`);

export const offers = [
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
    }
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
    }
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
    }
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
    }
  },
];
