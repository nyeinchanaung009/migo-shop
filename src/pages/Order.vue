<script setup>
import { useRouter } from 'vue-router';
import Master from '../layout/Master.vue';
import { useStore } from 'vuex';
import CardOrder from '../components/CardOrder.vue'

const router = useRouter();
const store = useStore();

const orders = store.getters.orders;

</script>

<template>
    <Master>
        <div class="w-[90%] sm:w-[500px] md:w-[750px] lg:w-[900px] min-h-[70vh] mx-auto mt-1 sm:mt-6 f-poppins mb-[70px]">
            <div class="flex justify-between items-center bg-white py-[10px] px-3 rounded shadow">
                <button @click="router.back()"><i class="bi bi-arrow-left px-2 py-1 rounded bg-accent text-white hover:bg-accent2"></i></button>
                <h1 class="text-tpri font-semibold flex-1 text-center me-3">My Orders</h1>
            </div>

            <div class="mt-3 w-[290px] sm:w-[420px] mx-auto">
                <CardOrder :datas="orders" />
            </div>

            <div v-if="orders.length < 1" class="mt-8 py-16">
                <h1 class="text-center text-slate-700/40 font-semibold text-[17px]"><i class="bi bi-exclamation-circle text-slate-700/50 me-2"></i>No Orderd !</h1>
            </div>
        </div>
    </Master>
</template>