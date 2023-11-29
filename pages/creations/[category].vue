<script setup>
import getcategoryFromName from '@/cms/variables/getCategoryFromName'
import getCreationsFromcategory from '@/cms/variables/getCreationsFromCategory'

const route = useRoute();
const categoryRoute = route.params.category;

let creations = [];
let category = null;
let categoryName = "";

const { data: categoryData, pending: categoryPending, error: categoryError, refresh: categoryRefresh } = await useLazyAsyncQuery(getcategoryFromName, { "categoryName": categoryRoute });

if (!categoryError.value && categoryData?.value?.category) {
  category = categoryData.value.category;
  categoryName = categoryData.value.category.name;

  const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getCreationsFromcategory, { "categoryId": categoryData.value.category.id });

  if (!creationsError.value && creationsData?.value?.allCreations) {
    creations = creationsData.value.allCreations;
  }
}
</script>

<template>
  <div v-if="category">
    <h2>{{ categoryName }}</h2>
    <CreationMansory v-if="creations.length > 0" :data="creations" />
    <p v-else>Aucune création trouvée.</p>
  </div>
  <div v-else>
    <p>Page introuvable</p>
  </div>
</template>