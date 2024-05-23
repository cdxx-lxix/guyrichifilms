<template>
    <div class="w-full bg-[#1d1d1d] py-16 open-font">
        <div class="max-w-[1170px] w-full h-full mx-auto grid grid-cols-3 px-20 gap-14">
            <img class="w-full h-full object-cover col-span-3 lg:col-span-1" :src="store.films[id].img" :alt="store.films[id].name">
            <div class="flex flex-col gap-12 col-span-3 lg:col-span-2">
                <h2 class="text-white  text-3xl font-normal">{{ store.films[id].name }}</h2>
                <div class="font-semibold text-xl text-white">
                    <div class="flex flex-row justify-between my-4">
                        <h6>Жанр:</h6>
                        <p class="w-1/2">{{ store.films[id].genre }}</p>
                    </div>
                    <div class="flex flex-row justify-between my-4">
                        <h6>В ролях:</h6>
                        <p class="w-1/2">{{ store.films[id].cast }}</p>
                    </div>
                    <div class="flex flex-row justify-between my-4">
                        <h6>Страна:</h6>
                        <p class="w-1/2">{{ store.films[id].country }}</p>
                    </div>
                    <div class="flex flex-row justify-between my-4">
                        <h6>Продолж.:</h6>
                        <p class="w-1/2">{{ store.films[id].duration }}</p>
                    </div>
                </div>
                <button
                    class="bg-white relative w-full lg:w-1/2 open-font font-normal text-lg rounded-2xl px-3 py-1 hover:bg-amber-400 hover:shadow-lg border-4 border-transparent" @click="store.addItem(id)">Купить
                    билет
                    <span
                            class="absolute inset-0 rounded-2xl bg-transparent border-4 border-amber-400 opacity-0 hover:opacity-75 hover:animate-impulse"></span>
                </button>
            </div>
            <div class="col-span-3 text-white open-font">
                <h3 class="text-3xl font-semibold mb-4">Описание фильма</h3>
                <p class="font-normal text-md">{{ store.films[id].description }}</p>
            </div>
        </div>
    </div>
    <div class="w-full bg-[#222222] py-16 inter-font text-white">
        <div class="max-w-[1170px] w-full mx-auto flex flex-col lg:flex-row text-center lg:justify-between px-6">
            <div class="w-full lg:w-1/3">

            </div>
            <h4 class="w-full lg:w-1/3 font-semibold text-2xl mb-2">Фильмы Гая Ричи</h4>
            <div class="w-full lg:w-1/3 lg:text-right flex flex-col">
                <a href="tel:89873300843" class="text-3xl font-normal mb-2 hover:text-gray-200/60">8 (987) 330- 08-43</a>
                <a href="mailto:allguyritchiefilms@mail.ru" class="hover:text-gray-200/60">allguyritchiefilms@mail.ru</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBasketStore } from '../stores/basket.js'
const props = defineProps({
    id: String
})

const store = useBasketStore()

</script>