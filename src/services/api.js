import axios from "axios";

const API = {
  install(Vue){
    const API_URL = process.env.VUE_APP_API_URL;

    const instance = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });

    const rickandmorty = {
      characters(params){
        return instance.get("character/",{params});
      },
      character(id){
        return instance.get(`character/${id}/`);
      }
    }

    Vue.prototype.$api = rickandmorty;

    Vue.prototype.$axios = instance;
  }
}

export default API;
