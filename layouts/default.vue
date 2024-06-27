<template>
  <div
    :class="{
      'has-background-dark has-text-light': isDark,
      'has-background-light has-text-dark': !isDark,
    }"
  >
    <MyNavBar />
    <slot />
    <MyFooter
      :class="{
        'has-background-dark has-text-light': isDark,
        'has-background-light has-text-dark': !isDark,
      }"
    />
  </div>
</template>

<script setup>
import MyFooter from "../components/MyFooter.vue";
import MyNavBar from "../components/navbar/MyNavBar.vue";
import { useThemeStore } from "../stores/themeStore";

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.
</script>
