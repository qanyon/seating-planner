<template>
    <div>
        <Moveable
                container=".seating-container"
                :id="'table-' + table.id"
                class="moveable table"
                :draggable="true"
                :rotatable="true"
                :keep-ratio="true"
                @drag="handleDrag"
                @rotate="handleRotate"
                v-bind:style="{ left: left + 'px', top: top + 'px' }"
        >
            <slot>
                <span>{{ table.label }}</span>
            </slot>
        </Moveable>



    </div>


</template>
<script>
    import Moveable from 'vue-moveable';

    export default {
        name: "SeatingTable",
        components: {
            Moveable,
        },
        computed: {
            top() {
                return this.value.coordinates[0] * document.body.offsetHeight;
            },
            left() {
                return this.value.coordinates[1] * document.body.offsetWidth;

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
                this.table.coordinates = [((top) / parentHeight), ((left) / parentWidth)];
                this.tableUpdated();
            },
            handleScale({target, transform, scale}) {
                target.style.transform = transform;
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
        position: relative;
    }

    .table {
        background-color: aqua;
    }

</style>