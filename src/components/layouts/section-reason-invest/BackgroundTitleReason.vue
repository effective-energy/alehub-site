<template>
    <background-title :title="title"
                      :blue="blue"/>
</template>

<script>
    import BackgroundTitle from '../background-title/BackgroundTitle';

    export default {
        name: 'BackgroundTitleReason',
        components: {
            BackgroundTitle
        },
        data: () => ({
            title: 'Why invest',
            blue: false
        })
    }
</script>

<style lang="stylus" scoped>

</style>