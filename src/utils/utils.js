export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCities = (offers) => {
  const cities = new Set(offers.map((item) => item.city));
  return [...cities];
};

export const getOffersByCity = (array, city) => {
  return array.filter((item) => item.city === city);
};
