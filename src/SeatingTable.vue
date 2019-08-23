<template>
    <div>
        <Moveable
                :id="'table-' + table.id"
                class="moveable table"
                :draggable="true"
                :scalable="true"
                :rotatable="true"
                :keepRatio="true"
                @drag="handleDrag"
                @scale="handleScale"
                @rotate="handleRotate"
                v-bind:style="{ left: left + 'px', top: top + 'px', transform: table.orientation, width: width + 'px', height: height + 'px' }"
        >
            <slot>
                <span>{{ table.label }}</span>
            </slot>
        </Moveable>
        <div v-for="(seat,seatIndex) in table.seats">
            <seating-seat v-model="table.seats[seatIndex]" :class="'table-'+ table.id" :ref="'seat-'+ seat.id"
            ></seating-seat>
        </div>

    </div>


</template>
<script>
    import Moveable from 'vue-moveable';
    import SeatingSeat from "./SeatingSeat.vue";

    export default {
        name: "SeatingTable",
        components: {
            Moveable,
            SeatingSeat
        },
        computed: {
            top() {
                return this.value.coordinates[0] * document.body.offsetHeight;
            },
            left() {
                return this.value.coordinates[1] * document.body.offsetWidth;
            },
            width() {
                return this.value.size[0] * document.body.offsetWidth;
            },
            height() {
                return this.value.size[1] * document.body.offsetWidth;
            },
        },
        props: ['value'],
        data() {
            return {
                table: {},
            }
        },
        methods: {
            tableUpdated() {
                this.$emit('input', this.table);
            },
            handleDrag({target, left, top}) {
                let parentWidth = document.body.offsetWidth;
                let parentHeight = document.body.offsetHeight;
                let topDifference = (top / parentHeight) - (this.table.coordinates[0]);
                let leftDifference = (left / parentWidth) - (this.table.coordinates[1]);

                this.table.seats.forEach((seat) => {
                    seat.coordinates = [seat.coordinates[0] + topDifference, seat.coordinates[1] + leftDifference];
                    // this.$refs['seat-' + seat.id].$el.updateRect();
                });


                this.table.coordinates = [(top / parentHeight), (left / parentWidth)];
                this.tableUpdated();
            },
            handleScale({target, transform, scale}) {
                target.style.transform = "scale(" + scale[0] + ")";
                this.tableUpdated();

            },
            handleRotate({target, dist, transform}) {
                target.style.transform = transform;
                this.table.orientation = transform;
                this.tableUpdated();
            },
        },
        mounted() {
            this.table = this.value;
        },
    };
</script>
<style>
    .moveable {
        height: 100px;
        width: 150px;
    }

    .table {
        background-color: aqua;
    }

</style>