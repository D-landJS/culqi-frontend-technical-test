const { defineConfig } = require('cypress');

module.exports = defineConfig({
	component: {
		devServer: {
			framework: 'vue',
			bundler: 'vite',
		},
		specPattern: '**/*.cy.{js,jsx,ts,tsx}',
	},
});
