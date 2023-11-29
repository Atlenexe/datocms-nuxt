<script setup>
import getMainPage from '@/cms/queries/getMainPage.ts'
const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getMainPage);

let creations = [];
let title = "";

creationsData.value.allCreations ? creations = creationsData.value.allCreations : null;
creationsData.value.mainPage ? title = creationsData.value.mainPage.title : null;
</script>

<template>
    <h2>{{ title }}</h2>
    <CreationMasonry :data="creations" />
</template>