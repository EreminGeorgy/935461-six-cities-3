const shortid = require(`shortid`);

// const MOCKS_TOTAL = 10;
// const IMAGES = [
//   `img/apartment-01.jpg`,
//   `img/apartment-02.jpg`,
//   `img/apartment-01.jpg`,
//   `img/apartment-03.jpg`,
//   `img/apartment-02.jpg`,
//   `img/room.jpg`
// ];
// const TITLES = [
//   `Wood and stone place`,
//   `Beautiful &amp; luxurious apartment at great location`,
//   `Canal View Prinsengracht`,
//   `Nice, cozy, warm big bed apartment`,
// ];
// const TYPES = [
//   `Apartment`,
//   `Private room`,
//   `house`,
//   `hotel`,
// ];
// const HOUSEHOLD_ITEMS = [
//   `Wi-Fi`,
//   `Washing machine`,
//   `Towels`,
//   `Heating`,
//   `Coffee machine`,
//   `Baby seat`,
//   `Kitchen`,
//   `Cabel TV`,
//   `Fridge`,
// ];
// const USER_NAMES = [
//   `Angelina`,
//   `Max`,
// ];
// const USER_AVATAR_SRC = [
//   `img/avatar-angelina.jpg`,
//   `img/avatar-max.jpg`,
// ];
// const DESCRIPTION_TEXT = [
//   `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
//   `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
// ];

// const randomBoolean = () => Boolean(Math.round(Math.random()));
// const randomNumber = ({min = 0, max = 1}) => {
//   return min + Math.floor(max * Math.random());
// };

// const getMock = () => ({
//   id: shortid.generate(),
//   city: citiesData[Math.floor(Math.random() * 5)],
//   previewSrc: IMAGES[Math.floor(Math.random() * 6)],
//   imagesSrc: IMAGES,
//   title: TITLES[Math.floor(Math.random() * 4)],
//   description: DESCRIPTION_TEXT,
//   isPremium: randomBoolean(),
//   type: TYPES[Math.floor(Math.random() * 4)],
//   raiting: randomNumber({min: 0, max: 5}),
//   bedrooms: randomNumber({min: 1, max: 3}),
//   guests: randomNumber({min: 1, max: 9}),
//   price: randomNumber({min: 0, max: 999}),
//   householdItems: new Set(HOUSEHOLD_ITEMS),
//   host: {
//     name: USER_NAMES[Math.floor(Math.random() * 2)],
//     isPro: randomBoolean(),
//     avatarUrl: USER_AVATAR_SRC[Math.floor(Math.random() * 2)],
//   },
//   location: [
//     [52.370955, 4.873096],
//     [52.379553, 4.873096],
//     [52.390955, 4.909309],
//     [52.360955, 4.909309]
//   ]
// });

// const getOffers = () => {
//   return new Array(MOCKS_TOTAL).fill(``).map(getMock);
// }

// const offers = getOffers();

const offers = [
  {
    id: shortid.generate(),
    city: {
      name: `Cologne`,
      location: [50.939485, 6.948775],
    },
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
    location: [50.937764, 6.961390],
  },
  {
    id: shortid.generate(),
    city: {
      name: `Paris`,
      location: [48.859335, 2.350730],
    },
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
    location: [48.872344, 2.360418],
  },
  {
    id: shortid.generate(),
    city: {
      name: `Brussels`,
      location: [50.855889, 4.351608],
    },
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
    location: [50.855889, 4.351608]
  },
  {
    id: shortid.generate(),
    city: {
      name: `Amsterdam`,
      location: [52.371512, 4.893750],
    },
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
    location: [52.370955, 4.873096]
  },
  {
    id: shortid.generate(),
    city: {
      name: `Amsterdam`,
      location: [52.371512, 4.893750],
    },
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
    location: [52.379553, 4.873096]
  },
];

export {offers};
