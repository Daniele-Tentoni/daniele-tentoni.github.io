<script setup lang="ts">
const route = useRoute();

const pages = await useAsyncData(() => queryCollection("content").all());

const real = computed(() => "/" + route.path.split("/").slice(2).join("/"));

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path(real.value).first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow is-full-mobile">
        <ul>
          <li v-for="p in pages.data.value" :key="p.id">
            <NuxtLink :to="`/content${p.path}`">{{ p.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="column is-full-mobile">
        <ContentRenderer v-if="home" :value="home" />
        <div v-else>Home not found in {{ real }}.</div>
      </div>
    </div>
  </div>
</template>
