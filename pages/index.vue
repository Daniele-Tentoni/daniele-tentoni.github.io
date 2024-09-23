<template>
    <div class="container">
        <section
            class="hero"
            :class="{
                'is-dark': isDark,
                'is-light': !isDark,
            }"
        >
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div
                        class="columns is-vcentered is-mobile is-multiline is-centered"
                    >
                        <div class="column is-narrow">
                            <figure class="image is-128x128">
                                <img
                                    class="is-rounded"
                                    src="https://avatars.githubusercontent.com/u/11157241?v=4"
                                    alt="My image profile"
                                />
                            </figure>
                        </div>
                        <div class="column is-full-mobile">
                            <p class="title">Daniele Tentoni</p>
                            <p class="subtitle">
                                {{ t("index.subtitle") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column is-narrow is-full-mobile">
                <AsideMenu />
            </div>
            <div class="column is-full-mobile">
                <main>
                    <MySection id="details">
                        <p>
                            I was born in 1996 in Cesena, where I live now. I'm
                            working at Horsa Devlab, a software house based with
                            an office in my city. I'm a chief in the biggest
                            scout association in Italy, AGESCI, since 2018, and
                            I enjoy be helpful in my freetime. When I'm not at
                            scouts, I like to go to trekking or cooking. You can
                            reach me at any time using one of contacts method
                            <NuxtLink to="/contacts" style="color: 'black'">
                                described here </NuxtLink
                            >.
                        </p>
                    </MySection>
                    <MySection id="interests">
                        <p>
                            My IT interests are DevOps practices, building Web
                            Apps using Vue.js as frontend framework and
                            Node/Asp.Net as backend and mobile applications
                            using .Net Maui.
                        </p>
                        <p>
                            I'm learning by me Rust language from offcial book.
                        </p>
                    </MySection>
                    <MyExperience id="experience" />
                    <MyEducation id="education" />
                    <MySection id="volunteer">
                        <p>
                            I'm a chief of the major boy scout association in
                            Italy, AGESCI. For more info, look at the
                            <NuxtLink to="/scout"> dedicated page </NuxtLink>.
                            I'm an AVIS volunteer with a regular 3/6 month blood
                            donation.
                        </p>
                    </MySection>
                    <MySection id="this-site">
                        <p>
                            <i18n-t
                                keypath="this-site.content"
                                for="this-site.tos"
                            >
                                <a
                                    href="https://github.com/daniele-tentoni/daniele-tentoni.github.io"
                                    target="_blank"
                                >
                                    {{ t("this-site.tos") }}
                                </a>
                            </i18n-t>
                        </p>
                    </MySection>
                    <DarkThemeMessage />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import DarkThemeMessage from "../components/DarkThemeMessage.vue";
import MyEducation from "../components/sections/MyEducation.vue";
import MyExperience from "../components/sections/MyExperience.vue";
import MySection from "../components/sections/MySection.vue";
import { useThemeStore } from "../stores/themeStore";

const { t } = useI18n();

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.
</script>
