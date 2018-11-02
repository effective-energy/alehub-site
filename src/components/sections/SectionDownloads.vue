<template>
    <div class="section-downloads">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout row wrap>
                <v-flex v-for="(item, i) in items"
                        :key="i"
                        d-flex
                        justify-center
                        xs12
                        sm6
                        md6
                        lg3
                        xl3>
                    <item-downloads :src="item.src"
                                    :href="item.href"
                                    :title="item.title"
                                    :version="item.version"
                                    :bit="item.bit"
                                    :date="item.date"
                                    :ready="item.ready"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import ItemDownloads from '../layouts/section-downloads/ItemDownloads';

    export default {
        name: 'SectionDownloads',
        components: {
            ItemDownloads
        },
        data: () => ({
            items: [
                {
                    src: '../../../../static/images/icons/downloads/apple-ic.svg',
                    href: 'https://alehub.io/wallet/alehub-0.0.2.dmg',
                    title: 'macOS',
                    version: 'Version 0.0.2',
                    bit: '64-bit',
                    date: '05.05.2018',
                    ready: true
                },
                {
                    src: '../../../../static/images/icons/downloads/windows-ic.svg',
                    href: '',
                    title: 'Windows',
                    version: 'Version 0.0.1',
                    bit: '64-bit',
                    date: false,
                    ready: false
                },
                {
                    src: '../../../../static/images/icons/downloads/linux-ic.svg',
                    href: 'https://alehub.io/wallet/alehub-0.0.2.deb',
                    title: 'Linux',
                    version: 'Version 0.0.2',
                    bit: '64-bit',
                    date: '10.05.2018',
                    ready: true
                },
                {
                    src: '../../../../static/images/icons/downloads/android-ic.svg',
                    href: 'https://alehub.io/wallet/alehub.apk',
                    title: 'Android',
                    version: 'Version 0.0.1',
                    bit: false,
                    date: '22.05.2018',
                    ready: true
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>
    .section-downloads
        height 70vh
</style>