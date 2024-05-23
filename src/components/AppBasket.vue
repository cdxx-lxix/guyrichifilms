<template>
    <div v-show="showmodal" @click.self="showmodal = false"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative rounded-lg shadow bg-white p-8">

                <div class="flex items-center justify-between p-4 md:p-5 rounded-t">
                    <h3 class="text-2xl font-semibold text-black">
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

                <div class="p-4 md:p-5 space-y-4">
                    <div class="mb-5">
                        <label for="fio" class="block mb-2 font-bold text-xl">Данные для заказа</label>
                        <input type="text" id="fio" name="fio" 
                            class="bg-gray-100 border border-gray-200 text-sm rounded-lg block w-full px-3 py-4 outline-none focus:bg-gray-50 focus:shadow-sm" placeholder="ФИО" required>
                    </div>
                    <div>
                        <div class="flex flex-row justify-between border-b border-gray-100 mb-3 pb-3 text-gray-400 hover:text-gray-600 text-md">
                            <p>Сумма:</p>
                            <p>{{ total }} руб.</p>
                        </div>
                        <div class="flex flex-row justify-between font-bold text-md">
                            <p>Итого:</p>
                            <p>{{ total }} руб.</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center p-4 md:p-5 rounded-b">
                    <button type="button" @click="showmodal = false"
                        class="text-white w-full bg-black font-light rounded-lg text-lg py-4 text-center">Оформить заказ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const showmodal = defineModel('showmodal', { required: true })
const total = ref(0)
</script>