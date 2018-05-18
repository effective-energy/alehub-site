<template>
    <div id="loading-screen" class="loading-screen">

        <div class="wrap-loader">
            <h3 class="logo">
                Alehub
            </h3>

            <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="24" fill="none" stroke-width="1"></circle>
            </svg>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'LoadingScreen',
    }
</script>

<style lang="stylus" scoped>
    .spinner
        animation rotate 3s linear infinite
        z-index 2
        position absolute
        width 400px
        height 400px

        @media (max-width 300px)
            display none

        @media (min-width 300px) and (max-width 360px)
            width 250px
            height 250px

        @media (min-width 360px) and (max-width 425px)
            width 300px
            height 300px

        @media (min-width 425px) and (max-width 500px)
            width 350px
            height 350px

        & .path
            stroke #ffd24f
            stroke-linecap round
            animation dash 2.5s ease-in-out infinite

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -75;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -150;
        }
    }

    .loading-screen
        position fixed
        background-color #343a49
        width 100%
        height 100vh
        opacity 1
        -webkit-transition opacity .85s ease-out
        transition opacity .85s ease-out
        z-index 9999

        .wrap-loader
            display flex
            justify-content center
            align-items center
            height 100%
            width 100%

            .logo
                color #dcdcdc
                font-size 44px

</style>