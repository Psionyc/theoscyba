<template>
    <div :class="{ hidden: !overlay }" class="fixed w-full h-full top-0 left-0 bg-black/50">
        <div @click="closeRegistration"
            class="cursor-pointer absolute top-6 right-4 h-[30px] w-[30px] bg-white rounded-[16px] grid place-items-center  font-semibold  text-[18px] hover:scale-105 ease-in-out">
            <img class="w-[20px]" src="@/assets/svg/cancel.svg" alt="" srcset="">
        </div>
    </div>
</template>

<script setup lang="ts">


const { overlay } = useOverlay()

const { closeRegistration } = useModals();

</script>

<style scoped></style>