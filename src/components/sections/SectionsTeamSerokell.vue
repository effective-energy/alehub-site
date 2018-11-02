<template>
    <div class="sections-team-serokell">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout row style="margin-top: 48px;">
                <v-flex  xs12 sm12 md6 lg6 xl6>
                    <div class="member">
                        <div class="photo">
                        </div>
                        <div class="info">
                            <h3 class="name">
                                Арсений Серока
                            </h3>
                            <p class="position">
                                Ведущий разработчик Serokell
                            </p>
                            <p class="company">
                                Serokell
                            </p>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6 xl6>
                    <div class="member">
                        <div class="photo">
                        </div>
                        <div class="info">
                            <h3 class="name">
                                Йон Мостовой
                            </h3>
                            <p class="position">
                                Ведущий разработчик Serokell
                            </p>
                            <p class="company">
                                Serokell
                            </p>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row style="margin-top: 80px;">
                <v-flex xs12 sm12 md6 lg6 xl6>
                    <div class="member">
                        <div class="photo">
                        </div>
                        <div class="info">
                            <h3 class="name">
                                Александр Рукин
                            </h3>
                            <p class="position">
                                UI/UX дизайнер
                            </p>
                            <p class="company">
                                Serokell
                            </p>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6 xl6>
                    <div class="member">
                        <div class="photo">
                        </div>
                        <div class="info">
                            <h3 class="name">
                                Кирилл Елагин
                            </h3>
                            <p class="position">
                                Back-end разработчик
                            </p>
                            <p class="company">
                                Serokell
                            </p>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';

    export default {
        name: 'SectionsTeamSerokell',
        components: {
            TitleSection
        },
        data: () => ({

        })
    }
</script>

<style lang="stylus" scoped>
    .member
        display flex
        align-items center

    .photo
        height 160px
        width 160px
        border-radius 50%
        background-color #a67aff
        flex-shrink 0
        margin-right 32px

    .sections-team-serokell
        height 65vh

    .company
        opacity: 0.72;
        font-family: MuseoSansCyrl300;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        margin-top 18px

    .position
        font-family: MuseoSansCyrl300;
        font-size: 16px;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        margin-top 32px

    .name
        font-family: MuseoSansCyrl500;
        font-size: 24px;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
</style>