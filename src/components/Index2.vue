<template>
    <div class="index">
        <section-main/>
        <section-represent/>
        <section-slogan/>
        <section-reason-investing/>
        <section-blog/>
        <section-welcome/>
    </div>
</template>

<script>
    import SectionMain from './sections/SectionMain';
    import SectionRepresent from './sections/SectionRepresent';
    import SectionSlogan from './sections/SectionSlogan';
    import SectionReasonInvesting from './sections/SectionReasonInvesting';
    import SectionBlog from './sections/SectionBlog';
    import SectionWelcome from './sections/SectionWelcome';

    export default {
        name: 'Index2',
        components: {
            SectionMain,
            SectionRepresent,
            SectionSlogan,
            SectionReasonInvesting,
            SectionBlog,
            SectionWelcome
        }
    }
</script>

<style lang="stylus" scoped>
</style>