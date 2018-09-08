<template>
    <div class="language-block">
        <div id="select-lang"
             class="select-lang"
             v-if="isLang"
             :class="{ 'select-lang__rtl': rtl }"
             @click="toggleDropdown">
            {{ currentLang }}
            <div class="select-lang-dropdown"
                 v-if="dropdownOpen">
                <div class="select-lang-item"
                     v-for="lang in languages"
                     :class="[{ 'selected': currentLang === lang.name }, lang.class]"
                     @click="changeLanguage(lang.id)">
                    <div class="select-lang__cover">
                    </div>
                    <span>
                        {{ lang.name.toUpperCase() }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LanguageBlock',
        data() {
            return {
                selectedLanguage: localStorage.getItem('systemLang'),
            }
        },
        computed: {
            currentLang: function () {
                return this.selectedLanguage;
            },
        },
        methods: {
            toggleDropdown: function () {
                if (!this.langDropdownInProcess) {
                    let tmpDropdownOpen = !this.dropdownOpen;
                    this.langDropdownInProcess = true;

                    if (tmpDropdownOpen) {
                        this.dropdownOpen = tmpDropdownOpen;
                        setTimeout(() => {
                            let duration = 900,
                                currentTime = 0,
                                increment = 100,
                                i = document.getElementsByClassName('select-lang-item').length - 1;

                            let animateScroll = () => {
                                currentTime += increment;
                                document.getElementsByClassName('select-lang-item')[i].style['opacity'] = 1;
                                i--;
                                if (currentTime < duration) {
                                    setTimeout(animateScroll, increment);
                                } else {
                                    this.langDropdownInProcess = false;
                                }
                            };

                            animateScroll();
                        }, 40);
                    } else {
                        setTimeout(() => {
                            let duration = 900,
                                currentTime = 0,
                                increment = 100,
                                i = 0;

                            let animateScroll = () => {
                                currentTime += increment;
                                document.getElementsByClassName('select-lang-item')[i].style['opacity'] = 0;
                                i++;
                                if (currentTime < duration) {
                                    setTimeout(animateScroll, increment);
                                } else {
                                    setTimeout(() => {
                                        this.dropdownOpen = tmpDropdownOpen;
                                        this.langDropdownInProcess = false;
                                    }, increment);
                                }
                            };

                            animateScroll();
                        }, 40);
                    }
                }
            },
            changeLanguage(id) {
                this.selectedLanguage = this.languages.find(l => l.id === id).name;
                this.$i18n.locale = this.selectedLanguage;
                localStorage.setItem('systemLang', this.selectedLanguage);

                if (this.selectedLanguage === 'ar')
                    this.makeRTL();
                else if (this.rtl)
                    this.resetRTL();
            },
        }
    }
</script>

<style lang="stylus" scoped>

</style>