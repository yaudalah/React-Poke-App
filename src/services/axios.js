import axios from "axios";

export const getPokemonsDetails = (id) => axios({
  method: 'GET',
  baseURL: "https://pokeapi.co/api/v2",
  url: `/pokemon/${id}`
});