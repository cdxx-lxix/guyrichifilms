<template>
    <div class="max-w-[1170px] w-full mx-auto">
        <h2 class="w-full text-center text-5xl font-bold my-16 special-h flex justify-between items-center">Наши контакты</h2>
    </div>
</template>

<script setup>

</script>

<style scoped>
.special-h::after {
    content: "";

    @apply bg-gray-400/90 flex-grow mx-3 h-1;
}
.special-h::before {
    content: "";

    @apply bg-gray-400/90 flex-grow mx-3 h-1;
}
</style>