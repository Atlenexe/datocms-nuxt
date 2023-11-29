<script setup>
import getAboutPage from '@/cms/queries/getAboutPage'
const { data: pageData, pending: pagePending, error: pageError, refresh: pageRefresh } = await useLazyAsyncQuery(getAboutPage);

let pageContent = pageData._value.aboutPage ? pageData._value.aboutPage : null;
</script>

<template>
    <div>
        <div v-html="pageContent.content"></div>
    </div>
</template>