<template>
    <div class="invisible" id="sale"></div>
    <div class="max-w-[1170px] w-full mx-auto px-16">
        <div class="w-full flex flex-col my-16">
            <div class="grid md:grid-cols-2 max-w-[1170px] w-full items-center justify-center mx-auto">
                <div class="w-full text-center md:text-left inter-font">
                    <h2 class="font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">Акция недели</h2>
                    <p class="font-light text-2xl md:text-3xl lg:text-4xl leading-normal mb-4 md:mb-0">При покупке любых билетов используйте промокод
                        GUYRITCHIE4 на скидку
                        25%</p>
                </div>
                <img class="h-96 w-full object-cover" :src="sale" alt="sale img">
            </div>
            <button
                class="bg-[#f44236] border border-transparent hover:border-[#f44236] hover:bg-white hover:text-[#f44236] rounded-xl mt-4 py-1 px-5 text-lg block mx-auto">Купить</button>
        </div>
    </div>
</template>

<script setup>
import sale from '../assets/sale.jpg'
</script>