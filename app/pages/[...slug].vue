<script setup lang="ts">
const route = useRoute();

const pages = await useAsyncData(() =>
    queryCollection("content").path("/").all()
);

const page = computed(() => {
    if (pages?.data?.value && (pages?.data?.value?.length ?? 0) > 0) {
        return pages.data.value[0];
    }

    return null;
});

useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
});
</script>

<template>
    <div class="container">
        <div class="column is-narrow is-full-mobile">
            <ul>
                <li v-for="p in pages.data.value" :key="p.id">
                    <NuxtLink :to="p.path">{{ p.title }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="column is-full-mobile">
            <ContentRenderer v-if="page" :value="page" />
            <div v-else>Home not found in {{ route.path }}.</div>
        </div>
    </div>
</template>
