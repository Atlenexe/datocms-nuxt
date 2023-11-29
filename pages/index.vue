<script setup>
import getMainPage from '@/cms/queries/getMainPage.ts';

//Initialisation des variables
let creations = [];
let title = "";

//Requête pour récupérer le contenu de la page d'accueil (créations et titre)
const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getMainPage);

//Récupération des créations
creationsData.value.allCreations ? creations = creationsData.value.allCreations : null;

//Récupération du titre de la page
creationsData.value.mainPage ? title = creationsData.value.mainPage.title : null;
</script>

<template>
    <section>
        <h2>{{ title }}</h2>
        <CreationMasonry :data="creations" />
    </section>
</template>