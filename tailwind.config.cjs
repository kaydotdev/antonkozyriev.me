/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			width: {
				'max-content': '120rem',
				'192': '48rem'
			},
			lineHeight: {
				'title': '5.5rem'
			},
			screens: {
				'4xl': '1920px'
			},
			colors: {
				'primary': '#4A4A4A',
				'secondary': '#CDB8A7',
				'ascent': '#FCF8F3'
			}
		}
	},
	plugins: []
};
