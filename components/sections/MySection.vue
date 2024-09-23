<template>
    <section :id="_id" class="section">
        <p
            :id="_id.concat('-').concat('title')"
            class="title"
            :class="{
                'has-background-dark has-text-light': isDark,
                'has-background-light has-text-dark': !isDark,
            }"
        >
            {{ _title }}
        </p>
        <p
            class="subtitle"
            :class="{
                'has-background-dark has-text-light': isDark,
                'has-background-light has-text-dark': !isDark,
            }"
        >
            {{ _subtitle }}
        </p>
        <div class="block">
            <slot />
        </div>
    </section>
</template>

<script setup>
import { useThemeStore } from "../../stores/themeStore";

const { t } = useI18n();

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "",
    },
    subtitle: {
        type: String,
        default: "",
    },
});

// Start Dark Theme support.
const { isDark } = useThemeStore();
// End Dark theme support.
const _id = computed(() => "section-".concat(props.id));
const _title = computed(() => {
    if (props.title.length > 0) {
        return props.title;
    }

    return t(props.id.concat(".").concat("title"));
});
const _subtitle = computed(() => {
    if (props.subtitle.length > 0) {
        return props.subtitle;
    }

    return t(props.id.concat(".").concat("subtitle"));
});
</script>
