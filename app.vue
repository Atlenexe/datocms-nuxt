<template>
  <NuxtLayout />
</template>

<style>
:root {
  --unit: 4px;

  --h1-margin: calc(var(--unit) * 10) 0;
  --h2-margin: calc(var(--unit) * 8) 0;

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
  font-size: 32px;
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