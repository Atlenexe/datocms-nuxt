<script setup>
import getSeo from '@/cms/queries/getSeo.ts';

const { data: seoData, pending: seoPending, error: seoError, refresh: seoRefresh } = await useLazyAsyncQuery(getSeo);

const seoContent = seoData.value._site;

if (seoContent) {
  const title = seoContent.globalSeo.siteName;
  const description = seoContent.globalSeo.fallbackSeo.description;
  const locales = seoContent.locales;

  useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
    locales: locales,
  });
}
</script>

<template>
  <NuxtLayout />
</template>

<style>
:root {
  --unit: 4px;

  --h1-margin: calc(var(--unit) * 10) 0;
  --h2-margin: calc(var(--unit) * 8) 0;
  
  --footer-margin: calc(var(--unit) * 12) 0;

  --section-s: 0 calc(var(--unit) * 16);
  --section-m: 0 calc(var(--unit) * 32);
  --section-l: 0 calc(var(--unit) * 40);

  --navbar-gap: calc(var(--unit) * 16);
  --masonry-gap: calc(var(--unit) * 3);
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h1,
h2 {
  text-align: center;
  text-transform: uppercase;
}

h1 {
  font-size: 40px;
  margin: var(--h1-margin);
}

h2 {
  font-size: 28px;
  margin: var(--h2-margin);
}

p,
a {
  font-size: 18px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>