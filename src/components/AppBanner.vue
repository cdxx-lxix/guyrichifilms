<template>
    <swiper-container :space-between="spaceBetween" :centered-slides="true" navigation="true" pagination="true"
        loop="true" effect="fade" id="mySlider" style="--swiper-navigation-color: #d2d2d2; --swiper-pagination-color: #f4f4f4; --swiper-pagination-bullet-inactive-color: #f1f1f1; height: 91svh; max-height: 91svh;">
        <swiper-slide v-for="film in films" :key="film.id" style="height: 100%;">
            <div class="relative h-full">
                <img class="w-full h-full object-fill" :src="film.img" :alt="film.name">
                <div
                    class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-gray-900/60">
                    <h2 class="text-white text-6xl font-bold mb-20">{{ film.name }}</h2>
                    <RouterLink :to="`/${film.id}`"
                        class="text-white text-lg font-semibold border-2 border-white px-3 py-1 hover:bg-white hover:text-black">Подробнее</RouterLink>
                </div>
            </div>
        </swiper-slide>
    </swiper-container>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import f from '../assets/banner/f.jpg'
import f2 from '../assets/banner/f2.jpg'
import f3 from '../assets/banner/f3.jpg'
import f4 from '../assets/banner/f4.jpg'
import f5 from '../assets/banner/f5.jpg'
import f6 from '../assets/banner/f6.jpg'
import f7 from '../assets/banner/f7.jpg'
import f8 from '../assets/banner/f8.jpg'
import f9 from '../assets/banner/f9.webp'
import f10 from '../assets/banner/f10.jpeg'
import f11 from '../assets/banner/f11.png'

import { register } from 'swiper/element/bundle';
import 'swiper/css/bundle'
import 'swiper/css/navigation'
register();


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