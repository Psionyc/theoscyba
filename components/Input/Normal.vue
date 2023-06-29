<template>
    <div class="flex flex-col w-full max-w-full my-4 gap-2">
        <p class="text-white font-medium">{{ name ?? "Name" }}</p>
        <input :value="modelValue"
    @input="$emit('update:modelValue', ($event.target! as any).value)" class="bg-transparent focus:border-[#F65766] py-4 px-4 rounded-[8px] border-[2px] text-white outline-none"
            :type="type ?? 'text'" :placeholder="placeholder ?? ''">
    </div>
</template>

<script setup lang="ts">

interface InputNormalProps {
    name?: string
    type?: string
    placeholder?: string,
    modelValue?: string
}



const { name, type } = defineProps<InputNormalProps>()
defineEmits(['update:modelValue'])

</script>

<style scoped></style>