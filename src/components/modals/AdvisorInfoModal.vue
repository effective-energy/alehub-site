<template>
    <modal name="advisor-info-modal"
           class="advisor-info"
           :height="'auto'">

        <div class="advisor-info__wrap">
            <div class="advisor-info__header">
                <h3>
                    {{ advisor.name }}
                </h3>
                <div @click="closeModal('advisor-info-modal')">
                    <img src="../../../static/images/cancel-dark.svg" alt="close">
                </div>
            </div>
            <div class="advisor-info__body">
                <div class="advisor-info__description"
                     v-html="advisor.description">
                </div>
            </div>
            <div class="advisor-info__footer">
                <div v-if="advisor.social.length !== 0">
                    <a v-for="social in advisor.social" :href="social.link">
                        <img class="in"
                             :src="social.src"
                             :alt="social.type"/>
                    </a>
                </div>
            </div>
        </div>

    </modal>
</template>

<script>
    export default {
        name: 'AdvisorInfoModal',
        props: {
            advisor: {
                type: Object,
                required: true
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            closeModal: function (name) {
                this.$modal.hide(name);
            }
        }
    }
</script>

<style lang="stylus">
    .advisor-info
        .v--modal-background-click
            .v--modal-box
                position relative
                border-radius 10px

                @media (max-width 768px)
                    border-radius 0
                    width 100% !important
                    left 0 !important
                    height calc(100vh - 74px - 40px) !important
                    top 114px !important


</style>

<style lang="stylus" scoped>
    .advisor-info__wrap
        position relative
        height 100%
        padding 30px 40px
        display flex
        flex-direction column

        .advisor-info__header
            width 100%
            min-height 10%
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            border-bottom 1px solid #ccc
            padding-bottom 10px

            div
                cursor pointer

                img
                    width 15px

        .advisor-info__body
            position relative
            width 100%
            height 80%
            padding 30px 0

            .advisor-info__description
                max-height 500px
                overflow-y scroll

                @media (max-width 768px)
                    max-height 100%

                p
                    font-size 16px

        .advisor-info__footer
            width 100%
            min-height 5%
            display flex
            flex-direction row
            justify-content center
            align-items center

            div
                width 30%
                display flex
                flex-direction row
                justify-content space-around

                a
                    padding 0 3.5px
                    -webkit-transition all .5s ease
                    -o-transition all .5s ease
                    transition all .5s ease

                    &:hover
                        background-color #ffd24f

                    .in
                        width 17px
                        height 17px
</style>