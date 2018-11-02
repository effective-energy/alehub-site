<template>
    <div class="sections-team-advisors">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout row>
                <v-flex xs12>
                    <title-section :title="title"/>
                </v-flex>
            </v-layout>
            <v-layout row wrap style="margin-top: 80px;">
                <v-flex xs12 sm12 md12 lg4 xl4>
                    <div class="member" style="transform: scale(0.8)">
                        <div class="photo">
                        </div>
                        <h3 class="name">
                            Филипп Нанн
                        </h3>
                        <p class="position">
                            Entrepreneur, CEO and international speaker
                            on Blockchain, Cryptocurrency and fintech
                        </p>
                        <p class="text">
                            Phillip Nunn founded The Blackmore Group in 2013.
                            Today it’s grown into a business with substantial assets
                            under management and a suite of investment products
                            across multiple classes for individuals and institutions in
                            the UK and overseas.
                        </p>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md12 lg4 xl4>
                    <div class="member">
                        <div class="photo">
                        </div>
                        <h3 class="name">
                            Владимир Никитин
                        </h3>
                        <p class="position">
                            Business and Legal consultant
                        </p>
                        <p class="text">
                            Business and Legal consultant with over ten years
                            experience in the legal, finance, retail, and IT industries.
                            Over the past three years, I developed a strong
                            network of over 31 000 contacts/followers
                            in the crypto space. As an active supporter and advocate
                            of blockchain technology, I provide consultancy
                            and advice to selected ICOs.
                        </p>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md12 lg4 xl4>
                    <div class="member" style="transform: scale(0.8)">
                        <div class="photo">
                        </div>
                        <h3 class="name">
                            Николай Шкилев
                        </h3>
                        <p class="position">
                            Entrepreneur, PhD, owner and co-owner successful
                            business projects, ICO/STO advisor and blockchain expert
                        </p>
                        <p class="text">
                            Nikolay has 20 years of experience in large-scale
                            transaction projects. Has many awards and titles in the IT
                            business: Self-Made Russia award, Tech guru, Super TOP
                            award. Founder and CEO of Private Business Club.
                        </p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';

    export default {
        name: 'SectionsTeamAdvisors',
        components: {
            TitleSection
        },
        data: () => ({
            title: 'Адвизоры'
        })
    }
</script>

<style lang="stylus" scoped>
    .member
        display flex
        flex-direction column
        align-items center

    .name
        font-family: MuseoSansCyrl500;
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin-top 24px

    .position
        opacity: 0.72;
        font-family: MuseoSansCyrl;
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin-top 16px

    .text
        font-family: MuseoSansCyrl300;
        font-size: 16px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin-top 16px

    .photo
        height 160px
        width 160px
        border-radius 50%
        background-color #ff8c8a

    .sections-team-advisors
        height 90vh
</style>