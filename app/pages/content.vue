<script setup lang="ts">
const route = useRoute();

const pages = await useAsyncData(route.path, () =>
  queryCollection("content").all(),
);

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div class="container">
    This is the place where I write sometimes something that come in mind.
    {{ pages.data.value?.map((m) => m.path) }}, {{ route.path }}
    <ul>
      <li v-for="p in pages.data.value" :key="p.id">
        <NuxtLink :to="`/content${p.path}`">{{ p.title }}</NuxtLink>
      </li>
    </ul>
    <ContentRenderer v-if="page" :value="pages.data.value?.at(0)!" />
  </div>
</template>
