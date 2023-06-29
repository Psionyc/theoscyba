<template>
    <div class="flex justify-between">
        <div class="flex justify-between flex-col h-[100%]">
            <div class="flex flex-col ml-16 mt-4">
                <h1 class="font-bold text-[64px] text-white">iTalk Conference</h1>
                <p class="font-semibold text-white w-[555.35px] ">A gathering of professionals, entrepreneurs and
                    enthusiasts in the field of technology. This year's conference which is a summit for Techpreneurs
                    promises to provide a chance for participants to gain knowledge about new technologies, connect with
                    well meaning individuals in the industry, collaborate and share insight.</p>
                <div class="flex mt-8 gap-6">
                    <ButtonNormal @click="openRegistration" />
                    <ButtonGhost />
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
</template>

<script setup lang="ts">


const { openRegistration, closeRegistration } = useModals();

</script>

<style scoped></style>