import Vue from 'vue';
import "bulma";
import firebase from 'firebase';

import API from './services/api'

import App from './App.vue';

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    projectId: process.env.VUE_APP_PROJECT_ID,
    appId: process.env.VUE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(API);

new Vue({
  render: h => h(App),
}).$mount('#app');
