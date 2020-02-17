const shortid = require(`shortid`);

const offers = [
  {
    id: shortid.generate(),
    previewSrc: `img/apartment-01.jpg`,
    title: `_`,
    price: 0,
    raiting: 0,
    type: `Apartment`,
    isPremium: true,
  },
  {
    id: shortid.generate(),
    previewSrc: `img/apartment-02.jpg`,
    title: `Wood and stone place`,
    price: 90,
    raiting: 100,
    type: `Private room`,
    isPremium: false,
  },
  {
    id: shortid.generate(),
    previewSrc: `img/apartment-03.jpg`,
    title: `Canal View Prinsengracht`,
    price: 80,
    raiting: 81,
    type: `1`,
    isPremium: true,
  },
  {
    id: shortid.generate(),
    previewSrc: `img/room.jpg`,
    title: `Nice, cozy, warm big bed apartment`,
    price: 50,
    raiting: 33,
    type: `Apartment`,
    isPremium: false,
  },
];

export default offers;
