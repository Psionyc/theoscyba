<template>
    <div :class="{ hidden: !registration }"
        class="fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] bg-button-background/90 w-full md:w-[400px] h-full md:h-auto md:rounded-[12px]">
        <div class="flex flex-col h-full items-center justify-center py-6 px-4">
            <p class="text-white text-[20px] font-semibold ">Register</p>
            <InputNormal v-model="form.name" name="Full Name" type="text" placeholder="John Doe" />
            <InputNormal v-model="form.email" name="Email" type="email" placeholder="johndoe@gmail.com" />
            <InputNormal v-model="form.phoneNumber" name="Phone Number" type="text" :placeholder="'+2348012345678'" />
            <InputNormal v-model="form.linkedIn" name="LinkedIn" placeholder="https://www.linkedin.com/in/john-doe/"
                type="url" />
            <ButtonSubmit @click="submitRegistratonForm" text="Submit" class="w-full self-end mt-4" />
        </div>
        <div  @click="closeRegistration"
            class="cursor-pointer z-[10] fixed top-6 right-4 h-[30px] w-[30px] bg-white rounded-[16px] grid place-items-center  font-semibold  text-[18px] hover:scale-105 ease-in-out">
            <img class="w-[20px]" src="@/assets/svg/cancel.svg" alt="" srcset="">
        </div>
    </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required, email, } from '@vuelidate/validators';

const { closeRegistration } = useModals();

const form = reactive({
    linkedIn: '',
    name: '',
    email: '',
    phoneNumber: ''
})

const validations = reactive({
    linkedIn: { required },
    name: { required },
    email: { required, email },
    phoneNumber: { required }
})

const v$ = useVuelidate(validations, form);

const { registration } = useRegistration()

const submitRegistratonForm = async () => {
    const isValid = await v$.value.$validate()
    console.log(isValid)
    if (isValid) {
        try {
            const result = await useFetch('/api/register', {
                method: 'post',
                body: form as RegistrationValues,
            })
            console.log(result.data.value, result.error.value?.data)
        }
        catch (e) {
            console.log("Well")
            console.log("Weird data", e)
        }
    }

}

</script>

<style scoped lang="scss"></style>