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
                <p>{{ $t("dark-theme.message.header") }}</p>
                <button
                    class="delete"
                    aria-label="delete"
                    @click="showDarkThemeMessage = false"
                />
            </div>
            <div class="message-body">
                {{ $t("dark-theme.message.content") }}
                <NuxtLink to="/contacts#contact-me"> contacts form </NuxtLink>
                <a
                    href="https://github.com/daniele-tentoni/daniele-tentoni.github.io"
                    target="_blank"
                >
                    open an issue/pull request
                </a>
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
