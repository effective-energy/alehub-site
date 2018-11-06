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
                <v-layout row
                          class="margin-top">
                    <v-flex d-flex
                            v-for="(partner, i) in partners"
                            :key="i">
                        <a :href="partner.href">
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
        margin-top 64px

    img
        height 60px

    .section-partners
        height 50vh

        .container
            height 100%

            .row
                height 100%

</style>