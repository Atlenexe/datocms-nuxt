<script setup>
import get_about_page from '@/cms/queries/get_about_page'
const { data: pageData, pending: pagePending, error: pageError, refresh: pageRefresh } = await useLazyAsyncQuery(get_about_page);

let pageContent = pageData._value.aboutPage ? pageData._value.aboutPage : null;
</script>

<template>
    <div>
        <div v-html="pageContent.content"></div>
    </div>
</template>