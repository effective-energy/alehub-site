<template>
    <div class="index">
        <header-block :is-main-dark="isDark"/>
        <home-section :is-dark-section="isDarkSection"/>
        <advantages-section/>
        <features-section :is-features="isFeatures"/>
        <team-section :is-team="isTeam"/>
        <ico-section/>
        <roadmap-section/>
        <download-application-section/>
        <blog-section/>
        <footer-block/>
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';
    import HomeSection from './HomeSection';
    import DownloadApplicationSection from './DownloadApplicationSection';
    import AdvantagesSection from './AdvantagesSection';
    import FeaturesSection from './FeaturesSection';
    import TeamSection from './TeamSection';
    import IcoSection from './IcoSection';
    import RoadmapSection from './RoadmapSection';
    import BlogSection from './BlogSection';
    import FooterBlock from './layouts/FooterBlock';

    export default {
        name: 'Index',
        components: {
            HeaderBlock,
            HomeSection,
            DownloadApplicationSection,
            AdvantagesSection,
            FeaturesSection,
            TeamSection,
            IcoSection,
            RoadmapSection,
            BlogSection,
            FooterBlock,
        },
        data() {
            return {
                isFeatures: false,
                isTeam: false,
                isDark: false,
                isDarkSection: false
                // isLoading: true
            }
        },
        mounted() {
            this.$on('checkIsFeatures', (isFeatures) => {
                this.isFeatures = isFeatures;
            });

            this.$on('checkIsTeam', (isTeam) => {
                this.isTeam = isTeam;
            });

            this.$on('checkIsDarkSection', (isDarkSection) => {
                console.log(isDarkSection, 'index isDarkSection');
                this.isDarkSection = isDarkSection;
            });

            this.$on('isDarkTheme', (val) => {
                this.isDark = val;
            });
        }
    }
</script>

<style lang="stylus">
    .index
        -webkit-transition opacity 2s cubic-bezier(1, 0, .6, .65)
        transition opacity 2s cubic-bezier(1, 0, .6, .65)
</style>