<template>
    <div class="index">
        <header-block :is-main-dark="isDark"/>
        <home-section :is-dark-section="isDarkSection"
                      :is-opened-modal-menu="openedModalMenu"
                      :is-scroll-in-footer="isScrollInFooter"
                      :is-rtl="isRtl"/>
        <advantages-section :is-rtl="isRtl"/>
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
                isDarkSection: false,
                isScrollInFooter: false,
                isRtl: false,
                openedModalMenu: false
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
                this.isDarkSection = isDarkSection;
            });

            this.$on('isDarkTheme', (val) => {
                this.isDark = val;
            });

            this.$on('isOpenedModalMenu', (val) => {
                this.openedModalMenu = val;
            });

            this.$on('scrollInFooter', (val) => {
                this.isScrollInFooter = val;
            });

            this.$on('isRtl', (isRtl) => {
                console.log(isRtl, 'isRtl');
                this.isRtl = isRtl;
            });
        }
    }
</script>

<style lang="stylus">
    .index
        -webkit-transition opacity 2s cubic-bezier(1, 0, .6, .65)
        transition opacity 2s cubic-bezier(1, 0, .6, .65)
</style>