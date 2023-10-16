<script setup>
import { computed, ref } from 'vue';
import {  useRoute, useRouter } from 'vue-router'
import CardCart from './CardCart.vue';
import { useStore } from 'vuex';

    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const navOpen = ref(false);
    const confirm = ref(false);
    const search = ref('');
    const cart = computed(() => store.getters.mycart);
    const totalprices = computed(() => store.getters.totalprices);

    const searchByStr = () => {
        router.push({ path : '/search', query : { type : 'str',data : search.value } });
    }

    const takeOrder = () => {
        store.dispatch('takeOrder');
        router.push({path : '/order'});
    }

</script>

<template class="overflow-x-hidden">
    <nav class="sticky top-0 z-30 w-full ps-4 shadow-sm sm:px-4 md:px-6 py-2 md:py-[6px] bg-white border-b border-gray-600/50">

        <div class="relative flex justify-between items-stretch py-1 sm:py-0">
            <div class="">
                <a href="/" class="h-full flex justify-center items-center hover scale-[0.85] sm:scale-100 ms-1">
                    <img class="w-[30px]" src="/images/migo_logo.png" alt="logo" />
                    <span class="font-bold text-base sm:text-lg text-accent drop-shadow-md ms-2 sm:ms-2 mt-1">
                        <span>MiGo</span>
                        <span> Shop</span>
                    </span>    
                </a>
            </div>
            <div class="md:flex items-center scale-[0.87] min-[700px]:scale-100 md:-translate-x-5">
                <button @click="navOpen = !navOpen" :key="cart" class="hidden md:inline ms-4 me-2 md:me-6 text-tpri px-3 py-[6px] hover:text-accent hover:bg-bg2 rounded-full animate__animated animate__swing"><i class="bi bi-cart3 text-lg"></i><sup v-if="cart.length > 0" class="bg-accent text-white px-1 rounded-sm">{{ cart.length }}</sup></button>
                <div class="flex justify-center items-center">
                    <input v-model="search" @keyup.enter="searchByStr" class="border border-slate-700/60 rounded-l-sm px-2 py-1 text-tpri outline-none focus:border-accent" type="text" placeholder="Search . . ." />
                    <button @click="searchByStr()" class="px-2 py-1 bg-accent text-white rounded-r-sm border border-accent hover:bg-accent2 hover:border-accent2"><i class="bi bi-search"></i></button>
                </div>
            </div>
        </div>

        <!-- ======================================== cart bar ======================================= -->
        <div :class="{'right-0':navOpen,'-right-[290px]':!navOpen}" class="cart absolute z-30 bg-white w-[290px] top-[53px] duration-200 f-poppins flex flex-col items-center justify-between shadow-md border-l border-slate-600/20">
            <div class="w-full px-3 py-2">
                <div class="w-full flex justify-between items-center text-accent font-semibold mb-1">
                    <h1><i class="bi bi-cart3 text-lg text-accent me-2"></i>Cart</h1>
                    <button @click="navOpen = false" class="me-2  text-accent hover:text-tpri px-2 py-[3px] rounded-full"><i class="bi bi-x-lg text-[18px] md:text-2xl"></i></button>
                </div>
                <div class="h-[580px] md:h-[560px] border-y border-bpri overflow-scroll">
                    
                    <CardCart :datas="cart" />

                    <h1 v-if="cart.length < 1" class="text-gray-400 font-semibold text-center py-32"><i class="bi bi-exclamation-circle me-2 text-lg"></i>Empty!</h1>

                </div>
            </div>
            <div class="w-full px-3 mb-3">
                <div class="text-slate-600 flex justify-between items-center px-2 font-semibold">
                    <h1>Total : </h1>
                    <h1>{{ totalprices }} $</h1>
                </div>
                <button @click="confirm = true" :class="{'pointer-events-none bg-accent2 text-white':cart.length < 1,'bg-accent text-white':cart.length > 0}" class="rounded w-full py-1 mt-2 hover:bg-black/80">Checkout</button>
            </div>
        </div>  
    </nav>

    <!-- ====================================== nav ========================================== -->
    <nav class="fixed bottom-0 z-20 min-[420px]:bottom-[10px] md:bottom-4 lg:bottom-4 w-full f-poppins">
        <div class=" min-[420px]:w-[400px] flex justify-between min-[420px]:justify-around items-center px-2 mx-auto bg-accent min-[420px]:rounded-md border border-white/30 py-2 sm:py-1 shadow-lg shadow-slate-800/60 min-[420px]:ring-1 ring-white/20 ring-offset-[3px] ring-offset-accent">
            <router-link to="/" class="w-[56px] flex flex-col justify-center items-center group hover">
                <i :class="{'bi-house-fill': route.path == '/','bi-house' : route.path != '/'}" class="bi text-lg text-white translate-y-[1px]"></i>
                <span class="text-xs font-semibold text-white">Home</span>
            </router-link>
            <router-link to="/fav" class="w-[56px] flex flex-col justify-center items-center group hover">
                <i :class="{'bi-heart-fill': route.path == '/fav','bi-heart' : route.path != '/fav'}" class="bi text-lg text-white translate-y-[1px]"></i>
                <span class="text-xs font-semibold text-white">Favourite</span>
            </router-link>
            <button @click="navOpen = !navOpen" :key="cart" class="md:hidden w-[56px] flex flex-col justify-center items-center group hover animate__animated animate__swing">
                <i class="bi bi-cart3 text-lg translate-y-[2px] text-white"><sup v-if="cart.length > 0" class="text-xs text-white bg-black/60 rounded-sm px-[3px]">{{ cart.length }}</sup></i>
                <span class="text-xs font-semibold text-white">Cart</span>
            </button>
            <router-link to="/order" class="w-[56px] flex flex-col justify-center items-center group hover">
                <i :class="{'bi-bag-fill': route.path == '/order','bi-bag' : route.path != '/order'}" class="bi text-lg text-white translate-y-[1px]"></i>
                <span class="text-xs font-semibold text-white">Order</span>
            </router-link>
            <router-link to="/profile" class="w-[56px] flex flex-col justify-center items-center group hover">
                <i :class="{'bi-person-fill': route.path == '/profile','bi-person' : route.path != '/profile'}" class="bi text-[21px] text-white"></i>
                <span class="text-xs font-semibold text-white">Profile</span>
            </router-link>
        </div>
    </nav>

    <div @click="confirm = false" v-if="confirm" class="fixed top-0 left-0 w-full h-screen bg-gray-800/95 z-40 flex justify-center items-center">
        <div class="w-[280px] rounded bg-white f-poppins p-4 shadow border border-bpri text-center animate__animated animate__jackInTheBox">
            <h1><i class="bi bi-check-circle text-4xl text-tsec"></i></h1>
            <h1 class="text-tpri font-semibold mt-3">Confirm Checkout</h1>
            <h1 class="text-tsec text-sm">Are you sure to take orders?</h1>
            <div class="mt-4 flex justify-between items-stretch">
                <button @click="confirm = false" class="flex-1 text-tpri font-medium hover:text-accent">Cancel</button>
                <button @click="takeOrder" class="flex-1 text-white bg-accent font-medium rounded-sm py-1 hover:opacity-80">Order</button>
            </div>
        </div>
    </div>
</template>