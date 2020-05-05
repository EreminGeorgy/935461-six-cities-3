export interface City {
  name: string,
  locations: number[],
}

export interface User {
  name: string,
  avatarUrl: string,
  isPro: boolean,
  id: number,
  email: string,
}

export interface CommentData {
  comment: string,
  dateString: Date,
  id: number,
  rating: number,
  user: User,
}

export interface Offer {
  city: City,
  id: number,
  imagesSrc: string[],
  previewSrc: string,
  title: string,
  description: string,
  price: number,
  rating: number,
  type: string,
  isPremium: boolean,
  isFavorite: boolean,
  bedrooms: number,
  guests: number,
  householdItems: Set<string>,
  host: User,
  locations: number[],
}
