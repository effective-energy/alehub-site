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
    .image
        position relative
        height 350px
        width 100%
        background-color #6a6ba7
        display flex
        align-items flex-end

        .video-bottom
            height 100px
            padding 0 20px
            display flex

            .icon-block
                padding 0 12px
                display flex
                align-items center

                .play
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
</style>