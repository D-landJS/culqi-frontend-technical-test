<template>
	<div class="mt-4 text-red-500">
		<p>{{ message }}</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	message: string;
}>();

const { message } = props;
</script>
