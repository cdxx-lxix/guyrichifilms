<template>
    <div class="max-w-[1170px] w-full mx-auto">
        <h2 class="block w-full text-center text-5xl font-bold my-16">О нас</h2>
        <swiper-container :space-between="spaceBetween" :centered-slides="true" navigation="true" pagination="true"
            loop="true" id="about-us-slider">
            <swiper-slide>
                <div class="flex flex-col justify-center items-center mb-12">
                    <img :src="cinema" alt="cinema" class="object-contain w-1/2 mb-4">
                    <p class="text-center w-5/6 text-lg font-light">Добро пожаловать на сайт кинотеатра фильмов Гая
                        Ричи! Кинотеатр представляет собой уникальное
                        пространство, созданное вдохновением на фильмы и стиль режиссёра Гая Ричи. Расположенный в
                        сердце
                        города, этот кинокомплекс предлагает зрителям уникальный опыт кинематографии, пронизанный
                        атмосферой
                        бандитского мира, замысловатых интриг и бурной динамики.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center mb-12">
                    <img :src="hall" alt="hall" class="object-contain w-1/2 mb-4">
                    <p class="text-center w-5/6 text-lg font-light">Добро пожаловать на сайт кинотеатра фильмов Гая
                        Ричи! Кинотеатр представляет собой уникальное
                        пространство, созданное вдохновением на фильмы и стиль режиссёра Гая Ричи. Расположенный в
                        сердце
                        города, этот кинокомплекс предлагает зрителям уникальный опыт кинематографии, пронизанный
                        атмосферой
                        бандитского мира, замысловатых интриг и бурной динамики.</p>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup>
import cinema from '../assets/cinema.jpg'
import hall from '../assets/hall.jpg'
import { register } from 'swiper/element/bundle';
register();


</script>