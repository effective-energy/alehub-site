<template>
    <div class="section" id="mission">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <h1 class="title">
                        {{ $t('mission.title') }}
                    </h1>
                    <div class="separator"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5">
                    <h3>
                        {{ $t('mission.mission.title') }}
                    </h3>
                    <p>
                        {{ $t('mission.mission.text') }}
                    </p>
                </div>
                <div class="col-xl-5 offset-xl-1">
                    <h3>
                        {{ $t('mission.vision.title') }}
                    </h3>
                    <p>
                        {{ $t('mission.vision.text') }}
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

        .separator
            width 152px
            height 2px
            margin 25px 0 50px 0
            background-color #f7f7f7

</style>