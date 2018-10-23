<template>
    <div class="subscribe">
        <label-subscribe>
            Подпишитесь на наши новости:
        </label-subscribe>
        <input-email-subscribe/>
    </div>
</template>

<script>
    import LabelSubscribe from './LabelSubscribe';
    import InputEmailSubscribe from './InputEmailSubscribe';

    export default {
        name: 'Subscribe',
        components: {
            LabelSubscribe,
            InputEmailSubscribe
        }
    }
</script>

<style scoped>

</style>