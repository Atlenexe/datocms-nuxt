<script setup>
import getTagFromName from '@/cms/variables/getTagFromName'
import getCreationsFromTag from '@/cms/variables/getCreationsFromTag'

const route = useRoute();
const tagRoute = route.params.tag;

let creations = [];
let tag = null;
let tagName = "";

const { data: tagData, pending: tagPending, error: tagError, refresh: tagRefresh } = await useLazyAsyncQuery(getTagFromName, { "tagName": tagRoute });

if (!tagError.value && tagData?.value?.tag) {
  tag = tagData.value.tag;
  tagName = tagData.value.tag.name;

  const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getCreationsFromTag, { "tagId": tagData.value.tag.id });

  if (!creationsError.value && creationsData?.value?.allCreations) {
    creations = creationsData.value.allCreations;
  }
}
</script>

<template>
  <div v-if="tag">
    <h2>{{ tagName }}</h2>
    <CreationMansory v-if="creations.length > 0" :data="creations" />
    <p v-else>Aucune création trouvée.</p>
  </div>
  <div v-else>
    <p>Page introuvable</p>
  </div>
</template>