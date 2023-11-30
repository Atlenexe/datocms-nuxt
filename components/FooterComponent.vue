<script setup>
import getFooter from '@/cms/queries/getFooter'

//Requête pour récupérer le contenu du footer
const { data: footerData, pending: footerPending, error: footerError, refresh: footerRefresh } = await useLazyAsyncQuery(getFooter);
</script>

<template>
    <footer v-if="!footerError && footerData">
        <div v-for="element in footerData.footer.elements" class="footer-container">
            <div v-html="element.content.content"></div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    margin: var(--footer-margin);
    color: rgb(115, 115, 115);

    .footer-container {
        display: flex;
        justify-content: center;
    }
}
</style>