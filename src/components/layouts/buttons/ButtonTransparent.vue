<template>
    <!--<v-layout align-start column>-->
    <!--<v-flex>-->
    <button type="button"
            class="button-transparent"
            :class="classButtonTransparent">
        <span>{{ text }}</span>
        <img v-if="icon"
             :src="icon"
             class="icon"
             alt="arrow">
    </button>
    <!--</v-flex>-->
    <!--<v-flex v-if="small">-->
    <!--<small>-->
    <!--{{ small }}-->
    <!--</small>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
</template>

<script>
    export default {
        name: 'ButtonTransparent',
        props: {
            text: {
                type: String,
                required: true
            },
            small: {
                type: [Boolean, String]
            },
            icon: {
                type: String
            },
            big: {
                type: Boolean
            }
        },
        computed: {
            classButtonTransparent() {
                if (this.big)
                    return 'big';
                return '';
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .button-transparent
        display flex
        align-items center
        background-color transparent
        border none
        color white
        font-family MuseoSansCyrl700
        font-size 18px
        text-transform uppercase

        &.big
            font-size 24px

        &:focus
            outline none

    .icon
        height 22px
        margin-left 7px

</style>