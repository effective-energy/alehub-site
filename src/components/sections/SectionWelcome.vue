<template>
    <div class="section-welcome">
        <title-welcome/>
    </div>
</template>

<script>
    import TitleWelcome from '../layouts/section-welcome/TitleWelcome';

    export default {
        name: 'SectionWelcome',
        components: {
            TitleWelcome
        }
    }
</script>

<style lang="stylus" scoped>
.section-welcome
    height 50vh
    background-color #020449
    color white
</style>