<template>
    <!-- TODO: I can move dark theme to parent level. -->
    <nav
        class="navbar"
        :class="{ 'is-dark': isDark, 'is-light': !isDark }"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="container">
            <div class="navbar-brand">
                <NuxtLink class="navbar-item" to="/">
                    <strong>DT</strong>
                </NuxtLink>

                <a
                    role="button"
                    class="navbar-burger"
                    :class="{ 'is-active': isActive }"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    @click="isActive = !isActive"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <Transition name="fade">
                <!-- v-if="isActive" -->
                <div
                    id="navbarBasicExample"
                    class="navbar-menu"
                    :class="{
                        'is-active': isActive,
                        'has-background-dark has-text-light': isDark,
                        'has-background-light has-text-dark': !isDark,
                    }"
                >
                    <div class="navbar-start">
                        <NuxtLink class="navbar-item" :to="localePath('/')">
                            {{ $t("home.title") }}
                        </NuxtLink>
                        <NuxtLink
                            class="navbar-item"
                            :to="localePath('/contacts')"
                        >
                            {{ $t("contacts.title") }}
                        </NuxtLink>
                        <NuxtLink
                            class="navbar-item"
                            :to="localePath('/tools/excel')"
                        >
                            {{ $t("tools.title") }}
                        </NuxtLink>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <DarkThemeSwitcher />
                        </div>
                        <div class="navbar-item">
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup>
import DarkThemeSwitcher from "./DarkThemeSwitcher";
import LanguageSelector from "./LanguageSelector.vue";
import { useThemeStore } from "../../stores/themeStore";
const localePath = useLocalePath();

const { isDark } = useThemeStore();
const isActive = useNavBar();
</script>
