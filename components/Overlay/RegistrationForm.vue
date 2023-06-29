<template>
    <div :class="{ hidden: !registration }"
        class="fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] bg-button-background/70 w-[400px] rounded-[12px]">
        <div class="flex flex-col h-full items-center justify-end py-6 px-4">
            <p class="text-white text-[20px] font-semibold ">Register</p>
            <InputNormal v-model="form.fullName" name="Full Name" type="text" placeholder="John Doe" />
            <InputNormal v-model="form.email" name="Email" type="email" placeholder="johndoe@gmail.com" />
            <InputNormal v-model="form.phoneNumber" name="Phone Number" type="text" :placeholder="'+2348012345678'" />
            <InputNormal v-model="form.linkedIn" name="LinkedIn" placeholder="https://www.linkedin.com/in/john-doe/"
                type="url" />
            <ButtonGhost @click="submitRegistratonForm" text="Submit" class="w-full self-end" />
        </div>

    </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required, email,  } from '@vuelidate/validators';


const form = reactive({
    linkedIn: '',
    fullName: '',
    email: '',
    phoneNumber: ''
})

const validations = reactive({
    linkedIn: { required },
    fullName: { required },
    email: { required , email},
    phoneNumber: { required }
})

const v$ = useVuelidate(validations, form);

const { registration } = useRegistration()

const submitRegistratonForm = async () => {
    const isValid = await v$.value.$validate()
    console.log(isValid)
}


</script>

<style scoped lang="scss"></style>