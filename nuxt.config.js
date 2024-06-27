export default defineNuxtConfig({
    app: {
        head: {
            title: "Daniele Tentoni",
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
        },
    },
    components: true,
    css: [
        "bulma",
        "bulma-switch",
        // "bulma-timeline",
        "~/assets/styles/main.css",
        "@fortawesome/fontawesome-free/css/all.min.css",
    ],
    i18n: {
        baseUrl: "https://daniele-tentoni.github.io",
        defaultLocale: "en",
        langDir: "./i18n",
        locales: [
            {
                code: "en",
                file: "en-US.yml",
                iso: "en-US",
                name: "English",
            },
            {
                code: "it",
                file: "it-IT.yml",
                iso: "it-IT",
                name: "Italiano",
            },
        ],
        /* lazy: true, */
    },
    modules: [
        // This module is unbuildable by me.
        // '@nuxtjs/sitemap' // Has to be at the end of array to catch all files. https://sitemap.nuxtjs.org/guide/setup#setup

        // I've to learn better how to translate messages here: https://github.com/lokalise/i18n-ally/wiki/Configurations
        "@nuxtjs/i18n",
        "@pinia/nuxt",
    ],
    runtimeConfig: {
        public: {
            applicationId: "",
            javascriptId: "",
        },
    },
    ssr: false, // Nuxt 3 static site build.
    target: "static", // I don't need router base since this repo deploy to daniele-tentoni.github.io.
    typescript: {
        shim: false,
    },
});
