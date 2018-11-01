<template>
    <button-transparent text="Получить whitepaper"
                        small="Загрузить 13.4 Mb"
                        :icon="icon"
                        @click.native="openWhitepaper"/>
</template>

<script>
    import ButtonTransparent from '../buttons/ButtonTransparent';

    export default {
        name: 'ButtonOpenWhitepaper',
        components: {
            ButtonTransparent
        },
        data: () => ({
            icon: '../../../../static/images/arrows/down-arrow-in-circular.svg',
            whitepaper: 'https://alehub.io/ALEHUB_WP_rus.pdf'
        }),
        methods: {
            /**
             * open whitepaper in new tab
             */
            openWhitepaper() {
                window.open(this.whitepaper, '_blank');
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>