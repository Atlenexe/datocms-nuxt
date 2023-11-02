<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
const count = ref(0);
const state = reactive({ count: 0 });
const src = 'https://picsum.photos/200/300';

function increment() {
    count.value++;
}

function increment2() {
    state.count++;
}

let users = [
    { name: 'John', age: 18 },
    { name: 'Jane', age: 20 },
    { name: 'Jack', age: 25 },
];

</script>

<template>
    <AppInfos>
        <p>Contenu</p>

        <button @click="increment()">
            {{ count }} fois
        </button>

        <button @click="increment2()" v-if="state.count <= 5">
            {{ state.count }} fois
        </button>

        <span v-else>
            Stop
        </span>

        <br>

        <span v-for="i in count">
            {{ i }} fois
        </span>

        <br>

        <span v-for="user in users" :key="items.name">
            {{ user.name }} a {{ user.age }} ans
        </span>

        <br>

        <img src="~assets/dog.png" alt="">

        <img :src="src" alt="">
    </AppInfos>
</template>

<style scoped>
button {
    color: white;
    background-color: black;
    font-weight: bold;
}
</style>