<template>
    <v-layout column>
        <v-flex>
            <v-layout row>
                <v-flex>
                    {{ title }}
                </v-flex>
                <v-flex>
                    {{ total }}
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex>
            <cap-progress/>
        </v-flex>
    </v-layout>
</template>

<script>
    import CapProgress from './CapProgress';

    export default {
        name: 'Cap',
        components: {
            CapProgress
        },
        props: {
            title: {
                type: String,
                required: true
            },
            total: {
                type: [String, Number],
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>