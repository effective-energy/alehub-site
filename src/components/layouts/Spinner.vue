<template>
    <img src="../../../static/images/spinner.svg" width="44" height="44" class="spinner">
</template>

<script>
    export default {
        name: 'Spinner'
    }
</script>

<style lang="stylus" scoped>
    .spinner
        -webkit-animation rotating 1s linear infinite
        -moz-animation rotating 1s linear infinite
        -ms-animation rotating 1s linear infinite
        -o-animation rotating 1s linear infinite
        animation rotating 1s linear infinite

    @-webkit-keyframes rotating
        from
            -webkit-transform rotate(0deg)
            -o-transform rotate(0deg)
            transform rotate(0deg)
        to
            -webkit-transform rotate(360deg)
            -o-transform rotate(360deg)
            transform rotate(360deg)

    @keyframes rotating
        from
            -ms-transform rotate(0deg)
            -moz-transform rotate(0deg)
            -webkit-transform rotate(0deg)
            -o-transform rotate(0deg)
            transform rotate(0deg)
        to
            -ms-transform rotate(360deg)
            -moz-transform rotate(360deg)
            -webkit-transform rotate(360deg)
            -o-transform rotate(360deg)
            transform rotate(360deg)
</style>
