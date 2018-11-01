<template>
    <div class="button-watch-video">
        <button-transparent text="Смотреть видео"
                            :icon="icon"/>
    </div>
</template>

<script>
    import ButtonTransparent from '../buttons/ButtonTransparent';

    export default {
        name: 'ButtonWatchVideo',
        components: {
            ButtonTransparent
        },
        data: () => ({
            icon: '../../../../static/images/arrows/right-arrow-in-circular.svg'
        }),
    }
</script>

<style lang="stylus" scoped>

</style>