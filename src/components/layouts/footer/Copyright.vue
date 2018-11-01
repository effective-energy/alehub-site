<template>
    <div class="copyright">
        <p>
            {{ company }}
        </p>
        <p>
            {{ copyright }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Copyright',
        data: () => ({
            company: 'Effective Energy LLC',
            copyright: '© 2018 All rights reserved'
        })
    }
</script>

<style lang="stylus" scoped>
    p
        margin 0
        color white
        opacity .72
        font-family MuseoSansCyrl300
        font-size 12px
        line-height 1.33
</style>