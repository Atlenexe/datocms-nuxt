<script setup>
import { ref, reactive, onUpdated, computed } from 'vue';
const count = ref(0);
const state = reactive({ count: 0 });
const src = 'https://picsum.photos/200/300';

onUpdated(() => {
    console.log(count.value);
});

function increment() {
    count.value++;
}

function increment2() {
    state.count++;
}

const user = computed(() => {
    return 'John' + ' Doe';
});

let users = [
    { name: 'John', age: 18 },
    { name: 'Jane', age: 20 },
    { name: 'Jack', age: 25 },
];

</script>

<template>
    <AppInfos>
        <p>Contenu</p>
    </AppInfos>

    <NuxtLink to="/page-1">
        Page 1
    </NuxtLink>

    <a href="/page-1">Page 1</a>

    <PropComponent title="Titre" />

    <button @click="increment()">
        {{ count }} fois
    </button>

    <button @click="increment2()" v-if="state.count <= 5">
        {{ state.count }} fois
    </button>

    <span v-else>
        Stop
    </span>

    <span>
        {{ user }}
    </span>

    <br>

    <span v-for="i in count">
        {{ i }} fois
    </span>

    <br>

    <span v-for="user in users">
        {{ user.name }} a {{ user.age }} ans
    </span>

    <br>

    <img src="~assets/dog.png" alt="">

    <img :src="src" alt="">
</template>

<style scoped>
button {
    color: white;
    background-color: black;
    font-weight: bold;
}
</style>