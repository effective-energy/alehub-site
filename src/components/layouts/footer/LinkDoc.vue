<template>
    <a class="link-doc"
       :href="href"
       target="_blank">
        {{ text }}
    </a>
</template>

<script>
    export default {
        name: 'LincDoc',
        props: {
            href: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .link-doc
        display block
        color white
        font-size 12px
        font-family MuseoSansCyrl300
        opacity .72
        line-height 1.33

</style>