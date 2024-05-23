<template>
    <nav class="bg-white border-gray-200">
        <div class="max-w-[1170px] flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center space-x-3 select-none">
                <span class="self-center text-2xl font-bold whitespace-nowrap">Фильмы Гая Ричи</span>
            </a>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="user-menu">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <a href="#about"
                            class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-gray-600/30">О
                            нас</a>
                    </li>
                    <li>
                        <a href="#sale"
                            class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 hover:bg-gray-600/30">Акции</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center w-1/6">
                <button type="button" class="flex flex-row items-center text-md gap-2 bg-transparent" id="user-basket">
                    <svg class="w-8 h-8" viewBox="0 0 115 115" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M39.7176 58.0472L36.0881 41.8251C36.0695 41.658 36.0351 41.4904 35.984 41.324L35.9544 41.2276L33.3268 29.4836C33.1367 28.6337 33.7832 27.8265 34.6542 27.8265H104.208C105.275 27.8265 105.927 29.0001 105.362 29.9061L87.5593 58.4697C87.3109 58.8682 86.8746 59.1104 86.405 59.1104H41.0449C40.8902 59.1104 40.7406 59.0843 40.6006 59.0359C40.4958 58.9744 40.3886 58.9207 40.2797 58.8747C40.0016 58.6854 39.7953 58.3943 39.7176 58.0472ZM35.7338 61.9987C35.1025 61.2102 34.6403 60.2727 34.4082 59.2351L30.6923 42.6271L22.8053 16.9451H7.32044C5.81804 16.9451 4.6001 15.7272 4.6001 14.2248C4.6001 12.7224 5.81804 11.5044 7.32044 11.5044H24.6735C25.8888 11.4346 27.0385 12.1955 27.4125 13.4132L30.5829 23.7366C31.7081 22.8928 33.1107 22.3858 34.6542 22.3858H104.208C109.546 22.3858 112.803 28.2539 109.979 32.7839L92.1766 61.3475C90.9347 63.34 88.7529 64.5511 86.405 64.5511H41.0449C40.8801 64.5511 40.7163 64.5452 40.554 64.5335L34.9567 74.0722H89.5059C91.0083 74.0722 92.2262 75.2902 92.2262 76.7926C92.2262 78.295 91.0083 79.5129 89.5059 79.5129H30.4493C29.9115 79.56 29.3541 79.4461 28.8518 79.1521C28.0357 78.6825 27.4862 77.8017 27.4862 76.7926C27.4862 76.2681 27.6346 75.7784 27.8917 75.3629L35.7338 61.9987ZM49.5515 92.5795C49.5515 98.2936 44.9193 102.926 39.2052 102.926C33.4911 102.926 28.8589 98.2936 28.8589 92.5795C28.8589 86.8654 33.4911 82.2332 39.2052 82.2332C44.9193 82.2332 49.5515 86.8654 49.5515 92.5795ZM79.1346 102.926C84.8487 102.926 89.4809 98.2936 89.4809 92.5795C89.4809 86.8654 84.8487 82.2332 79.1346 82.2332C73.4205 82.2332 68.7883 86.8654 68.7883 92.5795C68.7883 98.2936 73.4205 102.926 79.1346 102.926Z">
                        </path>
                    </svg>
                    <p>{{ cartItems }}</p>
                </button>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const cartItems = ref(0)
</script>