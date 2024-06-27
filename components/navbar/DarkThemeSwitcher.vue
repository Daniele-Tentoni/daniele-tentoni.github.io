<template>
  <div class="field">
    <input
      id="switchRoundedDefault"
      v-model="isDark"
      type="checkbox"
      name="switchRoundedDefault"
      class="switch is-rounded"
      :class="{ 'is-light is-outlined': isDark }"
    />
    <label for="switchRoundedDefault">
      <span class="icon-text">
        <span class="icon">
          <i
            :class="{
              'fas fa-sun': isDark,
              'fas fa-moon': !isDark,
            }"
          />
        </span>
        <span>Dark Theme</span>
      </span>
    </label>
  </div>
</template>

<script setup>
import { useThemeStore } from "../../stores/themeStore";
const { isDark } = useThemeStore();
</script>
