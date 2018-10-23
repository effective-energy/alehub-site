<template>
    <div class="subscribe">
        <label-subscribe>
            Подпишитесь на наши новости:
        </label-subscribe>
        <input-email-subscribe/>
        <button-subscribe/>
    </div>
</template>

<script>
    import LabelSubscribe from './LabelSubscribe';
    import InputEmailSubscribe from './InputEmailSubscribe';
    import ButtonSubscribe from './ButtonSubscribe';

    export default {
        name: 'Subscribe',
        components: {
            LabelSubscribe,
            InputEmailSubscribe,
            ButtonSubscribe
        }
    }
</script>

<style scoped>

</style>