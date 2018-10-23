<template>
    <div class="list-of-docs">
        <link-doc v-for="doc in docs"
                  :key="doc.href"
                  :href="doc.href"
                  :text="doc.text"/>
    </div>
</template>

<script>
    import LinkDoc from './LinkDoc';

    export default {
        name: 'ListOfDocs',
        components: {
            LinkDoc
        },
        data: () => ({
            docs: [
                {
                    href: 'https://alehub.io/terms_and_conditions.pdf',
                    text: 'Terms and Conditions'
                },
                {
                    href: 'https://alehub.io/disclaimer.pdf',
                    text: 'Disclaimer'
                },
                {
                    href: 'https://alehub.io/%D1%81ookies_privacy_and_policy.pdf',
                    text: 'Cookies Privacy and Policy'
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>

</style>