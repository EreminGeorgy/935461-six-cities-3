import {createAPI} from "./api.js";

const RouteMap = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
};

const axios = createAPI(() => {});

function getOffers() {
  return axios.get(RouteMap.OFFERS);
}

function getFavorites() {
  return axios.get(RouteMap.FAVORITE);
}

function login() {
  return axios.get(RouteMap.LOGIN);
}

function signIn(loginData) {
  return axios.post(RouteMap.LOGIN, loginData);
}

function addToFavorite(cardData) {
  return axios.post(`${RouteMap.FAVORITE}/${cardData.id}/${cardData.status}`, cardData.status);
}

function getClosestOffers(id) {
  return axios.get(`${RouteMap.OFFERS}/${id}/nearby`);
}

function sendComment(commentData) {
  return axios.post(`${RouteMap.COMMENTS}/${commentData.id}`, {comment: commentData.comment, rating: commentData.rating});
}

function getComments(id) {
  return axios.get(`${RouteMap.COMMENTS}/${id}`);
}

export const ApplicationApi = {
  getOffers,
  getClosestOffers,
  getFavorites,
  login,
  signIn,
  addToFavorite,
  sendComment,
  getComments,
};
