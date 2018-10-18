<template>
    <div class="blog-news">
        <v-layout column>
            <v-flex>
                <blog-news-item v-for="item in news"
                                :text="item.text"
                                :date="item.date"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import BlogNewsItem from './BlogNewsItem';

    export default {
        name: 'BlogNews',
        components: {
            BlogNewsItem
        },
        data: () => ({
            news: [
                {
                    id: 1,
                    date: 1539853358738,
                    text: 'An augmented version soon will be avaliable!'
                },
                {
                    id: 2,
                    date: 1539553358738,
                    text: 'ALEHUB: On economy of project management system based on blockchain technology.'
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