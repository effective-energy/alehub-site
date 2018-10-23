<template>
    <div class="input-email-rounded">
        <input type="email"
               class="input-email"
               :placeholder="placeholder"
               :title="title">
    </div>
</template>

<script>
    export default {
        name: 'InputEmailRounded',
        props: {
            placeholder: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .input-email
        height 40px
        padding 11px 0 10px 24px
        background-color rgba(255, 255, 255, .24)
        border-radius 20px

        &:focus
            outline none
</style>