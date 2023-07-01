<template>
    <div class="bg-white w-full min-w-[300px] h-[400px] rounded-[20px] flex flex-col overflow-clip">
        <div class="w-full h-[300px] overflow-clip">
            <img src="@/assets/shirts/t-shirt-1.jpeg"
                class="w-full h-[300px] hover:scale-125 ease-in-out duration-200 object-cover" alt="" srcset="">
        </div>

        <div class="flex h-full w-full bg-[#484848] px-6 py-4 justify-between items-center">

            <div class="flex flex-col ">
                <p class="font-semibold text-white">ITSA Talk T-Shirt (White)</p>
                <p class="font-bold text-[24px]">#3800</p>
            </div>

            <div class="flex justify-between items-center bg-[#F65766] p-3 rounded-lg">
                <img class="h-6" src="@/assets/svg/cart.svg" alt="">
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    name?: string; 
    price?: string
    image?: string
}



const { name, price, image } = defineProps<Props>()

function log() {
    console.log(name, price, image)
}

onMounted(() => {
    log()
})


</script>

<style scoped></style>