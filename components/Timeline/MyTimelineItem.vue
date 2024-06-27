<template>
  <div class="timeline-item is-danger">
    <div class="timeline-marker is-danger is-icon">
      <slot name="marker">
        <i :class="marker" />
      </slot>
    </div>
    <div class="timeline-content">
      <p class="heading">
        <slot name="heading">
          {{ heading }}
        </slot>
      </p>
      <slot>
        <p>{{ content }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  heading: String,
  content: String,
  marker: String,
});
</script>
