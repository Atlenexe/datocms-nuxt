export default defineNuxtPlugin((nuxtApp) => {
    const { datoToken } = useRuntimeConfig();

    nuxtApp.hook('apollo:auth', ({ client, token }) => {
        token.value = datoToken;
    })
})