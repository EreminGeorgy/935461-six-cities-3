export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCities = (offers) => {
  let used = {};
  const cities = offers.map((item) => item.city);
  const filtered = cities.filter((city) => {
    return city.name in used ? 0 : (used[city.name] = 1);
  });

  return filtered;
};

export const getOffersByCity = (array, city) => {
  return array.filter((item) => item.city.name === city.name);
};
