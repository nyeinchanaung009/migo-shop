<script setup>
    const date = new Date().getFullYear();
</script>

<template>
    <div class="bg-accent pt-10 pb-24 f-poppins">

        <div class="flex justify-around items-center flex-wrap mb-6">
            <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-8">
                <a href="/" class="block hover w-fit mx-auto hover:opacity-80">
                    <img class="w-[55px] mx-auto mb-1" src="/images/migo_logo_alt.png" alt="logo" />
                    <p class="text-white font-bold text-base md:text-[17px] text-center">MiGo Shop</p>
                </a>
                <div class="flex justify-center items-center space-x-2 text-bg1 mt-5">
                    <i class="bi bi-facebook bg-white px-[7px] pt-[5px] pb-[2px] text-accent hover:bg-black/60 hover:text-white shadow border border-transparent hover:border-bpri cursor-pointer rounded-full text-sm"></i>
                    <i class="bi bi-twitter bg-white px-[7px] pt-[5px] pb-[2px] text-accent hover:bg-black/60 hover:text-white shadow border border-transparent hover:border-bpri cursor-pointer rounded-full text-sm"></i>
                    <i class="bi bi-instagram bg-white px-[7px] pt-[5px] pb-[2px] text-accent hover:bg-black/60 hover:text-white shadow border border-transparent hover:border-bpri cursor-pointer rounded-full text-sm"></i>
                </div>
            </div>

            <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-8">
                <h1 class="font-semibold text-lg text-white mb-2 text-center">Quick Link</h1>
                <div class="w-[260px] mx-auto">
                    <router-link to="/" class="flex justify-between items-center px-2 w-full py-1 text-white text-sm hover:bg-bg2 border-b border-bg2">
                        <span>Home</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </router-link>
                    <router-link to="/fav" class="flex justify-between items-center px-2 w-full py-1 text-white text-sm hover:bg-bg2 border-b border-bg2">
                        <span>Favorite</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </router-link>
                    <router-link to="/order" class="flex justify-between items-center px-2 w-full py-1 text-white text-sm hover:bg-bg2 border-b border-bg2">
                        <span>Orders</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </router-link>
                    <router-link to="/profile" class="flex justify-between items-center px-2 w-full py-1 text-white text-sm hover:bg-bg2">
                        <span>Profile</span>
                        <span><i class="bi bi-chevron-right"></i></span>
                    </router-link>
                </div>
            </div>

            <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-8">
                <h1 class="font-semibold text-lg text-white mb-2 text-center">General</h1>
                <h1 class="text-white text-center text-sm py-[2px] hover:text-black/80 cursor-pointer hover:underline underline-offset-2 duration-100">My Account</h1>
                <h1 class="text-white text-center text-sm py-[2px] hover:text-black/80 cursor-pointer hover:underline underline-offset-2 duration-100">Order History</h1>
                <h1 class="text-white text-center text-sm py-[2px] hover:text-black/80 cursor-pointer hover:underline underline-offset-2 duration-100">Refund</h1>
                <h1 class="text-white text-center text-sm py-[2px] hover:text-black/80 cursor-pointer hover:underline underline-offset-2 duration-100">Help</h1>
                <h1 class="text-white text-center text-sm py-[2px] hover:text-black/80 cursor-pointer hover:underline underline-offset-2 duration-100">FAQS</h1>
                <h1 class="text-white text-center text-sm py-[2px] hover:text-black/80 cursor-pointer hover:underline underline-offset-2 duration-100">Logout</h1>
            </div>

            <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-8">
                <h1 class="font-semibold text-lg text-white mb-2 text-center">About Us</h1>
                <p class="w-[250px] mx-auto text-white/95 font-light text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ullam unde similique! Voluptates magni iusto enim quis mollitia? Quas, quo <span class="text-white opacity-70 underline underline-offset-2 font-semibold">See More ...</span>
                </p>
                <div class="scale-90 mt-4 flex items-stretch mx-auto justify-center">
                    <input type="text" class="rounded-l-sm bg-white shadow border border-bpri py-1 outline-none px-2" placeholder="Send message" />
                    <button class="bg-black/60 text-white text-xs px-2 rounded-r-sm hover:bg-black/40">Send</button>
                </div>
            </div>
        </div>  

        <div class="flex items-center justify-center flex-wrap">
            <h1 class="text-xs text-white">Migo Shop &copy; {{ date }} , All right reserve.</h1>
            <a class="text-xs font-noramal ms-2 text-slate-900 hover:text-yellow-400 hover:underline underline-offset-4 pt-1 sm:pt-0" href="https://github.com/nyeinchanaung009">Developed by : <i class="bi bi-github me-1"></i>Nyein Chan Aung</a>
        </div>

    </div>
</template>