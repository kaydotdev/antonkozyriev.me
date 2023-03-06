<script>
	import Typewriter from 'typewriter-effect/dist/core';
	import particlesConfig from '$lib/config/particlesjs.json';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
	import { onMount } from 'svelte';

	import wallpaperSrc from '$lib/assets/wallpaper.png';

	$: bgImage = `background-image: url("${wallpaperSrc}");`;

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};
	let particlesInit = async (engine) => {
		await loadFull(engine);
	};

	onMount(() => {
		const typeDelay = 100;
		const eraseDelay = 1500;

		let typewriter = new Typewriter('#whoami', {
			loop: true,
			delay: 75
		});

		typewriter
			.pauseFor(typeDelay)
			.typeString("I'm ")
			.typeString('Anton Kozyriev')
			.pauseFor(eraseDelay)
			.deleteChars(14)
			.pauseFor(typeDelay)
			.typeString('a Backend Developer')
			.pauseFor(eraseDelay)
			.deleteChars(19)
			.pauseFor(typeDelay)
			.typeString('a AI/ML Enginner')
			.pauseFor(eraseDelay)
			.start();
	});
</script>

<div class="w-screen h-screen relative">
	<div style={bgImage} class="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover z-0" />
	<div class="w-full h-full top-0 left-0 opacity-60 bg-black absolute z-[1]">
		<Particles
			id="tsparticles"
			options={particlesConfig}
			on:particlesLoaded={onParticlesLoaded}
			{particlesInit}
		/>
	</div>
	<div
		class="w-full h-full top-0 left-0 absolute z-[2] text-white font-light text-xl tracking-wide subpixel-antialiased flex flex-col justify-center items-center"
	>
		<div id="whoami" class="font-bold text-5xl" />
	</div>
</div>
<div class="w-screen h-screen relative" />
