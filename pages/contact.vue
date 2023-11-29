<script setup>
import getContactPage from '@/cms/queries/getContactPage'
const { data: pageData, pending: pagePending, error: pageError, refresh: pageRefresh } = await useLazyAsyncQuery(getContactPage);

let pageContent = pageData._value.contactPage ? pageData._value.contactPage : null;
</script>

<template>
    <div v-if="pageContent">
        <Section>
            <h2>{{ pageContent.title }}</h2>
            <div v-html="pageContent.content"></div>
            <ul>
                <li v-for="contact in pageContent.contacts">
                    <a target="_blank"
                        :href="contact.isEmail ? 'mailto:' + contact.contactContent : contact.contactContent">
                        {{ contact.contactType }}
                    </a>
                </li>
            </ul>
        </Section>
    </div>
</template>

<style scoped lang="scss">
div,
ul {
    text-align: center;
}

ul {
    margin-top: calc(var(--unit) * 10);
    font-weight: bold;
}
</style>