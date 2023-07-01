<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-4 px-4 md:px-16 py-4">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />


        <div class="fixed flex rounded-full justify-center items-center bottom-8 right-10 bg-button-background h-14 w-14">
            <img src="@/assets/svg/cart.svg" class="h-8" alt="" srcset="">
            <p class="bg-red-500 w-6 h-6 flex justify-center font-bold items-center text-white rounded-full absolute top-[-8px] right-[-8px]">5</p>
        </div>

    </div>s

    
</template>

<script setup lang="ts">

</script>

<style scoped></style>