import Vue from 'vue'
import Container from "./Container";
import App from "./App";

// Without options
Vue.use(Container);

new Vue({
    el: '#app',
    render: h => h(App)
});