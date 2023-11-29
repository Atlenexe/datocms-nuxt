<script setup>
defineProps({
    title: String,
    img: String,
    alt: String,
    creationDate: String,
});

function formatDate(date) {
    if (date) {
        const dateArray = date.split("-");
        const day = dateArray[2];
        const month = dateArray[1];
        const year = dateArray[0];

        return `${day}/${month}/${year}`;
    } else {
        return "";
    }
}

</script>

<template>
    <div class="image">
        <img :src="img" :alt="alt">
        <div class="details">
            <span>{{ title }}</span>
            <span>{{ formatDate(creationDate) }}</span>
        </div>
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

    .details {
        display: none;
        padding: calc(var(--unit) * 2);
    }

    &:hover {
        >img {
            transform: scale(1.05);
            cursor: zoom-in;
        }

        >.details {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 0;
            color: white;
            font-weight: normal;
            margin: 0;
        }
    }
}
</style>