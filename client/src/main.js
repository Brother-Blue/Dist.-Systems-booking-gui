import Vue from "vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import VueMqtt from "vue-mqtt";
import UUID from "vue-uuid";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(UUID);

Vue.use(VueMqtt, "ws://localhost:9001/ws", {
  clientId: "WebClient-" + parseInt(Math.random() * 100000),
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyACwSQoJfqy-dJ5rbYmiKOdqYFu8-k8S0Y", // TODO: put in env file
    libraries: "places",
  },
  installComponent: true,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
