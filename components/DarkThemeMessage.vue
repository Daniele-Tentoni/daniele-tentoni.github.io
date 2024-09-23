<template>
    <Transition>
        <article
            v-if="showDarkThemeMessage"
            class="message m-4"
            :class="{
                'is-dark': isDark,
                'is-light': !isDark,
            }"
            :style="{ border: '1px solid white' }"
        >
            <div
                class="message-header"
                :style="{ 'border-bottom': '1px solid white' }"
            >
                <p>{{ $t("darkThemeMessage.header") }}</p>
                <button
                    class="delete"
                    aria-label="delete"
                    @click="showDarkThemeMessage = false"
                />
            </div>
            <div class="message-body">
                Dark Theme support lack in this site because it's really time
                consuming for me and Nuxt/Vue/Bulma lack in some features. If
                you have any advice or wanna contribute, let me know in the
                <NuxtLink to="/contacts#contact-me"> contacts form </NuxtLink>
                or
                <a
                    href="https://github.com/daniele-tentoni/daniele-tentoni.github.io"
                    target="_blank"
                >
                    open an issue/pull request
                </a>
                . I will be glad to you ;)
            </div>
        </article>
    </Transition>
</template>

<script setup>
import { ref } from "vue";
import { useThemeStore } from "../stores/themeStore";

const showDarkThemeMessage = ref(true);

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
