import { mount } from 'cypress/vue';
import CharacterFilter from '../../src/components/character/CharacterFilter.vue';

describe('CharacterFilter Component', () => {
	it('should update input text and status on change', () => {
		mount(CharacterFilter, {
			props: {
				modelValue: {
					inputText: '',
					selectedStatus: '',
				},
			},
		});

		cy.get('select').select('alive');
		cy.get('select').should('have.value', 'alive');
	});
});
