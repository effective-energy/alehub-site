<template>
    <button type="button"
            class="button-rounded">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'ButtonRounded',
        props: {
            text: {
                type: String,
                required: true
            },
            icon: {
                type: String
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .button-rounded
        height 64px
</style>