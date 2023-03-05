<script>
	import wallpaperSrc from '$lib/assets/wallpaper.png';
	import particlesConfig from '$lib/config/particlesjs.json';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
	import '$lib/styles/normalize.css';
	import '$lib/styles/global.css';

	$: bgImage = `background-image: url("${wallpaperSrc}");`;

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};
	let particlesInit = async (engine) => {
		await loadFull(engine);
	};
</script>

<div class="full-screen background">
	<div style={bgImage} class="stretch background-image" />
	<div class="stretch background-mask">
		<Particles
			id="tsparticles"
			options={particlesConfig}
			on:particlesLoaded={onParticlesLoaded}
			{particlesInit}
		/>
	</div>
	<div class="stretch background-content" />
</div>

<style>
	.background {
		position: relative;
	}

	.background-image {
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: cover;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		z-index: 0;
	}

	.background-mask {
		top: 0;
		left: 0;
		opacity: 0.6;
		background-color: #000000;
		position: absolute;
		z-index: 1;
	}

	.background-content {
		top: 0;
		left: 0;
		position: absolute;
		z-index: 2;
		color: white;
		font-weight: 300;
		font-size: 1.25rem;
		line-height: 1.75rem;
		letter-spacing: 0.025em;
		-webkit-font-smoothing: auto;
		-moz-osx-font-smoothing: auto;
	}
</style>
