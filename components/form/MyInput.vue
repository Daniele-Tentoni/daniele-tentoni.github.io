<!-- This is a Component "a regola d'arte", "vendibile" -->

<template>
  <div class="field">
    <slot name="label">
      <MyLabel>{{ label }}</MyLabel>
    </slot>

    <slot>
      <input
        class="input"
        :class="{ 'is-danger': !valid }"
        type="text"
        :placeholder="placeholder"
      />
    </slot>
    <slot v-if="!valid" name="errorMessage">
      <p class="help is-danger">This field is invalid</p>
    </slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import MyLabel from "./MyLabel.vue";

const props = defineProps({
  label: {
    type: String,
    default: "Top",
  },
  placeholder: {
    type: String,
    default: "Text input",
  },
  validationRule: {
    type: Function,
    default() {
      return true;
    },
  },
});

const valid = computed(() => props.validationRule());
</script>
