<template>
    <v-layout align-center row>
        <v-flex xs3>
            <div class="image">
            </div>
        </v-flex>
        <v-flex xs9>
            <p>
                {{ date }}
            </p>
            <p>
                {{ text }}
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'BlogNewsItem',
        props: {
            date: {
                type: Number,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .image
        height 100px
        width 100px
        background-color #6a6ba7
</style>