<script setup>
import getMainPage from '@/cms/queries/getMainPage.ts';

let creations = [];
let title = "";

const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getMainPage);

creationsData.value.allCreations ? creations = creationsData.value.allCreations : null;
creationsData.value.mainPage ? title = creationsData.value.mainPage.title : null;
</script>

<template>
    <section>
        <h2>{{ title }}</h2>
        <CreationMasonry :data="creations" />
    </section>
</template>