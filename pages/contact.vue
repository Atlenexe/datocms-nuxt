<script setup>
import getContactPage from '@/cms/queries/getContactPage'
const { data: pageData, pending: pagePending, error: pageError, refresh: pageRefresh } = await useLazyAsyncQuery(getContactPage);

let pageContent = pageData._value.contactPage ? pageData._value.contactPage : null;
</script>

<template>
    <div>
        <div v-html="pageContent.content"></div>
        <ul>
            <li v-for="contact in pageContent.contacts">
                <a :href="contact.isEmail ? 'mailto:' + contact.contactContent : contact.contactContent">
                    {{ contact.contactType }}
                </a>
            </li>
        </ul>
    </div>
</template>