<script setup>
defineProps({
    title: String,
    img: String,
});
</script>

<template>
    <div class="image">
        <img :src="img" alt="">
        <span>{{ title }}</span>
    </div>
</template>

<style scoped lang="scss">
.image {
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: var(--masonry-gap);

    img {
        width: 100%;
        transition: transform .1s ease-in-out;
    }

    span {
        display: none;
        padding: calc(var(--unit) * 2);
    }

    &:hover {
        >img {
            transform: scale(1.05);
            cursor: zoom-in;
        }

        >span {
            display: block;
            position: absolute;
            bottom: 0;
            color: white;
            font-weight: normal;
            margin: 0;
        }
    }
}
</style>