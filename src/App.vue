<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router';

const Header = defineAsyncComponent(
	() => import('./components/menu/Header.vue')
);
</script>

<template>
	<Header />

	<main
		class="bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 min-h-screen"
	>
		<RouterView />
	</main>
</template>
