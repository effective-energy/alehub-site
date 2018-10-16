<template>
    <div class="index">
        <!--<v-container grid-list-md text-xs-center>-->
            <!--<v-layout row wrap>-->
                <!--<v-flex xs12>-->
                    <!--<v-card dark color="primary">-->
                        <!--<v-card-text class="px-0">12</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
                <!--<v-flex v-for="i in 2" :key="`6${i}`" xs6>-->
                    <!--<v-card dark color="secondary">-->
                        <!--<v-card-text class="px-0">6</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
                <!--<v-flex v-for="i in 3" :key="`4${i}`" xs4>-->
                    <!--<v-card dark color="primary">-->
                        <!--<v-card-text class="px-0">4</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
                <!--<v-flex v-for="i in 4" :key="`3${i}`" xs3>-->
                    <!--<v-card dark color="secondary">-->
                        <!--<v-card-text class="px-0">3</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
                <!--<v-flex v-for="i in 6" :key="`2${i}`" xs2>-->
                    <!--<v-card dark color="primary">-->
                        <!--<v-card-text class="px-0">2</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
                <!--<v-flex v-for="i in 12" :key="`1${i}`" xs1>-->
                    <!--<v-card dark color="secondary">-->
                        <!--<v-card-text class="px-0">1</v-card-text>-->
                    <!--</v-card>-->
                <!--</v-flex>-->
            <!--</v-layout>-->
        <!--</v-container>-->
        <section-main/>
        <section-slogan/>
        <section-reason-investing/>
    </div>
</template>

<script>
    import SectionMain from './section/SectionMain';
    import SectionSlogan from './section/SectionSlogan';
    import SectionReasonInvesting from './section/SectionReasonInvesting';

    export default {
        name: 'Index2',
        components: {
            SectionMain,
            SectionSlogan,
            SectionReasonInvesting
        }
    }
</script>

<style lang="stylus" scoped>
</style>