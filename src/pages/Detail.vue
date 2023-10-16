<script setup>
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Master from '../layout/Master.vue';
import CardProduct from '../components/CardProduct.vue';
import Loading from '../components/Loading.vue';

const store = useStore();
const route = useRoute();
const router = useRouter();

let pID = route.params.id;
let category = route.params.cat;
const loading = ref(true);

const data = computed(() => store.getters.detail);
const similar = computed(() => store.getters.similars);
const favIds = computed(() => store.getters.myFavItems.map(val => val.id));


const toggleFav = (id) => store.dispatch('toggleFav',id);

const getDetail = (id) => {
    loading.value = true;
    store.dispatch('getDetail',id);
    setTimeout(() => loading.value = false,350);
}

const getSimilar = (id,cat) => {
    store.dispatch('getSimilar',{id,cat});
}

const addToCart = (item) => {
    store.dispatch('addToCart',item);
}

onMounted(() => {
    getDetail(pID);
    getSimilar(pID,category);
});

onUpdated(() => {
    pID = route.params.id;
    category = route.params.cat;
    getDetail(pID);  
    getSimilar(pID,category); 
});

// ======================= img modal ==========================
let modal = ref(false);
let curImg = ref(0);

const prev = () => {
    if(curImg.value > 0){
        curImg.value -= 1 ;
    }else{
        curImg.value = data.value.images.length-1;
    }
}

const next = () => {
    if(curImg.value < data.value.images.length-1){
        curImg.value += 1 ;
    }else{
        curImg.value = 0;
    }
}

</script>

<template>
    <Master>

        <!-- ================================================== back button ======================================= -->
        <div class="w-[95%] md:w-[80%] mx-auto mt-5">
            <button @click="router.back()">
                <i class="bi bi-arrow-left text-white px-2 py-1 rounded hover:bg-black/70 bg-accent text-xl"></i>
            </button>
        </div>

        <Loading v-if="loading" />

        <!-- ================================================== detail ======================================= -->
        <div v-if="data" class="w-[95%] mx-auto mt-3 flex justify-center items-center flex-wrap pb-5 sm:pb-0 md:pb-10 sm:pt-6 f-poppins">

            <div class="w-full sm:w-6/12 lg:w-6/12 mx-auto">
                <div class="w-full sm:w-[270px] md:w-[350px] lg:w-[450px] lg:me-10 mx-auto block">
                    <div class="group relative">
                        <img class="h-[320px] object-cover rounded-md shadow border border-bpri mx-auto" :src="data.images ? data.images[curImg] : data.thumbnail" alt="product" />
                        <div @click="modal = true" class="hidden absolute top-0 left-0 w-full h-full bg-slate-800/60 group-hover:flex justify-center items-center cursor-pointer">
                            <i class="bi bi-arrows-angle-expand text-white text-3xl"></i>
                        </div>
                    </div>
                    <div class="w-full mx-auto flex justify-center sm:justify-start items-center flex-wrap mt-2">
                        <div v-for="(img,index) in data.images" :key="img" class="">
                            <img @click="curImg = index" :src="img" class="w-[65px] h-[67px] sm:w-[78px] sm:h-[80px] object-cover rounded shadow border border-bpri hover:opacity-75 cursor-pointer mb-[2px]" alt="product image" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-[95%] sm:w-6/12 lg:w-6/12 f-poppins mt-5 sm:mt-0 md:ps-5 lg:ps-0">
                <h1 class="text-tpri font-semibold text-lg md:text-xl mb-4">{{ data.title }}</h1>
                <div class="flex items-center mb-2">
                    <h1 class="text-tsec font-medium text-sm">Brand : {{ data.brand }}</h1>
                    <router-link :to="`/search?type=cat&data=${data.category}`" class="text-xs text-tsec font-medium ms-4 border border-bpri rounded px-1 hover:bg-black/50 hover:text-white">#{{ data.category }}</router-link>
                </div>
                <p class="text-tpri pb-4 md:w-10/12 border-b border-bpri">{{ data.description }}</p>
                <h1 class="text-tpri text-sm mt-6"><i class="bi bi-star me-2 text-xs ms-2 text-accent"></i>Rating : {{ data.rating }}</h1>
                <h1 class="text-tpri text-sm"><i class="bi bi-box me-2 text-xs ms-2 text-accent"></i>Stock : <span class="font-semibold">{{ data.stock }}</span> items left</h1>
                <h1 class="text-tpri text-lg font-semibold mt-4 ms-2">Price : {{ data.price }}$</h1>
                <div class="flex justify-start items-center mt-4">
                    <button @click="addToCart(data)" class="ms-2 px-4 py-1 rounded-sm bg-accent text-white font-medium hover:bg-black/70 text-sm md:text-base group"><i class="bi bi-cart-fill me-2 group-hover:text-accent"></i>Add to Cart</button>
                    <button title="Add to Favourite" @click="toggleFav(data)" class="ms-8 sm:ms-12 text-tpri pb-[2px] pt-[6px] px-2 rounded border border-bpri hover:border-accent"><i :class="{'bi-heart-fill text-accent' : favIds.includes(data.id),'bi-heart text-tpri' : !favIds.includes(data.id)}" class="bi hover:text-accent"></i></button>
                </div>
            </div>

        </div>

        <!-- ================================================== similar ======================================= -->
        <div v-if="similar.length > 0" class="bg-bg2 pb-16 pt-10 mt-12">
           <div class="w-[95%] md:w-10/12 mx-auto f-poppins mb-14">
                <h1 class="text-tpri font-semibold text-lg lg:text-[20px] text-center">Similar Products</h1>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-5 mt-8">

                    <CardProduct v-if="similar" :datas="similar" />

                </div>

            </div>  
        </div>

        <!-- ================================================== image modal ======================================= -->
        <div :class="{'block':modal,'hidden':!modal}" class="fixed z-40 top-0 left-0 w-full h-screen bg-zinc-900/90 backdrop-blur-[1px]">
            <div class="text-end">
                <button @click="modal = false" class="text-3xl me-3 mt-3 text-white hover:text-accent"><i class="bi bi-x-lg"></i></button>
            </div>
            <div class="flex justify-center items-start w-full h-full relative">
                <img v-if="data.images" class="object-cover h-[90vh] rounded-md" :src="data.images[curImg]" alt="image" />
                <button @click="prev" class="absolute left-0 top-[40%] text-3xl md:text-4xl text-accent hover:bg-accent hover:text-white rounded-full p-1"><i class="bi bi-chevron-left"></i></button>
                <button @click="next" class="absolute right-0 top-[40%] text-3xl md:text-4xl text-accent hover:bg-accent hover:text-white rounded-full p-1"><i class="bi bi-chevron-right"></i></button>
            </div>
        </div>

    </Master>
</template>