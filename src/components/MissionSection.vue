<template>
    <div class="section" id="mission">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="header">
                        <h1 class="title">
                            {{ $t('mission.title') }}
                        </h1>
                        <div class="separator"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12"
                     v-for="item in $t('mission.blocks')">
                    <h3>
                        {{ item.title }}
                    </h3>
                    <p>
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MissionSection'
    }
</script>

<style lang="stylus" scoped>
    .section
        background-color #343a49
        color #f7f7f7
        padding 120px 0

        h1.title
            font-size 60px

            @media (max-width 1024px)
                font-size 40px

        .separator
            width 152px
            height 2px
            margin 25px 0 50px 0
            background-color #f7f7f7

        .header
            @media (max-width 992px)
                display flex
                flex-direction column
                align-items center

        .row
            div
                padding 0 30px

</style>