<template>
  <div>
    <Head>
      <Style type="text/css" href="~/assets/styles/TestMeSans02-Regular.otf" />
      <Style type="text/css" href="~/assets/styles/TestMeSans02-Bold.otf" />
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <FloatingActionButton />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import FloatingActionButton from "./app/components/FloatingActionButton.vue";
import { useThemeStore } from "./stores/themeStore";

// Start Dark Theme
const { setTheme } = useThemeStore();

// System color theme integration thanks to https://stackoverflow.com/a/57795495/10220116.
onMounted(async () => {
  console.log(await $fetch("/api/hello"));
  const selectedTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(selectedTheme);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", update);
});

onUnmounted(() => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .removeEventListener("change", update);
});

function update(event) {
  const newColorScheme = event.matches ? "dark" : "light";
  console.log("Set {} as new color scheme", newColorScheme);
  setTheme(event.matches);
}
// End Dark Theme
</script>
