<template>
	<div class="flex justify-center items-center">
		<select v-model="localSelectedStatus" class="select">
			<option
				v-for="status in statusOption"
				:key="status.value"
				:value="status.value"
			>
				{{ status.label }}
			</option>
		</select>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { statusOptions, StatusOption } from '../../constants/statusOptions';

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const localSelectedStatus = computed({
	get: () => props.modelValue,
	set: value => emit('update:modelValue', value),
});

const statusOption: StatusOption[] = statusOptions;
</script>

<style scoped>
.select {
	@apply border-2 border-gray-300 p-2 rounded-lg shadow-sm w-full max-w-xs md:max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300;
}
</style>
