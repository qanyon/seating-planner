<template>
    <Moveable
            target="seating-container"
            :id="'seat-' + seat.id"
            ref="seat"
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
                target: {},
            }
        },
        methods: {
            seatUpdated() {
                this.$emit('input', this.seat);
            },
            handleDrag({target, left, top}) {
                this.target = target;
                let parentWidth = document.body.offsetWidth;
                let parentHeight = document.body.offsetHeight;
                this.seat.coordinates = [((top) / parentHeight), ((left) / parentWidth)];
                this.seatUpdated();
            },
            handleScale({target, transform, scale}) {
                this.target = target;

                target.style.transform = "scale(" + scale[0] + ")";
                this.seatUpdated();
            },
            handleRotate({target, dist, transform}) {
                this.target = target;
                target.style.transform = transform;
                this.seat.orientation = transform;
                this.seatUpdated();

            },
            updateTarget() {
                let target = this.$refs.seat.updateRec();
            }
        },
        mounted() {
            this.seat = this.value;
        },
        created: function () {
            this.$parent.$on('update', this.updateTarget);
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