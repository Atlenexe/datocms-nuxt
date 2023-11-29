<script setup>
defineProps({
    data: Array,
});
</script>

<template>
    <div class="masonry">
        <Creation v-for="creation in data" :title="creation.title" :img="creation.img.url" :alt="creation.img.alt" :creationDate="creation.creationDate" />
    </div>
</template>

<style scoped lang="scss">
.masonry {
    column-count: 3;
    column-gap: var(--masonry-gap);
}

@media screen and (max-width: 768px) {
    .masonry {
        column-count: 2;
    }
}

@media screen and (max-width: 480px) {
    .masonry {
        column-count: 1;
    }
}
</style>