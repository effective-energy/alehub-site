<template>
    <div class="button-choose"
         :class="{ 'button-choose__rtl': rtl }"
         id="button-choose">
        <button type="button"
                id="do-video-theme"
                class="button-choose_video"
                :class="{ 'button-choose__active-video': isVideo }"
                @click="doVideoTheme">
            <img src="../../../static/images/play.svg"
                 alt="video">
        </button>
        <button type="button"
                id="do-light-theme"
                class="button-choose_light"
                :class="{ 'button-choose__active': !isDark && !isVideo }"
                @click="doLightTheme">
        </button>
        <button type="button"
                id="do-dark-theme"
                class="button-choose_dark"
                :class="{ 'button-choose__active': isDark && !isVideo }"
                @click="doDarkTheme">
        </button>
    </div>
</template>

<script>
    export default {
        name: 'GroupChangeThemeButton',
        props: {
            rtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                isVideo: false,
                isDark: false,
                reBuild: true
            }
        },
        computed: {
            widthLarge1024: function () {
                return window.innerWidth >= 1024;
            },
        },
        methods: {
            setVideoRate: function () {
                if (this.isVideo)
                    document.querySelector('video').playbackRate = 0.75;
            },
            doVideoTheme: function () {
                this.isDark = true;
                this.isVideo = true;
                this.setVideoRate();
                this.$parent.$emit('isDarkTheme', true);
                localStorage.setItem('color-theme', 'video');
                this.reBuild = false;
                setTimeout(() => {
                    this.reBuild = true;
                }, 100);
            },
            doLightTheme: function () {
                let flag = false;
                if (this.isVideo)
                    flag = true;

                this.isDark = false;
                this.isVideo = false;
                this.$parent.$emit('isDarkTheme', false);
                localStorage.setItem('color-theme', 'light');
                this.reBuild = false;
                setTimeout(() => {
                    this.reBuild = true;
                    if (flag)
                        this.startAnime();
                }, 100);
            },
            doDarkTheme: function () {
                let flag = false;
                if (this.isVideo)
                    flag = true;

                this.isDark = true;
                this.isVideo = false;
                this.$parent.$emit('isDarkTheme', true);
                localStorage.setItem('color-theme', 'dark');
                this.reBuild = false;
                setTimeout(() => {
                    this.reBuild = true;
                    if (flag)
                        this.startAnime();
                }, 100);
            },
            initTheme: function () {
                setTimeout(() => {
                    if (localStorage.getItem('color-theme') === 'dark' && this.widthLarge1024) {
                        this.isDark = true;
                        this.isVideo = false;
                        this.$parent.$emit('isDarkTheme', true);
                    } else if (localStorage.getItem('color-theme') === 'light' && this.widthLarge1024) {
                        this.isDark = false;
                        this.isVideo = false;
                        this.$parent.$emit('isDarkTheme', false);
                    } else if (localStorage.getItem('color-theme') === 'video' && this.widthLarge1024) {
                        this.isDark = true;
                        this.isVideo = true;
                        this.setVideoRate();
                        this.$parent.$emit('isDarkTheme', true);
                    } else if (this.widthLarge1024) {
                        this.isDark = true;
                        this.isVideo = true;
                        localStorage.setItem('color-theme', 'video');
                        this.$parent.$emit('isDarkTheme', true);
                    } else {
                        this.isDark = false;
                        this.isVideo = false;
                        this.$parent.$emit('isDarkTheme', false);
                    }
                }, 40);
            }
        },
        mounted() {
            this.setVideoRate();
            this.initTheme();
        }
    }
</script>

<style lang="stylus" scoped>
    .button-choose__stop
        position absolute !important

    .button-choose
        position fixed
        left 20px
        top 40%
        width 40px
        z-index 1000

        @media (max-width 1024px)
            display none

        .button-choose__active
            opacity 1 !important
            border 2px solid #ffd24f !important

        .button-choose__active-video
            opacity 1 !important
            border 2px solid #343a49 !important

        .button-choose_video
            padding 0
            padding-left 5px
            position relative
            opacity 0.8
            cursor pointer
            width 40px
            height 40px
            margin-bottom 15px
            background-color #ffd24f
            border-radius 50%
            border 1px solid #f7f7f7
            -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)

            &:focus
                outline none

            img
                width 70%

        .button-choose_light
            opacity 0.8
            cursor pointer
            width 40px
            height 40px
            margin-bottom 15px
            background-color #f7f7f7
            border-radius 50%
            border 1px solid #f7f7f7
            -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)

            &:focus
                outline none

        .button-choose_dark
            opacity 0.8
            cursor pointer
            width 40px
            height 40px
            background-color #343a49
            border-radius 50%
            border 1px solid #343a49
            -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)

            &:focus
                outline none

    .button-choose__rtl
        right 20px

        .button-choose_video
            padding-left 0
            padding-right 5px

            img
                transform rotateY(180deg)
</style>