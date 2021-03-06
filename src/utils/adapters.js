export class ModelOffer {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`title`];
    this.city = {
      name: data[`city`][`name`],
      locations: [data[`city`][`location`][`latitude`], data[`city`][`location`][`longitude`]],
      zoom: data[`city`][`zoom`],
    };
    this.price = data[`price`];
    this.imagesSrc = data[`images`];
    this.previewSrc = data[`images`][0];
    this.rating = parseFloat(data[`rating`]) || ``;
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
      avatarUrl: `../../${data[`host`][`avatar_url`]}`,
    };
    this.locations = [data[`location`][`latitude`], data[`location`][`longitude`]];
  }

  static parseOffer(data) {
    return new ModelOffer(data);
  }

  static parseOffers(response) {
    return response.data.map(ModelOffer.parseOffer);
  }

  static parseSingleOffer(response) {
    return ModelOffer.parseOffer(response.data);
  }
}

export const ModelUser = (response) => {
  const data = response.data;
  return {
    id: data[`id`],
    email: data[`email`],
    name: data[`name`],
    avatarUrl: data[`avatar_url`],
    isPro: Boolean(data[`is_pro`]),
  };
};

export class ModelComment {
  constructor(data) {
    this.id = data[`id`];
    this.comment = data[`comment`] || ``;
    this.dateString = new Date(data[`date`]);
    this.rating = parseFloat(data[`rating`]) || ``;

    this.user = {
      name: data[`user`][`name`],
      isPro: Boolean(data[`user`][`is_pro`]),
      avatarUrl: data[`user`][`avatar_url`],
      id: data[`user`][`id`],
    };
  }

  static parseComment(data) {
    return new ModelComment(data);
  }

  static parseComments(response) {
    return response.data.map(ModelComment.parseComment);
  }
}
