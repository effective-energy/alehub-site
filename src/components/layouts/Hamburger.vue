<template>
    <div class="hamburger"
         :class="{ 'is-active': active }"
         @click="toggle">
        <span class="line"
              v-for="n in 3"
              :class="{ 'line-white': dark }">
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Hamburger',
        props: {
            dark: {
                type: Boolean,
                required: true
            },
            closed: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            closed: function (v) {
                if (!v)
                    this.active = false;
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            /**
             * switch active state hamburger
             */
            toggle: function () {
                this.active = !this.active;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .hamburger
        cursor pointer
        z-index 100

        &.is-active
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out
            -webkit-transition-delay 0.6s
            -o-transition-delay 0.6s
            transition-delay 0.6s
            -webkit-transform rotate(45deg)
            -ms-transform rotate(45deg)
            -o-transform rotate(45deg)
            transform rotate(45deg)

            .line
                &:nth-child(1), &:nth-child(3)
                    -webkit-transition-delay 0.3s
                    -o-transition-delay 0.3s
                    transition-delay 0.3s

                &:nth-child(2)
                    width 0

                &:nth-child(1)
                    -webkit-transform translateY(10px)
                    -ms-transform translateY(10px)
                    -o-transform translateY(10px)
                    transform translateY(10px)

                &:nth-child(3)
                    -webkit-transform translateY(-10px) rotate(90deg)
                    -ms-transform translateY(-10px) rotate(90deg)
                    -o-transform translateY(-10px) rotate(90deg)
                    transform translateY(-10px) rotate(90deg)

        .line
            cursor pointer
            width 30px
            height 2px
            background-color #3e3d42
            display block
            margin 8px auto
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out

            &.line-white
                background-color #ffffff !important
</style>