const BASE_URL = "https://api.unsplash.com";
const Client_ID = "rE8QiJH7GQFZqajHHZl44q7l-fRSN5CK0ABsGph2xXg";

export const getPhotos = () => {
  return fetch(
    `${BASE_URL}/photos?order_by=popular&per_page=24&client_id=${Client_ID}`
  ).then((res) => res.json());
};

export const getTopics = () => {
  return fetch(`${BASE_URL}/topics?client_id=${Client_ID}`).then((res) =>
    res.json()
  );
};

export const getTopicPhotos = (topic) => {
  return fetch(
    `${BASE_URL}/topics/${topic}/photos?order_by=popular&per_page=24&client_id=${Client_ID}`
  ).then((res) => res.json());
};

export const search = (query) => {
  return fetch(
    `${BASE_URL}/search/photos?query=${query}&per_page=24&client_id=${Client_ID}`
  ).then((res) => res.json());
};
