<template>
    <title-2-section :title="title"/>
</template>

<script>
    import Title2Section from '../text/Title2Section';

    export default {
        name: 'TitleWelcome',
        components: {
            Title2Section
        },
        data: () => ({
            title: 'Добро пожаловать в систему управления будущего!'
        })
    }
</script>

<style lang="stylus" scoped>

</style>