<template>
    <section>
        <slot />
    </section>
</template>

<style scoped lang="scss">
section {
    padding: var(--section-l);
}

@media screen and (max-width: 768px) {
    section {
        padding: var(--section-m);
    }
}

@media screen and (max-width: 480px) {
    section {
        padding: var(--section-s);
    }
}
</style>