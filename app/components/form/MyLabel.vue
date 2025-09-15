<template>
  <label class="label" :class="{ 'has-text-light': isDark }">
    <slot />
  </label>
</template>

<script setup>
import { useThemeStore } from "../../stores/themeStore";

const { isDark } = useThemeStore();
</script>
