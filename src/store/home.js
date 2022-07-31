import axios from "axios";
import { apiUrl } from "./config";

export const home = {
     state: {
        dogs: [],
      },
      mutations: {
         DogList(state, data) {
             state.dogs = data.message;
          },
      },
      actions: {
           // get all dog breeds
           ListDogs: ({ commit }) => {
             return new Promise((resolve, reject) => {
               axios
                 .get(`${apiUrl}/breeds/list/all`)
                 .then(({ data, status }) => {
                   if (status === 200) {
                     commit("DogList", data);
                     resolve(data);
                   }
                 })
                 .catch((error) => {
                   reject(error);
                 });
             });
           }
     },
    };
