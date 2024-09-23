<template>
    <footer class="footer">
        <nav>
            <div class="container">
                <ul>
                    <li>
                        <NuxtLink to="/contacts">{{
                            $t("contacts.title")
                        }}</NuxtLink>
                    </li>
                    <li><a href="/sitemap.xml">Sitemap</a></li>
                    <!-- TODO: Make a page about site construction. -->
                </ul>
            </div>
        </nav>
        <div class="content has-text-centered">
            <p>
                <a href="https://bulma.io">
                    <img
                        :src="madeWithBulmaImgUrl"
                        :alt="$t('footer.bulma.alt')"
                        width="256"
                        height="48"
                    />
                </a>
            </p>
            <p>
                <strong :class="{ 'has-text-light': isDark }">Bulma</strong> by
                <a
                    class="is-underlined"
                    href="https://jgthms.com"
                    target="_blank"
                >
                    Jeremy Thomas </a
                >. The source code is licensed
                <a
                    href="http://opensource.org/licenses/mit-license.php"
                    target="_blank"
                    >MIT</a
                >.
            </p>
            <p>
                <strong :class="{ 'has-text-light': isDark }"
                    >Test Me 02</strong
                >
                is a "Libre" font inspired by the principle of Design for All.
                Find more info on
                <a href="https://synsemia.org/typefaces/" target="_blank"
                    >official blog</a
                >.
            </p>
        </div>
    </footer>
</template>

<script setup>
import { useThemeStore } from "../stores/themeStore";

const { isDark } = useThemeStore();
const madeWithBulmaImgUrl = computed(() =>
    isDark.value
        ? "https://bulma.io/assets/images/made-with-bulma--dark.png"
        : "https://bulma.io/assets/images/made-with-bulma.png"
);
</script>
