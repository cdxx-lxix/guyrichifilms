<template>
    <div v-show="showmodal" @click.self="showmodal = false"
        class="overflow-y-auto overflow-x-hidden fixed top-24 right-0 left-0 z-50 flex justify-center items-start w-full h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-3xl max-h-full">
            <div class="relative rounded-lg shadow bg-white p-8">

                <div class="flex items-center justify-between p-4 md:p-5 rounded-t">
                    <h3 class="text-2xl font-semibold text-black" v-if="store.basketItems.length">
                        Заказ
                    </h3>
                    <button type="button" @click="showmodal = false"
                        class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="default-modal">
                        <svg class="w-8 h-8 fill-gray-500/30 hover:fill-gray-500/80" viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="m8 8.707 3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708z" />
                        </svg>
                    </button>
                </div>

                <div class="p-4 md:p-5 space-y-4" v-if="store.basketItems.length">
                    <div v-for="film, index in store.basketItems" :key="film.film.name" class="inline-flex w-full border-b border-gray-200 pb-6">
                        <img class="w-20 h-20 object-cover col-span-1 rounded-md mr-4" :src="film.film.img"
                            :alt="film.film.name">
                        <div class="col-span-3 flex flex-col justify-between w-full">
                            <div class="flex flex-row justify-between">
                                <p>Билет на фильм <span class="font-semibold">{{ film.film.name }}</span></p>
                                <p><span class="font-semibold">{{ film.amount * film.film.price }}</span> руб.</p>
                            </div>
                            <div class="flex flex-row justify-start gap-3">
                                <div class="flex flex-row justify-between gap-3 items-center">
                                    <button class="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md duration-100 ease-in-out"
                                        @click="store.decreaseAmount(index)">-</button>
                                    <p>{{ film.amount }}</p>
                                    <button class="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-md duration-100 ease-in-out"
                                        @click="store.increaseAmount(index)">+</button>
                                </div>
                                <button
                                    class="bg-transparent hover:bg-red-300/30 hover:text-red-500 duration-100 ease-in-out py-1 px-4 rounded-md"
                                    @click="store.deleteItem(index)">Удалить</button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full text-right">Сумма: <span class="font-semibold">{{ store.totalSum }}</span> руб.</div>
                    <div class="mb-5">
                        <label for="fio" class="block mb-2 font-bold text-xl">Данные для заказа</label>
                        <input type="text" id="fio" name="fio"
                            class="bg-gray-100 border border-gray-200 text-sm rounded-lg block w-full px-3 py-4 outline-none focus:bg-gray-50 focus:shadow-sm"
                            placeholder="ФИО" required>
                    </div>
                    <div>
                        <div
                            class="flex flex-row justify-between border-b border-gray-100 mb-3 pb-3 text-gray-400 hover:text-gray-600 text-md">
                            <p>Сумма:</p>
                            <p>{{ store.totalSum }} руб.</p>
                        </div>
                        <div class="flex flex-row justify-between font-bold text-md">
                            <p>Итого:</p>
                            <p>{{ store.totalSum }} руб.</p>
                        </div>
                    </div>
                </div>

                <div class="p-4 md:p-5 space-y-4" v-else>
                    <div class="w-full flex flex-col items-center justify-center gap-6">
                        <div>
                            <svg width="36" height="46" viewBox="0 0 36 46" class="cart-empty__icon"
                                style="fill: currentcolor; fill-rule: evenodd;">
                                <path
                                    d="M10 8.9978L6.1084 9L2.9834 14H10V8.9978ZM10 16V20.9978H12V16H24V20.9978H26V16H34V44H2V16H10ZM26 14H33.0166L29.8916 9L26 8.9978V14ZM25.7485 7H31L35.375 14L36 15V16V44V46H34H2H0V44V16V15L0.625 14L5 7H10.2515C11.1387 3.54858 14.2715 0.997803 18 0.997803C21.7285 0.997803 24.8613 3.54858 25.7485 7ZM12.3408 7C13.1641 4.66846 15.3867 2.9978 18 2.9978C20.6133 2.9978 22.8359 4.66846 23.6592 7H12.3408ZM12 8.9978H24V14H12V8.9978Z">
                                </path>
                            </svg>
                        </div>
                        <div>Ваша корзина пуста</div>
                        <div>Для оформления заказа добавьте нужные товары.</div>
                    </div>
                </div>

                <div class="flex justify-center p-4 md:p-5 rounded-b" v-if="store.basketItems.length">
                    <button type="button" @click="showmodal = false"
                        class="text-white w-full bg-black font-light rounded-lg text-lg py-4 text-center">Оформить
                        заказ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBasketStore } from '../stores/basket.js'
const showmodal = defineModel('showmodal', { required: true })
const total = ref(0)
const store = useBasketStore()
</script>