<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img
                            src="https://bulma.io/assets/images/placeholders/96x96.png"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-4">
                        <slot name="subtitle">{{ subtitle }}</slot>
                    </p>
                    <p class="title is-4">
                        <slot name="title">{{ title }}</slot>
                    </p>
                </div>
            </div>
            <div class="content">
                <p>
                    <slot>{{ content }}</slot>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["title", "subtitle", "content"]);
</script>
