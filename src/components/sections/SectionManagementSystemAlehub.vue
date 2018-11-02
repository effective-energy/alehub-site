<template>
    <div class="section-management-system-now">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout row>
                <v-flex d-flex justify-center>
                    <ellipse-blur/>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex class="increase-z">
                    <title-section :title="title"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import EllipseBlur from '../layouts/ellipse/EllipseBlur';
    import TitleSection from '../layouts/text/Title1Section';

    export default {
        name: 'SectionManagementSystemAlehub',
        components: {
            EllipseBlur,
            TitleSection
        },
        data: () => ({
            title: 'Децентрализованная платформа Alehub'
        })
    }
</script>

<style lang="stylus" scoped>
    .increase-z
        z-index 2

    .section-management-system-now
        height 80vh
        position relative
</style>