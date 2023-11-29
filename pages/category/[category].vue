<script setup>
import getcategoryFromName from '@/cms/variables/getCategoryFromName';
import getCreationsFromcategory from '@/cms/variables/getCreationsFromCategory';

//Récupération de la catégorie dans la route actuelle
const route = useRoute();
const categoryRoute = route.params.category;

//Initialisation des variables
let creations = [];
let category = null;
let categoryName = "";

//Requête pour récupérer la catégorie depuis son nom récupéré dans la route
const { data: categoryData, pending: categoryPending, error: categoryError, refresh: categoryRefresh } = await useLazyAsyncQuery(getcategoryFromName, { "categoryName": categoryRoute });

//Si la catégorie existe, on récupère les créations associées
if (!categoryError.value && categoryData?.value?.category) {
  category = categoryData.value.category;
  categoryName = categoryData.value.category.name;

  const categoryId = categoryData.value.category.id;

  //Requête pour récupérer les créations depuis l'id de la catégorie récupérée
  const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getCreationsFromcategory, { "categoryId": categoryId });

  //Si il n'y a pas eu d'erreur, on récupère les créations
  if (!creationsError.value && creationsData?.value?.allCreations) {
    creations = creationsData.value.allCreations;
  }
}
</script>

<template>
  <section v-if="category">
    <h2>{{ categoryName }}</h2>
    <CreationMasonry v-if="creations.length > 0" :data="creations" />
    <p v-else>Aucune création trouvée.</p>
  </section>

  <section v-else>
    <p>Page introuvable</p>
    <a href="/">Retour à l'accueil</a>
  </section>
</template>

<style scoped lang="scss">
p,
a {
  text-align: center;
}
</style>