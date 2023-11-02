<script setup>
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains');
</script>

<template>
    <span v-if="pending">Loading...</span>
    <div v-else v-for="(mountain, index) in data" :key="index">
        <h2>{{ mountain.title }}</h2>
        <p>{{ mountain.description }}</p>
        <span>{{ mountain.height }}</span>
        <img :src="mountain.image" :alt="mountain.title">
    </div>
    <span v-if="error">{{ error }}</span>
</template>