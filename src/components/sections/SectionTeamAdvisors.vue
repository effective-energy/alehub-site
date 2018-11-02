<template>
    <div class="section-team-advisors">
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
                <v-flex v-for="advisor in advisors"
                        xs12
                        sm12
                        md12
                        lg4
                        xl4>
                    <advisor class="advisor"
                             :class="{ 'active': advisor.active }"
                             :name="advisor.name"
                             :position="advisor.position"
                             :text="advisor.text"
                             @click.native="chooseAdvisor(advisors, advisor)"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';
    import Advisor from '../layouts/section-team-advisors/Advisor';

    export default {
        name: 'SectionsTeamAdvisors',
        components: {
            TitleSection,
            Advisor
        },
        data: () => ({
            title: 'Адвизоры',
            advisors: [
                {
                    name: 'Филипп Нанн',
                    position: 'Entrepreneur, CEO and international speaker on Blockchain, Cryptocurrency and fintech',
                    text: 'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with ' +
                        'substantial assets under management and a suite of investment products across multiple ' +
                        'classes for individuals and institutions in the UK and overseas.',
                    active: false
                },
                {
                    name: 'Владимир Никитин',
                    position: 'Business and Legal consultant',
                    text: 'Business and Legal consultant with over ten years experience in the legal, ' +
                        'finance, retail, and IT industries. Over the past three years, ' +
                        'I developed a strong network of over 31 000 contacts/followers in the crypto ' +
                        'space. As an active supporter and advocate of blockchain technology, I provide' +
                        ' consultancy and advice to selected ICOs.',
                    active: true
                },
                {
                    name: 'Николай Шкилев',
                    position: 'Entrepreneur, PhD, owner and co-owner successful business ' +
                        'projects, ICO/STO advisor and blockchain expert',
                    text: '  Nikolay has 20 years of experience in large-scale transaction projects. ' +
                        'Has many awards and titles in the IT business: Self-Made Russia award, ' +
                        'Tech guru, Super TOP award. Founder and CEO of Private Business Club.',
                    active: false
                }
            ]
        }),
        methods: {
            chooseAdvisor(advisors, advisor) {
                let chosenAdvisor = advisors.find(a => a.name === advisor.name && a.position === advisor.position);
                if (chosenAdvisor && !chosenAdvisor.active) {
                    advisors.find(a => a.active).active = false;
                    chosenAdvisor.active = true;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .advisor
        cursor pointer
        -webkit-filter grayscale(50%)
        filter grayscale(50%)
        transition transform 400ms ease

        &.active
            transform scale(1)
            -webkit-filter grayscale(0)
            filter grayscale(0)

    .section-team-advisors
        height 90vh
</style>