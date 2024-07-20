<template>
	<div class="flex flex-col items-center">
		<img
			:src="character.image"
			:alt="character.name"
			class="rounded-full shadow-lg border-4 border-gray-300 transition duration-300 transform hover:scale-105"
		/>
		<p class="mt-2 text-center">{{ character.name }}</p>
		<p class="text-gray-600">{{ character.status }}</p>
	</div>
</template>

<script setup lang="ts">
import { CharacterUIModel } from '../../interfaces';

const props = defineProps<{
	character: CharacterUIModel;
}>();

const { character } = props;
</script>
