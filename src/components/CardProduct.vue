<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

    const props = defineProps(['datas']);
    const store = useStore();
    const router = useRouter();
    const isaddcart = ref();

    const favIds = computed(() => store.getters.myFavItems.map(val => val.id));

    const toggleFav = (item) => store.dispatch('toggleFav',item);

    const addToCart = (item) => {
        isaddcart.value = item.id;
        store.dispatch('addToCart',item);
        setTimeout(() => {
            isaddcart.value = null;
        },400);
    }

    const goDetail = (id,cat) => {
        router.push({ name: 'detail', params: { id: id, cat: cat } });
    }

</script>

<template>
    <div v-for="d in datas" :key="d.id" id="card" class="bg-white rounded-md shadow-md shadow-black/20 mb-3 sm:mb-4 f-poppins pb-2 border border-bpri animate__animated animate__fadeIn">
        <div class="mb-1 relative">
            <router-link :to="`/detail/${d.id}/${d.category}`" class="block overflow-hidden">
                <img class="h-[160px] sm:h-[200px] object-cover mx-auto hover:opacity-95 hover:scale-105 duration-300 " :src="d.thumbnail" alt="product" />
            </router-link>
            <button @click="toggleFav(d)" class="absolute right-0 bottom-0 px-2 pt-1 bg-white rounded-t text-sm border-t border-l border-bpri"><i :class="{'bi-heart-fill text-accent':favIds.includes(d.id),'bi-heart text-tpri' : !favIds.includes(d.id)}" class="bi hover:text-accent hover:text-base duration-200 "></i></button>
        </div>
        <router-link :to="`/detail/${d.id}/${d.category}`" class="text-tpri font-medium ps-3 hover:text-accent min-h-[46px] block">{{ d.title.substr(0,28) }}{{ d.title.length > 27 ? '....'  : ''}}</router-link>
        <div @click="goDetail(d.id,d.category)" class="text-tsec ps-3 text-[13px] cursor-pointer">
            <h1>Stock : {{ d.stock }}</h1>
            <h1>Price : <span class="font-medium">{{ d.price }}$</span></h1>
        </div>
        <div class="mt-2 px-3">
            <button @click="addToCart(d)" class="w-full bg-accent text-white rounded py-[6px] shadow-md hover:bg-black/80 text-xs sm:text-sm sm:py-2 group"><i class="bi bi-cart3 me-1 sm:me-2 text-sm sm:text-base text-white group-hover:text-blue-400"></i>Add to Cart</button>
        </div>
    </div>
</template>