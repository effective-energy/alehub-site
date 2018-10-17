<template>
    <background-title :title="title"
                      :blue="blue"/>
</template>

<script>
    import BackgroundTitle from '../background-title/BackgroundTitle';

    export default {
        name: 'BackgroundTitleSlogan',
        components: {
            BackgroundTitle
        },
        data: () => ({
            title: 'World\'s first',
            blue: false
        })
    }
</script>

<style lang="stylus" scoped>

</style>