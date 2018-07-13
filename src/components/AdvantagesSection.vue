<template>
    <div class="advantages" id="advantages">
        <h3 class="advantages-title">
            {{ $t("advantages.title") }}
        </h3>
        <div class="separator"></div>
        <div class="advantages-body">
            <div class="select-point"
                 :class="{ 'direction-ltr': isRtl }">
                <div class="point"
                     :class="{'point-left-active': selectedType === 0 && !isRtl,
                     'point-left-inactive': selectedType === 1 && !isRtl,
                     'point-right-active__rtl': selectedType === 0 && isRtl,
                     'point-right-inactive__rtl': selectedType === 1 && isRtl,}"
                     @click="selectedType = 0">
                    <div class="point__inner">
                        {{ $t("advantages.lists[0].title") }}
                    </div>
                </div>
                <div class="point" :class="{
                     'point-right-active': selectedType === 1 && !isRtl ,
                     'point-right-inactive': selectedType === 0 && !isRtl,
                     'point-left-active__rtl': selectedType === 1 && isRtl,
                     'point-left-inactive__rtl': selectedType === 0 && isRtl }"
                     @click="selectedType = 1">
                    <div class="point__inner">
                        {{ $t("advantages.lists[1].title") }}
                    </div>
                </div>
            </div>

            <transition name="fade">
                <div class="project-management"
                     :class="{ 'project-management__rtl': isRtl }"
                     v-if="selectedType === 1">
                    <div class="left-block">
                        <div class="title">
                            <h1 class="title">
                                ALE
                            </h1>
                        </div>

                        <div class="item-table"
                             :key="index"
                             v-for="(desc, index) in $t('table.first.desc')">
                            <div class="band">
                            </div>
                            <span class="item-text">
                                {{ desc }}
                            </span>
                            <div class="hovered-underline"></div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="title">
                            <h1>{{ $t('table.second.title') }}</h1>
                        </div>

                        <div class="item-table"
                             :key="index"
                             v-for="(desc, index) in $t('table.second.desc')">
                            <span class="item-text">
                                {{ desc }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="other-blockchain"
                     :class="{ 'other-blockchain__rtl': isRtl }"
                     key="two"
                     v-if="selectedType === 0">
                    <div class="left-block">
                        <div class="title">
                            <h1 class="title">
                                ALE
                            </h1>
                        </div>

                        <div class="item-table"
                             :key="index"
                             v-for="(desc, index) in $t('table.third.desc')">
                            <div class="band">
                            </div>
                            <span class="item-text">
                                {{ desc }}
                            </span>
                            <div class="hovered-underline">
                            </div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="title">
                            <h1 class="title">
                                {{ $t('table.four.title') }}
                            </h1>
                        </div>

                        <div class="item-table"
                             :key="index"
                             v-for="(desc, index) in $t('table.four.desc')">
                            <span class="item-text">
                                {{ desc }}
                            </span>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdvantagesSection',
        props: {
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                advantagesFlag: 'first',
                selectedType: 1,
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .left-block, .right-block
        @media (min-width 425px) and (max-width 768px)
            padding 0 !important

    .item-text
        width 100%

    adv_padding-t-b = 60px

    .advantages
        font-family MuseoSansCyrl500
        display flex
        align-items center
        justify-content start
        flex-direction column
        width 100%
        padding adv_padding-t-b 15%
        background-color #f5f5f7

        @media (min-width 1440px) and (max-width 2560px)
            padding 60px 10%
            height "calc(784px + 2 * %s)" % adv_padding-t-b

        @media (min-width 1024px) and (max-width 1440px)
            padding 60px 10%
            height "calc(784px + 2 * %s)" % adv_padding-t-b

        @media (min-width 768px) and (max-width 1024px)
            padding 60px 7.5%
            height "calc(904px + 2 * %s)" % adv_padding-t-b

        @media (min-width 425px) and (max-width 768px)
            padding 60px 5%
            height "calc(1070px + 2 * %s)" % adv_padding-t-b

        @media (max-width 425px)
            padding 60px 10px
            height "calc(956px + 2 * %s)" % adv_padding-t-b

        .separator
            width 152px
            height 2px
            margin 25px 0
            background-color #34343e

            @media (max-width 425px)
                margin-top 12px

        .advantages-title
            font-size 60px
            display flex
            justify-content center
            width 100%
            font-family MuseoSansCyrl300

            @media (max-width 1024px)
                font-size 40px

            @media (max-width 425px)
                font-size 30px

        .advantages-body
            width 100%
            display flex
            justify-content center
            margin-bottom 60px
            position relative

            .select-point
                display flex
                justify-content flex-start
                width 1300px
                margin-bottom 30px
                position relative

                .point
                    cursor pointer
                    width 33%
                    padding 0 20px
                    display inline-block
                    font-size 18px
                    text-align center
                    color #34343e
                    opacity .3
                    -webkit-transition -webkit-transform .5s
                    transition all .5s
                    -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                    -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                    transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)

                .point-right-active, .point-left-active, .point-left-active__rtl, .point-right-active__rtl
                    cursor default
                    opacity 1

                    .point__inner
                        height 27px
                        display inline
                        border-bottom 2px solid #ffbc00
                        -webkit-transition -webkit-transform .5s
                        transition all .5s
                        -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                        -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                        transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)

                .point-right-active
                    -webkit-transform translateX(0)
                    -ms-transform translateX(0)
                    -o-transform translateX(0)
                    transform translateX(0)

                .point-right-active__rtl
                    -webkit-transform translateX(100%)
                    -ms-transform translateX(100%)
                    -o-transform translateX(100%)
                    transform translateX(100%)

                .point-left-active
                    -webkit-transform translateX(100%)
                    -ms-transform translateX(100%)
                    -o-transform translateX(100%)
                    transform translateX(100%)

                .point-left-active__rtl
                    -webkit-transform translateX(0)
                    -ms-transform translateX(0)
                    -o-transform translateX(0)
                    transform translateX(0)

                .point-right-inactive
                    cursor pointer
                    opacity .3
                    -webkit-transform translateX(100%)
                    -ms-transform translateX(100%)
                    -o-transform translateX(100%)
                    transform translateX(100%)

                    .point__inner
                        border-bottom 2px solid transparent

                .point-left-inactive
                    cursor pointer
                    opacity .3
                    -webkit-transform translateX(0)
                    -ms-transform translateX(0)
                    -o-transform translateX(0)
                    transform translateX(0)

                    .point__inner
                        border-bottom 2px solid transparent

                .point-right-inactive__rtl
                    cursor pointer
                    opacity .3
                    -webkit-transform translateX(200%)
                    -ms-transform translateX(200%)
                    -o-transform translateX(200%)
                    transform translateX(200%)

                    .point__inner
                        border-bottom 2px solid transparent

                .point-left-inactive__rtl
                    cursor pointer
                    opacity .3
                    -webkit-transform translateX(-100%)
                    -ms-transform translateX(-100%)
                    -o-transform translateX(-100%)
                    transform translateX(-100%)

                    .point__inner
                        border-bottom 2px solid transparent

            .block-advantages__active
                -webkit-transform translateX(0)
                -ms-transform translateX(0)
                -o-transform translateX(0)
                transform translateX(0)

            .block-advantages__left
                position absolute
                -webkit-transform translateX(-150%)
                -ms-transform translateX(-150%)
                -o-transform translateX(-150%)
                transform translateX(-150%)

            .block-advantages__right
                position absolute
                -webkit-transform translateX(-150%)
                -ms-transform translateX(-150%)
                -o-transform translateX(-150%)
                transform translateX(150%)

            .block-advantages
                display flex
                flex-direction column
                width 100%
                -webkit-transition -webkit-transform 0.5s
                transition all 0.5s
                -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)

                .advantage
                    width 100%
                    display flex
                    flex-direction row

                .item
                    width 100%
                    height 70px
                    display flex
                    justify-content center
                    align-items center
                    border-bottom 2px solid transparent

                    p
                        text-align center
                        margin 0

                .item-title
                    font-weight 700
                    border-bottom 2px solid transparent

    @media (max-width 1655px)
        .select-point
            padding 0 !important

    .project-management, .other-blockchain
        display flex
        justify-content center
        position absolute
        top 50px
        width 100%

        .left-block, .right-block
            width 50%
            max-width 650px
            display flex
            flex-direction column
            padding 20px 20px

            .title
                height 60px

                h1
                    font-size 18px
                    text-transform uppercase
                    margin 0
                    display flex
                    justify-content center
                    align-items center
                    text-align center
                    height 100%

        .right-block
            opacity .6

            .title
                background #fff
                margin-bottom 10px

            .item-table
                position relative
                height 70px
                display flex
                align-items flex-start
                line-height 1.2
                justify-content center
                text-align left
                margin 5px 0
                background #fff
                padding 0 40px
                flex-direction column

        .left-block
            .title
                -webkit-box-shadow 0 0 7px 0 rgba(0, 0, 0, .1)
                -moz-box-shadow 0 0 7px 0 rgba(0, 0, 0, .1)
                box-shadow 0 0 7px 0 rgba(0, 0, 0, .1)
                background #fff
                margin-bottom 10px

            .item-table
                position relative
                height 70px
                line-height 1.2
                display flex
                flex-direction row
                align-items center
                justify-content flex-start
                margin 5px 0
                background #fff
                padding 0 40px
                -webkit-transition all 0.5s ease-in-out
                -o-transition all 0.5s ease-in-out
                transition all 0.5s ease-in-out
                cursor pointer

                &:nth-child(even)
                    &:hover
                        .item-text
                            color #f7f7f7
                    .band
                        background-color #34343e
                &:nth-child(odd)
                    .band
                        background-color #fdd04a

                .item-text
                    text-align left
                    -webkit-transition color 0.5s ease-in-out
                    -o-transition color 0.5s ease-in-out
                    transition color 0.5s ease-in-out
                    z-index 1000

                &:hover
                    -webkit-box-shadow 0 0 7px 0 rgba(0, 0, 0, 0.2)
                    -moz-box-shadow 0 0 7px 0 rgba(0, 0, 0, 0.2)
                    box-shadow 0 0 7px 0 rgba(0, 0, 0, 0.2)

                    .band
                        width 100%

                .band
                    z-index 100
                    width 5px
                    height 100%
                    left 0
                    position absolute
                    -webkit-transition width 0.5s ease-in-out
                    -o-transition width 0.5s ease-in-out
                    transition width 0.5s ease-in-out

    .fade-enter-active,
    .fade-leave-active
        -webkit-transition all .5s
        -o-transition all .5s
        transition all .5s

    .fade-enter,
    .fade-leave-active
        opacity 0

    .other-blockchain__rtl, .project-management__rtl
        .left-block
            .item-table
                .band
                    right 0
                    left auto

        .left-block, .right-block
            .item-table
                .item-text
                    text-align right


    .other-blockchain.fade-enter
        -webkit-transform translateX(-100%)
        -ms-transform translateX(-100%)
        -o-transform translateX(-100%)
        transform translateX(-100%)

    .project-management.fade-enter
        -webkit-transform translateX(-100%)
        -ms-transform translateX(-100%)
        -o-transform translateX(-100%)
        transform translateX(100%)

    .other-blockchain.fade-leave-active
        -webkit-transform translateX(-100%)
        -ms-transform translateX(-100%)
        -o-transform translateX(-100%)
        transform translateX(-100%)

    .project-management.fade-leave-active
        -webkit-transform translateX(-100%)
        -ms-transform translateX(-100%)
        -o-transform translateX(-100%)
        transform translateX(100%)

    .other-blockchain__rtl.fade-enter
        -webkit-transform translateX(100%)
        -ms-transform translateX(100%)
        -o-transform translateX(100%)
        transform translateX(100%)

    .project-management__rtl.fade-enter
        -webkit-transform translateX(-100%)
        -ms-transform translateX(-100%)
        -o-transform translateX(-100%)
        transform translateX(-100%)

    .other-blockchain__rtl.fade-leave-active
        -webkit-transform translateX(100%)
        -ms-transform translateX(100%)
        -o-transform translateX(100%)
        transform translateX(100%)

    .project-management__rtl.fade-leave-active
        -webkit-transform translateX(-100%)
        -ms-transform translateX(-100%)
        -o-transform translateX(-100%)
        transform translateX(-100%)

    @media (max-width 1440px)
        .left-block, .right-block
            .item-table
                height 90px

                .item-text
                    text-align left

            .title
                height 60px

    @media (max-width 1024px)
        .advantages
            .advantages-body
                .project-management, .other-blockchain
                    top 70px

                    .left-block, .right-block
                        .item-table
                            height 90px
                            padding 0 20px

                            .item-text
                                text-align left

                        .title
                            height 60px

    @media (max-width 768px) and (min-width 630px)
        .advantages
            .advantages-body
                .select-point
                    display flex
                    justify-content space-between

                    .point
                        width 50%

                    .point-left-active,
                    .point-right-inactive
                        -webkit-transform translateX(-100%)
                        -ms-transform translateX(-100%)
                        -o-transform translateX(-100%)
                        transform: translateX(0%)

                .project-management, .other-blockchain
                    .left-block, .right-block
                        .item-table
                            height 120px
                            padding 0 20px

                            .item-text
                                text-align left

                        .title
                            height 80px

    @media (max-width 630px) and (min-width 425px)
        .advantages
            .advantages-body
                .select-point
                    display flex
                    justify-content space-between

                    .point
                        width 50%

                    .point-left-active,
                    .point-right-inactive
                        -webkit-transform translateX(-100%)
                        -ms-transform translateX(-100%)
                        -o-transform translateX(-100%)
                        transform: translateX(0%)

                .project-management, .other-blockchain
                    top 100px

                    .left-block, .right-block
                        .item-table
                            height 120px
                            padding 0 20px
                            justify-content center

                            .item-text
                                text-align center

                        .title
                            height 100px

    @media (max-width 425px) and (min-width 320px)
        .advantages
            .advantages-body
                .select-point
                    display flex
                    justify-content space-between

                    .point
                        width 50%

                    .point-left-active,
                    .point-right-inactive
                        -webkit-transform translateX(-100%)
                        -ms-transform translateX(-100%)
                        -o-transform translateX(-100%)
                        transform: translateX(0%)

                .project-management, .other-blockchain
                    top 100px

                    .left-block, .right-block
                        padding 0

                        .item-table
                            height 100px
                            padding 0 20px
                            margin 5px 0
                            justify-content center

                            .item-text
                                text-align center

                        .title
                            height 100px

    @media (max-width 320px)
        .advantages
            .advantages-body
                .select-point
                    display flex
                    justify-content space-between

                    .point
                        width 50%

                    .point-left-active,
                    .point-right-inactive
                        -webkit-transform translateX(-100%)
                        -ms-transform translateX(-100%)
                        -o-transform translateX(-100%)
                        transform: translateX(0%)

                .project-management, .other-blockchain
                    top 100px

                    .left-block, .right-block
                        padding 0

                        .item-table
                            height 100px
                            padding 0 20px
                            margin 5px 0
                            justify-content center

                            .item-text
                                font-size 14px
                                text-align center

                        .title
                            height 100px

    @media screen and (max-width 748px)
        .item
            height 100px !important

        .left-title
            background-color #ffc107aa !important

        .right-title
            background-color #6c757d fa !important

        .left
            margin-right 5px
            background-color #ffc1078a
            -webkit-box-shadow 0 0 20px #ffc1078a
            -moz-box-shadow 0 0 20px #ffc1078a
            box-shadow 0 0 20px #ffc1078a

        .right
            margin-right 5px
            background-color #6c757d 8 a
            -webkit-box-shadow 0 0 20px #ffc1078a
            -moz-box-shadow 0 0 20px #6c757d 8 a
            box-shadow 0 0 20px #6c757d 8 a
</style>