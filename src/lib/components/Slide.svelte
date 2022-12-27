<script>
	import Image from './Image.svelte';
	import Navbar from './Navbar.svelte';
	import wallpaperSrc from '$lib/assets/wallpaper.png';
	import '$lib/styles/normalize.css';
</script>

<div class="slide full-screen">
	<div class="wallpaper">
		<svg
			viewBox="0 0 540 960"
			width="540"
			height="960"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><rect x="0" y="0" width="540" height="960" fill="#00000000" /><path
				d="M430 960L427 928C424 896 418 832 426.5 768C435 704 458 640 458.7 576C459.3 512 437.7 448 442.2 384C446.7 320 477.3 256 489.8 192C502.3 128 496.7 64 493.8 32L491 0L540 0L540 32C540 64 540 128 540 192C540 256 540 320 540 384C540 448 540 512 540 576C540 640 540 704 540 768C540 832 540 896 540 928L540 960Z"
				fill="#FFFFFF"
				stroke-linecap="round"
				stroke-linejoin="miter"
			/></svg
		>
		<Image
			width={600}
			height={750}
			hash="LWNKho4:bcW=.TIoWXof00ogayWB"
			src={wallpaperSrc}
			imgAlt="Slide wallpaper"
			objectCover
		/>
	</div>
	<div class="content stretch"><slot /></div>
	<div class="navigation"><Navbar /></div>
	<div class="theme" />
	<div class="expansion" />
</div>

<style>
	.slide {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 4em 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'navigation'
			'content';
	}

	.wallpaper {
		display: none;
		position: relative;
		background-color: #ffffff;
		grid-area: wallpaper;
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
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-left-style: none;
		border-color: #e2e8f0;
		background-color: #ffffff;
		grid-area: navigation;
	}

	.theme {
		border-color: #e2e8f0;
		display: none;
		grid-area: theme;
	}

	.expansion {
		border-color: #e2e8f0;
		display: none;
		grid-area: expansion;
	}

	@media (min-width: 1024px) {
		.slide {
			grid-template-columns: 0.4fr 1fr 4em;
			grid-template-rows: 4em 1fr 4em;
			grid-template-areas:
				'wallpaper content theme'
				'wallpaper content navigation'
				'wallpaper content expansion';
		}

		.wallpaper {
			display: block;
		}

		.navigation {
			border-left-width: 1px;
			border-left-style: solid;
			border-bottom-style: none;
		}

		.theme {
			border-left-width: 1px;
			border-left-style: solid;
			border-bottom-style: none;
			display: block;
		}

		.expansion {
			border-left-width: 1px;
			border-left-style: solid;
			border-bottom-style: none;
			display: block;
		}
	}
</style>
