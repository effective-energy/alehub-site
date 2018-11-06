<template>
    <div class="index">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <navigation/>
            <section-main/>
            <!--<section-represent/>-->
            <!--<section-slogan/>-->
            <!--<section-placing-tokens/>-->
            <!--&lt;!&ndash;<section-distribution-tokens/>&ndash;&gt;-->
            <!--<section-reason-investing/>-->
            <!--<section-management-system-now/>-->
            <!--<section-management-system-alehub/>-->
            <!--<section-advantages/>-->
            <!--<section-downloads/>-->
            <!--<section-whitepaper/>-->
            <!--<section-roadmap/>-->
            <!--<section-subscribe/>-->
            <!--<section-partners/>-->
            <!--<section-team-advisors/>-->
            <!--<section-team/>-->
            <!--<sections-team-serokell/>-->
            <!--<section-media/>-->
            <!--&lt;!&ndash;<section-questions/>&ndash;&gt;-->
            <!--<section-blog/>-->
            <!--<section-welcome/>-->
            <!--<section-end-token-sale/>-->
            <!--<footer-block/>-->
        </v-container>
    </div>
</template>

<script>
    import Navigation from './layouts/navigation/Navigation';
    import SectionMain from './sections/SectionMain';
    import SectionRepresent from './sections/SectionRepresent';
    import SectionSlogan from './sections/SectionSlogan';
    import SectionPlacingTokens from './sections/SectionPlacingTokens';
    import SectionDistributionTokens from './sections/SectionDistributionTokens';
    import SectionReasonInvesting from './sections/SectionReasonInvesting';
    import SectionManagementSystemNow from './sections/SectionManagementSystemNow';
    import SectionManagementSystemAlehub from './sections/SectionManagementSystemAlehub';
    import SectionAdvantages from './sections/SectionAdvantages';
    import SectionDownloads from './sections/SectionDownloads';
    import SectionRoadmap from './sections/SectionRoadmap';
    import SectionWhitepaper from './sections/SectionWhitepaper';
    import SectionSubscribe from './sections/SectionSubscribe';
    import SectionPartners from './sections/SectionPartners';
    import SectionTeamAdvisors from './sections/SectionTeamAdvisors';
    import SectionTeam from './sections/SectionTeam';
    import SectionsTeamSerokell from './sections/SectionTeamSerokell';
    import SectionQuestions from './sections/SectionQuestions';
    import SectionMedia from './sections/SectionMedia';
    import SectionBlog from './sections/SectionBlog';
    import SectionWelcome from './sections/SectionWelcome';
    import SectionEndTokenSale from './sections/SectionEndTokenSale';
    import FooterBlock from './FooterBlock';

    export default {
        name: 'Index2',
        components: {
            Navigation,
            SectionMain,
            SectionRepresent,
            SectionSlogan,
            SectionPlacingTokens,
            SectionDistributionTokens,
            SectionReasonInvesting,
            SectionManagementSystemNow,
            SectionManagementSystemAlehub,
            SectionAdvantages,
            SectionDownloads,
            SectionTeamAdvisors,
            SectionTeam,
            SectionsTeamSerokell,
            SectionMedia,
            SectionWhitepaper,
            SectionRoadmap,
            SectionSubscribe,
            SectionPartners,
            SectionQuestions,
            SectionBlog,
            SectionWelcome,
            SectionEndTokenSale,
            FooterBlock
        }
    }
</script>

<style lang="stylus" scoped>
    .index
        background-color #020449
</style>