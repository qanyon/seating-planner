import Vue from 'vue'
import SeatingContainer from "./SeatingContainer";
import App from "./App.vue";

// Without options
Vue.use(SeatingContainer);

new Vue({
    el: '#app',
    render: h => h(App)
});