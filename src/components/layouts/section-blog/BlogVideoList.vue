<template>
    <v-layout row align-end>
        <v-flex xs4
                v-for="item in list"
                :key="item.date">
            <blog-video :date="item.date"
                        :text="item.text"/>
        </v-flex>
    </v-layout>
</template>

<script>
    import BlogVideo from './BlogVideo';

    export default {
        name: 'BlogVideoList',
        components: {
            BlogVideo
        },
        data: () => ({
            list: [
                {
                    id: 1,
                    date: 1539853358738,
                    text: 'ALEHUB: On economy of project management system based on…'
                },
                {
                    id: 2,
                    date: 1539553358738,
                    text: 'An augmented version soon will be available!'
                },
                {
                    id: 3,
                    date: 1539253358738,
                    text: 'ALEHUB.io — blockchain and security for project development.'
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>

</style>