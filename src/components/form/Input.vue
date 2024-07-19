<template>
	<input
		type="text"
		class="input"
		v-model="inputText"
		@input="handleInput"
		:placeholder="placeholder"
	/>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps<{
	modelValue: string;
	placeholder: string;
}>();

const emits = defineEmits(['update:modelValue', 'input']);

const inputText = ref(props.modelValue);

const handleInput = () => {
	emits('update:modelValue', inputText.value);
	emits('input');
};
</script>

<style scoped>
.input {
	@apply border-2 border-gray-400 p-3 rounded-lg shadow-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300;
}
</style>
