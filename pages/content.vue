<script setup lang="ts">
const route = useRoute();

const pages = await useAsyncData(() =>
    queryCollection("content").path("/").all()
);
</script>

<template>
    <div class="container">
        This is the place where I write sometimes something that come in mind.
        <ul>
            <li v-for="p in pages.data.value" :key="p.id">
                <NuxtLink :to="p.path">{{ p.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
