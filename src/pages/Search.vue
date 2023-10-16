<script setup>
import { useStore } from 'vuex';
import Master from '../layout/Master.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, onUpdated, ref } from 'vue';
import CardProduct from '../components/CardProduct.vue';
import Loading from '../components/Loading.vue'

const store = useStore();
const route = useRoute();
const router = useRouter();
const loading = ref(true);

let {type,data} = route.query;

const founddata = computed(() => store.getters.foundproducts);



const initSearch = () => {
    loading.value = true;
    store.dispatch('searchProduct',{type,data});
    setTimeout(() => loading.value = false,350);
}

onMounted(() => {
    initSearch();
});

onUpdated(() => {
    type = route.query.type;
    data = route.query.data;
    initSearch();
});

</script>

<template>
    <Master>
        <div class="w-[95%] sm:w-10/12 md:w-9/12 mx-auto min-h-[70vh]">

            <Loading v-if="loading" />

            <div class="mt-3 mb-8 flex justify-between items-center">
                <button @click="router.back()" class="px-[8px] py-1 rounded-sm shadow text-white bg-accent hover:bg-accent2"><i class="bi bi-arrow-left text-lg"></i></button>
                <h1 class="flex-1 text-center text text-tpri font-medium"><i class="bi bi-search me-2 text-sm"></i>Search results of {{ data }}</h1>
            </div>

            <div v-if="founddata" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 pt-4 pb-16">
                <CardProduct v-if="founddata" :datas="founddata" />
            </div>

            <div v-if="founddata.length < 1 && !loading" class="mb-12 py-14">
                <h1 class="text-center text-tsec sm:text-[17px] font-semibold"><i class="bi bi-exclamation-circle me-2"></i>Product Not found!</h1>
            </div>
        </div>
    </Master>
</template>