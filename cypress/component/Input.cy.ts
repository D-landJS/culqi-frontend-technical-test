import { mount } from 'cypress/vue';
import Input from '../../src/components/shared/Input.vue';

describe('Input Component', () => {
	it('renders the input with the correct placeholder', () => {
		mount(Input, {
			props: {
				modelValue: '',
				placeholder: 'Find a character',
			},
		});

		cy.get('input.input').should(
			'have.attr',
			'placeholder',
			'Find a character'
		);
	});

	it('updates the input value when typing', () => {
		mount(Input, {
			props: {
				modelValue: '',
				placeholder: 'Find a character',
			},
		});

		cy.get('input.input').type('Rick').should('have.value', 'Rick');
	});
});
