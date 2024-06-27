import en from "./i18n/en-US.yml";
import it from "./i18n/it-IT.yml";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en,
        it,
    },
}));
