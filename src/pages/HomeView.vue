<template>
	<div class="flex flex-col items-center p-10">
		<CharacterFilter
			:modelValue="{ inputText, selectedStatus }"
			@update:modelValue="handleFilterUpdate"
		/>

		<ErrorDisplay v-if="error" :message="error" />
		<ErrorDisplay v-if="validationError" :message="validationError" />

		<div v-if="loading" class="flex justify-center mt-10">
			<LoadingSpinner />
		</div>

		<div
			v-else-if="characters.length > 0"
			class="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-10"
		>
			<CharacterList
				v-for="character in characters"
				:key="character.id"
				:character="character"
			/>
		</div>

		<Pagination
			:currentPage="currentPage"
			:totalPages="totalPages"
			@pageChange="changePage"
		/>
	</div>
</template>

<script setup lang="ts">
import CharacterFilter from '../components/character/CharacterFilter.vue';
import CharacterList from '../components/character/CharacterList.vue';
import LoadingSpinner from '../components/shared/LoadingSpinner.vue';
import ErrorDisplay from '../components/shared/ErrorDisplay.vue';
import Pagination from '../components/shared/Pagination.vue';
import { useCharacter } from '../composables/useCharacter';

const {
	inputText,
	selectedStatus,
	characters,
	error,
	validationError,
	loading,
	handleFilterUpdate,
	currentPage,
	totalPages,
	changePage,
} = useCharacter();
</script>
