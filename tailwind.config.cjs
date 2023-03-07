/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'odd-slide': '#FFFFFF',
				'even-slide': '#F8F9FA'
			}
		}
	},
	plugins: []
};
