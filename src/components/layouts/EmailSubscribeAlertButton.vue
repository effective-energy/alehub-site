<template>
    <button type="button"
            id="email-subscribe-alert"
            class="email-subscribe-alert"
            :class="[emailButtonClass, {'email-subscribe-alert__stop': isScrollInFooter, 'email-subscribe-alert__rtl': isRtl }]"
            @click="toggleEmailSubscribeAlert">
        <div class="el-base">
            <div class="el-inner-space">
                <div class="el-flap"
                     :class="{ 'el-flap-active': openedEmailSubscribePanel }">
                </div>
            </div>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'EmailAlertButton'
    }
</script>

<style lang="stylus" scoped>

</style>