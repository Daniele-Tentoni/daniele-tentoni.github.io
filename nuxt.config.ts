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
        "~/assets/styles/main.css",
        "@fortawesome/fontawesome-free/css/all.min.css",
    ],

    content: {
        build: {
            markdown: {
                toc: {
                    depth: 2,
                },
            },
        },
    },

    i18n: {
        baseUrl: "https://daniele-tentoni.github.io",
        defaultLocale: "en",
        // langDir: "locales",
        locales: [
            {
                code: "en",
                file: "en-US.yml",
                language: "en-US",
                name: "English",
            },
            {
                code: "it",
                file: "it-IT.yml",
                language: "it-IT",
                name: "Italiano",
            },
        ],
    },

    modules: [
        // I've to learn better how to translate messages here: https://github.com/lokalise/i18n-ally/wiki/Configurations
        "@nuxtjs/i18n",
        "@pinia/nuxt",
        // This module is unbuildable by me.
        "@nuxtjs/sitemap", // Has to be at the end of array to catch all files. https://sitemap.nuxtjs.org/guide/setup#setup,
        "@nuxt/content",
        "@nuxt/eslint",
    ],

    nitro: {
        runtimeConfig: {
            botToken: "7063814191:AAE09dOVCGawO-z7INL3nQmbN6dRoqGjg-Q",
        },
    },

    runtimeConfig: {
        public: {
            applicationId: "",
            javascriptId: "",
        },
    },

    site: {
        url: "https://daniele-tentoni.github.io",
        name: "My Awesome Website",
    },

    // Nuxt 3 static site build.
    ssr: false,

    typescript: {
        shim: false,
    },

    compatibilityDate: "2025-04-09",
});
