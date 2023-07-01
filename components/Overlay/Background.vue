<template>
    <div :class="{ hidden: !overlay }" class="fixed w-full h-full top-0 left-0 bg-black/70">

    </div>
</template>

<script setup lang="ts">


const { overlay } = useOverlay()


</script>

<style scoped></style>