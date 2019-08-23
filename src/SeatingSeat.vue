<template>
    <Moveable
            target="seating-container"
            :id="'seat-' + seat.id"
            class="moveable seat "
            :draggable="true"
            :scalable="true"
            :rotatable="true"
            :keepRatio="true"
            @drag="handleDrag"
            @scale="handleScale"
            @rotate="handleRotate"
            v-bind:style="{ left: left + 'px', top: top + 'px', transform: seat.orientation, width: width + 'px', height: height + 'px' }"
    >
        <slot>
            <img src="../assets/img/download.png" alt="seat" :width=" width + 'px'" :height="height + 'px' ">
            <span>{{ seat.label }}</span>
        </slot>
    </Moveable>
</template>
<script>
    import Moveable from 'vue-moveable';

    export default {
        name: "SeatingSeat",
        components: {
            Moveable,
        },
        props: ['value'],
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
        data() {
            return {
                seat: {},
            }
        },
        methods: {
            seatUpdated() {
                this.$emit('input', this.seat);
            },
            handleDrag({target, left, top}) {
                let parentWidth = document.body.offsetWidth;
                let parentHeight = document.body.offsetHeight;
                this.seat.coordinates = [((top) / parentHeight), ((left) / parentWidth)];
                this.seatUpdated();
            },
            handleScale({target, transform, scale}) {
                target.style.transform = "scale(" + scale[0] + ")";
                this.seatUpdated();
            },
            handleRotate({target, dist, transform}) {
                target.style.transform = transform;
                this.seat.orientation = transform;
                this.seatUpdated();

            },
        },
        mounted() {
            this.seat = this.value;
        },
        watch: {
            value: function (newValue, oldValue) {

            }
        },
    };
</script>
<style>
    .moveable {
        height: 100px;
        width: 150px;
        position: fixed;
    }

    .seat {
        background-color: lawngreen;
    }

</style>