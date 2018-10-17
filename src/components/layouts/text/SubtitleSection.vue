<template>
    <h3 class="subtitle-section">
        {{ subtitle }}
    </h3>
</template>

<script>
    export default {
        name: 'SubtitleSection',
        props: {
            subtitle: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .subtitle-section
        color white
        font-family MuseoSansCyrl300
        line-height 1.33
        font-size 24px
        text-align center
</style>