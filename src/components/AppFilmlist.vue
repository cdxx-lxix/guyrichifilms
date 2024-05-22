<template>
    <div class="w-full bg-[#1d1d1d] py-16">
        <div class="max-w-[1170px] w-full mx-auto flex flex-col">
            <h2 class="text-5xl font-semibold text-center mb-12 mt-4 text-white">Список фильмов</h2>
            <div class="grid grid-cols-3 justify-between">
                <div v-for="film in films" :key="film.id" class="flex flex-col items-center mb-16">
                    <img class="w-48 mb-2" :src="film.img" :alt="film.name">
                    <h6 class="font-semibold text-2xl text-white mb-4">{{ film.name }}</h6>
                    <a class="bg-white rounded-2xl px-3 py-2 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-400" :href="`/${film.id}`">Купить билет</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import f from '../assets/posters/f.webp'
import f2 from '../assets/posters/f2.webp'
import f3 from '../assets/posters/f3.webp'
import f4 from '../assets/posters/f4.webp'
import f5 from '../assets/posters/f5.webp'
import f6 from '../assets/posters/f6.webp'
import f7 from '../assets/posters/f7.webp'
import f8 from '../assets/posters/f8.webp'
import f9 from '../assets/posters/f9.webp'
import f10 from '../assets/posters/f10.webp'
import f11 from '../assets/posters/f11.jpg'

const films = [
    { name: "Карты, деньги, два ствола", id: 0, img: f },
    { name: "Большой куш", id: 1, img: f2 },
    { name: "Револьвер", id: 2, img: f3 },
    { name: "Рок-н-рольщик", id: 3, img: f4 },
    { name: "Шерлок Холмс", id: 4, img: f5 },
    { name: "Шерлок Холмс: Игра теней", id: 5, img: f6 },
    { name: "Меч короля Артура", id: 6, img: f7 },
    { name: "Алладин", id: 7, img: f8 },
    { name: "Джентельмены", id: 8, img: f9 },
    { name: "Гнев человеческий", id: 9, img: f10 },
    { name: "Переводчик", id: 10, img: f11 },
]
</script>