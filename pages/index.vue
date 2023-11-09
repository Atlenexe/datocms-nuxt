<script setup>
import blog_post from '@/cms/queries/blog_post'
const { data: blogData, pending: blogPending, error: blogError, refresh: blogRefresh } = await useLazyAsyncQuery(blog_post);
console.log(blogData);
</script>

<template>
    <a href="/page-1">Page 1</a>
    <div v-for="article in blogData.allArticles">
        <h2>{{ article.title }}</h2>
        {{ article.content }}
    </div>
</template>

<style scoped></style>