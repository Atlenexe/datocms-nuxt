<script setup>
import get_all_creations from '@/cms/queries/get_all_creations'
const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(get_all_creations);

let creations = [];

creationsData._value.allCreations ? creations = creationsData._value.allCreations : null;
</script>

<template>
    <CreationMansory v-if="creations.length > 0" :data="creations" />
</template>