import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue)

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAYvxJ87pb6uWSef_HEXC9EN1Sb-wEdh3I",
    authDomain: "login-df9bc.firebaseapp.com",
    projectId: "login-df9bc",
    storageBucket: "login-df9bc.appspot.com",
    messagingSenderId: "398554329506",
    appId: "1:398554329506:web:666ddd86aa4cc74b1802fb",
    measurementId: "G-CHJQHSQ310"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");