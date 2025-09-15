<template>
    <button class="button" @click="(e) => emits('click', e)">
        <slot>
            {{ text }}
        </slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{ text?: String }>();
const emits = defineEmits<{ (e: "click", event: Event): void }>();
</script>
