<script setup>
defineProps({
    data: Array,
});</script>

<template>
    <div class="masonry">
        <Creation v-for="creation in data.allCreations" :title="creation.title" :img="creation.img.url" />
    </div>
</template>

<style scoped>
.masonry {
    column-count: 3;
    column-gap: var(--masonry-gap);
}
</style>