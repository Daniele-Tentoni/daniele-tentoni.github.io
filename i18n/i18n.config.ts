import en from "@/i18n/locales/en-US.yml";
import it from "@/i18n/locales/it-IT.yml";

export default defineI18nConfig(() => ({
    baseUrl: "https://daniele-tentoni.github.io",
    legacy: false,
    locale: "en",
    messages: {
        en,
        it,
    },
}));
