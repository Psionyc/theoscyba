<template>
    <div class="main">
        <div class="justify-between hidden md:flex">
            <div class="flex justify-between flex-col h-[100%]">
                <div class="flex flex-col ml-16 mt-4">
                    <h1 class="font-bold text-[64px] text-white">iTalk Conference</h1>
                    <p class="font-semibold text-white w-[555.35px] ">A gathering of professionals, entrepreneurs and
                        enthusiasts in the field of technology. This year's conference which is a summit for Techpreneurs
                        promises to provide a chance for participants to gain knowledge about new technologies, connect with
                        well meaning individuals in the industry, collaborate and share insight.</p>
                    <div class="flex mt-8 gap-6">
                        <ButtonNormal @click="openRegistration" />
                        <NuxtLink to="/store">
                            <ButtonGhost />
                        </NuxtLink>
                    </div>
                </div>
                <div class=" mt-[320px] flex items-center gap-x-2 p-0 px-10">
                    <img class="object-scale-down" src="@/assets/svg/coca-cola.svg" alt="" srcset="">
                    <img class="object-scale-down" src="@/assets/svg/meta.svg" alt="" srcset="">
                    <img class="object-scale-down" src="@/assets/svg/interswitch.svg" alt="" srcset="">
                    <img class="object-scale-down" src="@/assets/svg/apple.svg" alt="" srcset="">
                    <img class="object-scale-down" src="@/assets/svg/google.svg" alt="" srcset="">
                    <img class="object-scale-down" src="@/assets/svg/microsoft.svg" alt="" srcset="">
                </div>
            </div>
            <!-- <img src="@/assets/images/gallery.png" class="w-[568px] object-scale-down" alt="" srcset=""> -->
            <video autoplay loop src="@/assets/videos/intros.webm"></video>
        </div>

        <div class="flex md:hidden items-center flex-col">
            <h1 class="font-bold text-[28px] text-white mt-2">iTalk Conference</h1>
            <p class="font-semibold text-white text-center text-[14px] mt-3 px-2 leading-6">A gathering of professionals,
                entrepreneurs and
                enthusiasts in the field of technology. This year's conference which is a summit for Techpreneurs
                promises to provide a chance for participants to gain knowledge about new technologies, connect with
                well meaning individuals in the industry, collaborate and share insight.</p>

            <div class="flex mt-8 gap-4">
                <ButtonNormal @click="openRegistration" />
                <NuxtLink to="/store">
                    <ButtonGhost />
                </NuxtLink>
            </div>
            <div class="relative mt-[120px] w-full">
                <img src="@/assets/images/gallery.mobile.png" class="w-full" alt="" srcset="">
                <div class="flex absolute bottom-[8px] left-[50%] translate-x-[-50%] items-center gap-x-2 mt-2">
                    <img class="object-scale-down h-[16px]" src="@/assets/svg/coca-cola.svg" alt="" srcset="">
                    <img class="object-scale-down h-[16px]" src="@/assets/svg/meta.svg" alt="" srcset="">
                    <img class="object-scale-down h-[16px]" src="@/assets/svg/interswitch.svg" alt="" srcset="">
                    <img class="object-scale-down h-[16px]" src="@/assets/svg/apple.svg" alt="" srcset="">
                    <img class="object-scale-down h-[16px]" src="@/assets/svg/google.svg" alt="" srcset="">
                    <img class="object-scale-down h-[16px]" src="@/assets/svg/microsoft.svg" alt="" srcset="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const { openRegistration, closeRegistration } = useModals();


</script>

<style scoped></style>