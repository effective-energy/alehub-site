<template>
    <div>
        <div class="wrap__pointer"
             :class="{ 'wrap-pointer__rtl': isRtl }"
             id="wrap-pointer"
             v-if="checkSmallTabletWidth"
             @click="changePosition">
            <img class="pointer-to-top"
                 :class="{ 'pointer-to-bottom': afterClickToTop }"
                 src="../../static/images/arrow-top-dark.svg"
                 alt="to top"
                 v-if="!isPointerInDark">
            <img class="pointer-to-top"
                 :class="{ 'pointer-to-bottom': afterClickToTop }"
                 src="../../static/images/arrow-top-yellow.svg"
                 alt="to top"
                 v-else>
        </div>

        <div class="scroll-to-top"
             :class="{ 'scroll-to-top__rtl': isRtl }"
             v-if="checkSmallTabletWidth">
            <a @click="clickToTop"
               v-if="!afterClickToTop"></a>
            <a @click="returnPosition" v-else></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ScrollToTopButton'
    }
</script>

<style lang="stylus" scoped>

</style>