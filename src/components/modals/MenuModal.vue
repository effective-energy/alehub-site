<template>
    <modal name="menu-modal" class="menu">
        <div class="heading">

        </div>
        <div class="body">
            <div v-for="item in menu">
                <a v-scroll-to="item.path"
                    @click="closeModal('menu-modal')">
                    {{ item.name }}
                </a>
            </div>
        </div>
        <div class="footer">

        </div>
    </modal>
</template>

<script>
    export default {
        name: 'MenuModal',
        data() {
            return {
                menu: [
                    {
                        path: '#home',
                        name: 'Home'
                    },
                    {
                        path: '#description',
                        name: 'Description'
                    },
                    {
                        path: '#advantages',
                        name: 'Advantages'
                    },
                    {
                        path: '#features',
                        name: 'Features'
                    },
                    {
                        path: '#team',
                        name: 'Team'
                    },
                    {
                        path: '#advisors',
                        name: 'Advisors'
                    },
                    {
                        path: '#ico',
                        name: 'ICO'
                    },
                    {
                        path: '#roadmap',
                        name: 'Roadmap'
                    },
                    {
                        path: '#blog',
                        name: 'Blog'
                    },
                ],
            }
        },
        methods: {
            closeModal: function (name) {
                this.$parent.$emit('closeModal1', false);
                this.$modal.hide(name);
            },
        },
    }
</script>

<style lang="stylus">
    .menu
        .v--modal-background-click
            .v--modal-box
                top 74px !important
                left 0 !important
                width 100% !important
                height calc(100vh - 74px) !important

</style>

<style lang="stylus" scoped>
    .body
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center

        div
            padding 0.7rem 0
            a
                font-weight 700
                text-transform uppercase
                font-size 1.5rem
                border-bottom 2px solid #34343e
                padding-bottom 0.2rem


</style>