<script setup>
import get_header from '@/cms/queries/get_header'
const { data: headerData, pending: headerPending, error: headerError, refresh: headerRefresh } = await useLazyAsyncQuery(get_header);
</script>

<template>
    <header>
        <div class="top">
            <h1>{{ headerData.header.title }}</h1>
        </div>
        <nav>
            <ul>
                <li v-for="tag in headerData.header.tags">
                    <a :href="'/creations/' + tag.route">{{ tag.name }}</a>
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

<style scoped>
header {
    .top h1 {
        text-align: center;
        text-transform: uppercase;
    }

    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: calc(var(--unit) * 16);

        li {
            a {
                text-decoration: none;
                text-transform: uppercase;
                color: black;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>