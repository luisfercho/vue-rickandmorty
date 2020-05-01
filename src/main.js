import Vue from 'vue';
import App from './App.vue';
import "bulma";
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    projectId: process.env.VUE_APP_PROJECT_ID,
    appId: process.env.VUE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app');
