<template>
    <div class="input-email-rounded">
        <input type="email"
               class="input-email"
               :class="classInput"
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
            },
            big: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            class: {
                big: 'big',
                normal: 'normal'
            }
        }),
        computed: {
            classInput() {
                if (this.big)
                    return this.class.big;
                return this.class.normal;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .input-email
        width 100%
        padding 11px 0 10px 24px
        background-color rgba(255, 255, 255, .24)

        &.normal
            height 40px
            border-radius 20px

        &.big
            height 64px
            border-radius 32px

        &:focus
            outline none
</style>