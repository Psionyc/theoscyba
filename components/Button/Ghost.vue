<template>
    <div
        class="w-[170px] md:w-[216px] text-center px-4 cursor-pointer h-[60px] bg-white rounded-[16px] grid place-items-center text-button-background font-semibold  text-[14px] md:text-[18px] hover:scale-105 ease-in-out">
        {{ text ?? "Grab A Shirt" }}
    </div>
</template>

<script setup lang="ts">
interface GhostButtonProps {
    text?: string
    
}

const { text } = defineProps<GhostButtonProps>()
</script>

<style scoped></style>