<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <slot name="activator" :attrs>
        <button
          class="button"
          aria-haspopup="true"
          :aria-controls="`dropdown-menu-${rndId}`"
        >
          <span>Hover me</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </slot>
    </div>
    <div :id="`dropdown-menu-${rndId}`" class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <slot>
            {{ content }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ content?: string }>();

const rndId = Math.random() * Number.MAX_SAFE_INTEGER;

const attrs = {
  "aria-haspopup": "true",
  "aria-controls": `dropdown-menu-${rndId}`,
};
</script>
