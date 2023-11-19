<script setup>
const route = useRoute();

let tag = route.params.tag;
let creations = [];
let tags = [];

const getTagQuery = gql
  `query get_tag {
  tag(filter: {route: {eq: "${tag}"}}) {
    id
  }
}`;
const { data: tagData, pending: tagPending, error: tagError, refresh: tagRefresh } = await useLazyAsyncQuery(getTagQuery);

if (tagData?._value.tag) {
  tags = [tagData._value.tag];

  const getAllCreationsQuery = gql
    `query get_all_creations {
    allCreations(orderBy: _createdAt_DESC, filter: {tag: {eq: "${tagData._value.tag.id}"}}) {
      id
      title
      img {
        url
      }
      tag {
        name
        route
      }
    }
  }`;

  const { data: creationsData, pending: creationsPending, error: creationsError, refresh: creationsRefresh } = await useLazyAsyncQuery(getAllCreationsQuery);

  if (creationsData?._value.allCreations) {
    creations = creationsData._value.allCreations;
  }
}
</script>

<template>
  <div>
    <CreationMansory v-if="creations.length > 0" :data="creations" />
    <p v-if="tags.length === 0">Page introuvable</p>
  </div>
</template>