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
                data:
                    [{
                        "id": 1,
                        "coordinates": [0.22285714285714286, 0.25156576200417535],
                        "size": [0.1, 0.15],
                        "orientation": 0,
                        "label": "This is table with ID: 1",
                        "seats": [{
                            "id": 1,
                            "orientation": 0,
                            "coordinates": [0.7728571428571429, 0.4663883089770354],
                            "size": [0.1, 0.15],
                            "label": "This is seat with ID: 1"
                        }, {
                            "id": 2,
                            "orientation": "matrix(1,0,0,1,0,0) rotate(-62.5712587783224deg)",
                            "coordinates": [0.2842857142857143, 0.5498956158663882],
                            "size": [0.01, 0.015],
                            "label": "This is seat with ID: 2"
                        }]
                    }, {
                        "id": 2,
                        "coordinates": [0.6157142857142858, 0.3212943632567849],
                        "size": [0.1, 0.15],
                        "orientation": 0,
                        "label": "This is table with ID: 2",
                        "seats": [{
                            "id": 3,
                            "orientation": 0,
                            "coordinates": [0.7785714285714286, 0.7615866388308977],
                            "size": [0.01, 0.015],
                            "label": "This is seat with ID: 3"
                        }, {
                            "id": 4,
                            "orientation": 0,
                            "coordinates": [0.5014285714285714, 0.7793319415448852],
                            "size": [0.01, 0.015],
                            "label": "This is seat with ID: 4"
                        }]
                    }]
            }
        },
        components: {
            Container,
        },
    }
</script>
<style>
    body {
        margin: 0;
    }
</style>