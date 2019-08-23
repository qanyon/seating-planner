import Vue from 'vue'
import Container from "./Container.vue";
import App from "./App.vue";

// Without options
Vue.use(Container);

new Vue({
    el: '#app',
    render: h => h(App)
});