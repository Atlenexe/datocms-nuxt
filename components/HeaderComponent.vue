<script setup>
import getHeader from '@/cms/queries/getHeader'

//Requête pour récupérer le contenu du header
const { data: headerData, pending: headerPending, error: headerError, refresh: headerRefresh } = await useLazyAsyncQuery(getHeader);
</script>

<template>
    <header v-if="!headerError && headerData">
        <div class="top">
            <h1>{{ headerData.header.title }}</h1>

            <div class="contacts">
                <a v-for="contact in headerData.header.contact" target="_blank"
                    :href="contact.isEmail ? 'mailto:' + contact.contactContent : contact.contactContent">{{
                        contact.contactType }}</a>
            </div>
        </div>
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

    .top {
        position: relative;

        >.contacts {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            gap: var(--navbar-contacts-gap);
            margin-right: var(--navbar-contacts-margin);
        }
    }

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