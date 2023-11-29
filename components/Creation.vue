<script setup>
defineProps({
    title: String,
    img: String,
    alt: String,
    creationDate: String,
});

//Fonction pour reformater la date
function reformatDate(date) {
    //Si la date est renseignée
    if (date) {
        //On la découpe pour récupérer le jour, le mois et l'année depuis une date au format année-mois-jour
        const dateArray = date.split("-");

        const day = dateArray[2];
        const month = dateArray[1];
        const year = dateArray[0];

        //On retourne la date au format jour/mois/année
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
            <span>{{ reformatDate(creationDate) }}</span>
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