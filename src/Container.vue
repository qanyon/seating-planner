<template>
    <div class="seating-container" id="seating-container">
        <div v-for="(table,tableIndex) in layout">
            <seating-table v-model="layout[tableIndex]">
            </seating-table>

            <div v-for="(seat,seatIndex) in layout[tableIndex].seats">
                <seating-seat v-model="layout[tableIndex].seats[seatIndex]"
                ></seating-seat>
            </div>


        </div>



    </div>

</template>
<script>

    import SeatingTable from './SeatingTable'
    import SeatingSeat from "./SeatingSeat";

    export default {
        name: "Container",
        components: {
            SeatingSeat,
            SeatingTable,
        },
        props: ['value'],
        data() {
            return {
                layout: {},
            }
        },
        methods: {
            layoutUpdated() {
                this.$emit('input', this.layout);
            },
            handleDrag({target, left, top}) {
                console.log('onDrag left, top', left, top);
                target.style.left = `${(left)}px`;
                target.style.top = `${(top)}px`;
                this.layoutUpdated();
            },
            handleScale({target, transform, scale}) {
                console.log('onScale scale', scale);
                target.style.transform = transform;
                this.layoutUpdated();

            },
            handleRotate({target, dist, transform}) {
                console.log('onRotate', dist);
                target.style.transform = transform;
                this.layoutUpdated();

            },
        },
        mounted() {
            console.log('Hello from Qanyon!');

            this.layout = this.value;
        },
    };
</script>
<style>
    .seating-container {
        height: 100%;
        width: 100%;
        min-height: 700px;
        min-width: 400px;
    }


</style>