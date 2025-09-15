<!--
  Thanks to this language switcher to https://v8.i18n.nuxtjs.org/guide/lang-switcher.
-->

<template>
  <div class="buttons">
    <BDropDown v-if="nextLocale">
      <template #activator="{ attrs }">
        <SwitchLocalePathLink
          class="button"
          v-bind="attrs"
          :locale="nextLocale"
        >
          <i class="fa-regular fa-flag" />&nbsp;{{
            nextLocale?.toLocaleUpperCase()
          }}
        </SwitchLocalePathLink>
      </template>

      {{ t("utils.language.switch", { locale: nextLocale }) }}
    </BDropDown>
  </div>
</template>

<script setup>
import BDropDown from "../dropdown/BDropDown.vue";

const { locale, availableLocales, t } = useI18n();

const nextLocale = computed(() => {
  const i = availableLocales.findIndex((i) => i === locale.value);
  if (i) {
    return availableLocales.slice((i + 1) % availableLocales.length, 1)[0];
  }

  return availableLocales.filter((f) => f !== locale.value)[0];
});
</script>
