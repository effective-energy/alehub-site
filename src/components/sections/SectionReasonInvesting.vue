<template>
    <div class="section-why-invest">
        <v-layout row>
            <v-flex d-flex justify-center>
                <background-title-reason/>
            </v-flex>
        </v-layout>
        <v-layout fill-height
                  row>
            <v-flex class="increase-z"
                    xs12
                    sm12
                    md6
                    lg5
                    xl4>
                <title-section class="increase-z"
                               :title="title"/>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex class="increase-z"
                    v-for="(item, i) in items"
                    :key="i"
                    xs12
                    sm6
                    md6
                    lg3
                    xl3>
                <item-reason-investing :src="item.src"
                                       :title="item.title"
                                       :text="item.text"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import BackgroundTitleReason from '../layouts/section-reason-invest/BackgroundTitleReason';
    import TitleSection from '../layouts/text/Title1Section';
    import ItemReasonInvesting from '../layouts/section-reason-invest/ItemReasonInvesting';

    export default {
        name: 'SectionReasonInvest',
        components: {
            BackgroundTitleReason,
            TitleSection,
            ItemReasonInvesting
        },
        data: () => ({
            title: 'Почему стоит инвестировать?',
            items: [
                {
                    src: '../../../../static/images/icons/reason/reason-1-ic.svg',
                    title: 'Защита инвесторов',
                    text: 'Первая децентрализованная платформа для управления'
                },
                {
                    src: '../../../../static/images/icons/reason/reason-2-ic.svg',
                    title: 'Легитимность',
                    text: 'Первая децентрализованная платформа для управления'
                },
                {
                    src: '../../../../static/images/icons/reason/reason-3-ic.svg',
                    title: 'Размещение на биржах',
                    text: 'Первая децентрализованная платформа для управления'
                },
                {
                    src: '../../../../static/images/icons/reason/reason-4-ic.svg',
                    title: 'Дивиденды',
                    text: 'Первая децентрализованная платформа для управления'
                }
            ]
        }),
        computed: {},
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    .increase-z
        z-index 2

    .section-why-invest
        height 80vh
        position relative
</style>