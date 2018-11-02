<template>
    <background-title :title="title"
                      :blue="blue"/>
</template>

<script>
    import BackgroundTitle from '../background-title/BackgroundTitle';

    export default {
        name: 'BackgroundTitleQuestions',
        components: {
            BackgroundTitle
        },
        data: () => ({
            title: 'Questions',
            blue: false
        })
    }
</script>

<style lang="stylus" scoped>

</style>