/* eslint-disable no-undef */
import axios from 'axios';

export const getJoke = () => {
  return axios.get(
    `https://official-joke-api.appspot.com/random_joke`
  );
};

export default getJoke;
