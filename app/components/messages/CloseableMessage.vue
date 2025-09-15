<template>
    <Transition>
        <article class="message">
            <div class="message-header">
                <slot name="title"></slot>
                <button
                    class="delete"
                    aria-label="delete"
                    @click="visible = false"
                ></button>
            </div>
            <div class="message-body">
                <slot name="body"></slot>
            </div>
        </article>
    </Transition>
</template>

<script setup>
const visible = ref(true);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
