<script setup>
import getAboutPage from '@/cms/queries/getAboutPage';

//Requête pour récupérer le contenu de la page A propos
const { data: pageData, pending: pagePending, error: pageError, refresh: pageRefresh } = await useLazyAsyncQuery(getAboutPage);

//Récupération du contenu de la page
const pageContent = pageData._value.aboutPage ? pageData._value.aboutPage : null;
</script>

<template>
    <div v-if="pageContent">
        <Section>
            <h2>{{ pageContent.title }}</h2>
            <div v-html="pageContent.content"></div>
        </Section>
    </div>
</template>