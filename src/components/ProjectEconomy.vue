<template>
    <div class="section section__dark" id="project-economy">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="header">
                        <h1 class="title">
                            {{ $t('projectEconomy.title') }}
                        </h1>
                        <div class="separator"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <img class="schema" src="../../static/images/grafik-new.png"
                         alt="project economy schema">
                </div>
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 p-l-40">
                    <div class="desc" v-html="$t('projectEconomy.text')"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectEconomy',
        props: {
            isRtl: {
                type: Boolean,
                required: true

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .schema
        width inherit

    .p-l-40
        padding-left 40px

        @media (max-width 992px)
            padding-left unset

    .section
        background-color #343a49
        color #f7f7f7
        padding 80px 0

        @media (max-width 425px)
            padding 60px 0

        h1.title
            font-size 40px

            @media (max-width 425px)
                font-size 30px

        .separator
            width 152px
            height 2px
            margin 25px 0 50px 0
            background-color #f7f7f7

        .header
            display flex
            flex-direction column
            align-items center

        .desc
            @media (max-width 992px)
                padding-top 60px

            @media (max-width 768px)
                padding-right 30px
                padding-left 30px
</style>