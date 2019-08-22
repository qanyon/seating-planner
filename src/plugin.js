import Container from "./Container.vue";

// This exports the plugin object.
export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install(Vue, options) {
        // Add a component or directive to your plugin, so it will be installed globally to your project.
        Vue.component('Container', Container);
        Vue.mixin({
            created() {
                console.log('Hello from created hook!')
            }
        });
    }
}