<template>
    <background-title :title="title"
                      :blue="blue"/>
</template>

<script>
    import BackgroundTitle from '../background-title/BackgroundTitle';

    export default {
        name: 'BackgroundTitleMain',
        components: {
            BackgroundTitle
        },
        data: () => ({
            title: 'World\'s first',
            blue: true
        })
    }
</script>

<style lang="stylus" scoped>

</style>