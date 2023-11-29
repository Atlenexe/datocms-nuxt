<script setup>
import getAllCreations from '@/cms/queries/getAllCreations'
const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getAllCreations);

let creations = [];

creationsData._value.allCreations ? creations = creationsData._value.allCreations : null;
</script>

<template>
    <CreationMansory :data="creations" />
</template>