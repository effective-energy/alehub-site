<template>
    <div class="button-download-whitepaper">
        <button-transparent text="Получить whitepaper"
                            small="Загрузить 13.4 Mb"
                            :icon="icon"/>
    </div>
</template>

<script>
    import ButtonTransparent from '../buttons/ButtonTransparent';

    export default {
        name: 'ButtonDownloadWhitepaper',
        components: {
            ButtonTransparent
        },
        data: () => ({
            icon: '../../../../static/images/arrows/down-arrow-in-circular.svg'
        })
    }
</script>

<style lang="stylus" scoped>

</style>