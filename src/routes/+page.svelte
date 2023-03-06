<script>
	import SocialBar from '$lib/components/SocialBar.svelte';

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
			.typeString('an AI/ML Enginner')
			.pauseFor(eraseDelay)
			.start();
	});
</script>

<section id="home" class="w-screen h-screen relative grid">
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
		class="w-full h-full top-0 left-0 absolute z-[2] text-white text-xl tracking-wide subpixel-antialiased flex flex-col justify-center items-center"
	>
		<div class="mb-4 text-3xl font-light">Hello,</div>
		<div id="whoami" class="font-bold text-6xl" />
		<div class="mt-6 flex flex-row items-start">
			<span class="mt-3 border-b border-b-[3] w-12" />
			<span class="text-xl px-2 uppercase">based in Kyiv, Ukraine</span>
			<span class="mt-3 border-b border-b-[3] w-12" />
		</div>
		<SocialBar />
	</div>
	<a
		href="#about"
		class="w-8 h-8 bottom-4 absolute text-white z-[3] place-self-center"
		on:click|preventDefault={(_) =>
			document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="animate-bounce w-8 h-8"
		>
			<path
				fill-rule="evenodd"
				d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
</section>
<section id="about" class="w-screen h-screen relative" />
<section id="skills" class="w-screen h-screen relative" />
<section id="education" class="w-screen h-screen relative" />
<section id="experience" class="w-screen h-screen relative" />
<section id="portfolio" class="w-screen h-screen relative" />
<section id="contact" class="w-screen h-screen relative" />
