<template>
    <div class="to-blog-page">
        <p class="text">
            {{ text }}
        </p>
        <button-to-blog/>
    </div>
</template>

<script>
    import ButtonToBlog from './ButtonToBlog';

    export default {
        name: 'ToBlogPage',
        components: {
            ButtonToBlog
        },
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>