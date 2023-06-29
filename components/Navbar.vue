<template>
    <div class="w-[100vw] mt-4 h-[64px] px-16 items-center flex justify-between">
        <div class="logo flex gap-4 p-2 items-center">
            <img src="@/assets/images/logo.png" class="h-[48px]" alt="" srcset="">
            
        </div>
        <div class="links h-full gap-8 flex items-center text-white font-semibold text-[18px]">
           <NuxtLink to="/register"><a href="">Register</a></NuxtLink> 
           <NuxtLink to="/store"><a href="">Store</a></NuxtLink> 
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>