<script setup>
import Master from '../layout/Master.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed,onBeforeMount,onMounted, onUpdated, ref } from 'vue';
import CardProduct from '../components/CardProduct.vue'

const router = useRouter();
const store = useStore();

const favitem = computed(() => store.getters.myFavItems);

</script>

<template>
    <Master>
        <div class="w-[90%] sm:w-[500px] md:w-[750px] lg:w-[900px] min-h-[70vh] mx-auto mt-1 sm:mt-6 f-poppins mb-[70px]">
            <div class="flex justify-between items-center bg-white py-[10px] px-3 rounded shadow">
                <button @click="router.back()"><i class="bi bi-arrow-left px-2 py-1 rounded bg-accent text-white hover:bg-accent2"></i></button>
                <h1 class="text-tpri font-semibold flex-1 text-center me-3">Favourite Products</h1>
            </div>

            <div class="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                <CardProduct :datas="favitem" />
            </div>

        </div>
    </Master>
</template>