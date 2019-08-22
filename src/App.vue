<template>
    <div id="app">
        <container v-model="data"></container>
    </div>
</template>

<script>
    import Container from "./Container.vue";

    export default {
        name: 'App',
        data() {
            return {
                data: [
                    {
                        id: 1,
                        coordinates: [0.5, 0.5],
                        size: [0.10, 0.15],
                        orientation: 0,
                        label: "This is table with ID: 1",
                        seats: [
                            {
                                id: 1,
                                orientation: 0,
                                coordinates: [0.6, 0.6],
                                size: [0.010, 0.015],
                                label: "This is seat with ID: 1",
                            },
                            {
                                id: 1,
                                orientation: 0,
                                coordinates: [0.5, 0.6],
                                size: [0.010, 0.015],
                                label: "This is seat with ID: 1",
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            Container,
        },
    }
</script>