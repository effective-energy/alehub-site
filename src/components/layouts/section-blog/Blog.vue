<template>
    <v-layout column>
        <v-flex>
            <blog-top/>
        </v-flex>
        <v-flex style="margin-top: 80px;">
            <blog-bottom/>
        </v-flex>
    </v-layout>
</template>

<script>
    import BlogTop from './BlogTop';
    import BlogBottom from './BlogBottom';

    export default {
        name: 'Blog',
        components: {
            BlogTop,
            BlogBottom
        }
    }
</script>

<style lang="stylus" scoped>


</style>