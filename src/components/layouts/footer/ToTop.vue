<template>
    <div class="to-top"
         @click="toTop">
        <img class="arrow"
             src="../../../../static/images/arrows/arrow-top-aaaaaa.svg"
             alt="to top">
        <h4 class="text">
            {{ text }}
        </h4>
    </div>
</template>

<script>
    export default {
        name: 'ToTop',
        data: () => ({
            text: 'Наверх'
        }),
        methods: {
            toTop() {
                document.getElementById('navigation')
                    .scrollIntoView(
                        {
                            block: 'start',
                            behavior: 'smooth'
                        }
                    );
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .to-top
        text-align center
        cursor pointer

    .arrow
        height 20px
        margin-bottom 8px

    .text
        font-family MuseoSansCyrl500
        font-size 18px
        text-transform uppercase
        color #aaaaaa
</style>