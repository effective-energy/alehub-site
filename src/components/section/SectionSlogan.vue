<template>
    <div class="section-slogan">
        section slogan
        <background-title-slogan/>
    </div>
</template>

<script>
    import BackgroundTitleSlogan from '../layouts/section-slogan/BackgroundTitleSlogan';

    export default {
        name: 'SectionSlogan',
        components: {
            BackgroundTitleSlogan
        },
        data: () => ({})
    }
</script>

<style lang="stylus" scoped>
    .section-slogan
        z-index 2
        position relative
        height 100vh
        background-color #020449
        color white
</style>