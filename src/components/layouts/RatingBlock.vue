<template>
    <div class="section" id="ratings">
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
                        width: '322px',
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
                    }
                ]
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
        .list
            display flex
            justify-content flex-start
            padding 150px 150px 0 150px

            @media (min-width 150px) and (max-width 150px)
                padding 100px 100px 0 100px

            .mark
                z-index 10
                width 25%
                background-color transparent

                @media (min-width 1024px) and (max-width 1440px)
                    width 33.3%
</style>