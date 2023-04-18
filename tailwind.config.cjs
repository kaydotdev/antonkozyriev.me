/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary': '#4A4A4A',
				'secondary': '#CDB8A7',
				'ascent': '#FCF8F3'
			}
		}
	},
	plugins: []
};
