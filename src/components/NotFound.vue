<template>
    <div class="not-found">

        <div class="not-found__alert">
            <div class="title">
                <div class="title__inner">
                    <span>
                        Error
                    </span>
                </div>
            </div>
            <div class="not-found__error">
                404
            </div>
            <div class="not-found__text">
                Looks like you got lost. Or we trying to confuse you. Let us bring you at
                <router-link class="go-home"
                             tag="span"
                             to="/">
                    home
                </router-link>
                .
            </div>
            <div class="not-found__band">
                <router-link class="not-found__band-inner"
                             tag="div"
                             to="/">
                    <div>
                        <img class="black" src="../../static/images/arrow-left-black.svg" alt="return to home">
                        <img class="yellow" src="../../static/images/arrow-left-yellow.svg" alt="return to home">
                        <span>
                            Alehub
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

<style lang="stylus" scoped>
    .not-found
        position relative
        height 100vh
        width 100vw
        display flex
        justify-content center
        align-items center

        .not-found__alert
            width 35%
            height 45%
            display flex
            flex-direction column
            align-items center
            justify-content space-between
            position absolute
            z-index 100

            @media (min-width 1024px) and (max-width 1440px)
                width 45%

            @media (min-width 768px) and (max-width 1024px)
                width 60%

            @media (min-width 425px) and (max-width 768px)
                width 70%
                height 50%

            @media (min-width 300px) and (max-width 425px)
                width 80%
                height 80%

            @media (max-width 300px)
                width 90%
                height 95%

            .title
                display flex
                justify-content flex-end
                width 100%

                .title__inner
                    background-color #343a49
                    color #f7f7f7
                    width 50%
                    padding 10px 20px
                    font-size 22px

                @media (max-width 425px)
                    justify-content center

                    .title__inner
                        display flex
                        justify-content center
                        width 100%

            .not-found__error
                font-size 100px
                font-weight 700

            .not-found__text
                font-size 22px

                .go-home
                    cursor pointer
                    text-decoration underline

            .not-found__band
                width 100%
                position relative

                .not-found__band-inner
                    cursor pointer
                    position relative
                    padding 12px 20px 8px 20px
                    width 50%
                    background-color #ffd24f
                    display flex
                    justify-content flex-end
                    align-items center
                    -webkit-transition all .5s ease
                    -o-transition all .5s ease
                    transition all .5s ease

                    img, span
                        -webkit-transition all .5s ease
                        -o-transition all .5s ease
                        transition all .5s ease

                    img
                        right 125px
                        top 17px
                        height 20px
                        position absolute

                    .black
                        opacity 1

                    .yellow
                        opacity 0

                    span
                        color #343a49
                        z-index 110
                        font-size 22px
                        font-weight 700
                        text-transform uppercase

                    &:hover
                        background-color #343a49

                        .black
                            opacity 0

                        .yellow
                            opacity 1

                        span
                            color #f7f7f7


                    @media (min-width 300px) and (max-width 425px)
                        width 100%
                        justify-content center

                        img
                            display none

                    @media (max-width 300px)
                        width 100%
                        justify-content center

                        img
                            display none
</style>