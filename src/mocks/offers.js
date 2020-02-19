const shortid = require(`shortid`);

const MOCKS_TOTAL = 4;
const IMAGES = [
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-01.jpg`,
  `img/apartment-03.jpg`,
  `img/apartment-02.jpg`,
  `img/room.jpg`
];
const TITLES = [
  `Wood and stone place`,
  `Beautiful &amp; luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];
const TYPES = [
  `Apartment`,
  `Private room`,
  `house`,
  `hotel`,
];
const HOUSEHOLD_ITEMS = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Cabel TV`,
  `Fridge`,
];
const USER_NAMES = [
  `Angelina`,
  `Max`,
];
const USER_AVATAR_SRC = [
  `img/avatar-angelina.jpg`,
  `img/avatar-max.jpg`,
];
const DESCRIPTION_TEXT = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
];

const randomBoolean = () => Boolean(Math.round(Math.random()));
const randomNumber = ({min = 0, max = 1}) => {
  return min + Math.floor(max * Math.random());
};

const getMock = () => ({
  id: shortid.generate(),
  previewSrc: IMAGES[Math.floor(Math.random() * 6)],
  imagesSrc: IMAGES,
  title: TITLES[Math.floor(Math.random() * 4)],
  description: DESCRIPTION_TEXT,
  isPremium: randomBoolean(),
  type: TYPES[Math.floor(Math.random() * 4)],
  raiting: randomNumber({min: 0, max: 5}),
  bedrooms: randomNumber({min: 0, max: 3}),
  guests: randomNumber({min: 0, max: 9}),
  price: randomNumber({min: 0, max: 999}),
  householdItems: new Set(HOUSEHOLD_ITEMS),
  host: {
    name: USER_NAMES[Math.floor(Math.random() * 2)],
    isPro: randomBoolean(),
    avatarUrl: USER_AVATAR_SRC[Math.floor(Math.random() * 2)],
  }
});

export const offers = new Array(MOCKS_TOTAL).fill(``).map(getMock);
