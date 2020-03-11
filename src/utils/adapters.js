export class ModelOffer {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`title`];
    this.city = {
      name: data[`city`][`name`],
      location: [data[`city`][`location`][`latitude`], data[`city`][`location`][`longitude`]],
      zoom: data[`city`][`zoom`],
    };
    this.price = data[`price`];
    this.imagesSrc = data[`images`];
    this.previewSrc = data[`images`][0];
    this.raiting = parseFloat(data[`rating`]) || ``;
    this.type = data[`type`];
    this.isPremium = Boolean(data[`is_premium`]);
    this.isFavorite = Boolean(data[`is_favorite`]);
    this.bedrooms = data[`bedrooms`];
    this.guests = data[`max_adults`];
    this.description = data[`description`] || ``;
    this.householdItems = new Set(data[`goods`] || []);
    this.host = {
      name: data[`host`][`name`],
      isPro: Boolean(data[`host`][`is_pro`]),
      avatarUrl: data[`host`][`avatar_url`],
    };
    this.location = [data[`location`][`latitude`], data[`location`][`longitude`]];
  }

  static parseOffer(data) {
    return new ModelOffer(data);
  }

  static parseOffers(data) {
    return data.map(ModelOffer.parseOffer);
  }
}
