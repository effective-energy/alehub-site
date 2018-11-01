<template>
    <div class="social-block"
         :class="{ 'social-block-footer': footer }">
        <a class="social-icon"
           target="_blank"
           v-for="icon in icons"
           :href="icon.href"
           :key="icon.id">
            <font-awesome-icon :icon="['fab', icon.name]"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'SocialBlock',
        props: {
            dark: {
                type: Boolean,
                default: false
            },
            footer: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                icons: [
                    {
                        id: 1,
                        name: 'telegram',
                        href: 'https://t.me/alehub'
                    },
                    {
                        id: 2,
                        name: 'facebook',
                        href: 'https://www.facebook.com/alehub.io/'
                    },
                    {
                        id: 3,
                        name: 'instagram',
                        href: 'https://www.instagram.com/alehub.io/'
                    },
                    {
                        id: 4,
                        name: 'youtube',
                        href: 'https://www.youtube.com/channel/UCQmFu8R6TIKU1Vz10HrvFYg'
                    },
                    {
                        id: 5,
                        name: 'twitter',
                        href: 'https://twitter.com/alehub_io'
                    },
                    {
                        id: 6,
                        name: 'btc',
                        href: 'https://bitcointalk.org/index.php?topic=3676768.new'
                    },
                    {
                        id: 7,
                        name: 'github',
                        href: 'https://github.com/effective-energy'
                    },
                    {
                        id: 8,
                        name: 'medium',
                        href: 'https://medium.com/@alehub'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    orange = #fc8435

    .social-block
        z-index 10
        display flex

        &.social-block-footer
            justify-content flex-end
            margin-bottom 20px

        .social-icon
            color #ffffff
            font-size 24px
            transition color .3s ease-in-out
            margin-right 24px

            &:last-child
                margin-right 0

            &.social-icon-white
                color #ffffff

            &.social-icon-footer
                color #a3a3a9
                font-size 18px

            &:hover
                color orange
</style>