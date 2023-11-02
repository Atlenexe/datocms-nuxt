<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains');

const counterStore = useCounterStore();

const { increment } = counterStore;
const { counter } = storeToRefs(counterStore);
</script>

<template>
    <button @click="increment()">Increment</button>
    <p>{{ counter }}</p>
    <span v-if="pending">Loading...</span>
    <div v-else v-for="(mountain, index) in data" :key="index">
        <h2>{{ mountain.title }}</h2>
        <p>{{ mountain.description }}</p>
        <span>{{ mountain.height }}</span>
        <img :src="mountain.image" :alt="mountain.title">
    </div>
    <span v-if="error">{{ error }}</span>
</template>