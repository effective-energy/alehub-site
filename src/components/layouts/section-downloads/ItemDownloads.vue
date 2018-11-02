<template>
    <div class="item-downloads">
        <img :src="src" :alt="title">
        <h3 class="title-downloads">
            {{ title }}
        </h3>
        <p class="version-downloads"
           v-if="version">
            {{ version }}
        </p>
        <p class="bit-downloads"
           v-if="bit">
            {{ bit }}
        </p>
        <p class="date-downloads"
           :class="dateDownloadsClass"
           v-if="date">
            {{ date }}
        </p>
        <div class="button-wrapper"
             v-if="ready">
            <a :href="href">
                <button-rounded class="button-downloads"
                                @click.native="download">
                    {{ buttonReadyTitle }}
                </button-rounded>
            </a>
        </div>
        <button-transparent class="button-transparent"
                            v-else
                            :text="buttonNotReadyTitle"
                            :big="big"/>
    </div>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';
    import ButtonTransparent from '../buttons/ButtonTransparent';

    export default {
        name: 'ItemDownloads',
        components: {
            ButtonRounded,
            ButtonTransparent
        },
        props: {
            src: {
                type: String,
                required: true
            },
            href: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            version: {
                type: [String, Boolean],
                required: true
            },
            bit: {
                type: [String, Boolean],
                required: true
            },
            date: {
                type: [String, Boolean],
                required: true
            },
            ready: {
                type: Boolean,
                required: true
            }
        },
        data: () => ({
            buttonReadyTitle: 'Скачать',
            buttonNotReadyTitle: 'Coming Soon',
            big: true
        }),
        computed: {
            dateDownloadsClass() {
                if (!this.bit)
                    return 'margin-top-erase-bit';
                return '';
            }
        },
        methods: {
            download() {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .button-wrapper
        display flex
        justify-content center
        width 200px

        a
            width 100%

    .margin-top-erase-bit
        margin-top 85px !important

    .button-transparent
        margin-top 115px

    .button-downloads
        margin-top 24px

    .date-downloads
        margin-top 48px
        opacity .72
        font-family MuseoSansCyrl300
        font-size 12px
        line-height 1.33
        text-align center
        color #ffffff

    .version-downloads
        margin-top 18px

    .version-downloads, .bit-downloads
        font-family: MuseoSansCyrl300
        font-size 18px
        line-height 1.33
        text-align center
        color #ffffff

    .title-downloads
        font-family MuseoSansCyrl700
        font-size 32px
        line-height: 1.5;
        text-align center
        color #ffffff

    .item-downloads
        display flex
        flex-direction column
        align-items center
        color white

    img
        height 120px
</style>