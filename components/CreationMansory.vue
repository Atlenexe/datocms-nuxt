<script setup>
import get_creations from '@/cms/queries/get_creations'
const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(get_creations);
</script>

<template>
    <div class="masonry">
        <Creation v-for="creation in creationsData.allCreations" :title="creation.title" :img="creation.img.url" />
    </div>
</template>

<style scoped>
.masonry {
    column-count: 3;
    column-gap: var(--masonry-gap);
}
</style>