<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter();

</script>

<template>
    <div class="w-full h-screen flex justify-center items-center bg-bg1">
        <div class="w-[280px] bg-white py-5 rounded-md shadow border border-bpri">
            <h1 class="text-center"><i class="bi bi-exclamation-circle text-tpri text-3xl sm:text-4xl"></i></h1>
            <h1 class="text-center text-tpri mt-2 mb-3">Oops! Page Not Found!</h1>
            <button @click="router.back()" class="text-center w-full font-semibold hover:text-accent hover"><i class="bi bi-arrow-left text-lg me-2"></i>Go back</button>
        </div>
    </div>
</template>

