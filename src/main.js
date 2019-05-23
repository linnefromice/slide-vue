import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

// Initialize vue-awesome-swiper
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
}).$mount('#app')
