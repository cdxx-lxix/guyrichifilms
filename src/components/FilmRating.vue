<template>
    <div class="flex flex-row items-center gap-4 md:gap-8">
        <ul class="inline-flex">
            <li v-for="i in 10" :key="i">
                <svg class="w-4 h-4 md:w-8 md:h-8" :class="i <= Math.ceil(rating) ? 'text-amber-400' : 'text-gray-300'"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            </li>
        </ul>
        <div class="text-white text-2xl md:text-4xl">
            {{ rating }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'rating'
])
</script>