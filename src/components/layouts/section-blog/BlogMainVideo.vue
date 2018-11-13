<template>
    <div class="blog-main-video">
        <div class="image">
            <div class="video-bottom">
                <div class="icon-block">
                    <button type="button"
                            class="play">
                        <img class="icon-play"
                             src="../../../../static/images/icons/play-circle.svg"
                             alt="play">
                    </button>
                </div>
                <div class="text">
                    {{ text }}
                </div>
            </div>
        </div>
        <div class="text-mobile">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogMainVideo',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .text-mobile
        margin-top 10px
        color white
        font-family MuseoSansCyrl500
        font-size 18px
        line-height 1.33
        display flex
        align-items left

        @media (min-width 0px)
            display block

        @media (min-width 600px)
            display block

        @media (min-width 960px)
            display none

        @media (min-width 1264px)
            display none

    .image
        position relative
        width 100%
        background-color #6a6ba7
        display flex

        @media (min-width 0px)
            height 170px
            align-items center
            justify-content center

        @media (min-width 600px)
            height 170px
            align-items center
            justify-content center

        @media (min-width 960px)
            height 350px
            align-items flex-end
            justify-content unset

        @media (min-width 1264px)
            height 350px
            align-items flex-end
            justify-content unset

        .video-bottom
            height 100px
            padding 0 20px
            display flex

            .icon-block
                padding 0 12px
                display flex
                align-items center

                .play
                    cursor pointer

                    &:focus
                        outline none

                .icon-play
                    width 64px

            .text
                padding 0 12px
                color white
                font-family MuseoSansCyrl500
                font-size 18px
                line-height 1.33
                display flex
                align-items center

                @media (min-width 0px)
                    display none

                @media (min-width 600px)
                    display none

                @media (min-width 960px)
                    display block

                @media (min-width 1264px)
                    display block
</style>