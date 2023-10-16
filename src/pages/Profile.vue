<script setup>
import { useRouter } from 'vue-router';
import Master from '../layout/Master.vue';

const router = useRouter();

</script>

<template>
    <Master>
        <div class="w-[95%] sm:w-[550px] mx-auto border border-bpri rounded py-4 px-[10px] sm:px-6 shadow mt-1 sm:mt-6 f-poppins bg-white mb-[68px]">
            <button @click="router.back()"><i class="bi bi-arrow-left px-2 py-1 rounded bg-accent text-white hover:bg-accent2"></i></button>
        
            <div class="mt-6">
                <h1 class="font-medium text-[16px] text-tpri mb-1">Profile</h1>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-person-circle me-2"></i>My Account</button>
                </div>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-arrow-repeat me-2"></i>Forget Passowrd ?</button>
                </div>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-box-arrow-right me-2"></i>Logout</button>
                </div>
            </div>

            <div class="mt-4">
                <h1 class="font-medium text-[16px] text-tpri mb-1">Order</h1>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-box-seam me-2"></i>Order history</button>
                </div>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-arrow-clockwise me-2"></i>Refund</button>
                </div>
            </div>

            <div class="mt-4">
                <h1 class="font-medium text-[16px] text-tpri mb-1">Setting</h1>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-globe2 me-2"></i>Change Languages</button>
                </div>
            </div>

            <div class="mt-4">
                <h1 class="font-medium text-[16px] text-tpri mb-1">General</h1>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-card-text me-2"></i>Terms & Conditions</button>
                </div>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-headset me-2"></i>Help</button>
                </div>
                <div class="mb-2">
                    <button class="bg-bg1 hover:bg-bg2 w-full text-start px-3 py-[6px] text-slate-600 text-sm rounded-sm"><i class="bi bi-question-circle me-2"></i>FAQS?</button>
                </div>  
            </div>

        </div>
    </Master>
</template>