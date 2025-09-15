<template>
  <div class="field">
    <BDropDown>
      <template #activator="{ attrs }">
        <input
          id="switchRoundedDefault"
          v-model="isDark"
          type="checkbox"
          name="switchRoundedDefault"
          class="switch is-rounded"
          :class="{ 'is-light is-outlined': isDark }"
          v-bind="attrs"
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
      </template>
      {{ t("dark-theme.switcher.text") }}
    </BDropDown>
  </div>
</template>

<script setup>
import BDropDown from "../dropdown/BDropDown.vue";
import { useThemeStore } from "../../stores/themeStore";

const { isDark } = useThemeStore();

const { t } = useI18n();
</script>
