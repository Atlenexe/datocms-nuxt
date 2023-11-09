<script setup>
defineProps({
    title: String,
    img: String,
});
</script>

<template>
    <img :src="img" alt="">
</template>

<style scoped>
img {
    width: 100%;
    margin-bottom: var(--masonry-gap);
}
</style>