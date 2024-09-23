<template>
    <a
        :href="`#section-${href}`"
        :class="{
            'has-background-dark has-text-light': isDark,
            'has-background-light has-text-dark': !isDark,
        }"
    >
        <slot />
    </a>
</template>

<script setup>
import { useThemeStore } from "../../stores/themeStore";

defineProps({
    href: String,
});

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.
</script>
