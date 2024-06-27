<template>
  <header class="timeline-header">
    <span class="tag is-medium is-primary">
      <slot> {{ text }}</slot>
    </span>
  </header>
</template>

<script setup>
defineProps({
  text: String
})
</script>
