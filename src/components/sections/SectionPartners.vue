<template>
    <div class="section-partners">
        <v-layout align-center
                  fill-height
                  row>
            <v-flex>
                <v-layout row>
                    <v-flex>
                        <title-section :title="title"/>
                    </v-flex>
                </v-layout>
                <v-layout class="margin-top"
                          row
                          wrap>
                    <v-flex xs6
                            sm6
                            md3
                            lg3
                            xl3
                            d-flex
                            v-for="(partner, i) in partners"
                            :key="i">
                        <a :href="partner.href" target="_blank">
                            <img :src="partner.src"
                                 :alt="partner.alt">
                        </a>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';

    export default {
        name: 'SectionPartners',
        components: {
            TitleSection
        },
        data: () => ({
            title: 'Наши партнёры',
            partners: [
                {
                    src: '../../../static/images/logo/itmo-en-fff.svg',
                    href: 'http://en.ifmo.ru/en/',
                    alt: 'ITMO University',
                },
                {
                    src: '../../../static/images/logo/b2b-light.svg',
                    href: 'https://cryptob2b.io/ru/',
                    alt: 'Crypto b2b',
                },
                {
                    src: '../../../static/images/logo/bear-light.svg',
                    href: 'https://www.blockchain-spb.org/',
                    alt: 'Blockchain Spb',
                },
                {
                    src: '../../../static/images/logo/serokell-light.svg',
                    href: 'https://serokell.io/',
                    alt: 'Serokell',
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>
    a
        text-align center

    .margin-top
        @media (min-width 0)
            margin-top 0

        @media (min-width 600px)
            margin-top 0

        @media (min-width 960px)
            margin-top 64px

        @media (min-width 1264px)
            margin-top 64px

    img
        @media (min-width 0)
            margin-top 60px
            height 40px

        @media (min-width 600px)
            margin-top 60px
            height 50px

        @media (min-width 960px)
            margin-top 0
            height 60px

        @media (min-width 1264px)
            margin-top 0
            height 60px

    .section-partners
        height 50vh

        @media (min-width 0)
            height 70vh

        @media (min-width 600px)
            height 60vh

        @media (min-width 960px)
            height 50vh

        @media (min-width 1264px)
            height 50vh

        .container
            height 100%

            .row
                height 100%

</style>