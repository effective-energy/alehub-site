<template>
    <button type="button"
            class="button-rounded">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'ButtonRounded',
        props: {
            icon: {
                type: String
            }
        },
        methods: {

        }
    }
</script>

<style lang="stylus" scoped>
    h = 64px
    w = 100%
    r = 32px
    orange = #fc8435
    f-s = 24px

    .button-rounded
        height h
        width w
        border-radius r
        border solid 2px orange
        background-color transparent
        box-shadow 0 0 12px 0 orange
        color white
        font-size f-s
        font-family MuseoSansCyrl700
        text-transform uppercase

        &:focus
            outline none

</style>