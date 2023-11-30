<script setup>
import getHeader from '@/cms/queries/getHeader'

//Requête pour récupérer le contenu du header
const { data: headerData, pending: headerPending, error: headerError, refresh: headerRefresh } = await useLazyAsyncQuery(getHeader);
</script>

<template>
    <header  v-if="!headerError && headerData">
        <h1>{{ headerData.header.title }}</h1>
        <nav>
            <ul>
                <li v-for="category in headerData.header.categories">
                    <a :href="'/category/' + category.route">{{ category.name }}</a>
                </li>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/about">À propos</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    margin-bottom: calc(var(--unit) * 16);

    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--navbar-gap);

        li {
            a {
                text-transform: uppercase;
            }
        }
    }
}
</style>