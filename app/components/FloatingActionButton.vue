<template>
  <div class="fab-container">
    <Transition name="bounce">
      <button
        v-if="fabVisible"
        class="button"
        :class="{
          'is-dark is-inverted is-outlined': isDark,
          'is-light is-inverted is-outlined': !isDark,
        }"
        @click="onFabClick"
      >
        {{ text }}
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useThemeStore } from "../stores/themeStore";

defineProps({
  text: {
    type: String,
    default: "Top",
  },
});

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.

// Start Visibility rules.
const fabVisible = ref(false);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  checkScrollPosition();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

// Used in Floating Action Button visibility rule.
let lastKnownScrollPosition = 0;
let ticking = false;
function onScroll(e) {
  checkScrollPosition();
}

function checkScrollPosition() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkFabVisibility(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
}

function checkFabVisibility(scrollPos) {
  if (scrollPos >= 50) {
    fabVisible.value = true;
  } else {
    fabVisible.value = false;
  }
}
// End Visibility rules.

function onFabClick() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>
