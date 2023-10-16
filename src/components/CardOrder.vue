<script setup>
    const props = defineProps(['datas']);

</script>

<template>
    <div v-for="d in datas" class="flex justify-start items-start rounded border border-bpri bg-white shadow p-3 f-poppins mb-3">
        <div>
            <router-link :to="`/detail/${d.id}/${d.category}`"><img class="w-[110px] h-[100px] object-cover border border-brpi rounded cursor-pointer hover:opacity-80" :src="d.thumbnail" alt="image" /></router-link>
        </div>
        <div class="ps-2 flex-1">
            <h1 class="f-poppins text-tpri font-semibold">{{ d.title }}</h1>
            <h1 class="f-poppins text-tpri text-sm">Qty : {{ d.qty }}</h1>
            <h1 class="f-poppins text-tpri font-medium text-sm">Total : {{ d.price * d.qty }} $</h1>
            <div class="mt-2 text-end">
                <button class="bg-accent text-white text-xs font-medium rounded-sm shadow px-3 py-1 hover:bg-accent2">Order again</button>
            </div>
        </div>
    </div>
</template>