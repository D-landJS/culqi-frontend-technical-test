<template>
	<div class="flex flex-col md:flex-row gap-4">
		<Input
			v-model="inputText"
			placeholder="Find a character"
			@input="handleInput"
		/>
		<Select v-model="selectedStatus" @update:modelValue="handleInput" />
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Input from '../shared/Input.vue';
import Select from '../shared/Select.vue';

const props = defineProps<{
	modelValue: {
		inputText: string;
		selectedStatus: string;
	};
}>();

const emit = defineEmits<{
	(
		e: 'update:modelValue',
		value: { inputText: string; selectedStatus: string }
	): void;
}>();

const inputText = ref(props.modelValue.inputText);
const selectedStatus = ref(props.modelValue.selectedStatus);

const handleInput = () => {
	emit('update:modelValue', {
		inputText: inputText.value,
		selectedStatus: selectedStatus.value,
	});
};

watch([inputText, selectedStatus], () => {
	handleInput();
});
</script>
