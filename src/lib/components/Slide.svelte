<script>
	import wallpaperSrc from '$lib/assets/wallpaper.jpg';
	import '$lib/styles/normalize.css';
</script>

<div class="slide full-screen">
	<div class="wallpaper">
		<svg
			viewBox="0 0 900 1600"
			width="900"
			height="1600"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><rect x="0" y="0" width="900" height="1600" fill="#00000000" /><path
				d="M725 1600L864 0L900 0L900 1600Z"
				fill="#FFFFFF"
				stroke-linecap="round"
				stroke-linejoin="miter"
			/></svg
		>
		<img loading="lazy" class="wallpaper-img stretch" src={wallpaperSrc} alt="Slide wallpaper" />
	</div>
	<div class="content stretch"><slot /></div>
	<div class="navigation" />
</div>

<style>
	.slide {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas: 'content';
	}

	.wallpaper {
		display: none;
		position: relative;
		background-color: #adcccd;
		grid-area: wallpaper;
	}

	.wallpaper-img {
		object-fit: cover;
	}

	.wallpaper svg {
		right: 0;
		position: absolute;
	}

	.content {
		background-color: #ffffff;
		grid-area: content;
	}

	.navigation {
		display: none;
		background-color: #ffffff;
		grid-area: navigation;
	}

	@media (min-width: 1024px) {
		.slide {
			grid-template-columns: 0.5fr 1fr 8em;
			grid-template-areas: 'wallpaper content navigation';
		}

		.wallpaper {
			display: block;
		}

		.navigation {
			display: block;
		}
	}
</style>
