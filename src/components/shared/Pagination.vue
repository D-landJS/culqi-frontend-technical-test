<template>
	<div class="mt-6 flex items-center space-x-2">
		<button
			@click="goToPage(1)"
			:disabled="currentPage <= 1"
			class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition duration-300 disabled:opacity-50"
		>
			&laquo;&laquo;
		</button>
		<button
			@click="goToPage(currentPage - 1)"
			:disabled="currentPage <= 1"
			class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition duration-300 disabled:opacity-50"
		>
			&laquo;
		</button>
		<span class="text-gray-700">
			Page {{ currentPage }} of {{ totalPages }}
		</span>
		<button
			@click="goToPage(currentPage + 1)"
			:disabled="currentPage >= totalPages"
			class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition duration-300 disabled:opacity-50"
		>
			&raquo;
		</button>
		<button
			@click="goToPage(totalPages)"
			:disabled="currentPage >= totalPages"
			class="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition duration-300 disabled:opacity-50"
		>
			&raquo;&raquo;
		</button>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	currentPage: number;
	totalPages: number;
}>();

const emit = defineEmits<{
	(e: 'pageChange', page: number): void;
}>();

const goToPage = (page: number) => {
	if (page > 0 && page <= props.totalPages) {
		emit('pageChange', page);
	}
};
</script>
