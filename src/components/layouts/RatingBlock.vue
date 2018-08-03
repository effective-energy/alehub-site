<template>
    <div id="ratings"
         class="section"
         :class="calcSectionClass">
        <div class="list">
            <div class="mark" v-for="item in list">
                <a target="_blank"
                   :href="item.href"
                   :title="item.title">
                    <img border="0"
                         :width="item.width"
                         :height="item.height"
                         :src="item.src"
                         :alt="item.alt"
                         @error="imageLoadOnError(item.id)"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RatingBlock',
        props: {
            isDark: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                list: [
                    {
                        id: 1,
                        title: 'Alehub on ICO marks',
                        href: 'https://icomarks.com/ico/alehub',
                        src: 'https://icomarks.com/widget/a/alehub/horizontal.svg',
                        altSrc: '../../../static/images/ratings/ico-marks.png',
                        alt: 'Alehub ICO rating',
                        width: '308px',
                        height: '90px'
                    },
                    {
                        id: 2,
                        title: 'Alehub on ICObench',
                        href: 'https://icobench.com/ico/alehub',
                        src: 'https://icobench.com/rated/alehub?shape=horizontal&size=s',
                        altSrc: '../../../static/images/ratings/ico-bench.png',
                        alt: 'Alehub ICO rating',
                        width: '244px',
                        height: '90px'
                    },
                    {
                        id: 3,
                        title: 'Alehub on TrackICO',
                        href: 'https://www.trackico.io/ico/alehub/',
                        src: 'https://www.trackico.io/widget/horizontal/alehub/483.png',
                        altSrc: '../../../static/images/ratings/ico-track.png',
                        alt: 'Alehub TrackICO rating',
                        width: '322px',
                        height: '90px'
                    },
                    {
                        id: 4,
                        title: 'Alehub on ICO rating',
                        href: 'https://icorating.com/ico/alehub-ale/?utm_source=widget&utm_medium=alehub-ale',
                        src: 'https://icorating.com/widgets/alehub-ale/?shape=horizontal&size=medium',
                        altSrc: '../../../static/images/ratings/ico-rating.png',
                        alt: 'Alehub ICO rating',
                        width: '342px',
                        height: '90px'
                    }
                ]
            }
        },
        computed: {
            calcSectionClass: function () {
                return (this.isDark) ? 'section__dark' : 'section__light';
            }
        },
        methods: {
            imageLoadOnError: function (id) {
                let el = this.list.find(item => {
                    return item.id === id;
                });

                el.src = el.altSrc;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .section

        &.section__dark
            background-color #343a49

        &.section__light
            background-color #ececf0

        .list
            display flex
            justify-content space-evenly
            flex-wrap wrap
            padding 150px 150px 0 150px

            @media (min-width 1024px) and (max-width 1440px)
                padding 100px 100px 0 100px

            @media (min-width 768px) and (max-width 1024px)
                padding 75px

            @media (max-width 425px)
                padding 50px 0

            @media (max-width 1024px)
                height 100vh
                flex-direction column
                align-items center

            .mark
                z-index 10
                background-color transparent
                margin-bottom 30px
</style>