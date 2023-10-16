<script setup>
import { computed, onUpdated, ref } from 'vue';
import { useStore } from 'vuex';

    const props = defineProps(['datas']);
    const store = useStore();
    const isDel = ref();

    const reduceQty = (id) => {
        store.dispatch('reduceQty',id);
    }

    const addQty = (id) => {
        store.dispatch('addQty',id);
    }
 
    const removeCart = (id) => {
        isDel.value = id;
        setTimeout(() => {
            store.dispatch('removeCart',id);
            isDel.value = null;
        },1800);
    }

    onUpdated(() => {
        store.dispatch('calculateTotal');
    });
    
</script>

<template>
    <div :class="{'animate__hinge':isDel == d.id,'animate__jackInTheBox': isDel != d.id}" v-for="d in datas" class="p-1 rounded bg-zinc-100 shadow-md shadow-black/20 mb-2 border border-bpri animate__animated">
        <div class="ps-2 pt-1">
            <img class="w-[70px] h-[60px] object-cover border border-bpri rounded-sm shadow" :src="d.thumbnail" alt="product image" />
        </div>
        <div>
            <h1 class="text-[15px] font-medium text-tpri mt-3 ps-2">{{ d.title }}</h1>
            <h1 class="text-sm text-tpri ps-2 mt-[2px]">Price : {{ d.price }}$</h1>
            <div class="w-fit my-2 ms-2 text-tpri border border-bpri">
                <button @click="reduceQty(d.id)" class="bg-white text-lg px-1 hover:bg-bg1 border-r border-bpri"><i class="bi bi-dash"></i></button>
                <span class="bg-white text-base px-2 min-w-[37px] inline-block text-center">{{ d.qty }}</span>
                <button @click="addQty(d.id)" class="bg-white text-lg px-1 hover:bg-bg1 border-l border-bpri"><i class="bi bi-plus"></i></button>
            </div>
            <div class="flex justify-between items-center px-2 pb-1">
                <h1 class="text-sm text-tpri font-semibold">Total : {{ d.price * d.qty }}$</h1>
                <button @click="removeCart(d.id)" class="text-white bg-accent px-2 py-1 rounded-sm shadow hover:bg-black/70"><i class="bi bi-trash3"></i></button>
            </div>
        </div>
    </div>
</template>