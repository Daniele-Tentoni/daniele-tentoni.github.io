<!--
  Thanks to this language switcher to https://v8.i18n.nuxtjs.org/guide/lang-switcher.
-->

<template>
    <div class="buttons">
        <BDropDown>
            <template #activator="{ attrs }">
                <NuxtLink
                    v-for="locale in availableLocales"
                    class="button"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                    v-bind="attrs"
                >
                    <i class="fa-regular fa-flag"></i>&nbsp;&nbsp;{{
                        locale.name.substr(0, 2)?.toLocaleUpperCase()
                    }}
                </NuxtLink>
            </template>
            Cambia lingua da Italiano a Inglese
        </BDropDown>
    </div>
</template>

<script setup>
import BDropDown from "../dropdown/BDropDown.vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
</script>
