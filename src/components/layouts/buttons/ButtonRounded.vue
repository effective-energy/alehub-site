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
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    h = 64px
    h-0 = 40px
    w = 100%
    r = 32px
    orange = #fc8435
    f-s = 24px
    f-s-0 = 18px

    .button-rounded
        width w
        border-radius r
        border solid 2px orange
        background-color transparent
        box-shadow 0 0 12px 0 orange
        color white
        font-family MuseoSansCyrl700
        text-transform uppercase

        @media (min-width 0)
            font-size f-s-0
            height h-0

        @media (min-width 600px)
            font-size f-s-0
            height h-0

        @media (min-width 960px)
            font-size f-s
            height h-0

        @media (min-width 1264px)
            font-size f-s
            height h-0

        &:focus
            outline none

</style>