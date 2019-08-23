import Container from "./Container.vue";
import SeatingTable from "./SeatingTable.vue";
import SeatingSeat from "./SeatingSeat.vue";

// This exports the plugin object.
export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install(Vue, options) {
        // Add a component or directive to your plugin, so it will be installed globally to your project.
        Vue.component('Container', Container);
        Vue.component('SeatingTable', SeatingTable);
        Vue.component('SeatingSeat', SeatingSeat);
        Vue.mixin({
            created() {
                console.log('Hello from created hook!')
            }
        });
    }
}