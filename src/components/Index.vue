<template>
    <div class="index" id="index-main-component">
        <header-block :is-main-dark="isDark"/>
        <home-section :is-dark-section="isDarkSection"
                      :is-opened-modal-menu="openedModalMenu"
                      :is-scroll-in-footer="isScrollInFooter"
                      :is-rtl="isRtl"
                      :is-pointer-in-dark="isPointerInDark"
                      :tg-button-class="tgButtonClass"
                      :tg-button-messages-class="tgButtonMessagesClass"
                      :email-button-class="emailButtonClass"/>
        <mission-section :is-rtl="isRtl"/>
        <advantages-section :is-rtl="isRtl"/>
        <features-section :is-features="isFeatures"/>
        <project-economy :is-rtl="isRtl"/>
        <team-section :is-team="isTeam"
                      :is-effective-energy-autoplay="isEffectiveEnergyAutoplay"
                      :is-serokell-autoplay="isSerokellAutoplay"
                      :is-advisors-autoplay="isAdvisorsAutoplay"
                      :is-rtl="isRtl"/>
        <ico-section :is-rtl="isRtl"/>
        <roadmap-section :is-rtl="isRtl"/>
        <download-application-section/>
        <mass-media-section/>
        <blog-section/>
        <footer-block :is-rtl="isRtl"/>
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';
    import HomeSection from './HomeSection';
    import MissionSection from './MissionSection';
    import AdvantagesSection from './AdvantagesSection';
    import FeaturesSection from './FeaturesSection';
    import ProjectEconomy from './ProjectEconomy';
    import TeamSection from './TeamSection';
    import IcoSection from './IcoSection';
    import RoadmapSection from './RoadmapSection';
    import DownloadApplicationSection from './DownloadApplicationSection';
    import MassMediaSection from './MassMediaSection';
    import BlogSection from './BlogSection';
    import FooterBlock from './layouts/FooterBlock';

    export default {
        name: 'Index',
        components: {
            HeaderBlock,
            HomeSection,
            MissionSection,
            AdvantagesSection,
            FeaturesSection,
            ProjectEconomy,
            TeamSection,
            IcoSection,
            RoadmapSection,
            DownloadApplicationSection,
            MassMediaSection,
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
                openedModalMenu: false,
                isPointerInDark: false,
                tgButtonClass: '',
                emailButtonClass: '',
                tgButtonMessagesClass: '',
                isEffectiveEnergyAutoplay: false,
                isSerokellAutoplay: false,
                isAdvisorsAutoplay: false
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
                this.isRtl = isRtl;
            });

            this.$on('pointerInDark', (pointerInDark) => {
                this.isPointerInDark = pointerInDark;
            });

            this.$on('checkTgButtonStyle', style => {
                this.tgButtonClass = style;
            });

            this.$on('checkTgButtonMessagesStyle', style => {
                this.tgButtonMessagesClass = style;
            });

            this.$on('checkMailButtonStyle', style => {
                this.emailButtonClass = style;
            });

            this.$on('effectiveEnergyAutoplay', (autoplay) => {
                this.isEffectiveEnergyAutoplay = autoplay;
            });

            this.$on('serokellAutoplay', (autoplay) => {
                this.isSerokellAutoplay = autoplay;
            });

            this.$on('advisorsAutoplay', (autoplay) => {
                this.isAdvisorsAutoplay = autoplay;
            });
        }
    }
</script>

<style lang="stylus">
    .index
        -webkit-transition opacity 2s cubic-bezier(1, 0, .6, .65)
        transition opacity 2s cubic-bezier(1, 0, .6, .65)
</style>