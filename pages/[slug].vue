<script setup>
const route = useRoute();
//$route.params.tag

const query = gql
  `query get_all_creations {
    allCreations(orderBy: _createdAt_DESC) {
      id
      title
      img {
        url
      }
    }
  }`;

const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(query);
</script>

<template>
  <CreationMansory :data="creationsData" />
</template>