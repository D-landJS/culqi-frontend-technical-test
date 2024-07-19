import { ref, watch } from 'vue';
import api from '../services/api.service';
import { validateInput } from '../utils/validation';
import { debounce } from '../utils/debounce';
import { CharacterUIModel } from '../interfaces';

export function useCharacter() {
	const inputText = ref('');
	const selectedStatus = ref('');
	const characters = ref<CharacterUIModel[]>([]);
	const error = ref<string | null>(null);
	const validationError = ref<string | null>(null);
	const loading = ref(false);

	// Paginación
	const currentPage = ref(1);
	const totalPages = ref(1);

	const fetchCharacters = async () => {
		loading.value = true;
		try {
			const validationMessage = validateInput(inputText.value);
			error.value = null;
			if (validationMessage) {
				validationError.value = validationMessage;
				characters.value = [];
				totalPages.value = 1;
				return;
			}
			validationError.value = null;

			const data = await api.getCharacterByName({
				name: inputText.value.trim(),
				status: selectedStatus.value,
				page: currentPage.value,
			});
			characters.value = data.results.map((char: CharacterUIModel) => ({
				id: char.id,
				name: char.name,
				status: char.status,
				image: char.image,
			}));
			totalPages.value = data.info.pages || 1;
		} catch (err) {
			error.value = 'Does not exist any character with that name';
			characters.value = [];
			totalPages.value = 1;
		} finally {
			loading.value = false;
		}
	};

	const debouncedFetchCharacters = debounce(fetchCharacters, 300);

	const handleFilterUpdate = (filter: {
		inputText: string;
		selectedStatus: string;
	}) => {
		inputText.value = filter.inputText;
		selectedStatus.value = filter.selectedStatus;
		currentPage.value = 1;
		debouncedFetchCharacters();
	};

	const changePage = (page: number) => {
		if (page > 0 && page <= totalPages.value) {
			currentPage.value = page;
			debouncedFetchCharacters();
		}
	};

	watch(currentPage, () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	watch([inputText, selectedStatus], () => {
		currentPage.value = 1;
		debouncedFetchCharacters();
	});

	return {
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
	};
}
