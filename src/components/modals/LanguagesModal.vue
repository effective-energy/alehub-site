<template>
    <modal name="languages-modal"
           class="languages"
           @opened="initModalScreen"
           @closed="closedModal('languages-modal')">

        <div class="body">
            <div v-for="(item, langIndex) in languages">
                <p @click="changeLanguage(langIndex)">
                    {{ item.name }}
                </p>
            </div>
        </div>
    </modal>
</template>

<script>
    export default {
        name: 'LanguagesModal',
        data() {
            return {
                languages: [
                    {
                        name: 'eng'
                    },
                    {
                        name: 'rus'
                    }
                ],
            }
        },
        methods: {
            closeModal: function (name) {
                this.$parent.$emit(name);
                this.$modal.hide(name);
            },
            closedModal: function () {
                this.$parent.$emit('closeModal');
            },
            initModalScreen: function () {
                // this.closeModal('menu-modal');
                this.$parent.$emit('changeNavbar');
            },
            changeLanguage(index) {
                localStorage.setItem('systemLang', this.languages[index].name);
                this.$i18n.locale = this.languages[index].name;
                this.$parent.$emit('changeModalLanguage', this.languages[index].name);
                this.closeModal('languages-modal');
            },
        },
    }
</script>

<style lang="stylus">
    .languages
        top 74px !important
        .v--modal-background-click
            .v--modal-box
                top 0 !important
                left 0 !important
                width 100% !important
                height calc(100vh - 74px) !important

            .v--modal
                -webkit-box-shadow none !important
                -moz-box-shadow none !important
                box-shadow none !important
                border-radius 0

</style>

<style lang="stylus" scoped>
    .body
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center

        div
            padding 1.1rem 0
            p
                font-weight 700
                text-transform uppercase
                font-size 20px
                border-bottom 2px solid #34343e
                padding-bottom 0.2rem


</style>