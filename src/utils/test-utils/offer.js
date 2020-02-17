const shortid = require(`shortid`);

const offer = {
  id: shortid.generate(),
  previewSrc: `img/apartment-01.jpg`,
  title: ` `,
  price: 0,
  raiting: 100,
  type: `Apartment`,
  isPremium: true,
};

export default offer;
