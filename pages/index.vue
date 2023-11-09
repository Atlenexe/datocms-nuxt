<script setup>
import get_all_creations from '@/cms/queries/get_all_creations'
const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(get_all_creations);
</script>

<template>
    <CreationMansory :data="creationsData" />
</template>