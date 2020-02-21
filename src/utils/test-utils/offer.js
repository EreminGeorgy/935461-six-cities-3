const shortid = require(`shortid`);

export const offer = {
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
