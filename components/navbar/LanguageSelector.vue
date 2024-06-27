<!--
  Thanks to this language switcher to https://v8.i18n.nuxtjs.org/guide/lang-switcher.
-->

<template>
  <div class="buttons are-small">
    <NuxtLink
      v-for="locale in availableLocales"
      class="button"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name.substr(0, 2).toLocaleUpperCase() }}</NuxtLink
    >
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
