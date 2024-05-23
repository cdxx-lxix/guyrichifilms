<template>
    <nav class="bg-white border-gray-200">
        <div class="max-w-[1170px] flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink class="flex items-center space-x-3 select-none" to="/">
                <span class="self-center text-2xl font-bold whitespace-nowrap">Фильмы Гая Ричи</span>
            </RouterLink>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="user-menu">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <RouterLink to="/#about"
                            class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-gray-600/30 duration-100 ease-in-out">
                            О
                            нас</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/#sale"
                            class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-gray-600/30 duration-100 ease-in-out">
                            Акции
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex items-center w-1/6 invisible md:visible">
                <button type="button" @click="showModal"
                    class="relative inline-flex items-center p-3 text-sm font-medium text-center bg-transparent rounded-lg hover:animate-pulse">
                    <svg class="w-8 h-8" viewBox="0 0 115 115" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M39.7176 58.0472L36.0881 41.8251C36.0695 41.658 36.0351 41.4904 35.984 41.324L35.9544 41.2276L33.3268 29.4836C33.1367 28.6337 33.7832 27.8265 34.6542 27.8265H104.208C105.275 27.8265 105.927 29.0001 105.362 29.9061L87.5593 58.4697C87.3109 58.8682 86.8746 59.1104 86.405 59.1104H41.0449C40.8902 59.1104 40.7406 59.0843 40.6006 59.0359C40.4958 58.9744 40.3886 58.9207 40.2797 58.8747C40.0016 58.6854 39.7953 58.3943 39.7176 58.0472ZM35.7338 61.9987C35.1025 61.2102 34.6403 60.2727 34.4082 59.2351L30.6923 42.6271L22.8053 16.9451H7.32044C5.81804 16.9451 4.6001 15.7272 4.6001 14.2248C4.6001 12.7224 5.81804 11.5044 7.32044 11.5044H24.6735C25.8888 11.4346 27.0385 12.1955 27.4125 13.4132L30.5829 23.7366C31.7081 22.8928 33.1107 22.3858 34.6542 22.3858H104.208C109.546 22.3858 112.803 28.2539 109.979 32.7839L92.1766 61.3475C90.9347 63.34 88.7529 64.5511 86.405 64.5511H41.0449C40.8801 64.5511 40.7163 64.5452 40.554 64.5335L34.9567 74.0722H89.5059C91.0083 74.0722 92.2262 75.2902 92.2262 76.7926C92.2262 78.295 91.0083 79.5129 89.5059 79.5129H30.4493C29.9115 79.56 29.3541 79.4461 28.8518 79.1521C28.0357 78.6825 27.4862 77.8017 27.4862 76.7926C27.4862 76.2681 27.6346 75.7784 27.8917 75.3629L35.7338 61.9987ZM49.5515 92.5795C49.5515 98.2936 44.9193 102.926 39.2052 102.926C33.4911 102.926 28.8589 98.2936 28.8589 92.5795C28.8589 86.8654 33.4911 82.2332 39.2052 82.2332C44.9193 82.2332 49.5515 86.8654 49.5515 92.5795ZM79.1346 102.926C84.8487 102.926 89.4809 98.2936 89.4809 92.5795C89.4809 86.8654 84.8487 82.2332 79.1346 82.2332C73.4205 82.2332 68.7883 86.8654 68.7883 92.5795C68.7883 98.2936 73.4205 102.926 79.1346 102.926Z">
                        </path>
                    </svg>
                    <div
                        class="absolute inline-flex text-center items-center justify-center w-6 h-4 text-xs font-bold text-white bg-amber-500 rounded-lg bottom-2 end-0">
                        {{ store.basketItems.length }}</div>
                </button>
            </div>
            <div class="flex items-center md:invisible visible">
                <button type="button" @click="showMenu"
                    class="relative inline-flex items-center p-3 text-sm font-medium text-center bg-transparent rounded-lg hover:animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 448 448">
                        <path d="M0 636.362h448v64H0zm0 160h448v64H0zm0 160h448v64H0z"
                            transform="translate(0 -604.362)" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
    <div v-show="isMenu">
        <div class="items-center justify-between w-full ">
            <ul
                class="flex flex-col font-medium p-4 text-center mt-4 border border-gray-100 rounded-lg bg-gray-50">
                <li>
                    <RouterLink to="/#about"
                        class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-gray-600/30 duration-100 ease-in-out">
                        О
                        нас</RouterLink>
                </li>
                <li>
                    <RouterLink to="/#sale"
                        class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-gray-600/30 duration-100 ease-in-out">
                        Акции
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
    <AppBasket v-model:showmodal="isModal" />
    <div class="fixed top-0 right-0 z-50 mt-24 mr-2 lg:mt-16 lg:mr-16 p-4 rounded-md shadow-md border border-gray-700/20 bg-gray-300/90 cursor-pointer"
        @click="showModal">
        <svg class="w-8 h-8 cart-ico" baseProfile="tiny" viewBox="0 0 24 24" xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
                <g>
                    <path
                        d="M20.756,5.345C20.565,5.126,20.29,5,20,5H6.181L5.986,3.836C5.906,3.354,5.489,3,5,3H2.75c-0.553,0-1,0.447-1,1 s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151 c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112c0.058,0.054,0.125,0.092,0.193,0.13 c0.038,0.021,0.071,0.049,0.112,0.065C6.748,16.972,6.87,17,6.999,17C7,17,18,17,18,17c0.553,0,1-0.447,1-1s-0.447-1-1-1H7.847 l-0.166-1H19c0.498,0,0.92-0.366,0.99-0.858l1-7C21.031,5.854,20.945,5.563,20.756,5.345z M18.847,7l-0.285,2H15V7H18.847z M14,7 v2h-3V7H14z M14,10v2h-3v-2H14z M10,7v2H7C6.947,9,6.899,9.015,6.852,9.03L6.514,7H10z M7.014,10H10v2H7.347L7.014,10z M15,12v-2 h3.418l-0.285,2H15z">
                    </path>
                    <circle cx="8.5" cy="19.5" r="1.5"></circle>
                    <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </g>
            </g>
        </svg>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import AppBasket from './AppBasket.vue';
import { useBasketStore } from '../stores/basket.js'
const store = useBasketStore()
const isModal = ref(false)
const showModal = () => {
    isModal.value = !isModal.value
}
const isMenu = ref(false)
const showMenu = () => {
    isMenu.value = !isMenu.value
}

</script>