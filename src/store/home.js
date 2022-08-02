import axios from "axios";
import { apiUrl } from "./config";

export const home = {
     state: {
      breeds: [],
      dogImages: [],
      filteredDog: ""
     },
      mutations: {
        BreedList(state, data) {
            const breedsArray = Object.keys(data.message)
             state.breeds = breedsArray;
          },
          DogImages(state, data){
            state.dogImages = data.message
          },
          filterDogs(state, data){
            state.filteredDog = data
          }
      },
      actions: {
           // get all dog breeds
           ListBreeds: ({ commit }) => {
             return new Promise((resolve, reject) => {
               axios
                 .get(`${apiUrl}/breeds/list/all`)
                 .then(({ data, status }) => {
                   if (status === 200) {
                     commit("BreedList", data);
                     resolve(data);
                   }
                 })
                 .catch((error) => {
                   reject(error);
                 });
             });
           },
          //  Fetch dog images by breeds
          ListDogsByBreeds: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
              axios
                .get(`${apiUrl}/breed/${payload}/images`)
                .then(({ data, status }) => {
                  if (status === 200) {
                    commit("DogImages", data);
                    resolve(data);
                  }
                })
                .catch((error) => {
                  reject(error);
                });
            });
          },

           // DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION
           ListRandomImages: ({ commit }) => {
            return new Promise((resolve, reject) => {
              axios
                .get(`${apiUrl}/breeds/image/random/100`)
                .then(({ data, status }) => {
                  if (status === 200) {
                    commit("DogImages", data);
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
