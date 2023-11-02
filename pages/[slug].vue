<script setup>
const route = useRoute();
</script>

<template>
    <div>
        <h2>{{ $route.params.slug }}</h2>
    </div>
</template>