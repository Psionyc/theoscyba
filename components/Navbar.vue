<template>
    <div class="w-[100vw] mt-4 h-[64px] px-2 md:px-16 items-center flex justify-between">
        <div class="logo flex gap-4 p-2 items-center">
            <NuxtLink to="/"> <img src="@/assets/images/logo.png" class="h-[48px]" alt="" srcset=""> </NuxtLink>
        </div>
        <div class="links hidden h-full gap-8 md:flex items-center text-white font-semibold text-[18px]">
            <a @click="openRegistration" href="#">Register</a>
            <NuxtLink to="/store"><a href="">Store</a></NuxtLink>
        </div>
        <img src="@/assets/svg/mobile_nav.svg" class="w-6 md:hidden" alt="" srcset="">
    </div>
</template>

<script setup lang="ts">
const { openRegistration } = useModals()
</script>

<style scoped></style>