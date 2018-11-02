<template>
    <div class="index">
        <navigation/>
        <section-main/>
        <section-represent/>
        <section-slogan/>
        <section-placing-tokens/>
        <section-distribution-tokens/>
        <section-reason-investing/>
        <section-subscribe/>
        <section-partners/>
        <section-questions/>
        <section-blog/>
        <section-welcome/>
        <section-end-token-sale/>
        <footer-block/>
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
    import SectionSubscribe from './sections/SectionSubscribe';
    import SectionPartners from './sections/SectionPartners';
    import SectionQuestions from './sections/SectionQuestions';
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