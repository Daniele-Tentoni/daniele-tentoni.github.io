<template>
  <aside class="menu">
    <p
      class="menu-label pa-2"
      :class="{
        'has-background-dark has-text-light': isDark,
        'has-background-light has-text-dark': !isDark,
      }"
    >
      <span style="padding: 1rem">Navigation</span>
    </p>
    <ul class="menu-list">
      <li>
        <MenuLink href="details"> {{ $t("details.title") }} </MenuLink>
      </li>
      <li>
        <MenuLink href="interests">
          {{ $t("interests.title") }}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="experience">
          {{ $t("experience.title") }}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="education">
          {{ $t("education.title") }}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="volunteer">
          {{ $t("volunteer.title") }}
        </MenuLink>
      </li>
      <li>
        <MenuLink href="this-site">
          {{ $t("this-site.title") }}
        </MenuLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useThemeStore } from "../stores/themeStore";
import MenuLink from "./asideMenu/MenuLink.vue";

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.
</script>
