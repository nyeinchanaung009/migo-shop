<script setup>
import { computed, onMounted, onUpdated, ref } from 'vue';
import Master from '../layout/Master.vue';
import { useStore } from 'vuex';
import CardProduct from '../components/CardProduct.vue';
import { useRouter } from 'vue-router';
import Loading from '../components/Loading.vue';

const router = useRouter();
const store = useStore();

const data = computed(() => store.getters.myProducts);
const categories = computed (() => store.getters.categories);
const page = ref(1);
const ele = ref();
const loading = ref(true);

const searchByCat = (value) => {
    router.push({ path: '/search', query: { type : 'cat',data : value } });
}

const getAll = () => {
    loading.value = true;
    store.dispatch('getProducts',page.value);
    setTimeout(() => loading.value = false,350);
    ele.value.scrollIntoView({ behavior: "smooth"});
}

const getCategory = () => {
    store.dispatch('getCategories');
}

const setPage = (num) => {
    page.value = num;
    getAll();
}

const prev = () => {
    if(page.value > 1){
        page.value --;
        getAll();
    }
}

const next = () => {
    if(page.value < 4){
        page.value ++;
        getAll();
    }
}

onMounted(() => {
    getCategory();
    getAll();
});

</script>

<template>
    <Master>
        <div class="w-[95%] sm:w-11/12 lg:w-10/12 mx-auto pt-1 pb-20">

            <Loading v-if="loading" />

            <div ref="ele" class="mt-8 flex justify-center items-center flex-wrap space-x-6">
                <h1 id="top" class="font-medium text-sm f-poppins text-tpri"><i class="bi bi-search me-2"></i>Search by Categories</h1>
                <select @change="e => searchByCat(e.target.value)" class="px-2 py-[2px] text-white bg-accent font-medium text-xs f-poppins rounded-sm shadow-md border border-bpri">
                    <option selected disabled>-- Categories --</option>
                    <option v-for="(c,index) in categories" :key="index">{{ c }}</option>
                </select>
            </div>

            <div>
                <h1 class="mt-8 font-semibold f-poppins text-tpri text-lg">Products</h1>
                <div id="card-wrapper" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-5 mt-4">

                    <CardProduct v-if="data" :datas="data" />

                </div>
            </div>

            <div class="flex justify-center items-stretch my-20">
                <button @click="prev" :class="{'pointer-events-none opacity-50':page == 1 }" class="bg-white hover:bg-accent text-tpri hover:text-white text-lg px-2 py-1 rounded-sm shadow border border-bpri "><i class="bi bi-chevron-left"></i></button>
                <button @click="setPage(1)" :class="{'active' : page == 1}" id="paginate" class="bg-white hover:bg-accent text-tpri hover:text-white text-lg border border-bpri px-3 py-[2px] prounded-sm">1</button>
                <button @click="setPage(2)" :class="{'active' : page == 2}" id="paginate" class="bg-white hover:bg-accent text-tpri hover:text-white text-lg border border-bpri px-3 py-[2px] prounded-sm">2</button>
                <button @click="setPage(3)" :class="{'active' : page == 3}" id="paginate" class="bg-white hover:bg-accent text-tpri hover:text-white text-lg border border-bpri px-3 py-[2px] prounded-sm">3</button>
                <button @click="setPage(4)" :class="{'active' : page == 4}" id="paginate" class="bg-white hover:bg-accent text-tpri hover:text-white text-lg border border-bpri px-3 py-[2px] prounded-sm">4</button>
                <button @click="next" :class="{'pointer-events-none opacity-50':page == 4 }" class="bg-white hover:bg-accent text-tpri hover:text-white text-lg px-2 py-1 rounded-sm shadow border border-bpri"><i class="bi bi-chevron-right"></i></button>
            </div>

        </div>  
    </Master>
</template>

<style>
    #paginate.active{
        background-color: #3582c2 !important;
        color : #ffffff;
    }
</style>